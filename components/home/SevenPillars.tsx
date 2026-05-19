import { Section } from "@/components/ui/Section";
import { SEVEN_PILLARS } from "@/lib/data/home";

export function SevenPillars() {
  return (
    <Section className="bg-ink-950 text-white">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
          The 7-Pillar Architecture
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Not just software. An architecture for intelligent business
          solutions.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-300">
          Our number is not decoration. It represents the operating structure
          we use to activate intelligent companies. An intelligent company is
          not built with isolated software — it is built with vision, strategy,
          processes, governed data, automation, operational intelligence, and
          continuous evolution.
        </p>
      </div>

      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {SEVEN_PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <li
              key={pillar.number}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
            >
              <span className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-700/20 blur-2xl transition-opacity group-hover:bg-accent-400/20" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-accent-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-2xl font-semibold tracking-tight text-white/30">
                    {pillar.number}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {pillar.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
