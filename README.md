# Sitio corporativo · Consultora Tech

Sitio corporativo de la consultora tecnológica construido como aplicación
**estática** con **Next.js 15 (App Router) + TypeScript + Tailwind CSS**.
Diseñado para desplegarse en **AWS S3 + CloudFront**.

Producto estrella destacado en todo el sitio: **Copiloto Empresarial**.

> Nota: el nombre comercial mostrado en el sitio es un placeholder
> ("Consultora"). Está centralizado en `lib/constants.ts` con la marca
> `TODO_CLIENTE` para sustituirlo cuando el cliente lo confirme.

---

## Stack

- Next.js 15 (App Router)
- TypeScript estricto
- Tailwind CSS 3
- `lucide-react` para iconografía
- `clsx` + `tailwind-merge` para composición de clases
- ESLint 9 (flat config) + `eslint-config-next`
- Export estático (`output: "export"`) sin SSR dinámico ni API routes

---

## Estructura

```
app/
├── layout.tsx              # Layout raíz (Navbar + Footer + metadata global)
├── page.tsx                # Home
├── globals.css             # Tailwind + estilos base
├── sitemap.ts              # sitemap.xml (estático)
├── robots.ts               # robots.txt (estático)
├── services/               # Overview + 4 detalles
├── copilot/                # Copiloto Empresarial (3 subpáginas)
├── industries/             # Industrias / casos de uso
├── experience/             # Experiencia
├── contact/                # Contacto
├── privacy/                # Aviso de privacidad
└── legal/                  # Aviso legal

components/
├── layout/                 # Navbar, MegaMenu, MobileNav, Footer, Logo
├── home/                   # Secciones de la home
├── copilot/                # Secciones del Copiloto Empresarial
├── services/               # Hero, grid y detalle de servicios
├── contact/                # ContactForm
└── ui/                     # Button, Card, Section, Badge

lib/
├── navigation.ts           # NAVIGATION (mega-menús) y FOOTER_LINKS
├── site-data.ts            # Datos de servicios, copiloto, industrias
├── constants.ts            # SITE, contacto, social, URL — placeholders TODO_CLIENTE
└── utils.ts                # cn()

public/
├── favicon.svg
├── logo.svg
└── og-image.svg            # Imagen OG / Twitter card

.github/
└── workflows/ci.yml        # Pipeline: ci, typecheck, lint, build
```

---

## Desarrollo local

Requisitos: Node.js 18.18+ (recomendado 20+) y npm.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

### Scripts

| Script              | Descripción                                       |
| ------------------- | ------------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo                            |
| `npm run build`     | Build estático (`out/` listo para S3)             |
| `npm run start`     | Sirve el build de producción                      |
| `npm run lint`      | Lint con ESLint (flat config + next)              |
| `npm run typecheck` | Verifica tipos sin emitir (`tsc --noEmit`)        |

---

## Variables de entorno

Copia `.env.example` a `.env.local` antes de correr `npm run dev`
o `npm run build`. Todas las variables están prefijadas con
`NEXT_PUBLIC_` porque se inyectan en build time y se exponen al
cliente (sitio estático, no hay runtime de servidor).

| Variable                       | Para qué se usa                                      |
| ------------------------------ | ---------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`         | Dominio canónico. Alimenta OG, sitemap y robots.     |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | URL del API Gateway al que postea el formulario.     |

Si `NEXT_PUBLIC_CONTACT_ENDPOINT` queda vacía, el formulario muestra un
estado controlado avisando que aún falta conectar el endpoint
corporativo (sin enviar a un backend inventado).

> `out/` se genera con `npm run build` y **no se commitea** (está en
> `.gitignore`). Se sube directamente a S3 desde la máquina de despliegue
> o desde el pipeline de CI.

---

## Build estático

`next.config.ts` ya incluye:

```ts
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};
```

Para generar el sitio:

```bash
npm run build
```

Se genera la carpeta `out/` con HTML/CSS/JS estático. `trailingSlash: true`
hace que cada ruta se sirva como carpeta con `index.html` (`/copilot/`,
`/services/cloud-data/`), lo que CloudFront sirve sin reglas adicionales.

---

## Despliegue en AWS S3 + CloudFront

### 1. Bucket S3

- Recomendado: bucket privado + **Origin Access Control (OAC)** de
  CloudFront. No exponer el bucket directamente.
- Alternativa rápida: bucket con "Static website hosting" activo (más
  acoplado, sin HTTPS nativo).

### 2. Subir el contenido del build

```bash
aws s3 sync out/ s3://<tu-bucket> --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "*.html" --exclude "sitemap.xml" --exclude "robots.txt"

