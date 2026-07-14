import {
  BUILD_LOCALE,
  IS_LAUNCH_READY,
  SITE_ORIGIN,
} from "@/lib/i18n/config";

const localized = {
  es: {
    tagline:
      "Soluciones empresariales inteligentes para convertir operación, datos e IA en ejecución medible.",
    description:
      "Ayudamos a empresas de México y España a mejorar procesos, integrar sistemas y convertir sus datos en decisiones mediante software, automatización e IA operacional.",
    regions: ["México", "España"] as const,
    productHeadline:
      "Del trabajo manual a respuestas trazables en minutos.",
  },
  en: {
    tagline:
      "Intelligent business solutions that turn operations, data, and AI into measurable execution.",
    description:
      "We help companies in Mexico and Spain improve processes, integrate systems, and turn data into decisions through software, automation, and operational AI.",
    regions: ["Mexico", "Spain"] as const,
    productHeadline:
      "From manual work to traceable answers in minutes.",
  },
} as const;

const content = localized[BUILD_LOCALE];

export const LEGAL_ENTITY = {
  legalName: "7VS BUSINESS SOLUTIONS, S.A.S. DE C.V.",
  entityType:
    "Sociedad por Acciones Simplificada de Capital Variable",
  taxId: "VBS2607061G9",
  country: "México",
  registeredAddress: {
    street: "Calle Iztacalco 276, Interior 3",
    neighborhood:
      "Ampliación General José Vicente Villada Súper 43",
    postalCode: "57760",
    city: "Nezahualcóyotl",
    state: "Estado de México",
    country: "México",
  },
  activity: "Servicios de consultoría en computación",
  operationStartDate: "2026-07-06",
} as const;

export const EU_REPRESENTATIVE = {
  name: process.env.NEXT_PUBLIC_EU_REP_NAME?.trim() ?? "",
  address: process.env.NEXT_PUBLIC_EU_REP_ADDRESS?.trim() ?? "",
  email: process.env.NEXT_PUBLIC_EU_REP_EMAIL?.trim() ?? "",
} as const;

export const SITE = {
  name: "7 Business Solutions",
  shortName: "7 Business",
  tagline: content.tagline,
  description: content.description,
  url: process.env.NEXT_PUBLIC_SITE_URL || SITE_ORIGIN,
  locale: BUILD_LOCALE === "es" ? "es_MX" : "en_US",
  language: BUILD_LOCALE,
  regions: content.regions,
  product: {
    name: "Enterprise Copilot",
    shortName: "Copilot",
    headline: content.productHeadline,
  },
  contact: {
    email: "ventas@7businesssolutions.com",
    phone: "+52 55 2610 7403",
    phoneHref: "+525526107403",
    address: null as string | null,
  },
  social: {
    linkedin: null as string | null,
    github: null as string | null,
  },
} as const;

export const CONTACT_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim() ?? "";

export const LEGAL_REVIEWED =
  process.env.NEXT_PUBLIC_LEGAL_REVIEWED === "true";

export function hasContactInfo(): boolean {
  const { email, phone, address } = SITE.contact;
  return Boolean(email || phone || address);
}

export function assertLaunchConfiguration(): void {
  if (!IS_LAUNCH_READY) return;

  const failures: string[] = [];
  if (SITE.url !== SITE_ORIGIN) {
    failures.push(`NEXT_PUBLIC_SITE_URL must be ${SITE_ORIGIN}`);
  }
  if (!CONTACT_ENDPOINT) {
    failures.push("NEXT_PUBLIC_CONTACT_ENDPOINT is required");
  }
  if (!LEGAL_REVIEWED) {
    failures.push("NEXT_PUBLIC_LEGAL_REVIEWED must be true");
  }
  if (
    !EU_REPRESENTATIVE.name ||
    !EU_REPRESENTATIVE.address ||
    !EU_REPRESENTATIVE.email
  ) {
    failures.push("EU representative name, address, and email are required");
  }

  if (failures.length > 0) {
    throw new Error(`Launch configuration is incomplete:\n- ${failures.join("\n- ")}`);
  }
}
