import {
  Activity,
  ArrowRight,
  BarChart3,
  Brain,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Compass,
  Database,
  DollarSign,
  FileBarChart,
  GitBranch,
  Layers,
  LineChart,
  Network,
  Plug,
  ShoppingCart,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  Users,
  Wand2,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* HOME — 7 Business Solution Areas */
export const QUICK_WINS: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Automatización",
    description:
      "Sustituimos tareas manuales repetitivas por flujos de trabajo específicos que pueden escalar.",
    icon: Wand2,
  },
  {
    title: "Reportes y control",
    description:
      "Reportes confiables con trazabilidad desde el KPI hasta el sistema de origen.",
    icon: BarChart3,
  },
  {
    title: "Finanzas y nómina",
    description:
      "Cierres, conciliaciones y procesos de nómina con controles explícitos de validación.",
    icon: LineChart,
  },
  {
    title: "Procesos basados en Excel",
    description:
      "Trasladamos las operaciones críticas de las hojas de cálculo a software que evoluciona.",
    icon: FileBarChart,
  },
  {
    title: "Apoyo a decisiones",
    description:
      "Vistas operativas actuales para la dirección con referencias a los datos de origen.",
    icon: Activity,
  },
  {
    title: "SAP e integración de sistemas",
    description:
      "Conectamos ECC, S/4HANA, BTP, APIs y middleware sin afectar lo que ya funciona.",
    icon: Plug,
  },
  {
    title: "IA operativa",
    description:
      "IA generativa, ML y Enterprise Copilot conectados a sistemas, reglas y permisos reales.",
    icon: Brain,
  },
];

/* HOME — The real business challenge */
export const BUSINESS_CHALLENGES: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Velocidad de respuesta",
    description:
      "Reducir las demoras creadas por búsquedas, traspasos y validaciones manuales.",
    icon: Zap,
  },
  {
    title: "Eficiencia",
    description:
      "Menos reprocesos manuales, menos tiempo de inactividad y menos fricción operativa.",
    icon: Activity,
  },
  {
    title: "Integración",
    description:
      "ERP, CRM, nube, APIs y sistemas heredados que funcionan como un solo ecosistema.",
    icon: Network,
  },
  {
    title: "Automatización",
    description:
      "Tareas repetitivas delegadas a flujos inteligentes con supervisión humana.",
    icon: Wand2,
  },
  {
    title: "Inteligencia operativa",
    description:
      "Datos convertidos en predicciones, alertas y decisiones; no solo en paneles.",
    icon: Brain,
  },
  {
    title: "Capacidad de ejecución",
    description:
      "Capacidad para entregar cambios de forma continua, no como proyectos aislados.",
    icon: Target,
  },
];

/* HOME — Strategic Process Analysis dimensions */
export const ANALYSIS_DIMENSIONS: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Operaciones",
    description: "Cómo fluye realmente el trabajo dentro de la empresa.",
    icon: Workflow,
  },
  {
    title: "Flujos de negocio",
    description: "Flujos de principio a fin entre equipos, sistemas y socios.",
    icon: GitBranch,
  },
  {
    title: "Productividad",
    description: "Resultados por hora, ciclo y función.",
    icon: Activity,
  },
  {
    title: "Costos",
    description: "Dónde se pierde o absorbe dinero sin visibilidad.",
    icon: DollarSign,
  },
  {
    title: "Tiempos de ciclo",
    description: "Cuánto tardan realmente los procesos clave.",
    icon: Timer,
  },
  {
    title: "Estructura organizativa",
    description: "Funciones, responsabilidades y traspasos operativos.",
    icon: Users,
  },
  {
    title: "Eficiencia",
    description: "Puntos de fricción y cuellos de botella en toda la operación.",
    icon: Layers,
  },
  {
    title: "Toma de decisiones",
    description: "Cómo la información se convierte en decisiones y acciones.",
    icon: Compass,
  },
];

