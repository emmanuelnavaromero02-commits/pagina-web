import {
  FOOTER_LINKS as ENGLISH_FOOTER_LINKS,
  NAVIGATION as ENGLISH_NAVIGATION,
  type NavColumn,
  type NavItem,
  type NavLink,
} from "./en";

export type { NavColumn, NavItem, NavLink } from "./en";

const TEXT: Record<string, string> = {
  Home: "Inicio",
  Services: "Servicios",
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
  "Enterprise portals": "Portales empresariales",
  "Corporate front-ends and internal portals.":
    "Interfaces corporativas y portales internos.",
  "Internal applications": "Aplicaciones internas",
  "Apps for finance, HR, and operations.":
    "Aplicaciones para finanzas, RR. HH. y operaciones.",
  "APIs & microservices": "APIs y microservicios",
  "Reusable services with clear contracts.":
    "Servicios reutilizables con contratos claros.",
  "Evolutionary support": "Soporte evolutivo",
  "L2/L3 support and quarterly roadmap.":
    "Soporte L2/L3 y hoja de ruta trimestral.",
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
  "ABAP / RFC / IDocs": "ABAP / RFC / IDocs",
  "SAP development and technical integration.":
    "Desarrollo SAP e integración técnica.",
  "Enterprise middleware": "Middleware empresarial",
  "Boomi, HCI/CPI, PI/PO, IBM WebSphere.":
    "Boomi, HCI/CPI, PI/PO e IBM WebSphere.",
  "Third-party systems": "Sistemas de terceros",
  "CRMs, banks, e-commerce, legacy.":
    "CRM, banca, comercio electrónico y sistemas legados.",
  "SAP SuccessFactors": "SAP SuccessFactors",
  "Employee Central and HR data.":
    "Employee Central y datos de RR. HH.",
  "SAP HCM": "SAP HCM",
  "HCM On-Premise and HR processes.":
    "HCM On-Premise y procesos de RR. HH.",
  "Cloud & Governed Data": "Nube y Datos Gobernados",
  AWS: "AWS",
  "S3, CloudFront, Lambda, API Gateway, SES.":
    "S3, CloudFront, Lambda, API Gateway y SES.",
  Azure: "Azure",
  "App Service, Functions, SQL, Synapse.":
    "App Service, Functions, SQL y Synapse.",
  "Google Cloud (GCP)": "Google Cloud (GCP)",
  "BigQuery, Cloud Run, Pub/Sub.": "BigQuery, Cloud Run y Pub/Sub.",
  "Enterprise databases": "Bases de datos empresariales",
  "Oracle, SQL Server, PostgreSQL, HANA.":
    "Oracle, SQL Server, PostgreSQL y HANA.",
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
  "Machine learning": "Aprendizaje automático",
  "Productive ML with MLOps.": "ML productivo con MLOps.",
  "Intelligent automation": "Automatización inteligente",
  "Assisted flows with human approval.":
    "Flujos asistidos con aprobación humana.",
  "Internal assistants": "Asistentes internos",
  "Search and support over private data.":
    "Búsqueda y soporte sobre datos privados.",
  "Operational copilots": "Copilotos operacionales",
  "Where Enterprise Copilot lives.":
    "El ámbito de Enterprise Copilot.",
  "Enterprise Copilot": "Enterprise Copilot",
  "Flagship product": "Producto principal",
  "Operational AI capability that connects SAP, data, APIs, and reports — with permissions, validations, and traceability.":
    "Capacidad de IA operacional que conecta SAP, datos, APIs e informes, con permisos, validaciones y trazabilidad.",
  "Explore the Copilot": "Conocer Enterprise Copilot",
  Product: "Producto",
  Overview: "Descripción general",
  "From manual work to traceable, governed answers.":
    "Del trabajo manual a respuestas trazables y gobernadas.",
  "Operational impact": "Impacto operacional",
  "Before vs with Enterprise Copilot.":
    "Comparativa antes y después de Enterprise Copilot.",
  "How it works": "Cómo funciona",
  "Architecture and operational flow.":
    "Arquitectura y flujo operacional.",
  Application: "Aplicación",
  "Conceptual demo": "Demostración conceptual",
  "A walk-through interaction with sources and audit.":
    "Recorrido de una interacción con fuentes y auditoría.",
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
  "Talk to the team": "Hablar con el equipo",
  "Scoped conversation with your team.":
    "Conversación enfocada con tu equipo.",
  Industries: "Sectores",
  "Eight specialized areas": "Ocho áreas especializadas",
  "Each functional and cross-cutting area has its own dedicated page with problem, capabilities, deliverables, and Copilot connection.":
    "Cada área funcional y transversal tiene una página con su problemática, capacidades, entregables y conexión con Enterprise Copilot.",
  "View use cases": "Ver casos de uso",
  "Business areas": "Áreas de negocio",
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
  "SAP integrations": "Integraciones SAP",
  "ABAP, RFC, IDocs, BTP, middleware.":
    "ABAP, RFC, IDocs, BTP y middleware.",
  "Process automation": "Automatización de procesos",
  "Assisted flows, less manual work.":
    "Flujos asistidos y menos trabajo manual.",
  "Internal support": "Soporte interno",
  "Helpdesk and ITSM continuity.":
    "Mesa de ayuda y continuidad ITSM.",
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
