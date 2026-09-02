import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/i18n/config";
import { ALL_ROUTES } from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ALL_ROUTES.flatMap((path) =>
    (["es", "en"] as const).map((locale) => ({
      url: canonicalUrl(locale, path),
      changeFrequency:
        path === "/" || path === "/copilot" ? "weekly" as const : "monthly" as const,
      priority:
        path === "/" ? 1 : path.startsWith("/copilot") ? 0.9 : 0.7,
      alternates: {
        languages: {
          es: canonicalUrl("es", path),
          en: canonicalUrl("en", path),
          "x-default": canonicalUrl("es", path),
        },
      },
    })),
  );
}
