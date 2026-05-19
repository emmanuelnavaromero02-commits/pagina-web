import type { Metadata } from "next";
import { CopilotArchitecture } from "@/components/copilot/CopilotArchitecture";
import {
  CopilotCapabilities,
  CopilotProblems,
} from "@/components/copilot/CopilotCapabilities";
import { CopilotComparison } from "@/components/copilot/CopilotComparison";
import { CopilotConnectionGroups } from "@/components/copilot/CopilotConnectionGroups";
import { CopilotHero } from "@/components/copilot/CopilotHero";
import { CopilotImpact } from "@/components/copilot/CopilotImpact";
import { CopilotOrigin } from "@/components/copilot/CopilotOrigin";
import { CopilotReduce } from "@/components/copilot/CopilotReduce";
import { CopilotRoles } from "@/components/copilot/CopilotRoles";
import { CopilotSecurity } from "@/components/copilot/CopilotSecurity";
import { CopilotUseCases } from "@/components/copilot/CopilotUseCases";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Copiloto Empresarial · Capa de IA operativa",
  description:
    "Copiloto Empresarial: capa de IA operativa que conecta SAP, datos y procesos para consultar, validar, reportar y automatizar con trazabilidad.",
  alternates: { canonical: "/copilot" },
};

export default function CopilotPage() {
  return (
    <>
      <CopilotHero />
      <CopilotOrigin />
      <CopilotProblems />
      <CopilotComparison />
      <CopilotImpact />
      <CopilotCapabilities />
      <CopilotArchitecture />
      <CopilotConnectionGroups />
      <CopilotUseCases />
      <CopilotReduce />
      <CopilotRoles />
      <CopilotSecurity />
      <ContactCTA />
    </>
  );
}
