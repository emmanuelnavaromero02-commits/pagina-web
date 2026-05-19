import type { Metadata } from "next";
import { CopilotCtaFinal } from "@/components/copilot/CopilotCtaFinal";
import { CopilotDemo } from "@/components/copilot/CopilotDemo";
import { CopilotExactly } from "@/components/copilot/CopilotExactly";
import { CopilotFlow } from "@/components/copilot/CopilotFlow";
import { ServiceHero } from "@/components/services/ServiceHero";

export const metadata: Metadata = {
  title: "Conceptual demo · Enterprise Copilot",
  description:
    "A conceptual walk-through of an Enterprise Copilot interaction — user request, source lookup, validation, draft, approval required, audit log.",
  alternates: { canonical: "/copilot/demo" },
};

export default function CopilotDemoPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Enterprise Copilot · Demo"
        title="A conceptual walk-through"
        description="An illustrative interaction that touches SAP, the bank, validation rules, and a draft report — without the user ever leaving the copilot. Real behavior depends on configuration and connected sources."
      />

      <CopilotDemo />
      <CopilotExactly />
      <CopilotFlow />
      <CopilotCtaFinal />
    </>
  );
}
