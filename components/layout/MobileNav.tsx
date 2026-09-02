"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type RefObject } from "react";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { BUILD_LOCALE, l } from "@/lib/i18n/config";
import { NAVIGATION as EN_NAVIGATION } from "@/lib/i18n/navigation/en";
import { NAVIGATION as ES_NAVIGATION } from "@/lib/i18n/navigation/es";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { LocaleSwitcher } from "./LocaleSwitcher";

const NAVIGATION = BUILD_LOCALE === "es" ? ES_NAVIGATION : EN_NAVIGATION;

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
};

export function MobileNav({ open, onClose, returnFocusRef }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) setExpanded(null);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const returnFocusElement = returnFocusRef.current;
    const focusFrame = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", onKeyDown);
      returnFocusElement?.focus();
    };
  }, [onClose, open, returnFocusRef]);

  if (!open) return null;

  return (
    <div
      id="mobile-navigation"
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label={l("Menú principal", "Primary menu")}
    >
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute inset-0 bg-ink-950/60 backdrop-blur-md"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ink-50 shadow-float"
      >
        <div className="flex h-20 items-center justify-between border-b border-ink-100 bg-white px-4">
          <Logo wordmarkClassName="hidden min-[360px]:inline" />
          <div className="flex items-center gap-2">
            <LocaleSwitcher />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label={l("Cerrar menú", "Close menu")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-100 text-ink-800 hover:bg-ink-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <nav
          aria-label={l("Navegación principal", "Primary navigation")}
          className="flex-1 overflow-y-auto px-3 py-5"
        >
          <ul className="space-y-1">
            {NAVIGATION.map((item) => {
              const hasMenu = !!item.columns;
              if (!hasMenu) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block rounded-xl px-4 py-3 text-base font-semibold text-ink-900 hover:bg-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const isOpen = expanded === item.href;
              const panelId = `mobile-nav-${item.href.replace(/[^a-z0-9]/gi, "-")}`;
              return (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : item.href)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-ink-900 hover:bg-white"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-ink-500 transition-transform",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                  {isOpen && item.columns ? (
                    <div
                      id={panelId}
                      className="mt-1 space-y-4 rounded-2xl border border-ink-100 bg-white p-4 shadow-sm"
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center justify-between rounded-md bg-white px-3 py-2 text-sm font-semibold text-brand-700"
                      >
                        {l("Ver descripción general", "View overview")}
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                      {item.columns.map((col) => (
                        <div key={col.title}>
                          {col.href ? (
                            <Link
                              href={col.href}
                              onClick={onClose}
                              className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-brand-700"
                            >
                              {col.title}
                            </Link>
                          ) : (
                            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                              {col.title}
                            </p>
                          )}
                          <ul className="space-y-0.5">
                            {col.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  onClick={onClose}
                                  className="block rounded-lg px-2 py-2.5 text-base font-medium text-ink-800 hover:bg-ink-50"
                                >
                                  <span className="block">{link.label}</span>
                                  {link.description ? <span className="mt-1 block text-sm font-normal leading-relaxed text-ink-500">{link.description}</span> : null}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-ink-100 bg-white p-4">
          <LinkButton
            href="/contact"
            variant="primary"
            size="md"
            className="w-full"
          >
            {l("Agenda un diagnóstico", "Book a diagnosis")}
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
