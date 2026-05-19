import { Section, SectionHeader } from "@/components/ui/Section";
import { COPILOT_ROLES } from "@/lib/data/copilot";

export function CopilotRoles() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Lo que ve cada rol"
        title="El mismo copiloto, distinto valor según el rol"
        description="Cada usuario ve lo que su responsabilidad necesita: decisiones, cierres, evidencia o capacidad de entrega."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {COPILOT_ROLES.map((role) => {
          const Icon = role.icon;
          return (
            <li
              key={role.label}
              className="flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-elevate"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                {role.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {role.description}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
