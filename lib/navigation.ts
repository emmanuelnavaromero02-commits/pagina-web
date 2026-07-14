export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavColumn = {
  title: string;
  href?: string;
  links: NavLink[];
};

export type NavItem = {
  label: string;
  href: string;
  columns?: NavColumn[];
  featured?: {
    eyebrow: string;
    title: string;
    description: string;
    href: string;
    cta: string;
  };
};

export const NAVIGATION: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
    featured: {
      eyebrow: "Core capabilities",
      title: "Software factory + operational AI",
      description:
        "Four service lines with dedicated specialized pages — engineering, SAP integration, cloud and data, and applied AI.",
      href: "/services",
      cta: "View all services",
    },
    columns: [
      {
        title: "Software Factory",
        href: "/services/software-factory",
        links: [
          {
            label: "Custom development",
            href: "/services/software-factory/custom-development",
            description: "Internal platforms and tailored applications.",
          },
          {
            label: "Enterprise portals",
            href: "/services/software-factory/enterprise-portals",
            description: "Corporate front-ends and internal portals.",
          },
          {
            label: "Internal applications",
            href: "/services/software-factory/internal-apps",
            description: "Apps for finance, HR, and operations.",
          },
          {
            label: "APIs & microservices",
            href: "/services/software-factory/apis-microservices",
            description: "Reusable services with clear contracts.",
          },
          {
            label: "Evolutionary support",
            href: "/services/software-factory/evolutionary-support",
            description: "L2/L3 support and quarterly roadmap.",
          },
        ],
      },
      {
        title: "Enterprise Integration",
        href: "/services/sap-integrations",
        links: [
          {
            label: "SAP On-Premise",
            href: "/services/sap-integrations/on-premise",
            description: "ECC, S/4HANA, and the core modules.",
          },
          {
            label: "SAP Cloud",
            href: "/services/sap-integrations/sap-cloud",
            description: "Hybrid cloud-to-on-prem integration.",
          },
          {
            label: "SAP BTP",
            href: "/services/sap-integrations/sap-btp",
            description: "Extensions, CAP, workflow, build.",
          },
          {
            label: "ABAP / RFC / IDocs",
            href: "/services/sap-integrations/abap-rfc-idocs",
            description: "SAP development and technical integration.",
          },
          {
            label: "Enterprise middleware",
            href: "/services/sap-integrations/middleware",
            description: "Boomi, HCI/CPI, PI/PO, IBM WebSphere.",
          },
          {
            label: "Third-party systems",
            href: "/services/sap-integrations/third-party",
            description: "CRMs, banks, e-commerce, legacy.",
          },
          {
            label: "SAP SuccessFactors",
            href: "/services/sap-integrations/successfactors",
            description: "Employee Central and HR data.",
          },
          {
            label: "SAP HCM",
            href: "/services/sap-integrations/sap-hcm",
            description: "HCM On-Premise and HR processes.",
          },
        ],
      },
      {
        title: "Cloud & Governed Data",
        href: "/services/cloud-data",
        links: [
          {
            label: "AWS",
            href: "/services/cloud-data/aws",
            description: "S3, CloudFront, Lambda, API Gateway, SES.",
          },
          {
            label: "Azure",
            href: "/services/cloud-data/azure",
            description: "App Service, Functions, SQL, Synapse.",
          },
          {
            label: "Google Cloud (GCP)",
            href: "/services/cloud-data/gcp",
            description: "BigQuery, Cloud Run, Pub/Sub.",
          },
          {
            label: "Enterprise databases",
            href: "/services/cloud-data/databases",
            description: "Oracle, SQL Server, PostgreSQL, HANA.",
          },
          {
            label: "Data pipelines",
            href: "/services/cloud-data/data-pipelines",
            description: "Ingestion, transformation, quality.",
          },
          {
            label: "Trusted reporting",
            href: "/services/cloud-data/reporting",
            description: "Semantic layer and auditable BI.",
          },
        ],
      },
      {
        title: "Operational AI",
        href: "/services/enterprise-ai",
        links: [
          {
            label: "Generative AI",
            href: "/services/enterprise-ai/generative-ai",
            description: "LLMs with corporate RAG and citations.",
          },
          {
            label: "Machine learning",
            href: "/services/enterprise-ai/machine-learning",
            description: "Productive ML with MLOps.",
          },
          {
            label: "Intelligent automation",
            href: "/services/enterprise-ai/intelligent-automation",
            description: "Assisted flows with human approval.",
          },
          {
            label: "Internal assistants",
            href: "/services/enterprise-ai/internal-assistants",
            description: "Search and support over private data.",
          },
          {
            label: "Operational copilots",
            href: "/services/enterprise-ai/operational-copilots",
            description: "Where Enterprise Copilot lives.",
          },
        ],
      },
    ],
  },
  {
    label: "Enterprise Copilot",
    href: "/copilot",
    featured: {
      eyebrow: "Flagship product",
      title: "Enterprise Copilot",
      description:
        "Operational AI capability that connects SAP, data, APIs, and reports — with permissions, validations, and traceability.",
      href: "/copilot",
      cta: "Explore the Copilot",
    },
    columns: [
      {
        title: "Product",
        links: [
          {
            label: "Overview",
            href: "/copilot",
            description: "From manual work to traceable, governed answers.",
          },
          {
            label: "Operational impact",
            href: "/copilot/impact",
            description: "Before vs with Enterprise Copilot.",
          },
          {
            label: "How it works",
            href: "/copilot/how-it-works",
            description: "Architecture and operational flow.",
          },
        ],
      },
      {
        title: "Application",
        links: [
          {
            label: "Conceptual demo",
            href: "/copilot/demo",
            description: "A walk-through interaction with sources and audit.",
          },
          {
            label: "Use cases",
            href: "/copilot/use-cases",
            description: "Finance, HR, operations, reporting.",
          },
          {
            label: "Security & permissions",
            href: "/copilot/security",
            description: "Roles, traceability, validations.",
          },
        ],
      },
      {
        title: "Get started",
        links: [
          {
            label: "Request a pilot",
            href: "/copilot/pilot",
            description: "What we connect, what we measure.",
          },
          {
            label: "Talk to the team",
            href: "/contact?topic=copilot",
            description: "Scoped conversation with your team.",
          },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    featured: {
      eyebrow: "Use cases",
      title: "Eight specialized areas",
      description:
        "Each functional and cross-cutting area has its own dedicated page with problem, capabilities, deliverables, and Copilot connection.",
      href: "/industries",
      cta: "View use cases",
    },
    columns: [
      {
        title: "Business areas",
        links: [
          {
            label: "Finance",
            href: "/industries/finance",
            description: "Closings, reconciliations, variance analysis.",
          },
          {
            label: "Operations",
            href: "/industries/operations",
            description: "Status, alerts, cross-system validation.",
          },
          {
            label: "HR / Payroll",
            href: "/industries/hr-payroll",
            description: "Headcount, absences, master data.",
          },
          {
            label: "Executive reporting",
            href: "/industries/executive-reporting",
            description: "Dashboards, KPIs, traceability.",
          },
        ],
      },
      {
        title: "Cross-cutting capabilities",
        links: [
          {
            label: "SAP integrations",
            href: "/industries/sap-integrations",
            description: "ABAP, RFC, IDocs, BTP, middleware.",
          },
          {
            label: "Process automation",
            href: "/industries/process-automation",
            description: "Assisted flows, less manual work.",
          },
          {
            label: "Internal support",
            href: "/industries/internal-support",
            description: "Helpdesk and ITSM continuity.",
          },
          {
            label: "Data governance",
            href: "/industries/data-governance",
            description: "Catalog, rules, traceability.",
          },
        ],
      },
    ],
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const FOOTER_LINKS: { title: string; links: NavLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Software Factory", href: "/services/software-factory" },
      { label: "Enterprise Integration", href: "/services/sap-integrations" },
      { label: "Cloud & Governed Data", href: "/services/cloud-data" },
      { label: "Operational AI", href: "/services/enterprise-ai" },
    ],
  },
  {
    title: "Enterprise Copilot",
    links: [
      { label: "Overview", href: "/copilot" },
      { label: "Operational impact", href: "/copilot/impact" },
      { label: "How it works", href: "/copilot/how-it-works" },
      { label: "Use cases", href: "/copilot/use-cases" },
      { label: "Security", href: "/copilot/security" },
      { label: "Request a pilot", href: "/copilot/pilot" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Experience", href: "/experience" },
      { label: "Industries", href: "/industries" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
