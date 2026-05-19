import type { Metadata } from "next";
import { AreasOfImpact } from "@/components/home/AreasOfImpact";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CopilotSpotlight } from "@/components/home/CopilotSpotlight";
import { EcosystemOrchestration } from "@/components/home/EcosystemOrchestration";
import { ExperienceForCopilot } from "@/components/home/ExperienceForCopilot";
import { Hero } from "@/components/home/Hero";
import { ImplementationModel } from "@/components/home/ImplementationModel";
import { Methodologies } from "@/components/home/Methodologies";
import { ProofStrip } from "@/components/home/ProofStrip";
import { QuickWins } from "@/components/home/QuickWins";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { SevenPillars } from "@/components/home/SevenPillars";

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
      <SevenPillars />
      <ImplementationModel />
      <AreasOfImpact />
      <CopilotSpotlight />
      <ServicesOverview />
      <Methodologies />
      <EcosystemOrchestration />
      <ExperienceForCopilot />
      <ProofStrip />
      <ContactCTA />
    </>
  );
}
