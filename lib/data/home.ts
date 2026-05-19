import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarClock,
  CheckCircle2,
  Code2,
  Compass,
  Headphones,
  LineChart,
  Plug,
  Sparkles,
  Target,
  Users,
  Wand2,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/* HOME — bloque "Qué hacemos" */
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

/* HOME — Operating model "Cómo trabajamos" */
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

/* HOME — preview de casos de uso */
export const HOME_USE_CASES: {
  title: string;
  icon: LucideIcon;
  href: string;
}[] = [
  { title: "RRHH", icon: Building2, href: "/industries#hr" },
  { title: "Finanzas", icon: BarChart3, href: "/industries#finance" },
  { title: "Operaciones", icon: Workflow, href: "/industries#operations" },
  {
    title: "Reporting ejecutivo",
    icon: LineChart,
    href: "/industries#reporting",
  },
  { title: "Integraciones", icon: Plug, href: "/industries#sap" },
  { title: "Automatización", icon: Wand2, href: "/industries#automation" },
];

/* CONTACT — qué pasa después */
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
