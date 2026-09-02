# Infraestructura AWS

Infraestructura separada de la aplicación. Ningún comando de despliegue se ejecuta automáticamente.

## Contenido

- `bootstrap-template.yaml`: GitHub OIDC, roles restringidos y bucket privado de artefactos.
- `template.yaml`: API Gateway REST, modelo/validador, Lambda Node.js 24, SES, SNS cifrado, WAF y alarmas.
- `hosting-template.yaml`: S3 privado, CloudFront OAC, rutas estáticas, 404 y cabeceras de seguridad.
- `src/contact/handler.ts`: contrato estricto de contacto, antispam y envío SES v2.
- `scripts/publish-static.sh`: sincronización de `out/` e invalidación de CloudFront.
- `scripts/check-ses.sh`: comprobación de solo lectura de SES.
- `scripts/configure-ses-mail-from.sh`: configura MAIL FROM en SES; no modifica DNS.

## Bootstrap de acceso sin root

Este stack se ejecuta una sola vez desde una sesión humana federada con MFA. No crea usuarios IAM, access keys ni `AdministratorAccess`. Si todavía solo existe acceso root, primero configura IAM Identity Center u otro proveedor corporativo y prueba ese acceso; después elimina las credenciales root únicamente cuando el acceso alternativo esté verificado.

El rol de GitHub acepta la rama configurada para preview y el GitHub Environment protegido `production`, siempre con audiencia `sts.amazonaws.com`. GitHub puede administrar únicamente stacks `sevenbs-web-*` y `sevenbs-contact-*` pasando el rol de ejecución de CloudFormation; no puede modificar el stack de acceso ni sus propios roles. También puede subir artefactos al bucket privado, publicar en buckets `7bs-web-*`, invalidar distribuciones etiquetadas `Application=7businesssolutions-web` y leer únicamente los estados de ACM, SES y API Gateway usados en los gates. El rol de ejecución enumera los servicios usados por `template.yaml` y `hosting-template.yaml`; no tiene permisos de cuenta completa.

Si la cuenta ya tiene el proveedor OIDC global de GitHub, pasa su ARN para no intentar duplicarlo:

```bash
cd infra
./scripts/validate-bootstrap.sh

aws cloudformation deploy \
  --template-file bootstrap-template.yaml \
  --stack-name sevenbs-access-bootstrap \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameter-overrides \
    ExistingGitHubOidcProviderArn=arn:aws:iam::<cuenta>:oidc-provider/token.actions.githubusercontent.com
```

Omite `ExistingGitHubOidcProviderArn` si no existe. La plantilla deja que IAM obtenga la huella de la CA de GitHub, evitando fijar una huella caducable. Usa los outputs `GitHubDeployRoleArn`, `CloudFormationExecutionRoleArn` y `ArtifactBucketName` en GitHub Actions. `GitHubProductionSubject` debe ser `repo:<owner>/<repo>:environment:production`. Los workflows requieren `permissions: { id-token: write, contents: read }` y cada `sam deploy`/`aws cloudformation deploy` debe pasar `--role-arn <CloudFormationExecutionRoleArn>`.

El bootstrap no debe desplegarse con root. Tampoco configura el acceso humano: la federación con MFA es un prerrequisito independiente.

## Contrato de contacto

`POST https://api.7businesssolutions.com/v1/contact`, `Content-Type: application/json`:

```json
{
  "name": "Nombre Apellido",
  "company": "Empresa",
  "email": "persona@empresa.com",
  "phone": "+52 55 0000 0000",
  "service": "initial-diagnosis",
  "message": "Descripción de al menos diez caracteres.",
  "topic": "operations",
  "locale": "es",
  "privacyAccepted": true,
  "website": "",
  "formStartedAt": 1784040000000
}
```

Servicios válidos: `software-factory`, `enterprise-integration`, `cloud-data`, `operational-ai`, `enterprise-copilot`, `initial-diagnosis`.

Temas opcionales: `copilot`, `software`, `finance`, `operations`, `hr`, `reporting`, `sap`, `automation`, `support`, `governance`.

El modelo de API Gateway valida forma, campos obligatorios y longitudes. Lambda vuelve a validar, rechaza propiedades desconocidas, comprueba honeypot/tiempo y aplica el límite total exacto de 10 KiB. Las respuestas usan códigos estables: `CONTACT_SENT`, `INVALID_REQUEST`, `BOT_REJECTED`, `RATE_LIMITED` y `TEMPORARY_ERROR`.

