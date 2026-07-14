import { EU_MARKET_ENABLED, LEGAL_ENTITY, SITE } from "@/lib/constants";
import { BUILD_LOCALE, SITE_ORIGIN, l } from "@/lib/i18n/config";

export function StructuredData() {
  const organizationId = `${SITE_ORIGIN}/#organization`;
  const areaServed = [
    { "@type": "Country", name: l("México", "Mexico") },
    ...(EU_MARKET_ENABLED
      ? [{ "@type": "AdministrativeArea", name: l("Unión Europea", "European Union") }]
      : []),
  ];
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: SITE.name,
        legalName: LEGAL_ENTITY.legalName,
        taxID: LEGAL_ENTITY.taxId,
        url: SITE_ORIGIN,
        logo: `${SITE_ORIGIN}/logo.svg`,
        email: SITE.contact.email,
        telephone: SITE.contact.phone,
        areaServed,
        knowsAbout: [
          "Enterprise Copilot",
          l("Fábrica de software", "Software Factory"),
          l("Integración SAP", "SAP integration"),
          l("Datos gobernados", "Governed data"),
          l("IA operacional", "Operational AI"),
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: SITE.contact.email,
          telephone: SITE.contact.phone,
          availableLanguage: ["es", "en"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: SITE_ORIGIN,
        name: SITE.name,
        inLanguage: BUILD_LOCALE,
        publisher: { "@id": organizationId },
      },
      {
        "@type": "Service",
        "@id": `${SITE_ORIGIN}/#services`,
        name: l("Soluciones empresariales inteligentes", "Intelligent business solutions"),
        serviceType: [
          l("Desarrollo de software empresarial", "Enterprise software development"),
          l("Integración empresarial", "Enterprise integration"),
          l("Nube y datos gobernados", "Cloud and governed data"),
          l("IA operacional", "Operational AI"),
        ],
        provider: { "@id": organizationId },
        areaServed: EU_MARKET_ENABLED ? ["MX", "EU"] : ["MX"],
      },
      {
        "@type": "Person",
        "@id": `${SITE_ORIGIN}/#rabely-jovana`,
        name: "Rabely Jovana",
        jobTitle: l(
          "Responsable de Administración y Operaciones",
          "Administration and Operations Lead",
        ),
        worksFor: { "@id": organizationId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
