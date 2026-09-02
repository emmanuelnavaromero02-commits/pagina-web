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
    title: "Fábrica de software",
    short: "Desarrollo a medida y evolución.",
    description:
      "Diseñamos y construimos portales, aplicaciones internas, APIs e integraciones para reducir trabajo manual, conectar sistemas existentes y dar continuidad a plataformas críticas.",
    icon: Code2,
    bullets: [
      "Desarrollo a medida",
      "Portales empresariales",
      "Aplicaciones internas",
      "APIs y microservicios",
      "Soporte y evolución",
    ],
    href: "/services/software-factory",
  },
  {
    slug: "sap-integrations",
    title: "Integración empresarial",
    short: "Integración SAP gobernada.",
    description:
      "Conectamos SAP On-Premise, SAP Cloud y SAP BTP con el resto del ecosistema mediante ABAP, RFC, IDocs, Boomi, HCI y PI, sin afectar lo que ya funciona.",
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
    title: "Nube y datos gobernados",
    short: "Plataformas de datos confiables.",
    description:
      "Arquitecturas de nube en AWS, Azure y GCP con bases de datos empresariales, pipelines trazables y controles para revisión de auditoría.",
    icon: Cloud,
    bullets: [
      "AWS · Azure · GCP",
      "Bases de datos empresariales",
      "Pipelines de datos",
      "Reportes ejecutivos",
      "Arquitectura segura",
    ],
    href: "/services/cloud-data",
  },
  {
    slug: "enterprise-ai",
    title: "IA operativa",
    short: "IA conectada a procesos reales.",
    description:
      "IA generativa, machine learning y automatización inteligente basadas en tus datos y reglas de negocio, para casos de uso operativos y no demostraciones vacías.",
    icon: Brain,
    bullets: [
      "IA generativa sobre datos privados",
      "Modelos de ML en producción",
      "Automatización inteligente",
      "Asistentes internos",
      "Copilotos operativos",
    ],
    href: "/services/enterprise-ai",
  },
];

