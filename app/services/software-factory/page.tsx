import { ContactCTA } from "@/components/home/ContactCTA";
import { AbapFactoryShowcase } from "@/components/services/AbapFactoryShowcase";
import { Deliverables } from "@/components/services/Deliverables";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SoftwareFactoryBlocks } from "@/components/services/SoftwareFactoryBlocks";
import { WhenToUse } from "@/components/services/WhenToUse";
import { SERVICE_DETAILS } from "@/lib/site-data";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

const detail = SERVICE_DETAILS["software-factory"];

export const metadata = createPageMetadata({
  path: "/services/software-factory",
  title: l(
    "Fábrica ABAP + Fiori · Menor costo y entregas más rápidas",
    "ABAP + Fiori Factory · Lower cost and faster delivery",
  ),
  description: l(
    "Fábrica especializada en ABAP, S/4HANA, Fiori y SAPUI5 con calidad integrada y una reducción potencial de hasta 60% en el costo de entrega, sujeta al alcance evaluado.",
    "A factory specialized in ABAP, S/4HANA, Fiori, and SAPUI5 with built-in quality and potential delivery cost reduction of up to 60%, subject to the assessed scope.",
  ),
});

export default function SoftwareFactoryPage() {
  return (
    <>
      <ServiceHero
        eyebrow={l("Nueva oferta · Fábrica SAP", "New offer · SAP Factory")}
        title={l(
          "Fábrica ABAP + Fiori para entregar más, gastar menos y proteger la calidad.",
          "ABAP + Fiori Factory to deliver more, spend less, and protect quality.",
        )}
        description={l(
          "Industrializamos el backlog SAP con especialistas, componentes reutilizables, ciclos cortos y controles de calidad integrados. El objetivo: reducir hasta 60% el costo de entrega y acelerar la salida a producción, según el alcance validado.",
          "We industrialize the SAP backlog with specialists, reusable components, short cycles, and built-in quality controls. The goal: reduce delivery cost by up to 60% and accelerate production releases, based on the validated scope.",
        )}
        icon={detail.icon}
        badges={[
          l("Hasta 60% de reducción potencial", "Up to 60% potential reduction"),
          "ABAP · ECC · S/4HANA",
          "Fiori · SAPUI5 · OData",
          l("QA integrado", "Built-in QA"),
        ]}
        primaryCta={{
          label: l("Calcular ahorro potencial", "Calculate potential savings"),
          href: "#abap-factory-lab",
        }}
        secondaryCta={{
          label: l("Hablar con un especialista", "Talk to a specialist"),
          href: "/contact?topic=software",
        }}
      />
      <AbapFactoryShowcase />
      <SoftwareFactoryBlocks />
      <WhenToUse slug="software-factory" />
      <Deliverables
        slug="software-factory"
        related={{
          label: l("Hablar sobre tu proyecto", "Discuss your project"),
          href: "/contact?topic=software",
        }}
      />
      <ContactCTA primaryHref="/contact?topic=software" />
    </>
  );
}
