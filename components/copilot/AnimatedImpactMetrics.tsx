"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

type Metric = {
  title: string;
  before: string;
  after: string;
  /** Where the bar starts (manual effort baseline). 100 = full manual. */
  startPct: number;
  /** Indicative end value (lower = better). Disclaimer: orientative. */
  endPct: number;
};

const METRICS: Metric[] = [
  {
    title: "Manual report preparation",
    before: "6–8 hours",
    after: "Minutes, traceable",
    startPct: 100,
    endPct: 18,
  },
  {
    title: "Audit evidence retrieval",
    before: "1–2 days",
    after: "Minutes with source",
    startPct: 100,
    endPct: 14,
  },
  {
    title: "Financial reconciliation",
    before: "2–3 days",
    after: "Guided review",
    startPct: 100,
    endPct: 22,
  },
  {
    title: "Analyst onboarding",
    before: "Months learning tables",
    after: "Guided source discovery",
    startPct: 100,
    endPct: 28,
  },
];

export function AnimatedImpactMetrics() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setActive(true);
      return;
    }

    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Section className="bg-white" id="metrics">
      <SectionHeader
        eyebrow="Operational impact, visualized"
        title="Where manual hours collapse into traceable minutes."
        description="Indicative scenarios showing how Enterprise Copilot can reduce manual work when it is connected to real systems, data, permissions, and rules."
      />

      <div
        ref={ref}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {METRICS.map((m, idx) => {
          const width = active ? m.endPct : m.startPct;
          const delayMs = idx * 150;
          return (
            <article
              key={m.title}
              className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                {m.title}
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs">
                <span className="inline-flex items-center rounded-full border border-ink-200 bg-ink-50 px-2.5 py-0.5 font-medium text-ink-700 line-through decoration-1 decoration-ink-400">
                  {m.before}
                </span>
                <ArrowRight className="h-3 w-3 text-ink-400" />
                <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-2.5 py-0.5 font-semibold text-brand-800">
                  {m.after}
                </span>
              </div>

              <div className="mt-5">
                <div className="flex items-baseline justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                  <span>Manual effort baseline</span>
                  <span className="tabular-nums text-ink-700">
                    {Math.round(width)}%
                  </span>
                </div>
                <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-ink-100">
                  <div
                    className={cn(
                      "h-full rounded-full bg-gradient-to-r from-brand-700 via-brand-500 to-accent-500 transition-[width] ease-out",
                    )}
                    style={{
                      width: `${width}%`,
                      transitionDuration: "1600ms",
                      transitionDelay: `${delayMs}ms`,
                    }}
                  />
                </div>
              </div>

              <p className="mt-4 text-[11px] leading-relaxed text-ink-500">
                Estimated effort with Enterprise Copilot connected to the
                source. Pilot-dependent.
              </p>
            </article>
          );
        })}
      </div>

      <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink-500">
        These are indicative scenarios. Actual impact depends on connected
        sources, data quality, permissions, process complexity, and pilot
        scope. Estimates are for commercial discussion — editable after
        diagnosis.
      </p>
    </Section>
  );
}
