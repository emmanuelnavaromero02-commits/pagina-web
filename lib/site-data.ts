import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bot,
  Boxes,
  Brain,
  Building2,
  Cable,
  CalendarClock,
  CheckCircle2,
  Cloud,
  Code2,
  Compass,
  Database,
  FileBarChart,
  GitBranch,
  Headphones,
  Layers,
  LineChart,
  Lock,
  Network,
  Plug,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wand2,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type ServiceCard = {
  slug:
    | "software-factory"
    | "sap-integrations"
    | "cloud-data"
    | "enterprise-ai";
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
  href: string;
};

export const SERVICES: ServiceCard[] = [
  {
    slug: "software-factory",
    title: "Fábrica de Software",
    short: "Ingeniería empresarial dedicada.",
    description:
      "Equipos senior dedicados que construyen plataformas internas, portales y aplicaciones a medida con responsabilidad sobre el resultado, no solo sobre las tareas.",
    icon: Code2,
    bullets: [
      "Desarrollo a la medida",
      "Portales empresariales",
      "Aplicaciones internas",
      "APIs y microservicios",
      "Soporte evolutivo",
    ],
    href: "/services/software-factory",
  },
  {
    slug: "sap-integrations",
    title: "SAP & Integraciones",
    short: "Experiencia profunda en SAP.",
    description:
      "Integramos SAP On-Premise, SAP Cloud y SAP BTP con el resto del ecosistema corporativo usando ABAP, RFC, IDocs, Boomi, HCI y PI. Sin romper lo que ya funciona.",
    icon: Plug,
    bullets: [
      "SAP On-Premise",
      "SAP Cloud y BTP",
      "ABAP / RFC / IDocs",
      "Boomi / HCI / PI",
      "Integraciones con terceros",
    ],
    href: "/services/sap-integrations",
  },
  {
    slug: "cloud-data",
    title: "Cloud & Data",
    short: "Plataformas de datos confiables.",
    description:
      "Diseñamos plataformas cloud sobre AWS, Azure y GCP con bases de datos empresariales, pipelines auditables y reporting que aguanta auditoría.",
    icon: Cloud,
    bullets: [
      "AWS, Azure, GCP",
      "Bases de datos empresariales",
      "Data pipelines",
      "Reporting ejecutivo",
      "Arquitectura segura",
    ],
    href: "/services/cloud-data",
  },
  {
    slug: "enterprise-ai",
    title: "IA Empresarial",
    short: "IA conectada a procesos reales.",
    description:
      "Implantamos IA generativa, machine learning y automatización inteligente con foco en casos de uso operativos, conectada a datos propios y reglas de negocio.",
    icon: Brain,
    bullets: [
      "IA generativa con contexto propio",
      "Modelos de ML productivos",
      "Automatización inteligente",
      "Asistentes internos",
      "Copilotos operativos",
    ],
    href: "/services/enterprise-ai",
  },
];

/* ----------------------------------------------------------------
 * HOME — Bloque "Qué hacemos"
 * ---------------------------------------------------------------- */

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
      "Plataformas internas, portales y aplicaciones a medida con equipos dedicados que responden por el resultado.",
    icon: Code2,
    bullets: [
      "Aplicaciones críticas a medida",
      "Portales internos y de proveedores",
      "APIs y microservicios versionados",
    ],
  },
  {
    verb: "Conectamos",
    title: "Sistemas que no se hablan",
    description:
      "Integraciones reales sobre SAP, cloud, APIs y bases de datos. Sin parches frágiles ni Excel como capa de integración.",
    icon: Plug,
    bullets: [
      "SAP On-Premise, Cloud y BTP",
      "Middleware Boomi / HCI / PI",
      "APIs internas y de terceros",
    ],
  },
  {
    verb: "Automatizamos",
    title: "Operación con IA aplicada",
    description:
      "Copilotos, asistentes y modelos productivos sobre datos propios y reglas de negocio. IA conectada, no demos vacías.",
    icon: Sparkles,
    bullets: [
      "Copiloto Empresarial",
      "Asistentes internos sobre datos propios",
      "ML productivo con MLOps",
    ],
  },
];

/* ----------------------------------------------------------------
 * HOME — Operating model "Cómo trabajamos"
 * ---------------------------------------------------------------- */

