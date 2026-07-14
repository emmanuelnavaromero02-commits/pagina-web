import {
  Boxes,
  Brain,
  Cloud,
  Code2,
  Database,
  FileBarChart,
  GitBranch,
  Layers,
  LineChart,
  Network,
  Plug,
  Server,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Wand2,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type ServiceSlug =
  | "software-factory"
  | "sap-integrations"
  | "cloud-data"
  | "enterprise-ai";

export type ServiceCard = {
  slug: ServiceSlug;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
  href: string;
};

export const SERVICES: ServiceCard[] = [
  {
    slug: "software-factory",
    title: "Software Factory",
    short: "Custom software and continuous improvement.",
    description:
      "We design and build portals, internal applications, APIs, and integrations that reduce manual work, connect existing systems, and support critical platforms over time.",
    icon: Code2,
    bullets: [
      "Custom Development",
      "Enterprise Portals",
      "Internal Applications",
      "APIs & Microservices",
      "Application Support and Evolution",
    ],
    href: "/services/software-factory",
  },
  {
    slug: "sap-integrations",
    title: "Enterprise Integration",
    short: "Governed SAP integration.",
    description:
      "We connect SAP On-Premise, SAP Cloud, and SAP BTP to the rest of the ecosystem using ABAP, RFC, IDocs, Boomi, HCI, and PI. Without breaking what already works.",
    icon: Plug,
    bullets: [
      "SAP On-Premise",
      "SAP Cloud & BTP",
      "ABAP / RFC / IDocs",
      "Boomi / HCI / PI",
      "Third-Party Integrations",
    ],
    href: "/services/sap-integrations",
  },
  {
    slug: "cloud-data",
    title: "Cloud & Governed Data",
    short: "Trusted data platforms.",
    description:
      "Cloud architectures on AWS, Azure, and GCP with enterprise databases, traceable pipelines, and controls for audit review.",
    icon: Cloud,
    bullets: [
      "AWS · Azure · GCP",
      "Enterprise Databases",
      "Data Pipelines",
      "Executive Reporting",
      "Secure Architecture",
    ],
    href: "/services/cloud-data",
  },
  {
    slug: "enterprise-ai",
    title: "Operational AI",
    short: "AI wired into real processes.",
    description:
      "Generative AI, machine learning, and intelligent automation grounded on your own data and business rules — for operational use cases, not empty demos.",
    icon: Brain,
    bullets: [
      "Generative AI on Private Data",
      "Productive ML Models",
      "Intelligent Automation",
      "Internal Assistants",
      "Operational Copilots",
    ],
    href: "/services/enterprise-ai",
  },
];

/* ---------------------------------------------------------------- */
/* SERVICE_DETAILS — section grid for each service                  */
/* ---------------------------------------------------------------- */

export const SERVICE_DETAILS: Record<
  ServiceSlug,
  {
    eyebrow: string;
    title: string;
    intro: string;
    icon: LucideIcon;
    sections: {
      id: string;
      title: string;
      description: string;
      bullets?: string[];
    }[];
  }
> = {
  "software-factory": {
    eyebrow: "Service",
    title: "Software Factory",
    intro:
      "We build enterprise software around real processes: portals, internal applications, APIs, and integrations with clear ownership of scope, delivery, and support.",
    icon: Code2,
    sections: [
      {
        id: "custom",
        title: "Custom development",
        description:
          "Internal platforms, functional tools, and tailored applications focused on maintainability and total cost of ownership.",
        bullets: [
          "Clear, documented architecture",
          "Full-stack and specialist teams",
          "Deliverables with agreed acceptance criteria",
        ],
      },
      {
        id: "portals",
        title: "Enterprise portals",
        description:
          "Modern corporate front-ends for employees, suppliers, and internal customers with SSO and permissions.",
        bullets: [
          "Consistent design and UX",
          "Integration with corporate identity",
          "Secure, scalable deployments",
        ],
      },
      {
        id: "apps",
        title: "Internal applications",
        description:
          "Tools for operations, finance, and HR teams that move processes out of spreadsheets.",
        bullets: [
          "Assisted workflows",
          "Automated validations",
          "Built-in operational reports",
        ],
      },
      {
        id: "apis",
        title: "APIs and microservices",
        description:
          "Reusable services with explicit contracts, versioning, observability, and security by default.",
        bullets: [
          "API-first design",
          "Living documentation",
          "End-to-end observability",
        ],
      },
      {
        id: "support",
        title: "Evolutionary support",
        description:
          "Continuity and continuous improvement of critical platforms with SLAs, metrics, and evolution plans.",
        bullets: ["L2/L3 support", "Evolutionary backlog", "Agreed roadmap"],
      },
    ],
  },
  "sap-integrations": {
    eyebrow: "Service",
    title: "Enterprise Integration",
    intro:
      "The integration scope covers SAP On-Premise, SAP Cloud, and SAP BTP with controlled changes around the core operation.",
    icon: Plug,
    sections: [
      {
        id: "onprem",
        title: "SAP On-Premise",
        description:
          "Work on ECC, S/4HANA, and the core modules. Development, evolutions, and functional/technical support.",
        bullets: ["ECC and S/4HANA", "FI / MM / SD / HR modules", "ABAP support"],
      },
      {
        id: "cloud",
        title: "SAP Cloud",
        description:
          "Integration with SAP cloud solutions like SuccessFactors, Ariba, and IBP, connected to the rest of the operation.",
        bullets: ["SuccessFactors", "Ariba", "IBP and other cloud suites"],
      },
      {
        id: "btp",
        title: "SAP BTP",
        description:
          "Extensions, CAP, Workflow, and Build on the BTP platform to take SAP beyond the core.",
        bullets: ["CAP (Node / Java)", "Workflow", "Build / Apps"],
      },
      {
        id: "abap",
        title: "ABAP / RFC / IDocs",
        description:
          "ABAP development, RFC and IDoc integrations, performance improvements, and monitoring.",
        bullets: ["Reports and modules", "BAPIs and RFCs", "IDoc monitoring"],
      },
      {
        id: "middleware",
        title: "Boomi / HCI / PI",
        description:
          "Enterprise middleware to connect SAP with third parties without piling up technical debt.",
        bullets: ["Boomi", "SAP HCI / CPI", "SAP PI / PO"],
      },
      {
        id: "third-party",
        title: "Third-party integrations",
        description:
          "Connectivity with CRMs, e-commerce, banks, HR platforms, and legacy applications.",
        bullets: ["REST / SOAP", "Events", "Controlled ETL"],
      },
    ],
  },
  "cloud-data": {
    eyebrow: "Service",
    title: "Cloud & Governed Data",
    intro:
      "Cloud and data platforms that hold up under audit: clear architecture, security by default, and trustworthy reporting.",
    icon: Cloud,
    sections: [
      {
        id: "aws",
        title: "AWS",
        description:
          "Architecture, migration, and operation on AWS focused on cost, security, and observability.",
        bullets: ["Lambda + API Gateway", "S3 + CloudFront", "RDS / DynamoDB"],
      },
      {
        id: "azure",
        title: "Azure",
        description:
          "Corporate platforms on Azure integrated with Entra ID and data services.",
        bullets: ["App Service / Functions", "Azure SQL", "Synapse / Data Lake"],
      },
      {
        id: "gcp",
        title: "GCP",
        description:
          "Data, analytics, and infrastructure solutions on Google Cloud with BigQuery at the core.",
        bullets: ["BigQuery", "Cloud Run", "Pub/Sub"],
      },
      {
        id: "databases",
        title: "Databases",
        description:
          "Work on enterprise databases with focus on performance, model, and consistency.",
        bullets: ["Oracle / SQL Server", "PostgreSQL", "SAP HANA"],
      },
      {
        id: "pipelines",
        title: "Data pipelines",
        description:
          "Auditable, reproducible data ingestion, transformation, and quality.",
        bullets: [
          "Reliable ingestion",
          "Versioned transformations",
          "Quality checks and alerts",
        ],
      },
      {
        id: "reporting",
        title: "Enterprise reporting",
        description:
          "BI and executive reports with traceability to source data — not pretty dashboards without substance.",
        bullets: [
          "Current-state dashboards",
          "Auditable reports",
          "Common semantic layer",
        ],
      },
    ],
  },
  "enterprise-ai": {
    eyebrow: "Service",
    title: "Operational AI",
    intro:
      "AI applied to real processes: copilots, internal assistants, and intelligent automation wired into your systems — not empty demos.",
    icon: Brain,
    sections: [
      {
        id: "genai",
        title: "Generative AI",
        description:
          "LLM solutions over private data with RAG, access controls, and traceability.",
        bullets: ["Corporate RAG", "LLMs in VPC", "Continuous evaluation"],
      },
      {
        id: "ml",
        title: "Machine learning",
        description:
          "Productive models for prediction, classification, and anomaly detection — focused on operation.",
        bullets: ["Productive models", "MLOps", "Model monitoring"],
      },
      {
        id: "automation",
        title: "Intelligent automation",
        description:
          "AI-assisted processes where humans validate the call — not AI deciding blind.",
        bullets: [
          "Assisted validations",
          "Human-in-the-loop flows",
          "Decision audit",
        ],
      },
      {
        id: "assistants",
        title: "Internal assistants",
        description:
          "Assistants for internal teams over documentation, policies, and private data.",
        bullets: [
          "Internal support",
          "Assisted onboarding",
          "Intelligent search",
        ],
      },
      {
        id: "copilots",
        title: "Operational copilots",
        description:
          "Enterprise Copilot helps turn fragmented information into evidence, options, and controlled actions.",
        bullets: [
          "Enterprise Copilot product",
          "Evidence-based decisions",
          "Actions under approval",
        ],
      },
    ],
  },
};

/* ---------------------------------------------------------------- */
/* SERVICE_WHEN_TO_USE — when each service applies                  */
/* ---------------------------------------------------------------- */

export const SERVICE_WHEN_TO_USE: Record<
  ServiceSlug,
  { title: string; subtitle: string; items: string[] }
> = {
  "software-factory": {
    title: "When a software factory makes sense",
    subtitle:
      "If you recognize any of these patterns, a dedicated factory is usually the right answer.",
    items: [
      "Backlog is piling up and the internal team cannot catch up.",
      "Critical processes depend on Excel files maintained by one person.",
      "You need to integrate systems that do not talk to each other.",
      "You want speed without losing control of the architecture.",
      "An urgent project needs a senior team under an agreed mobilization plan.",
      "You want continuity — delivery plus ongoing evolution and support.",
    ],
  },
  "sap-integrations": {
    title: "Typical problems we solve",
    subtitle:
      "Recurring patterns in organizations running SAP in production with many systems around it.",
    items: [
      "Fragile interfaces that break with every change.",
      "Duplicated data between SAP and third-party systems.",
      "Manual reports built on data that already lives in SAP.",
      "Critical systems that do not talk to each other.",
      "SAP changes that break downstream integrations.",
      "No monitoring of IDocs, jobs, and interfaces.",
    ],
  },
  "cloud-data": {
    title: "From scattered data to trusted reports",
    subtitle:
      "Patterns that arise when data lives in many places and the final report lacks shared definitions.",
    items: [
      "Critical information spread across ERP, CRM, Excel, and internal databases.",
      "Reports that each team rebuilds differently, with different numbers.",
      "Manual pipelines that break and no one notices in time.",
      "Cloud costs growing without control or governance.",
      "No common semantic layer across business areas.",
      "Executive reports without source traceability for audit review.",
    ],
  },
  "enterprise-ai": {
    title: "Useful AI, not empty demos",
    subtitle:
      "AI only delivers value when it connects to real processes, private data, and explicit business rules.",
    items: [
      "Assistants connected to corporate data, not the open internet.",
      "Measurable use cases — not infinite labs without a deliverable.",
      "Human-in-the-loop before any sensitive action.",
      "User permissions respected by the AI layer.",
      "Traceability of every answer back to the source data.",
      "Operational MLOps with model monitoring and controlled deployment.",
    ],
  },
};

/* ---------------------------------------------------------------- */
/* SERVICE_DELIVERABLES — what we ship                              */
/* ---------------------------------------------------------------- */

export const SERVICE_DELIVERABLES: Record<
  ServiceSlug,
  { title: string; items: string[] }
> = {
  "software-factory": {
    title: "What we deliver",
    items: [
      "Senior specialists selected for the project with a delivery owner.",
      "Documented, versioned architecture.",
      "Agreed delivery cycles with review and acceptance criteria.",
      "CI/CD pipeline included in the delivery design.",
      "Support and evolution plan after go-live.",
    ],
  },
  "sap-integrations": {
    title: "What we deliver",
    items: [
      "Diagnosis of critical integrations with risks called out.",
      "Re-architecture without breaking productive processes.",
      "Reusable connectors and monitors.",
      "Regression testing on key interfaces.",
      "Technical-health dashboards for operations.",
    ],
  },
  "cloud-data": {
    title: "What we deliver",
    items: [
      "Documented cloud architecture (AWS / Azure / GCP).",
      "Versioned data pipelines with measured quality.",
      "Common semantic layer for reporting.",
      "Auditable executive dashboards and reports.",
      "Explicit cost model and cloud governance.",
    ],
  },
  "enterprise-ai": {
    title: "What we deliver",
    items: [
      "Use cases prioritized by operational impact.",
      "Assistants and copilots over private data.",
      "Corporate RAG with access controls.",
      "Productive ML models with monitoring.",
      "Evolution plan and new use cases roadmap.",
    ],
  },
};

/* ---------------------------------------------------------------- */
/* DeepDive blocks — tab content for SAP / Cloud / Factory / AI     */
/* ---------------------------------------------------------------- */

export type DeepDiveBlock = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  badges: string[];
  icon: LucideIcon;
};

