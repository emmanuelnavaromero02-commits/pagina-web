import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CopilotArchitecture } from "@/components/copilot/CopilotArchitecture";
import { CopilotCapabilities } from "@/components/copilot/CopilotCapabilities";
import { CopilotHero } from "@/components/copilot/CopilotHero";
import { CopilotSecurity } from "@/components/copilot/CopilotSecurity";
import { CopilotUseCases } from "@/components/copilot/CopilotUseCases";

export const metadata: Metadata = {
  title: "Copiloto Empresarial",
  description:
    "Copiloto Empresarial: capa de IA operativa que conecta SAP, datos y procesos para consultar, validar, reportar y automatizar.",
};

export default function CopilotPage() {
  return (
    <>
      <CopilotHero />
      <CopilotCapabilities />
      <CopilotArchitecture />
      <CopilotUseCases />
      <CopilotSecurity />
      <ContactCTA />
    </>
  );
}
