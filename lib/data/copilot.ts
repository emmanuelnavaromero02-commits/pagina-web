import {
  Activity,
  AlertTriangle,
  ArrowUp,
  BarChart3,
  Briefcase,
  Building2,
  Cable,
  Compass,
  Database,
  FileBarChart,
  GitBranch,
  Layers,
  LineChart,
  Lock,
  Minus,
  Network,
  ServerCog,
  ShieldCheck,
  Wand2,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const COPILOT_CAPABILITIES: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Query enterprise data",
    description:
      "Answers operational questions using real data from SAP, databases, and internal reports.",
    icon: Database,
  },
  {
    title: "Explain numbers and reports",
    description:
      "Turns metrics and closings into clear explanations for the team and the leadership.",
    icon: FileBarChart,
  },
  {
    title: "Validate inconsistencies",
    description:
      "Detects gaps between sources and proposes corrections before they reach the final report.",
    icon: AlertTriangle,
  },
  {
    title: "Generate executive reports",
    description:
      "Builds leadership-ready views from the operational information of the day.",
    icon: BarChart3,
  },
  {
    title: "Connect SAP, databases & APIs",
    description:
      "Integrates with SAP, corporate databases, and internal APIs without breaking what already works.",
    icon: Cable,
  },
  {
    title: "Reduce repetitive tasks",
    description:
      "Automates queries, validations, and reports that are currently done manually in Excel.",
    icon: Wand2,
  },
];

export const COPILOT_PROBLEMS: { title: string; description: string }[] = [
  {
    title: "Scattered data",
    description:
      "Critical information spread across SAP, Excel, databases, and manual reports.",
  },
  {
    title: "Manual reporting",
    description:
      "Teams spending days consolidating reports that could be generated automatically.",
  },
  {
    title: "Operational errors",
    description:
      "Inconsistencies caught too late — usually only after they hit the final report.",
  },
  {
    title: "Excel dependency",
    description:
      "Critical processes tied to a single spreadsheet maintained by one person on the team.",
  },
  {
    title: "Disconnected systems",
    description:
      "Platforms that do not talk to each other and force manual double-entry.",
  },
  {
    title: "Slow internal answers",
    description:
      "Operational questions that take days to answer and block decisions.",
  },
];

export const COPILOT_USE_CASES: {
  area: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    area: "Human Resources",
    description:
      "Headcount, vacation, organizational structure, and master-data validations.",
    icon: Building2,
  },
  {
    area: "Finance",
    description:
      "Closings, reconciliations, variance explanation, and partida-level validation.",
    icon: BarChart3,
  },
  {
    area: "Operations",
    description:
      "Live operational support — status, process inquiries, and assisted decisions.",
    icon: Workflow,
  },
  {
    area: "Executive reporting",
    description:
      "Boardroom-ready answers with traceability back to the source data.",
    icon: LineChart,
  },
  {
    area: "Audit",
    description:
      "Traceability of queries, actions, and applied rules over operational data.",
    icon: ShieldCheck,
  },
  {
    area: "Internal support",
    description:
      "Assisted first-line response for technical and functional helpdesk teams.",
    icon: Activity,
  },
];

export const COPILOT_SECURITY: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Role-based permissions",
    description:
      "Each user accesses only the information authorized for their role and the agreed scope.",
    icon: Lock,
  },
  {
    title: "Traceability",
    description:
      "Relevant queries and actions can be logged with user, context, and result for audit review.",
    icon: GitBranch,
  },
  {
    title: "Validate before executing",
    description:
      "Sensitive actions are confirmed before they run against the real systems.",
    icon: ShieldCheck,
  },
  {
    title: "Audit log",
    description:
      "Configurable logs of changes, access, and results, exportable for compliance review.",
    icon: FileBarChart,
  },
  {
    title: "No writes without approval",
    description:
      "The copilot does not write to critical systems without explicit human or workflow approval.",
    icon: AlertTriangle,
  },
  {
    title: "Controlled scope",
    description:
      "Each pilot defines the authorized information, accountable people, and actions subject to approval.",
    icon: ServerCog,
  },
];

/* Indicative impact scenarios used by /copilot — explicitly framed
   as orientative, never as guaranteed results. */

export const COPILOT_IMPACT_STATS: { label: string; value: string }[] = [
  { label: "Workflow", value: "Assisted queries" },
  { label: "Spreadsheets", value: "Controlled inputs" },
  { label: "Audit", value: "Connected evidence" },
  { label: "Actions", value: "Approval before executing" },
];