export const SAP_DEEP_DIVE: DeepDiveBlock[] = [
  {
    id: "core",
    label: "Core SAP",
    eyebrow: "Core SAP",
    title: "Processes across FI, CO, SD, MM, HCM, PS, and PM",
    description:
      "The service scope covers SAP processes for finance, controlling, sales, materials, maintenance, projects, and HR, with controlled integration changes.",
    bullets: [
      "Finance (FI) and Controlling (CO) for closings and reporting.",
      "Sales (SD), Materials (MM), and Maintenance (PM) operations.",
      "Projects (PS) and HR (HCM) with focus on master data.",
      "Migrations and support on ECC and S/4HANA with functional judgment.",
    ],
    badges: ["ECC", "S/4HANA", "FI", "CO", "SD", "MM", "HCM", "PS", "PM"],
    icon: Boxes,
  },
  {
    id: "dev",
    label: "SAP development",
    eyebrow: "SAP development",
    title: "ABAP, reports, forms, enhancements, and workflows",
    description:
      "We develop and evolve SAP objects such as reports, forms, enhancements, conversions, interfaces, and workflows — focused on maintainability and operational continuity.",
    bullets: [
      "Custom ABAP reports with performance criteria.",
      "Forms and outputs (SmartForms, Adobe).",
      "Enhancements (BAdIs, User Exits) without touching the core.",
      "Controlled conversions and interfaces.",
      "SAP workflows for assisted processes.",
    ],
    badges: [
      "ABAP",
      "ABAP/4",
      "Reports",
      "Forms",
      "Enhancements",
      "Conversions",
      "SAP Workflows",
    ],
    icon: Code2,
  },
  {
    id: "tech",
    label: "Technical integration",
    eyebrow: "Technical integration",
    title: "RFC, IDocs, BAPIs, SAP JCo, NetWeaver Gateway, and APIs",
    description:
      "We connect SAP with internal applications and external platforms through RFC, IDocs, BAPIs, SAP JCo, Gateway, REST/SOAP APIs, and explicit integration contracts.",
    bullets: [
      "Synchronous and asynchronous calls via RFC and BAPIs.",
      "IDoc messaging with monitoring and reprocessing.",
      "SAP services exposed through NetWeaver Gateway.",
      "Java connectors with SAP JCo 2 and 3 for internal applications.",
      "REST/SOAP APIs on top of SAP with versioned contracts.",
    ],
    badges: [
      "RFC",
      "IDocs",
      "BAPIs",
      "SAP JCo 2",
      "SAP JCo 3",
      "NetWeaver Gateway",
      "SAP Mobile Platform",
      "REST",
      "SOAP",
    ],
    icon: Network,
  },
  {
    id: "cloud-btp",
    label: "SAP Cloud & BTP",
    eyebrow: "SAP Cloud & BTP",
    title: "Extending SAP into the cloud with governance and traceability",
    description:
      "We extend SAP into the cloud with SAP BTP, SAP Cloud, HCI/CPI, and integration services — keeping governance, security, and traceability intact.",
    bullets: [
      "SAP extensions outside the core via SAP BTP.",
      "SAP cloud integrations with HCI/CPI.",
      "BTP workflows and CAP development in Node/Java.",
      "Build / Apps applications integrated with SAP identity.",
    ],
    badges: [
      "SAP BTP",
      "SAP Cloud",
      "HCI / CPI",
      "CAP",
      "Workflow",
      "Build / Apps",
    ],
    icon: Cloud,
  },
  {
    id: "ops",
    label: "Governance & operations",
    eyebrow: "SAP governance & operations",
    title: "Solution Manager, ITSM, Change, and Test Management",
    description:
      "We also cover the operational side: solution documentation, change management, testing, custom-code management, ITSM, and service continuity.",
    bullets: [
      "Centralized, maintained Solution Documentation.",
      "ITSM and Change Management on Solution Manager.",
      "Custom Code Management to reduce technical debt.",
      "Test Management for controlled regression.",
      "Document Management and output governance.",
    ],
    badges: [
      "SAP Solution Manager",
      "Solution Documentation",
      "ITSM",
      "Change Management",
      "Custom Code Management",
      "Test Management",
      "SAP Document Management",
    ],
    icon: ShieldCheck,
  },
  {
    id: "middleware",
    label: "Middleware",
    eyebrow: "SAP & third-party middleware",
    title: "Boomi, HCI/CPI, PI/PO, IBM WebSphere, MQ, and APIs",
    description:
      "We design integrations between SAP and third parties through enterprise middleware such as Boomi, HCI/CPI, PI/PO, IBM WebSphere, and MQ — with monitoring, error handling, reprocessing, and traceability.",
    bullets: [
      "Boomi for integration flows between cloud and on-prem.",
      "SAP HCI/CPI and SAP PI/PO for SAP-centric integrations.",
      "IBM WebSphere Application Server, Message Broker, and MQ.",
      "REST/SOAP APIs with contracts, versioning, and monitoring.",
      "Error handling, reprocessing, and per-interface audit log.",
    ],
    badges: [
      "Boomi",
      "SAP HCI / CPI",
      "SAP PI / PO",
      "IBM WebSphere",
      "IBM MQ",
      "Message Broker",
      "REST",
      "SOAP",
    ],
    icon: Plug,
  },
];

