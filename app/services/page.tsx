import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { ServiceHero } from "@/components/services/ServiceHero";

export const metadata: Metadata = {
  title: "Services · Software, SAP integration, cloud data, and AI",
  description:
    "Four service lines under one team: Software Factory, Enterprise Integration, Cloud & Governed Data, and Operational AI.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Services"
        title="Core capabilities for mission-critical operations"
        description="Software factory, SAP integration, cloud, data, and operational AI — same team, same way of shipping. No hollow deliverables, no slideware."
      />
      <ServiceGrid />
      <ContactCTA />
    </>
  );
}
