import { Section, SectionHeader } from "@/components/ui/Section";
import { BUSINESS_CHALLENGES } from "@/lib/data/home";

export function BusinessChallenge() {
  return (
    <Section className="bg-ink-50">
      <SectionHeader
        eyebrow="The real challenge"
        title="The real challenge is operational, strategic, and decision-driven."
        description="Most organizations already have the tools and systems. What they still need is more speed, more efficiency, more integration, more automation, more operational intelligence, and greater execution capacity."
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {BUSINESS_CHALLENGES.map((c) => {
          const Icon = c.icon;
          return (
            <li
              key={c.title}
              className="group flex items-start gap-3 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-elevate"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-100">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-base font-semibold text-ink-950">
                  {c.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">
                  {c.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