/* HOME — The 7-Pillar Architecture */
export const SEVEN_PILLARS: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Visión estratégica",
    description:
      "Analizamos la estructura, los procesos, las operaciones, los costos, los tiempos de ciclo, la productividad y la toma de decisiones para identificar dónde pierde la empresa velocidad, eficiencia y dinero.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Integración empresarial",
    description:
      "Conectamos ERP, CRM, operaciones, APIs, nube, bases de datos, automatizaciones, sistemas heredados, equipos y flujos de trabajo para que la empresa funcione como un solo ecosistema operativo.",
    icon: Network,
  },
  {
    number: "03",
    title: "Datos gobernados",
    description:
      "Construimos bases de datos gobernadas con capas Bronze, Silver y Gold, seguridad, trazabilidad, capacidad de auditoría, cumplimiento y control operativo. Sin datos confiables no existe inteligencia real.",
    icon: Database,
  },
  {
    number: "04",
    title: "Automatización inteligente",
    description:
      "Diseñamos flujos asistidos orientados a reducir tareas manuales, tiempos de inactividad, reprocesos, dependencias operativas y fricción.",
    icon: Wand2,
  },
  {
    number: "05",
    title: "Inteligencia operativa",
    description:
      "Diseñamos formas de convertir la información en decisiones, predicciones, alertas, automatizaciones y acciones bajo controles explícitos.",
    icon: Brain,
  },
  {
    number: "06",
    title: "Evolución continua",
    description:
      "Planificamos la evolución del software mediante un backlog gobernado de agentes, módulos de conocimiento, modelos, flujos y capacidades de negocio.",
    icon: Activity,
  },
  {
    number: "07",
    title: "Transformación empresarial",
    description:
      "El objetivo no es solo implantar tecnología, sino definir un modelo operativo con información más clara, controles, automatización y objetivos medibles acordados por proyecto.",
    icon: Sparkles,
  },
];

/* HOME — Implementation model (kept for backward compat) */
export const IMPLEMENTATION_STEPS: {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    step: "01",
    title: "Diagnosticar el cuello de botella",
    description:
      "Una revisión breve para identificar el problema operativo que está costando tiempo, dinero o control.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Conectar las fuentes",
    description:
      "Conectamos las fuentes de datos y procesos necesarias para el caso de uso definido.",
    icon: Network,
  },
  {
    step: "03",
    title: "Automatizar o construir",
    description:
      "Entregamos una solución específica —automatización, integración, reporte o copiloto— sin detener la operación.",
    icon: Wand2,
  },
  {
    step: "04",
    title: "Medir y definir el siguiente paso",
    description:
      "Evaluamos los indicadores acordados, documentamos los hallazgos y definimos la siguiente mejora o plan de escalamiento.",
    icon: CheckCircle2,
  },
];

/* HOME — 7 Areas of Impact (business functions) */
export const AREAS_OF_IMPACT: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Finanzas",
    description:
      "Visibilidad del EBITDA, flujo de caja, márgenes, control financiero inteligente, conciliaciones y análisis de variaciones.",
    icon: BarChart3,
  },
  {
    title: "Ventas",
    description:
      "Inteligencia de ingresos, pronósticos, automatización comercial, análisis de clientes y visibilidad del pipeline.",
    icon: TrendingUp,
  },
  {
    title: "Operaciones",
    description:
      "Eficiencia operativa, optimización logística, control de inventarios, monitoreo de procesos y reducción de tiempos de ciclo.",
    icon: Workflow,
  },
  {
    title: "Compras",
    description:
      "Gestión del gasto, visibilidad de proveedores, control del abastecimiento, flujos de compras y ahorro operativo.",
    icon: ShoppingCart,
  },
  {
    title: "Dirección ejecutiva",
    description:
      "Inteligencia ejecutiva, monitoreo del estado actual, visibilidad estratégica, definiciones de KPI y apoyo a la toma de decisiones.",
    icon: LineChart,
  },
  {
    title: "RR. HH. / Nómina",
    description:
      "Plantilla, procesos de nómina, ausencias, estructura organizativa, datos maestros y validación entre sistemas.",
    icon: Users,
  },
  {
    title: "Gobierno de datos",
    description:
      "Diccionario, reglas de calidad, linaje, capas Bronze · Silver · Gold y evidencias listas para auditoría por dominio.",
    icon: Database,
  },
];

/* HOME — 7 Operational Outcomes */
export const OPERATIONAL_OUTCOMES: {
  title: string;
  description: string;
}[] = [
  {
    title: "Trabajo recurrente asistido",
    description:
      "Los reportes, las validaciones y las conciliaciones recurrentes pueden pasar a flujos asistidos controlados.",
  },
  {
    title: "Contexto para decisiones",
    description:
      "La dirección puede revisar una respuesta junto con su fuente autorizada.",
  },
  {
    title: "Validación antes del reporte",
    description:
      "Las reglas de negocio pueden señalar inconsistencias para revisión antes de publicar.",
  },
  {
    title: "Evidencia trazable",
    description:
      "Las consultas, fuentes, validaciones y acciones pertinentes pueden registrarse según el diseño acordado.",
  },
  {
    title: "Definiciones compartidas de KPI",
    description:
      "Una capa semántica gobernada puede alimentar los paneles y Enterprise Copilot con definiciones comunes.",
  },
  {
    title: "Flujos gobernados",
    description:
      "Los procesos seleccionados basados en hojas de cálculo pueden pasar a flujos de software controlados.",
  },
  {
    title: "Backlog de evolución",
    description:
      "Los nuevos flujos, fuentes y capacidades se priorizan mediante un backlog acordado.",
  },
];

