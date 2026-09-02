import {
  Activity,
  AlertTriangle,
  ArrowUp,
  BarChart3,
  Briefcase,
  Building2,
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
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const COPILOT_CAPABILITIES: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Connect governed data",
    description:
      "Integrates authorized information from SAP, CRM, databases, APIs, files, and public sources.",
    icon: Database,
  },
  {
    title: "Understand with generative AI",
    description:
      "Queries corporate knowledge and explains findings with citations, context, and visible warnings.",
    icon: FileBarChart,
  },
  {
    title: "Detect signals and anomalies",
    description:
      "Identifies changes, inconsistencies, relationships, and pending work that require attention.",
    icon: AlertTriangle,
  },
  {
    title: "Coordinate specialized agents",
    description:
      "Assigns tasks to data, finance, talent, risk, and operations agents under one shared context.",
    icon: Network,
  },
  {
    title: "Compare scenarios",
    description:
      "Evaluates alternatives through simulation, sensitivity, and calibrated confidence when needed.",
    icon: BarChart3,
  },
  {
    title: "Prepare controlled actions",
    description:
      "Prepares actions under permissions, frozen evidence, human approval, and auditability.",
    icon: ShieldCheck,
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
    title: "Organizational isolation",
    description:
      "Data, credentials, agents, and executions remain limited to the authorized workspace.",
    icon: ServerCog,
  },
  {
    title: "Validate before executing",
    description:
      "Sensitive actions are confirmed before they run against the real systems.",
    icon: ShieldCheck,
  },
  {
    title: "Evidence and traceability",
    description:
      "Every finding preserves sources, freshness, scope, and context for review and audit.",
    icon: GitBranch,
  },
  {
    title: "Separation of responsibilities",
    description:
      "The person proposing an action cannot approve it when the process requires a second review.",
    icon: AlertTriangle,
  },
  {
    title: "Auditable outcome",
    description:
      "Decisions, approvals, attempts, and outcomes are recorded for follow-up and recovery.",
    icon: FileBarChart,
  },
];

/* Qualitative workflow scenarios used by /copilot. */

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
      "Closings, reconciliations, and variances with connected evidence and validation controls.",
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
    text: "Connect enterprise sources, public sources, and files under an authorized context.",
    icon: Database,
  },
  {
    text: "Publish trusted data with visible origin, quality, freshness, and traceability.",
    icon: Layers,
  },
  {
    text: "Coordinate specialized agents with tools, memory, and scheduled tasks.",
    icon: Network,
  },
  {
    text: "Generate answers and analysis over corporate knowledge with verifiable evidence.",
    icon: FileBarChart,
  },
  {
    text: "Detect anomalies, relationships, risks, and pending work without fabricating certainty.",
    icon: AlertTriangle,
  },
  {
    text: "Explore dynamic scenarios and observe how the decision changes as its conditions are adjusted.",
    icon: BarChart3,
  },
  {
    text: "Prepare actions with preview, approval, controlled execution, and outcome recording.",
    icon: ShieldCheck,
  },
];