export const CLOUD_PROVIDERS: DeepDiveBlock[] = [
  {
    id: "aws",
    label: "AWS",
    eyebrow: "AWS",
    title: "Lightweight, maintainable, observable architectures",
    description:
      "On AWS we design lightweight, maintainable architectures: static sites on S3 + CloudFront, serverless APIs with API Gateway + Lambda, email delivery with SES, and storage for leads, events, or operational data.",
    bullets: [
      "S3 + CloudFront for corporate sites, assets, and secure distribution.",
      "API Gateway + Lambda for lightweight endpoints and serverless integration.",
      "SES for transactional email and contact forms.",
      "RDS / DynamoDB for persistence depending on the use case.",
      "Per-environment separation with accounts, IAM, and explicit policies.",
      "Baseline observability and operations for continuity.",
    ],
    badges: [
      "S3 + CloudFront",
      "API Gateway",
      "Lambda",
      "SES",
      "RDS",
      "DynamoDB",
      "CloudWatch",
    ],
    icon: Cloud,
  },
  {
    id: "azure",
    label: "Azure",
    eyebrow: "Azure",
    title: "Corporate platforms across identity, data, and applications",
    description:
      "On Azure we help build corporate platforms integrated with identity, data, and internal applications — keeping governance, security, and continuity in scope.",
    bullets: [
      "Corporate applications on App Service and Functions.",
      "Integration with corporate identity (Entra ID).",
      "Azure SQL and managed data services.",
      "Data Lake and Synapse for corporate analytics.",
      "Integration with internal APIs and legacy systems.",
      "Governance, security, and continuous operation.",
    ],
    badges: [
      "App Service",
      "Functions",
      "Azure SQL",
      "Data Lake",
      "Synapse",
      "Entra ID",
    ],
    icon: Cloud,
  },
  {
    id: "gcp",
    label: "GCP",
    eyebrow: "Google Cloud",
    title: "Data, analytics, and managed services",
    description:
      "On GCP we shape the architecture toward data, analytics, and managed services, wiring operational sources into reporting and enterprise consumption.",
    bullets: [
      "BigQuery for analytics and enterprise reporting models.",
      "Cloud Run or managed services for lightweight deployments.",
      "Pub/Sub and data pipelines for ingestion and transformation.",
      "Connecting operational sources to reports and dashboards.",
      "Architecture oriented to data and enterprise consumption.",
    ],
    badges: ["BigQuery", "Cloud Run", "Pub/Sub", "Dataflow", "Looker Studio"],
    icon: Cloud,
  },
];

