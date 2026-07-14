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
    title: "Consultar datos empresariales",
    description:
      "Responde preguntas operativas con datos reales de SAP, bases de datos y reportes internos.",
    icon: Database,
  },
  {
    title: "Explicar cifras y reportes",
    description:
      "Convierte métricas y cierres en explicaciones claras para el equipo y la dirección.",
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
      "Crea vistas para la dirección a partir de la información operativa del día.",
    icon: BarChart3,
  },
  {
    title: "Conectar SAP, bases de datos y APIs",
    description:
      "Se integra con SAP, bases de datos corporativas y APIs internas sin afectar lo que ya funciona.",
    icon: Cable,
  },
  {
    title: "Reducir tareas repetitivas",
    description:
      "Automatiza consultas, validaciones y reportes que actualmente se realizan de forma manual en Excel.",
    icon: Wand2,
  },
];

export const COPILOT_PROBLEMS: { title: string; description: string }[] = [
  {
    title: "Datos dispersos",
    description:
      "Información crítica distribuida entre SAP, Excel, bases de datos y reportes manuales.",
  },
  {
    title: "Reportes manuales",
    description:
      "Equipos que consolidan reportes recurrentes a mano desde varias fuentes.",
  },
  {
    title: "Errores operativos",
    description:
      "Inconsistencias detectadas demasiado tarde, normalmente después de llegar al reporte final.",
  },
  {
    title: "Dependencia de Excel",
    description:
      "Procesos críticos ligados a una sola hoja de cálculo mantenida por una persona del equipo.",
  },
  {
    title: "Sistemas desconectados",
    description:
      "Plataformas que no se comunican y obligan a capturar datos dos veces de forma manual.",
  },
  {
    title: "Respuestas internas lentas",
    description:
      "Preguntas operativas retrasadas por búsquedas manuales y validación de fuentes.",
  },
];

export const COPILOT_IS: string[] = [
  "Una capa de IA operativa conectada a tus sistemas actuales.",
  "Un único punto de consulta inteligente para los equipos internos.",
  "Un validador que aplica reglas de negocio explícitas.",
  "Un generador de reportes con trazabilidad hasta la fuente.",
  "Un asistente conectado a SAP, bases de datos, APIs y reportes.",
];

export const COPILOT_ISNT: string[] = [
  "No es un chatbot genérico sin contexto empresarial.",
  "No sustituye a SAP, ERP, CRM ni la responsabilidad del equipo.",
  "No es un agente que ejecuta acciones sensibles sin aprobación explícita.",
  "No es una herramienta que inventa datos ni genera resultados sin fundamento.",
  "No es un sistema que rompe los flujos existentes ni los duplica en paralelo.",
];

export const COPILOT_BENEFITS: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Flujos asistidos",
    description:
      "Las consultas, validaciones y reportes manuales pueden incorporarse a un flujo asistido controlado.",
    icon: Wand2,
  },
  {
    title: "Registros de proceso gobernados",
    description:
      "La lógica seleccionada de hojas de cálculo puede capturarse en un flujo documentado y controlado.",
    icon: FileBarChart,
  },
  {
    title: "Validación entre fuentes",
    description:
      "El copiloto puede comparar fuentes autorizadas y señalar diferencias para revisión.",
    icon: AlertTriangle,
  },
  {
    title: "Respuestas internas asistidas",
    description:
      "Diseñado para responder preguntas operativas con referencias a los datos de origen.",
    icon: Activity,
  },
  {
    title: "Trazabilidad de actividad",
    description:
      "Las consultas, validaciones y acciones pertinentes pueden registrarse según el diseño acordado.",
    icon: GitBranch,
  },
  {
    title: "Gobierno de datos centralizado",
    description:
      "Las reglas pueden centralizarse y ser referenciadas por respuestas y reportes.",
    icon: Layers,
  },
];