export const COPILOT_IMPACT_ROWS: {
  task: string;
  before: string;
  withCopilot: string;
  impact: string;
}[] = [
  {
    task: "Monthly report across systems",
    before: "Manual exports and cross-checks",
    withCopilot: "Assisted consolidation with connected evidence",
    impact: "Designed to reduce manual consolidation",
  },
  {
    task: "Multi-system financial reconciliation",
    before: "Manual matching across disconnected sources",
    withCopilot: "Assisted matching under explicit rules",
    impact: "Designed to surface mismatches for review",
  },
  {
    task: "Answer to an external auditor",
    before: "Evidence gathered across files and messages",
    withCopilot: "Organized evidence prepared for review",
    impact: "Designed to support traceability",
  },
  {
    task: "Executive dashboard generation",
    before: "Manual refresh from multiple sources",
    withCopilot: "Assisted refresh from authorized sources",
    impact: "Designed to reduce dependence on manual reports",
  },
  {
    task: "Analyst / consultant onboarding",
    before: "Undocumented knowledge of tables and processes",
    withCopilot: "Contextual guidance over sources and rules",
    impact: "Designed to make operational context easier to find",
  },
  {
    task: "Operational incident research",
    before: "Manual searches across logs and systems",
    withCopilot: "Connected signals prepared for analysis",
    impact: "Designed to support incident diagnosis",
  },
];

/* Work the copilot reduces / amplifies — kept for potential reuse. */

export const COPILOT_REDUCES: { text: string; icon: LucideIcon }[] = [
  {
    text: "Exporting CSVs from one system and pasting them into another.",
    icon: Minus,
  },
  { text: "Building VLOOKUPs every week.", icon: Minus },
  { text: "Repeating monthly closing reports by hand.", icon: Minus },
  { text: "Hunting approvals through old email threads.", icon: Minus },
  { text: "Chasing evidence for an audit.", icon: Minus },
  {
    text: "Spending months teaching new analysts which table holds what.",
    icon: Minus,
  },
];

export const COPILOT_POWERS: { text: string; icon: LucideIcon }[] = [
  { text: "Analyzing variances with cross-source data.", icon: ArrowUp },
  { text: "Deciding with complete, traceable information.", icon: ArrowUp },
  { text: "Detecting risks before they escalate.", icon: ArrowUp },
  { text: "Prioritizing actions with criteria.", icon: ArrowUp },
  { text: "Answering audits with evidence ready.", icon: ArrowUp },
  { text: "Designing better processes over real data.", icon: ArrowUp },
];

/* What each role sees in the Copilot. */

export const COPILOT_ROLES: {
  label: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    label: "CEO",
    description:
      "Faster answers to decide — no waiting for someone to build a spreadsheet.",
    icon: Compass,
  },
  {
    label: "CFO",
    description:
      "Closings, reconciliations, and variances with less manual work and more evidence.",
    icon: BarChart3,
  },
  {
    label: "Compliance / Audit",
    description:
      "Who did what, when, with which source, and under which approval. Evidence ready to review.",
    icon: ShieldCheck,
  },
  {
    label: "Consultant / Partner",
    description:
      "Fewer hours moving data, more hours designing high-value solutions.",
    icon: Briefcase,
  },
  {
    label: "Operations",
    description:
      "Incidents, status, and cross-source validations resolved in less time and with fewer errors.",
    icon: Workflow,
  },
  {
    label: "HR",
    description:
      "Headcount, absences, organizational structure, and master data — queryable with traceability.",
    icon: Building2,
  },
];

/* Hero cards "Before → With AI Decision Agents" — short story-style. */

export const COPILOT_HERO_CARDS: { before: string; after: string }[] = [
  {
    before: "Cross-system reports built by hand",
    after: "Assisted consolidation with connected evidence",
  },
  {
    before: "Reconciliations across disconnected sources",
    after: "Assisted matching under explicit rules",
  },
  {
    before: "Manual audit and lost emails",
    after: "Actions, approvals, and sources logged",
  },
];

/* 7 AI Decision Agents Capabilities. */

export const COPILOT_EXACTLY: { text: string; icon: LucideIcon }[] = [
  {
    text: "Bring together authorized context currently scattered across systems, files, and teams.",
    icon: Database,
  },
  {
    text: "Surface differences, changes, risks, and pending work that require review.",
    icon: AlertTriangle,
  },
  {
    text: "Present answers, reports, and findings with verifiable evidence.",
    icon: FileBarChart,
  },
  {
    text: "Prepare summaries, reports, and follow-up for team review.",
    icon: Layers,
  },
  {
    text: "Frame options and criteria so the accountable person can compare them.",
    icon: Network,
  },
  {
    text: "Get the next step ready and request approval before any sensitive action.",
    icon: ShieldCheck,
  },
  {
    text: "Keep the request, decision, authorization, and outcome connected.",
    icon: GitBranch,
  },
];
