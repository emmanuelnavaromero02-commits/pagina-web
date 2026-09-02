# 7 Business Solutions

Sitio corporativo estático bilingüe de 7 Business Solutions. Las URL actuales publican español neutro y sus equivalentes en inglés viven bajo `/en`.

## Tecnología

- Next.js 15, React 19, TypeScript estricto y Tailwind CSS 3.
- Export estático: dos builds localizados se combinan en un único `out/`.
- API de contacto e infraestructura AWS declaradas en `infra/`.
- Canonical de producción: `https://www.7businesssolutions.com`.

## Uso local

```bash
npm ci
npm run dev
```

El servidor de desarrollo usa español. El build completo genera ambos idiomas:

```bash
npm run typecheck
npm run lint
npm run build
npm run validate:export
npm run start
```

## Variables de build

Copia `.env.example` a `.env.local`. Todas son públicas porque se incorporan al sitio estático; nunca deben contener secretos.

- `NEXT_PUBLIC_CONTACT_ENDPOINT`: API pública del formulario.
- `NEXT_PUBLIC_LAUNCH_READY`: activa indexación y validaciones de lanzamiento.
- `NEXT_PUBLIC_LEGAL_REVIEWED`: confirma la revisión legal final.
- `NEXT_PUBLIC_EU_MARKET_ENABLED`: activa declaraciones comerciales y obligaciones configuradas para el mercado de la Unión Europea; por defecto es `false` y el sitio se presenta únicamente para México.
- `NEXT_PUBLIC_EU_REP_*`: representante requerido cuando el mercado UE está activo.

Cuando `NEXT_PUBLIC_LAUNCH_READY=true`, el build falla si falta el endpoint o la revisión legal. El representante UE solo se exige cuando `NEXT_PUBLIC_EU_MARKET_ENABLED=true`. Sin endpoint, el formulario informa que no está configurado y nunca muestra un éxito simulado.

## Rutas y SEO

- 52 rutas canónicas por idioma; 104 URL en sitemap.
- `hreflang` para `es`, `en` y `x-default`.
- Metadata y Open Graph localizados.
- JSON-LD `Organization`, `WebSite`, `Service` y `Person` sin ratings ni `LocalBusiness`.
- 404 y límites de error personalizados.

## Contacto y privacidad

El formulario envía únicamente a `ventas@7businesssolutions.com` mediante API Gateway, Lambda y SES. El visitante se utiliza como `Reply-To`; AWS no almacena leads. Los logs técnicos no incluyen el cuerpo y se eliminan a los 30 días.

El lanzamiento actual y sus avisos jurídicos se limitan al mercado mexicano. La activación comercial de la Unión Europea permanece bloqueada hasta completar sus requisitos específicos y el representante correspondiente.

## AWS

Consulta [`infra/README.md`](infra/README.md) para validar y desplegar API Gateway, Lambda, SES, WAF, S3 privado y CloudFront. El procedimiento preserva los registros MX, SPF, DKIM y DMARC de Google Workspace.

## Reglas de contenido

- No publicar métricas, clientes, certificaciones, logos, testimonios o fotografías sin evidencia y autorización.
- Presentar capacidades como experiencia del equipo; la sociedad inició operaciones en 2026.
- Conservar como marcas `7 Business Solutions`, `Agentes de Decisión IA`, SAP y nombres técnicos. La ruta histórica `/copilot` se mantiene por compatibilidad, pero no forma parte del nombre visible del producto.