SES usa `ventas@7businesssolutions.com` como remitente y destinatario. La dirección del visitante solo se usa en `Reply-To`. No se guarda el lead en AWS. Los logs duran 30 días y solo incluyen identificador de solicitud, estado y nombre genérico del error; nunca el cuerpo ni el correo.

## Validación local

Requisitos: Node.js 22 o superior. Para validar CloudFormation completo, instala además AWS SAM CLI y `cfn-lint`.

```bash
cd infra
./scripts/validate.sh
```

El handler se despliega en `nodejs24.x`; Lambda ya soporta ese runtime. El build local funciona también desde Node.js 22.

## Prerrequisitos de despliegue

1. Usar un rol federado con MFA; no desplegar con root ni con claves permanentes.
2. Verificar `7businesssolutions.com` en SES en la misma región de la API y confirmar DKIM.
3. Tener un certificado ACM `ISSUED` en `us-east-1` que cubra `7businesssolutions.com` y `*.7businesssolutions.com`; sirve tanto para CloudFront como para el API regional en esa región.
4. Mantener en `SUCCESS` la identidad SES, DKIM y custom MAIL FROM. El lanzamiento limitado a México puede operar en sandbox solo si remitente y destinatario son exactamente `ventas@7businesssolutions.com`; cualquier destinatario distinto exige acceso productivo de SES y el gate explícito del workflow.
5. Confirmar que `out/404.html` existe antes de publicar.
6. Contar con revisión legal final. El workflow actual fija `NEXT_PUBLIC_EU_MARKET_ENABLED=false`; habilitar el mercado UE requiere su revisión y prerrequisitos independientes.

`AWS::ApiGateway::Account` es único por cuenta y región. `sevenbs-contact-preview` es su único propietario en esta arquitectura; ambos recursos tienen retención y el stack de producción los omite automáticamente mediante `OwnsRegionalApiGatewayAccount`. Antes de producción, el workflow comprueba que la asociación regional y el rol retenido sigan existiendo. No se deben añadir copias del recurso a otros stacks.

## API y SES

Validar y compilar, sin crear recursos:

```bash
cd infra
sam validate --lint --template-file template.yaml
sam build --template-file template.yaml
```

Primer despliegue guiado de preview:

```bash
sam deploy --guided \
  --template-file .aws-sam/build/template.yaml \
  --stack-name sevenbs-contact-preview \
  --capabilities CAPABILITY_NAMED_IAM
```

Valores de preview:

```text
Environment=preview
AllowedOrigin=https://preview.7businesssolutions.com
ApiDomainName=api.7businesssolutions.com
ApiCertificateArn=<certificado ACM regional>
OperationsEmail=<correo operativo o vacío>
```

El stack devuelve el destino y hosted zone para el registro DNS de `api`. No crea ni cambia registros DNS.

Comprobar SES sin cambios:

```bash
./scripts/check-ses.sh <region> 7businesssolutions.com
```

Configurar custom MAIL FROM cuando sus registros DNS estén preparados:

```bash
./scripts/configure-ses-mail-from.sh \
  <region> \
  7businesssolutions.com \
  mail.7businesssolutions.com
```

El modo predeterminado de producción es `sandbox`. CloudFormation exige un solo buzón para remitente y destinatario, limita la función Lambda con `ses:Recipients` y reduce el throttle de API Gateway a una solicitud por segundo. El workflow comprueba que la cuenta siga en sandbox, que el dominio esté verificado y que DKIM y custom MAIL FROM estén en `SUCCESS`.

Para solicitar salida del sandbox, usa SES **Account dashboard → Request production access** con tipo `TRANSACTIONAL`, URL `https://www.7businesssolutions.com`, volumen inicial conservador y explicación: formularios iniciados por el usuario, sin listas compradas, supresión automática de rebotes/quejas y buzón corporativo único. No habilites destinatarios externos hasta que AWS confirme `ProductionAccessEnabled=true`.

Después de la aprobación, selecciona `ses_access_mode=production`. Un destinatario diferente también requiere `enable_external_ses_recipient=true`; el workflow falla si falta cualquiera de ambos gates. CloudFormation conserva la restricción a un solo buzón mientras esa autorización explícita permanezca en `false`.

## Hosting de preview

La plantilla de hosting se despliega con CloudFormation porque no contiene recursos SAM:

```bash
aws cloudformation deploy \
  --template-file hosting-template.yaml \
  --stack-name sevenbs-web-preview \
  --parameter-overrides \
    Environment=preview \
    SiteDomainName=preview.7businesssolutions.com \
    CloudFrontCertificateArn=<certificado-us-east-1> \
    ContactApiOrigin=https://api.7businesssolutions.com
```