export const OPERATING_MODEL: {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    step: "01",
    title: "Diagnóstico breve",
    description:
      "Una conversación corta y un walkthrough técnico para entender el contexto real, no solo la pregunta inicial.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Equipo dedicado",
    description:
      "Roles senior asignados al proyecto con responsabilidad sobre el resultado, no solo sobre las tareas.",
    icon: Users,
  },
  {
    step: "03",
    title: "Sprints visibles",
    description:
      "Avance por iteraciones cortas con demos reales, no slides. Cada sprint deja algo medible.",
    icon: CalendarClock,
  },
  {
    step: "04",
    title: "Soporte continuo",
    description:
      "El software no se entrega y se olvida. Lo mantenemos, lo evolucionamos y respondemos por su operación.",
    icon: Headphones,
  },
];

/* ----------------------------------------------------------------
 * COPILOTO EMPRESARIAL
 * ---------------------------------------------------------------- */

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
  "No reemplaza tus sistemas ni la responsabilidad del equipo.",
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
    title: "Mejor soporte a operación",
    description:
      "Los equipos operativos resuelven más sin necesidad de aumentar headcount.",
    icon: Headphones,
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

/* ----------------------------------------------------------------
 * STACK Y EXPERIENCIA
 * ---------------------------------------------------------------- */

export const TECH_STACK: { group: string; items: string[] }[] = [
  {
    group: "SAP",
    items: ["SAP On-Premise", "SAP Cloud", "SAP BTP", "ABAP", "RFC", "IDocs"],
  },
  {
    group: "Integraciones",
    items: ["Boomi", "HCI / CPI", "PI / PO", "REST", "SOAP", "Event-driven"],
  },
  {
    group: "Cloud",
    items: ["AWS", "Azure", "GCP", "Lambda", "API Gateway", "S3 + CloudFront"],
  },
  {
    group: "Lenguajes",
    items: ["Java", ".NET", "TypeScript", "Python", "ABAP", "SQL"],
  },
  {
    group: "Datos",
    items: [
      "Oracle",
      "SQL Server",
      "PostgreSQL",
      "SAP HANA",
      "Snowflake",
      "BigQuery",
    ],
  },
  {
    group: "IA",
    items: [
      "LLMs corporativos",
      "RAG sobre datos propios",
      "Machine learning",
      "Automatización asistida",
    ],
  },
];

export const INDUSTRY_AREAS: {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
  cta?: string;
}[] = [
  {
    id: "hr",
    title: "Recursos Humanos",
    description:
      "Consultas de plantilla y organigrama, ausencias, validación de datos maestros y reportes con trazabilidad.",
    icon: Building2,
    bullets: [
      "Reportes de headcount por unidad y centro",
      "Consultas a SuccessFactors / SAP HCM",
      "Seguimiento de ausencias y vacaciones",
      "Validación de datos maestros de empleados",
    ],
    cta: "Hablar sobre este caso",
  },
  {
    id: "finance",
    title: "Finanzas",
    description:
      "Apoyo a cierres, conciliaciones, explicación de variaciones y validación de reportes antes de publicar.",
    icon: BarChart3,
    bullets: [
      "Cierres mensuales asistidos",
      "Conciliaciones SAP FI ↔ bancos",
      "Explicación de variaciones",
      "Validación de partidas y reportes",
    ],
    cta: "Hablar sobre este caso",
  },
  {
    id: "operations",
    title: "Operaciones",
    description:
      "Asistencia operativa con consultas en tiempo real sobre estados, seguimiento y alertas tempranas.",
    icon: Workflow,
    bullets: [
      "Estado de procesos en vivo",
      "Seguimiento de pedidos y órdenes",
      "Alertas por reglas de negocio",
      "Soporte funcional asistido",
    ],
    cta: "Hablar sobre este caso",
  },
  {
    id: "reporting",
    title: "Reporting ejecutivo",
    description:
      "Dashboards, reportes ejecutivos y respuestas con trazabilidad al dato original para dirección.",
    icon: LineChart,
    bullets: [
      "Dashboards vivos",
      "Reportes ejecutivos auditables",
      "Trazabilidad al dato fuente",
      "Capa semántica común",
    ],
    cta: "Hablar sobre este caso",
  },
  {
    id: "support",
    title: "Soporte interno",
    description:
      "Helpdesk técnico/funcional asistido, búsqueda inteligente sobre documentación y escalamiento estructurado.",
    icon: Headphones,
    bullets: [
      "Helpdesk técnico y funcional asistido",
      "Búsqueda sobre documentación interna",
      "Escalamiento estructurado",
      "Atención de primera línea",
    ],
    cta: "Hablar sobre este caso",
  },
  {
    id: "sap",
    title: "Integraciones SAP",
    description:
      "Conectividad estable entre SAP y terceros mediante ABAP, RFC, IDocs, Boomi, HCI y PI con monitoreo.",
    icon: Plug,
    bullets: [
      "Conectividad SAP ↔ terceros",
      "Monitoreo de interfaces e IDocs",
      "Soporte evolutivo de integraciones",
      "Pruebas de regresión",
    ],
    cta: "Revisar integración SAP",
  },
  {
    id: "automation",
    title: "Automatización de procesos",
    description:
      "Reducimos tareas manuales y repetitivas en cierres, conciliaciones y reportes recurrentes.",
    icon: Wand2,
    bullets: [
      "Automatización asistida con IA",
      "Reducción de errores manuales",
      "Procesos auditables",
      "Human-in-the-loop",
    ],
    cta: "Hablar sobre este caso",
  },
  {
    id: "governance",
    title: "Gobierno de datos",
    description:
      "Consistencia y trazabilidad de la información crítica entre sistemas, reportes y fuentes de verdad.",
    icon: Layers,
    bullets: [
      "Diccionario común de datos",
      "Reglas de calidad",
      "Trazabilidad punta a punta",
      "Reconciliación entre fuentes",
    ],
    cta: "Hablar sobre este caso",
  },
];

