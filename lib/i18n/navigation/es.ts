import {
  FOOTER_LINKS as ENGLISH_FOOTER_LINKS,
  NAVIGATION as ENGLISH_NAVIGATION,
  type NavColumn,
  type NavItem,
  type NavLink,
} from "./en";

export type { NavColumn, NavItem, NavLink } from "./en";

const TEXT: Record<string, string> = {
  Services: "Servicios",
  "Complete portfolio": "Portafolio completo",
  "Seven domains. One transformation system.":
    "Siete dominios. Un sistema de transformación.",
  "People, payroll, SAP, software, managed operations, cloud, data, security, and applied intelligence under one delivery model.":
    "Personas, nómina, SAP, software, operación gestionada, nube, datos, seguridad e inteligencia aplicada bajo un mismo modelo de entrega.",
  "Explore all capabilities": "Explorar todas las capacidades",
  "People + SAP Core": "Personas + Núcleo SAP",
  "People, talent & payroll": "Personas, talento y nómina",
  "SuccessFactors, HCM, payroll, time, and talent.":
    "SuccessFactors, HCM, nómina, tiempo y talento.",
  "SAP ERP & S/4HANA": "SAP ERP y S/4HANA",
  "Strategy, implementation, migration, and stabilization.":
    "Estrategia, implementación, migración y estabilización.",
  "AMS & workforce": "AMS y fuerza laboral",
  "24/7 support, Basis, UKG, and workforce operations.":
    "Soporte 24/7, Basis, UKG y operación de fuerza laboral.",
  Engineering: "Ingeniería",
  "ABAP + Fiori Factory": "Fábrica ABAP + Fiori",
  "Industrialized delivery with up to 60% potential savings.":
    "Entrega industrializada con hasta 60% de ahorro potencial.",
  "Custom software": "Software a la medida",
  "Products, portals, applications, APIs, and microservices.":
    "Productos, portales, aplicaciones, APIs y microservicios.",
  "SAP, BTP, middleware, APIs, and third parties.":
    "SAP, BTP, middleware, APIs y terceros.",
  "Cloud + Governance": "Nube + Gobierno",
  "Cloud, data & SAP environments": "Nube, datos y entornos SAP",
  "AWS, Azure, GCP, data platforms, and test environments.":
    "AWS, Azure, GCP, plataformas de datos y entornos de prueba.",
  "AWS migrations": "Migraciones AWS",
  "Assessment, migration, SAP workloads, FinOps, and operations.":
    "Assessment, migración, cargas SAP, FinOps y operación.",
  "Privacy & security": "Privacidad y seguridad",
  "PII, masking, access risk, retention, and compliance.":
    "PII, enmascaramiento, riesgo de acceso, retención y cumplimiento.",
  "Landscape transformation": "Transformación de landscapes",
  "Carve-outs, mergers, consolidation, and selective data.":
    "Carve-outs, fusiones, consolidación y datos selectivos.",
  "Applied Intelligence": "Inteligencia aplicada",
  "AI & enterprise innovation": "IA e innovación empresarial",
  "Generative AI, ML, automation, and custom innovation.":
    "IA generativa, ML, automatización e innovación a la medida.",
  "Decision intelligence": "Inteligencia de decisión",
  "A calibrated quantitative core, agents, and generative AI.":
    "Un núcleo cuantitativo calibrado, agentes e IA generativa.",
  "Interactive demonstration": "Demostración interactiva",
  "See signals become explainable, supervised action.":
    "Mira cómo las señales se convierten en acción explicable y supervisada.",
  "Software factory & integration": "Fábrica de software e integración",
  "Cloud & data": "Nube y datos",
  "Privacy & transformation": "Privacidad y transformación",
  Innovation: "Innovación",
  "New capability": "Nueva capacidad",
  "Decision Intelligence": "Inteligencia de decisión",
  "A calibrated quantitative core, specialist agents, and generative AI over governed enterprise data.":
    "Un núcleo cuantitativo calibrado, agentes especializados e IA generativa sobre datos empresariales gobernados.",
  "Explore the innovation": "Explorar la innovación",
  "Core capabilities": "Capacidades principales",
  "Software factory + operational AI":
    "Fábrica de software + IA operacional",
  "Four service lines with dedicated specialized pages — engineering, SAP integration, cloud and data, and applied AI.":
    "Cuatro líneas de servicio con páginas especializadas: ingeniería, integración SAP, nube y datos, e IA aplicada.",
  "View all services": "Ver todos los servicios",
  "Software Factory": "Fábrica de Software",
  "Custom development": "Desarrollo a medida",
  "Internal platforms and tailored applications.":
    "Plataformas internas y aplicaciones a medida.",
  "APIs & microservices": "APIs y microservicios",
  "Reusable services with clear contracts.":
    "Servicios reutilizables con contratos claros.",
  "Support and evolution": "Soporte y evolución",
  "L2/L3 support and an agreed evolution roadmap.":
    "Soporte L2/L3 y hoja de ruta de evolución acordada.",
  "Enterprise Integration": "Integración Empresarial",
  "SAP On-Premise": "SAP On-Premise",
  "ECC, S/4HANA, and the core modules.":
    "ECC, S/4HANA y los módulos principales.",
  "SAP Cloud": "SAP Cloud",
  "Hybrid cloud-to-on-prem integration.":
    "Integración híbrida entre nube y entornos locales.",
  "SAP BTP": "SAP BTP",
  "Extensions, CAP, workflow, build.":
    "Extensiones, CAP, flujos de trabajo y desarrollo.",
  "Third-party systems": "Sistemas de terceros",
  "CRMs, banks, e-commerce, legacy.":
    "CRM, banca, comercio electrónico y sistemas legados.",
  "Cloud & Governed Data": "Nube y Datos Gobernados",
  AWS: "AWS",
  "S3, CloudFront, Lambda, API Gateway, SES.":
    "S3, CloudFront, Lambda, API Gateway y SES.",
  "Data pipelines": "Flujos de datos",
  "Ingestion, transformation, quality.":
    "Ingesta, transformación y calidad.",
  "Trusted reporting": "Informes confiables",
  "Semantic layer and auditable BI.":
    "Capa semántica y BI auditable.",
  "Operational AI": "IA Operacional",
  "Generative AI": "IA generativa",
  "LLMs with corporate RAG and citations.":
    "Modelos LLM con RAG corporativo y citas.",
  "Intelligent automation": "Automatización inteligente",
  "Assisted flows with human approval.":
    "Flujos asistidos con aprobación humana.",
  "AI decision agents": "Agentes de decisión IA",
  "Generative, agentic, and quantitative intelligence.":
    "Inteligencia generativa, agéntica y cuantitativa.",
  "AI Decision Agents": "Agentes de Decisión IA",
  "New release": "Novedad",
  "Generative AI, specialized agents, and quantitative models over governed enterprise data.":
    "IA generativa, agentes especializados y modelos cuantitativos sobre datos empresariales gobernados.",
  "Explore the release": "Explorar la novedad",
  System: "Sistema",
  Overview: "Descripción general",
  "From governed data to trusted action.":
    "De datos gobernados a acciones confiables.",
  "Operational impact": "Impacto operacional",
  "Before vs with Agentes de Decisión IA.":
    "Comparativa antes y después de Agentes de Decisión IA.",
  "What it solves": "Qué resuelve",
  "Agents, scenarios, and controlled action.":
    "Agentes, escenarios y acción controlada.",
  Capabilities: "Capacidades",
  "Operational scenario": "Caso operativo",
  "From fragmented evidence to a traceable decision.":
    "De evidencia fragmentada a una decisión trazable.",
  "Use cases": "Casos de uso",
  "Finance, HR, operations, reporting.":
    "Finanzas, RR. HH., operaciones e informes.",
  "Security & permissions": "Seguridad y permisos",
  "Roles, traceability, validations.":
    "Roles, trazabilidad y validaciones.",
  "Get started": "Primeros pasos",
  "Request a pilot": "Solicitar un piloto",
  "What we connect, what we measure.":
    "Qué conectamos y qué medimos.",
  Industries: "Sectores",
  "Business areas": "Áreas de negocio",
  "Eight specialized areas": "Ocho áreas especializadas",
  "Each functional and cross-cutting area has its own dedicated page with problem, capabilities, deliverables, and Copilot connection.":
    "Cada área funcional y transversal tiene una página con su problemática, capacidades, entregables y conexión con los agentes de decisión IA.",
  "View use cases": "Ver casos de uso",
  Finance: "Finanzas",
  "Closings, reconciliations, variance analysis.":
    "Cierres, conciliaciones y análisis de variaciones.",
  Operations: "Operaciones",
  "Status, alerts, cross-system validation.":
    "Estados, alertas y validación entre sistemas.",
  "HR / Payroll": "RR. HH. / Nómina",
  "Headcount, absences, master data.":
    "Plantilla, ausencias y datos maestros.",
  "Executive reporting": "Informes ejecutivos",
  "Dashboards, KPIs, traceability.":
    "Paneles, KPI y trazabilidad.",
  "Cross-cutting capabilities": "Capacidades transversales",
  "Process automation": "Automatización de procesos",
  "Assisted flows, less manual work.":
    "Flujos asistidos y menos trabajo manual.",
  "Data governance": "Gobierno de datos",
  "Catalog, rules, traceability.":
    "Catálogo, reglas y trazabilidad.",
  Experience: "Experiencia",
  Contact: "Contacto",
  Company: "Empresa",
  Legal: "Legal",
  "Privacy Notice": "Aviso de privacidad",
  "Legal Notice": "Aviso legal",
  "Cookie Policy": "Política de cookies",
  Security: "Seguridad",
};

function translate(text: string): string {
  return TEXT[text] ?? text;
}

function translateLink(link: NavLink): NavLink {
  return {
    ...link,
    label: translate(link.label),
    description: link.description
      ? translate(link.description)
      : undefined,
  };
}

function translateColumn(column: NavColumn): NavColumn {
  return {
    ...column,
    title: translate(column.title),
    links: column.links.map(translateLink),
  };
}

function translateItem(item: NavItem): NavItem {
  return {
    ...item,
    label: translate(item.label),
    columns: item.columns?.map(translateColumn),
    featured: item.featured
      ? {
          ...item.featured,
          eyebrow: translate(item.featured.eyebrow),
          title: translate(item.featured.title),
          description: translate(item.featured.description),
          cta: translate(item.featured.cta),
        }
      : undefined,
  };
}

export const NAVIGATION: NavItem[] = ENGLISH_NAVIGATION.map(translateItem);

export const FOOTER_LINKS: { title: string; links: NavLink[] }[] =
  ENGLISH_FOOTER_LINKS.map((group) => ({
    title: translate(group.title),
    links: group.links.map(translateLink),
  }));
