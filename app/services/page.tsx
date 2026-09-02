import { ContactCTA } from "@/components/home/ContactCTA";
import { ServiceDirectory } from "@/components/services/ServiceDirectory";
import { ServiceHero } from "@/components/services/ServiceHero";
import { PORTFOLIO_SERVICE_COUNT } from "@/lib/data/portfolio";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/services",
  title: l(
    "Portafolio completo · SAP, nómina, software, cloud, datos e IA",
    "Complete portfolio · SAP, payroll, software, cloud, data, and AI",
  ),
  description: l(
    "Siete dominios coordinados por un mismo equipo: personas y nómina, S/4HANA, fábrica de software, AMS, nube y datos, privacidad e innovación con IA.",
    "Seven domains coordinated by one team: people and payroll, S/4HANA, software factory, AMS, cloud and data, privacy, and AI innovation.",
  ),
});

export default function ServicesPage() {
  return (
    <>
      <ServiceHero
        eyebrow={l("Servicios empresariales", "Enterprise services")}
        title={l(
          "Transformación empresarial, de la estrategia a la operación.",
          "Enterprise transformation, from strategy to operations.",
        )}
        description={l(
          "Integramos personas, nómina, SAP, software, operación, nube, datos, seguridad e inteligencia aplicada para resolver prioridades críticas con una ejecución conectada.",
          "We integrate people, payroll, SAP, software, operations, cloud, data, security, and applied intelligence to solve critical priorities through connected execution.",
        )}
        badges={[
          l("7 dominios empresariales", "7 enterprise domains"),
          l(`${PORTFOLIO_SERVICE_COUNT} capacidades`, `${PORTFOLIO_SERVICE_COUNT} capabilities`),
          l("De estrategia a operación", "From strategy to operations"),
          l("México · cobertura internacional", "Mexico · international coverage"),
        ]}
        primaryCta={{
          label: l("Explorar servicios", "Explore services"),
          href: "#directorio-panel",
        }}
        secondaryCta={{
          label: l("Hablar con un especialista", "Talk to a specialist"),
          href: "/contact",
        }}
      />
      <ServiceDirectory />
      <ContactCTA />
    </>
  );
}
