import { CopilotCtaFinal } from "@/components/copilot/CopilotCtaFinal";
import { CopilotImpact } from "@/components/copilot/CopilotImpact";
import { CopilotRoles } from "@/components/copilot/CopilotRoles";
import { ServiceHero } from "@/components/services/ServiceHero";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/copilot/impact",
  title: l(
    "Impacto operativo · Agentes de Decisión IA",
    "Operational impact · AI Decision Agents",
  ),
  description: l(
    "Escenarios orientativos con agentes de IA en informes multisistema, conciliación financiera, auditoría, reporte ejecutivo e investigación de incidentes.",
    "Indicative AI agent scenarios across cross-system reports, financial reconciliation, audit, executive reporting, and incident research.",
  ),
});

export default function CopilotImpactPage() {
  return (
    <>
      <ServiceHero
        eyebrow={l(
          "Agentes de Decisión IA · Impacto",
          "AI Decision Agents · Impact",
        )}
        title={l(
          "Menos trabajo manual en procesos operativos.",
          "Less manual work in operational processes.",
        )}
        description={l(
          "Una comparación de escenarios operativos habituales con y sin agentes especializados. Es material orientativo para definir una evaluación, no una garantía de resultados.",
          "A comparison of common operational scenarios with and without specialized agents. This is indicative material for scoping an assessment, not a guarantee of results.",
        )}
      />

      <CopilotImpact />
      <CopilotRoles />
      <CopilotCtaFinal />
    </>
  );
}
