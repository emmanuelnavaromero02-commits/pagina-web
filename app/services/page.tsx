import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { ServiceHero } from "@/components/services/ServiceHero";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de fábrica de software, SAP & integraciones, cloud & data e IA empresarial.",
};

export default function ServicesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Servicios"
        title="Capacidades centrales para operación crítica"
        description="Fábrica de software, SAP, cloud, datos e IA empresarial bajo el mismo equipo. Sin entregables huecos, sin diapositivas vacías."
      />
      <ServiceGrid />
      <ContactCTA />
    </>
  );
}
