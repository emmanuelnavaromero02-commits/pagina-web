import { Section, SectionHeader } from "@/components/ui/Section";
import { SEVEN_BUSINESS_PROBLEMS } from "@/lib/data/home";

export function SevenBusinessProblems() {
  return (
    <Section className="bg-ink-50">
      <SectionHeader
        eyebrow="7 Business Problems We Solve"
        title="Where companies lose time, money, and control."
        description="Seven recurring problems we see in enterprise operations — and how 7 Business Solutions addresses each."
      />

      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {SEVEN_BUSINESS_PROBLEMS.map((p, idx) => (
          <li
            key={p.title}
            className="relative flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-elevate"
          >
            <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-brand-700 px-2.5 py-0.5 text-[10px] font-semibold tracking-widest text-white">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 font-display text-base font-semibold text-ink-950">
              {p.title}
            </p>
            <div className="mt-3 space-y-3 text-sm leading-relaxed">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500">
                  Business impact
                </p>
                <p className="mt-1 text-ink-700">{p.impact}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                  What we do
                </p>
                <p className="mt-1 text-ink-800">{p.whatWeDo}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
