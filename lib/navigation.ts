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
    label: "Services",
    href: "/services",
    featured: {
      eyebrow: "Complete portfolio",
      title: "Seven domains. One transformation system.",
      description:
        "People, payroll, SAP, software, managed operations, cloud, data, security, and applied intelligence under one delivery model.",
      href: "/services",
      cta: "Explore all capabilities",
    },
    columns: [
      {
        title: "People + SAP Core",
        href: "/services#personas-nomina",
        links: [
          {
            label: "People, talent & payroll",
            href: "/services#personas-nomina",
            description: "SuccessFactors, HCM, payroll, time, and talent.",
          },
          {
            label: "SAP ERP & S/4HANA",
            href: "/services/sap",
            description: "Strategy, implementation, migration, and stabilization.",
          },
          {
            label: "AMS & workforce",
            href: "/services#operacion-ams",
            description: "24/7 support, Basis, UKG, and workforce operations.",
          },
        ],
      },
      {
        title: "Engineering",
        href: "/services#fabrica-integracion",
        links: [
          {
            label: "ABAP + Fiori Factory",
            href: "/services/software-factory#abap-factory-lab",
            description: "Industrialized delivery with up to 60% potential savings.",
          },
          {
            label: "Custom software",
            href: "/services#fabrica-integracion",
            description: "Products, portals, applications, APIs, and microservices.",
          },
          {
            label: "Enterprise integration",
            href: "/services/sap-integrations",
            description: "SAP, BTP, middleware, APIs, and third parties.",
          },
        ],
      },
      {
        title: "Cloud + Governance",
        href: "/services#nube-datos",
        links: [
          {
            label: "AWS migrations",
            href: "/services/cloud-data/aws",
            description: "Assessment, migration, SAP workloads, FinOps, and operations.",
          },
          {
            label: "Cloud, data & SAP environments",
            href: "/services#nube-datos",
            description: "AWS, Azure, GCP, data platforms, and test environments.",
          },
          {
            label: "Privacy & security",
            href: "/services#privacidad-transformacion",
            description: "PII, masking, access risk, retention, and compliance.",
          },
          {
            label: "Landscape transformation",
            href: "/services#privacidad-transformacion",
            description: "Carve-outs, mergers, consolidation, and selective data.",
          },
        ],
      },
      {
        title: "Applied Intelligence",
        href: "/services#innovacion-inteligencia",
        links: [
          {
            label: "AI & enterprise innovation",
            href: "/services#innovacion-inteligencia",
            description: "Generative AI, ML, automation, and custom innovation.",
          },
          {
            label: "Decision intelligence",
            href: "/copilot",
            description: "A calibrated quantitative core, agents, and generative AI.",
          },
          {
            label: "Interactive demonstration",
            href: "/copilot#demo-interactiva",
            description: "See signals become explainable, supervised action.",
          },
        ],
      },
    ],
  },
  {
    label: "Innovation",
    href: "/copilot",
    featured: {
      eyebrow: "New capability",
      title: "Decision Intelligence",
      description:
        "A calibrated quantitative core, specialist agents, and generative AI over governed enterprise data.",
      href: "/copilot",
      cta: "Explore the innovation",
    },
    columns: [
      {
        title: "System",
        links: [
          {
            label: "Overview",
            href: "/copilot",
            description: "From governed data to trusted action.",
          },
          {
            label: "What it solves",
            href: "/copilot/how-it-works",
            description: "Agents, scenarios, and controlled action.",
          },
        ],
      },
      {
        title: "Capabilities",
        links: [
          {
            label: "Operational scenario",
            href: "/copilot/demo",
            description: "From fragmented evidence to a traceable decision.",
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
        ],
      },
    ],
  },
  {
    label: "Business areas",
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
            label: "Process automation",
            href: "/industries/process-automation",
            description: "Assisted flows, less manual work.",
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
    label: "Company",
    href: "/about",
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
      { label: "People, talent & payroll", href: "/services#personas-nomina" },
      { label: "SAP ERP & S/4HANA", href: "/services#sap-erp" },
      { label: "Software factory & integration", href: "/services#fabrica-integracion" },
      { label: "AMS & workforce", href: "/services#operacion-ams" },
      { label: "Cloud & data", href: "/services#nube-datos" },
      { label: "Privacy & transformation", href: "/services#privacidad-transformacion" },
      { label: "AI & enterprise innovation", href: "/services#innovacion-inteligencia" },
    ],
  },
  {
    title: "Innovation",
    links: [
      { label: "Overview", href: "/copilot" },
      { label: "Interactive demonstration", href: "/copilot#demo-interactiva" },
      { label: "Operational impact", href: "/copilot/impact" },
      { label: "What it solves", href: "/copilot/how-it-works" },
      { label: "Use cases", href: "/copilot/use-cases" },
      { label: "Security", href: "/copilot/security" },
      { label: "Request a pilot", href: "/copilot/pilot" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Experience", href: "/experience" },
      { label: "Business areas", href: "/industries" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
