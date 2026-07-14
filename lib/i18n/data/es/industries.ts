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
    title: "Recursos Humanos",
    problem:
      "Datos de plantilla dispersos entre SAP HCM, SuccessFactors, Excel y reportes manuales, con consultas retrasadas y validación manual.",
    whatWeDo: [
      "Reportes de plantilla por unidad, centro y puesto.",
      "Consultas asistidas en SAP HCM y SuccessFactors.",
      "Seguimiento de ausencias, vacaciones y organigramas.",
      "Validación de datos maestros y flujos de aprobación.",
    ],
    systems: [
      "SAP HCM",
      "SuccessFactors",
      "Datos maestros",
      "Flujos de trabajo",
      "Reportes",
    ],
    cta: "Hablemos de este caso",
    icon: Building2,
  },
  {
    id: "finance",
    title: "Finanzas",
    problem:
      "Cierres y conciliaciones que dependen de Excel, partidas que aparecen tarde y reportes ejecutivos que cada equipo prepara de forma distinta.",
    whatWeDo: [
      "Cierres mensuales con validaciones automatizadas.",
      "Conciliaciones entre SAP FI, bancos y terceros.",
      "Explicación de variaciones con trazabilidad hasta la fuente.",
      "Validación de partidas y reportes antes de su publicación.",
    ],
    systems: [
      "SAP FI",
      "SAP CO",
      "Reportes",
      "Conciliaciones",
      "Integraciones bancarias",
    ],
    cta: "Hablemos de este caso",
    icon: BarChart3,
  },
  {
    id: "operations",
    title: "Operaciones",
    problem:
      "Estados operativos distribuidos entre sistemas, alertas que llegan demasiado tarde y soporte funcional resuelto mediante cadenas de correo.",
    whatWeDo: [
      "Monitoreo del estado actual de procesos.",
      "Alertas basadas en reglas de negocio antes de que el problema se agrave.",
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
    cta: "Hablemos de este caso",
    icon: Workflow,
  },
  {
    id: "reporting",
    title: "Reportes ejecutivos",
    problem:
      "Paneles con cifras distintas entre áreas y reportes sin evidencia de origen para revisión de auditoría.",
    whatWeDo: [
      "Paneles y reportes ejecutivos con trazabilidad a la fuente.",
      "Trazabilidad desde el reporte final hasta los datos de origen.",
      "Capa semántica común para las distintas áreas de negocio.",
      "Validación de fuentes y reglas de calidad de datos.",
    ],
    systems: [
      "Power BI",
      "Tableau",
      "Looker Studio",
      "Capa semántica",
      "Trazabilidad",
    ],
    cta: "Hablemos de este caso",
    icon: LineChart,
  },
  {
    id: "support",
    title: "Soporte interno",
    problem:
      "Incidencias repetitivas, documentación dispersa y dependencia de pocas personas para resolver el soporte funcional o técnico.",
    whatWeDo: [
      "Mesa de ayuda asistida sobre documentación y procesos internos.",
      "ITSM y Change Management en Solution Manager.",
      "Búsqueda inteligente en la documentación corporativa.",
      "Escalamiento estructurado L1 / L2 / L3.",
    ],
    systems: [
      "ITSM",
      "SAP Solution Manager",
      "Change Management",
      "Test Management",
      "Documentación",
    ],
    cta: "Hablemos de este caso",
    icon: Headphones,
  },
  {
    id: "sap",
    title: "Integraciones SAP",
    problem:
      "Interfaces frágiles, IDocs con fallos sin monitoreo y cambios en SAP que rompen integraciones posteriores.",
    whatWeDo: [
      "Conectividad entre SAP y terceros mediante contratos versionados.",
      "Monitoreo de interfaces, IDocs y jobs críticos.",
      "Soporte evolutivo con pruebas de regresión.",
      "Rediseño de arquitectura sin afectar los procesos productivos.",
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
    cta: "Revisar la integración SAP",
    icon: Plug,
  },
  {
    id: "automation",
    title: "Automatización de procesos",
    problem:
      "Cierres, conciliaciones y reportes recurrentes realizados a mano: alta carga manual y errores detectados demasiado tarde.",
    whatWeDo: [
      "Automatización asistida con validación humana previa.",
      "Reglas explícitas para identificar inconsistencias manuales.",
      "Procesos auditables y reprocesables.",
      "Supervisión humana antes de cualquier acción crítica.",
    ],
    systems: [
      "Flujos de trabajo",
      "Reglas de negocio",
      "Reportes",
      "Validaciones",
      "Auditoría",
    ],
    cta: "Hablemos de este caso",
    icon: Wand2,
  },
  {
    id: "governance",
    title: "Gobierno de datos",
    problem:
      "Catálogos sin responsables, reglas de calidad que no se aplican y cifras distintas entre fuentes que terminan en los reportes ejecutivos.",
    whatWeDo: [
      "Diccionario común y reglas de calidad versionadas.",
      "Validación de catálogos y conciliación entre fuentes.",
      "Trazabilidad de principio a fin hasta el reporte final.",
      "Capa semántica compartida entre áreas de negocio.",
    ],
    systems: [
      "Diccionario común",
      "Reglas de calidad",
      "Capa semántica",
      "Linaje",
      "Reportes",
    ],
    cta: "Hablemos de este caso",
    icon: Layers,
  },
];
