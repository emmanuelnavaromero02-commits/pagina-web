import { Section, SectionHeader } from "@/components/ui/Section";
import { EXPERIENCE_ROLES } from "@/lib/data/experience";
import { l } from "@/lib/i18n/config";

export function ExperienceRoles() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow={l("Capacidades del equipo", "Team capabilities")}
        title={l(
          "Disciplinas disponibles según el proyecto",
          "Disciplines available according to the project",
        )}
        description={l(
          "Especialistas senior seleccionados según el alcance, la tecnología y las necesidades operativas de cada proyecto.",
          "Senior specialists selected according to each project's scope, technology, and operational needs.",
        )}
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
