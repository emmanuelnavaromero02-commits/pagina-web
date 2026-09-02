import {
  BUILD_LOCALE,
  IS_LAUNCH_READY,
  SITE_ORIGIN,
} from "@/lib/i18n/config";

export const EU_MARKET_ENABLED =
  process.env.NEXT_PUBLIC_EU_MARKET_ENABLED === "true";

export type MarketScope = "mexico" | "mexico-and-eu";

export const MARKET_SCOPE: MarketScope = EU_MARKET_ENABLED
  ? "mexico-and-eu"
  : "mexico";

const localized = {
  es: {
    tagline:
      "Siete dominios empresariales para transformar, operar y decidir con ventaja.",
    description: EU_MARKET_ENABLED
      ? "Integramos personas, nómina, SAP S/4HANA, software, servicios gestionados, nube, seguridad e inteligencia aplicada para empresas de México y la Unión Europea."
      : "Integramos personas, nómina, SAP S/4HANA, software, servicios gestionados, nube, seguridad e inteligencia aplicada para empresas de México.",
    regions: EU_MARKET_ENABLED
      ? (["México", "Unión Europea"] as const)
      : (["México"] as const),
    productHeadline:
      "Del trabajo manual a decisiones con evidencia y control.",
  },
  en: {
    tagline:
      "Seven enterprise domains to transform, operate, and decide with an edge.",
    description: EU_MARKET_ENABLED
      ? "We integrate people, payroll, SAP S/4HANA, software, managed services, cloud, security, and applied intelligence for companies in Mexico and the European Union."
      : "We integrate people, payroll, SAP S/4HANA, software, managed services, cloud, security, and applied intelligence for companies in Mexico.",
    regions: EU_MARKET_ENABLED
      ? (["Mexico", "European Union"] as const)
      : (["Mexico"] as const),
    productHeadline:
      "From manual work to decisions with evidence and control.",
  },
} as const;

const content = localized[BUILD_LOCALE];

export const LEGAL_ENTITY = {
  legalName: "7VS BUSINESS SOLUTIONS",
  taxId: "VBS2607061G9",
  country: "México",
  registeredAddress: {
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
    name: BUILD_LOCALE === "es" ? "Inteligencia de Decisión" : "Decision Intelligence",
    shortName: BUILD_LOCALE === "es" ? "Decisión 7" : "Decision 7",
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
    EU_MARKET_ENABLED &&
    (!EU_REPRESENTATIVE.name ||
      !EU_REPRESENTATIVE.address ||
      !EU_REPRESENTATIVE.email)
  ) {
    failures.push(
      "EU representative name, address, and email are required when NEXT_PUBLIC_EU_MARKET_ENABLED=true",
    );
  }

  if (failures.length > 0) {
    throw new Error(`Launch configuration is incomplete:\n- ${failures.join("\n- ")}`);
  }
}
