import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { COPILOT_CAPABILITIES, COPILOT_PROBLEMS } from "@/lib/site-data";

export function CopilotProblems() {
  return (
    <Section id="problem" className="bg-white">
      <SectionHeader
        eyebrow="Qué problema resuelve"
        title="Operación cotidiana atascada en tareas manuales"
        description="El Copiloto Empresarial reduce el tiempo que el equipo dedica a buscar, validar y consolidar información dispersa."
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COPILOT_PROBLEMS.map((p) => (
          <Card key={p.title} as="li">
            <CardTitle>{p.title}</CardTitle>
            <CardDescription>{p.description}</CardDescription>
          </Card>
        ))}
      </ul>
    </Section>
  );
}

export function CopilotCapabilities() {
  return (
    <Section id="does" className="bg-ink-50">
      <SectionHeader
        eyebrow="Qué hace"
        title="Capacidades operativas, no genéricas"
        description="Cada capacidad está pensada para apoyar trabajo real: consultar, explicar, validar, reportar, conectar y reducir tareas manuales."
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COPILOT_CAPABILITIES.map((cap) => {
          const Icon = cap.icon;
          return (
            <Card key={cap.title} as="li" interactive>
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </span>
              <CardTitle className="mt-5">{cap.title}</CardTitle>
              <CardDescription>{cap.description}</CardDescription>
            </Card>
          );
        })}
      </ul>
    </Section>
  );
}
