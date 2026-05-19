import type { Metadata } from "next";
import { Bot, Layers, Lock, Network, ShieldCheck, Workflow } from "lucide-react";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CopilotArchitecture } from "@/components/copilot/CopilotArchitecture";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";

export const metadata: Metadata = {
  title: "How it works · Enterprise Copilot",
  description:
    "Enterprise Copilot architecture: AI layers, connectors, permissions, validations, and traceability over SAP, databases, APIs, and reports.",
  alternates: { canonical: "/copilot/how-it-works" },
};

const layers = [
  {
    title: "Conversational interface",
    description:
      "A single entry point where users ask, validate, report, or request actions. Plain UI, no distractions.",
    icon: Bot,
  },
  {
    title: "AI orchestrator",
    description:
      "Decides which source to query, which rule to apply, and when to escalate to a human before executing.",
    icon: Workflow,
  },
  {
    title: "Connector layer",
    description:
      "Connectors to SAP, databases, internal APIs, cloud, and corporate reports.",
    icon: Network,
  },
  {
    title: "Permissions and policies",
    description:
      "Respects the source system's permissions and applies additional policies per role and per area.",
    icon: Lock,
  },
  {
    title: "Business validations",
    description:
      "Rules that detect inconsistencies and validate before applying any critical action.",
    icon: ShieldCheck,
  },
  {
    title: "Traceability",
    description:
      "Auditable record of every query, source consulted, validation, and result.",
    icon: Layers,
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <ServiceHero
        eyebrow="How it works"
        title="An architecture designed for enterprise environments"
        description="Enterprise Copilot is not a loose model — it is a complete architecture with orchestration, connectors, permissions, validations, and traceability."
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Layers"
          title="Six layers working together"
          description="Each layer has a clear responsibility and can evolve independently."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {layers.map((l) => {
            const Icon = l.icon;
            return (
              <Card key={l.title} as="li" interactive>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <CardTitle className="mt-5">{l.title}</CardTitle>
                <CardDescription>{l.description}</CardDescription>
              </Card>
            );
          })}
        </ul>
      </Section>

      <CopilotArchitecture />
      <ContactCTA />
    </>
  );
}