/* ---------------------------------------------------------------- */
/* SERVICE_DETAILS — section grid for each service                  */
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
    title: "Fábrica de software",
    intro:
      "Desarrollamos software empresarial alrededor de procesos reales: portales, aplicaciones internas, APIs e integraciones con responsabilidades claras sobre alcance, entrega y soporte.",
    icon: Code2,
    sections: [
      {
        id: "custom",
        title: "Desarrollo a medida",
        description:
          "Plataformas internas, herramientas funcionales y aplicaciones a medida centradas en la mantenibilidad y el costo total de propiedad.",
        bullets: [
          "Arquitectura clara y documentada",
          "Equipos full-stack y especialistas",
          "Entregables con criterios de aceptación acordados",
        ],
      },
      {
        id: "portals",
        title: "Portales empresariales",
        description:
          "Interfaces corporativas modernas para empleados, proveedores y clientes internos, con SSO y permisos.",
        bullets: [
          "Diseño y experiencia de usuario coherentes",
          "Integración con la identidad corporativa",
          "Despliegues seguros y escalables",
        ],
      },
      {
        id: "apps",
        title: "Aplicaciones internas",
        description:
          "Herramientas para equipos de operaciones, finanzas y RR. HH. que trasladan los procesos fuera de las hojas de cálculo.",
        bullets: [
          "Flujos de trabajo asistidos",
          "Validaciones automatizadas",
          "Reportes operativos integrados",
        ],
      },
      {
        id: "apis",
        title: "APIs y microservicios",
        description:
          "Servicios reutilizables con contratos explícitos, versionado, observabilidad y seguridad de forma predeterminada.",
        bullets: [
          "Diseño API-first",
          "Documentación actualizada continuamente",
          "Observabilidad de principio a fin",
        ],
      },
      {
        id: "support",
        title: "Soporte evolutivo",
        description:
          "Continuidad y mejora continua de plataformas críticas con SLA, métricas y planes de evolución.",
        bullets: ["Soporte L2/L3", "Backlog evolutivo", "Hoja de ruta acordada"],
      },
    ],
  },
  "sap-integrations": {
    eyebrow: "Servicio",
    title: "Integración empresarial",
    intro:
      "El alcance de integración cubre SAP On-Premise, SAP Cloud y SAP BTP con cambios controlados alrededor de la operación central.",
    icon: Plug,
    sections: [
      {
        id: "onprem",
        title: "SAP On-Premise",
        description:
          "Trabajo en ECC, S/4HANA y módulos del núcleo. Desarrollo, evoluciones y soporte funcional y técnico.",
        bullets: ["ECC y S/4HANA", "Módulos FI / MM / SD / HR", "Soporte ABAP"],
      },
      {
        id: "cloud",
        title: "SAP Cloud",
        description:
          "Integración de soluciones de nube de SAP como SuccessFactors, Ariba e IBP con el resto de la operación.",
        bullets: ["SuccessFactors", "Ariba", "IBP y otras suites de nube"],
      },
      {
        id: "btp",
        title: "SAP BTP",
        description:
          "Extensiones, CAP, Workflow y Build en la plataforma BTP para ampliar SAP más allá del núcleo.",
        bullets: ["CAP (Node / Java)", "Workflow", "Build / Apps"],
      },
      {
        id: "abap",
        title: "ABAP / RFC / IDocs",
        description:
          "Desarrollo ABAP, integraciones RFC e IDoc, mejoras de rendimiento y monitoreo.",
        bullets: ["Reportes y módulos", "BAPIs y RFCs", "Monitoreo de IDoc"],
      },
      {
        id: "middleware",
        title: "Boomi / HCI / PI",
        description:
          "Middleware empresarial para conectar SAP con terceros sin acumular deuda técnica.",
        bullets: ["Boomi", "SAP HCI / CPI", "SAP PI / PO"],
      },
      {
        id: "third-party",
        title: "Integraciones con terceros",
        description:
          "Conectividad con CRM, comercio electrónico, bancos, plataformas de RR. HH. y aplicaciones heredadas.",
        bullets: ["REST / SOAP", "Eventos", "ETL controlado"],
      },
    ],
  },
  "cloud-data": {
    eyebrow: "Servicio",
    title: "Nube y datos gobernados",
    intro:
      "Plataformas de nube y datos con arquitectura clara, seguridad predeterminada y controles de trazabilidad para revisión de auditoría.",
    icon: Cloud,
    sections: [
      {
        id: "aws",
        title: "AWS",
        description:
          "Arquitectura, migración y operación en AWS centradas en costos, seguridad y observabilidad.",
        bullets: ["Lambda + API Gateway", "S3 + CloudFront", "RDS / DynamoDB"],
      },
      {
        id: "azure",
        title: "Azure",
        description:
          "Plataformas corporativas en Azure integradas con Entra ID y servicios de datos.",
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
          "Trabajo con bases de datos empresariales centrado en rendimiento, modelo y coherencia.",
        bullets: ["Oracle / SQL Server", "PostgreSQL", "SAP HANA"],
      },
      {
        id: "pipelines",
        title: "Pipelines de datos",
        description:
          "Ingesta, transformación y calidad de datos auditables y reproducibles.",
        bullets: [
          "Ingesta confiable",
          "Transformaciones versionadas",
          "Comprobaciones de calidad y alertas",
        ],
      },
      {
        id: "reporting",
        title: "Reportes empresariales",
        description:
          "BI y reportes ejecutivos con trazabilidad hasta los datos de origen, no paneles atractivos sin fundamento.",
        bullets: [
          "Paneles del estado actual",
          "Reportes auditables",
          "Capa semántica común",
        ],
      },
    ],
  },
  "enterprise-ai": {
    eyebrow: "Servicio",
    title: "IA operativa",
    intro:
      "IA aplicada a procesos reales: copilotos, asistentes internos y automatización inteligente conectados a tus sistemas, no demostraciones vacías.",
    icon: Brain,
    sections: [
      {
        id: "genai",
        title: "IA generativa",
        description:
          "Soluciones con LLM sobre datos privados, con RAG, controles de acceso y trazabilidad.",
        bullets: ["RAG corporativo", "LLM en VPC", "Evaluación continua"],
      },
      {
        id: "ml",
        title: "Machine learning",
        description:
          "Modelos en producción para predicción, clasificación y detección de anomalías, centrados en la operación.",
        bullets: ["Modelos en producción", "MLOps", "Monitoreo de modelos"],
      },
      {
        id: "automation",
        title: "Automatización inteligente",
        description:
          "Procesos asistidos por IA en los que una persona valida la decisión; la IA no decide sin supervisión.",
        bullets: [
          "Validaciones asistidas",
          "Flujos con supervisión humana",
          "Auditoría de decisiones",
        ],
      },
      {
        id: "assistants",
        title: "Asistentes internos",
        description:
          "Asistentes para equipos internos sobre documentación, políticas y datos privados.",
        bullets: [
          "Soporte interno",
          "Incorporación asistida",
          "Búsqueda inteligente",
        ],
      },
      {
        id: "copilots",
        title: "Agentes de Decisión IA",
        description:
          "Combina IA generativa, agentes especializados y modelos cuantitativos para preparar decisiones y acciones controladas.",
        bullets: [
          "Agentes especializados",
          "Simulación y evidencia",
          "Acciones con aprobación",
        ],
      },
    ],
  },
};

