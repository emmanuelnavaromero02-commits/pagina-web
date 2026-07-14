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
    title: "Reunir contexto operativo",
    description:
      "Organiza información autorizada que hoy está repartida entre sistemas, archivos y equipos.",
    icon: Database,
  },
  {
    title: "Explicar con evidencia",
    description:
      "Presenta respuestas y hallazgos con el contexto necesario para revisarlos y verificarlos.",
    icon: FileBarChart,
  },
  {
    title: "Señalar diferencias y riesgos",
    description:
      "Destaca cambios, inconsistencias y pendientes que requieren atención de una persona responsable.",
    icon: AlertTriangle,
  },
  {
    title: "Preparar reportes para revisión",
    description:
      "Deja listos resúmenes e informes verificables para que el equipo los revise y complete.",
    icon: BarChart3,
  },
  {
    title: "Organizar opciones",
    description:
      "Ordena alternativas y criterios para comparar el siguiente paso antes de decidir.",
    icon: Cable,
  },
  {
    title: "Preparar acciones controladas",
    description:
      "Prepara acciones y seguimientos sujetos a permisos, revisión humana y trazabilidad.",
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
      "Cada usuario accede únicamente a la información autorizada para su función y el alcance acordado.",
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
    title: "Alcance controlado",
    description:
      "Cada piloto delimita la información autorizada, las personas responsables y las acciones sujetas a aprobación.",
    icon: ServerCog,
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
    text: "Reunir el contexto autorizado que hoy está repartido entre sistemas, archivos y equipos.",
    icon: Database,
  },
  {
    text: "Señalar diferencias, cambios, riesgos y pendientes que requieren revisión.",
    icon: AlertTriangle,
  },
  {
    text: "Presentar respuestas, reportes y hallazgos con evidencia verificable.",
    icon: FileBarChart,
  },
  {
    text: "Preparar resúmenes, informes y seguimientos para revisión del equipo.",
    icon: Layers,
  },
  {
    text: "Organizar opciones y criterios para que la persona responsable pueda compararlos.",
    icon: Network,
  },
  {
    text: "Dejar listo el siguiente paso y solicitar aprobación antes de cualquier acción sensible.",
    icon: ShieldCheck,
  },
  {
    text: "Mantener vinculados la consulta, la decisión, la autorización y el resultado.",
    icon: GitBranch,
  },
];
