import { Section, SectionHeader } from "@/components/ui/Section";
import { COPILOT_IMPACT_ROWS } from "@/lib/data/copilot";
import { l } from "@/lib/i18n/config";

export function CopilotImpact() {
  return (
    <Section id="impact" className="bg-white">
      <SectionHeader
        eyebrow={l("Antes y con Enterprise Copilot", "Before and with Enterprise Copilot")}
        title={l("De tareas dispersas a un flujo trazable", "From scattered tasks to a traceable workflow")}
        description={l("El valor surge al conectarlo con sistemas, permisos, reglas, informes y fuentes trazables.", "The value comes from connecting it to systems, permissions, rules, reports, and traceable sources.")}
      />

      <div className="mt-12 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft">
        <div className="hidden grid-cols-[2fr_1fr_1.6fr_1.6fr] gap-4 border-b border-ink-100 bg-ink-50 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-600 lg:grid">
          <div>{l("Tarea de negocio", "Business task")}</div>
          <div>{l("Antes", "Before")}</div>
          <div>{l("Con Enterprise Copilot", "With Enterprise Copilot")}</div>
          <div>{l("Impacto", "Impact")}</div>
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
                  {l("Antes", "Before")}
                </span>
                <span className="inline-flex items-center rounded-full border border-ink-200 bg-ink-50 px-2.5 py-0.5 text-xs font-medium text-ink-700">
                  {row.before}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700 lg:hidden">
                  {l("Con Enterprise Copilot", "With Enterprise Copilot")}
                </span>
                <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-800">
                  {row.withCopilot}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500 lg:hidden">
                  {l("Impacto", "Impact")}
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
        {l("Escenarios ilustrativos, no resultados garantizados. El impacto depende de las fuentes, la calidad de los datos, los permisos, los procesos y el alcance validado durante el diagnóstico.", "Illustrative scenarios, not guaranteed results. Impact depends on sources, data quality, permissions, processes, and the scope validated during diagnosis.")}
      </p>
    </Section>
  );
}
