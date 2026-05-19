import { Section } from "@/components/ui/Section";
import { ECOSYSTEM_PILLS } from "@/lib/data/home";

export function EcosystemOrchestration() {
  return (
    <Section className="bg-white">
      <div className="rounded-3xl border border-ink-100 bg-ink-50/40 p-8 sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Enterprise ecosystem orchestration
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
              We orchestrate the complete business ecosystem.
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-600">
              ERP, CRM, cloud, APIs, data lakes, Excel, legacy systems,
              automations, AI, and advanced analytics — all under one strategic
              operating vision.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {ECOSYSTEM_PILLS.map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-ink-200 bg-white px-4 py-1.5 text-sm font-medium text-ink-800 shadow-soft"
              >
                {pill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
