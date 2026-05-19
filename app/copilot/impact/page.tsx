import type { Metadata } from "next";
import { CopilotCtaFinal } from "@/components/copilot/CopilotCtaFinal";
import { CopilotImpact } from "@/components/copilot/CopilotImpact";
import { CopilotRoles } from "@/components/copilot/CopilotRoles";
import { ServiceHero } from "@/components/services/ServiceHero";

export const metadata: Metadata = {
  title: "Operational impact · Enterprise Copilot",
  description:
    "Before vs with Enterprise Copilot — indicative scenarios across cross-system reports, financial reconciliation, audit evidence, executive reporting, and incident research.",
  alternates: { canonical: "/copilot/impact" },
};

export default function CopilotImpactPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Enterprise Copilot · Impact"
        title="What used to take hours can become minutes."
        description="A side-by-side view of typical operational scenarios — before vs with Enterprise Copilot — framed as orientative discussion material for a pilot, not as guaranteed outcomes."
      />

      <CopilotImpact />
      <CopilotRoles />
      <CopilotCtaFinal />
    </>
  );
}
