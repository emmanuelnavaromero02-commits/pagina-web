import type { Metadata } from "next";
import { CopilotComparison } from "@/components/copilot/CopilotComparison";
import { CopilotConnectionGroups } from "@/components/copilot/CopilotConnectionGroups";
import { CopilotCtaFinal } from "@/components/copilot/CopilotCtaFinal";
import { CopilotDemo } from "@/components/copilot/CopilotDemo";
import { CopilotExactly } from "@/components/copilot/CopilotExactly";
import { CopilotFlow } from "@/components/copilot/CopilotFlow";
import { CopilotHero } from "@/components/copilot/CopilotHero";
import { CopilotImpact } from "@/components/copilot/CopilotImpact";
import { CopilotProblems } from "@/components/copilot/CopilotCapabilities";
import { CopilotRoles } from "@/components/copilot/CopilotRoles";
import { CopilotSecurity } from "@/components/copilot/CopilotSecurity";

export const metadata: Metadata = {
  title: "Copiloto Empresarial · De horas a respuestas trazables en minutos",
  description:
    "Capa de IA operativa que conecta SAP, datos, APIs y reportes para consultar, validar y preparar acciones con evidencia, permisos y trazabilidad.",
  alternates: { canonical: "/copilot" },
};

export default function CopilotPage() {
  return (
    <>
      <CopilotHero />
      <CopilotImpact />
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
