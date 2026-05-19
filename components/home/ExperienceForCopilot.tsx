import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { EXPERIENCE_BRIDGE } from "@/lib/data/home";

export function ExperienceForCopilot() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Experience backing Enterprise Copilot"
        title="From integration to operational software"
        description="Every capability feeds the next. Enterprise Copilot is the natural outcome of years of SAP, software factory, data, and applied AI — not an isolated experiment."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
        {EXPERIENCE_BRIDGE.map((stage) => {
          const Icon = stage.icon;
          return (
            <article
              key={stage.step}
              className="relative rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-elevate"
            >
              <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-brand-700 px-2.5 py-0.5 text-[10px] font-semibold tracking-widest text-white">
                {stage.step}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-ink-950">
                {stage.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                {stage.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1">
                {stage.badges.map((b) => (
                  <li
                    key={b}
                    className="rounded-full border border-ink-200 bg-ink-50 px-2 py-0.5 text-[10px] font-medium text-ink-700"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}

        <Link
          href="/copilot"
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-700 bg-gradient-to-br from-brand-800 via-brand-900 to-ink-950 p-6 text-white shadow-elevate transition-transform hover:-translate-y-0.5"
        >
          <span
            aria-hidden
            className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent-400/20 blur-2xl"
          />
          <span className="relative inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-400">
            <Sparkles className="h-3 w-3" />
            Outcome
          </span>
          <h3 className="relative mt-3 font-display text-lg font-semibold">
            Enterprise Copilot
          </h3>
          <p className="relative mt-1.5 text-sm leading-relaxed text-ink-200">
            The operational AI layer that turns that experience into queries,
            validations, and reports for the business.
          </p>
          <span className="relative mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-white">
            See product
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </Section>
  );
}
