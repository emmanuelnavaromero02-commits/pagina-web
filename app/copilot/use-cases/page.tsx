import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CopilotUseCases } from "@/components/copilot/CopilotUseCases";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Use cases · Enterprise Copilot",
  description:
    "Real Enterprise Copilot use cases across HR, finance, operations, executive reporting, audit, and internal support.",
  alternates: { canonical: "/copilot/use-cases" },
};

const scenarios = [
  {
    title: "Monthly financial closing",
    description:
      "The finance team asks for the closing status, reviews unreconciled entries, and validates adjustments before they hit SAP FI.",
  },
  {
    title: "HR queries",
    description:
      "Headcount by business unit, vacation balances, organizational structure, and master-data validations — with per-role permissions.",
  },
  {
    title: "Live executive reporting",
    description:
      "Leadership asks a question and gets a trusted answer, traceable to the source data.",
  },
  {
    title: "Assisted functional support",
    description:
      "First-line response for technical and functional helpdesk over internal platforms and SAP.",
  },
  {
    title: "Operational audit",
    description:
      "Full traceability of queries, actions, and rules applied — exportable for compliance.",
  },
  {
    title: "Assisted automation",
    description:
      "Recurring reconciliations the copilot prepares and a human approves before execution.",
  },
];

export default function CopilotUseCasesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Use cases"
        title="Where Enterprise Copilot delivers real value"
        description="Realistic scenarios across functional areas that combine query, validation, reporting, and — where applicable — authorized action."
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Scenarios"
          title="Six concrete scenarios"
          description="Each scenario can be scoped as a guided pilot in a few weeks."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((s) => (
            <Card key={s.title} as="li" interactive>
              <CardTitle>{s.title}</CardTitle>
              <CardDescription>{s.description}</CardDescription>
            </Card>
          ))}
        </ul>
      </Section>

      <CopilotUseCases />
      <ContactCTA />
    </>
  );
}
