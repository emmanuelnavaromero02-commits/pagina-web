import { ContactCTA } from "@/components/home/ContactCTA";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { ServiceHero } from "@/components/services/ServiceHero";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/services",
  title: l(
    "Servicios · Software, integración SAP, datos e IA",
    "Services · Software, SAP integration, data, and AI",
  ),
  description: l(
    "Cuatro líneas de servicio coordinadas por un mismo equipo: fábrica de software, integración empresarial, nube y datos gobernados e IA operativa.",
    "Four service lines coordinated by one team: Software Factory, Enterprise Integration, Cloud & Governed Data, and Operational AI.",
  ),
});

export default function ServicesPage() {
  return (
    <>
      <ServiceHero
        eyebrow={l("Servicios", "Services")}
        title={l(
          "Capacidades para operaciones de misión crítica",
          "Capabilities for mission-critical operations",
        )}
        description={l(
          "Fábrica de software, integración SAP, nube, datos e IA operativa, coordinados con una misma forma de trabajo y entregables verificables.",
          "Software Factory, SAP integration, cloud, data, and operational AI, coordinated through one delivery approach and verifiable deliverables.",
        )}
      />
      <ServiceGrid />
      <ContactCTA />
    </>
  );
}
