import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bot,
  Boxes,
  Brain,
  Building2,
  Cable,
  Cloud,
  Code2,
  Database,
  FileBarChart,
  GitBranch,
  Layers,
  LineChart,
  Lock,
  Network,
  Plug,
  Server,
  ShieldCheck,
  Sparkles,
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
      "Construimos software empresarial que conecta operación, datos y decisiones. Equipos dedicados, contratos de servicio claros y entregables medibles.",
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
      "Integramos SAP On-Premise, SAP Cloud y SAP BTP con el resto del ecosistema corporativo usando ABAP, RFC, IDocs, Boomi, HCI y PI.",
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
      "Diseñamos plataformas cloud sobre AWS, Azure y GCP con bases de datos empresariales, pipelines y reporting que se pueden auditar.",
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
      "Implantamos IA generativa, machine learning y automatización inteligente con foco en casos de uso operativos, no demos vacías.",
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

export const COPILOT_CONNECTIONS: { title: string; icon: LucideIcon }[] = [
  { title: "SAP On-Premise / Cloud / BTP", icon: Boxes },
  { title: "Bases de datos empresariales", icon: Database },
  { title: "APIs internas", icon: Network },
  { title: "Plataformas cloud", icon: Cloud },
  { title: "Reportes y BI", icon: LineChart },
  { title: "Sistemas legacy", icon: Server },
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
    icon: Server,
  },
];

export const TECH_STACK: { group: string; items: string[] }[] = [
  {
    group: "SAP",
    items: ["SAP On-Premise", "SAP Cloud", "SAP BTP", "ABAP", "RFC", "IDocs"],
  },
  {
    group: "Integraciones",
    items: ["Boomi", "HCI", "PI / PO", "REST", "SOAP", "Event-driven"],
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
}[] = [
  {
    id: "hr",
    title: "Recursos Humanos",
    description:
      "Consultas de plantilla, organigrama, vacaciones y validación de datos maestros con trazabilidad.",
    icon: Building2,
    bullets: [
      "Reportes de headcount",
      "Consultas asistidas a SuccessFactors / SAP HCM",
      "Validación de datos maestros",
    ],
  },
  {
    id: "finance",
    title: "Finanzas",
    description:
      "Soporte a cierres, conciliaciones, validación de partidas y explicación clara de variaciones.",
    icon: BarChart3,
    bullets: [
      "Apoyo a cierres mensuales",
      "Conciliaciones automáticas",
      "Explicación de variaciones",
    ],
  },
  {
    id: "operations",
    title: "Operaciones",
    description:
      "Asistencia operativa con consultas en tiempo real sobre estados, pedidos y procesos críticos.",
    icon: Workflow,
    bullets: [
      "Estado de procesos en vivo",
      "Consultas a sistemas internos",
      "Soporte funcional asistido",
    ],
  },
  {
    id: "reporting",
    title: "Reporting ejecutivo",
    description:
      "Respuestas confiables para dirección con trazabilidad al dato original y validación previa.",
    icon: LineChart,
    bullets: [
      "Tableros vivos",
      "Respuestas con fuente",
      "Validaciones automáticas",
    ],
  },
  {
    id: "sap",
    title: "Integraciones SAP",
    description:
      "Conectividad estable entre SAP y terceros mediante ABAP, RFC, IDocs, Boomi, HCI y PI.",
    icon: Plug,
    bullets: [
      "Conectividad SAP ↔ terceros",
      "Monitoreo de interfaces",
      "Soporte evolutivo",
    ],
  },
  {
    id: "automation",
    title: "Automatización de procesos",
    description:
      "Reducimos tareas manuales y repetitivas en cierres, conciliaciones y reportes recurrentes.",
    icon: Wand2,
    bullets: [
      "Automatización asistida",
      "Reducción de errores",
      "Procesos auditables",
    ],
  },
  {
    id: "support",
    title: "Soporte y mantenimiento",
    description:
      "Continuidad de plataformas críticas con SLA claros, monitoreo y mejora continua.",
    icon: Activity,
    bullets: [
      "Soporte L1/L2/L3",
      "Monitoreo proactivo",
      "Evolutivos planificados",
    ],
  },
  {
    id: "governance",
    title: "Gobierno de datos",
    description:
      "Consistencia y trazabilidad de la información crítica entre sistemas y reportes.",
    icon: Layers,
    bullets: [
      "Diccionario común",
      "Reglas de calidad",
      "Trazabilidad punta a punta",
    ],
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
      "Experiencia entregando proyectos para corporativos en retail, energía, telecomunicaciones, manufactura, banca y sector público.",
    icon: Building2,
  },
  {
    title: "Equipos SAP de extremo a extremo",
    description:
      "Implementaciones, evolutivos y soporte sobre SAP On-Premise, SAP Cloud y SAP BTP con foco en integraciones.",
    icon: Boxes,
  },
  {
    title: "Fábricas de software internas",
    description:
      "Modelos de fábrica de software para clientes con backlog continuo, equipos dedicados y entregables medibles.",
    icon: Code2,
  },
  {
    title: "IA aplicada a operación",
    description:
      "Casos reales de IA generativa, ML y automatización aplicados a procesos de RRHH, finanzas y operaciones.",
    icon: Sparkles,
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
        bullets: [
          "Soporte L2/L3",
          "Backlog evolutivo",
          "Roadmap trimestral",
        ],
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
        bullets: [
          "SuccessFactors",
          "Ariba",
          "IBP y otras soluciones cloud",
        ],
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
        bullets: ["Ingesta confiable", "Transformaciones versionadas", "Calidad y alertas"],
      },
      {
        id: "reporting",
        title: "Reporting empresarial",
        description:
          "BI y reportes ejecutivos con trazabilidad al dato original, no dashboards bonitos sin sustento.",
        bullets: ["Tableros vivos", "Reportes auditables", "Capa semántica común"],
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
        bullets: ["Soporte interno", "Onboarding asistido", "Búsqueda inteligente"],
      },
      {
        id: "copilots",
        title: "Copilotos operativos",
        description:
          "La capa IA conectada a SAP, datos y procesos. Nuestro producto estrella: Copiloto Empresarial.",
        bullets: ["Producto Copiloto Empresarial", "Conectividad SAP", "Operación trazable"],
      },
    ],
  },
};

export const HOME_USE_CASES: { title: string; icon: LucideIcon }[] = [
  { title: "RRHH", icon: Building2 },
  { title: "Finanzas", icon: BarChart3 },
  { title: "Operaciones", icon: Workflow },
  { title: "Reporting ejecutivo", icon: LineChart },
  { title: "Integraciones", icon: Plug },
  { title: "Automatización", icon: Wand2 },
];

export const COPILOT_FLOW_STEPS: {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    step: "01",
    title: "Pregunta operativa",
    description:
      "Un usuario autorizado plantea una pregunta o solicita un reporte desde la interfaz del copiloto.",
    icon: Bot,
  },
  {
    step: "02",
    title: "Resolución contextual",
    description:
      "El copiloto consulta SAP, bases de datos, APIs y reportes según los permisos del usuario.",
    icon: Network,
  },
  {
    step: "03",
    title: "Validación y respuesta",
    description:
      "Se validan reglas e inconsistencias y se entrega una respuesta clara, trazable al dato original.",
    icon: ShieldCheck,
  },
  {
    step: "04",
    title: "Acción opcional",
    description:
      "Si aplica, ejecuta una acción autorizada (reporte, exportación o flujo) con registro completo.",
    icon: Workflow,
  },
];
