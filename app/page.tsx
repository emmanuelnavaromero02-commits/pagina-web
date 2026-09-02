import { ContactCTA } from "@/components/home/ContactCTA";
import { CopilotSpotlight } from "@/components/home/CopilotSpotlight";
import { Hero } from "@/components/home/Hero";
import { HowWeWork } from "@/components/home/HowWeWork";
import { InnovationAnnouncements } from "@/components/home/InnovationAnnouncements";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { EU_MARKET_ENABLED } from "@/lib/constants";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/",
  title: l(
    EU_MARKET_ENABLED
      ? "Soluciones empresariales · Software, SAP e inteligencia para México y la Unión Europea"
      : "Soluciones empresariales · Software, SAP e inteligencia para México",
    EU_MARKET_ENABLED
      ? "Enterprise solutions · Software, SAP, and intelligence for Mexico and the European Union"
      : "Enterprise solutions · Software, SAP, and intelligence for Mexico",
  ),
  description: l(
    "Siete dominios empresariales que integran personas y nómina, SAP S/4HANA, fábrica ABAP + Fiori, AMS, nube, seguridad e inteligencia de decisión.",
    "Seven enterprise domains integrating people and payroll, SAP S/4HANA, an ABAP + Fiori Factory, AMS, cloud, security, and decision intelligence.",
  ),
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <InnovationAnnouncements />
      <ServicesOverview />
      <CopilotSpotlight />
      <HowWeWork />
      <ContactCTA />
    </>
  );
}
