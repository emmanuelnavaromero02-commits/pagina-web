import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { COPILOT_USE_CASES } from "@/lib/site-data";
import { l } from "@/lib/i18n/config";

export function CopilotUseCases() {
  return (
    <Section id="use-cases" className="bg-ink-50">
      <SectionHeader
        eyebrow={l("Casos de uso", "Use cases")}
        title={l("Dónde puede aportar valor", "Where it can add value")}
        description={l("Áreas funcionales donde la combinación de IA, integración con SAP y reglas de negocio puede reducir trabajo manual y agilizar la respuesta.", "Functional areas where AI, SAP integration, and business rules can reduce manual work and improve response times.")}
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COPILOT_USE_CASES.map((uc) => {
          const Icon = uc.icon;
          return (
            <Card key={uc.area} as="li" interactive>
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </span>
              <CardTitle className="mt-5">{uc.area}</CardTitle>
              <CardDescription>{uc.description}</CardDescription>
            </Card>
          );
        })}
      </ul>
    </Section>
  );
}
