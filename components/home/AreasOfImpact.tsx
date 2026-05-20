import { Section, SectionHeader } from "@/components/ui/Section";
import { AREAS_OF_IMPACT } from "@/lib/data/home";

export function AreasOfImpact() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="7 Areas of Impact"
        title="Where we deliver measurable business value"
        description="Seven functional and cross-cutting areas where a focused intervention — software, integration, data, or AI — turns a manual process into measurable execution."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {AREAS_OF_IMPACT.map((area) => {
          const Icon = area.icon;
          return (
            <li
              key={area.title}
              className="group rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-elevate"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-100">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-950">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {area.description}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
