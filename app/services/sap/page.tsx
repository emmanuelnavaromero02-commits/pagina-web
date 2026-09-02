import type { SpecializedPage } from "@/components/services/SpecializedServicePage";
import { SapServicesPage } from "@/components/services/SapServicesPage";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

const page: SpecializedPage = {
  slug: "sap",
  eyebrow: l("SAP · Servicios de punta a punta", "SAP · End-to-end services"),
  title: l("Servicios SAP", "SAP services"),
  parent: { label: l("Servicios", "Services"), href: "/services" },
  intro: l(
    "Estrategia, transformación S/4HANA, implementación funcional, HCM y nómina, tecnología, datos, integración y operación administrada bajo un modelo conectado.",
    "Strategy, S/4HANA transformation, functional implementation, HCM and payroll, technology, data, integration, and managed operations under one connected model.",
  ),
  problem: "",
  whatWeDo: [],
  capabilities: [],
  deliverables: [],
};

export const metadata = createPageMetadata({
  path: "/services/sap",
  title: l(
    "Servicios SAP · S/4HANA, ERP, HCM, datos y AMS",
    "SAP services · S/4HANA, ERP, HCM, data, and AMS",
  ),
  description: page.intro,
});

export default function SapPage() {
  return <SapServicesPage data={page} />;
}
