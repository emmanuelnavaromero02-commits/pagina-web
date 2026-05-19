import {
  Activity,
  ArrowRight,
  BarChart3,
  Brain,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Compass,
  Database,
  DollarSign,
  FileBarChart,
  GitBranch,
  Layers,
  LineChart,
  Network,
  Plug,
  ShoppingCart,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  Users,
  Wand2,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* HOME — High-impact quick wins block */
export const QUICK_WINS: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Automation",
    description:
      "Replace repetitive manual tasks with focused workflows that scale.",
    icon: Wand2,
  },
  {
    title: "Reporting & Control",
    description:
      "Trusted reports with traceability from KPI to source system.",
    icon: BarChart3,
  },
  {
    title: "Finance & Payroll",
    description:
      "Closings, reconciliations, and payroll flows with fewer errors.",
    icon: LineChart,
  },
  {
    title: "Excel-based Processes",
    description:
      "Move critical operations out of spreadsheets and into living software.",
    icon: FileBarChart,
  },
  {
    title: "Faster Decisions",
    description:
      "Real-time visibility for leadership without waiting days for an analyst.",
    icon: Activity,
  },
  {
    title: "SAP & System Integration",
    description:
      "ECC, S/4HANA, BTP, APIs, and middleware connected without breaking what already works.",
    icon: Plug,
  },
];

/* HOME — The real business challenge */
export const BUSINESS_CHALLENGES: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Speed",
    description:
      "Decisions and operational responses that arrive in hours, not weeks.",
    icon: Zap,
  },
  {
    title: "Efficiency",
    description:
      "Less manual rework, less idle time, less operational friction.",
    icon: Activity,
  },
  {
    title: "Integration",
    description:
      "ERP, CRM, cloud, APIs, and legacy systems working as one ecosystem.",
    icon: Network,
  },
  {
    title: "Automation",
    description:
      "Repeating tasks delegated to intelligent flows with human oversight.",
    icon: Wand2,
  },
  {
    title: "Operational Intelligence",
    description:
      "Data turned into predictions, alerts, and decisions — not dashboards alone.",
    icon: Brain,
  },
  {
    title: "Execution Capacity",
    description:
      "Capacity to deliver change continuously, not as one-off projects.",
    icon: Target,
  },
];

/* HOME — Strategic Process Analysis dimensions */
export const ANALYSIS_DIMENSIONS: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Operations",
    description: "How work actually moves through the business.",
    icon: Workflow,
  },
  {
    title: "Business Flows",
    description: "End-to-end flows between teams, systems, and partners.",
    icon: GitBranch,
  },
  {
    title: "Productivity",
    description: "Output per hour, per cycle, per role.",
    icon: Activity,
  },
  {
    title: "Costs",
    description: "Where money is lost or absorbed silently.",
    icon: DollarSign,
  },
  {
    title: "Cycle Times",
    description: "How long key processes really take.",
    icon: Timer,
  },
  {
    title: "Organizational Structure",
    description: "Roles, responsibilities, and operating handoffs.",
    icon: Users,
  },
  {
    title: "Efficiency",
    description: "Friction points and bottlenecks across the operation.",
    icon: Layers,
  },
  {
    title: "Decision-Making",
    description: "How information becomes decisions and actions.",
    icon: Compass,
  },
];

/* HOME — The 7-Pillar Architecture */
export const SEVEN_PILLARS: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Strategic Vision",
    description:
      "We analyze business structure, processes, operations, costs, cycle times, productivity, and decision-making to identify where the company is losing speed, efficiency, and money.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Enterprise Integration",
    description:
      "We connect ERP, CRM, operations, APIs, cloud, databases, automations, legacy systems, teams, and workflows so the business works as one operating ecosystem.",
    icon: Network,
  },
  {
    number: "03",
    title: "Governed Data",
    description:
      "We build governed data foundations with Bronze, Silver, and Gold layers, security, traceability, auditability, compliance, and operational control. Without trusted data, there is no real intelligence.",
    icon: Database,
  },
  {
    number: "04",
    title: "Intelligent Automation",
    description:
      "We reduce manual tasks, idle time, rework, operational dependency, and friction so teams operate faster with less drag.",
    icon: Wand2,
  },
  {
    number: "05",
    title: "Operational Intelligence",
    description:
      "We turn information into decisions, predictions, alerts, automations, optimizations, and strategic actions. This is not visualization — it is activation.",
    icon: Brain,
  },
  {
    number: "06",
    title: "Continuous Evolution",
    description:
      "We do not deliver static software. We deliver living infrastructure: new AI agents, knowledge modules, models, flows, and business capabilities over time.",
    icon: Activity,
  },
  {
    number: "07",
    title: "Business Transformation",
    description:
      "The goal is not to implement technology. The goal is to transform how the company operates: more speed, intelligence, control, automation, efficiency, productivity, growth, and profitability.",
    icon: Sparkles,
  },
];