export const COPILOT_CONNECTIONS: { title: string; icon: LucideIcon }[] = [
  { title: "SAP On-Premise / Cloud / BTP", icon: Boxes },
  { title: "Bases de datos empresariales", icon: Database },
  { title: "APIs internas", icon: Network },
  { title: "Plataformas de nube", icon: Cloud },
  { title: "Reportes y BI", icon: LineChart },
  { title: "Sistemas heredados", icon: ServerCog },
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
      "Lee y contrasta el núcleo operativo: finanzas, controlling, RR. HH., ventas, materiales y sus procesos relacionados.",
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
    title: "Datos",
    description:
      "Accede a bases de datos empresariales para responder con cifras coherentes y trazables hasta la fuente.",
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
    title: "Nube",
    description:
      "Funciona en las plataformas de nube que el cliente ya utiliza, sin duplicar infraestructura.",
    icon: Cloud,
    badges: ["AWS", "Azure", "GCP", "SAP BTP"],
  },
  {
    id: "integrations",
    title: "Integraciones",
    description:
      "Se comunica con sistemas ajenos a SAP mediante middleware empresarial y APIs sin afectar lo que ya funciona.",
    icon: Plug,
    badges: ["APIs", "Boomi", "HCI / CPI", "PI / PO", "REST", "SOAP"],
  },
  {
    id: "reporting",
    title: "Reportes",
    description:
      "Sustenta paneles, reportes ejecutivos y validaciones con trazabilidad hasta los datos de origen.",
    icon: LineChart,
    badges: [
      "Paneles",
      "Reportes ejecutivos",
      "Validaciones",
      "Trazabilidad",
    ],
  },
  {
    id: "security",
    title: "Seguridad",
    description:
      "Hereda los permisos por función del sistema de origen, registra cada acción y valida antes de cualquier ejecución sensible.",
    icon: ShieldCheck,
    badges: ["Funciones", "Permisos", "Registro de auditoría", "Aprobaciones", "Validaciones"],
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
      "Plantilla, vacaciones, estructura organizativa y validaciones de datos maestros.",
    icon: Building2,
  },
  {
    area: "Finanzas",
    description:
      "Cierres, conciliaciones, explicación de variaciones y validación a nivel de partida.",
    icon: BarChart3,
  },
  {
    area: "Operaciones",
    description:
      "Soporte operativo del estado actual: estados, consultas de procesos y decisiones asistidas.",
    icon: Workflow,
  },
  {
    area: "Reportes ejecutivos",
    description:
      "Respuestas preparadas para la dirección, con trazabilidad hasta los datos de origen.",
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
      "Respuesta asistida de primer nivel para equipos de soporte técnico y funcional.",
    icon: Activity,
  },
];

export const COPILOT_SECURITY: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Permisos por función",
    description:
      "Cada usuario ve únicamente lo que permite su función. La capa de IA respeta los permisos definidos en el sistema de origen.",
    icon: Lock,
  },
  {
    title: "Trazabilidad",
    description:
      "Las consultas y acciones pertinentes pueden registrarse con usuario, contexto y resultado para revisión de auditoría.",
    icon: GitBranch,
  },
  {
    title: "Validar antes de ejecutar",
    description:
      "Las acciones sensibles se confirman antes de ejecutarse en los sistemas reales.",
    icon: ShieldCheck,
  },
  {
    title: "Registro de auditoría",
    description:
      "Registros configurables de cambios, accesos y resultados, exportables para revisión de cumplimiento.",
    icon: FileBarChart,
  },
  {
    title: "Sin escrituras sin aprobación",
    description:
      "El copiloto no escribe en sistemas críticos sin la aprobación explícita de una persona o un flujo.",
    icon: AlertTriangle,
  },
  {
    title: "Despliegue controlado",
    description:
      "Funciona on-premise, en nube privada o en una VPC dedicada, según la política del cliente.",
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
    title: "El usuario consulta",
    description:
      "Un usuario autorizado formula una pregunta o solicita un reporte desde la interfaz del copiloto.",
    icon: Bot,
  },
  {
    step: "02",
    title: "Validación de intención y permisos",
    description:
      "Interpreta la solicitud y verifica que el usuario pueda consultar esa información o activar esa acción.",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Consultar sistemas autorizados",
    description:
      "Lee SAP, bases de datos, APIs y reportes según los permisos del usuario y el contexto de la solicitud.",
    icon: Network,
  },
  {
    step: "04",
    title: "Validar reglas y diferencias",
    description:
      "Aplica reglas de negocio y comprueba inconsistencias entre fuentes antes de responder.",
    icon: AlertTriangle,
  },
  {
    step: "05",
    title: "Responder con trazabilidad",
    description:
      "Devuelve la respuesta con referencia a la fuente, no como una opinión sin evidencia.",
    icon: FileBarChart,
  },
  {
    step: "06",
    title: "Proponer una acción para aprobación",
    description:
      "Si el flujo lo requiere, el copiloto propone una acción —un reporte, una exportación o un flujo— para que una persona la apruebe.",
    icon: CheckCircle2,
  },
];

