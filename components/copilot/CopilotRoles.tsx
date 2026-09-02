import { Section, SectionHeader } from "@/components/ui/Section";
import { COPILOT_ROLES } from "@/lib/data/copilot";
import { l } from "@/lib/i18n/config";

export function CopilotRoles() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow={l("Qué ve cada rol", "What each role sees")}
        title={l("Agentes especializados para cada responsabilidad", "Specialized agents for every responsibility")}
        description={l("Cada usuario accede a la inteligencia y las herramientas que requiere su función: decisiones, cierres, evidencia u operación.", "Each user accesses the intelligence and tools required by their role: decisions, closings, evidence, or operations.")}
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
