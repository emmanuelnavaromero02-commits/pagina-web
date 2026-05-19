import { Section, SectionHeader } from "@/components/ui/Section";
import { COPILOT_IMPACT_ROWS } from "@/lib/data/copilot";

export function CopilotImpact() {
  return (
    <Section id="impact" className="bg-white">
      <SectionHeader
        eyebrow="Before vs with Enterprise Copilot"
        title="What used to take hours can become minutes."
        description="The value is not in chatting with an AI. It is in wiring it into real systems, permissions, rules, reports, and traceable sources."
      />

      <div className="mt-12 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft">
        <div className="hidden grid-cols-[2fr_1fr_1.6fr_1.6fr] gap-4 border-b border-ink-100 bg-ink-50 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-600 lg:grid">
          <div>Business task</div>
          <div>Before</div>
          <div>With Enterprise Copilot</div>
          <div>Impact</div>
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
                  Before
                </span>
                <span className="inline-flex items-center rounded-full border border-ink-200 bg-ink-50 px-2.5 py-0.5 text-xs font-medium text-ink-700">
                  {row.before}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700 lg:hidden">
                  With Enterprise Copilot
                </span>
                <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-800">
                  {row.withCopilot}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500 lg:hidden">
                  Impact
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
        Indicative scenarios. Actual impact depends on connected sources, data
        quality, permissions, processes, and pilot scope. Estimates are for
        commercial discussion — editable after diagnosis.
      </p>
    </Section>
  );
}
