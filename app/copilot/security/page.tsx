import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CopilotSecurity } from "@/components/copilot/CopilotSecurity";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";

export const metadata: Metadata = {
  title: "Security & permissions · Enterprise Copilot",
  description:
    "Enterprise Copilot security model: per-role permissions, traceability, validations before execution, and controlled deployment.",
  alternates: { canonical: "/copilot/security" },
};

const principles = [
  {
    title: "Least privilege",
    description:
      "The copilot never has more permissions than the user invoking it. It inherits and respects the existing policies.",
  },
  {
    title: "Traceability by default",
    description:
      "Every query, source, validation, and action is logged for audit without extra configuration.",
  },
  {
    title: "Human-in-the-loop",
    description:
      "Critical actions are explicitly confirmed before they are applied against real systems.",
  },
  {
    title: "Data where the client decides",
    description:
      "On-premise, private cloud, or dedicated VPC — the deployment model follows the client's policy.",
  },
];

export default function CopilotSecurityPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Security"
        title="Security and permissions built for the enterprise"
        description="An operational copilot is only useful if it does not break existing security. These are the principles we apply by default."
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Principles"
          title="Four principles that guide the design"
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {principles.map((p) => (
            <Card key={p.title} as="li">
              <CardTitle>{p.title}</CardTitle>
              <CardDescription>{p.description}</CardDescription>
            </Card>
          ))}
        </ul>
      </Section>

      <CopilotSecurity />
      <ContactCTA />
    </>
  );
}
