# Vexar Consulting · Sitio corporativo

Sitio corporativo de la consultora tecnológica construido como aplicación
estática con **Next.js (App Router) + TypeScript + Tailwind CSS**. Diseñado
para desplegarse en **AWS S3 + CloudFront**.

Producto estrella destacado en el sitio: **Copiloto Empresarial**.

## Stack

- Next.js 15 (App Router)
- TypeScript estricto
- Tailwind CSS
- `lucide-react` para iconografía
- `clsx` + `tailwind-merge` para composición de clases
- Export estático (`output: "export"`) sin SSR dinámico ni API routes

## Estructura

```
app/
├── layout.tsx              # Layout raíz (Navbar + Footer)
├── page.tsx                # Home
├── globals.css             # Tailwind + estilos base
├── services/               # Servicios (overview + 4 detalles)
├── copilot/                # Copiloto Empresarial (3 subpáginas)
├── industries/             # Industrias / casos de uso
├── experience/             # Experiencia
└── contact/                # Contacto

components/
├── layout/                 # Navbar, MegaMenu, MobileNav, Footer
├── home/                   # Secciones de la home
├── copilot/                # Secciones del Copiloto Empresarial
├── services/               # Hero, grid y detalle de servicios
├── contact/                # ContactForm
└── ui/                     # Button, Card, Section, Badge

lib/
├── navigation.ts           # NAVIGATION y FOOTER_LINKS
├── site-data.ts            # Datos de servicios, copiloto, industrias
├── constants.ts            # SITE, contacto, endpoint
└── utils.ts                # cn()

public/
├── favicon.svg
└── logo.svg
```

## Desarrollo local

Requisitos: Node.js 18.18+ (recomendado 20+) y npm.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

### Scripts disponibles

| Script              | Descripción                                       |
| ------------------- | ------------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo                            |
| `npm run build`     | Build estático (`out/` listo para S3)             |
| `npm run start`     | Sirve el build (`out/`) — útil para validar local |
| `npm run lint`      | Lint con ESLint (next/core-web-vitals)            |
| `npm run typecheck` | Verifica tipos sin emitir (`tsc --noEmit`)        |

## Build estático para S3 + CloudFront

`next.config.ts` ya incluye:

```ts
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};
```

Para generar el sitio:

```bash
npm run build
```

Se genera la carpeta `out/` con HTML/CSS/JS estático.

### Despliegue en AWS

1. Crear bucket S3 (sin acceso público directo si vas a usar CloudFront con
   OAC, o configurarlo como sitio estático si no).
2. Subir el contenido de `out/` al bucket:

   ```bash
   aws s3 sync out/ s3://<tu-bucket> --delete
   ```

3. Crear distribución de CloudFront apuntando al bucket.
4. Configurar `index.html` como default root object.
5. Para rutas internas tipo `/copilot/`, `trailingSlash: true` ya genera
   las páginas como carpetas con `index.html` dentro, por lo que CloudFront
   las sirve correctamente sin reglas adicionales.
6. Habilitar HTTPS con un certificado en ACM (us-east-1).

### Invalidaciones

Tras cada despliegue:

```bash
aws cloudfront create-invalidation \
  --distribution-id <ID> \
  --paths "/*"
```

## Formulario de contacto

El formulario (`components/contact/ContactForm.tsx`) valida del lado cliente
y envía un `POST` JSON a la variable pública:

```
NEXT_PUBLIC_CONTACT_ENDPOINT
```

Está pensada para apuntar a **API Gateway → Lambda → SES**.

- Si la variable está vacía en build time, el formulario muestra un estado
  controlado indicando que falta conectar el endpoint corporativo.
- No se usa una API route de Next.js (rompería el export estático).

Configura la variable en `.env.local` (copia de `.env.example`) antes de
ejecutar `npm run build`.

## Convenciones

- **Naming:** componentes en PascalCase, archivos `.tsx` por componente.
- **Imports:** ruta absoluta vía alias `@/*` (configurado en `tsconfig.json`).
- **Estilos:** Tailwind utility-first con tokens en `tailwind.config.ts`
  (`brand`, `ink`, `accent`). Sin CSS modules.
- **Datos:** todo el contenido editorial vive en `lib/site-data.ts` y
  `lib/navigation.ts` para facilitar mantenimiento.

## Reglas del proyecto

- El producto estrella se llama **Copiloto Empresarial**. No usar otros nombres
  hasta que el cliente defina el nombre comercial final.
- El sitio no es una landing larga: tiene rutas internas reales y navegación
  jerárquica.
- No incorporar dependencias o features que rompan la exportación estática.
