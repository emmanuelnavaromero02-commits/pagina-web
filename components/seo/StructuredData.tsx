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
          l("Inteligencia de decisión", "Decision intelligence"),
          l("Personas, talento y nómina", "People, talent, and payroll"),
          "SAP SuccessFactors",
          "SAP S/4HANA",
          l("Fábrica ABAP y Fiori", "ABAP and Fiori Factory"),
          l("Integración SAP", "SAP integration"),
          l("Servicios gestionados SAP", "SAP managed services"),
          l("Nube y datos gobernados", "Cloud and governed data"),
          l("Privacidad y seguridad SAP", "SAP privacy and security"),
          l("Transformación de landscapes", "Landscape transformation"),
          l("IA aplicada", "Applied AI"),
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
          l("Personas, talento y nómina", "People, talent, and payroll"),
          l("SAP ERP y S/4HANA", "SAP ERP and S/4HANA"),
          l("Fábrica de software e integración", "Software factory and integration"),
          l("AMS y fuerza laboral", "AMS and workforce"),
          l("Nube y datos gobernados", "Cloud and governed data"),
          l("Privacidad, seguridad y transformación", "Privacy, security, and transformation"),
          l("IA aplicada e innovación empresarial", "Applied AI and enterprise innovation"),
        ],
        provider: { "@id": organizationId },
        areaServed: EU_MARKET_ENABLED ? ["MX", "EU"] : ["MX"],
      },
      {
        "@type": "Person",
        "@id": `${SITE_ORIGIN}/#luis-benjamin`,
        name: "Luis Benjamin",
        jobTitle:
          "Corporate Finance & Accounting | Accounts Payable (AP) & Accounts Receivable (AR)",
        description: l(
          "Especialista senior en control financiero corporativo, cuentas por pagar y cuentas por cobrar.",
          "Senior specialist in corporate financial control, accounts payable, and accounts receivable.",
        ),
        worksFor: { "@id": organizationId },
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
