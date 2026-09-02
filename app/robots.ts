import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { IS_LAUNCH_READY } from "@/lib/i18n/config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = SITE.url.replace(/\/$/, "");
  return {
    rules: IS_LAUNCH_READY
      ? [{ userAgent: "*", allow: "/" }]
      : [{ userAgent: "*", disallow: "/" }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