export const DATA_PLATFORM_BLOCKS: DeepDiveBlock[] = [
  {
    id: "databases",
    label: "Databases",
    eyebrow: "Enterprise databases",
    title: "SQL Server, Oracle, PostgreSQL, MySQL, DB2, Sybase, and SAP HANA",
    description:
      "The service scope covers enterprise databases connected to pipelines, reports, and operational processes with traceability, including modeling, migration, and integration.",
    bullets: [
      "Modeling and design for performance and consistency.",
      "Controlled migrations across enterprise engines.",
      "Integration with SAP and non-SAP systems.",
      "Reporting with traceability to the source data.",
      "Quality validations and reconciliation between sources.",
    ],
    badges: [
      "MS SQL Server",
      "Oracle 11g+",
      "MySQL",
      "PostgreSQL",
      "Sybase",
      "DB2",
      "SAP HANA",
    ],
    icon: Database,
  },
  {
    id: "pipelines",
    label: "Pipelines",
    eyebrow: "Data pipelines",
    title: "Auditable, versioned ingestion, transformation, and quality",
    description:
      "Data pipelines that are auditable and reproducible. No orphan scripts, no processes only one person on the team understands.",
    bullets: [
      "Reliable ingestion from source systems.",
      "Versioned transformations checked into source control.",
      "Quality validations with alerts.",
      "Catalog of sources and dependencies.",
      "Controlled reprocessing in case of errors.",
    ],
    badges: ["ETL/ELT", "Streaming", "Batch", "Data quality"],
    icon: Workflow,
  },
  {
    id: "reporting",
    label: "Reporting & governance",
    eyebrow: "Reporting & governance",
    title: "Common semantic layer and traceable reports",
    description:
      "The design carries source traceability into executive reports and prepares evidence for audit review.",
    bullets: [
      "Common semantic layer across areas.",
      "Executive and operational reports with source traceability.",
      "Traceability to the source data.",
      "Source validation and quality rules.",
      "Data governance per domain.",
    ],
    badges: [
      "Power BI",
      "Tableau",
      "Looker Studio",
      "Semantic layer",
      "Governance",
    ],
    icon: LineChart,
  },
];

