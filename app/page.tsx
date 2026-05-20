import type { Metadata } from "next";
import { AreasOfImpact } from "@/components/home/AreasOfImpact";
import { BusinessChallenge } from "@/components/home/BusinessChallenge";
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
import { SevenPillars } from "@/components/home/SevenPillars";
import { StrategicProcessAnalysis } from "@/components/home/StrategicProcessAnalysis";

export const metadata: Metadata = {
  title:
    "Intelligent business solutions for enterprises in Mexico and Spain",
  description:
    "7 Business Solutions designs, integrates, and supports enterprise software, integration, governed data, and operational AI. Flagship product: Enterprise Copilot.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickWins />
      <BusinessChallenge />
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