/* Delivery principles — kept available even if not currently used on
   /copilot, in case they return to a future page. */
export const COPILOT_ORIGIN_BLOCKS: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Alcance de integración SAP",
    description:
      "Un diseño controlado para conectar FI, CO, MM, SD, HCM y procesos relacionados con sistemas externos.",
    icon: Boxes,
  },
  {
    title: "Disciplina de entrega",
    description:
      "El modelo de implementación utiliza backlog priorizado, QA, despliegue controlado, documentación y soporte.",
    icon: Workflow,
  },
  {
    title: "Integraciones empresariales",
    description:
      "Los patrones compatibles incluyen Boomi, HCI/CPI, PI/PO, IBM WebSphere y MQ; el copiloto utiliza canales gobernados en lugar de reemplazarlos.",
    icon: Plug,
  },
  {
    title: "Bases de datos y reportes",
    description:
      "El alcance de conexión puede incluir SQL Server, Oracle, PostgreSQL, MySQL, DB2, Sybase y SAP HANA con referencias a las fuentes.",
    icon: Database,
  },
  {
    title: "Soporte y gobierno",
    description:
      "El modelo operativo puede incorporar controles de Solution Manager, ITSM, Change y Test Management.",
    icon: ShieldCheck,
  },
  {
    title: "IA aplicada",
    description:
      "Los patrones de diseño incluyen RAG corporativo, ML gobernado y asistentes internos basados en datos privados autorizados.",
    icon: GitBranch,
  },
];

/* Qualitative workflow scenarios used by /copilot. */

export const COPILOT_IMPACT_STATS: { label: string; value: string }[] = [
  { label: "Flujo", value: "Consultas asistidas" },
  { label: "Hojas de cálculo", value: "Entradas controladas" },
  { label: "Auditoría", value: "Referencias a fuentes" },
  { label: "Acciones", value: "Aprobación antes de ejecutar" },
];

export const COPILOT_IMPACT_ROWS: {
  task: string;
  before: string;
  withCopilot: string;
  impact: string;
}[] = [
  {
    task: "Reporte mensual entre sistemas",
    before: "Exportaciones y cruces manuales",
    withCopilot: "Consolidación asistida con referencias a fuentes",
    impact: "Diseñado para reducir la consolidación manual",
  },
  {
    task: "Conciliación financiera entre varios sistemas",
    before: "Cruce manual entre fuentes desconectadas",
    withCopilot: "Cruce asistido bajo reglas explícitas",
    impact: "Diseñado para señalar diferencias para su revisión",
  },
  {
    task: "Respuesta a un auditor externo",
    before: "Evidencia reunida desde archivos y mensajes",
    withCopilot: "Evidencia referenciada preparada para revisión",
    impact: "Diseñado para apoyar la trazabilidad",
  },
  {
    task: "Generación de paneles ejecutivos",
    before: "Actualización manual desde varias fuentes",
    withCopilot: "Actualización asistida desde fuentes autorizadas",
    impact: "Diseñado para reducir la dependencia de reportes manuales",
  },
  {
    task: "Incorporación de analistas o consultores",
    before: "Conocimiento no documentado de tablas y procesos",
    withCopilot: "Orientación contextual sobre fuentes y reglas",
    impact: "Diseñado para facilitar el acceso al contexto operativo",
  },
  {
    task: "Investigación de incidentes operativos",
    before: "Búsquedas manuales entre registros y sistemas",
    withCopilot: "Referencias entre fuentes preparadas para el análisis",
    impact: "Diseñado para apoyar el diagnóstico de incidentes",
  },
];

