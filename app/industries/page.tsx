import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { INDUSTRY_AREAS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Industrias y casos de uso",
  description:
    "Áreas funcionales y capacidades transversales: RRHH, finanzas, operaciones, reporting, integraciones SAP, automatización, soporte y gobierno de datos.",
};

export default function IndustriesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Industrias / casos de uso"
        title="Áreas donde aportamos valor"
        description="Combinamos software a medida, integraciones SAP y IA empresarial sobre áreas funcionales y capacidades transversales reales."
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Áreas"
          title="Funcionales y transversales"
          description="Cada bloque puede arrancar de forma independiente o combinado con otros."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRY_AREAS.map((area) => {
            const Icon = area.icon;
            return (
              <Card
                key={area.id}
                id={area.id}
                as="li"
                interactive
                className="scroll-mt-24"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <CardTitle className="mt-5">{area.title}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
                <ul className="mt-4 space-y-1.5">
                  {area.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-ink-700"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </ul>
      </Section>

      <ContactCTA />
    </>
  );
}
