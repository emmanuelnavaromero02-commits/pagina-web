import {
  Award,
  BookOpen,
  Boxes,
  Brain,
  Briefcase,
  Building2,
  Cloud,
  Code2,
  Compass,
  Factory,
  GraduationCap,
  Headphones,
  Network,
  Plug,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wand2,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/* Headline highlights — los cuatro frentes principales */
export const EXPERIENCE_HIGHLIGHTS: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Clientes empresariales grandes",
    description:
      "Programas entregados para corporativos en retail, manufactura, energía, telecomunicaciones, banca, bebidas, construcción, sector público, logística, servicios profesionales, inmobiliario y petróleo y gas.",
    icon: Building2,
  },
  {
    title: "Equipos SAP de extremo a extremo",
    description:
      "Implementaciones, evolutivos y soporte sobre SAP On-Premise, SAP Cloud y SAP BTP. Core funcional, desarrollo, integraciones, gobierno y operación.",
    icon: Boxes,
  },
  {
    title: "Fábricas de software internas y externas",
    description:
      "Modelos de fábrica para clientes con backlog continuo, equipos dedicados, QA, despliegue y soporte evolutivo medible por sprint.",
    icon: Factory,
  },
  {
    title: "IA aplicada a operación",
    description:
      "Casos reales de IA generativa, ML y automatización aplicados a procesos de RRHH, finanzas, reporting y soporte interno.",
    icon: Sparkles,
  },
];

/* Capacidades acumuladas (versión sintética usada en home y experience) */
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
      "Boomi, HCI/CPI, PI/PO, IBM WebSphere y MQ para conectar SAP con bancos, CRM, e-commerce y legacy.",
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

/* Sectores atendidos (sin nombres de clientes) */
export const EXPERIENCE_CLIENTS: string[] = [
  "Retail",
  "Manufactura",
  "Energía",
  "Minería",
  "Construcción",
  "Telecomunicaciones",
  "Banca",
  "Bebidas y consumo",
  "Sector público",
  "Logística",
  "Servicios profesionales",
  "Inmobiliario",
  "Petróleo y gas",
];

/* Bloques de "Liderazgo y forma de trabajo" (página experience) */
export type ExperienceTrack = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
};

export const EXPERIENCE_TRACKS: ExperienceTrack[] = [
  {
    id: "leadership",
    eyebrow: "Liderazgo técnico",
    title: "De la preventa al go-live, sin perder el hilo",
    description:
      "Experiencia dirigiendo programas de integración y desarrollo desde preventa y diseño de solución hasta implementación, soporte y evolución.",
    bullets: [
      "Dirección técnica y diseño de soluciones empresariales.",
      "Preventa con responsables técnicos al frente.",
      "Gestión de equipos multidisciplinarios.",
      "Gestión de presupuestos y compromisos contractuales.",
      "Acompañamiento en implementación, soporte y evolución.",
    ],
    icon: Compass,
  },
  {
    id: "factory",
    eyebrow: "Fábricas de software",
    title: "Operación continua, no proyectos aislados",
    description:
      "Hemos diseñado y operado fábricas internas y externas con backlog continuo, equipos dedicados, QA, roadmap y soporte evolutivo.",
    bullets: [
      "Fábricas internas y externas para clientes corporativos.",
      "Equipos dedicados con responsable de cuenta.",
      "Backlog priorizado y entregables por sprint.",
      "QA, documentación y despliegue controlados.",
      "Soporte L2/L3 y roadmap evolutivo trimestral.",
    ],
    icon: Factory,
  },
  {
    id: "sap",
    eyebrow: "SAP e integración",
    title: "Core, desarrollo, integración técnica y gobierno",
    description:
      "Trabajo profundo sobre el ecosistema SAP, desde módulos funcionales y desarrollo ABAP hasta middleware empresarial y gobierno con Solution Manager.",
    bullets: [
      "Core SAP en FI, CO, SD, MM, HCM, PS y PM.",
      "Desarrollo ABAP, reportes, formularios, ampliaciones y workflows.",
      "Integración técnica con RFC, IDocs, BAPIs, SAP JCo y Gateway.",
      "Middleware Boomi, HCI/CPI, PI/PO, IBM WebSphere y MQ.",
      "Gobierno con Solution Manager, ITSM, Change y Test Management.",
    ],
    icon: Boxes,
  },
  {
    id: "ai-cloud",
    eyebrow: "IA, cloud y datos",
    title: "Plataformas modernas conectadas a la operación",
    description:
      "IA generativa, machine learning y arquitecturas cloud sobre AWS, Azure, GCP y SAP BTP, conectadas a bases de datos y reportes corporativos.",
    bullets: [
      "IA generativa con RAG corporativo y permisos por rol.",
      "Machine learning productivo con MLOps.",
      "Arquitecturas en AWS, Azure, GCP y SAP BTP.",
      "Bases de datos empresariales: SQL Server, Oracle, PostgreSQL, MySQL, DB2, Sybase, SAP HANA.",
      "Reporting auditable y trazable hasta el dato original.",
    ],
    icon: Cloud,
  },
];

/* Formación técnica y certificaciones */
export const EXPERIENCE_EDUCATION: { title: string; subtitle?: string }[] = [
  {
    title: "Licenciatura en Ciencias de la Informática",
    subtitle: "Formación base en ingeniería de software y sistemas.",
  },
  {
    title: "Maestría en Ciencias Computacionales",
    subtitle: "Especialización en arquitectura, datos y sistemas distribuidos.",
  },
];

export const EXPERIENCE_CERTIFICATIONS: { title: string; track: string }[] = [
  { title: "SAP Enterprise Architecture Framework", track: "Arquitectura SAP" },
  { title: "SAP HANA Cloud Integration", track: "Integraciones SAP" },
  { title: "SAP Enterprise SOA", track: "Arquitectura SAP" },
  { title: "SAP ABAP", track: "Desarrollo SAP" },
  { title: "SAP Workflows", track: "Procesos SAP" },
  { title: "SAP Solution Manager", track: "Gobierno SAP" },
];

/* Iconos auxiliares re-exportados (no críticos) */
export const EXPERIENCE_ICONS = {
  Award,
  BookOpen,
  Briefcase,
  Code2,
  GraduationCap,
  Network,
  ShieldCheck,
  Wand2,
  Workflow,
};