/* HOME — Implementation model (kept for backward compat) */
export const IMPLEMENTATION_STEPS: {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    step: "01",
    title: "Diagnose the bottleneck",
    description:
      "A short walkthrough to identify the operational pain that is costing time, money, or control.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Connect sources",
    description:
      "We hook into the data and process sources required for the focused use case.",
    icon: Network,
  },
  {
    step: "03",
    title: "Automate or build",
    description:
      "We deliver a focused solution — automation, integration, report, or copilot — without stopping the operation.",
    icon: Wand2,
  },
  {
    step: "04",
    title: "Measure & decide next",
    description:
      "We measure the impact, agree on what worked, and define the next quick win or scale plan.",
    icon: CheckCircle2,
  },
];

/* HOME — Areas of Impact (business functions) */
export const AREAS_OF_IMPACT: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Finance",
    description:
      "EBITDA visibility, cash flow, margins, intelligent financial control, reconciliations, and variance analysis.",
    icon: BarChart3,
  },
  {
    title: "Sales",
    description:
      "Revenue intelligence, forecasting, commercial automation, customer analysis, and pipeline visibility.",
    icon: TrendingUp,
  },
  {
    title: "Operations",
    description:
      "Operational efficiency, logistics optimization, inventory control, process monitoring, and cycle-time reduction.",
    icon: Workflow,
  },
  {
    title: "Procurement",
    description:
      "Spend management, supplier visibility, sourcing control, purchasing workflows, and operational savings.",
    icon: ShoppingCart,
  },
  {
    title: "Executive Management",
    description:
      "Executive intelligence, real-time monitoring, strategic visibility, KPI intelligence, and decision support.",
    icon: LineChart,
  },
  {
    title: "HR / Payroll",
    description:
      "Headcount, payroll processes, absences, organizational structure, master data, and cross-system validation.",
    icon: Users,
  },
];

/* HOME — Methodologies / Capabilities (tabs) */
export const METHODOLOGIES: {
  id: string;
  label: string;
  description: string;
  items: string[];
}[] = [
  {
    id: "ops",
    label: "Operational Optimization",
    description:
      "Reduce friction across the operation and free up capacity for higher-value work.",
    items: [
      "Lean Operations",
      "Continuous Improvement",
      "Process Optimization",
      "Business Intelligence",
    ],
  },
  {
    id: "automation",
    label: "Automation & Efficiency",
    description:
      "Replace repetitive work with intelligent flows that integrate with the rest of the ecosystem.",
    items: [
      "Intelligent Automation",
      "Workflow Orchestration",
      "Process Mining",
      "AI Operational Flows",
    ],
  },
  {
    id: "strategy",
    label: "Business Strategy",
    description:
      "Give leadership the visibility and predictive insight they need to decide faster.",
    items: [
      "KPI Intelligence",
      "Executive Analytics",
      "Forecasting",
      "Strategic Visibility",
      "Performance Management",
    ],
  },
  {
    id: "governance",
    label: "Governance & Control",
    description:
      "Operate at scale without losing traceability, compliance, or security.",
    items: [
      "Data Governance",
      "Compliance",
      "Auditability",
      "Security Frameworks",
      "Traceability",
    ],
  },
];

/* HOME — Ecosystem orchestration pills */
export const ECOSYSTEM_PILLS: string[] = [
  "ERP",
  "CRM",
  "Cloud",
  "APIs",
  "Data Lakes",
  "Excel",
  "Legacy Systems",
  "Automations",
  "Artificial Intelligence",
  "Advanced Analytics",
];

