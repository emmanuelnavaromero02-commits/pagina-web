import { ContactCTA } from "@/components/home/ContactCTA";
import { CopilotSpotlight } from "@/components/home/CopilotSpotlight";
import { ExperienceProof } from "@/components/home/ExperienceProof";
import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { UseCasesPreview } from "@/components/home/UseCasesPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CopilotSpotlight />
      <ServicesOverview />
      <ExperienceProof />
      <UseCasesPreview />
      <ContactCTA />
    </>
  );
}
