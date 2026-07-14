"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  BUILD_LOCALE,
  l,
  localizedPath,
  stripLocalePrefix,
  type Locale,
} from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

type LocaleSwitcherProps = {
  className?: string;
};

export function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const [suffix, setSuffix] = useState("");
  const equivalentPath = stripLocalePrefix(pathname || "/");

  useEffect(() => {
    setSuffix(`${window.location.search}${window.location.hash}`);
  }, [pathname]);

  const label = l("Selector de idioma", "Language selector");
  const languageNames: Record<Locale, string> = {
    es: "ES",
    en: "EN",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-lg border border-ink-200 bg-white p-0.5 text-xs font-semibold",
        className,
      )}
      aria-label={label}
    >
      {(["es", "en"] as const).map((locale) => {
        const active = BUILD_LOCALE === locale;
        const itemClassName = cn(
          "inline-flex h-7 min-w-8 items-center justify-center rounded-md px-2 transition-colors",
          active
            ? "bg-ink-900 text-white"
            : "text-ink-600 hover:bg-ink-50 hover:text-ink-950",
        );

        return active ? (
          <span
            key={locale}
            lang={locale}
            aria-current="page"
            className={itemClassName}
          >
            {languageNames[locale]}
          </span>
        ) : (
          <a
            key={locale}
            href={`${localizedPath(locale, equivalentPath)}${suffix}`}
            hrefLang={locale}
            lang={locale}
            aria-label={
              locale === "es" ? "Ver esta página en español" : "View this page in English"
            }
            className={itemClassName}
          >
            {languageNames[locale]}
          </a>
        );
      })}
    </div>
  );
}