/* HOME — 7 Enterprise Methods for Operational Execution */
export const METHODOLOGIES: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Operaciones Lean",
    description:
      "Eliminamos desperdicios, tiempos de inactividad y reprocesos para agilizar la operación.",
    icon: Activity,
  },
  {
    title: "Mejora continua",
    description:
      "Medimos, aprendemos y ajustamos de forma constante, no como un proyecto aislado.",
    icon: Workflow,
  },
  {
    title: "Optimización de procesos",
    description:
      "Rediseñamos procesos críticos en torno a evidencias, validación y trazabilidad.",
    icon: Wand2,
  },
  {
    title: "Inteligencia de negocio",
    description:
      "Paneles confiables, análisis de KPI y analítica ejecutiva sobre datos gobernados.",
    icon: BarChart3,
  },
  {
    title: "Operaciones integradas con SAP",
    description:
      "El núcleo SAP, BTP, ABAP, RFC, IDocs y middleware funcionan como un solo ecosistema.",
    icon: Plug,
  },
  {
    title: "Automatización de flujos operativos",
    description:
      "Flujos asistidos con supervisión humana, aprobaciones y registro de auditoría.",
    icon: Network,
  },
  {
    title: "Monitoreo y control del estado actual",
    description:
      "Vistas operativas actuales, alertas y control asistido por IA sobre procesos acordados.",
    icon: Compass,
  },
];

/* HOME — 7 Business Problems We Solve */
export const SEVEN_BUSINESS_PROBLEMS: {
  title: string;
  impact: string;
  whatWeDo: string;
}[] = [
  {
    title: "Reportes manuales lentos",
    impact:
      "Los equipos preparan reportes recurrentes de forma manual en lugar de analizar su contenido.",
    whatWeDo:
      "Conectamos fuentes, automatizamos los flujos de reporte y aportamos trazabilidad a los datos.",
  },
  {
    title: "Sistemas desconectados",
    impact:
      "ERP, CRM, nube, Excel y sistemas heredados operan por separado.",
    whatWeDo:
      "Los integramos en un solo ecosistema operativo con contratos versionados.",
  },
  {
    title: "Operaciones basadas en Excel",
    impact:
      "Los flujos críticos dependen de hojas de cálculo y de copiar y pegar manualmente.",
    whatWeDo:
      "Los convertimos en flujos gobernados, aplicaciones, APIs y reportes auditables.",
  },
  {
    title: "Decisiones tardías",
    impact:
      "La dirección espera los datos en lugar de actuar con ellos.",
    whatWeDo:
      "Organizamos flujos de reportes, analítica y Enterprise Copilot alrededor de fuentes autorizadas.",
  },
  {
    title: "Trazabilidad insuficiente",
    impact:
      "Las auditorías dependen de correos, capturas de pantalla y evidencias recopiladas manualmente.",
    whatWeDo:
      "Diseñamos flujos listos para auditoría con fuentes, registros, aprobaciones y permisos por función.",
  },
  {
    title: "Reprocesos operativos",
    impact:
      "Los equipos repiten las mismas validaciones y conciliaciones en cada ciclo.",
    whatWeDo:
      "Automatizamos comprobaciones, validaciones y procesos recurrentes con control humano.",
  },
  {
    title: "Control insuficiente del estado actual",
    impact:
      "Los responsables detectan los problemas después de que ocurren, cuando reaccionar resulta más costoso.",
    whatWeDo:
      "Creamos monitoreo, alertas, paneles y visibilidad operativa asistida por IA.",
  },
];

/* HOME — Ecosystem orchestration pills */
export const ECOSYSTEM_PILLS: string[] = [
  "ERP",
  "CRM",
  "Nube",
  "APIs",
  "Lagos de datos",
  "Excel",
  "Sistemas heredados",
  "Automatizaciones",
  "Inteligencia artificial",
  "Analítica avanzada",
];

