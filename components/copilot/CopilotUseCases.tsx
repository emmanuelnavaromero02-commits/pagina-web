import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { COPILOT_USE_CASES } from "@/lib/site-data";

export function CopilotUseCases() {
  return (
    <Section id="use-cases" className="bg-ink-50">
      <SectionHeader
        eyebrow="Use cases"
        title="Where it delivers real value"
        description="Functional areas where the combination of AI, SAP integration, and business rules reduces manual work and accelerates response."
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
