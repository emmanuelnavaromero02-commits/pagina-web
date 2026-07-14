"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { l } from "@/lib/i18n/config";

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
    title: l("Preparación de informes", "Report preparation"),
    before: l("Consolidación manual", "Manual consolidation"),
    after: l("Borrador con fuentes", "Source-backed draft"),
    impact: l("Menos pasos manuales", "Fewer manual steps"),
    startPct: 100,
    endPct: 18,
  },
  {
    title: l("Obtención de evidencia de auditoría", "Audit evidence retrieval"),
    before: l("Búsqueda entre sistemas", "Cross-system search"),
    after: l("Fuentes trazables", "Traceable sources"),
    impact: l("Respuesta estructurada", "Structured response"),
    startPct: 100,
    endPct: 14,
  },
  {
    title: l("Revisión de conciliación financiera", "Financial reconciliation review"),
    before: l("Cruce manual", "Manual matching"),
    after: l("Revisión guiada", "Guided review"),
    impact: l("Validación trazable", "Traceable validation"),
    startPct: 100,
    endPct: 22,
  },
  {
    title: l("Análisis de incidentes operativos", "Operational incident analysis"),
    before: l("Consulta fuente por fuente", "Source-by-source research"),
    after: l("Evidencia entre sistemas", "Cross-system evidence"),
    impact: l("Contexto centralizado", "Centralized context"),
    startPct: 100,
    endPct: 20,
  },
  {
    title: l("Incorporación de analistas", "Analyst onboarding"),
    before: l("Documentación dispersa", "Scattered documentation"),
    after: l("Exploración guiada", "Guided discovery"),
    impact: l("Acceso contextual", "Contextual access"),
    startPct: 100,
    endPct: 28,
  },
  {
    title: l("Informes ejecutivos", "Executive reporting"),
    before: l("Presentaciones y hojas manuales", "Manual decks and spreadsheets"),
    after: l("Borradores con evidencia", "Evidence-backed drafts"),
    impact: l("Soporte verificable", "Verifiable support"),
    startPct: 100,
    endPct: 24,
  },
  {
    title: l("Control de procesos", "Process control"),
    before: l("Seguimiento manual", "Manual follow-up"),
    after: l("Tareas, aprobaciones y registros", "Tasks, approvals, and logs"),
    impact: l("Control trazable", "Traceable control"),
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
        eyebrow={l("Flujos operativos, visualizados", "Operational workflows, visualized")}
        title={l("Del proceso manual a un flujo asistido y trazable", "From a manual process to an assisted, traceable workflow")}
        description={l("Siete escenarios ilustrativos de cómo Enterprise Copilot puede apoyar el trabajo al conectarse con sistemas, datos, permisos y reglas.", "Seven illustrative scenarios of how Enterprise Copilot can support work when connected to systems, data, permissions, and rules.")}
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
                    {l("Antes", "Before")}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-ink-200 bg-ink-50 px-2.5 py-0.5 font-medium text-ink-700 line-through decoration-1 decoration-ink-400">
                    {m.before}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-700">
                    {l("Con Copilot", "With Copilot")}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-2.5 py-0.5 font-semibold text-brand-800">
                    {m.after}
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-baseline justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                  <span>{l("Representación ilustrativa del flujo", "Illustrative workflow representation")}</span>
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
        {l("Escenarios ilustrativos, sin porcentajes ni resultados garantizados. El impacto real se valida durante el diagnóstico y depende de las fuentes, los datos, los permisos, el proceso y el alcance del piloto.", "Illustrative scenarios with no guaranteed percentages or results. Actual impact is validated during diagnosis and depends on sources, data, permissions, process, and pilot scope.")}
      </p>
    </Section>
  );
}
