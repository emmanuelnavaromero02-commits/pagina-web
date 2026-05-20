import { Section, SectionHeader } from "@/components/ui/Section";
import { OPERATIONAL_OUTCOMES } from "@/lib/data/home";

export function OperationalOutcomes() {
  return (
    <Section className="bg-ink-50">
      <SectionHeader
        eyebrow="7 Operational Outcomes"
        title="The signals a real engagement leaves behind."
        description="When the work lands, leadership sees these signals across the operation. Outcomes are scope-dependent and orientative."
      />
      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {OPERATIONAL_OUTCOMES.map((o, idx) => (
          <li
            key={o.title}
            className="relative rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-elevate"
          >
            <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-brand-700 px-2.5 py-0.5 text-[10px] font-semibold tracking-widest text-white">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 font-display text-base font-semibold text-ink-950">
              {o.title}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
              {o.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