export const EXPERIENCE_HIGHLIGHTS: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Clientes empresariales grandes",
    description:
      "Hemos entregado proyectos para corporativos en retail, energía, telecomunicaciones, manufactura, banca, bebidas, construcción y sector público.",
    icon: Building2,
  },
  {
    title: "Equipos SAP de extremo a extremo",
    description:
      "Implementaciones, evolutivos y soporte sobre SAP On-Premise, SAP Cloud y SAP BTP, con foco en integraciones y operación.",
    icon: Boxes,
  },
  {
    title: "Fábricas de software internas",
    description:
      "Modelos de fábrica de software para clientes con backlog continuo, equipos dedicados y entregables medibles por sprint.",
    icon: Code2,
  },
  {
    title: "IA aplicada a operación",
    description:
      "Casos reales de IA generativa, ML y automatización aplicados a procesos de RRHH, finanzas, reporting y operación.",
    icon: Sparkles,
  },
];

export const EXPERIENCE_ROLES: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Dirección técnica",
    description:
      "Liderazgo de arquitectura, integraciones y operación en programas SAP y cloud de gran escala.",
    icon: Compass,
  },
  {
    title: "Preventa enterprise",
    description:
      "Definición de alcance, arquitectura y modelo de entrega para propuestas a clientes corporativos.",
    icon: Target,
  },
  {
    title: "Gestión de equipos",
    description:
      "Conducción de fábricas de software y squads especializados en SAP, cloud, datos e IA.",
    icon: Users,
  },
  {
    title: "Implementaciones SAP",
    description:
      "Proyectos sobre ECC, S/4HANA, BTP, SuccessFactors, Ariba e IBP con foco en integración y operación.",
    icon: Boxes,
  },
  {
    title: "Integraciones empresariales",
    description:
      "Boomi, HCI/CPI, PI/PO, REST y eventos para conectar SAP con bancos, CRM, e-commerce y legacy.",
    icon: Plug,
  },
  {
    title: "Desarrollo a la medida",
    description:
      "Portales internos, aplicaciones críticas y APIs reutilizables sobre Java, .NET, Node y TypeScript.",
    icon: Code2,
  },
  {
    title: "IA aplicada",
    description:
      "Asistentes internos, RAG sobre datos propios y copilotos operativos con foco en trazabilidad.",
    icon: Brain,
  },
  {
    title: "Operación y soporte",
    description:
      "Continuidad de plataformas críticas con SLA, monitoreo y planes de evolución trimestrales.",
    icon: Headphones,
  },
];

export const EXPERIENCE_CLIENTS: string[] = [
  "Retail",
  "Manufactura",
  "Energía",
  "Telecomunicaciones",
  "Banca",
  "Bebidas y consumo",
  "Construcción",
  "Sector público",
];

/* ----------------------------------------------------------------
 * SERVICIOS — Detalle, problemas y cuándo aplica
 * ---------------------------------------------------------------- */

export const SERVICE_DETAILS: Record<
  ServiceCard["slug"],
  {
    eyebrow: string;
    title: string;
    intro: string;
    icon: LucideIcon;
    sections: {
      id: string;
      title: string;
      description: string;
      bullets?: string[];
    }[];
  }
