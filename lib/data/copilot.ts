import {
  Activity,
  AlertTriangle,
  ArrowUp,
  BarChart3,
  Bot,
  Boxes,
  Briefcase,
  Building2,
  Cable,
  CheckCircle2,
  Cloud,
  Compass,
  Database,
  FileBarChart,
  GitBranch,
  Layers,
  LineChart,
  Lock,
  Minus,
  Network,
  Plug,
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

export const COPILOT_IS: string[] = [
  "An operational AI layer wired into your current systems.",
  "A single point of intelligent inquiry for internal teams.",
  "A validator that applies explicit business rules.",
  "A report generator with traceability back to the source.",
  "An assistant connected to SAP, databases, APIs, and reports.",
];

export const COPILOT_ISNT: string[] = [
  "Not a generic chatbot without enterprise context.",
  "Not a replacement for SAP, ERP, CRM, or for the team's accountability.",
  "Not an agent that executes sensitive actions without explicit approval.",
  "Not a tool that invents data or hallucinates results.",
  "Not a system that breaks existing flows or duplicates them in parallel.",
];

export const COPILOT_BENEFITS: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Less manual work",
    description:
      "Queries, validations, and reports that used to be done by hand move into an assisted flow.",
    icon: Wand2,
  },
  {
    title: "Less Excel dependency",
    description:
      "Critical processes stop depending on a file maintained by a single person.",
    icon: FileBarChart,
  },
  {
    title: "Fewer consolidation errors",
    description:
      "The copilot catches mismatches between sources before they reach the final report.",
    icon: AlertTriangle,
  },
  {
    title: "Faster internal answers",
    description:
      "Operational questions get an answer with traceability back to the source data.",
    icon: Activity,
  },
  {
    title: "More traceability",
    description:
      "Every query, validation, and action is logged for audit without extra effort.",
    icon: GitBranch,
  },
  {
    title: "Better data governance",
    description:
      "Rules apply in one place and propagate into every answer and report.",
    icon: Layers,
  },
];

export const COPILOT_CONNECTIONS: { title: string; icon: LucideIcon }[] = [
  { title: "SAP On-Premise / Cloud / BTP", icon: Boxes },
  { title: "Enterprise databases", icon: Database },
  { title: "Internal APIs", icon: Network },
  { title: "Cloud platforms", icon: Cloud },
  { title: "Reports and BI", icon: LineChart },
  { title: "Legacy systems", icon: ServerCog },
];

/* Capabilities by connection — richer version shown on /copilot. */

export const COPILOT_CONNECTION_GROUPS: {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badges: string[];
}[] = [
  {
    id: "sap",
    title: "SAP",
    description:
      "Reads and cross-checks the operational core: finance, controlling, HR, sales, materials, and the processes around them.",
    icon: Boxes,
    badges: [
      "ECC",
      "S/4HANA",
      "FI / CO",
      "HCM",
      "SuccessFactors",
      "RFC",
      "IDocs",
      "BAPIs",
    ],
  },
  {
    id: "data",
    title: "Data",
    description:
      "Reaches enterprise databases to answer with consistent figures traceable back to the source.",
    icon: Database,
    badges: [
      "SQL Server",
      "Oracle",
      "PostgreSQL",
      "MySQL",
      "DB2",
      "Sybase",
      "SAP HANA",
    ],
  },
  {
    id: "cloud",
    title: "Cloud",
    description:
      "Runs on the cloud platforms the client already operates — no infrastructure duplication.",
    icon: Cloud,
    badges: ["AWS", "Azure", "GCP", "SAP BTP"],
  },
  {
    id: "integrations",
    title: "Integrations",
    description:
      "Speaks with non-SAP systems through enterprise middleware and APIs without breaking what already works.",
    icon: Plug,
    badges: ["APIs", "Boomi", "HCI / CPI", "PI / PO", "REST", "SOAP"],
  },
  {
    id: "reporting",
    title: "Reporting",
    description:
      "Supports dashboards, executive reports, and validations with traceability to the source data.",
    icon: LineChart,
    badges: [
      "Dashboards",
      "Executive reports",
      "Validations",
      "Traceability",
    ],
  },
  {
    id: "security",
    title: "Security",
    description:
      "Inherits role-based permissions from the source system, logs every action, and validates before any sensitive execution.",
    icon: ShieldCheck,
    badges: ["Roles", "Permissions", "Audit log", "Approvals", "Validations"],
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
      "Each user sees only what their role allows. The AI layer respects the permissions defined in the source system.",
    icon: Lock,
  },
  {
    title: "Traceability",
    description:
      "Every query and action is logged with user, context, and result for audit.",
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
      "A full log of changes, access, and results — exportable for compliance.",
    icon: FileBarChart,
  },
  {
    title: "No writes without approval",
    description:
      "The copilot does not write to critical systems without explicit human or workflow approval.",
    icon: AlertTriangle,
  },
  {
    title: "Controlled deployment",
    description:
      "Runs on-premise, on private cloud, or in a dedicated VPC depending on the client's policy.",
    icon: ServerCog,
  },
];

