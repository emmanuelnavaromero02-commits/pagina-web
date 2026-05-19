/**
 * ─────────────────────────────────────────────────────────────
 * TODO_CLIENTE — Antes de salir a producción:
 *
 *   1. SITE.name / shortName    → confirmar el nombre comercial final
 *                                  (hoy es un placeholder neutro).
 *   2. SITE.url                  → dominio definitivo (usado para OG,
 *                                  sitemap y canonical).
 *   3. SITE.contact.email        → buzón corporativo real.
 *   4. SITE.contact.phone        → teléfono comercial real.
 *   5. SITE.contact.address      → dirección visible (ciudad o sede).
 *   6. SITE.social.linkedin/github → URLs reales.
 *                                  Si quedan en null, no se renderizan.
 *   7. NEXT_PUBLIC_CONTACT_ENDPOINT → URL de API Gateway que invoca
 *                                  Lambda + SES.
 *
 * Producto estrella aprobado: "Copiloto Empresarial".
 * Prohibido usar "NEXUS" o "consola" como nombre comercial.
 * ─────────────────────────────────────────────────────────────
 */

export const SITE = {
  // Working title — sustituir por el nombre comercial final.
  name: "Consultora",
  shortName: "Consultora",
  tagline:
    "Fábrica de software empresarial e IA operativa para compañías que necesitan avanzar rápido.",
  description:
    "Diseñamos, integramos y soportamos soluciones sobre SAP, cloud, datos e inteligencia artificial para convertir procesos complejos en software operativo.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  locale: "es_MX",
  product: {
    name: "Copiloto Empresarial",
    shortName: "Copiloto",
    headline:
      "La nueva capa inteligente para consultar, validar, reportar y automatizar procesos sobre tus sistemas actuales.",
  },
  contact: {
    // Marcar como null si todavía no hay dato real.
    // Los componentes no renderizan filas con valor null.
    email: null as string | null,
    phone: null as string | null,
    address: null as string | null,
  },
  social: {
    linkedin: null as string | null,
    github: null as string | null,
  },
} as const;

export const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";

/**
 * Devuelve true cuando hay al menos un dato de contacto real configurado.
 * Útil para que Footer y Contacto eviten renderizar bloques vacíos.
 */
export function hasContactInfo(): boolean {
  const { email, phone, address } = SITE.contact;
  return Boolean(email || phone || address);
}
