"use client";

import Link from "@/components/ui/SafeLink";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { l, stripLocalePrefix } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { MobileNav } from "./MobileNav";

const PRIORITY_LINKS = [
  { label: "SAP", href: "/services/sap" },
  { label: "AWS", href: "/services/cloud-data/aws" },
  { label: l("Fábrica ABAP + Fiori", "ABAP + Fiori Factory"), href: "/services/software-factory" },
  { label: l("Inteligencia de Decisión", "Decision Intelligence"), href: "/copilot" },
];

export function Navbar() {
  const pathname = usePathname();
  const routePath = stripLocalePrefix(pathname || "/");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);

  const closeMobileNav = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full px-2 py-2 transition-all duration-300 sm:px-4",
          scrolled ? "bg-ink-50/85 backdrop-blur-xl" : "bg-white/80 backdrop-blur",
        )}
      >
      <div
        className={cn(
          "mx-auto flex h-[4.25rem] w-full max-w-[90rem] items-center justify-between gap-6 rounded-2xl border px-3 transition-all duration-300 sm:px-4 lg:px-5",
          scrolled
            ? "border-ink-100/90 bg-white/95 shadow-[0_16px_48px_-34px_rgba(11,14,28,0.55)]"
            : "border-white/80 bg-white/70",
        )}
      >
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        <nav
          aria-label={l("Navegación principal", "Primary navigation")}
          className="hidden xl:flex xl:items-center xl:gap-1"
        >
          {PRIORITY_LINKS.map((item) => {
            const isActive =
              routePath === item.href ||
              (item.href !== "/" && routePath.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-[0.9rem] font-semibold transition-colors",
                  isActive
                    ? "bg-brand-50 text-brand-800"
                    : "text-ink-600 hover:bg-ink-50 hover:text-ink-950",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <LocaleSwitcher />
          <LinkButton
            href="/contact"
            variant="primary"
            size="sm"
            className="whitespace-nowrap"
          >
            {l("Agenda un diagnóstico", "Book a diagnosis")}
          </LinkButton>
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white px-3 text-sm font-semibold text-ink-800 shadow-sm hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800"
            aria-label={l("Abrir todos los servicios", "Open all services")}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={(event) => {
              mobileTriggerRef.current = event.currentTarget;
              setMobileOpen(true);
            }}
          >
            <Menu className="h-5 w-5" />
            {l("Más", "More")}
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-100 bg-white text-ink-800 shadow-sm hover:bg-ink-50 xl:hidden"
          aria-label={l("Abrir menú", "Open menu")}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={(event) => {
            mobileTriggerRef.current = event.currentTarget;
            setMobileOpen(true);
          }}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={closeMobileNav}
        returnFocusRef={mobileTriggerRef}
      />
    </>
  );
}
