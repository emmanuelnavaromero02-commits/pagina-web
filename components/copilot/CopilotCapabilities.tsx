import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { COPILOT_CAPABILITIES, COPILOT_PROBLEMS } from "@/lib/site-data";
import { l } from "@/lib/i18n/config";

export function CopilotProblems() {
  return (
    <Section id="problem" className="bg-white">
      <SectionHeader
        eyebrow={l("El problema que resolvemos", "The problem we solve")}
        title={l("Operaciones detenidas por trabajo manual", "Operations stuck in manual work")}
        description={l("Los agentes de decisión reducen el tiempo dedicado a buscar, validar y consolidar información dispersa antes de decidir.", "Decision agents reduce the time spent searching, validating, and consolidating scattered information before a decision.")}
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
        eyebrow={l("Qué hace", "What it does")}
        title={l("Capacidades operativas, no conversación genérica", "Operational capabilities, not generic chat")}
        description={l("Cada capacidad apoya trabajo real: consultar, explicar, validar, informar, conectar y reducir tareas manuales.", "Each capability supports real work: query, explain, validate, report, connect, and reduce manual tasks.")}
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
