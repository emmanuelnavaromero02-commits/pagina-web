import { Section, SectionHeader } from "@/components/ui/Section";
import { ANALYSIS_DIMENSIONS } from "@/lib/data/home";

export function StrategicProcessAnalysis() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Strategic Process Analysis"
        title="We start by understanding how the business actually operates."
        description="We analyze operations, business flows, productivity, costs, cycle times, organizational structure, efficiency, and decision-making to identify opportunities for efficiency, automation, and growth."
      />
      <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {ANALYSIS_DIMENSIONS.map((d) => {
          const Icon = d.icon;
          return (
            <li
              key={d.title}
              className="group rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-elevate"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-100">
                <Icon className="h-4 w-4" />
              </span>
              <p className="mt-4 font-display text-sm font-semibold text-ink-950">
                {d.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-ink-600">
                {d.description}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
