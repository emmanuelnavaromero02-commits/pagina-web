import { CopilotCtaFinal } from "@/components/copilot/CopilotCtaFinal";
import { CopilotDemo } from "@/components/copilot/CopilotDemo";
import { CopilotExactly } from "@/components/copilot/CopilotExactly";
import { CopilotFlow } from "@/components/copilot/CopilotFlow";
import { ServiceHero } from "@/components/services/ServiceHero";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/copilot/demo",
  title: l(
    "Demostración conceptual · Enterprise Copilot",
    "Conceptual demo · Enterprise Copilot",
  ),
  description: l(
    "Recorrido conceptual por una interacción con Enterprise Copilot: solicitud, consulta de fuentes, validación, borrador, aprobación y registro de auditoría.",
    "A conceptual walk-through of an Enterprise Copilot interaction: request, source lookup, validation, draft, approval, and audit log.",
  ),
});

export default function CopilotDemoPage() {
  return (
    <>
      <ServiceHero
        eyebrow={l(
          "Enterprise Copilot · Demostración",
          "Enterprise Copilot · Demo",
        )}
        title={l("Un recorrido conceptual", "A conceptual walk-through")}
        description={l(
          "Una interacción ilustrativa que consulta SAP, datos bancarios, reglas de validación y un borrador de informe sin salir del copilot. El comportamiento real depende de la configuración y las fuentes conectadas.",
          "An illustrative interaction involving SAP, banking data, validation rules, and a draft report without leaving the copilot. Actual behavior depends on configuration and connected sources.",
        )}
      />

      <CopilotDemo />
      <CopilotExactly />
      <CopilotFlow />
      <CopilotCtaFinal />
    </>
  );
}
