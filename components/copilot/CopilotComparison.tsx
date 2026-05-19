import { Check, X } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { COPILOT_IS, COPILOT_ISNT } from "@/lib/site-data";

export function CopilotComparison() {
  return (
    <Section id="what" className="bg-white">
      <SectionHeader
        eyebrow="Qué es y qué no es"
        title="Una capa de IA operativa, no un chatbot genérico"
        description="Definimos el alcance del Copiloto Empresarial de forma explícita para evitar expectativas que no se cumplen y entregas que decepcionan."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-brand-200 bg-brand-50/40 p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            Qué SÍ es
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold text-ink-950">
            Una capa de IA conectada a tu operación
          </h3>
          <ul className="mt-5 space-y-3">
            {COPILOT_IS.map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm text-ink-800">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-ink-200 bg-white p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
            Qué NO es
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold text-ink-950">
            Lo que decidimos no construir
          </h3>
          <ul className="mt-5 space-y-3">
            {COPILOT_ISNT.map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm text-ink-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-200 text-ink-700">
                  <X className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
