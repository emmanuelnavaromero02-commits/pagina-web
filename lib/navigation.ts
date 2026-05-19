export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavColumn = {
  title: string;
  href?: string;
  links: NavLink[];
};

export type NavItem = {
  label: string;
  href: string;
  columns?: NavColumn[];
  featured?: {
    eyebrow: string;
    title: string;
    description: string;
    href: string;
    cta: string;
  };
};

export const NAVIGATION: NavItem[] = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Servicios",
    href: "/services",
    featured: {
      eyebrow: "Capacidades centrales",
      title: "Fábrica de software + IA operativa",
      description:
        "Cuatro líneas de servicio que combinan ingeniería, integración SAP, cloud, datos e inteligencia artificial.",
      href: "/services",
      cta: "Ver todos los servicios",
    },
    columns: [
      {
        title: "Fábrica de Software",
        href: "/services/software-factory",
        links: [
          {
            label: "Desarrollo a la medida",
            href: "/services/software-factory#custom",
            description: "Aplicaciones internas y plataformas a medida.",
          },
          {
            label: "Portales empresariales",
            href: "/services/software-factory#portals",
            description: "Front-ends corporativos y portales internos.",
          },
          {
            label: "Aplicaciones internas",
            href: "/services/software-factory#apps",
            description: "Herramientas para equipos de operación.",
          },
          {
            label: "APIs y microservicios",
            href: "/services/software-factory#apis",
            description: "Servicios reutilizables, contratos claros.",
          },
          {
            label: "Soporte evolutivo",
            href: "/services/software-factory#support",
            description: "Continuidad y mejora continua del software.",
          },
        ],
      },
      {
        title: "SAP & Integraciones",
        href: "/services/sap-integrations",
        links: [
          {
            label: "SAP On-Premise",
            href: "/services/sap-integrations#onprem",
            description: "ECC, S/4HANA y módulos clave.",
          },
          {
            label: "SAP Cloud",
            href: "/services/sap-integrations#cloud",
            description: "SuccessFactors, Ariba, IBP y más.",
          },
          {
            label: "SAP BTP",
            href: "/services/sap-integrations#btp",
            description: "Extensiones, CAP, Workflow, Build.",
          },
          {
            label: "ABAP / RFC / IDocs",
            href: "/services/sap-integrations#abap",
            description: "Desarrollo y extensiones en SAP.",
          },
          {
            label: "Boomi / HCI / PI",
            href: "/services/sap-integrations#middleware",
            description: "Integraciones middleware empresariales.",
          },
          {
            label: "Integraciones con terceros",
            href: "/services/sap-integrations#third-party",
            description: "Conectividad con sistemas externos.",
          },
        ],
      },
      {
        title: "Cloud & Data",
        href: "/services/cloud-data",
        links: [
          {
            label: "AWS",
            href: "/services/cloud-data#aws",
            description: "Arquitectura, migración y operación.",
          },
          {
            label: "Azure",
            href: "/services/cloud-data#azure",
            description: "Plataformas corporativas en Azure.",
          },
          {
            label: "GCP",
            href: "/services/cloud-data#gcp",
            description: "Data, analítica e infra en Google Cloud.",
          },
          {
            label: "Bases de datos",
            href: "/services/cloud-data#databases",
            description: "Oracle, SQL Server, PostgreSQL, HANA.",
          },
          {
            label: "Data pipelines",
            href: "/services/cloud-data#pipelines",
            description: "Ingesta, transformación y calidad.",
          },
          {
            label: "Reporting empresarial",
            href: "/services/cloud-data#reporting",
            description: "BI y reportes ejecutivos confiables.",
          },
        ],
      },
      {
        title: "IA Empresarial",
        href: "/services/enterprise-ai",
        links: [
          {
            label: "IA generativa",
            href: "/services/enterprise-ai#genai",
            description: "Soluciones con LLMs en contexto corporativo.",
          },
          {
            label: "Machine learning",
            href: "/services/enterprise-ai#ml",
            description: "Modelos para predicción y clasificación.",
          },
          {
            label: "Automatización inteligente",
            href: "/services/enterprise-ai#automation",
            description: "Procesos asistidos por IA.",
          },
          {
            label: "Asistentes internos",
            href: "/services/enterprise-ai#assistants",
            description: "Chats internos sobre datos propios.",
          },
          {
            label: "Copilotos operativos",
            href: "/copilot",
            description: "Capa IA conectada a sistemas reales.",
          },
        ],
      },
    ],
  },
  {
    label: "Copiloto Empresarial",
    href: "/copilot",
    featured: {
      eyebrow: "Producto estrella",
      title: "Copiloto Empresarial",
      description:
        "La capa de IA operativa que conecta SAP, datos y procesos para consultar, validar y reportar.",
      href: "/copilot",
      cta: "Conocer el copiloto",
    },
    columns: [
      {
        title: "Producto",
        links: [
          {
            label: "Qué es",
            href: "/copilot#what",
            description: "Una capa inteligente, no un chatbot genérico.",
          },
          {
            label: "Qué hace",
            href: "/copilot#does",
            description: "Consulta, valida, reporta y automatiza.",
          },
          {
            label: "Cómo se conecta",
            href: "/copilot/how-it-works",
            description: "SAP, bases de datos, APIs y reportes.",
          },
        ],
      },
      {
        title: "Aplicación",
        links: [
          {
            label: "Casos de uso",
            href: "/copilot/use-cases",
            description: "RRHH, Finanzas, Operaciones, Reporting.",
          },
          {
            label: "Seguridad y permisos",
            href: "/copilot/security",
            description: "Roles, trazabilidad y validaciones.",
          },
        ],
      },
      {
        title: "Empezar",
        links: [
          {
            label: "Demo conceptual",
            href: "/copilot#demo",
            description: "Ver una vista conceptual del producto.",
          },
          {
            label: "Solicitar piloto",
            href: "/contact?topic=copilot",
            description: "Agendar un piloto guiado con tu equipo.",
          },
        ],
      },
    ],
  },
  {
    label: "Industrias",
    href: "/industries",
    featured: {
      eyebrow: "Casos de uso",
      title: "Áreas donde aportamos valor",
      description:
        "RRHH, finanzas, operaciones, reporting, integraciones, automatización y gobierno de datos.",
      href: "/industries",
      cta: "Ver casos de uso",
    },
    columns: [
      {
        title: "Áreas funcionales",
        links: [
          {
            label: "Recursos Humanos",
            href: "/industries#hr",
            description: "Consultas, validaciones y reportes.",
          },
          {
            label: "Finanzas",
            href: "/industries#finance",
            description: "Cierres, conciliaciones y reporting.",
          },
          {
            label: "Operaciones",
            href: "/industries#operations",
            description: "Soporte operativo asistido.",
          },
          {
            label: "Reporting ejecutivo",
            href: "/industries#reporting",
            description: "Tableros y respuestas confiables.",
          },
        ],
      },
      {
        title: "Capacidades transversales",
        links: [
          {
            label: "Integraciones SAP",
            href: "/industries#sap",
            description: "ABAP, RFC, IDocs, BTP y middleware.",
          },
          {
            label: "Automatización de procesos",
            href: "/industries#automation",
            description: "Reducción de tareas manuales.",
          },
          {
            label: "Soporte y mantenimiento",
            href: "/industries#support",
            description: "Continuidad de plataformas.",
          },
          {
            label: "Gobierno de datos",
            href: "/industries#governance",
            description: "Consistencia y trazabilidad.",
          },
        ],
      },
    ],
  },
  {
    label: "Experiencia",
    href: "/experience",
  },
  {
    label: "Contacto",
    href: "/contact",
  },
];

export const FOOTER_LINKS: { title: string; links: NavLink[] }[] = [
  {
    title: "Servicios",
    links: [
      { label: "Fábrica de Software", href: "/services/software-factory" },
      { label: "SAP & Integraciones", href: "/services/sap-integrations" },
      { label: "Cloud & Data", href: "/services/cloud-data" },
      { label: "IA Empresarial", href: "/services/enterprise-ai" },
    ],
  },
  {
    title: "Copiloto Empresarial",
    links: [
      { label: "Producto", href: "/copilot" },
      { label: "Cómo funciona", href: "/copilot/how-it-works" },
      { label: "Casos de uso", href: "/copilot/use-cases" },
      { label: "Seguridad", href: "/copilot/security" },
    ],
  },
  {
    title: "Compañía",
    links: [
      { label: "Experiencia", href: "/experience" },
      { label: "Industrias", href: "/industries" },
      { label: "Contacto", href: "/contact" },
    ],
  },
];