> = {
  "software-factory": {
    eyebrow: "Servicio",
    title: "Fábrica de Software",
    intro:
      "Construimos software empresarial que conecta operación, datos y decisiones. Equipos dedicados con responsabilidad sobre el resultado, no solo sobre las tareas.",
    icon: Code2,
    sections: [
      {
        id: "custom",
        title: "Desarrollo a la medida",
        description:
          "Plataformas internas, herramientas funcionales y aplicaciones a medida con foco en mantenibilidad y costo total de propiedad.",
        bullets: [
          "Arquitectura clara y documentada",
          "Equipos full-stack y especializados",
          "Entregables medibles por sprint",
        ],
      },
      {
        id: "portals",
        title: "Portales empresariales",
        description:
          "Front-ends corporativos modernos para empleados, proveedores y clientes internos con SSO y permisos.",
        bullets: [
          "Diseño y UX consistentes",
          "Integración con identidad corporativa",
          "Despliegues seguros y escalables",
        ],
      },
      {
        id: "apps",
        title: "Aplicaciones internas",
        description:
          "Herramientas para equipos de operación, finanzas y RRHH que reducen el uso de Excel como base de datos.",
        bullets: [
          "Flujos asistidos",
          "Validaciones automáticas",
          "Reportes operativos integrados",
        ],
      },
      {
        id: "apis",
        title: "APIs y microservicios",
        description:
          "Servicios reutilizables con contratos claros, versionado, observabilidad y seguridad por defecto.",
        bullets: [
          "Diseño API-first",
          "Documentación viva",
          "Observabilidad de extremo a extremo",
        ],
      },
      {
        id: "support",
        title: "Soporte evolutivo",
        description:
          "Continuidad y mejora continua de plataformas críticas con SLA, métricas y planes de evolución.",
        bullets: ["Soporte L2/L3", "Backlog evolutivo", "Roadmap trimestral"],
      },
    ],
  },
  "sap-integrations": {
    eyebrow: "Servicio",
    title: "SAP & Integraciones",
    intro:
      "Integramos SAP con el resto del ecosistema corporativo. Conocemos los matices de SAP On-Premise, SAP Cloud y SAP BTP, y sabemos dónde no romper.",
    icon: Plug,
    sections: [
      {
        id: "onprem",
        title: "SAP On-Premise",
        description:
          "Trabajo sobre ECC, S/4HANA y módulos clave. Desarrollo, evolutivos y soporte funcional/técnico.",
        bullets: ["ECC y S/4HANA", "Módulos FI / MM / SD / HR", "Soporte ABAP"],
      },
      {
        id: "cloud",
        title: "SAP Cloud",
        description:
          "Integración con soluciones cloud de SAP como SuccessFactors, Ariba e IBP, conectándolas al resto de la operación.",
        bullets: ["SuccessFactors", "Ariba", "IBP y otras soluciones cloud"],
      },
      {
        id: "btp",
        title: "SAP BTP",
        description:
          "Extensiones, CAP, Workflow y Build sobre la plataforma BTP para llevar SAP más allá del core.",
        bullets: ["CAP (Node / Java)", "Workflow", "Build / Apps"],
      },
      {
        id: "abap",
        title: "ABAP / RFC / IDocs",
        description:
          "Desarrollo en ABAP, integraciones por RFC e IDocs, mejoras de performance y monitoreo.",
        bullets: ["Reports y módulos", "BAPIs y RFCs", "IDocs y monitor"],
      },
      {
        id: "middleware",
        title: "Boomi / HCI / PI",
        description:
          "Middleware empresarial para conectar SAP con terceros sin generar deuda técnica.",
        bullets: ["Boomi", "SAP HCI / CPI", "SAP PI / PO"],
      },
      {
        id: "third-party",
        title: "Integraciones con terceros",
        description:
          "Conectividad con CRMs, e-commerce, bancos, plataformas de RRHH y aplicaciones legadas.",
        bullets: ["REST / SOAP", "Eventos", "ETL controlado"],
      },
    ],
  },
  "cloud-data": {
    eyebrow: "Servicio",
    title: "Cloud & Data",
    intro:
      "Plataformas cloud y de datos que aguantan auditoría: arquitectura clara, seguridad por defecto y reporting confiable.",
    icon: Cloud,
    sections: [
      {
        id: "aws",
        title: "AWS",
        description:
          "Arquitectura, migración y operación sobre AWS con foco en costo, seguridad y observabilidad.",
        bullets: ["Lambda + API Gateway", "S3 + CloudFront", "RDS / DynamoDB"],
      },
      {
        id: "azure",
        title: "Azure",
        description:
          "Plataformas corporativas sobre Azure con integración a Entra ID y servicios de datos.",
        bullets: ["App Service / Functions", "Azure SQL", "Synapse / Data Lake"],
      },
      {
        id: "gcp",
        title: "GCP",
        description:
          "Soluciones de datos, analítica e infraestructura en Google Cloud con BigQuery como núcleo.",
        bullets: ["BigQuery", "Cloud Run", "Pub/Sub"],
      },
      {
        id: "databases",
        title: "Bases de datos",
        description:
          "Trabajo con bases de datos empresariales con foco en performance, modelo y consistencia.",
        bullets: ["Oracle / SQL Server", "PostgreSQL", "SAP HANA"],
      },
      {
        id: "pipelines",
        title: "Data pipelines",
        description:
          "Ingesta, transformación y calidad de datos auditable y reproducible.",
        bullets: [
          "Ingesta confiable",
          "Transformaciones versionadas",
          "Calidad y alertas",
        ],
      },
      {
        id: "reporting",
        title: "Reporting empresarial",
        description:
          "BI y reportes ejecutivos con trazabilidad al dato original, no dashboards bonitos sin sustento.",
        bullets: [
          "Tableros vivos",
          "Reportes auditables",
          "Capa semántica común",
        ],
      },
    ],
  },
  "enterprise-ai": {
    eyebrow: "Servicio",
    title: "IA Empresarial",
    intro:
      "IA aplicada a procesos reales: copilotos, asistentes internos y automatización inteligente que se conectan a tus sistemas, no demos vacías.",
    icon: Brain,
    sections: [
      {
        id: "genai",
        title: "IA generativa",
        description:
          "Soluciones con LLMs sobre datos propios, con RAG, controles de acceso y trazabilidad.",
        bullets: ["RAG corporativo", "LLMs en VPC", "Evaluación continua"],
      },
      {
        id: "ml",
        title: "Machine learning",
        description:
          "Modelos productivos para predicción, clasificación y detección de anomalías con foco en operación.",
        bullets: ["Modelos productivos", "MLOps", "Monitoreo de modelo"],
      },
      {
        id: "automation",
        title: "Automatización inteligente",
        description:
          "Procesos asistidos por IA donde el humano valida, no donde la IA decide a ciegas.",
        bullets: [
          "Validaciones asistidas",
          "Flujos human-in-the-loop",
          "Auditoría de decisiones",
        ],
      },
      {
        id: "assistants",
        title: "Asistentes internos",
        description:
          "Asistentes para equipos internos sobre documentación, normativas y datos propios.",
        bullets: [
          "Soporte interno",
          "Onboarding asistido",
          "Búsqueda inteligente",
        ],
      },
      {
        id: "copilots",
        title: "Copilotos operativos",
        description:
          "La capa IA conectada a SAP, datos y procesos. Nuestro producto estrella: Copiloto Empresarial.",
        bullets: [
          "Producto Copiloto Empresarial",
          "Conectividad SAP",
          "Operación trazable",
        ],
      },
    ],
  },
};

