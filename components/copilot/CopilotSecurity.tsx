import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { COPILOT_SECURITY } from "@/lib/data/copilot";
import { l } from "@/lib/i18n/config";

export function CopilotSecurity() {
  return (
    <Section id="security" className="bg-white">
      <SectionHeader
        eyebrow={l("Seguridad y permisos", "Security and permissions")}
        title={l("Capacidad operativa con control", "Operational capability with control")}
        description={l("Opera sobre sistemas reales con gobierno: permisos heredados, evidencia registrada y aprobación humana antes de acciones sensibles.", "It operates across real systems with governance: inherited permissions, logged evidence, and human approval before sensitive actions.")}
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COPILOT_SECURITY.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.title} as="li" interactive>
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </span>
              <CardTitle className="mt-5">{s.title}</CardTitle>
              <CardDescription>{s.description}</CardDescription>
            </Card>
          );
        })}
      </ul>
    </Section>
  );
}
