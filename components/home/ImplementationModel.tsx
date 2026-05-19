import { Section, SectionHeader } from "@/components/ui/Section";
import { IMPLEMENTATION_STEPS } from "@/lib/data/home";

export function ImplementationModel() {
  return (
    <Section className="bg-ink-50">
      <SectionHeader
        eyebrow="Implementation model"
        title="No endless consulting projects. Focused impact in 2–4 weeks."
        description="We target quick wins with measurable business value: one problem, one solution, one result. We work without stopping your operation."
      />

      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {IMPLEMENTATION_STEPS.map((m) => {
          const Icon = m.icon;
          return (
            <li
              key={m.step}
              className="relative rounded-2xl border border-ink-100 bg-white p-6 shadow-soft"
            >
              <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-brand-700 px-2.5 py-0.5 text-[10px] font-semibold tracking-widest text-white">
                {m.step}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-4 font-display text-base font-semibold text-ink-900">
                {m.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                {m.description}
              </p>
            </li>
          );
        })}
      </ol>

      <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink-500">
        Typical quick-win pilots can be scoped for 2–4 weeks, depending on
        systems, data access, and complexity. The window is a planning
        reference for the diagnosis, not a guarantee.
      </p>
    </Section>
  );
}