/* HOME — Capability bridge from integration to product (kept for
   compatibility with the existing section). */
export const EXPERIENCE_BRIDGE: {
  step: string;
  title: string;
  description: string;
  badges: string[];
  icon: LucideIcon;
}[] = [
  {
    step: "01",
    title: "Integración empresarial",
    description:
      "Alcance de integración en núcleo SAP, ABAP, RFC, IDocs y middleware gobernado.",
    badges: ["SAP", "ABAP", "Boomi", "HCI/CPI", "PI/PO"],
    icon: Plug,
  },
  {
    step: "02",
    title: "Fábrica de software",
    description:
      "Un modelo de entrega para portales, aplicaciones y APIs con especialistas senior seleccionados.",
    badges: ["Java", ".NET", "TypeScript", "Microservices"],
    icon: Code2,
  },
  {
    step: "03",
    title: "Nube y datos",
    description:
      "Opciones de arquitectura en AWS, Azure, GCP y bases de datos empresariales con trazabilidad a la fuente.",
    badges: ["AWS", "Azure", "GCP", "SAP HANA"],
    icon: Cloud,
  },
  {
    step: "04",
    title: "IA aplicada",
    description:
      "RAG corporativo, ML gobernado y asistentes conectados a procesos y datos autorizados.",
    badges: ["GenAI", "ML", "MLOps", "RAG"],
    icon: Brain,
  },
];

/* HOME — preview of use cases (kept lightweight) */
export const HOME_USE_CASES: {
  title: string;
  icon: LucideIcon;
  href: string;
}[] = [
  { title: "RR. HH.", icon: Building2, href: "/industries/hr-payroll" },
  { title: "Finanzas", icon: BarChart3, href: "/industries/finance" },
  { title: "Operaciones", icon: Workflow, href: "/industries/operations" },
  {
    title: "Reportes ejecutivos",
    icon: LineChart,
    href: "/industries/executive-reporting",
  },
  { title: "Integraciones", icon: Plug, href: "/industries/sap-integrations" },
  { title: "Automatización", icon: Wand2, href: "/industries/process-automation" },
];

/* CONTACT — what happens next (4 tight steps per spec) */
export const CONTACT_AFTER_STEPS: {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    step: "01",
    title: "Revisamos tu contexto",
    description:
      "Leemos tu mensaje y coordinamos una breve conversación para entender el caso real.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Identificamos el cuello de botella",
    description:
      "Precisamos dónde está perdiendo la operación tiempo, dinero o control.",
    icon: Target,
  },
  {
    step: "03",
    title: "Definimos el alcance de una mejora rápida",
    description:
      "Acordamos un problema medible, las fuentes necesarias y el periodo de trabajo.",
    icon: CheckCircle2,
  },
  {
    step: "04",
    title: "Proponemos un piloto o una hoja de ruta",
    description:
      "Enviamos una propuesta de piloto concreta o una hoja de ruta por fases con entregables.",
    icon: ArrowRight,
  },
];

/* Re-export used as legacy helper for components that imported the
   old WHAT_WE_DO constant. */
export const WHAT_WE_DO: {
  verb: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
}[] = [
  {
    verb: "Construimos",
    title: "Software empresarial",
    description:
      "Plataformas internas, portales y aplicaciones a medida propuestas con especialistas senior seleccionados para el proyecto.",
    icon: Code2,
    bullets: [
      "Aplicaciones críticas",
      "Portales internos y de proveedores",
      "APIs y microservicios versionados",
    ],
  },
  {
    verb: "Conectamos",
    title: "Sistemas que no se comunican",
    description:
      "Integraciones gobernadas entre SAP, nube, APIs y bases de datos, con contratos explícitos y trazabilidad.",
    icon: Plug,
    bullets: [
      "SAP On-Premise, Cloud y BTP",
      "Middleware Boomi / HCI / PI",
      "APIs internas y de terceros",
    ],
  },
  {
    verb: "Automatizamos",
    title: "Operaciones con IA aplicada",
    description:
      "Copilotos, asistentes y patrones de ML gobernado basados en datos autorizados y reglas de negocio explícitas.",
    icon: Sparkles,
    bullets: [
      "Enterprise Copilot",
      "Asistentes internos sobre datos privados",
      "ML en producción con MLOps",
    ],
  },
];

/* Legacy export name preserved for backward compatibility. */
export const OPERATING_MODEL = IMPLEMENTATION_STEPS;
