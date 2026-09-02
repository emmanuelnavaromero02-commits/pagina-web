"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TabDef = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: TabDef[];
  initialId?: string;
  ariaLabel: string;
  /** "underline" (default) = light variant; "pill-dark" = dark variant. */
  variant?: "underline" | "pill-dark";
  className?: string;
};

export function Tabs({
  tabs,
  initialId,
  ariaLabel,
  variant = "underline",
  className,
}: TabsProps) {
  const groupId = useId();
  const [activeId, setActiveId] = useState<string>(
    initialId ?? tabs[0]?.id ?? "",
  );
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  if (tabs.length === 0) return null;

  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const index = tabs.findIndex((t) => t.id === activeId);
    let nextIndex = index;
    if (e.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (e.key === "ArrowLeft")
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (e.key === "Home") nextIndex = 0;
    if (e.key === "End") nextIndex = tabs.length - 1;
    const nextId = tabs[nextIndex]!.id;
    setActiveId(nextId);
    refs.current[nextId]?.focus();
  };

  const dark = variant === "pill-dark";

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label={ariaLabel}
        onKeyDown={handleKey}
        className={cn(
          "flex w-full gap-1 overflow-x-auto",
          dark
            ? "rounded-full border border-white/10 bg-white/5 p-1"
            : "border-b border-ink-100",
        )}
      >
        {tabs.map((t) => {
          const isActive = t.id === activeId;
          return (
            <button
              key={t.id}
              ref={(el) => {
                refs.current[t.id] = el;
              }}
              role="tab"
              type="button"
              id={`tab-${groupId}-${t.id}`}
              aria-controls={`panel-${groupId}-${t.id}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(t.id)}
              className={cn(
                "shrink-0 whitespace-nowrap text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                dark
                  ? "rounded-full px-4 py-2 focus-visible:ring-accent-400 focus-visible:ring-offset-ink-950"
                  : "relative -mb-px border-b-2 px-4 py-3 focus-visible:ring-brand-300",
                dark
                  ? isActive
                    ? "bg-white text-ink-950 shadow-soft"
                    : "text-ink-200 hover:text-white"
                  : isActive
                    ? "border-brand-700 text-brand-800"
                    : "border-transparent text-ink-600 hover:text-ink-900",
              )}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {tabs.map((t) => {
        const isActive = t.id === activeId;
        return (
          <div
            key={t.id}
            role="tabpanel"
            id={`panel-${groupId}-${t.id}`}
            aria-labelledby={`tab-${groupId}-${t.id}`}
            hidden={!isActive}
            className="mt-8 focus:outline-none"
            tabIndex={0}
          >
            {isActive ? t.content : null}
          </div>
        );
      })}
    </div>
  );
}
