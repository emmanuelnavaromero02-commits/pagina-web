import { Section, SectionHeader } from "@/components/ui/Section";
import { QUICK_WINS } from "@/lib/data/home";

export function QuickWins() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="7 High-Impact Business Solutions"
        title="Business impact in weeks, not months."
        description="One problem · one solution · one measurable result. Seven focused intervention areas where we have shipped operational value."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {QUICK_WINS.map((w) => {
          const Icon = w.icon;
          return (
            <li
              key={w.title}
              className="group rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-elevate"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-100">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold text-ink-950">
                {w.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                {w.description}
              </p>
            </li>
          );
        })}
      </ul>

      <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink-500">
        Typical quick-win pilots can be scoped for 2–4 weeks, depending on
        systems, data access, and complexity. Not a guarantee — a working
        window for discussion during the diagnosis.
      </p>
    </Section>
  );
}
