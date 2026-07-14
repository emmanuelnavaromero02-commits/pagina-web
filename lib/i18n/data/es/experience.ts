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

/* Headline highlights — four service fronts */
export const EXPERIENCE_HIGHLIGHTS: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Contextos empresariales",
    description:
      "Un modelo de entrega pensado para organizaciones que necesitan gobierno, integración y continuidad operativa.",
    icon: Building2,
  },
  {
    title: "Alcance SAP de principio a fin",
    description:
      "El alcance propuesto puede cubrir SAP On-Premise, SAP Cloud y SAP BTP: trabajo funcional, desarrollo, integración, gobierno y operaciones.",
    icon: Boxes,
  },
  {
    title: "Modelo de fábrica de software",
    description:
      "Un modelo de entrega con backlog priorizado, especialistas dedicados, QA, despliegue controlado y soporte evolutivo.",
    icon: Factory,
  },
  {
    title: "IA aplicada a las operaciones",
    description:
      "Casos de uso de IA generativa, ML y automatización para procesos de RR. HH., finanzas, reportes y soporte interno.",
    icon: Sparkles,
  },
];

/* Service capabilities (used in home and experience) */
export const EXPERIENCE_ROLES: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Coordinación técnica",
    description:
      "Coordinación de arquitectura, integración y operaciones para programas de SAP y nube.",
    icon: Compass,
  },
  {
    title: "Preventa empresarial",
    description:
      "Definición de alcance, arquitectura y modelo de entrega para propuestas empresariales.",
    icon: Target,
  },
  {
    title: "Organización de equipos",
    description:
      "Organización de fábricas de software y equipos especializados en SAP, nube, datos e IA.",
    icon: Users,
  },
  {
    title: "Entrega SAP",
    description:
      "Alcance de entrega en ECC, S/4HANA, BTP, SuccessFactors, Ariba e IBP, con foco en integración y operaciones.",
    icon: Boxes,
  },
  {
    title: "Integraciones empresariales",
    description:
      "Patrones de integración con Boomi, HCI/CPI, PI/PO, IBM WebSphere y MQ para conectar SAP con sistemas empresariales.",
    icon: Plug,
  },
  {
    title: "Desarrollo a medida",
    description:
      "Portales internos, aplicaciones operativas y APIs reutilizables en Java, .NET, Node y TypeScript.",
    icon: Code2,
  },
  {
    title: "IA aplicada",
    description:
      "Asistentes internos, RAG sobre datos privados y copilotos operativos diseñados para la trazabilidad.",
    icon: Brain,
  },
  {
    title: "Operaciones y soporte",
    description:
      "Continuidad operativa con niveles de servicio acordados, monitoreo y backlog de evolución.",
    icon: Headphones,
  },
];

/* No se publica historial de clientes o sectores sin evidencia atribuible. */
export const EXPERIENCE_CLIENTS: string[] = [];

/* Tabs of leadership and ways of working on /experience */
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
    eyebrow: "Coordinación técnica",
    title: "Continuidad de entrega desde el alcance hasta la operación",
    description:
      "El enfoque propuesto conecta alcance, diseño de la solución, implementación, soporte y evolución bajo un mismo modelo de entrega.",
    bullets: [
      "Coordinación técnica y diseño de soluciones empresariales.",
      "Participación directa de responsables técnicos durante el alcance.",
      "Organización de equipos multidisciplinarios.",
      "Seguimiento de presupuesto y alcance contractual.",
      "Continuidad técnica durante la implementación, el soporte y la evolución.",
    ],
    icon: Compass,
  },
  {
    id: "factory",
    eyebrow: "Fábricas de software",
    title: "Operación continua, no proyectos aislados",
    description:
      "El modelo operativo puede combinar backlog priorizado, especialistas dedicados, QA, hoja de ruta y soporte evolutivo.",
    bullets: [
      "Modelo de fábrica interno o externo según el proyecto.",
      "Especialistas dedicados con un responsable de entrega.",
      "Backlog priorizado y entregables acordados.",
      "QA, documentación y despliegue controlados.",
      "Soporte L2/L3 y backlog evolutivo.",
    ],
    icon: Factory,
  },
  {
    id: "sap",
    eyebrow: "SAP e integración",
    title: "Núcleo, desarrollo, integración técnica y gobierno",
    description:
      "El alcance del servicio cubre módulos funcionales, desarrollo ABAP, middleware empresarial y gobierno con Solution Manager.",
    bullets: [
      "Núcleo SAP en FI, CO, SD, MM, HCM, PS y PM.",
      "Desarrollo ABAP, reportes, formularios, mejoras y flujos de trabajo.",
      "Integración técnica con RFC, IDocs, BAPIs, SAP JCo y Gateway.",
      "Middleware Boomi, HCI/CPI, PI/PO, IBM WebSphere y MQ.",
      "Gobierno con Solution Manager, ITSM, Change y Test Management.",
    ],
    icon: Boxes,
  },
  {
    id: "ai-cloud",
    eyebrow: "IA, nube y datos",
    title: "Plataformas modernas conectadas a la operación",
    description:
      "La arquitectura propuesta puede combinar IA generativa, machine learning y AWS, Azure, GCP o SAP BTP con fuentes de datos empresariales.",
    bullets: [
      "IA generativa con RAG corporativo y permisos por función.",
      "Machine learning en producción con MLOps.",
      "Arquitecturas en AWS, Azure, GCP y SAP BTP.",
      "Bases de datos empresariales: SQL Server, Oracle, PostgreSQL, MySQL, DB2, Sybase y SAP HANA.",
      "Reportes auditables y trazables hasta los datos de origen.",
    ],
    icon: Cloud,
  },
];

/* Se omiten formación y certificaciones hasta poder atribuirlas. */
export const EXPERIENCE_EDUCATION: { title: string; subtitle?: string }[] = [];

export const EXPERIENCE_CERTIFICATIONS: { title: string; track: string }[] = [];

/* Aux icon exports (legacy) */
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