/* ---------------------------------------------------------------- */
/* SERVICE_WHEN_TO_USE — when each service applies                  */
/* ---------------------------------------------------------------- */

export const SERVICE_WHEN_TO_USE: Record<
  ServiceSlug,
  { title: string; subtitle: string; items: string[] }
> = {
  "software-factory": {
    title: "Cuándo conviene una fábrica de software",
    subtitle:
      "Si reconoces alguno de estos patrones, una fábrica dedicada suele ser la respuesta adecuada.",
    items: [
      "El backlog se acumula y el equipo interno no logra atenderlo.",
      "Los procesos críticos dependen de archivos de Excel mantenidos por una sola persona.",
      "Necesitas integrar sistemas que no se comunican.",
      "Buscas velocidad sin perder el control de la arquitectura.",
      "Un proyecto urgente necesita un equipo senior con un plan de movilización acordado.",
      "Buscas continuidad: entrega, evolución permanente y soporte.",
    ],
  },
  "sap-integrations": {
    title: "Problemas habituales que resolvemos",
    subtitle:
      "Patrones recurrentes en organizaciones que operan SAP en producción junto con muchos otros sistemas.",
    items: [
      "Interfaces frágiles que fallan con cada cambio.",
      "Datos duplicados entre SAP y sistemas de terceros.",
      "Reportes manuales construidos con datos que ya existen en SAP.",
      "Sistemas críticos que no se comunican.",
      "Cambios en SAP que rompen integraciones posteriores.",
      "Falta de monitoreo de IDocs, jobs e interfaces.",
    ],
  },
  "cloud-data": {
    title: "De datos dispersos a reportes confiables",
    subtitle:
      "Patrones que surgen cuando los datos están distribuidos y el reporte final carece de definiciones compartidas.",
    items: [
      "Información crítica distribuida entre ERP, CRM, Excel y bases de datos internas.",
      "Reportes que cada equipo reconstruye de forma distinta y con cifras diferentes.",
      "Pipelines manuales que fallan sin que nadie lo detecte a tiempo.",
      "Costos de nube que crecen sin control ni gobierno.",
      "Falta de una capa semántica común entre áreas de negocio.",
      "Reportes ejecutivos sin trazabilidad a la fuente para revisión de auditoría.",
    ],
  },
  "enterprise-ai": {
    title: "IA útil, no demostraciones vacías",
    subtitle:
      "La IA solo aporta valor cuando se conecta con procesos reales, datos privados y reglas de negocio explícitas.",
    items: [
      "Asistentes conectados a datos corporativos, no al internet abierto.",
      "Casos de uso medibles, no laboratorios interminables sin entregables.",
      "Supervisión humana antes de cualquier acción sensible.",
      "Permisos de usuario respetados por la capa de IA.",
      "Trazabilidad de cada respuesta hasta los datos de origen.",
      "MLOps operativo con monitoreo de modelos y despliegue controlado.",
    ],
  },
};