/* Work the copilot reduces / amplifies — kept for potential reuse. */

export const COPILOT_REDUCES: { text: string; icon: LucideIcon }[] = [
  {
    text: "Exportar archivos CSV de un sistema y pegarlos en otro.",
    icon: Minus,
  },
  { text: "Reconstruir reglas de búsqueda para reportes recurrentes.", icon: Minus },
  { text: "Preparar a mano los reportes recurrentes de cierre.", icon: Minus },
  { text: "Buscar aprobaciones en cadenas antiguas de correo.", icon: Minus },
  { text: "Buscar evidencias para una auditoría.", icon: Minus },
  {
    text: "Enseñar a nuevos analistas mediante conocimiento no documentado de las tablas.",
    icon: Minus,
  },
];

export const COPILOT_POWERS: { text: string; icon: LucideIcon }[] = [
  { text: "Analizar variaciones con datos de distintas fuentes.", icon: ArrowUp },
  { text: "Decidir con información completa y trazable.", icon: ArrowUp },
  { text: "Detectar riesgos antes de que se agraven.", icon: ArrowUp },
  { text: "Priorizar acciones con criterios claros.", icon: ArrowUp },
  { text: "Responder auditorías con las evidencias preparadas.", icon: ArrowUp },
  { text: "Diseñar mejores procesos a partir de datos reales.", icon: ArrowUp },
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
      "Respuestas trazables para revisión sin depender de una hoja de cálculo improvisada.",
    icon: Compass,
  },
  {
    label: "CFO",
    description:
      "Cierres, conciliaciones y variaciones con referencias a fuentes y controles de validación.",
    icon: BarChart3,
  },
  {
    label: "Cumplimiento / Auditoría",
    description:
      "Quién hizo qué, cuándo, con qué fuente y bajo qué aprobación. Evidencias listas para revisión.",
    icon: ShieldCheck,
  },
  {
    label: "Consultor / Socio",
    description:
      "Preparación asistida de datos con más espacio para el diseño de soluciones.",
    icon: Briefcase,
  },
  {
    label: "Operaciones",
    description:
      "Incidentes, estados y validaciones entre fuentes presentados en un flujo controlado.",
    icon: Workflow,
  },
  {
    label: "RR. HH.",
    description:
      "Plantilla, ausencias, estructura organizativa y datos maestros, consultables con trazabilidad.",
    icon: Building2,
  },
];

/* Hero cards "Before → With Enterprise Copilot" — short story-style. */

export const COPILOT_HERO_CARDS: { before: string; after: string }[] = [
  {
    before: "Reportes entre sistemas elaborados a mano",
    after: "Consolidación asistida con referencias a fuentes",
  },
  {
    before: "Conciliaciones entre fuentes desconectadas",
    after: "Cruce asistido bajo reglas explícitas",
  },
  {
    before: "Auditoría manual y correos perdidos",
    after: "Acciones, aprobaciones y fuentes registradas",
  },
];

/* 7 Enterprise Copilot Capabilities. */

export const COPILOT_EXACTLY: { text: string; icon: LucideIcon }[] = [
  {
    text: "Consultar varios sistemas —SAP, bases de datos, APIs y reportes— desde un solo lugar.",
    icon: Database,
  },
  {
    text: "Validar inconsistencias de datos entre fuentes mediante reglas de negocio explícitas.",
    icon: AlertTriangle,
  },
  {
    text: "Generar reportes trazables con referencias a la fuente.",
    icon: FileBarChart,
  },
  {
    text: "Preparar borradores y resúmenes —correos, informes ejecutivos y planes de acción—.",
    icon: Layers,
  },
  {
    text: "Conectar SAP, bases de datos, APIs y reportes en una interfaz controlada.",
    icon: Network,
  },
  {
    text: "Solicitar aprobación antes de acciones sensibles; nunca ejecutar sin validación.",
    icon: ShieldCheck,
  },
  {
    text: "Mantener un rastro de auditoría de cada paso relevante —usuario, fuente, acción y momento—.",
    icon: GitBranch,
  },
];