export const SERVICE_WHEN_TO_USE: Record<
  ServiceCard["slug"],
  { title: string; subtitle: string; items: string[] }
> = {
  "software-factory": {
    title: "Cuándo te conviene una fábrica de software",
    subtitle:
      "Si te identificas con alguno de estos puntos, una fábrica dedicada suele ser la respuesta correcta.",
    items: [
      "Tienes backlog acumulado y el equipo interno no da abasto.",
      "Procesos críticos dependen de archivos Excel mantenidos por una sola persona.",
      "Necesitas integrar sistemas que hoy no se hablan entre sí.",
      "Quieres velocidad sin perder control de la arquitectura.",
      "Un proyecto urgente necesita un equipo senior listo en dos semanas.",
      "Buscas continuidad: no solo entregar, también mantener y evolucionar.",
    ],
  },
  "sap-integrations": {
    title: "Problemas típicos que resolvemos",
    subtitle:
      "Patrones recurrentes en organizaciones con SAP en producción y muchos sistemas alrededor.",
    items: [
      "Interfaces frágiles que se caen con cualquier cambio.",
      "Datos duplicados entre SAP y sistemas terceros.",
      "Reportes manuales sobre datos que ya están en SAP.",
      "Sistemas críticos que no se hablan entre sí.",
      "Cambios en SAP que rompen integraciones aguas abajo.",
      "Falta de monitoreo de IDocs, jobs e interfaces.",
    ],
  },
  "cloud-data": {
    title: "De datos dispersos a reportes confiables",
    subtitle:
      "Patrones que nos toca atender cuando los datos están en muchos lados y nadie confía en el reporte final.",
    items: [
      "Información crítica repartida entre ERP, CRM, Excel y bases internas.",
      "Reportes que cada equipo arma a su manera, con cifras distintas.",
      "Pipelines manuales que se rompen y nadie se entera a tiempo.",
      "Costos cloud que crecen sin control ni gobierno.",
      "Falta de capa semántica común entre áreas.",
      "Reportes ejecutivos que no soportan una auditoría.",
    ],
  },
  "enterprise-ai": {
    title: "IA útil, no demos vacías",
    subtitle:
      "La IA solo aporta valor cuando se conecta a procesos reales, datos propios y reglas de negocio.",
    items: [
      "Asistentes conectados a datos corporativos, no a internet abierto.",
      "Casos de uso medibles, no laboratorios eternos sin entregable.",
      "Human-in-the-loop antes de cualquier acción sensible.",
      "Permisos del usuario respetados por la capa de IA.",
      "Trazabilidad de cada respuesta hasta el dato original.",
      "MLOps real: modelos en producción con monitoreo, no notebooks.",
    ],
  },
};

