import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bot,
  Boxes,
  Building2,
  Cable,
  CheckCircle2,
  Cloud,
  Database,
  FileBarChart,
  GitBranch,
  Layers,
  LineChart,
  Lock,
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
    title: "Consultar información empresarial",
    description:
      "Responde preguntas operativas usando datos reales de SAP, bases de datos y reportes internos.",
    icon: Database,
  },
  {
    title: "Explicar datos y reportes",
    description:
      "Traduce métricas y cierres a explicaciones claras para el equipo y para la dirección.",
    icon: FileBarChart,
  },
  {
    title: "Validar inconsistencias",
    description:
      "Detecta diferencias entre fuentes y propone correcciones antes de que lleguen al reporte final.",
    icon: AlertTriangle,
  },
  {
    title: "Generar reportes ejecutivos",
    description:
      "Construye vistas listas para dirección a partir de la información operativa del día.",
    icon: BarChart3,
  },
  {
    title: "Conectar SAP, BD y APIs",
    description:
      "Se integra con SAP, bases de datos corporativas y APIs internas sin romper procesos existentes.",
    icon: Cable,
  },
  {
    title: "Reducir tareas repetitivas",
    description:
      "Automatiza consultas, validaciones y reportes que hoy se hacen a mano en Excel.",
    icon: Wand2,
  },
];

export const COPILOT_PROBLEMS: { title: string; description: string }[] = [
  {
    title: "Datos dispersos",
    description:
      "Información crítica repartida entre SAP, Excel, bases de datos y reportes manuales.",
  },
  {
    title: "Reportes manuales",
    description:
      "Equipos que dedican días a consolidar reportes que se podrían generar automáticamente.",
  },
  {
    title: "Errores operativos",
    description:
      "Inconsistencias que se detectan demasiado tarde, ya cuando llegaron al reporte final.",
  },
  {
    title: "Dependencia de Excel",
    description:
      "Procesos críticos atados a un archivo que solo conoce una persona del equipo.",
  },
  {
    title: "Sistemas desconectados",
    description:
      "Plataformas que no se hablan entre sí y obligan a duplicar trabajo manual.",
  },
  {
    title: "Consultas internas lentas",
    description:
      "Preguntas operativas que tardan días en responderse y bloquean decisiones.",
  },
];

export const COPILOT_IS: string[] = [
  "Una capa de IA operativa sobre tus sistemas actuales.",
  "Un punto único de consulta inteligente para equipos internos.",
  "Un validador de información con reglas de negocio explícitas.",
  "Un generador de reportes con trazabilidad al dato original.",
  "Un asistente conectado a SAP, bases de datos, APIs y reportes.",
];

export const COPILOT_ISNT: string[] = [
  "No es un chatbot genérico sin contexto empresarial.",
  "No reemplaza SAP, ERP, CRM ni la responsabilidad del equipo.",
  "No ejecuta acciones sensibles sin autorización explícita.",
  "No inventa datos ni alucina sobre resultados operativos.",
  "No rompe flujos existentes ni los duplica en paralelo.",
];

export const COPILOT_BENEFITS: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Menos trabajo manual",
    description:
      "Consultas, validaciones y reportes que hoy se hacen a mano pasan a un flujo asistido.",
    icon: Wand2,
  },
  {
    title: "Menos dependencia de Excel",
    description:
      "Procesos críticos dejan de depender de un archivo mantenido por una sola persona.",
    icon: FileBarChart,
  },
  {
    title: "Menos errores de consolidación",
    description:
      "El copiloto detecta inconsistencias entre fuentes antes de que lleguen al reporte final.",
    icon: AlertTriangle,
  },
  {
    title: "Más velocidad en consultas",
    description:
      "Preguntas operativas internas obtienen respuesta con trazabilidad al dato original.",
    icon: Activity,
  },
  {
    title: "Más trazabilidad",
    description:
      "Cada consulta, validación y acción queda registrada para auditoría sin esfuerzo adicional.",
    icon: GitBranch,
  },
  {
    title: "Mejor gobierno de datos",
    description:
      "Las reglas se aplican en un único lugar y se reflejan en cada respuesta y reporte.",
    icon: Layers,
  },
];

export const COPILOT_CONNECTIONS: { title: string; icon: LucideIcon }[] = [
  { title: "SAP On-Premise / Cloud / BTP", icon: Boxes },
  { title: "Bases de datos empresariales", icon: Database },
  { title: "APIs internas", icon: Network },
  { title: "Plataformas cloud", icon: Cloud },
  { title: "Reportes y BI", icon: LineChart },
  { title: "Sistemas legacy", icon: ServerCog },
];

/* Capacidades por conexión — versión más detallada que se muestra
   en /copilot como bloque dedicado con badges por categoría. */

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
      "Consulta y valida sobre el core SAP con conectores estables y permisos heredados.",
    icon: Boxes,
    badges: [
      "ECC",
      "S/4HANA",
      "FI",
      "CO",
      "HCM",
      "SuccessFactors",
      "RFC",
      "IDocs",
      "BAPIs",
    ],
  },
  {
    id: "data",
    title: "Datos",
    description:
      "Acceso controlado a las bases empresariales sobre las que ya descansa la operación.",
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
      "Despliegue y conectividad sobre las plataformas cloud que el cliente ya utiliza.",
    icon: Cloud,
    badges: ["AWS", "Azure", "GCP", "SAP BTP"],
  },
  {
    id: "integrations",
    title: "Integraciones",
    description:
      "Conexión con sistemas no SAP a través de middleware empresarial y APIs.",
    icon: Plug,
    badges: ["APIs", "Boomi", "HCI / CPI", "PI / PO", "REST", "SOAP"],
  },
  {
    id: "reporting",
    title: "Reporting",
    description:
      "Soporte a dashboards, reportes ejecutivos y validaciones con trazabilidad al dato.",
    icon: LineChart,
    badges: ["Dashboards", "Reportes ejecutivos", "Validaciones", "Trazabilidad"],
  },
];