/* HOME — Experience bridge from integration to product (kept for
   compatibility with the existing ExperienceForCopilot section). */
export const EXPERIENCE_BRIDGE: {
  step: string;
  title: string;
  description: string;
  badges: string[];
  icon: LucideIcon;
}[] = [
  {
    step: "01",
    title: "Enterprise integration",
    description:
      "Core SAP, ABAP, RFC, IDocs, and middleware running mission-critical operations.",
    badges: ["SAP", "ABAP", "Boomi", "HCI/CPI", "PI/PO"],
    icon: Plug,
  },
  {
    step: "02",
    title: "Software factory",
    description:
      "Dedicated senior teams building portals, apps, and APIs with a pragmatic stack.",
    badges: ["Java", ".NET", "TypeScript", "Microservices"],
    icon: Code2,
  },
  {
    step: "03",
    title: "Cloud & data",
    description:
      "AWS, Azure, GCP, and enterprise databases supporting auditable reporting.",
    badges: ["AWS", "Azure", "GCP", "SAP HANA"],
    icon: Cloud,
  },
  {
    step: "04",
    title: "Applied AI",
    description:
      "Corporate RAG, productive ML, and assistants wired into real processes.",
    badges: ["GenAI", "ML", "MLOps", "RAG"],
    icon: Brain,
  },
];

/* HOME — preview of use cases (kept lightweight) */
export const HOME_USE_CASES: {
  title: string;
  icon: LucideIcon;
  href: string;
}[] = [
  { title: "HR", icon: Building2, href: "/industries/hr-payroll" },
  { title: "Finance", icon: BarChart3, href: "/industries/finance" },
  { title: "Operations", icon: Workflow, href: "/industries/operations" },
  {
    title: "Executive reporting",
    icon: LineChart,
    href: "/industries/executive-reporting",
  },
  { title: "Integrations", icon: Plug, href: "/industries/sap-integrations" },
  { title: "Automation", icon: Wand2, href: "/industries/process-automation" },
];

/* CONTACT — what happens next (4 tight steps per spec) */
export const CONTACT_AFTER_STEPS: {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    step: "01",
    title: "We review your context",
    description:
      "We read your message and set up a short conversation to understand the real case.",
    icon: Compass,
  },
  {
    step: "02",
    title: "We identify the bottleneck",
    description:
      "We pinpoint where the operation is losing time, money, or control.",
    icon: Target,
  },
  {
    step: "03",
    title: "We define a quick-win scope",
    description:
      "We agree on one measurable problem, the sources we need, and the working window.",
    icon: CheckCircle2,
  },
  {
    step: "04",
    title: "We propose a pilot or roadmap",
    description:
      "We send back a focused pilot proposal or a phased roadmap with deliverables.",
    icon: ArrowRight,
  },
];

/* Re-export used as legacy helper for components that imported the
   old WHAT_WE_DO constant. */
export const WHAT_WE_DO: {
  verb: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
}[] = [
  {
    verb: "We build",
    title: "Enterprise software",
    description:
      "Internal platforms, portals, and tailored applications delivered by dedicated senior teams that own the outcome.",
    icon: Code2,
    bullets: [
      "Mission-critical applications",
      "Internal and supplier portals",
      "APIs and versioned microservices",
    ],
  },
  {
    verb: "We connect",
    title: "Systems that do not talk",
    description:
      "Real integrations across SAP, cloud, APIs, and databases. No fragile patches. No Excel as middleware.",
    icon: Plug,
    bullets: [
      "SAP On-Premise, Cloud, and BTP",
      "Boomi / HCI / PI middleware",
      "Internal and third-party APIs",
    ],
  },
  {
    verb: "We automate",
    title: "Operations with applied AI",
    description:
      "Copilots, assistants, and productive ML models grounded on your own data and business rules. AI that connects, not demos.",
    icon: Sparkles,
    bullets: [
      "Enterprise Copilot",
      "Internal assistants over private data",
      "Productive ML with MLOps",
    ],
  },
];

/* Legacy export name preserved for backward compatibility. */
export const OPERATING_MODEL = IMPLEMENTATION_STEPS;
