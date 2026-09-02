import {
  BarChart3,
  Building2,
  Headphones,
  Layers,
  LineChart,
  Plug,
  Wand2,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type IndustryArea = {
  id: string;
  title: string;
  /** Typical problem (1-2 sentences). */
  problem: string;
  /** What we do in that case. */
  whatWeDo: string[];
  /** Related systems and capabilities (badges). */
  systems: string[];
  /** CTA copy — link is /contact?topic=<id>. */
  cta: string;
  icon: LucideIcon;
};

export const INDUSTRY_AREAS: IndustryArea[] = [
  {
    id: "hr",
    title: "Human Resources",
    problem:
      "Workforce data scattered across SAP HCM, SuccessFactors, Excel, and manual reports, with delayed queries and manual validation.",
    whatWeDo: [
      "Headcount reports by unit, site, and position.",
      "Assisted queries on SAP HCM and SuccessFactors.",
      "Absence, vacation, and organizational-chart tracking.",
      "Master-data validation and approval workflows.",
    ],
    systems: [
      "SAP HCM",
      "SuccessFactors",
      "Master data",
      "Workflows",
      "Reports",
    ],
    cta: "Talk about this case",
    icon: Building2,
  },
  {
    id: "finance",
    title: "Finance",
    problem:
      "Closings and reconciliations that depend on Excel, items that show up late, and executive reports that every team builds their own way.",
    whatWeDo: [
      "Monthly closings with automated validations.",
      "SAP FI ↔ bank and third-party reconciliations.",
      "Variance explanation with traceability to the source.",
      "Item and report validation before publishing.",
    ],
    systems: [
      "SAP FI",
      "SAP CO",
      "Reporting",
      "Reconciliations",
      "Bank integrations",
    ],
    cta: "Talk about this case",
    icon: BarChart3,
  },
  {
    id: "operations",
    title: "Operations",
    problem:
      "Operational status spread across systems, alerts that arrive too late, and functional support resolved through email threads.",
    whatWeDo: [
      "Current process and status monitoring.",
      "Business-rule alerts before the issue escalates.",
      "Integration with operational and support systems.",
      "Automation of repetitive tasks with human validation.",
    ],
    systems: [
      "Operational systems",
      "ERP",
      "Internal APIs",
      "Alerts",
      "Automation",
    ],
    cta: "Talk about this case",
    icon: Workflow,
  },
  {
    id: "reporting",
    title: "Executive reporting",
    problem:
      "Dashboards with different numbers across areas and reports without source evidence for audit review.",
    whatWeDo: [
      "Executive dashboards and reports with source traceability.",
      "Traceability to the source data from the final report.",
      "Common semantic layer across business areas.",
      "Source validation and data-quality rules.",
    ],
    systems: [
      "Power BI",
      "Tableau",
      "Looker Studio",
      "Semantic layer",
      "Traceability",
    ],
    cta: "Talk about this case",
    icon: LineChart,
  },
  {
    id: "support",
    title: "Internal support",
    problem:
      "Repeating tickets, scattered documentation, and dependence on a few people to resolve functional or technical support.",
    whatWeDo: [
      "Assisted helpdesk over internal documentation and processes.",
      "ITSM and Change Management on Solution Manager.",
      "Intelligent search across corporate documentation.",
      "Structured L1 / L2 / L3 escalation.",
    ],
    systems: [
      "ITSM",
      "SAP Solution Manager",
      "Change Management",
      "Test Management",
      "Documentation",
    ],
    cta: "Talk about this case",
    icon: Headphones,
  },
  {
    id: "sap",
    title: "SAP integrations",
    problem:
      "Fragile interfaces, IDocs failing without monitoring, and SAP changes that break downstream integrations.",
    whatWeDo: [
      "SAP ↔ third-party connectivity with versioned contracts.",
      "Monitoring of interfaces, IDocs, and critical jobs.",
      "Evolutionary support with regression testing.",
      "Re-architecture without breaking productive processes.",
    ],
    systems: [
      "RFC",
      "IDocs",
      "BAPIs",
      "Boomi",
      "HCI / CPI",
      "PI / PO",
      "IBM MQ",
    ],
    cta: "Review SAP integration",
    icon: Plug,
  },
  {
    id: "automation",
    title: "Process automation",
    problem:
      "Recurring closings, reconciliations, and reports done by hand — high manual workload and errors detected too late.",
    whatWeDo: [
      "Assisted automation with prior human validation.",
      "Explicit rules to identify manual inconsistencies.",
      "Auditable, reprocessable processes.",
      "Human-in-the-loop before any critical action.",
    ],
    systems: [
      "Workflows",
      "Business rules",
      "Reports",
      "Validations",
      "Audit",
    ],
    cta: "Talk about this case",
    icon: Wand2,
  },
  {
    id: "governance",
    title: "Data governance",
    problem:
      "Catalogs without owners, quality rules not applied, and different numbers across sources ending up in executive reports.",
    whatWeDo: [
      "Common dictionary and versioned quality rules.",
      "Catalog validation and reconciliation between sources.",
      "End-to-end traceability all the way to the final report.",
      "Shared semantic layer across business areas.",
    ],
    systems: [
      "Common dictionary",
      "Quality rules",
      "Semantic layer",
      "Lineage",
      "Reports",
    ],
    cta: "Talk about this case",
    icon: Layers,
  },
];
