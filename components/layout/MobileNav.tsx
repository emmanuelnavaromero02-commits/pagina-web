"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { NAVIGATION } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

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

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Primary menu"
    >
      <div
        className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-elevate">
        <div className="flex h-16 items-center justify-between border-b border-ink-100 px-4">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-800 hover:bg-ink-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav
          aria-label="Primary"
          className="flex-1 overflow-y-auto px-2 py-4"
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
                      className="block rounded-lg px-3 py-3 text-base font-medium text-ink-900 hover:bg-ink-50"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const isOpen = expanded === item.href;
              return (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : item.href)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-ink-900 hover:bg-ink-50"
                    aria-expanded={isOpen}
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
                    <div className="mt-1 space-y-4 rounded-lg bg-ink-50/60 p-3">
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
                                  className="block rounded-md px-2 py-1.5 text-sm text-ink-800 hover:bg-white"
                                >
                                  {link.label}
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

        <div className="border-t border-ink-100 p-4">
          <LinkButton
            href="/contact"
            variant="primary"
            size="md"
            className="w-full"
          >
            Request a diagnosis
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
