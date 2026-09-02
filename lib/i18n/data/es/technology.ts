/**
 * Tech catalog reusable across pages. Single source of truth for the
 * stack pills shown on home, service pages, and tabs.
 */

export const TECH_STACK: { group: string; items: string[] }[] = [
  {
    group: "SAP",
    items: [
      "SAP On-Premise",
      "SAP Cloud",
      "SAP BTP",
      "ECC",
      "S/4HANA",
      "ABAP",
      "RFC",
      "IDocs",
      "BAPIs",
    ],
  },
  {
    group: "Integración",
    items: [
      "Boomi",
      "HCI / CPI",
      "PI / PO",
      "IBM WebSphere",
      "IBM MQ",
      "REST",
      "SOAP",
      "Orientado a eventos",
    ],
  },
  {
    group: "Nube",
    items: [
      "AWS",
      "Azure",
      "GCP",
      "Lambda",
      "API Gateway",
      "S3 + CloudFront",
      "SES",
      "Cloud Run",
      "BigQuery",
    ],
  },
  {
    group: "Lenguajes",
    items: [
      "Java",
      "J2EE / JSE",
      "Jruby",
      ".NET / C# / ASP.NET",
      "TypeScript",
      "Python",
      "ABAP",
      "SQL",
    ],
  },
  {
    group: "Datos",
    items: [
      "SQL Server",
      "Oracle",
      "PostgreSQL",
      "MySQL",
      "Sybase",
      "DB2",
      "SAP HANA",
      "Snowflake",
      "BigQuery",
    ],
  },
  {
    group: "IA",
    items: [
      "LLM corporativos",
      "RAG sobre datos privados",
      "Machine learning",
      "MLOps",
      "Asistentes internos",
      "Copilotos operativos",
    ],
  },
];