Después, usa `SiteBucketName` y `DistributionId` de los outputs:

```bash
./scripts/publish-static.sh ../out <bucket> <distribution-id>
```

El output `PreviewDnsTarget` indica el CNAME/alias que debe crearse manualmente. Validar preview antes de crear el stack de producción.

## Hosting de producción

El despliegue de producción se ejecuta únicamente con `.github/workflows/deploy-production.yml`, desde la rama por defecto y dentro del GitHub Environment `production`. Configura revisores obligatorios en ese Environment y estas variables, sin credenciales AWS permanentes:

```text
AWS_DEPLOY_ROLE_ARN
AWS_CLOUDFORMATION_EXECUTION_ROLE_ARN
AWS_ARTIFACT_BUCKET
AWS_PRODUCTION_CERTIFICATE_ARN
NEXT_PUBLIC_LEGAL_REVIEWED=true
SES_SENDER_EMAIL=ventas@7businesssolutions.com
SES_RECIPIENT_EMAIL=ventas@7businesssolutions.com
SES_OPERATIONS_EMAIL=ventas@7businesssolutions.com
```

Antes del primer run, una persona con acceso federado y MFA debe actualizar `sevenbs-access-bootstrap` con esta versión de `bootstrap-template.yaml`. Así se autoriza el subject OIDC del Environment `production` y las comprobaciones de solo lectura. Verifica el output `GitHubProductionSubject`; no hagas esta actualización con root.

El workflow exige confirmación escrita, acceso humano federado con MFA, certificado emitido, revisión legal y envío real de prueba. Para el lanzamiento limitado a México acepta SES sandbox únicamente con remitente y destinatario idénticos bajo el dominio verificado. Compila con `NEXT_PUBLIC_LAUNCH_READY=true` y `NEXT_PUBLIC_EU_MARKET_ENABLED=false`, despliega `sevenbs-contact-production` y `sevenbs-web-production`, prueba por los dominios temporales de AWS y publica el traspaso DNS en el resumen. No crea, elimina ni cambia registros DNS.

El equivalente manual de la parte de hosting es:

```bash
aws cloudformation deploy \
  --template-file hosting-template.yaml \
  --stack-name sevenbs-web-production \
  --parameter-overrides \
    Environment=production \
    SiteDomainName=www.7businesssolutions.com \
    CloudFrontCertificateArn=<certificado-us-east-1> \
    ContactApiOrigin=https://api.7businesssolutions.com
```

No se pasa `ApexDomainName` mientras Squarespace gestione DNS: un CNAME no es válido en el apex y Squarespace realizará el redireccionamiento. Los outputs de CloudFormation documentan el traspaso:

- `SiteDnsRecordName`, `SiteDnsRecordType` y `WwwDnsTarget`: CNAME de `www` a CloudFront.
- `ApiDnsRecordName`, `ApiDnsRecordType` y `ApiDnsTarget`: CNAME de `api` al dominio regional de API Gateway.
- `SquarespaceApexForward*`: forwarding `@` a `https://www.7businesssolutions.com`, 301 y conservación de rutas.
- Los registros de validación ACM se imprimen en el resumen del workflow y deben conservarse.

Orden del corte en Squarespace, siempre después de que el workflow termine correctamente:

1. Guardar una exportación o capturas completas de DNS.
2. Añadir el CNAME de validación ACM y esperar `ISSUED` antes del workflow.
3. Añadir `api CNAME <ApiDnsTarget>`.
4. Sustituir únicamente el CNAME `www` de Squarespace por `<WwwDnsTarget>`.
5. Configurar forwarding `@` a `www.7businesssolutions.com`, permanente 301 y `Maintain paths`. Hacerlo al final porque Squarespace bloquea la edición DNS mientras el forwarding está activo.
6. Confirmar HTTPS, formulario, 404, `/en`, sitemap y redirección del apex.

Antes del corte:

- Enviar un contacto real y confirmar recepción y `Reply-To`.
- Confirmar `200`, `400`, `403`, `429`, `500` y 404 real.
- Conservar sin cambios MX, SPF, DKIM y DMARC de Google Workspace, los tres CNAME DKIM de SES y los registros MX/TXT de custom MAIL FROM.
- No habilitar logs de acceso CloudFront/WAF sin un proceso explícito de minimización y retención: contienen IP y otros datos del visitante.
