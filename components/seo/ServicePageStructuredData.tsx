import type { SpecializedPage } from "@/components/services/SpecializedServicePage";
import {
  BUILD_LOCALE,
  SITE_ORIGIN,
  canonicalUrl,
  l,
} from "@/lib/i18n/config";

export function ServicePageStructuredData({ data }: { data: SpecializedPage }) {
  const root = data.rootBreadcrumb ?? {
    label: l("Servicios", "Services"),
    href: "/services",
  };
  const withTrailingSlash = (path: string) =>
    path === "/" ? path : `${path.replace(/\/$/, "")}/`;
  const path = withTrailingSlash(`${data.parent.href}/${data.slug}`);
  const url = canonicalUrl(BUILD_LOCALE, path);
  const breadcrumbs = [
    { name: l("Inicio", "Home"), href: "/" },
    { name: root.label, href: root.href },
    ...(data.parent.href !== root.href
      ? [{ name: data.parent.label, href: data.parent.href }]
      : []),
    { name: data.title, href: path },
  ];
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: data.title,
        description: data.intro,
        url,
        provider: { "@id": `${SITE_ORIGIN}/#organization` },
        areaServed: ["MX", "ES"],
        availableLanguage: ["es", "en"],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: canonicalUrl(BUILD_LOCALE, withTrailingSlash(item.href)),
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
