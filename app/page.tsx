import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CopilotSpotlight } from "@/components/home/CopilotSpotlight";
import { ExperienceForCopilot } from "@/components/home/ExperienceForCopilot";
import { ExperienceProof } from "@/components/home/ExperienceProof";
import { Hero } from "@/components/home/Hero";
import { OperatingModel } from "@/components/home/OperatingModel";
import { ProofStrip } from "@/components/home/ProofStrip";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { UseCasesPreview } from "@/components/home/UseCasesPreview";
import { WhatWeDo } from "@/components/home/WhatWeDo";

export const metadata: Metadata = {
  title:
    "Fábrica de software empresarial e IA operativa · SAP · Cloud · Datos",
  description:
    "Diseñamos, integramos y soportamos plataformas empresariales sobre SAP, cloud, datos e inteligencia artificial. Producto estrella: Copiloto Empresarial.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <CopilotSpotlight />
      <ServicesOverview />
      <OperatingModel />
      <ExperienceProof />
      <ExperienceForCopilot />
      <UseCasesPreview />
      <ProofStrip />
      <ContactCTA />
    </>
  );
}
