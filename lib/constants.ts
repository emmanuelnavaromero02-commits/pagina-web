/**
 * ─────────────────────────────────────────────────────────────
 * TODO_CLIENTE — Before going live:
 *
 *   1. SITE.contact.email     → real corporate inbox.
 *   2. SITE.contact.phone     → real commercial phone.
 *   3. SITE.contact.address   → visible address (city or HQ).
 *   4. SITE.social.linkedin   → real LinkedIn URL.
 *   5. SITE.social.github     → real GitHub URL (or remove).
 *   6. NEXT_PUBLIC_SITE_URL   → final canonical domain.
 *   7. NEXT_PUBLIC_CONTACT_ENDPOINT → API Gateway endpoint invoking
 *                               Lambda + SES.
 *
 * Brand:        "7 Business Solutions" (do not rename without owner sign-off).
 * Flagship product: "Enterprise Copilot".
 * Forbidden in commercial copy: "NEXUS", "OMEGA", "console" / "consola"
 *                               as the product's commercial name.
 * ─────────────────────────────────────────────────────────────
 */

export const SITE = {
  name: "7 Business Solutions",
  shortName: "7 Business",
  tagline:
    "Intelligent business solutions that turn operations, data, and AI into measurable execution.",
  description:
    "We help companies in Mexico and Spain eliminate slow processes, operational disorder, manual reporting, and disconnected systems through enterprise software, integration, automation, governed data, and operational AI.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  locale: "en_US",
  regions: ["Mexico", "Spain"] as const,
  product: {
    name: "Enterprise Copilot",
    shortName: "Copilot",
    headline:
      "From manual work to traceable answers in minutes.",
  },
  contact: {
    // Marked as null until real data is confirmed. Components do
    // not render rows whose value is null.
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
 * Returns true when at least one real contact field is populated.
 * Used by Footer and /contact to hide empty info blocks.
 */
export function hasContactInfo(): boolean {
  const { email, phone, address } = SITE.contact;
  return Boolean(email || phone || address);
}
