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

El rol de GitHub acepta solo la rama configurada (por defecto, `agent/puesta-produccion-bilingue`) y audiencia `sts.amazonaws.com`. GitHub puede administrar únicamente stacks `sevenbs-web-*` y `sevenbs-contact-*` pasando el rol de ejecución de CloudFormation; no puede modificar el stack de acceso ni sus propios roles. También puede subir artefactos al bucket privado, publicar en buckets `7bs-web-*` e invalidar distribuciones etiquetadas `Application=7businesssolutions-web`. El rol de ejecución enumera los servicios usados por `template.yaml` y `hosting-template.yaml`; no tiene permisos de cuenta completa.

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

Omite `ExistingGitHubOidcProviderArn` si no existe. La plantilla deja que IAM obtenga la huella de la CA de GitHub, evitando fijar una huella caducable. Usa los outputs `GitHubDeployRoleArn`, `CloudFormationExecutionRoleArn` y `ArtifactBucketName` en GitHub Actions. El workflow requiere `permissions: { id-token: write, contents: read }` y cada `sam deploy`/`aws cloudformation deploy` debe pasar `--role-arn <CloudFormationExecutionRoleArn>`.

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

Temas opcionales: `copilot`, `finance`, `operations`, `hr`, `reporting`, `sap`, `automation`, `support`, `governance`.

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
3. Tener un certificado ACM regional para `api.7businesssolutions.com` antes de activar ese alias. Sin certificado, el stack expone temporalmente la URL `execute-api`.
4. Tener un certificado ACM en `us-east-1` para `preview.7businesssolutions.com`; el certificado de producción debe cubrir `www.7businesssolutions.com` y `7businesssolutions.com`. Sin certificado, preview puede probarse primero en el dominio de CloudFront.
5. Confirmar que `out/404.html` existe antes de publicar.

`AWS::ApiGateway::Account` configura el rol de logs a nivel de cuenta/región. Si ya existe uno administrado por otro stack, reutiliza ese rol y elimina `ApiGatewayAccount` y `ApiGatewayCloudWatchRole` de esta plantilla antes del primer despliegue.

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

Para solicitar salida del sandbox, usa SES **Account dashboard → Request production access** con tipo `TRANSACTIONAL`, URL `https://www.7businesssolutions.com`, volumen inicial conservador y explicación: formularios iniciados por el usuario, sin listas compradas, supresión automática de rebotes/quejas y buzón corporativo único. No cambies DNS ni producción hasta que AWS confirme `ProductionAccessEnabled=true`.

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

```bash
aws cloudformation deploy \
  --template-file hosting-template.yaml \
  --stack-name sevenbs-web-production \
  --parameter-overrides \
    Environment=production \
    SiteDomainName=www.7businesssolutions.com \
    ApexDomainName=7businesssolutions.com \
    CloudFrontCertificateArn=<certificado-us-east-1> \
    ContactApiOrigin=https://api.7businesssolutions.com
```

Crear los alias/CNAME solo después del smoke test por el dominio de CloudFront. Los outputs `WwwDnsTarget` y `ApexDnsTarget` apuntan a la misma distribución; la función de borde redirige el apex a `www` y conserva ruta y query string.

Antes del corte:

- Cambiar `AllowedOrigin` del stack de contacto a `https://www.7businesssolutions.com`.
- Enviar un contacto real y confirmar recepción y `Reply-To`.
- Confirmar `200`, `400`, `403`, `429`, `500` y 404 real.
- Conservar sin cambios MX, SPF, DKIM y DMARC de Google Workspace.
- No habilitar logs de acceso CloudFront/WAF sin un proceso explícito de minimización y retención: contienen IP y otros datos del visitante.
