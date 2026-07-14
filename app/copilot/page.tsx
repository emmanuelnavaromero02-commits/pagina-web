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
    "Enterprise Copilot · Decisiones y acciones controladas",
    "Enterprise Copilot · Controlled decisions and actions",
  ),
  description: l(
    "Inteligencia operativa que reúne información dispersa, presenta evidencia verificable, organiza opciones y prepara acciones sujetas a aprobación.",
    "Operational intelligence that brings fragmented information together, presents verifiable evidence, frames options, and prepares actions for approval.",
  ),
});

export default function CopilotPage() {
  return (
    <>
      <CopilotHero />
      <CopilotImpact />
      <CopilotProblems />
      <CopilotExactly />
      <CopilotRoles />
      <CopilotSecurity />
      <CopilotCtaFinal />
    </>
  );
}
