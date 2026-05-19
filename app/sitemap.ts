import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import {
  CLOUD_DATA_PAGES,
  ENTERPRISE_AI_PAGES,
  SAP_INTEGRATIONS_PAGES,
  SOFTWARE_FACTORY_PAGES,
} from "@/lib/data/specialized-services";
import { INDUSTRY_PAGES } from "@/lib/data/industry-pages";

export const dynamic = "force-static";

const STATIC_ROUTES = [
  "/",
  "/services",
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
  "/contact",
  "/privacy",
  "/legal",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url.replace(/\/$/, "");

  const dynamicRoutes = [
    ...Object.keys(SOFTWARE_FACTORY_PAGES).map(
      (s) => `/services/software-factory/${s}`,
    ),
    ...Object.keys(SAP_INTEGRATIONS_PAGES).map(
      (s) => `/services/sap-integrations/${s}`,
    ),
    ...Object.keys(CLOUD_DATA_PAGES).map((s) => `/services/cloud-data/${s}`),
    ...Object.keys(ENTERPRISE_AI_PAGES).map(
      (s) => `/services/enterprise-ai/${s}`,
    ),
    ...Object.keys(INDUSTRY_PAGES).map((s) => `/industries/${s}`),
  ];

  const all = [...STATIC_ROUTES, ...dynamicRoutes];

  return all.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency:
      path === "/" || path === "/copilot" ? "weekly" : "monthly",
    priority:
      path === "/" ? 1 : path.startsWith("/copilot") ? 0.9 : 0.7,
  }));
}
