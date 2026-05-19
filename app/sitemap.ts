import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

const ROUTES = [
  "/",
  "/services",
  "/services/software-factory",
  "/services/sap-integrations",
  "/services/cloud-data",
  "/services/enterprise-ai",
  "/copilot",
  "/copilot/how-it-works",
  "/copilot/use-cases",
  "/copilot/security",
  "/industries",
  "/experience",
  "/contact",
  "/privacy",
  "/legal",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url.replace(/\/$/, "");
  return ROUTES.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency:
      path === "/" || path === "/copilot" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/copilot") ? 0.9 : 0.7,
  }));
}
