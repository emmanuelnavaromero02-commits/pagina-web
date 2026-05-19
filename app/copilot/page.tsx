import type { Metadata } from "next";
import { CopilotComparison } from "@/components/copilot/CopilotComparison";
import { CopilotConnectionGroups } from "@/components/copilot/CopilotConnectionGroups";
import { CopilotCtaFinal } from "@/components/copilot/CopilotCtaFinal";
import { CopilotDemo } from "@/components/copilot/CopilotDemo";
import { CopilotExactly } from "@/components/copilot/CopilotExactly";
import { CopilotFlow } from "@/components/copilot/CopilotFlow";
import { CopilotHero } from "@/components/copilot/CopilotHero";
import { CopilotImpact } from "@/components/copilot/CopilotImpact";
import { CopilotPositioning } from "@/components/copilot/CopilotPositioning";
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
      <CopilotImpact />
      <CopilotPositioning />
      <CopilotProblems />
      <CopilotExactly />
      <CopilotDemo />
      <CopilotConnectionGroups />
      <CopilotFlow />
      <CopilotComparison />
      <CopilotSecurity />
      <CopilotRoles />
      <CopilotCtaFinal />
    </>
  );
}