export const COPILOT_FLOW_STEPS: {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    step: "01",
    title: "User asks",
    description:
      "An authorized user asks a question or requests a report from the copilot interface.",
    icon: Bot,
  },
  {
    step: "02",
    title: "Intent & permission check",
    description:
      "It parses what is being asked and verifies the user is allowed to see that information or trigger that action.",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Query authorized systems",
    description:
      "It reads SAP, databases, APIs, and reports based on the user's permissions and the request's context.",
    icon: Network,
  },
  {
    step: "04",
    title: "Validate rules and gaps",
    description:
      "It applies business rules and checks for inconsistencies across sources before answering.",
    icon: AlertTriangle,
  },
  {
    step: "05",
    title: "Answer with traceability",
    description:
      "Returns the answer with the source referenced — not as an opinion without evidence.",
    icon: FileBarChart,
  },
  {
    step: "06",
    title: "Propose action for approval",
    description:
      "If the workflow requires it, the copilot proposes an action (a report, an export, a flow) for a human to approve.",
    icon: CheckCircle2,
  },
];

/* Origin context — kept available even if not currently used on
   /copilot, in case it returns to /experience or a future page. */
export const COPILOT_ORIGIN_BLOCKS: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Real SAP operations",
    description:
      "Years of connecting FI, CO, MM, SD, HCM, and related processes to external systems. The copilot knows where to touch and where not to.",
    icon: Boxes,
  },
  {
    title: "Software factories",
    description:
      "We have run dedicated factories with backlog, QA, deployment, and support. That discipline carries over into the product.",
    icon: Workflow,
  },
  {
    title: "Enterprise integrations",
    description:
      "Boomi, HCI/CPI, PI/PO, IBM WebSphere, and MQ. The copilot consumes and respects those channels — it does not replace them.",
    icon: Plug,
  },
  {
    title: "Databases & reporting",
    description:
      "SQL Server, Oracle, PostgreSQL, MySQL, DB2, Sybase, and SAP HANA connected to auditable executive reports.",
    icon: Database,
  },
  {
    title: "Support & governance",
    description:
      "Solution Manager, ITSM, Change, and Test Management gave us the discipline to design a copilot that is operable and auditable.",
    icon: ShieldCheck,
  },
  {
    title: "Applied AI",
    description:
      "Corporate RAG, productive ML, and internal assistants grounded on private data — no shortcuts, no empty demos.",
    icon: GitBranch,
  },
];

/* Indicative impact scenarios used by /copilot — explicitly framed
   as orientative, never as guaranteed results. */

export const COPILOT_IMPACT_STATS: { label: string; value: string }[] = [
  { label: "Speed", value: "From hours to minutes" },
  { label: "Spreadsheets", value: "Less manual Excel" },
  { label: "Audit", value: "More traceability" },
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
    before: "6–8 hours",
    withCopilot: "Minutes",
    impact: "Strong reduction in manual consolidation",
  },
  {
    task: "Multi-system financial reconciliation",
    before: "2–3 days",
    withCopilot: "Minutes to hours depending on sources",
    impact: "Fewer rework cycles and errors",
  },
  {
    task: "Answer to an external auditor",
    before: "1–2 days",
    withCopilot: "Seconds to minutes, source referenced",
    impact: "Immediate traceability",
  },
  {
    task: "Executive dashboard generation",
    before: "Hours",
    withCopilot: "Assisted refresh, near real-time",
    impact: "Less dependency on manual reports",
  },
  {
    task: "Analyst / consultant onboarding",
    before: "Months learning tables and processes",
    withCopilot: "Contextual guidance over sources and rules",
    impact: "Shorter learning curve",
  },
  {
    task: "Operational incident research",
    before: "Hours or a full day",
    withCopilot: "Minutes with cross-source references",
    impact: "Faster diagnosis",
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

/* Hero cards "Before → With Enterprise Copilot" — short story-style. */

export const COPILOT_HERO_CARDS: { before: string; after: string }[] = [
  {
    before: "Cross-system reports in 6–8 hours",
    after: "Minutes with traceable sources",
  },
  {
    before: "Reconciliations in 2–3 days",
    after: "Minutes to hours depending on connected sources",
  },
  {
    before: "Manual audit and lost emails",
    after: "Actions, approvals, and sources logged",
  },
];

/* 7 Enterprise Copilot Capabilities. */

export const COPILOT_EXACTLY: { text: string; icon: LucideIcon }[] = [
  {
    text: "Ask across systems — SAP, databases, APIs, and reports from one place.",
    icon: Database,
  },
  {
    text: "Validate data inconsistencies between sources with explicit business rules.",
    icon: AlertTriangle,
  },
  {
    text: "Generate traceable reports with citations back to the source.",
    icon: FileBarChart,
  },
  {
    text: "Prepare drafts and summaries (emails, executive briefs, action plans).",
    icon: Layers,
  },
  {
    text: "Connect SAP, databases, APIs, and reporting under one controlled surface.",
    icon: Network,
  },
  {
    text: "Request approval before sensitive actions — never executes blind.",
    icon: ShieldCheck,
  },
  {
    text: "Leave an audit trail for every relevant step (user, source, action, time).",
    icon: GitBranch,
  },
];