export const SOFTWARE_FACTORY_BLOCKS: DeepDiveBlock[] = [
  {
    id: "build",
    label: "What we build",
    eyebrow: "What we build",
    title: "Portals, applications, APIs, reports, interfaces, and workflows",
    description:
      "We do not just build screens. We design portals, internal applications, APIs, reports, interfaces, and workflows connected to real systems — with evolutionary support and per-sprint deliverables.",
    bullets: [
      "Enterprise portals and internal applications.",
      "Reusable APIs and microservices.",
      "Reports, interfaces, and forms.",
      "Workflows and operational tools.",
      "Integrations with SAP and third parties.",
      "Automations and evolutions on existing platforms.",
    ],
    badges: [
      "Portals",
      "Internal apps",
      "APIs",
      "Microservices",
      "Reports",
      "Workflows",
    ],
    icon: Code2,
  },
  {
    id: "operate",
    label: "How we operate",
    eyebrow: "How we run a factory",
    title: "From discovery to L2/L3 support and roadmap",
    description:
      "Factory model with end-to-end accountability: discovery, prioritization, architecture, development, QA, documentation, deployment, support, and evolution.",
    bullets: [
      "Technical and functional discovery.",
      "Continuous backlog prioritization.",
      "Documented architecture design.",
      "Iterative development in agreed delivery cycles.",
      "Controlled QA, documentation, and deployment.",
      "L2/L3 support and evolutionary roadmap.",
    ],
    badges: [
      "Continuous backlog",
      "Sprints",
      "QA",
      "Docs",
      "CI/CD",
      "L2/L3 support",
    ],
    icon: Workflow,
  },
  {
    id: "tech",
    label: "Technologies",
    eyebrow: "Development technologies",
    title: "Java, .NET, TypeScript, Python, ABAP, and SQL",
    description:
      "Pragmatic stack chosen per case according to operational, security, and maintenance requirements.",
    bullets: [
      "Java, J2EE / JSE, and Jruby for enterprise systems.",
      ".NET, C#, and ASP.NET for Microsoft platforms.",
      "TypeScript / React / Node for modern front-ends and BFFs.",
      "Python for automation, data, and AI.",
      "ABAP for development inside SAP.",
      "Advanced SQL across enterprise engines.",
    ],
    badges: [
      "Java",
      "J2EE / JSE",
      "Jruby",
      ".NET",
      "C#",
      "ASP.NET",
      "TypeScript",
      "Python",
      "ABAP",
      "SQL",
    ],
    icon: Layers,
  },
  {
    id: "integrations",
    label: "Integrations",
    eyebrow: "Integration scope",
    title: "We connect SAP and non-SAP — not just build screens",
    description:
      "We design integrations between SAP and non-SAP systems through enterprise middleware, APIs, and controlled services. The focus is not only connecting, but monitoring, documenting, reprocessing errors, and sustaining the operation.",
    bullets: [
      "Versioned integration contracts with clear schemas.",
      "Reusable APIs and services on Java, .NET, and TypeScript.",
      "Enterprise middleware: Boomi, HCI/CPI, PI/PO, IBM WebSphere, and MQ.",
      "Critical-interface monitoring with alerts and audit log.",
      "Error handling, reprocessing, and per-transaction traceability.",
      "Evolutionary support for existing integrations without breaking them.",
    ],
    badges: [
      "Boomi",
      "HCI / CPI",
      "PI / PO",
      "IBM WebSphere",
      "IBM MQ",
      "Message Broker",
      "REST",
      "SOAP",
      "Java Open Source",
    ],
    icon: Network,
  },
  {
    id: "when",
    label: "When it fits",
    eyebrow: "When this model fits",
    title: "When you need speed without losing control",
    description:
      "A dedicated factory can fit when technical complexity and business pressure intersect.",
    bullets: [
      "Backlog the internal team cannot catch up with.",
      "Critical processes tied to Excel files.",
      "Systems that do not talk and force manual double-entry.",
      "Need for a senior team under an agreed mobilization plan.",
      "Ongoing support and evolution — not only initial delivery.",
    ],
    badges: ["Speed", "Control", "Evolution", "Continuity"],
    icon: Sparkles,
  },
];

