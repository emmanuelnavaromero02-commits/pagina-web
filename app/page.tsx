import { AreasOfImpact } from "@/components/home/AreasOfImpact";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CopilotSpotlight } from "@/components/home/CopilotSpotlight";
import { EcosystemOrchestration } from "@/components/home/EcosystemOrchestration";
import { Hero } from "@/components/home/Hero";
import { Methodologies } from "@/components/home/Methodologies";
import { NotJustSoftware } from "@/components/home/NotJustSoftware";
import { OperationalOutcomes } from "@/components/home/OperationalOutcomes";
import { ProofStrip } from "@/components/home/ProofStrip";
import { QuickWins } from "@/components/home/QuickWins";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { SevenBusinessProblems } from "@/components/home/SevenBusinessProblems";
import { SevenPillars } from "@/components/home/SevenPillars";
import { StrategicProcessAnalysis } from "@/components/home/StrategicProcessAnalysis";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/",
  title: l(
    "Soluciones empresariales inteligentes para México y España",
    "Intelligent business solutions for Mexico and Spain",
  ),
  description: l(
    "7 Business Solutions diseña, integra y da soporte a software empresarial, integraciones, datos gobernados e IA operativa. Producto principal: Enterprise Copilot.",
    "7 Business Solutions designs, integrates, and supports enterprise software, integrations, governed data, and operational AI. Flagship product: Enterprise Copilot.",
  ),
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickWins />
      <SevenBusinessProblems />
      <NotJustSoftware />
      <StrategicProcessAnalysis />
      <SevenPillars />
      <CopilotSpotlight />
      <ServicesOverview />
      <Methodologies />
      <AreasOfImpact />
      <OperationalOutcomes />
      <EcosystemOrchestration />
      <ProofStrip />
      <ContactCTA />
    </>
  );
}
