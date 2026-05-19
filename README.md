# 7 Business Solutions · Corporate site

Corporate site for **7 Business Solutions** — an intelligent business
solutions firm helping companies in Mexico and Spain. Built as a static
**Next.js 15 (App Router) + TypeScript + Tailwind CSS** application,
designed to be deployed to **AWS S3 + CloudFront**.

Flagship product: **Enterprise Copilot**.

---

## Stack

- Next.js 15 (App Router)
- TypeScript (strict)
- Tailwind CSS 3
- `lucide-react` for icons
- `clsx` + `tailwind-merge`
- ESLint 9 (flat config) + `eslint-config-next`
- Static export (`output: "export"`) — no SSR, no API routes

---

## Structure

```
app/
├── layout.tsx              # Root layout (Navbar + Footer + global metadata)
├── page.tsx                # Home
├── globals.css             # Tailwind + base styles
├── sitemap.ts              # sitemap.xml
├── robots.ts               # robots.txt
├── services/               # Overview + 4 service detail pages
├── copilot/                # Enterprise Copilot (3 subpages)
├── industries/             # Industries / use cases
├── experience/             # Experience and capabilities
├── contact/                # Contact form and process
├── privacy/                # Privacy Policy
└── legal/                  # Legal Notice

components/
├── layout/                 # Navbar, MegaMenu, MobileNav, Footer, Logo
├── home/                   # Home sections (Hero, Quick Wins, 7 Pillars, etc.)
├── copilot/                # Enterprise Copilot sections
├── services/               # Service hero, grid, deep-dives
├── experience/             # Experience tracks + education
├── contact/                # ContactForm + AfterSteps
├── sections/               # Reusable DeepDiveBlock
└── ui/                     # Button, Card, Section, Badge, Tabs

lib/
├── constants.ts            # SITE brand + TODO_CLIENTE list
├── navigation.ts           # NAVIGATION + FOOTER_LINKS
├── site-data.ts            # Barrel re-export of lib/data/*
├── utils.ts                # cn()
└── data/
    ├── home.ts             # Quick Wins, 7 Pillars, Areas of Impact, etc.
    ├── copilot.ts          # All Enterprise Copilot content
    ├── services.ts         # SERVICES + per-service deep dive
    ├── experience.ts       # Tracks, certifications, sectors
    ├── industries.ts       # Functional-area cards
    └── technology.ts       # Tech catalog

public/
├── favicon.svg
├── logo.svg
└── og-image.svg            # OG / Twitter card
```

---

## Local development

```bash
npm install
npm run dev
```

### Scripts

| Script              | Description                                      |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Development server                                |
| `npm run build`     | Static build (creates `out/`)                     |
| `npm run start`     | Serves the production build                       |
| `npm run lint`      | ESLint (flat config + next)                       |
| `npm run typecheck` | `tsc --noEmit`                                    |

---

## Environment variables

Copy `.env.example` to `.env.local`. All variables are prefixed
`NEXT_PUBLIC_` because they are injected at build time and exposed to
the client (this is a static site — there is no server runtime).

| Variable                       | Purpose                                                |
| ------------------------------ | ------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`         | Canonical domain. Feeds OG, sitemap, and robots.       |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | API Gateway URL that the contact form POSTs to.        |

If `NEXT_PUBLIC_CONTACT_ENDPOINT` is empty, the form shows a controlled
placeholder state instead of POSTing to an invented backend.

> The `out/` folder is produced by `npm run build` and is **gitignored**.
> Upload it to S3 from your deploy machine or CI pipeline.

---

## Static build & AWS deployment

`next.config.ts` is already configured with:

```ts
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};
```

Build:

```bash
npm run build
```

Deploy to S3 (private bucket behind CloudFront OAC is recommended):

```bash
aws s3 sync out/ s3://<your-bucket> --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "*.html" --exclude "sitemap.xml" --exclude "robots.txt"

aws s3 sync out/ s3://<your-bucket> \
  --cache-control "public, max-age=60, must-revalidate" \
  --exclude "*" \
  --include "*.html" --include "sitemap.xml" --include "robots.txt"

aws cloudfront create-invalidation --distribution-id <ID> --paths "/*"
```

---

## Contact form

`components/contact/ContactForm.tsx` validates client-side and POSTs JSON
to `NEXT_PUBLIC_CONTACT_ENDPOINT`. Intended for an architecture of
**API Gateway → Lambda → SES** on AWS. No Next API routes — that would
break the static export.

---

## TODO_CLIENTE (before going live)

Centralized in `lib/constants.ts`:

- [ ] Final commercial brand confirmed (currently `7 Business Solutions`).
- [ ] Domain in `NEXT_PUBLIC_SITE_URL`.
- [ ] Corporate email in `SITE.contact.email`.
- [ ] Commercial phone in `SITE.contact.phone`.
- [ ] Visible address in `SITE.contact.address`.
- [ ] Real URLs in `SITE.social.linkedin` / `SITE.social.github`.
- [ ] Real endpoint in `NEXT_PUBLIC_CONTACT_ENDPOINT`.
- [ ] Legal review of `/privacy` and `/legal` for Mexico (LFPDPPP) and
      Spain (LOPDGDD / GDPR).
- [ ] Final OG image (replace `public/og-image.svg`).
- [ ] Final favicon (replace `public/favicon.svg`).
- [ ] Replace sector names with real client names in
      `EXPERIENCE_CLIENTS` only with explicit authorization.

---

## Project rules

- Flagship product is **Enterprise Copilot** — do not use "NEXUS",
  "OMEGA", "console", or "consola" as the commercial product name.
- Static export must continue to work (no SSR, no API routes).
- No fabricated metrics or fake testimonials. Indicative scenarios
  must carry the orientative-impact disclaimer.