export const ENTERPRISE_AI_BLOCKS: DeepDiveBlock[] = [
  {
    id: "genai",
    label: "Generative AI",
    eyebrow: "Generative AI with enterprise context",
    title: "LLMs, corporate RAG, permissions, and traceability",
    description:
      "Generative AI solutions wired into private data with RAG, access controls, and traceability. No chatbots floating outside the client's context.",
    bullets: [
      "LLMs grounded on private data with corporate RAG.",
      "Answers with citations and traceability to the source.",
      "Access controls per role and per domain.",
      "Deployment in private cloud or dedicated VPC.",
      "Continuous evaluation of responses.",
    ],
    badges: [
      "LLMs",
      "Corporate RAG",
      "Citations",
      "Permissions",
      "Continuous eval",
    ],
    icon: Sparkles,
  },
  {
    id: "ml",
    label: "Machine learning",
    eyebrow: "Applied machine learning",
    title: "Prediction, classification, and detection with MLOps",
    description:
      "Productive models focused on operation: prediction, classification, anomaly detection, monitoring, and continuous evaluation.",
    bullets: [
      "Prediction and classification over enterprise data.",
      "Anomaly detection in critical processes.",
      "Monitoring of models in production.",
      "Continuous evaluation and retraining.",
      "Operational MLOps with monitoring and controlled deployment.",
    ],
    badges: ["ML", "MLOps", "Anomalies", "Monitoring", "Retraining"],
    icon: Brain,
  },
  {
    id: "assistants",
    label: "Internal assistants",
    eyebrow: "Assistants for consultants and internal teams",
    title: "Search, support, and automation grounded on private context",
    description:
      "Assistants that support consultants and internal teams over documentation, policies, and private data. AI tied to the real work — not the open internet.",
    bullets: [
      "Search across internal documentation.",
      "Support for functional and technical helpdesk.",
      "Process and policy inquiries.",
      "Summarization of information and reports.",
      "Automation of repetitive tasks.",
    ],
    badges: ["Search", "Internal support", "Summaries", "Automation"],
    icon: Wand2,
  },
  {
    id: "copilots",
    label: "Operational copilots",
    eyebrow: "Operational copilots",
    title: "Evidence, decisions, and actions under control",
    description:
      "Enterprise Copilot brings operational context together, explains findings, and prepares the next step for review and approval.",
    bullets: [
      "Answers and findings with evidence.",
      "Differences and risks surfaced for review.",
      "Reports prepared for the accountable person.",
      "Options organized before a decision.",
      "Human approval before sensitive actions.",
    ],
    badges: [
      "Evidence",
      "Signals",
      "Decisions",
      "Approvals",
      "Follow-up",
      "Control",
    ],
    icon: GitBranch,
  },
];

/* Auxiliary icon re-exports (legacy support — safe to remove if no
   consumer reads from this object). */
export const SERVICE_LEGACY_ICONS = {
  Boxes,
  Cloud,
  Code2,
  Database,
  FileBarChart,
  LineChart,
  Network,
  Plug,
  Server,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Wand2,
  Workflow,
};
