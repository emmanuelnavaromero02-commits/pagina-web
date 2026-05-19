import { Section, SectionHeader } from "@/components/ui/Section";
import { CONTACT_AFTER_STEPS } from "@/lib/site-data";

export function AfterSteps() {
  return (
    <Section className="bg-ink-50">
      <SectionHeader
        eyebrow="Después de contactarnos"
        title="Cómo es el proceso cuando recibimos tu mensaje"
        description="Sin venta de humo ni reuniones eternas. Cuatro pasos cortos para definir si tiene sentido trabajar juntos."
      />

      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CONTACT_AFTER_STEPS.map((s) => {
          const Icon = s.icon;
          return (
            <li
              key={s.step}
              className="relative rounded-2xl border border-ink-100 bg-white p-6 shadow-soft"
            >
              <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-brand-700 px-2.5 py-0.5 text-[10px] font-semibold tracking-widest text-white">
                {s.step}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-4 font-display text-base font-semibold text-ink-900">
                {s.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                {s.description}
              </p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
