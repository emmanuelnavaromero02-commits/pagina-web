import { Section, SectionHeader } from "@/components/ui/Section";
import { EXPERIENCE_ROLES } from "@/lib/site-data";

export function ExperienceRoles() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Experiencia acumulada"
        title="Capacidades sobre las que ya hemos respondido"
        description="Roles y disciplinas que el equipo ha ejecutado en programas reales con clientes corporativos."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {EXPERIENCE_ROLES.map((role) => {
          const Icon = role.icon;
          return (
            <li
              key={role.title}
              className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-elevate"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-4 font-display text-base font-semibold text-ink-900">
                {role.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                {role.description}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
