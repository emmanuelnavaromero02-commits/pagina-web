import { Section, SectionHeader } from "@/components/ui/Section";
import { METHODOLOGIES } from "@/lib/data/home";

export function Methodologies() {
  return (
    <Section className="bg-ink-50">
      <SectionHeader
        eyebrow="7 Enterprise Methods for Operational Execution"
        title="Enterprise methods. Operational execution."
        description="Seven methods we apply across engagements — selected to fit the case, not applied as a checklist."
      />

      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {METHODOLOGIES.map((m, idx) => {
          const Icon = m.icon;
          return (
            <li
              key={m.title}
              className="relative rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-elevate"
            >
              <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-brand-700 px-2.5 py-0.5 text-[10px] font-semibold tracking-widest text-white">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-4 font-display text-base font-semibold text-ink-950">
                {m.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                {m.description}
              </p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
