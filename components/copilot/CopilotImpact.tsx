import { Section, SectionHeader } from "@/components/ui/Section";
import { COPILOT_IMPACT_ROWS, COPILOT_IMPACT_STATS } from "@/lib/data/copilot";

export function CopilotImpact() {
  return (
    <Section id="impact" className="bg-white">
      <SectionHeader
        eyebrow="Impacto operativo estimado"
        title="Menos trabajo manual, más velocidad de respuesta"
        description="Cuando el Copiloto Empresarial se conecta a sistemas, datos, reportes y reglas reales, reduce trabajo manual, acelera respuestas internas y mejora trazabilidad."
      />

      {/* Stat cards */}
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {COPILOT_IMPACT_STATS.map((stat) => (
          <li
            key={stat.label}
            className="rounded-2xl border border-ink-100 bg-ink-50 p-5 transition-colors hover:border-ink-200"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
              {stat.label}
            </p>
            <p className="mt-2 font-display text-lg font-semibold leading-tight text-ink-950">
              {stat.value}
            </p>
          </li>
        ))}
      </ul>

      {/* Comparison: table on desktop, stacked cards on mobile */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft">
        <div className="hidden grid-cols-[2fr_1fr_1.6fr_1.6fr] gap-4 border-b border-ink-100 bg-ink-50 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-600 lg:grid">
          <div>Tarea empresarial</div>
          <div>Antes</div>
          <div>Con Copiloto Empresarial</div>
          <div>Impacto estimado</div>
        </div>
        <ul className="divide-y divide-ink-100">
          {COPILOT_IMPACT_ROWS.map((row) => (
            <li
              key={row.task}
              className="grid gap-3 px-6 py-5 transition-colors hover:bg-ink-50/40 lg:grid-cols-[2fr_1fr_1.6fr_1.6fr] lg:items-start lg:gap-4"
            >
              <div className="font-display text-sm font-semibold text-ink-950 lg:text-base">
                {row.task}
              </div>
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500 lg:hidden">
                  Antes
                </span>
                <span className="inline-flex items-center rounded-full border border-ink-200 bg-ink-50 px-2.5 py-0.5 text-xs font-medium text-ink-700">
                  {row.before}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700 lg:hidden">
                  Con Copiloto Empresarial
                </span>
                <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-800">
                  {row.withCopilot}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500 lg:hidden">
                  Impacto estimado
                </span>
                <span className="text-sm leading-relaxed text-ink-700">
                  {row.impact}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 max-w-3xl text-xs leading-relaxed text-ink-500">
        Los tiempos son escenarios orientativos. El impacto real depende de
        fuentes conectadas, calidad de datos, permisos, procesos y alcance del
        piloto. Estimación para discusión comercial, editable tras diagnóstico.
      </p>
    </Section>
  );
}
