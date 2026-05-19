import {
  Boxes,
  Brain,
  Cloud,
  Code2,
  Database,
  FileBarChart,
  GitBranch,
  Layers,
  LineChart,
  Network,
  Plug,
  Server,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Wand2,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type ServiceSlug =
  | "software-factory"
  | "sap-integrations"
  | "cloud-data"
  | "enterprise-ai";

export type ServiceCard = {
  slug: ServiceSlug;
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

/* ---------------------------------------------------------------- */
/* SERVICE_DETAILS – grid de áreas dentro de cada servicio          */
/* ---------------------------------------------------------------- */

export const SERVICE_DETAILS: Record<
  ServiceSlug,
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

/* ---------------------------------------------------------------- */
/* SERVICE_WHEN_TO_USE — cuándo te conviene cada servicio           */
/* ---------------------------------------------------------------- */

export const SERVICE_WHEN_TO_USE: Record<
  ServiceSlug,
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

/* ---------------------------------------------------------------- */
/* SERVICE_DELIVERABLES — qué entregamos                            */
/* ---------------------------------------------------------------- */

export const SERVICE_DELIVERABLES: Record<
  ServiceSlug,
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

/* ---------------------------------------------------------------- */
/* DeepDive — bloques con tabs para SAP / Cloud / Factory / IA      */
/* ---------------------------------------------------------------- */

export type DeepDiveBlock = {
  id: string;
  label: string; // tab/short label
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  badges: string[];
  icon: LucideIcon;
};

export const SAP_DEEP_DIVE: DeepDiveBlock[] = [
  {
    id: "core",
    label: "Core SAP",
    eyebrow: "Core SAP",
    title: "Procesos de FI, CO, SD, MM, HCM, PS y PM",
    description:
      "Trabajamos sobre procesos SAP de finanzas, controlling, ventas, materiales, mantenimiento, proyectos y recursos humanos, cuidando que las integraciones no rompan la operación del core.",
    bullets: [
      "Finanzas (FI) y Controlling (CO) en cierres y reportes.",
      "Ventas (SD), Materiales (MM) y Mantenimiento (PM) operativos.",
      "Proyectos (PS) y Recursos Humanos (HCM) con foco en datos maestros.",
      "Migración y soporte de ECC y S/4HANA con criterio funcional.",
    ],
    badges: ["ECC", "S/4HANA", "FI", "CO", "SD", "MM", "HCM", "PS", "PM"],
    icon: Boxes,
  },
  {
    id: "dev",
    label: "Desarrollo SAP",
    eyebrow: "Desarrollo SAP",
    title: "ABAP, reportes, formularios, ampliaciones y workflows",
    description:
      "Desarrollamos y evolucionamos objetos SAP como reportes, formularios, ampliaciones, conversiones, interfaces y workflows, con foco en mantenibilidad y continuidad operativa.",
    bullets: [
      "Reportes ABAP custom con criterios de performance.",
      "Formularios y outputs (SmartForms, Adobe).",
      "Ampliaciones (BAdIs, User Exits) sin tocar el core.",
      "Conversiones e interfaces controladas.",
      "Workflows SAP para procesos asistidos.",
    ],
    badges: [
      "ABAP",
      "ABAP/4",
      "Reportes",
      "Formularios",
      "Ampliaciones",
      "Conversiones",
      "SAP Workflows",
    ],
    icon: Code2,
  },
  {
    id: "tech",
    label: "Integración técnica",
    eyebrow: "Integración técnica SAP",
    title: "RFC, IDocs, BAPIs, SAP JCo, NetWeaver Gateway y APIs",
    description:
      "Conectamos SAP con aplicaciones internas y plataformas externas mediante RFC, IDocs, BAPIs, SAP JCo, Gateway, APIs REST/SOAP y contratos de integración claros.",
    bullets: [
      "Llamadas síncronas y asíncronas vía RFC y BAPIs.",
      "Mensajería IDoc con monitoreo y reproceso.",
      "Exposición de servicios SAP por NetWeaver Gateway.",
      "Conectores Java con SAP JCo 2 y 3 para aplicaciones internas.",
      "APIs REST/SOAP sobre SAP con contratos versionados.",
    ],
    badges: [
      "RFC",
      "IDocs",
      "BAPIs",
      "SAP JCo 2",
      "SAP JCo 3",
      "NetWeaver Gateway",
      "SAP Mobile Platform",
      "REST",
      "SOAP",
    ],
    icon: Network,
  },
  {
    id: "cloud-btp",
    label: "SAP Cloud y BTP",
    eyebrow: "SAP Cloud y BTP",
    title: "Extensiones SAP en la nube con gobierno y trazabilidad",
    description:
      "Extendemos SAP hacia la nube con SAP BTP, SAP Cloud, HCI/CPI y servicios de integración, manteniendo gobierno, seguridad y trazabilidad.",
    bullets: [
      "Extensiones SAP fuera del core sobre SAP BTP.",
      "Integraciones SAP cloud con HCI/CPI.",
      "Workflows BTP y desarrollos CAP en Node/Java.",
      "Aplicaciones Build / Apps integradas con identidad SAP.",
    ],
    badges: [
      "SAP BTP",
      "SAP Cloud",
      "HCI / CPI",
      "CAP",
      "Workflow",
      "Build / Apps",
    ],
    icon: Cloud,
  },
  {
    id: "ops",
    label: "Gobierno y operación",
    eyebrow: "Gobierno y operación SAP",
    title: "Solution Manager, ITSM, Change y Test Management",
    description:
      "También cubrimos la parte operativa: documentación de solución, gestión de cambios, pruebas, gestión de código custom, ITSM y continuidad del servicio.",
    bullets: [
      "Solution Documentation centralizada y mantenida.",
      "ITSM y Change Management sobre Solution Manager.",
      "Custom Code Management para limpiar deuda técnica.",
      "Test Management para regresiones controladas.",
      "Document Management y gobierno de outputs.",
    ],
    badges: [
      "SAP Solution Manager",
      "Solution Documentation",
      "ITSM",
      "Change Management",
      "Custom Code Management",
      "Test Management",
      "SAP Document Management",
    ],
    icon: ShieldCheck,
  },
  {
    id: "middleware",
    label: "Middleware",
    eyebrow: "Middleware SAP y terceros",
    title: "Boomi, HCI/CPI, PI/PO, IBM WebSphere, MQ y APIs",
    description:
      "Diseñamos integraciones entre SAP y terceros con middleware empresarial como Boomi, HCI/CPI, PI/PO, IBM WebSphere, MQ y APIs, cuidando monitoreo, errores, reprocesos y trazabilidad.",
    bullets: [
      "Boomi para flujos de integración entre nube y on-prem.",
      "SAP HCI/CPI y SAP PI/PO para integraciones SAP-céntricas.",
      "IBM WebSphere Application Server, Message Broker y MQ.",
      "APIs REST/SOAP con contratos, versionado y monitoreo.",
      "Manejo de errores, reprocesos y bitácora por interfaz.",
    ],
    badges: [
      "Boomi",
      "SAP HCI / CPI",
      "SAP PI / PO",
      "IBM WebSphere",
      "IBM MQ",
      "Message Broker",
      "REST",
      "SOAP",
    ],
    icon: Plug,
  },
];

export const CLOUD_PROVIDERS: DeepDiveBlock[] = [
  {
    id: "aws",
    label: "AWS",
    eyebrow: "AWS",
    title: "Arquitecturas ligeras, mantenibles y observables",
    description:
      "En AWS diseñamos arquitecturas ligeras y mantenibles: sitios estáticos con S3 + CloudFront, APIs serverless con API Gateway + Lambda, envío de correos con SES y almacenamiento de leads, eventos o datos operativos según el caso.",
    bullets: [
      "S3 + CloudFront para sitios corporativos, assets y distribución segura.",
      "API Gateway + Lambda para endpoints ligeros e integraciones serverless.",
      "SES para correo transaccional y formularios de contacto.",
      "RDS / DynamoDB para persistencia según caso de uso.",
      "Separación por entornos con cuentas, IAM y políticas explícitas.",
      "Observabilidad y operación básica para continuidad.",
    ],
    badges: [
      "S3 + CloudFront",
      "API Gateway",
      "Lambda",
      "SES",
      "RDS",
      "DynamoDB",
      "CloudWatch",
    ],
    icon: Cloud,
  },
  {
    id: "azure",
    label: "Azure",
    eyebrow: "Azure",
    title: "Plataformas corporativas con identidad, datos y aplicaciones",
    description:
      "En Azure ayudamos a construir plataformas corporativas integradas con identidad, datos y aplicaciones internas, cuidando gobierno, seguridad y continuidad.",
    bullets: [
      "Aplicaciones corporativas sobre App Service y Functions.",
      "Integración con identidad empresarial (Entra ID).",
      "Azure SQL y servicios de datos gestionados.",
      "Data Lake y Synapse para analítica corporativa.",
      "Integración con APIs internas y sistemas legacy.",
      "Gobierno, seguridad y operación continua.",
    ],
    badges: [
      "App Service",
      "Functions",
      "Azure SQL",
      "Data Lake",
      "Synapse",
      "Entra ID",
    ],
    icon: Cloud,
  },
  {
    id: "gcp",
    label: "GCP",
    eyebrow: "Google Cloud",
    title: "Datos, analítica y servicios gestionados",
    description:
      "En GCP orientamos la arquitectura hacia datos, analítica y servicios gestionados, conectando fuentes operativas con modelos de reporting y consumo empresarial.",
    bullets: [
      "BigQuery para analítica y modelos de reporting empresarial.",
      "Cloud Run o servicios gestionados para despliegues ligeros.",
      "Pub/Sub y pipelines de datos para ingesta y transformación.",
      "Conexión de fuentes operativas con reportes y dashboards.",
      "Arquitectura orientada a datos y consumo empresarial.",
    ],
    badges: ["BigQuery", "Cloud Run", "Pub/Sub", "Dataflow", "Looker Studio"],
    icon: Cloud,
  },
];

export const DATA_PLATFORM_BLOCKS: DeepDiveBlock[] = [
  {
    id: "databases",
    label: "Bases de datos",
    eyebrow: "Bases de datos empresariales",
    title: "SQL Server, Oracle, PostgreSQL, MySQL, DB2, Sybase y SAP HANA",
    description:
      "Trabajamos con bases de datos empresariales conectándolas a pipelines, reportes y procesos operativos con trazabilidad. Modelado, migración, integración y reporting con criterio.",
    bullets: [
      "Modelado y diseño para performance y consistencia.",
      "Migraciones controladas entre motores empresariales.",
      "Integración con sistemas SAP y no SAP.",
      "Reporting con trazabilidad al dato original.",
      "Validaciones de calidad y reconciliación entre fuentes.",
    ],
    badges: [
      "MS SQL Server",
      "Oracle 11g+",
      "MySQL",
      "PostgreSQL",
      "Sybase",
      "DB2",
      "SAP HANA",
    ],
    icon: Database,
  },
  {
    id: "pipelines",
    label: "Pipelines",
    eyebrow: "Data pipelines",
    title: "Ingesta, transformación y calidad versionadas",
    description:
      "Pipelines de datos auditables y reproducibles. Sin scripts huérfanos, sin procesos que solo conoce una persona del equipo.",
    bullets: [
      "Ingesta confiable desde sistemas fuente.",
      "Transformaciones versionadas en repositorio.",
      "Validaciones de calidad con alertas.",
      "Catálogo de fuentes y dependencias.",
      "Reprocesos controlados ante errores.",
    ],
    badges: ["ETL/ELT", "Streaming", "Batch", "Calidad de datos"],
    icon: Workflow,
  },
  {
    id: "reporting",
    label: "Reporting y gobierno",
    eyebrow: "Reporting y gobierno",
    title: "Capa semántica común y reportes auditables",
    description:
      "Llevamos los datos hasta el reporte ejecutivo con trazabilidad al dato original. Reportes que aguantan auditoría, no dashboards bonitos sin sustento.",
    bullets: [
      "Capa semántica común entre áreas.",
      "Reportes ejecutivos y operativos auditables.",
      "Trazabilidad al dato original.",
      "Validación de fuentes y reglas de calidad.",
      "Gobierno de datos por dominio.",
    ],
    badges: [
      "Power BI",
      "Tableau",
      "Looker Studio",
      "Capa semántica",
      "Gobierno",
    ],
    icon: LineChart,
  },
];

export const SOFTWARE_FACTORY_BLOCKS: DeepDiveBlock[] = [
  {
    id: "build",
    label: "Qué construimos",
    eyebrow: "Qué construimos",
    title: "Portales, aplicaciones, APIs, reportes, interfaces y workflows",
    description:
      "No solo desarrollamos pantallas. Diseñamos portales, aplicaciones internas, APIs, reportes, interfaces y flujos de trabajo conectados a sistemas reales, con soporte evolutivo y entregables por sprint.",
    bullets: [
      "Portales empresariales y aplicaciones internas.",
      "APIs y microservicios reutilizables.",
      "Reportes, interfaces y formularios.",
      "Workflows y herramientas operativas.",
      "Integraciones con SAP y terceros.",
      "Automatizaciones y evolutivos sobre plataformas existentes.",
    ],
    badges: [
      "Portales",
      "Apps internas",
      "APIs",
      "Microservicios",
      "Reportes",
      "Workflows",
    ],
    icon: Code2,
  },
  {
    id: "operate",
    label: "Cómo operamos",
    eyebrow: "Cómo operamos una fábrica",
    title: "De levantamiento a soporte L2/L3 y roadmap",
    description:
      "Modelo de fábrica con responsabilidad de extremo a extremo: levantamiento, priorización, arquitectura, desarrollo, QA, documentación, despliegue, soporte y evolución.",
    bullets: [
      "Levantamiento técnico y funcional.",
      "Priorización de backlog continuo.",
      "Diseño de arquitectura documentada.",
      "Desarrollo iterativo con sprints quincenales.",
      "QA, documentación y despliegue controlados.",
      "Soporte L2/L3 y roadmap evolutivo.",
    ],
    badges: [
      "Backlog continuo",
      "Sprints",
      "QA",
      "Docs",
      "CI/CD",
      "Soporte L2/L3",
    ],
    icon: Workflow,
  },
  {
    id: "tech",
    label: "Tecnologías",
    eyebrow: "Tecnologías de desarrollo",
    title: "Java, .NET, TypeScript, Python, ABAP y SQL",
    description:
      "Stack pragmático según el caso. Elegimos la tecnología que mejor sostiene la operación, no la que está de moda.",
    bullets: [
      "Java, J2EE / JSE y Jruby para sistemas empresariales.",
      ".NET, C# y ASP.NET para plataformas Microsoft.",
      "TypeScript / React / Node para front-ends modernos y BFFs.",
      "Python para automatización, datos e IA.",
      "ABAP para desarrollo dentro de SAP.",
      "SQL avanzado en motores empresariales.",
    ],
    badges: [
      "Java",
      "J2EE / JSE",
      "Jruby",
      ".NET",
      "C#",
      "ASP.NET",
      "TypeScript",
      "Python",
      "ABAP",
      "SQL",
    ],
    icon: Layers,
  },
  {
    id: "integrations",
    label: "Integraciones",
    eyebrow: "Integraciones que sostenemos",
    title: "Conectamos SAP y no SAP, no solo construimos pantallas",
    description:
      "Diseñamos integraciones entre sistemas SAP y no SAP mediante middleware empresarial, APIs y servicios controlados. El foco no es solo conectar, sino monitorear, documentar, reprocesar errores y sostener la operación.",
    bullets: [
      "Contratos de integración versionados con esquemas claros.",
      "APIs y servicios reutilizables sobre Java, .NET y TypeScript.",
      "Middleware empresarial Boomi, HCI/CPI, PI/PO, IBM WebSphere y MQ.",
      "Monitoreo de interfaces críticas con alertas y bitácora.",
      "Manejo de errores, reprocesos y trazabilidad por transacción.",
      "Soporte evolutivo a integraciones existentes sin romperlas.",
    ],
    badges: [
      "Boomi",
      "HCI / CPI",
      "PI / PO",
      "IBM WebSphere",
      "IBM MQ",
      "Message Broker",
      "REST",
      "SOAP",
      "Java Open Source",
    ],
    icon: Network,
  },
  {
    id: "when",
    label: "Cuándo conviene",
    eyebrow: "Cuándo conviene este modelo",
    title: "Cuando hace falta velocidad sin perder control",
    description:
      "Una fábrica dedicada brilla en escenarios donde la complejidad técnica y la presión del negocio se cruzan.",
    bullets: [
      "Backlog acumulado que el equipo interno no puede atender.",
      "Procesos críticos atados a archivos Excel.",
      "Sistemas que no se hablan y obligan a duplicar trabajo manual.",
      "Necesidad de un equipo senior listo en pocas semanas.",
      "Soporte y evolución continua, no solo entrega inicial.",
    ],
    badges: ["Velocidad", "Control", "Evolución", "Continuidad"],
    icon: Sparkles,
  },
];

export const ENTERPRISE_AI_BLOCKS: DeepDiveBlock[] = [
  {
    id: "genai",
    label: "IA generativa",
    eyebrow: "IA generativa con contexto empresarial",
    title: "LLMs, RAG corporativo, permisos y trazabilidad",
    description:
      "Soluciones de IA generativa conectadas a datos propios con RAG, controles de acceso y trazabilidad. Sin chatbots aislados del contexto del cliente.",
    bullets: [
      "LLMs sobre datos propios con RAG corporativo.",
      "Respuestas con citas y trazabilidad al dato original.",
      "Controles de acceso por rol y por dominio.",
      "Despliegue en cloud privado o VPC dedicada.",
      "Evaluación continua de respuestas.",
    ],
    badges: [
      "LLMs",
      "RAG corporativo",
      "Citas",
      "Permisos",
      "Eval continua",
    ],
    icon: Sparkles,
  },
  {
    id: "ml",
    label: "Machine learning",
    eyebrow: "Machine learning aplicado",
    title: "Predicción, clasificación y detección con MLOps",
    description:
      "Modelos productivos con foco en operación: predicción, clasificación, detección de anomalías, monitoreo y evaluación continua.",
    bullets: [
      "Predicción y clasificación sobre datos empresariales.",
      "Detección de anomalías en procesos críticos.",
      "Monitoreo de modelos en producción.",
      "Evaluación continua y reentrenamiento.",
      "MLOps real, no notebooks sin operación.",
    ],
    badges: ["ML", "MLOps", "Anomalías", "Monitoreo", "Reentrenamiento"],
    icon: Brain,
  },
  {
    id: "assistants",
    label: "Asistentes internos",
    eyebrow: "Asistentes para consultores y equipos internos",
    title: "Búsqueda, soporte y automatización con contexto propio",
    description:
      "Asistentes que apoyan a consultores y equipos internos sobre documentación, normativas y datos propios. IA pegada al trabajo real, no a internet abierto.",
    bullets: [
      "Búsqueda sobre documentación interna.",
      "Apoyo a soporte funcional y técnico.",
      "Consulta de procesos y normativas.",
      "Resumen de información y reportes.",
      "Automatización de tareas repetitivas.",
    ],
    badges: ["Búsqueda", "Soporte interno", "Resúmenes", "Automatización"],
    icon: Wand2,
  },
  {
    id: "copilots",
    label: "Copilotos operativos",
    eyebrow: "Copilotos operativos",
    title: "Conectados a SAP, datos, APIs y reglas de negocio",
    description:
      "Capa de IA conectada a SAP, bases de datos, APIs internas y reportes con permisos por rol y validación previa a cualquier acción sensible. Aquí vive nuestro producto estrella: Copiloto Empresarial.",
    bullets: [
      "Consulta operativa sobre SAP, BD y APIs.",
      "Validación de inconsistencias con reglas de negocio.",
      "Reportes asistidos con trazabilidad.",
      "Seguridad por rol heredada del sistema fuente.",
      "Confirmación humana antes de acciones críticas.",
    ],
    badges: [
      "SAP",
      "Bases de datos",
      "APIs",
      "Reportes",
      "Permisos",
      "Trazabilidad",
    ],
    icon: GitBranch,
  },
];

/* ---------------------------------------------------------------- */
/* Re-export some icons consumed by other modules that historically  */
/* read them from site-data (legacy). Safe to remove once callers   */
/* migrate to lucide-react directly.                                 */
/* ---------------------------------------------------------------- */

export const SERVICE_LEGACY_ICONS = {
  Boxes,
  Cloud,
  Code2,
  Database,
  FileBarChart,
  LineChart,
  Network,
  Plug,
  Server,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Wand2,
  Workflow,
};
