import { Section, SectionHeader } from "@/components/ui/Section";
import { TECH_STACK } from "@/lib/site-data";
import { l } from "@/lib/i18n/config";

export function ExperienceProof() {
  return (
    <Section className="bg-ink-50">
      <SectionHeader
        eyebrow={l(
          "Tecnología para entornos empresariales",
          "Technology for enterprise environments",
        )}
        title={l(
          "Capacidades técnicas disponibles para cada proyecto",
          "Technical capabilities available for each project",
        )}
        description={l(
          "Especialistas senior seleccionados según las necesidades de cada proyecto en SAP, nube, datos e IA.",
          "Senior specialists selected according to each project's needs across SAP, cloud, data, and AI.",
        )}
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TECH_STACK.map((group) => (
          <div
            key={group.group}
            className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              {group.group}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-ink-200 bg-ink-50 px-3 py-1 text-xs font-medium text-ink-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
