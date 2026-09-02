import { CopilotCtaFinal } from "@/components/copilot/CopilotCtaFinal";
import { CopilotDemo } from "@/components/copilot/CopilotDemo";
import { CopilotExactly } from "@/components/copilot/CopilotExactly";
import { ServiceHero } from "@/components/services/ServiceHero";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/copilot/demo",
  title: l(
    "Caso operativo · Agentes de Decisión IA",
    "Operational scenario · AI Decision Agents",
  ),
  description: l(
    "Ejemplo de cómo agentes especializados convierten evidencia fragmentada en una decisión trazable y controlada.",
    "An example of how specialized agents turn fragmented evidence into a traceable, controlled decision.",
  ),
});

export default function CopilotDemoPage() {
  return (
    <>
      <ServiceHero
        eyebrow={l(
          "Agentes de Decisión IA · Caso operativo",
          "AI Decision Agents · Operational scenario",
        )}
        title={l(
          "Qué cambia para el equipo",
          "What changes for the team",
        )}
        description={l(
          "Menos tiempo reconstruyendo el contexto y más claridad para revisar evidencia, decidir y dar seguimiento.",
          "Less time rebuilding context and more clarity to review evidence, decide, and follow through.",
        )}
      />

      <CopilotDemo />
      <CopilotExactly />
      <CopilotCtaFinal />
    </>
  );
}
