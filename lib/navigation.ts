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
        "Four service lines that combine engineering, SAP integration, cloud, data, and applied AI.",
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
            href: "/services/software-factory#custom",
            description: "Internal platforms and tailored applications.",
          },
          {
            label: "Enterprise portals",
            href: "/services/software-factory#portals",
            description: "Corporate front-ends and internal portals.",
          },
          {
            label: "Internal applications",
            href: "/services/software-factory#apps",
            description: "Tools for operations, finance, and HR teams.",
          },
          {
            label: "APIs & microservices",
            href: "/services/software-factory#apis",
            description: "Reusable services with clear contracts.",
          },
          {
            label: "Evolutionary support",
            href: "/services/software-factory#support",
            description: "Continuity and continuous improvement.",
          },
        ],
      },
      {
        title: "Enterprise Integration",
        href: "/services/sap-integrations",
        links: [
          {
            label: "SAP On-Premise",
            href: "/services/sap-integrations#onprem",
            description: "ECC, S/4HANA, and the core modules.",
          },
          {
            label: "SAP Cloud",
            href: "/services/sap-integrations#cloud",
            description: "SuccessFactors, Ariba, IBP, and more.",
          },
          {
            label: "SAP BTP",
            href: "/services/sap-integrations#btp",
            description: "Extensions, CAP, Workflow, Build.",
          },
          {
            label: "ABAP / RFC / IDocs",
            href: "/services/sap-integrations#abap",
            description: "SAP development and technical extensions.",
          },
          {
            label: "Boomi / HCI / PI",
            href: "/services/sap-integrations#middleware",
            description: "Enterprise integration middleware.",
          },
          {
            label: "Third-party systems",
            href: "/services/sap-integrations#third-party",
            description: "Connectivity with external platforms.",
          },
        ],
      },
      {
        title: "Cloud & Governed Data",
        href: "/services/cloud-data",
        links: [
          {
            label: "AWS",
            href: "/services/cloud-data#aws",
            description: "Architecture, migration, and operation.",
          },
          {
            label: "Azure",
            href: "/services/cloud-data#azure",
            description: "Corporate platforms on Azure.",
          },
          {
            label: "GCP",
            href: "/services/cloud-data#gcp",
            description: "Data, analytics, and managed services.",
          },
          {
            label: "Enterprise databases",
            href: "/services/cloud-data#databases",
            description: "Oracle, SQL Server, PostgreSQL, HANA.",
          },
          {
            label: "Data pipelines",
            href: "/services/cloud-data#pipelines",
            description: "Ingestion, transformation, quality.",
          },
          {
            label: "Trusted reporting",
            href: "/services/cloud-data#reporting",
            description: "BI and executive reports you can audit.",
          },
        ],
      },
      {
        title: "Operational AI",
        href: "/services/enterprise-ai",
        links: [
          {
            label: "Generative AI",
            href: "/services/enterprise-ai#genai",
            description: "LLMs grounded on your own data.",
          },
          {
            label: "Machine learning",
            href: "/services/enterprise-ai#ml",
            description: "Productive ML with MLOps.",
          },
          {
            label: "Intelligent automation",
            href: "/services/enterprise-ai#automation",
            description: "AI-assisted operational flows.",
          },
          {
            label: "Internal assistants",
            href: "/services/enterprise-ai#assistants",
            description: "Conversational tools over private data.",
          },
          {
            label: "Operational copilots",
            href: "/copilot",
            description: "AI connected to real systems.",
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
        "The operational AI layer that connects SAP, data, and processes to ask, validate, explain, and act with traceability.",
      href: "/copilot",
      cta: "Explore the Copilot",
    },
    columns: [
      {
        title: "Product",
        links: [
          {
            label: "What it is",
            href: "/copilot#what",
            description: "An intelligent operational layer, not a generic chatbot.",
          },
          {
            label: "What it does",
            href: "/copilot#does",
            description: "Queries, validates, reports, and assists actions.",
          },
          {
            label: "How it connects",
            href: "/copilot/how-it-works",
            description: "SAP, databases, APIs, and reports.",
          },
        ],
      },
      {
        title: "Application",
        links: [
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
            label: "Operational impact",
            href: "/copilot#impact",
            description: "Before vs. with Enterprise Copilot.",
          },
          {
            label: "Request a pilot",
            href: "/contact?topic=copilot",
            description: "Scoped pilot with your team.",
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
      title: "Where we deliver measurable value",
      description:
        "Finance, sales, operations, procurement, executive management, HR — functional areas with specific quick-win scopes.",
      href: "/industries",
      cta: "View use cases",
    },
    columns: [
      {
        title: "Business areas",
        links: [
          {
            label: "Finance",
            href: "/industries#finance",
            description: "Closings, reconciliations, variance analysis.",
          },
          {
            label: "Operations",
            href: "/industries#operations",
            description: "Cycle-time, process monitoring, alerts.",
          },
          {
            label: "HR / Payroll",
            href: "/industries#hr",
            description: "Headcount, absences, master data.",
          },
          {
            label: "Executive reporting",
            href: "/industries#reporting",
            description: "Boardroom-ready dashboards and KPIs.",
          },
        ],
      },
      {
        title: "Cross-cutting capabilities",
        links: [
          {
            label: "SAP integrations",
            href: "/industries#sap",
            description: "ABAP, RFC, IDocs, BTP, middleware.",
          },
          {
            label: "Process automation",
            href: "/industries#automation",
            description: "Less manual work, fewer errors.",
          },
          {
            label: "Internal support",
            href: "/industries#support",
            description: "Helpdesk and ITSM continuity.",
          },
          {
            label: "Data governance",
            href: "/industries#governance",
            description: "Consistency and traceability.",
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
      { label: "Product", href: "/copilot" },
      { label: "How it works", href: "/copilot/how-it-works" },
      { label: "Use cases", href: "/copilot/use-cases" },
      { label: "Security", href: "/copilot/security" },
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
