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
    title: "Bring operational context together",
    description:
      "Organizes authorized information currently scattered across systems, files, and teams.",
    icon: Database,
  },
  {
    title: "Explain with evidence",
    description:
      "Presents answers and findings with the context needed to review and verify them.",
    icon: FileBarChart,
  },
  {
    title: "Surface differences and risks",
    description:
      "Highlights changes, inconsistencies, and pending work that require accountable review.",
    icon: AlertTriangle,
  },
  {
    title: "Prepare reports for review",
    description:
      "Gets verifiable summaries and reports ready for the team to review and complete.",
    icon: BarChart3,
  },
  {
    title: "Frame the options",
    description:
      "Organizes alternatives and criteria so teams can compare the next step before deciding.",
    icon: Cable,
  },
  {
    title: "Prepare controlled actions",
    description:
      "Prepares actions and follow-up under permissions, human review, and traceability.",
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
      "Teams consolidating recurring reports by hand across multiple sources.",
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
      "Operational questions delayed by manual searches and source validation.",
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
      "Closings, reconciliations, variance explanation, and line-item validation.",
    icon: BarChart3,
  },
  {
    area: "Operations",
    description:
      "Current operational support — status, process inquiries, and assisted decisions.",
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

/* Qualitative workflow scenarios used by /copilot. */

export const COPILOT_IMPACT_STATS: { label: string; value: string }[] = [
  { label: "Workflow", value: "Assisted queries" },
  { label: "Spreadsheets", value: "Controlled inputs" },
  { label: "Audit", value: "Source references" },
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
    withCopilot: "Assisted consolidation with source references",
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
    withCopilot: "Referenced evidence prepared for review",
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
    withCopilot: "Cross-source references prepared for analysis",
    impact: "Designed to support incident diagnosis",
  },
];

/* Work the copilot reduces / amplifies — kept for potential reuse. */

export const COPILOT_REDUCES: { text: string; icon: LucideIcon }[] = [
  {
    text: "Exporting CSVs from one system and pasting them into another.",
    icon: Minus,
  },
  { text: "Rebuilding lookup rules for recurring reports.", icon: Minus },
  { text: "Preparing recurring closing reports by hand.", icon: Minus },
  { text: "Hunting approvals through old email threads.", icon: Minus },
  { text: "Chasing evidence for an audit.", icon: Minus },
  {
    text: "Teaching new analysts through undocumented table knowledge.",
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
      "Traceable answers for review without relying on an ad hoc spreadsheet.",
    icon: Compass,
  },
  {
    label: "CFO",
    description:
      "Closings, reconciliations, and variances with source references and validation controls.",
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
      "Assisted data preparation with more room for solution design.",
    icon: Briefcase,
  },
  {
    label: "Operations",
    description:
      "Incidents, status, and cross-source validations presented in one controlled workflow.",
    icon: Workflow,
  },
  {
    label: "HR",
    description:
      "Headcount, absences, organizational structure, and master data — queryable with traceability.",
    icon: Building2,
  },
];

/* Hero cards "Before → With Enterprise Copilot" — short story-style. */

export const COPILOT_HERO_CARDS: { before: string; after: string }[] = [
  {
    before: "Cross-system reports built by hand",
    after: "Assisted consolidation with source references",
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

/* 7 Enterprise Copilot Capabilities. */

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
