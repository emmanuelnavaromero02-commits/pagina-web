import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { COPILOT_BENEFITS } from "@/lib/site-data";

export function CopilotBenefits() {
  return (
    <Section id="benefits" className="bg-ink-50">
      <SectionHeader
        eyebrow="Beneficios esperados"
        title="Impacto operativo concreto, no cifras inventadas"
        description="Hablamos de reducción de carga manual, errores y tiempos. No prometemos porcentajes de productividad ni reemplazo de personas."
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COPILOT_BENEFITS.map((b) => {
          const Icon = b.icon;
          return (
            <Card key={b.title} as="li" interactive>
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </span>
              <CardTitle className="mt-5">{b.title}</CardTitle>
              <CardDescription>{b.description}</CardDescription>
            </Card>
          );
        })}
      </ul>
    </Section>
  );
}
