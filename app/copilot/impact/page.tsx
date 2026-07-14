import { CopilotCtaFinal } from "@/components/copilot/CopilotCtaFinal";
import { CopilotImpact } from "@/components/copilot/CopilotImpact";
import { CopilotRoles } from "@/components/copilot/CopilotRoles";
import { ServiceHero } from "@/components/services/ServiceHero";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/copilot/impact",
  title: l(
    "Impacto operativo · Enterprise Copilot",
    "Operational impact · Enterprise Copilot",
  ),
  description: l(
    "Escenarios orientativos con Enterprise Copilot en informes multisistema, conciliación financiera, evidencia de auditoría, reporte ejecutivo e investigación de incidentes.",
    "Indicative Enterprise Copilot scenarios across cross-system reports, financial reconciliation, audit evidence, executive reporting, and incident research.",
  ),
});

export default function CopilotImpactPage() {
  return (
    <>
      <ServiceHero
        eyebrow={l(
          "Enterprise Copilot · Impacto",
          "Enterprise Copilot · Impact",
        )}
        title={l(
          "Menos trabajo manual en procesos operativos.",
          "Less manual work in operational processes.",
        )}
        description={l(
          "Una comparación de escenarios operativos habituales con y sin Enterprise Copilot. Es material orientativo para definir un piloto, no una garantía de resultados.",
          "A comparison of common operational scenarios with and without Enterprise Copilot. This is indicative material for scoping a pilot, not a guarantee of results.",
        )}
      />

      <CopilotImpact />
      <CopilotRoles />
      <CopilotCtaFinal />
    </>
  );
}
