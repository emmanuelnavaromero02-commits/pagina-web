"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

type Metric = {
  title: string;
  before: string;
  after: string;
  impact: string;
  /** Baseline (manual effort = 100). */
  startPct: number;
  /** Indicative end value. Orientative — never a guarantee. */
  endPct: number;
};

const METRICS: Metric[] = [
  {
    title: "Manual Report Preparation",
    before: "6–8 Hours",
    after: "Minutes",
    impact: "Less Manual Consolidation",
    startPct: 100,
    endPct: 18,
  },
  {
    title: "Audit Evidence Retrieval",
    before: "1–2 Days",
    after: "Minutes with Traceable Sources",
    impact: "Faster Audit Response",
    startPct: 100,
    endPct: 14,
  },
  {
    title: "Financial Reconciliation Review",
    before: "2–3 Days",
    after: "Guided Review",
    impact: "Less Rework, Faster Validation",
    startPct: 100,
    endPct: 22,
  },
  {
    title: "Operational Incident Research",
    before: "Hours or a Full Day",
    after: "Minutes with Cross-System Evidence",
    impact: "Faster Root-Cause Visibility",
    startPct: 100,
    endPct: 20,
  },
  {
    title: "Analyst Onboarding",
    before: "Months Learning Tables and Rules",
    after: "Guided Source Discovery",
    impact: "Lower Learning Curve",
    startPct: 100,
    endPct: 28,
  },
  {
    title: "Executive Reporting",
    before: "Manual Decks and Spreadsheets",
    after: "Draft Reports with Evidence",
    impact: "Faster Decision Support",
    startPct: 100,
    endPct: 24,
  },
  {
    title: "Process Control",
    before: "Manual Follow-Up",
    after: "Traceable Tasks, Approvals, and Logs",
    impact: "Better Operational Control",
    startPct: 100,
    endPct: 18,
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
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Section className="bg-white" id="metrics">
      <SectionHeader
        eyebrow="Operational Impact, Visualized"
        title="Manual hours collapse into traceable minutes."
        description="Seven indicative scenarios showing how Enterprise Copilot reduces manual work when it is connected to real systems, data, permissions, and rules."
      />

      <div
        ref={ref}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {METRICS.map((m, idx) => {
          const width = active ? m.endPct : m.startPct;
          const delayMs = idx * 120;
          return (
            <article
              key={m.title}
              className="relative rounded-2xl border border-ink-100 bg-white p-6 shadow-soft"
            >
              <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-brand-700 px-2.5 py-0.5 text-[10px] font-semibold tracking-widest text-white">
                {String(idx + 1).padStart(2, "0")}
              </span>

              <p className="mt-2 font-display text-base font-semibold text-ink-950">
                {m.title}
              </p>

              <div className="mt-4 space-y-1.5 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                    Before
                  </span>
                  <span className="inline-flex items-center rounded-full border border-ink-200 bg-ink-50 px-2.5 py-0.5 font-medium text-ink-700 line-through decoration-1 decoration-ink-400">
                    {m.before}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-700">
                    With Copilot
                  </span>
                  <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-2.5 py-0.5 font-semibold text-brand-800">
                    {m.after}
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-baseline justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                  <span>Manual Effort Baseline</span>
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

              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-accent-400/40 bg-accent-400/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-600">
                <ArrowRight className="h-3 w-3" />
                {m.impact}
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink-500">
        Indicative scenarios. Actual impact depends on connected sources,
        data quality, permissions, process complexity, and pilot scope.
        Estimates are for commercial discussion — editable after diagnosis.
      </p>
    </Section>
  );
}