/* ---------------------------------------------------------------- */
/* SERVICE_DELIVERABLES — what we ship                              */
/* ---------------------------------------------------------------- */

export const SERVICE_DELIVERABLES: Record<
  ServiceSlug,
  { title: string; items: string[] }
> = {
  "software-factory": {
    title: "Qué entregamos",
    items: [
      "Especialistas senior seleccionados para el proyecto con un responsable de entrega.",
      "Arquitectura documentada y versionada.",
      "Ciclos de entrega acordados con revisión y criterios de aceptación.",
      "Pipeline de CI/CD incluido en el diseño de entrega.",
      "Plan de soporte y evolución después de la puesta en producción.",
    ],
  },
  "sap-integrations": {
    title: "Qué entregamos",
    items: [
      "Diagnóstico de integraciones críticas con identificación de riesgos.",
      "Rediseño de arquitectura sin afectar los procesos productivos.",
      "Conectores y monitores reutilizables.",
      "Pruebas de regresión en interfaces clave.",
      "Paneles de salud técnica para operaciones.",
    ],
  },
  "cloud-data": {
    title: "Qué entregamos",
    items: [
      "Arquitectura de nube documentada (AWS / Azure / GCP).",
      "Pipelines de datos versionados con calidad medida.",
      "Capa semántica común para reportes.",
      "Paneles y reportes ejecutivos auditables.",
      "Modelo de costos y gobierno de nube explícitos.",
    ],
  },
  "enterprise-ai": {
    title: "Qué entregamos",
    items: [
      "Casos de uso priorizados por impacto operativo.",
      "Asistentes y copilotos sobre datos privados.",
      "RAG corporativo con controles de acceso.",
      "Modelos de ML en producción con monitoreo.",
      "Plan de evolución y hoja de ruta de nuevos casos de uso.",
    ],
  },
};

/* ---------------------------------------------------------------- */
/* DeepDive blocks — tab content for SAP / Cloud / Factory / AI     */
/* ---------------------------------------------------------------- */

