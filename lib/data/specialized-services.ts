import type { SpecializedPage } from "@/components/services/SpecializedServicePage";

/* -------------------------------------------------------------------- */
/* Software Factory                                                      */
/* -------------------------------------------------------------------- */

const SF_PARENT = { label: "Software Factory", href: "/services/software-factory" };

export const SOFTWARE_FACTORY_PAGES: Record<string, SpecializedPage> = {
  "custom-development": {
    slug: "custom-development",
    eyebrow: "Software Factory",
    title: "Custom Development",
    parent: SF_PARENT,
    intro:
      "Enterprise applications and internal tools built by senior teams accountable for the result — not just for the tasks.",
    problem:
      "Off-the-shelf tools cover the obvious cases, but the processes that actually move the business often need software that fits exactly: integrated with SAP, databases, and APIs, traceable, and supported beyond go-live.",
    whatWeDo: [
      "Tailored applications for finance, operations, HR, and customer-facing teams.",
      "Internal tools that replace Excel-driven processes with auditable software.",
      "Integration with SAP, enterprise databases, internal APIs, and cloud services.",
      "QA, documentation, deployment, and L2/L3 support from day one.",
      "Iterative delivery with sprint demos and a measurable per-cycle outcome.",
    ],
    capabilitiesHeading:
      "Pragmatic stack chosen per case — not the trending one",
    capabilities: [
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
    deliverables: [
      "Documented architecture with versioned diagrams.",
      "Two-week sprints with demo and production-ready deliverables.",
      "CI/CD pipeline and observability configured from sprint one.",
      "Operations runbook and L2/L3 support handoff.",
      "Post go-live evolution roadmap.",
    ],
    copilot:
      "Custom applications often become a natural source for Enterprise Copilot — internal workflows, business rules, and validations become consumable for assisted queries and reporting.",
  },
  "enterprise-portals": {
    slug: "enterprise-portals",
    eyebrow: "Software Factory",
    title: "Enterprise Portals",
    parent: SF_PARENT,
    intro:
      "Corporate front-ends for employees, suppliers, internal customers, and operations teams — wired into identity, workflows, and source systems.",
    problem:
      "Portals are often the visible layer of a much messier operation underneath. When forms, approvals, and reports do not talk to the source systems, the portal becomes a parallel reality instead of a tool.",
    whatWeDo: [
      "Front-ends with SSO, role-based permissions, and corporate identity.",
      "Forms, approval workflows, and document handling integrated with backend.",
      "Operational reports surfaced inside the portal with traceability.",
      "Accessible, responsive design consistent with the corporate brand.",
      "Secure deployment patterns for internal and external audiences.",
    ],
    capabilities: [
      "Next.js / React",
      "TypeScript",
      "SSO / OIDC",
      "Entra ID",
      "REST / GraphQL",
      "Tailwind",
      "Java / .NET back-ends",
      "S3 + CloudFront",
    ],
    deliverables: [
      "Portal with authenticated areas and role-based access.",
      "Forms, workflows, and dashboards integrated with internal systems.",
      "Audit log of approvals and changes.",
      "Component library aligned to the corporate brand.",
      "Operations playbook and L2 support handoff.",
    ],
    copilot:
      "Enterprise Copilot can be embedded inside the portal as an assisted entry point — querying internal data, validating inputs, and preparing drafts of forms or reports with traceability.",
  },
  "internal-apps": {
    slug: "internal-apps",
    eyebrow: "Software Factory",
    title: "Internal Applications",
    parent: SF_PARENT,
    intro:
      "Operational software for finance, HR, operations, and support teams — built to replace the spreadsheets that quietly run critical processes.",
    problem:
      "Critical processes tied to a single Excel file maintained by one person are a hidden risk: opaque, error-prone, and impossible to audit. The fix is not a bigger spreadsheet — it is software that captures the same logic with validation and traceability.",
    whatWeDo: [
      "Apps for closings, reconciliations, validations, and operational reporting.",
      "Workflows that replace email approval threads with structured processes.",
      "Data quality validations built into the input layer, not after the fact.",
      "Operational reports tied back to the source data, not to manual exports.",
      "Audit log of every change with user, timestamp, and source.",
    ],
    capabilities: [
      "TypeScript / React",
      "Node",
      "Java",
      "C# / .NET",
      "PostgreSQL",
      "SQL Server",
      "Workflow engines",
      "Authentication / RBAC",
    ],
    deliverables: [
      "Application that replaces the targeted Excel process.",
      "Validation rules and approval flows defined with the business.",
      "Reports that match — and replace — the spreadsheet output.",
      "Migration plan from the legacy spreadsheet to the application.",
      "L2 support and continuous evolution.",
    ],
    copilot:
      "Once a process lives in real software, Enterprise Copilot can query it directly: status, validations, reports, and even prepare next-step actions for human approval.",
  },
  "apis-microservices": {
    slug: "apis-microservices",
    eyebrow: "Software Factory",
    title: "APIs and Microservices",
    parent: SF_PARENT,
    intro:
      "Reusable services with explicit contracts, versioning, observability, and security by default — designed to outlive any single application.",
    problem:
      "When every team builds point-to-point integrations, the architecture becomes a tangle no one fully understands. A reusable service layer with clear contracts is what keeps the operation sustainable.",
    whatWeDo: [
      "API-first design with explicit contracts and semantic versioning.",
      "Authentication, authorization, and rate-limiting built in from the start.",
      "Observability: tracing, metrics, logs, and alerts per service.",
      "Documentation that stays in sync with the running code.",
      "Integrations with SAP, internal systems, and third-party platforms.",
    ],
    capabilities: [
      "REST",
      "SOAP",
      "GraphQL",
      "OpenAPI",
      "OAuth 2.0",
      "JWT",
      "API Gateway",
      "Service mesh patterns",
      "Java / .NET / Node",
    ],
    deliverables: [
      "Service catalog with contracts, ownership, and SLAs.",
      "Reference implementation and shared libraries for new services.",
      "Observability stack with dashboards and alert routes.",
      "Versioning and deprecation policy.",
      "Onboarding kit for new internal teams.",
    ],
    copilot:
      "Enterprise Copilot consumes these APIs as authorized data and action surfaces — every call inherits the same permissions and audit log.",
  },
  "evolutionary-support": {
    slug: "evolutionary-support",
    eyebrow: "Software Factory",
    title: "Evolutionary Support",
    parent: SF_PARENT,
    intro:
      "Critical platforms do not stop on go-live day. We keep them alive, audit-ready, and evolving on a predictable cadence.",
    problem:
      "Many systems lose traction the moment the project closes: nobody owns evolutions, support is fragmented, and small fixes never land. A dedicated support model keeps the platform measurable and improving.",
    whatWeDo: [
      "L2 and L3 support with defined SLAs and clear ownership.",
      "Continuous backlog with prioritized fixes and small enhancements.",
      "Quarterly evolutionary roadmap aligned with business priorities.",
      "Monitoring, alerts, and post-incident reviews.",
      "Documentation kept in sync as the platform changes.",
    ],
    capabilities: [
      "ITIL-aligned ticketing",
      "Monitoring",
      "Observability",
      "Release management",
      "Change Management",
      "Knowledge base",
      "Runbooks",
    ],
    deliverables: [
      "Support model with SLAs and clear escalation.",
      "Monthly report on tickets, evolutions, and platform health.",
      "Quarterly roadmap with prioritized initiatives.",
      "Updated documentation and runbooks.",
      "Migration plans when the platform needs to evolve.",
    ],
    copilot:
      "The support model feeds Enterprise Copilot with traceable change history — useful for audit, root-cause analysis, and assisted helpdesk.",
  },
};

/* -------------------------------------------------------------------- */
/* SAP & Enterprise Integration                                          */
/* -------------------------------------------------------------------- */

const SAP_PARENT = {
  label: "Enterprise Integration",
  href: "/services/sap-integrations",
};

export const SAP_INTEGRATIONS_PAGES: Record<string, SpecializedPage> = {
  "on-premise": {
    slug: "on-premise",
    eyebrow: "SAP & Enterprise Integration",
    title: "SAP On-Premise",
    parent: SAP_PARENT,
    intro:
      "Productive work on SAP ECC and S/4HANA across the core functional modules — development, evolutions, and support without breaking what already runs.",
    problem:
      "SAP On-Premise is rarely a greenfield. Most cases involve evolving FI, CO, SD, MM, HCM, PS, or PM modules while integrations and reports keep running. We work with that reality.",
    whatWeDo: [
      "Functional and technical work across ECC and S/4HANA.",
      "Module-level support: FI, CO, SD, MM, HCM, PS, and PM.",
      "Custom reports, forms, enhancements, and conversions.",
      "Integration with internal systems, reporting, and third parties.",
      "Migration support, regression testing, and post go-live operation.",
    ],
    capabilities: [
      "ECC",
      "S/4HANA",
      "FI",
      "CO",
      "SD",
      "MM",
      "HCM",
      "PS",
      "PM",
      "ABAP",
      "RFC",
      "IDocs",
    ],
    deliverables: [
      "Diagnosis of critical interfaces and module risks.",
      "Module-level evolutions delivered without breaking productive flows.",
      "Custom development with documented architecture.",
      "Regression testing playbook for major SAP changes.",
      "Functional and technical L2/L3 support.",
    ],
    copilot:
      "Enterprise Copilot can query the SAP core directly — closings, reconciliations, master data, reports — with permissions inherited from the source system.",
  },
  "sap-cloud": {
    slug: "sap-cloud",
    eyebrow: "SAP & Enterprise Integration",
    title: "SAP Cloud",
    parent: SAP_PARENT,
    intro:
      "Integration of SAP cloud solutions (SuccessFactors, Ariba, IBP, and more) with the rest of the corporate ecosystem — without losing governance.",
    problem:
      "Cloud suites land easily, but most pain shows up at the integration boundary: cloud-to-on-prem flows, master data, security, and reporting. That boundary is where SAP Cloud projects either succeed or struggle.",
    whatWeDo: [
      "Cloud-to-on-prem integrations between SAP Cloud and ECC / S/4HANA.",
      "SuccessFactors, Ariba, and IBP connectivity with internal systems.",
      "Master-data alignment between cloud and on-prem.",
      "Authentication, identity, and SSO across cloud and corporate networks.",
      "Reporting and governance across both worlds.",
    ],
    capabilities: [
      "SAP Cloud",
      "SuccessFactors",
      "Ariba",
      "IBP",
      "HCI / CPI",
      "REST",
      "SOAP",
      "Entra ID / SSO",
    ],
    deliverables: [
      "Cloud-to-on-prem integration architecture.",
      "Master-data alignment with validation rules.",
      "Operational dashboards across cloud and core systems.",
      "Identity and access design covering all surfaces.",
      "Operation runbook for hybrid scenarios.",
    ],
    copilot:
      "Enterprise Copilot can read across SAP Cloud and on-prem to deliver consolidated answers — HR queries, vendor lookups, planning data — without duplicating sources.",
  },
  "sap-btp": {
    slug: "sap-btp",
    eyebrow: "SAP & Enterprise Integration",
    title: "SAP BTP",
    parent: SAP_PARENT,
    intro:
      "Extensions, workflows, and applications on SAP Business Technology Platform — taking SAP beyond the core without compromising governance.",
    problem:
      "Customizing the SAP core has costs and risks. BTP lets you extend outside the core, but only if the extensions are architected, secured, and monitored properly. Otherwise BTP becomes another mess on top of the existing one.",
    whatWeDo: [
      "BTP extensions outside the SAP core to preserve upgrade paths.",
      "Workflow Management for human-in-the-loop processes.",
      "CAP (Node / Java) development with explicit data model and integration.",
      "Build / Apps applications for business users when applicable.",
      "Identity, security, and audit aligned with corporate policies.",
    ],
    capabilities: [
      "SAP BTP",
      "CAP",
      "Node",
      "Java",
      "Workflow Management",
      "Build / Apps",
      "HCI / CPI",
      "Authentication",
    ],
    deliverables: [
      "BTP extension architecture documented and versioned.",
      "Extensions and workflows operating outside the SAP core.",
      "Security model with role mapping and audit log.",
      "CI/CD for BTP deployments.",
      "Operations and evolution plan post go-live.",
    ],
    copilot:
      "BTP extensions become a natural integration surface for Enterprise Copilot — assisted approvals, validations, and reporting on top of new workflows.",
  },
  "abap-rfc-idocs": {
    slug: "abap-rfc-idocs",
    eyebrow: "SAP & Enterprise Integration",
    title: "ABAP / RFC / IDocs",
    parent: SAP_PARENT,
    intro:
      "Deep technical work inside SAP: ABAP development, RFC and IDoc integration, BAPIs, SAP JCo connectors, and NetWeaver Gateway services.",
    problem:
      "Many integrations break because the technical layer was never owned by anyone. ABAP objects without standards, IDocs without monitoring, and BAPIs without versioning all generate silent failures that surface as business problems.",
    whatWeDo: [
      "ABAP development with performance and maintainability standards.",
      "RFC and IDoc integrations with monitoring and reprocessing.",
      "BAPIs and remote-callable services with versioned contracts.",
      "Java connectivity via SAP JCo 2 and 3.",
      "OData and REST services exposed through NetWeaver Gateway.",
    ],
    capabilities: [
      "ABAP",
      "ABAP/4",
      "Reports",
      "Forms (SmartForms / Adobe)",
      "Enhancements",
      "Conversions",
      "Workflows",
      "RFC",
      "IDocs",
      "BAPIs",
      "SAP JCo 2 / 3",
      "NetWeaver Gateway",
    ],
    deliverables: [
      "ABAP development with standards, tests, and review.",
      "IDoc monitoring dashboard with alerting and reprocessing.",
      "BAPIs and services with contracts and versioning policy.",
      "Java connectivity reusable across internal applications.",
      "OData / REST endpoints exposed via NetWeaver Gateway.",
    ],
    copilot:
      "Enterprise Copilot speaks to SAP through these technical surfaces — BAPIs, RFCs, IDocs — with the same permissions the source system enforces.",
  },
  middleware: {
    slug: "middleware",
    eyebrow: "SAP & Enterprise Integration",
    title: "Enterprise Middleware",
    parent: SAP_PARENT,
    intro:
      "Integration between SAP and the rest of the corporate ecosystem through enterprise middleware: Boomi, HCI/CPI, PI/PO, IBM WebSphere, and MQ.",
    problem:
      "When integration is treated as a bunch of one-off scripts, every change becomes a risk. Real middleware brings monitoring, error handling, reprocessing, and traceability — which is what separates a healthy operation from a fragile one.",
    whatWeDo: [
      "Integration design and implementation with explicit contracts.",
      "Operational monitoring of critical interfaces with alerting.",
      "Error handling and reprocessing logic per interface.",
      "Performance and throughput tuning.",
      "Documentation and per-interface audit log.",
    ],
    capabilities: [
      "Boomi",
      "SAP HCI / CPI",
      "SAP PI / PO",
      "IBM WebSphere",
      "IBM MQ",
      "Message Broker",
      "REST",
      "SOAP",
      "Java Open Source",
    ],
    deliverables: [
      "Integration architecture diagram with ownership and SLAs.",
      "Monitoring dashboard for all critical interfaces.",
      "Reprocessing playbook for common failure modes.",
      "Versioned integration contracts with consumers.",
      "Operations runbook and on-call rotation plan.",
    ],
    copilot:
      "Enterprise Copilot uses the same middleware as a controlled execution channel — actions go through the same monitoring, the same audit, the same governance.",
  },
  "third-party": {
    slug: "third-party",
    eyebrow: "SAP & Enterprise Integration",
    title: "Third-Party Systems",
    parent: SAP_PARENT,
    intro:
      "Integration with the systems that surround SAP — CRMs, banks, HR platforms, e-commerce, and legacy applications — through clean contracts and controlled channels.",
    problem:
      "The systems outside SAP are where most of the noise comes from: file drops, ad-hoc APIs, custom payloads, and legacy quirks. Without a clear contract layer, every change downstream becomes a problem upstream.",
    whatWeDo: [
      "Integration with CRMs, banks, payroll systems, e-commerce, and legacy.",
      "File-based, API-based, and event-based connectivity.",
      "Reconciliation and validation rules per integration.",
      "Versioned contracts so changes do not break consumers.",
      "Per-interface monitoring and alerts.",
    ],
    capabilities: [
      "REST",
      "SOAP",
      "SFTP / file exchange",
      "Event streaming",
      "Webhooks",
      "OAuth 2.0",
      "API Gateway",
      "Schema registry",
    ],
    deliverables: [
      "Integration map across SAP and external systems.",
      "Per-interface contract, validation, and reconciliation rules.",
      "Monitoring with alerts and reprocessing logic.",
      "Migration plan when legacy integrations need to evolve.",
      "Operations handoff to support teams.",
    ],
    copilot:
      "Enterprise Copilot can answer cross-system questions — comparing SAP with bank statements, CRM, or e-commerce data — using these same contracts.",
  },
  successfactors: {
    slug: "successfactors",
    eyebrow: "SAP & Enterprise Integration",
    title: "SAP SuccessFactors",
    parent: SAP_PARENT,
    intro:
      "Work on SuccessFactors Employee Central, organizational data, absences, headcount, and integration with the rest of the corporate ecosystem.",
    problem:
      "SuccessFactors is rarely an island: it has to feed core finance, payroll, internal reporting, and operational systems. The friction is almost never the UI — it is the integrations and master data underneath.",
    whatWeDo: [
      "Employee Central configuration and master-data design.",
      "Headcount, absence, and organizational-structure reporting.",
      "Integration with SAP HCM, payroll, finance, and internal systems.",
      "Identity and SSO alignment.",
      "Operational dashboards and assisted queries for HR teams.",
    ],
    capabilities: [
      "SuccessFactors Employee Central",
      "Master data",
      "HCI / CPI",
      "Reporting",
      "Workflows",
      "SSO / SAML",
    ],
    deliverables: [
      "Configured Employee Central modules with documented rules.",
      "Integration with SAP HCM and downstream systems.",
      "Master-data dictionary and validation rules.",
      "Operational HR dashboards and assisted reporting.",
      "Operations playbook for HR support teams.",
    ],
    copilot:
      "Enterprise Copilot is a strong fit for HR: it can answer headcount, organizational, and absence questions over SuccessFactors with traceability and per-role permissions.",
  },
  "sap-hcm": {
    slug: "sap-hcm",
    eyebrow: "SAP & Enterprise Integration",
    title: "SAP HCM On-Premise",
    parent: SAP_PARENT,
    intro:
      "Work on SAP HCM On-Premise — employee data, absences, workflows, and integration with payroll, finance, and downstream reporting.",
    problem:
      "HCM On-Premise carries years of customizations, infotype tweaks, and country-specific logic. Evolving it means working with that history, not pretending it does not exist.",
    whatWeDo: [
      "HCM functional and technical evolutions.",
      "Master-data hygiene and validation rules.",
      "Workflows for organizational changes, absences, and approvals.",
      "Integration with payroll, finance, and downstream reporting.",
      "Migration path planning toward SuccessFactors when relevant.",
    ],
    capabilities: [
      "SAP HCM",
      "Infotypes",
      "Workflows",
      "ABAP HR",
      "Payroll integration",
      "Reporting",
    ],
    deliverables: [
      "HCM evolutions delivered without breaking payroll cycles.",
      "Master-data validation rules and exception reports.",
      "Workflows for absences and organizational changes.",
      "Integration with downstream systems and reporting.",
      "Migration plan toward SuccessFactors when applicable.",
    ],
    copilot:
      "Enterprise Copilot can query HCM directly — headcount, absences, organizational queries — without forcing HR to learn the underlying data model.",
  },
};

/* -------------------------------------------------------------------- */
/* Cloud & Governed Data                                                 */
/* -------------------------------------------------------------------- */

const CLOUD_PARENT = {
  label: "Cloud & Governed Data",
  href: "/services/cloud-data",
};

export const CLOUD_DATA_PAGES: Record<string, SpecializedPage> = {
  aws: {
    slug: "aws",
    eyebrow: "Cloud & Governed Data",
    title: "AWS",
    parent: CLOUD_PARENT,
    intro:
      "Lightweight, maintainable architectures on AWS — static sites, serverless APIs, transactional email, and storage tuned to the use case.",
    problem:
      "Cloud bills explode when AWS is treated as an unlimited datacenter. The solution is rarely 'more services' — it is fewer services, better understood, with clear per-environment ownership.",
    whatWeDo: [
      "Static sites with S3 + CloudFront, including this one.",
      "Serverless APIs with API Gateway + Lambda for lightweight endpoints.",
      "Transactional email with SES for forms and notifications.",
      "Persistence with RDS or DynamoDB depending on the use case.",
      "Per-environment isolation with accounts, IAM, and explicit policies.",
    ],
    capabilities: [
      "S3 + CloudFront",
      "API Gateway",
      "Lambda",
      "SES",
      "RDS",
      "DynamoDB",
      "CloudWatch",
      "IAM",
      "CloudFormation / Terraform",
    ],
    deliverables: [
      "Reference architecture diagrams per environment.",
      "Deployment automation (IaC) and CI/CD.",
      "Observability stack: logs, metrics, and alerts.",
      "Cost model with per-environment budgets and alarms.",
      "Operations runbook for incident response.",
    ],
    copilot:
      "Enterprise Copilot runs comfortably on AWS — Lambdas, API Gateway, and S3 are the same patterns we already operate.",
  },
  azure: {
    slug: "azure",
    eyebrow: "Cloud & Governed Data",
    title: "Azure",
    parent: CLOUD_PARENT,
    intro:
      "Corporate platforms on Azure integrated with identity, data, and internal applications — keeping governance, security, and continuity in scope.",
    problem:
      "Azure is the default cloud in many large enterprises. The opportunity is not 'go cloud' — it is making the existing Azure footprint useful, secure, and predictable.",
    whatWeDo: [
      "Corporate applications on App Service and Functions.",
      "Identity integration with Entra ID and group-based access.",
      "Data services on Azure SQL, Data Lake, and Synapse.",
      "Integration with internal APIs, SAP, and legacy systems.",
      "Governance, security baselines, and per-environment cost control.",
    ],
    capabilities: [
      "App Service",
      "Azure Functions",
      "Azure SQL",
      "Data Lake",
      "Synapse",
      "Entra ID",
      "Azure DevOps",
      "Key Vault",
    ],
    deliverables: [
      "Architecture aligned with corporate governance and security.",
      "Identity model and group-based access design.",
      "Deployment automation and CI/CD pipelines.",
      "Cost dashboards with budgets and alerts.",
      "Operations runbook for the corporate workloads.",
    ],
    copilot:
      "Enterprise Copilot can be deployed inside the corporate Azure tenant, using Entra ID for identity and respecting the same governance.",
  },
  gcp: {
    slug: "gcp",
    eyebrow: "Cloud & Governed Data",
    title: "Google Cloud (GCP)",
    parent: CLOUD_PARENT,
    intro:
      "Data, analytics, and managed services on Google Cloud — wired into operational sources for reporting and enterprise consumption.",
    problem:
      "GCP shines for analytics, but only if the data flowing into BigQuery is reconciled, governed, and traceable back to the source. Otherwise it becomes another dashboard layer without trust.",
    whatWeDo: [
      "Analytics architecture on BigQuery with reconciliation and governance.",
      "Managed services (Cloud Run, Pub/Sub) for lightweight deployments.",
      "Data pipelines and event-driven flows.",
      "Reporting and visualization through Looker Studio.",
      "Integration with operational sources and identity.",
    ],
    capabilities: [
      "BigQuery",
      "Cloud Run",
      "Pub/Sub",
      "Dataflow",
      "Looker Studio",
      "IAM",
      "Workload Identity",
    ],
    deliverables: [
      "BigQuery data model with reconciliation and quality rules.",
      "Pipelines with monitoring and reprocessing.",
      "Looker Studio dashboards with traceability.",
      "Identity and access model aligned with corporate policies.",
      "Cost and governance dashboards.",
    ],
    copilot:
      "Enterprise Copilot can query BigQuery as the analytical backbone — giving the leadership team traceable answers across operational and analytical data.",
  },
  databases: {
    slug: "databases",
    eyebrow: "Cloud & Governed Data",
    title: "Enterprise Databases",
    parent: CLOUD_PARENT,
    intro:
      "Work on SQL Server, Oracle, PostgreSQL, MySQL, DB2, Sybase, and SAP HANA — modeling, migration, integration, reporting, and traceability.",
    problem:
      "Databases are usually fine — until they have to be migrated, reconciled, or used as a source for trustworthy reporting. That is where the gaps in the model and the missing constraints surface.",
    whatWeDo: [
      "Modeling and design tuned for performance and consistency.",
      "Migrations across enterprise engines with regression testing.",
      "Integration with SAP and non-SAP systems.",
      "Reporting wired back to the source data, not to manual extracts.",
      "Quality validations and reconciliation between sources.",
    ],
    capabilities: [
      "MS SQL Server",
      "Oracle 11g+",
      "MySQL",
      "PostgreSQL",
      "Sybase",
      "DB2",
      "SAP HANA",
      "Snowflake",
      "BigQuery",
    ],
    deliverables: [
      "Database model documented with relationships and constraints.",
      "Migration plan with regression tests and rollback path.",
      "Quality validation rules and exception reports.",
      "Reporting wired back to the source with traceability.",
      "Operations runbook for backups, recovery, and tuning.",
    ],
    copilot:
      "Enterprise Copilot can read the corporate databases as authorized sources — with permissions inherited and every query logged for audit.",
  },
  "data-pipelines": {
    slug: "data-pipelines",
    eyebrow: "Cloud & Governed Data",
    title: "Data Pipelines",
    parent: CLOUD_PARENT,
    intro:
      "Auditable, reproducible ingestion, transformation, and quality — no orphan scripts, no processes only one person on the team understands.",
    problem:
      "Pipelines built as side projects work until the person who knows them leaves. A real pipeline practice means version control, monitoring, alerting, and reprocessing as first-class concerns.",
    whatWeDo: [
      "Reliable ingestion from operational source systems.",
      "Versioned transformations checked into source control.",
      "Quality validations with alerts before bad data flows downstream.",
      "Catalog of sources, dependencies, and lineage.",
      "Controlled reprocessing for failure recovery.",
    ],
    capabilities: [
      "ETL / ELT",
      "Streaming",
      "Batch",
      "dbt patterns",
      "Airflow / Dagster patterns",
      "Data quality",
      "Lineage",
    ],
    deliverables: [
      "Pipeline architecture with documented dependencies.",
      "Quality rules with per-source alert routes.",
      "Lineage map from source system to final report.",
      "Reprocessing playbook for common failures.",
      "Operations handoff and on-call rotation plan.",
    ],
    copilot:
      "Enterprise Copilot can answer 'why this number changed' by walking the pipeline lineage and pointing to the source event.",
  },
  reporting: {
    slug: "reporting",
    eyebrow: "Cloud & Governed Data",
    title: "Trusted Reporting",
    parent: CLOUD_PARENT,
    intro:
      "BI and executive reports with traceability back to the source — reports that hold up under audit, not pretty dashboards without substance.",
    problem:
      "When every team builds reports differently, the leadership team gets different numbers for the same question. The fix is a common semantic layer plus traceability — not more dashboards.",
    whatWeDo: [
      "Common semantic layer aligned across business areas.",
      "Executive and operational dashboards wired to the semantic layer.",
      "Source validation and reconciliation rules.",
      "Traceability from KPI to source event.",
      "Per-domain data governance.",
    ],
    capabilities: [
      "Power BI",
      "Tableau",
      "Looker Studio",
      "Semantic layer",
      "Data governance",
      "Lineage",
    ],
    deliverables: [
      "Documented semantic layer covering core business areas.",
      "Executive dashboards aligned to the semantic layer.",
      "Reconciliation reports across sources.",
      "Traceability from each KPI back to its source data.",
      "Governance policy and ownership map.",
    ],
    copilot:
      "Enterprise Copilot reads the semantic layer as its primary source of truth — every answer references the same numbers leadership already trusts.",
  },
};

/* -------------------------------------------------------------------- */
/* Operational AI                                                        */
/* -------------------------------------------------------------------- */

const AI_PARENT = {
  label: "Operational AI",
  href: "/services/enterprise-ai",
};

export const ENTERPRISE_AI_PAGES: Record<string, SpecializedPage> = {
  "generative-ai": {
    slug: "generative-ai",
    eyebrow: "Operational AI",
    title: "Generative AI",
    parent: AI_PARENT,
    intro:
      "LLM solutions grounded on private data, with RAG, access controls, and traceability — useful answers with citations, not chat for the sake of chat.",
    problem:
      "Generative AI without grounding produces fluent answers that look right and aren't. The fix is private data, explicit retrieval, and citations — not a fancier prompt.",
    whatWeDo: [
      "Corporate RAG over private documents, policies, and structured data.",
      "Answers with citations and traceability back to the source.",
      "Per-role access controls and document-level permissions.",
      "Deployment in private cloud, VPC, or on-premise as required.",
      "Continuous evaluation of answer quality with feedback loops.",
    ],
    capabilities: [
      "LLMs",
      "RAG",
      "Vector search",
      "Citations",
      "Per-role permissions",
      "Evaluation harness",
      "Prompt engineering",
    ],
    deliverables: [
      "RAG architecture with documented data sources.",
      "Retrieval pipeline with quality checks.",
      "Permission model aligned with corporate policies.",
      "Evaluation harness with regression tests.",
      "Operations runbook and update cadence.",
    ],
    copilot:
      "Generative AI is one of the engines behind Enterprise Copilot — but only one. The copilot adds permissions, validations, and approvals on top.",
  },
  "machine-learning": {
    slug: "machine-learning",
    eyebrow: "Operational AI",
    title: "Machine Learning",
    parent: AI_PARENT,
    intro:
      "Productive models for prediction, classification, and anomaly detection — with MLOps, monitoring, and continuous evaluation.",
    problem:
      "Models that work in notebooks rarely survive production without monitoring, retraining, and a clear ownership model. That gap is what MLOps closes.",
    whatWeDo: [
      "Models for prediction, classification, and anomaly detection.",
      "Feature pipelines aligned with the source data lineage.",
      "Monitoring of model performance and data drift in production.",
      "Continuous evaluation with retraining triggers.",
      "Clear ownership and operational runbook per model.",
    ],
    capabilities: [
      "Python",
      "Scikit-learn",
      "PyTorch",
      "MLflow",
      "Feature stores",
      "Model monitoring",
      "Continuous evaluation",
    ],
    deliverables: [
      "Model documented with assumptions and expected behavior.",
      "Feature pipeline integrated with source systems.",
      "Model monitoring dashboard with alerts.",
      "Retraining pipeline and approval flow.",
      "Operations runbook and rollback plan.",
    ],
    copilot:
      "Enterprise Copilot can call ML models as decision-support — surfacing predictions with the same traceability and approval flow as any other answer.",
  },
  "intelligent-automation": {
    slug: "intelligent-automation",
    eyebrow: "Operational AI",
    title: "Intelligent Automation",
    parent: AI_PARENT,
    intro:
      "AI-assisted flows where the human validates the call — not where the AI decides alone. Useful for reconciliations, validations, and recurring reports.",
    problem:
      "Full automation is risky for processes that need judgment. Assisted automation — where the AI prepares, validates, and proposes — keeps speed without giving up control.",
    whatWeDo: [
      "Recurring reconciliations and validations prepared by the assistant.",
      "Reports drafted by the AI and approved by the human.",
      "Decision points with explicit human-in-the-loop checkpoints.",
      "Audit log of who approved what and when.",
      "Integration with the source systems and approval flows.",
    ],
    capabilities: [
      "Human-in-the-loop",
      "Workflow engines",
      "Approval flows",
      "Audit log",
      "RAG",
      "ML decision support",
    ],
    deliverables: [
      "Automation map with human checkpoints per process.",
      "Audit log with user, action, source, and outcome.",
      "Operational dashboards showing assisted activity.",
      "Rollback path for any automated step.",
      "Operations and governance handoff.",
    ],
    copilot:
      "Enterprise Copilot is the natural surface for assisted automation — it prepares the action, shows the evidence, and waits for human approval.",
  },
  "internal-assistants": {
    slug: "internal-assistants",
    eyebrow: "Operational AI",
    title: "Internal Assistants",
    parent: AI_PARENT,
    intro:
      "Assistants for internal teams over documentation, policies, and operational knowledge — wired into private context, not the open internet.",
    problem:
      "Most internal questions get answered through tribal knowledge or stale wikis. An assistant grounded on the actual corporate knowledge — and respecting permissions — collapses that latency.",
    whatWeDo: [
      "Assistants over internal documentation, policies, and runbooks.",
      "Onboarding helpers for new analysts, consultants, or operators.",
      "Search over corporate knowledge with citations.",
      "Per-role and per-document access controls.",
      "Feedback loop for content improvement.",
    ],
    capabilities: [
      "RAG",
      "Vector search",
      "Permission filters",
      "Document ingestion",
      "Citations",
      "Feedback capture",
    ],
    deliverables: [
      "Assistant deployed with documented ingestion pipeline.",
      "Permission model aligned with corporate ACLs.",
      "Quality and evaluation harness.",
      "Feedback loop to improve corpus quality.",
      "Operations runbook and update cadence.",
    ],
    copilot:
      "Internal assistants are a stepping stone toward Enterprise Copilot — once teams trust the assistant for answers, the copilot adds actions and operational reach.",
  },
  "operational-copilots": {
    slug: "operational-copilots",
    eyebrow: "Operational AI",
    title: "Operational Copilots",
    parent: AI_PARENT,
    intro:
      "AI capabilities wired into SAP, databases, internal APIs, and reports — with permissions, validations, and audit. This is where Enterprise Copilot lives.",
    problem:
      "A chatbot bolted on top of the business adds noise. A copilot wired into the operation — with permissions, validations, and approvals — adds capacity.",
    whatWeDo: [
      "Operational queries across SAP, databases, APIs, and reports.",
      "Validation of inconsistencies with explicit business rules.",
      "Report preparation with traceability to the source.",
      "Security per role inherited from the source system.",
      "Human approval before any sensitive action.",
    ],
    capabilities: [
      "RAG",
      "Tool use",
      "SAP connectors",
      "Database adapters",
      "Workflow engines",
      "Approval flows",
      "Audit log",
    ],
    deliverables: [
      "Operational copilot scoped to one or more business processes.",
      "Permission model inherited from source systems.",
      "Validation rules aligned with the business.",
      "Audit log exportable for compliance.",
      "Operations runbook and evolution plan.",
    ],
    copilot:
      "This is Enterprise Copilot. The flagship operational copilot — connected to real systems, with permissions, validations, and traceability.",
    primaryCta: { label: "Explore Enterprise Copilot", href: "/copilot" },
    secondaryCta: { label: "Request a pilot", href: "/copilot/pilot" },
  },
};
