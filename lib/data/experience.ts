import {
  Award,
  BookOpen,
  Boxes,
  Brain,
  Briefcase,
  Building2,
  Cloud,
  Code2,
  Compass,
  Factory,
  GraduationCap,
  Headphones,
  Network,
  Plug,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wand2,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/* Headline highlights — four core fronts */
export const EXPERIENCE_HIGHLIGHTS: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Large enterprise clients",
    description:
      "Programs delivered for corporations in retail, manufacturing, energy, telecommunications, banking, consumer goods, construction, public sector, logistics, professional services, real estate, and oil and gas.",
    icon: Building2,
  },
  {
    title: "End-to-end SAP teams",
    description:
      "Implementations, evolutions, and support across SAP On-Premise, SAP Cloud, and SAP BTP — core functional work, development, integration, governance, and operations.",
    icon: Boxes,
  },
  {
    title: "Internal and external software factories",
    description:
      "Factory models for clients with continuous backlog, dedicated teams, QA, deployment, and per-sprint evolutionary support.",
    icon: Factory,
  },
  {
    title: "AI applied to operations",
    description:
      "Real cases of generative AI, ML, and automation applied to HR, finance, reporting, and internal-support processes.",
    icon: Sparkles,
  },
];

/* Accumulated capabilities (used in home and experience) */
export const EXPERIENCE_ROLES: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Technical leadership",
    description:
      "Architecture, integration, and operations leadership across large SAP and cloud programs.",
    icon: Compass,
  },
  {
    title: "Enterprise pre-sales",
    description:
      "Scoping, architecture, and delivery-model definition for proposals to corporate clients.",
    icon: Target,
  },
  {
    title: "Team management",
    description:
      "Running software factories and specialized squads in SAP, cloud, data, and AI.",
    icon: Users,
  },
  {
    title: "SAP implementations",
    description:
      "Projects across ECC, S/4HANA, BTP, SuccessFactors, Ariba, and IBP focused on integration and operations.",
    icon: Boxes,
  },
  {
    title: "Enterprise integrations",
    description:
      "Boomi, HCI/CPI, PI/PO, IBM WebSphere, and MQ — connecting SAP to banks, CRM, e-commerce, and legacy.",
    icon: Plug,
  },
  {
    title: "Custom development",
    description:
      "Internal portals, mission-critical applications, and reusable APIs on Java, .NET, Node, and TypeScript.",
    icon: Code2,
  },
  {
    title: "Applied AI",
    description:
      "Internal assistants, RAG over private data, and operational copilots focused on traceability.",
    icon: Brain,
  },
  {
    title: "Operations and support",
    description:
      "Continuity of mission-critical platforms with SLAs, monitoring, and quarterly evolution plans.",
    icon: Headphones,
  },
];

/* Industries served (sector buckets, not client names) */
export const EXPERIENCE_CLIENTS: string[] = [
  "Retail",
  "Manufacturing",
  "Energy",
  "Mining",
  "Construction",
  "Telecommunications",
  "Banking",
  "Consumer goods",
  "Public sector",
  "Logistics",
  "Professional services",
  "Real estate",
  "Oil and gas",
];

/* Tabs of leadership and ways of working on /experience */
export type ExperienceTrack = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
};

export const EXPERIENCE_TRACKS: ExperienceTrack[] = [
  {
    id: "leadership",
    eyebrow: "Technical leadership",
    title: "From pre-sales to go-live — without losing the thread",
    description:
      "Experience leading integration and development programs from pre-sales and solution design through implementation, support, and evolution.",
    bullets: [
      "Technical direction and enterprise solution design.",
      "Pre-sales with technical owners on the front line.",
      "Multidisciplinary team management.",
      "Budget management and contractual commitments.",
      "Hands-on support during implementation, support, and evolution.",
    ],
    icon: Compass,
  },
  {
    id: "factory",
    eyebrow: "Software factories",
    title: "Continuous operation, not isolated projects",
    description:
      "We have designed and run internal and external factories with continuous backlog, dedicated teams, QA, roadmap, and evolutionary support.",
    bullets: [
      "Internal and external factories for corporate clients.",
      "Dedicated teams with an account owner.",
      "Prioritized backlog and per-sprint deliverables.",
      "Controlled QA, documentation, and deployment.",
      "L2/L3 support and a quarterly evolutionary roadmap.",
    ],
    icon: Factory,
  },
  {
    id: "sap",
    eyebrow: "SAP and integration",
    title: "Core, development, technical integration, and governance",
    description:
      "Deep work across the SAP ecosystem — from functional modules and ABAP development through enterprise middleware and governance with Solution Manager.",
    bullets: [
      "Core SAP in FI, CO, SD, MM, HCM, PS, and PM.",
      "ABAP development, reports, forms, enhancements, and workflows.",
      "Technical integration with RFC, IDocs, BAPIs, SAP JCo, and Gateway.",
      "Boomi, HCI/CPI, PI/PO, IBM WebSphere, and MQ middleware.",
      "Governance with Solution Manager, ITSM, Change, and Test Management.",
    ],
    icon: Boxes,
  },
  {
    id: "ai-cloud",
    eyebrow: "AI, cloud, and data",
    title: "Modern platforms wired into the operation",
    description:
      "Generative AI, machine learning, and cloud architectures on AWS, Azure, GCP, and SAP BTP — connected to enterprise databases and corporate reports.",
    bullets: [
      "Generative AI with corporate RAG and per-role permissions.",
      "Productive machine learning with MLOps.",
      "Architectures on AWS, Azure, GCP, and SAP BTP.",
      "Enterprise databases: SQL Server, Oracle, PostgreSQL, MySQL, DB2, Sybase, SAP HANA.",
      "Auditable reporting traceable to the source data.",
    ],
    icon: Cloud,
  },
];

/* Technical formation and certifications */
export const EXPERIENCE_EDUCATION: { title: string; subtitle?: string }[] = [
  {
    title: "Bachelor's in Computer Science (Informatics)",
    subtitle: "Foundational training in software engineering and systems.",
  },
  {
    title: "Master's in Computer Science",
    subtitle:
      "Specialization in architecture, data, and distributed systems.",
  },
];

export const EXPERIENCE_CERTIFICATIONS: { title: string; track: string }[] = [
  { title: "SAP Enterprise Architecture Framework", track: "SAP architecture" },
  { title: "SAP HANA Cloud Integration", track: "SAP integration" },
  { title: "SAP Enterprise SOA", track: "SAP architecture" },
  { title: "SAP ABAP", track: "SAP development" },
  { title: "SAP Workflows", track: "SAP processes" },
  { title: "SAP Solution Manager", track: "SAP governance" },
];

/* Aux icon exports (legacy) */
export const EXPERIENCE_ICONS = {
  Award,
  BookOpen,
  Briefcase,
  Code2,
  GraduationCap,
  Network,
  ShieldCheck,
  Wand2,
  Workflow,
};