export type DeepDiveBlock = {
  id: string;
  label: string;
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
    label: "Núcleo SAP",
    eyebrow: "Núcleo SAP",
    title: "Procesos en FI, CO, SD, MM, HCM, PS y PM",
    description:
      "El alcance del servicio cubre procesos SAP de finanzas, controlling, ventas, materiales, mantenimiento, proyectos y RR. HH., con cambios de integración controlados.",
    bullets: [
      "Finanzas (FI) y Controlling (CO) para cierres y reportes.",
      "Operaciones de Ventas (SD), Materiales (MM) y Mantenimiento (PM).",
      "Proyectos (PS) y RR. HH. (HCM), con atención a los datos maestros.",
      "Migraciones y soporte en ECC y S/4HANA con criterio funcional.",
    ],
    badges: ["ECC", "S/4HANA", "FI", "CO", "SD", "MM", "HCM", "PS", "PM"],
    icon: Boxes,
  },
  {
    id: "dev",
    label: "Desarrollo SAP",
    eyebrow: "Desarrollo SAP",
    title: "ABAP, reportes, formularios, mejoras y flujos de trabajo",
    description:
      "Desarrollamos y evolucionamos objetos SAP como reportes, formularios, mejoras, conversiones, interfaces y flujos de trabajo, con atención a la mantenibilidad y la continuidad operativa.",
    bullets: [
      "Reportes ABAP a medida con criterios de rendimiento.",
      "Formularios y salidas (SmartForms, Adobe).",
      "Mejoras (BAdIs, User Exits) sin modificar el núcleo.",
      "Conversiones e interfaces controladas.",
      "Flujos SAP para procesos asistidos.",
    ],
    badges: [
      "ABAP",
      "ABAP/4",
      "Reportes",
      "Formularios",
      "Mejoras",
      "Conversiones",
      "SAP Workflows",
    ],
    icon: Code2,
  },
  {
    id: "tech",
    label: "Integración técnica",
    eyebrow: "Integración técnica",
    title: "RFC, IDocs, BAPIs, SAP JCo, NetWeaver Gateway y APIs",
    description:
      "Conectamos SAP con aplicaciones internas y plataformas externas mediante RFC, IDocs, BAPIs, SAP JCo, Gateway, APIs REST/SOAP y contratos de integración explícitos.",
    bullets: [
      "Llamadas síncronas y asíncronas mediante RFC y BAPIs.",
      "Mensajería IDoc con monitoreo y reprocesamiento.",
      "Servicios SAP expuestos mediante NetWeaver Gateway.",
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
    title: "Extensión de SAP a la nube con gobierno y trazabilidad",
    description:
      "Extendemos SAP a la nube con SAP BTP, SAP Cloud, HCI/CPI y servicios de integración, preservando el gobierno, la seguridad y la trazabilidad.",
    bullets: [
      "Extensiones SAP fuera del núcleo mediante SAP BTP.",
      "Integraciones de nube de SAP con HCI/CPI.",
      "Flujos BTP y desarrollo CAP en Node/Java.",
      "Aplicaciones Build / Apps integradas con la identidad SAP.",
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
    label: "Gobierno y operaciones",
    eyebrow: "Gobierno y operaciones SAP",
    title: "Solution Manager, ITSM, Change y Test Management",
    description:
      "También cubrimos la parte operativa: documentación de soluciones, gestión de cambios, pruebas, gestión de código a medida, ITSM y continuidad del servicio.",
    bullets: [
      "Solution Documentation centralizada y mantenida.",
      "ITSM y Change Management en Solution Manager.",
      "Custom Code Management para reducir la deuda técnica.",
      "Test Management para una regresión controlada.",
      "Document Management y gobierno de salidas.",
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
    eyebrow: "Middleware SAP y de terceros",
    title: "Boomi, HCI/CPI, PI/PO, IBM WebSphere, MQ y APIs",
    description:
      "Diseñamos integraciones entre SAP y terceros mediante middleware empresarial como Boomi, HCI/CPI, PI/PO, IBM WebSphere y MQ, con monitoreo, manejo de errores, reprocesamiento y trazabilidad.",
    bullets: [
      "Boomi para flujos de integración entre nube y on-premise.",
      "SAP HCI/CPI y SAP PI/PO para integraciones centradas en SAP.",
      "IBM WebSphere Application Server, Message Broker y MQ.",
      "APIs REST/SOAP con contratos, versionado y monitoreo.",
      "Manejo de errores, reprocesamiento y registro de auditoría por interfaz.",
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
      "En AWS diseñamos arquitecturas ligeras y mantenibles: sitios estáticos en S3 + CloudFront, APIs serverless con API Gateway + Lambda, envío de correo con SES y almacenamiento para leads, eventos o datos operativos.",
    bullets: [
      "S3 + CloudFront para sitios corporativos, activos y distribución segura.",
      "API Gateway + Lambda para endpoints ligeros e integración serverless.",
      "SES para correo transaccional y formularios de contacto.",
      "RDS / DynamoDB para persistencia según el caso de uso.",
      "Separación por entorno mediante cuentas, IAM y políticas explícitas.",
      "Observabilidad y operación base para asegurar la continuidad.",
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
    title: "Plataformas corporativas de identidad, datos y aplicaciones",
    description:
      "En Azure ayudamos a construir plataformas corporativas integradas con identidad, datos y aplicaciones internas, considerando el gobierno, la seguridad y la continuidad.",
    bullets: [
      "Aplicaciones corporativas en App Service y Functions.",
      "Integración con la identidad corporativa (Entra ID).",
      "Azure SQL y servicios de datos administrados.",
      "Data Lake y Synapse para analítica corporativa.",
      "Integración con APIs internas y sistemas heredados.",
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
    title: "Datos, analítica y servicios administrados",
    description:
      "En GCP orientamos la arquitectura a datos, analítica y servicios administrados, conectando fuentes operativas con reportes y consumo empresarial.",
    bullets: [
      "BigQuery para analítica y modelos de reportes empresariales.",
      "Cloud Run o servicios administrados para despliegues ligeros.",
      "Pub/Sub y pipelines de datos para ingesta y transformación.",
      "Conexión de fuentes operativas con reportes y paneles.",
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
      "El alcance del servicio cubre bases de datos empresariales conectadas a pipelines, reportes y procesos operativos con trazabilidad, incluido modelado, migración e integración.",
    bullets: [
      "Modelado y diseño para rendimiento y coherencia.",
      "Migraciones controladas entre motores empresariales.",
      "Integración con sistemas SAP y ajenos a SAP.",
      "Reportes con trazabilidad hasta los datos de origen.",
      "Validaciones de calidad y conciliación entre fuentes.",
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
    eyebrow: "Pipelines de datos",
    title: "Ingesta, transformación y calidad auditables y versionadas",
    description:
      "Pipelines de datos auditables y reproducibles. Sin scripts huérfanos ni procesos que solo comprende una persona del equipo.",
    bullets: [
      "Ingesta confiable desde los sistemas de origen.",
      "Transformaciones versionadas almacenadas en el control de código fuente.",
      "Validaciones de calidad con alertas.",
      "Catálogo de fuentes y dependencias.",
      "Reprocesamiento controlado en caso de errores.",
    ],
    badges: ["ETL/ELT", "Streaming", "Lotes", "Calidad de datos"],
    icon: Workflow,
  },
  {
    id: "reporting",
    label: "Reportes y gobierno",
    eyebrow: "Reportes y gobierno",
    title: "Capa semántica común y reportes trazables",
    description:
      "El diseño lleva la trazabilidad a la fuente hasta los reportes ejecutivos y prepara evidencias para revisión de auditoría.",
    bullets: [
      "Capa semántica común entre áreas.",
      "Reportes ejecutivos y operativos con trazabilidad a la fuente.",
      "Trazabilidad hasta los datos de origen.",
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
    title: "Portales, aplicaciones, APIs, reportes, interfaces y flujos de trabajo",
    description:
      "No solo construimos pantallas. Diseñamos portales, aplicaciones internas, APIs, reportes, interfaces y flujos de trabajo conectados a sistemas reales, con soporte evolutivo y entregables por sprint.",
    bullets: [
      "Portales empresariales y aplicaciones internas.",
      "APIs y microservicios reutilizables.",
      "Reportes, interfaces y formularios.",
      "Flujos de trabajo y herramientas operativas.",
      "Integraciones con SAP y terceros.",
      "Automatizaciones y evoluciones en plataformas existentes.",
    ],
    badges: [
      "Portales",
      "Aplicaciones internas",
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
    title: "Desde el descubrimiento hasta el soporte L2/L3 y la hoja de ruta",
    description:
      "Modelo de fábrica con responsabilidad de principio a fin: descubrimiento, priorización, arquitectura, desarrollo, QA, documentación, despliegue, soporte y evolución.",
    bullets: [
      "Descubrimiento técnico y funcional.",
      "Priorización continua del backlog.",
      "Diseño de arquitectura documentado.",
      "Desarrollo iterativo en ciclos de entrega acordados.",
      "QA, documentación y despliegue controlados.",
      "Soporte L2/L3 y hoja de ruta evolutiva.",
    ],
    badges: [
      "Backlog continuo",
      "Sprints",
      "QA",
      "Documentación",
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
      "Arquitectura tecnológica pragmática elegida según los requisitos operativos, de seguridad y mantenimiento.",
    bullets: [
      "Java, J2EE / JSE y Jruby para sistemas empresariales.",
      ".NET, C# y ASP.NET para plataformas Microsoft.",
      "TypeScript / React / Node para front-ends modernos y BFF.",
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
    eyebrow: "Alcance de integración",
    title: "Conectamos SAP y sistemas ajenos a SAP; no solo construimos pantallas",
    description:
      "Diseñamos integraciones entre SAP y sistemas ajenos a SAP mediante middleware empresarial, APIs y servicios controlados. El objetivo no es solo conectar, sino monitorear, documentar, reprocesar errores y sostener la operación.",
    bullets: [
      "Contratos de integración versionados con esquemas claros.",
      "APIs y servicios reutilizables en Java, .NET y TypeScript.",
      "Middleware empresarial: Boomi, HCI/CPI, PI/PO, IBM WebSphere y MQ.",
      "Monitoreo de interfaces críticas con alertas y registro de auditoría.",
      "Manejo de errores, reprocesamiento y trazabilidad por transacción.",
      "Soporte evolutivo para integraciones existentes sin afectarlas.",
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
    title: "Cuando necesitas velocidad sin perder el control",
    description:
      "Una fábrica dedicada puede encajar cuando coinciden la complejidad técnica y la presión del negocio.",
    bullets: [
      "Backlog que el equipo interno no logra atender.",
      "Procesos críticos ligados a archivos de Excel.",
      "Sistemas que no se comunican y obligan a capturar datos dos veces.",
      "Necesidad de un equipo senior con un plan de movilización acordado.",
      "Soporte y evolución continuos, no solo una entrega inicial.",
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
    title: "LLM, RAG corporativo, permisos y trazabilidad",
    description:
      "Soluciones de IA generativa conectadas a datos privados mediante RAG, controles de acceso y trazabilidad. Sin chatbots ajenos al contexto del cliente.",
    bullets: [
      "LLM basados en datos privados mediante RAG corporativo.",
      "Respuestas con referencias y trazabilidad hasta la fuente.",
      "Controles de acceso por función y dominio.",
      "Despliegue en nube privada o VPC dedicada.",
      "Evaluación continua de las respuestas.",
    ],
    badges: [
      "LLMs",
      "RAG corporativo",
      "Referencias",
      "Permisos",
      "Evaluación continua",
    ],
    icon: Sparkles,
  },
  {
    id: "ml",
    label: "Machine learning",
    eyebrow: "Machine learning aplicado",
    title: "Predicción, clasificación y detección con MLOps",
    description:
      "Modelos en producción centrados en la operación: predicción, clasificación, detección de anomalías, monitoreo y evaluación continua.",
    bullets: [
      "Predicción y clasificación sobre datos empresariales.",
      "Detección de anomalías en procesos críticos.",
      "Monitoreo de modelos en producción.",
      "Evaluación continua y reentrenamiento.",
      "MLOps operativo con monitoreo y despliegue controlado.",
    ],
    badges: ["ML", "MLOps", "Anomalías", "Monitoreo", "Reentrenamiento"],
    icon: Brain,
  },
  {
    id: "assistants",
    label: "Asistentes internos",
    eyebrow: "Asistentes para consultores y equipos internos",
    title: "Búsqueda, soporte y automatización basados en contexto privado",
    description:
      "Asistentes que apoyan a consultores y equipos internos sobre documentación, políticas y datos privados. IA vinculada al trabajo real, no al internet abierto.",
    bullets: [
      "Búsqueda en la documentación interna.",
      "Soporte para la mesa de ayuda funcional y técnica.",
      "Consultas de procesos y políticas.",
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
    title: "Evidencia, decisiones y acciones bajo control",
    description:
      "Agentes de Decisión IA reúne contexto operativo, explica hallazgos y prepara el siguiente paso para revisión y aprobación.",
    bullets: [
      "Respuestas y hallazgos con evidencia.",
      "Diferencias y riesgos destacados para revisión.",
      "Informes preparados para la persona responsable.",
      "Opciones organizadas antes de decidir.",
      "Aprobación humana antes de acciones sensibles.",
    ],
    badges: [
      "Evidencia",
      "Señales",
      "Decisiones",
      "Aprobaciones",
      "Seguimiento",
      "Control",
    ],
    icon: GitBranch,
  },
];

/* Auxiliary icon re-exports (legacy support — safe to remove if no
   consumer reads from this object). */
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
