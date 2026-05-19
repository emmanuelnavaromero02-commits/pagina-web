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
  /** Problema típico (1-2 frases). */
  problem: string;
  /** Qué hacemos en ese caso. */
  whatWeDo: string[];
  /** Sistemas y capacidades relacionadas (badges). */
  systems: string[];
  /** Texto del CTA — el link se construye con /contact?topic=<id>. */
  cta: string;
  icon: LucideIcon;
};

export const INDUSTRY_AREAS: IndustryArea[] = [
  {
    id: "hr",
    title: "Recursos Humanos",
    problem:
      "Datos de plantilla repartidos entre SAP HCM, SuccessFactors, Excel y reportes manuales. Consultas que tardan días y validaciones que se hacen a mano.",
    whatWeDo: [
      "Reportes de headcount por unidad, centro y posición.",
      "Consultas asistidas sobre SAP HCM y SuccessFactors.",
      "Seguimiento de ausencias, vacaciones y organigrama.",
      "Validación de datos maestros y workflows de aprobación.",
    ],
    systems: [
      "SAP HCM",
      "SuccessFactors",
      "Datos maestros",
      "Workflows",
      "Reportes",
    ],
    cta: "Hablar sobre este caso",
    icon: Building2,
  },
  {
    id: "finance",
    title: "Finanzas",
    problem:
      "Cierres y conciliaciones que dependen de Excel, partidas que aparecen tarde y reportes ejecutivos que cada equipo arma a su manera.",
    whatWeDo: [
      "Apoyo a cierres mensuales con validaciones automáticas.",
      "Conciliaciones SAP FI ↔ bancos y sistemas terceros.",
      "Explicación de variaciones con trazabilidad al dato.",
      "Validación de partidas y reportes antes de publicar.",
    ],
    systems: [
      "SAP FI",
      "SAP CO",
      "Reporting",
      "Conciliaciones",
      "Integraciones bancarias",
    ],
    cta: "Hablar sobre este caso",
    icon: BarChart3,
  },
  {
    id: "operations",
    title: "Operaciones",
    problem:
      "Estados operativos repartidos en distintos sistemas, alertas que llegan tarde y soporte funcional que se resuelve por correo.",
    whatWeDo: [
      "Seguimiento de procesos y estados en tiempo real.",
      "Alertas por reglas de negocio antes de que escale.",
      "Integración con sistemas operativos y de soporte.",
      "Automatización de tareas repetitivas con validación humana.",
    ],
    systems: [
      "Sistemas operativos",
      "ERP",
      "APIs internas",
      "Alertas",
      "Automatización",
    ],
    cta: "Hablar sobre este caso",
    icon: Workflow,
  },
  {
    id: "reporting",
    title: "Reporting ejecutivo",
    problem:
      "Dashboards bonitos sin sustento, cifras distintas entre áreas y reportes que no soportan una auditoría.",
    whatWeDo: [
      "Dashboards y reportes ejecutivos auditables.",
      "Trazabilidad al dato original desde el reporte final.",
      "Capa semántica común entre áreas.",
      "Validación de fuentes y reglas de calidad.",
    ],
    systems: [
      "Power BI",
      "Tableau",
      "Looker Studio",
      "Capa semántica",
      "Trazabilidad",
    ],
    cta: "Hablar sobre este caso",
    icon: LineChart,
  },
  {
    id: "support",
    title: "Soporte interno",
    problem:
      "Tickets que se repiten, documentación dispersa y dependencia de pocas personas para resolver soporte funcional o técnico.",
    whatWeDo: [
      "Helpdesk asistido sobre documentación y procesos internos.",
      "ITSM y Change Management con Solution Manager.",
      "Búsqueda inteligente sobre documentación corporativa.",
      "Escalamiento estructurado L1 / L2 / L3.",
    ],
    systems: [
      "ITSM",
      "SAP Solution Manager",
      "Change Management",
      "Test Management",
      "Documentación",
    ],
    cta: "Hablar sobre este caso",
    icon: Headphones,
  },
  {
    id: "sap",
    title: "Integraciones SAP",
    problem:
      "Interfaces frágiles, IDocs que fallan sin monitoreo y cambios en SAP que rompen integraciones aguas abajo.",
    whatWeDo: [
      "Conectividad SAP ↔ terceros con contratos versionados.",
      "Monitoreo de interfaces, IDocs y jobs críticos.",
      "Soporte evolutivo con pruebas de regresión.",
      "Re-arquitectura sin romper procesos productivos.",
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
    cta: "Revisar integración SAP",
    icon: Plug,
  },
  {
    id: "automation",
    title: "Automatización de procesos",
    problem:
      "Cierres, conciliaciones y reportes recurrentes que se hacen a mano con alta carga manual y errores que se detectan tarde.",
    whatWeDo: [
      "Automatización asistida con validación humana previa.",
      "Reducción de errores manuales con reglas explícitas.",
      "Procesos auditables y reprocesables.",
      "Human-in-the-loop antes de cualquier acción crítica.",
    ],
    systems: [
      "Workflows",
      "Reglas de negocio",
      "Reportes",
      "Validaciones",
      "Auditoría",
    ],
    cta: "Hablar sobre este caso",
    icon: Wand2,
  },
  {
    id: "governance",
    title: "Gobierno de datos",
    problem:
      "Catálogos sin dueño, reglas de calidad sin aplicar y cifras distintas entre fuentes que terminan en reportes ejecutivos.",
    whatWeDo: [
      "Diccionario común y reglas de calidad versionadas.",
      "Validación de catálogos y reconciliación entre fuentes.",
      "Trazabilidad punta a punta hasta el reporte final.",
      "Capa semántica compartida entre áreas.",
    ],
    systems: [
      "Diccionario común",
      "Reglas de calidad",
      "Capa semántica",
      "Linaje",
      "Reportes",
    ],
    cta: "Hablar sobre este caso",
    icon: Layers,
  },
];
