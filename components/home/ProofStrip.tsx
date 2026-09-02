import { Section } from "@/components/ui/Section";
import { EXPERIENCE_CLIENTS } from "@/lib/site-data";
import { l } from "@/lib/i18n/config";

export function ProofStrip() {
  return (
    <Section className="bg-white" containerClassName="max-w-7xl">
      <div className="rounded-3xl border border-ink-100 bg-ink-50/50 p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              {l("Sectores atendidos", "Industries served")}
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
              {l(
                "Capacidades empresariales para distintos sectores.",
                "Enterprise capabilities across sectors.",
              )}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              {l(
                "La experiencia relevante del equipo se detalla durante el diagnóstico inicial, sujeta a las obligaciones de confidencialidad aplicables.",
                "Relevant team experience is discussed during the initial diagnosis, subject to applicable confidentiality obligations.",
              )}
            </p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {EXPERIENCE_CLIENTS.map((c) => (
              <li
                key={c}
                className="rounded-full border border-ink-200 bg-white px-4 py-1.5 text-sm font-medium text-ink-800 shadow-soft"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
