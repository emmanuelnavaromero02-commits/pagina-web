import {
  CLOUD_DATA_PAGES,
  ENTERPRISE_AI_PAGES,
  SAP_INTEGRATIONS_PAGES,
  SOFTWARE_FACTORY_PAGES,
} from "@/lib/data/specialized-services";
import { INDUSTRY_PAGES } from "@/lib/data/industry-pages";

export const STATIC_ROUTES = [
  "/",
  "/services",
  "/services/sap",
  "/services/software-factory",
  "/services/sap-integrations",
  "/services/cloud-data",
  "/services/enterprise-ai",
  "/copilot",
  "/copilot/impact",
  "/copilot/how-it-works",
  "/copilot/demo",
  "/copilot/use-cases",
  "/copilot/security",
  "/copilot/pilot",
  "/industries",
  "/experience",
  "/about",
  "/contact",
  "/privacy",
  "/legal",
  "/cookies",
] as const;

export const DYNAMIC_ROUTES = [
  ...Object.keys(SOFTWARE_FACTORY_PAGES).map(
    (slug) => `/services/software-factory/${slug}`,
  ),
  ...Object.keys(SAP_INTEGRATIONS_PAGES).map(
    (slug) => `/services/sap-integrations/${slug}`,
  ),
  ...Object.keys(CLOUD_DATA_PAGES).map(
    (slug) => `/services/cloud-data/${slug}`,
  ),
  ...Object.keys(ENTERPRISE_AI_PAGES).map(
    (slug) => `/services/enterprise-ai/${slug}`,
  ),
  ...Object.keys(INDUSTRY_PAGES).map((slug) => `/industries/${slug}`),
] as const;

export const ALL_ROUTES = [...STATIC_ROUTES, ...DYNAMIC_ROUTES] as const;

if (ALL_ROUTES.length !== 53) {
  throw new Error(`Expected 53 canonical routes, found ${ALL_ROUTES.length}.`);
}
