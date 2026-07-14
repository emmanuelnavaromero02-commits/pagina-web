import { AnimatedImpactMetrics } from "@/components/copilot/AnimatedImpactMetrics";
import { CopilotCtaFinal } from "@/components/copilot/CopilotCtaFinal";
import { CopilotExactly } from "@/components/copilot/CopilotExactly";
import { CopilotHero } from "@/components/copilot/CopilotHero";
import { CopilotImpact } from "@/components/copilot/CopilotImpact";
import { CopilotProblems } from "@/components/copilot/CopilotCapabilities";
import { CopilotRoles } from "@/components/copilot/CopilotRoles";
import { CopilotSecurity } from "@/components/copilot/CopilotSecurity";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/copilot",
  title: l(
    "Enterprise Copilot · De trabajo manual a respuestas trazables",
    "Enterprise Copilot · From manual work to traceable answers",
  ),
  description: l(
    "Capacidad de IA operativa que conecta SAP, datos, APIs e informes para consultar, validar, explicar y actuar con evidencia, permisos y trazabilidad.",
    "Operational AI capability that connects SAP, data, APIs, and reports so teams can ask, validate, explain, and act with evidence, permissions, and traceability.",
  ),
});

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
