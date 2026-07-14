export const LOCALES = ["es", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

export const BUILD_LOCALE: Locale =
  process.env.NEXT_PUBLIC_SITE_LOCALE === "en" ? "en" : DEFAULT_LOCALE;

export const IS_ENGLISH = BUILD_LOCALE === "en";

export function l(es: string, en: string): string {
  return IS_ENGLISH ? en : es;
}

export const SITE_ORIGIN = "https://www.7businesssolutions.com";

export function localizedPath(locale: Locale, path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "es") return normalized;
  return normalized === "/" ? "/en/" : `/en${normalized}`;
}

export function stripLocalePrefix(path: string): string {
  if (path === "/en" || path === "/en/") return "/";
  return path.startsWith("/en/") ? path.slice(3) || "/" : path;
}

export function canonicalUrl(locale: Locale, path = "/"): string {
  return new URL(localizedPath(locale, path), SITE_ORIGIN).toString();
}

export function languageAlternates(path = "/") {
  return {
    canonical: canonicalUrl(BUILD_LOCALE, path),
    languages: {
      es: canonicalUrl("es", path),
      en: canonicalUrl("en", path),
      "x-default": canonicalUrl("es", path),
    },
  } as const;
}

export const IS_LAUNCH_READY = process.env.NEXT_PUBLIC_LAUNCH_READY === "true";
