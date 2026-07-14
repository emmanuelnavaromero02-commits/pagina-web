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

/* Headline highlights — four service fronts */
export const EXPERIENCE_HIGHLIGHTS: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Enterprise contexts",
    description:
      "A delivery model designed for organizations that need governance, integration, and operational continuity.",
    icon: Building2,
  },
  {
    title: "End-to-end SAP scope",
    description:
      "The proposed scope can cover SAP On-Premise, SAP Cloud, and SAP BTP — functional work, development, integration, governance, and operations.",
    icon: Boxes,
  },
  {
    title: "Software factory model",
    description:
      "A delivery model with prioritized backlog, dedicated specialists, QA, controlled deployment, and evolutionary support.",
    icon: Factory,
  },
  {
    title: "AI applied to operations",
    description:
      "Use cases for generative AI, ML, and automation in HR, finance, reporting, and internal-support processes.",
    icon: Sparkles,
  },
];

/* Service capabilities (used in home and experience) */
export const EXPERIENCE_ROLES: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Technical coordination",
    description:
      "Architecture, integration, and operations coordination for SAP and cloud programs.",
    icon: Compass,
  },
  {
    title: "Enterprise pre-sales",
    description:
      "Scoping, architecture, and delivery-model definition for enterprise proposals.",
    icon: Target,
  },
  {
    title: "Team organization",
    description:
      "Organization of software factories and specialized squads in SAP, cloud, data, and AI.",
    icon: Users,
  },
  {
    title: "SAP delivery",
    description:
      "Delivery scope across ECC, S/4HANA, BTP, SuccessFactors, Ariba, and IBP, focused on integration and operations.",
    icon: Boxes,
  },
  {
    title: "Enterprise integrations",
    description:
      "Integration patterns using Boomi, HCI/CPI, PI/PO, IBM WebSphere, and MQ to connect SAP with enterprise systems.",
    icon: Plug,
  },
  {
    title: "Custom development",
    description:
      "Internal portals, operational applications, and reusable APIs on Java, .NET, Node, and TypeScript.",
    icon: Code2,
  },
  {
    title: "Applied AI",
    description:
      "Internal assistants, RAG over private data, and operational copilots designed for traceability.",
    icon: Brain,
  },
  {
    title: "Operations and support",
    description:
      "Operational continuity with agreed service levels, monitoring, and an evolution backlog.",
    icon: Headphones,
  },
];

/* No client or sector history is published without attributable evidence. */
export const EXPERIENCE_CLIENTS: string[] = [];

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
    eyebrow: "Technical coordination",
    title: "A continuous delivery thread from scoping to operations",
    description:
      "The proposed approach connects scoping, solution design, implementation, support, and evolution under one delivery model.",
    bullets: [
      "Technical coordination and enterprise solution design.",
      "Direct participation of technical owners during scoping.",
      "Organization of multidisciplinary teams.",
      "Budget and contractual-scope follow-up.",
      "Technical continuity during implementation, support, and evolution.",
    ],
    icon: Compass,
  },
  {
    id: "factory",
    eyebrow: "Software factories",
    title: "Continuous operation, not isolated projects",
    description:
      "The operating model can combine a prioritized backlog, dedicated specialists, QA, a roadmap, and evolutionary support.",
    bullets: [
      "Internal or external factory model according to the engagement.",
      "Dedicated specialists with a delivery owner.",
      "Prioritized backlog and agreed deliverables.",
      "Controlled QA, documentation, and deployment.",
      "L2/L3 support and an evolutionary backlog.",
    ],
    icon: Factory,
  },
  {
    id: "sap",
    eyebrow: "SAP and integration",
    title: "Core, development, technical integration, and governance",
    description:
      "The service scope covers functional modules, ABAP development, enterprise middleware, and governance with Solution Manager.",
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
      "The proposed architecture can combine generative AI, machine learning, and AWS, Azure, GCP, or SAP BTP with enterprise data sources.",
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

/* Education and certifications are omitted until they can be attributed. */
export const EXPERIENCE_EDUCATION: { title: string; subtitle?: string }[] = [];

export const EXPERIENCE_CERTIFICATIONS: { title: string; track: string }[] = [];

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