export const COPILOT_USE_CASES: {
  area: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    area: "Recursos Humanos",
    description:
      "Consultas sobre headcount, vacaciones, organigrama y validaciones de datos personales.",
    icon: Building2,
  },
  {
    area: "Finanzas",
    description:
      "Apoyo en cierres, conciliaciones, validación de partidas y explicación de variaciones.",
    icon: BarChart3,
  },
  {
    area: "Operaciones",
    description:
      "Soporte a equipos operativos con consultas en tiempo real sobre estados y procesos.",
    icon: Workflow,
  },
  {
    area: "Reporting ejecutivo",
    description:
      "Tableros y respuestas confiables para dirección con trazabilidad al dato original.",
    icon: LineChart,
  },
  {
    area: "Auditoría",
    description:
      "Trazabilidad de consultas, acciones y reglas aplicadas sobre los datos operativos.",
    icon: ShieldCheck,
  },
  {
    area: "Soporte interno",
    description:
      "Primera línea asistida para help-desk técnico y funcional de plataformas internas.",
    icon: Activity,
  },
];

export const COPILOT_SECURITY: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Permisos por rol",
    description:
      "Cada usuario ve solo lo que su rol permite. La capa IA respeta los permisos del sistema fuente.",
    icon: Lock,
  },
  {
    title: "Trazabilidad",
    description:
      "Toda consulta y acción queda registrada con usuario, contexto y resultado para auditoría.",
    icon: GitBranch,
  },
  {
    title: "Validación antes de ejecutar",
    description:
      "Las acciones sensibles se confirman antes de ejecutarse contra los sistemas reales.",
    icon: ShieldCheck,
  },
  {
    title: "Registro de acciones",
    description:
      "Bitácora completa de cambios, accesos y resultados, exportable para cumplimiento.",
    icon: FileBarChart,
  },
  {
    title: "No modifica sin autorización",
    description:
      "El copiloto no escribe en sistemas críticos sin una autorización explícita del usuario o flujo.",
    icon: AlertTriangle,
  },
  {
    title: "Despliegue controlado",
    description:
      "Funciona on-premise, en cloud privado o en VPC dedicada, según la política del cliente.",
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
    title: "El usuario pregunta",
    description:
      "Un usuario autorizado plantea una pregunta o solicita un reporte desde la interfaz del copiloto.",
    icon: Bot,
  },
  {
    step: "02",
    title: "Identifica intención y permisos",
    description:
      "Analiza qué se está pidiendo y verifica que el usuario tiene permisos para esa información o acción.",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Consulta sistemas autorizados",
    description:
      "Accede a SAP, bases de datos, APIs y reportes según los permisos del usuario y el contexto.",
    icon: Network,
  },
  {
    step: "04",
    title: "Valida reglas e inconsistencias",
    description:
      "Aplica reglas de negocio y revisa diferencias entre fuentes antes de responder.",
    icon: AlertTriangle,
  },
  {
    step: "05",
    title: "Responde con trazabilidad",
    description:
      "Entrega la respuesta con el dato original referenciado, no como una opinión sin fuente.",
    icon: FileBarChart,
  },
  {
    step: "06",
    title: "Propone acción a confirmar",
    description:
      "Si la operación lo requiere, sugiere una acción (reporte, exportación, flujo) para que el humano la confirme.",
    icon: CheckCircle2,
  },
];

/* Origen del producto — sección "Nace de experiencia en operación real" */
export const COPILOT_ORIGIN_BLOCKS: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Experiencia SAP en operación",
    description:
      "Años conectando FI, CO, MM, SD, HCM y procesos relacionados con sistemas externos. El copiloto sabe dónde tocar y dónde no.",
    icon: Boxes,
  },
  {
    title: "Fábricas de software internas",
    description:
      "Hemos operado fábricas dedicadas con backlog, QA, despliegue y soporte. Trasladamos esa disciplina al producto.",
    icon: Workflow,
  },
  {
    title: "Integraciones empresariales",
    description:
      "Boomi, HCI/CPI, PI/PO, IBM WebSphere y MQ. El copiloto consume y respeta esos canales, no los reemplaza.",
    icon: Plug,
  },
  {
    title: "Bases de datos y reporting",
    description:
      "SQL Server, Oracle, PostgreSQL, MySQL, DB2, Sybase y SAP HANA conectadas a reportes ejecutivos auditables.",
    icon: Database,
  },
  {
    title: "Soporte y gobierno",
    description:
      "Solution Manager, ITSM, Change y Test Management nos dieron criterio para diseñar un copiloto operable y auditable.",
    icon: ShieldCheck,
  },
  {
    title: "IA aplicada a operación",
    description:
      "RAG corporativo, ML productivo y asistentes internos sobre datos propios. Sin atajos, sin demos vacías.",
    icon: GitBranch,
  },
];