export const SERVICE_DELIVERABLES: Record<
  ServiceCard["slug"],
  { title: string; items: string[] }
> = {
  "software-factory": {
    title: "Qué entregamos",
    items: [
      "Equipos senior dedicados con responsable de cuenta.",
      "Arquitectura documentada y versionada.",
      "Sprints quincenales con demo y entregable.",
      "Pipeline CI/CD configurado desde el día uno.",
      "Plan de soporte y evolución posterior al go-live.",
    ],
  },
  "sap-integrations": {
    title: "Qué entregamos",
    items: [
      "Diagnóstico de integraciones críticas con riesgos.",
      "Re-arquitectura sin romper procesos productivos.",
      "Conectores y monitores reusables.",
      "Pruebas de regresión sobre interfaces clave.",
      "Tableros de salud técnica para operación.",
    ],
  },
  "cloud-data": {
    title: "Qué entregamos",
    items: [
      "Arquitectura cloud documentada (AWS / Azure / GCP).",
      "Pipelines de datos versionados con calidad medida.",
      "Capa semántica común para reporting.",
      "Tableros y reportes ejecutivos auditables.",
      "Modelo de costos y gobierno cloud explícito.",
    ],
  },
  "enterprise-ai": {
    title: "Qué entregamos",
    items: [
      "Casos de uso priorizados con impacto operativo.",
      "Asistentes y copilotos sobre datos propios.",
      "RAG corporativo con controles de acceso.",
      "Modelos ML productivos con monitoreo.",
      "Plan de evolución y nuevos casos de uso.",
    ],
  },
};

export const HOME_USE_CASES: { title: string; icon: LucideIcon; href: string }[] =
  [
    { title: "RRHH", icon: Building2, href: "/industries#hr" },
    { title: "Finanzas", icon: BarChart3, href: "/industries#finance" },
    { title: "Operaciones", icon: Workflow, href: "/industries#operations" },
    { title: "Reporting ejecutivo", icon: LineChart, href: "/industries#reporting" },
    { title: "Integraciones", icon: Plug, href: "/industries#sap" },
    { title: "Automatización", icon: Wand2, href: "/industries#automation" },
  ];

/* ----------------------------------------------------------------
 * CONTACT — Qué pasa después de contactarnos
 * ---------------------------------------------------------------- */

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
      "Leemos tu mensaje y agendamos una primera conversación corta para entender el caso real.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Identificamos qué necesitas",
    description:
      "Definimos si lo tuyo es fábrica de software, integración SAP, plataforma de datos, IA o una combinación.",
    icon: Target,
  },
  {
    step: "03",
    title: "Proponemos diagnóstico",
    description:
      "Te enviamos un diagnóstico inicial con riesgos, alcance estimado y siguientes pasos concretos.",
    icon: CheckCircle2,
  },
  {
    step: "04",
    title: "Definimos piloto o roadmap",
    description:
      "Si hay encaje, arrancamos con un piloto guiado o un roadmap por fases con entregables medibles.",
    icon: ArrowRight,
  },
];
