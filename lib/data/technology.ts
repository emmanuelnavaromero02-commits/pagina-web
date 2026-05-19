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
    group: "Integration",
    items: [
      "Boomi",
      "HCI / CPI",
      "PI / PO",
      "IBM WebSphere",
      "IBM MQ",
      "REST",
      "SOAP",
      "Event-driven",
    ],
  },
  {
    group: "Cloud",
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
    group: "Languages",
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
    group: "Data",
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
    group: "AI",
    items: [
      "Corporate LLMs",
      "RAG on private data",
      "Machine learning",
      "MLOps",
      "Internal assistants",
      "Operational copilots",
    ],
  },
];
