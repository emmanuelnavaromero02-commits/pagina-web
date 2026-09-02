import type { AnchorHTMLAttributes, ReactNode } from "react";

type SafeLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

const localePrefix =
  process.env.NEXT_PUBLIC_SITE_LOCALE === "en" ? "/en" : "";

function staticHref(href: string) {
  if (!href.startsWith("/") || href.startsWith("//")) return href;

  const suffixIndex = href.search(/[?#]/);
  const pathname = suffixIndex === -1 ? href : href.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? "" : href.slice(suffixIndex);
  const localizedPath =
    localePrefix && !pathname.startsWith(`${localePrefix}/`)
      ? pathname === "/"
        ? `${localePrefix}/`
        : `${localePrefix}${pathname}`
      : pathname;
  const lastSegment = localizedPath.split("/").at(-1) ?? "";
  const needsTrailingSlash =
    localizedPath !== "/" &&
    !localizedPath.endsWith("/") &&
    !lastSegment.includes(".");

  return `${localizedPath}${needsTrailingSlash ? "/" : ""}${suffix}`;
}

/**
 * Uses a native document navigation so static hosting never exposes Next.js'
 * internal RSC payload (`index.txt`) as a browser destination.
 */
export default function SafeLink({ href, children, ...props }: SafeLinkProps) {
  return (
    <a href={staticHref(href)} {...props}>
      {children}
    </a>
  );
}
