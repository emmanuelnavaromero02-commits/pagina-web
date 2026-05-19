import { Section, SectionHeader } from "@/components/ui/Section";
import { TECH_STACK } from "@/lib/site-data";

export function ExperienceProof() {
  return (
    <Section className="bg-ink-50">
      <SectionHeader
        eyebrow="Experiencia que respalda"
        title="Tecnologías sobre las que ya hemos entregado"
        description="Equipo con experiencia real en plataformas empresariales: SAP, cloud, datos e IA. Sin teoría, sin demos. Trabajos productivos en clientes grandes."
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
