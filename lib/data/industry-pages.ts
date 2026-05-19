import type { SpecializedPage } from "@/components/services/SpecializedServicePage";

const IND_PARENT = { label: "Industries", href: "/industries" };

export const INDUSTRY_PAGES: Record<string, SpecializedPage> = {
  finance: {
    slug: "finance",
    eyebrow: "Industries · Functional area",
    title: "Finance",
    parent: IND_PARENT,
    rootBreadcrumb: IND_PARENT,
    intro:
      "Closings, reconciliations, variance analysis, and executive reporting wired to source data — with traceability and less manual work for the finance team.",
    problem:
      "Closings depend on Excel, items show up late, and every team builds reports differently. The leadership team ends up with different numbers for the same question. The fix is structured automation and a single source of truth.",
    whatWeDo: [
      "Assisted monthly closings with automatic validations.",
      "Reconciliations SAP FI ↔ banks and third-party systems.",
      "Variance explanation with traceability to the source data.",
      "Item and report validation before publishing.",
      "Audit-ready evidence and exportable activity logs.",
    ],
    capabilities: [
      "SAP FI",
      "SAP CO",
      "Bank integrations",
      "Reporting",
      "Reconciliation rules",
      "Approval workflows",
    ],
    deliverables: [
      "Closing-cycle dashboard with progress and exceptions.",
      "Reconciliation reports with traceability.",
      "Variance-explanation drafts ready for review.",
      "Validation rules library aligned with finance policy.",
      "Audit-ready activity log per cycle.",
    ],
    copilot:
      "Enterprise Copilot is a strong fit for finance: it can answer closing questions, surface unreconciled entries, and prepare variance summaries — all with traceability and approval before any action.",
    primaryCta: { label: "Talk about this case", href: "/contact?topic=finance" },
    secondaryCta: { label: "Explore Enterprise Copilot", href: "/copilot" },
  },
  operations: {
    slug: "operations",
    eyebrow: "Industries · Functional area",
    title: "Operations",
    parent: IND_PARENT,
    rootBreadcrumb: IND_PARENT,
    intro:
      "Real-time visibility on process status, business-rule alerts before issues escalate, and assisted automation for the operational team.",
    problem:
      "Operational status lives across many systems. Alerts arrive too late, and functional support is resolved through email threads instead of structured flows. The result is slow response and silent risks.",
    whatWeDo: [
      "Real-time monitoring of critical processes and status.",
      "Business-rule alerts surfaced before issues escalate.",
      "Integration across operational and support systems.",
      "Automation of repetitive operational tasks with human validation.",
      "Incident-response playbooks with audit log.",
    ],
    capabilities: [
      "Operational systems",
      "ERP",
      "Internal APIs",
      "Alerting",
      "Workflow engines",
      "Monitoring",
    ],
    deliverables: [
      "Live operational dashboards with role-based access.",
      "Alert configuration aligned with operational tolerance.",
      "Automation map with human checkpoints.",
      "Incident playbooks and post-mortem template.",
      "Activity log per critical process.",
    ],
    copilot:
      "Enterprise Copilot can answer operational queries in real time — status, last successful run, error context — and prepare next-step actions for the operator to approve.",
    primaryCta: { label: "Talk about this case", href: "/contact?topic=operations" },
    secondaryCta: { label: "Explore Enterprise Copilot", href: "/copilot" },
  },
  "hr-payroll": {
    slug: "hr-payroll",
    eyebrow: "Industries · Functional area",
    title: "HR / Payroll",
    parent: IND_PARENT,
    rootBreadcrumb: IND_PARENT,
    intro:
      "Headcount, absences, organizational structure, and master-data validation across SAP HCM and SuccessFactors — with traceability per change.",
    problem:
      "HR data lives across SAP HCM, SuccessFactors, spreadsheets, and manual reports. Queries take days; validations happen by hand. Master-data drift is silent and shows up at the worst time — often during an audit.",
    whatWeDo: [
      "Headcount reports by unit, site, and position.",
      "Assisted queries over SAP HCM and SuccessFactors.",
      "Absence, vacation, and organizational tracking.",
      "Master-data validation and approval workflows.",
      "Activity log of every master-data change.",
    ],
    capabilities: [
      "SAP HCM",
      "SuccessFactors",
      "Master data",
      "Workflows",
      "Reporting",
      "Identity / SSO",
    ],
    deliverables: [
      "Headcount and organizational dashboards.",
      "Master-data validation rules and exception reports.",
      "Approval workflows for organizational changes.",
      "Audit log of master-data activity.",
      "Operations playbook for HR support.",
    ],
    copilot:
      "Enterprise Copilot answers HR questions — headcount, absences, organization — directly, with permissions inherited from the source system and an audit log for every query.",
    primaryCta: { label: "Talk about this case", href: "/contact?topic=hr" },
    secondaryCta: { label: "Explore Enterprise Copilot", href: "/copilot" },
  },
  "executive-reporting": {
    slug: "executive-reporting",
    eyebrow: "Industries · Functional area",
    title: "Executive Reporting",
    parent: IND_PARENT,
    rootBreadcrumb: IND_PARENT,
    intro:
      "Boardroom-ready dashboards and KPIs with traceability back to the source data — reports that hold up under audit, not pretty dashboards without substance.",
    problem:
      "Every team builds its own version of the same KPI. The leadership team ends up with different numbers for the same question. The fix is a shared semantic layer and traceability — not more dashboards.",
    whatWeDo: [
      "Common semantic layer across business areas.",
      "Executive dashboards aligned to the semantic layer.",
      "Traceability from each KPI back to the source data.",
      "Source validation and reconciliation rules.",
      "Per-domain data governance with clear ownership.",
    ],
    capabilities: [
      "Power BI",
      "Tableau",
      "Looker Studio",
      "Semantic layer",
      "Lineage",
      "Data governance",
    ],
    deliverables: [
      "Documented semantic layer covering core KPIs.",
      "Executive dashboards wired to the semantic layer.",
      "Reconciliation reports across sources.",
      "KPI lineage from dashboard down to source events.",
      "Governance and ownership map.",
    ],
    copilot:
      "Enterprise Copilot uses the same semantic layer to answer executive questions in plain language — with traceability, not just a number on a dashboard.",
    primaryCta: { label: "Talk about this case", href: "/contact?topic=reporting" },
    secondaryCta: { label: "Explore Enterprise Copilot", href: "/copilot" },
  },
  "sap-integrations": {
    slug: "sap-integrations",
    eyebrow: "Industries · Cross-cutting capability",
    title: "SAP Integrations",
    parent: IND_PARENT,
    rootBreadcrumb: IND_PARENT,
    intro:
      "Fragile interfaces, failing IDocs, and SAP changes that break downstream systems — addressed with versioned contracts, monitoring, and reprocessing.",
    problem:
      "Integration between SAP and the rest of the corporate ecosystem is rarely the visible problem — it is usually the source of the visible problem. Without contracts, monitoring, and reprocessing, every change becomes a risk.",
    whatWeDo: [
      "SAP ↔ third-party connectivity with versioned contracts.",
      "Monitoring of interfaces, IDocs, and critical jobs.",
      "Evolutionary support with regression testing.",
      "Re-architecture of fragile integrations without breaking productive flows.",
      "Per-interface audit log and reprocessing logic.",
    ],
    capabilities: [
      "RFC",
      "IDocs",
      "BAPIs",
      "Boomi",
      "HCI / CPI",
      "PI / PO",
      "IBM MQ",
      "Message Broker",
      "REST / SOAP",
    ],
    deliverables: [
      "Integration map with ownership and SLAs.",
      "Monitoring dashboard for all critical interfaces.",
      "Reprocessing playbook for common failures.",
      "Versioned contracts with consumers.",
      "Operations runbook and on-call rotation.",
    ],
    copilot:
      "Enterprise Copilot uses the same integration surfaces — same contracts, same monitoring, same audit — to query and act across SAP and non-SAP systems.",
    primaryCta: { label: "Review your SAP integrations", href: "/contact?topic=sap" },
    secondaryCta: { label: "Explore Enterprise Copilot", href: "/copilot" },
  },
  "process-automation": {
    slug: "process-automation",
    eyebrow: "Industries · Cross-cutting capability",
    title: "Process Automation",
    parent: IND_PARENT,
    rootBreadcrumb: IND_PARENT,
    intro:
      "Recurring closings, reconciliations, and reports moved out of email and Excel — into assisted flows with explicit human checkpoints.",
    problem:
      "Closings, reconciliations, and recurring reports done by hand carry a heavy manual workload and errors that surface too late. Full automation is risky for processes that need judgment — assisted automation keeps the speed without giving up control.",
    whatWeDo: [
      "Assisted automation with prior human validation.",
      "Manual-error reduction with explicit business rules.",
      "Auditable, reprocessable processes.",
      "Human-in-the-loop before any critical action.",
      "Operational dashboards showing assisted activity.",
    ],
    capabilities: [
      "Workflow engines",
      "Business rules",
      "Approval flows",
      "Audit log",
      "RAG",
      "ML decision support",
    ],
    deliverables: [
      "Automation map with checkpoints per process.",
      "Audit log of every assisted action.",
      "Dashboards for the assisted process.",
      "Rollback path for any automated step.",
      "Governance and operations handoff.",
    ],
    copilot:
      "Enterprise Copilot is the natural surface for assisted automation: it proposes the action, shows the evidence, and waits for human approval before anything happens.",
    primaryCta: { label: "Talk about this case", href: "/contact?topic=automation" },
    secondaryCta: { label: "Explore Enterprise Copilot", href: "/copilot" },
  },
  "internal-support": {
    slug: "internal-support",
    eyebrow: "Industries · Cross-cutting capability",
    title: "Internal Support",
    parent: IND_PARENT,
    rootBreadcrumb: IND_PARENT,
    intro:
      "Helpdesk over internal documentation, ITSM with Solution Manager, and structured escalation — replacing tribal knowledge with auditable support.",
    problem:
      "Tickets repeat themselves, documentation is scattered, and support depends on a few people who know where things live. The fix is structured ITSM plus an assistant that can carry the load on first-line response.",
    whatWeDo: [
      "Assisted helpdesk over internal documentation and processes.",
      "ITSM and Change Management on Solution Manager.",
      "Intelligent search across corporate documentation.",
      "Structured L1 / L2 / L3 escalation.",
      "Continuous improvement loop on documentation quality.",
    ],
    capabilities: [
      "ITSM",
      "SAP Solution Manager",
      "Change Management",
      "Test Management",
      "Documentation",
      "RAG",
    ],
    deliverables: [
      "ITSM model with categories, ownership, and SLAs.",
      "Documentation corpus indexed for assisted search.",
      "Escalation playbook and on-call rotation.",
      "Activity log of tickets and resolution paths.",
      "Operations runbook and continuous-improvement cadence.",
    ],
    copilot:
      "Enterprise Copilot can act as first-line support — answering documentation and process questions with citations, and routing the rest to a human with full context.",
    primaryCta: { label: "Talk about this case", href: "/contact?topic=support" },
    secondaryCta: { label: "Explore Enterprise Copilot", href: "/copilot" },
  },
  "data-governance": {
    slug: "data-governance",
    eyebrow: "Industries · Cross-cutting capability",
    title: "Data Governance",
    parent: IND_PARENT,
    rootBreadcrumb: IND_PARENT,
    intro:
      "Common dictionary, versioned quality rules, and end-to-end traceability — so the leadership team sees consistent numbers and an auditor can follow them all the way down.",
    problem:
      "Catalogs without owners, quality rules that nobody applies, and different numbers across sources ending up in executive reports. Governance is what turns 'we have data' into 'we have trustworthy data'.",
    whatWeDo: [
      "Common dictionary and versioned quality rules.",
      "Catalog validation and reconciliation between sources.",
      "End-to-end traceability all the way to the final report.",
      "Shared semantic layer across business areas.",
      "Governance policy with clear ownership per domain.",
    ],
    capabilities: [
      "Common dictionary",
      "Quality rules",
      "Lineage",
      "Semantic layer",
      "Master-data management",
      "Reporting",
    ],
    deliverables: [
      "Data dictionary with ownership per term.",
      "Quality rules library and exception reports.",
      "Lineage map from source to report.",
      "Governance policy with clear roles and cadence.",
      "Operations runbook for data stewards.",
    ],
    copilot:
      "Enterprise Copilot enforces governance at query time — every answer references the dictionary, the rules, and the source — and the audit log captures every interaction.",
    primaryCta: { label: "Talk about this case", href: "/contact?topic=governance" },
    secondaryCta: { label: "Explore Enterprise Copilot", href: "/copilot" },
  },
};
