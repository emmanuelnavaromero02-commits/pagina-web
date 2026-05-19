export const SITE = {
  name: "Vexar Consulting",
  shortName: "Vexar",
  tagline:
    "Fábrica de software empresarial e IA operativa para compañías que necesitan avanzar rápido.",
  description:
    "Diseñamos, integramos y soportamos soluciones sobre SAP, cloud, datos e inteligencia artificial para convertir procesos complejos en software operativo.",
  product: {
    name: "Copiloto Empresarial",
    shortName: "Copiloto",
    headline:
      "La nueva capa inteligente para consultar, validar, reportar y automatizar procesos sobre tus sistemas actuales.",
  },
  contact: {
    email: "contacto@vexar.com",
    phone: "+52 55 0000 0000",
    address: "Ciudad de México · México",
  },
  social: {
    linkedin: "#",
    github: "#",
  },
} as const;

export const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";
