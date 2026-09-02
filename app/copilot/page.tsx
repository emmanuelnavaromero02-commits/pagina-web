import { CopilotCtaFinal } from "@/components/copilot/CopilotCtaFinal";
import { DecisionAgentsDemo } from "@/components/copilot/DecisionAgentsDemo";
import { CopilotExactly } from "@/components/copilot/CopilotExactly";
import { CopilotHero } from "@/components/copilot/CopilotHero";
import { CopilotImpact } from "@/components/copilot/CopilotImpact";
import { CopilotProblems } from "@/components/copilot/CopilotCapabilities";
import { CopilotRoles } from "@/components/copilot/CopilotRoles";
import { CopilotSecurity } from "@/components/copilot/CopilotSecurity";
import { DecisionIntelligenceSystem } from "@/components/copilot/DecisionIntelligenceSystem";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/copilot",
  title: l(
    "Inteligencia de Decisión · Modelos, agentes e IA generativa",
    "Decision Intelligence · Models, agents, and generative AI",
  ),
  description: l(
    "Un núcleo cuantitativo calibrado, agentes especializados e IA generativa que conectan datos gobernados, comparan escenarios y preparan acciones sujetas a aprobación.",
    "A calibrated quantitative core, specialist agents, and generative AI connecting governed data, comparing scenarios, and preparing actions for approval.",
  ),
});

export default function CopilotPage() {
  return (
    <>
      <CopilotHero />
      <DecisionIntelligenceSystem />
      <DecisionAgentsDemo />
      <CopilotImpact />
      <CopilotProblems />
      <CopilotExactly />
      <CopilotRoles />
      <CopilotSecurity />
      <CopilotCtaFinal />
    </>
  );
}