aws s3 sync out/ s3://<tu-bucket> \
  --cache-control "public, max-age=60, must-revalidate" \
  --exclude "*" \
  --include "*.html" --include "sitemap.xml" --include "robots.txt"
```

- Los assets de `_next/` llevan hash y pueden cachearse por largo tiempo.
- Los HTML, sitemap y robots se cachean corto para que un redeploy se
  refleje rápido.

### 3. CloudFront

- Origin: bucket S3 (vía OAC).
- Default root object: `index.html`.
- Política de cache: usa la cache de CloudFront por defecto o
  `CachingOptimized`.
- Certificado ACM en `us-east-1` para HTTPS.
- Comportamiento de error: si quieres páginas 404 personalizadas, mapea
  `403/404` → `/404/index.html` con HTTP 200.

### 4. Invalidación tras cada deploy

```bash
aws cloudfront create-invalidation \
  --distribution-id <ID> \
  --paths "/*"
```

---

## Formulario de contacto

El formulario (`components/contact/ContactForm.tsx`) valida del lado
cliente y postea JSON al endpoint configurado en
`NEXT_PUBLIC_CONTACT_ENDPOINT`. Está pensado para una arquitectura
**API Gateway → Lambda → SES** en AWS:

1. **API Gateway (HTTP API)** publica un endpoint público `POST /contact`.
2. **Lambda** (Node.js o Python) valida el payload y construye el correo.
3. **SES** envía al buzón corporativo del cliente.

Si la variable está vacía en build time, el formulario muestra un
mensaje controlado para evitar enviar a un backend inventado.

> Nota: el sitio NO usa API routes de Next.js (`app/api/*`) porque
> rompería el export estático.

---

## CI

El workflow `.github/workflows/ci.yml` corre en `push`/`pull_request`
contra `main` y ejecuta:

1. `npm ci`
2. `npm run typecheck`
3. `npm run lint`
4. `npm run build`
5. Sube `out/` como artefacto.

No incluye `aws s3 sync` ni invalidación de CloudFront porque
**aún no hay credenciales AWS configuradas**. Cuando estén, basta con
añadir un job adicional con OIDC contra un rol de IAM dedicado.

---

## Pendientes del cliente (`TODO_CLIENTE`)

Centralizados en `lib/constants.ts`:

- [ ] Nombre comercial final (sustituir el placeholder "Consultora").
- [ ] Dominio definitivo en `NEXT_PUBLIC_SITE_URL`.
- [ ] Email corporativo en `SITE.contact.email`.
- [ ] Teléfono comercial en `SITE.contact.phone`.
- [ ] Dirección visible en `SITE.contact.address`.
- [ ] URLs reales en `SITE.social.linkedin` / `SITE.social.github`
      (si quedan `null`, no se renderizan).
- [ ] Endpoint real en `NEXT_PUBLIC_CONTACT_ENDPOINT`.
- [ ] Revisión legal de `/privacy` y `/legal` antes de publicar.

---

## Convenciones

- **Naming:** componentes en PascalCase, archivos `.tsx` por componente.
- **Imports:** alias absoluto `@/*` (configurado en `tsconfig.json`).
- **Estilos:** Tailwind utility-first con tokens en `tailwind.config.ts`
  (`brand`, `ink`, `accent`). Sin CSS modules.
- **Datos:** contenido editorial en `lib/site-data.ts` y
  `lib/navigation.ts` para facilitar mantenimiento.

## Reglas del proyecto

- El producto estrella se llama **Copiloto Empresarial**. No usar
  "NEXUS" ni "consola" como nombre comercial.
- El sitio no es una landing larga: tiene rutas internas reales y
  navegación jerárquica.
- No incorporar dependencias o features que rompan la exportación
  estática (API routes dinámicas, SSR, etc.).
