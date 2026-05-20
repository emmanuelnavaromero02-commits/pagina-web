import type { Metadata } from "next";
import { AnimatedImpactMetrics } from "@/components/copilot/AnimatedImpactMetrics";
import { CopilotCtaFinal } from "@/components/copilot/CopilotCtaFinal";
import { CopilotExactly } from "@/components/copilot/CopilotExactly";
import { CopilotHero } from "@/components/copilot/CopilotHero";
import { CopilotImpact } from "@/components/copilot/CopilotImpact";
import { CopilotProblems } from "@/components/copilot/CopilotCapabilities";
import { CopilotRoles } from "@/components/copilot/CopilotRoles";
import { CopilotSecurity } from "@/components/copilot/CopilotSecurity";

export const metadata: Metadata = {
  title: "Enterprise Copilot · From manual work to traceable answers in minutes",
  description:
    "Operational AI capability that connects SAP, data, APIs, and reports so teams can ask, validate, explain, and act with evidence, permissions, and auditability.",
  alternates: { canonical: "/copilot" },
};

export default function CopilotPage() {
  return (
    <>
      <CopilotHero />
      <AnimatedImpactMetrics />
      <CopilotImpact />
      <CopilotProblems />
      <CopilotExactly />
      <CopilotRoles />
      <CopilotSecurity />
      <CopilotCtaFinal />
    </>
  );
}
