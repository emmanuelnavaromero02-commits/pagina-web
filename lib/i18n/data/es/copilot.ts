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
    title: "Conectar datos gobernados",
    description:
      "Integra información autorizada de SAP, CRM, bases de datos, APIs, archivos y fuentes públicas.",
    icon: Database,
  },
  {
    title: "Comprender con IA generativa",
    description:
      "Consulta conocimiento corporativo y explica hallazgos con citas, contexto y advertencias visibles.",
    icon: FileBarChart,
  },
  {
    title: "Detectar señales y anomalías",
    description:
      "Identifica cambios, inconsistencias, relaciones y pendientes que requieren atención.",
    icon: AlertTriangle,
  },
  {
    title: "Coordinar agentes especializados",
    description:
      "Asigna tareas a agentes de datos, finanzas, talento, riesgo y operaciones bajo un mismo contexto.",
    icon: Network,
  },
  {
    title: "Comparar escenarios",
    description:
      "Evalúa alternativas con simulación, sensibilidad y confianza calibrada cuando el caso lo requiere.",
    icon: BarChart3,
  },
  {
    title: "Preparar acciones controladas",
    description:
      "Prepara acciones sujetas a permisos, evidencia congelada, aprobación humana y auditoría.",
    icon: ShieldCheck,
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
    title: "Permisos por rol",
    description:
      "Cada usuario accede únicamente a la información autorizada para su función y el alcance acordado.",
    icon: Lock,
  },
  {
    title: "Aislamiento organizacional",
    description:
      "Datos, credenciales, agentes y ejecuciones permanecen limitados al espacio de trabajo autorizado.",
    icon: ServerCog,
  },
  {
    title: "Validar antes de ejecutar",
    description:
      "Las acciones sensibles se confirman antes de ejecutarse en los sistemas reales.",
    icon: ShieldCheck,
  },
  {
    title: "Evidencia y trazabilidad",
    description:
      "Cada hallazgo conserva fuentes, vigencia, alcance y contexto para revisión y auditoría.",
    icon: GitBranch,
  },
  {
    title: "Separación de responsabilidades",
    description:
      "Quien propone una acción no puede aprobarla cuando el proceso exige una segunda revisión.",
    icon: AlertTriangle,
  },
  {
    title: "Resultado auditable",
    description:
      "Las decisiones, aprobaciones, intentos y resultados quedan registrados para seguimiento y recuperación.",
    icon: FileBarChart,
  },
];

/* Qualitative workflow scenarios used by /copilot. */

export const COPILOT_IMPACT_STATS: { label: string; value: string }[] = [
  { label: "Flujo", value: "Consultas asistidas" },
  { label: "Hojas de cálculo", value: "Entradas controladas" },
  { label: "Auditoría", value: "Evidencia conectada" },
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
    withCopilot: "Consolidación asistida con evidencia conectada",
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
    withCopilot: "Evidencia organizada y preparada para revisión",
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
    withCopilot: "Señales conectadas y preparadas para el análisis",
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
      "Cierres, conciliaciones y variaciones con evidencia conectada y controles de validación.",
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

/* Hero cards "Before → With Agentes de Decisión IA" — short story-style. */

export const COPILOT_HERO_CARDS: { before: string; after: string }[] = [
  {
    before: "Reportes entre sistemas elaborados a mano",
    after: "Consolidación asistida con evidencia conectada",
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

/* 7 Agentes de Decisión IA Capabilities. */

export const COPILOT_EXACTLY: { text: string; icon: LucideIcon }[] = [
  {
    text: "Conectar fuentes empresariales, públicas y archivos bajo un contexto autorizado.",
    icon: Database,
  },
  {
    text: "Publicar datos confiables con origen, calidad, vigencia y trazabilidad visibles.",
    icon: Layers,
  },
  {
    text: "Coordinar agentes especializados con herramientas, memoria y tareas programadas.",
    icon: Network,
  },
  {
    text: "Generar respuestas y análisis sobre conocimiento corporativo con evidencia verificable.",
    icon: FileBarChart,
  },
  {
    text: "Detectar anomalías, relaciones, riesgos y pendientes sin fabricar certeza.",
    icon: AlertTriangle,
  },
  {
    text: "Explorar escenarios dinámicos y observar cómo cambia la decisión al modificar sus condiciones.",
    icon: BarChart3,
  },
  {
    text: "Preparar acciones con vista previa, aprobación, ejecución controlada y registro del resultado.",
    icon: ShieldCheck,
  },
];
