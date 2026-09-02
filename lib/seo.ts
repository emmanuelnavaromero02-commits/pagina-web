import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import {
  BUILD_LOCALE,
  IS_LAUNCH_READY,
  canonicalUrl,
  languageAlternates,
} from "@/lib/i18n/config";

type PageMetadataInput = {
  path: string;
  title: string;
  description: string;
  index?: boolean;
};

export function createPageMetadata({
  path,
  title,
  description,
  index = IS_LAUNCH_READY,
}: PageMetadataInput): Metadata {
  const url = canonicalUrl(BUILD_LOCALE, path);
  const image = BUILD_LOCALE === "es" ? "/og-portfolio.png" : "/og-en.png";
  const imageSize = BUILD_LOCALE === "es"
    ? { width: 1731, height: 909 }
    : { width: 1200, height: 630 };

  return {
    title,
    description,
    alternates: languageAlternates(path),
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title,
      description,
      images: [
        {
          url: image,
          ...imageSize,
          alt: `${SITE.name} · ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: { index, follow: index },
  };
}
