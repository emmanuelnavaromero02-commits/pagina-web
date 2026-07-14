import { ExperienceEducation } from "@/components/experience/ExperienceEducation";
import { ExperienceRoles } from "@/components/experience/ExperienceRoles";
import { ExperienceTracks } from "@/components/experience/ExperienceTracks";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ExperienceProof } from "@/components/home/ExperienceProof";
import { ProofStrip } from "@/components/home/ProofStrip";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { EXPERIENCE_HIGHLIGHTS } from "@/lib/site-data";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/experience",
  title: l(
    "Experiencia del equipo · SAP · Nube · Datos · IA",
    "Team experience · SAP · Cloud · Data · AI",
  ),
  description: l(
    "Experiencia profesional del equipo en SAP, nube, datos, IA, fábricas de software e integración. No representa la antigüedad de la sociedad constituida en 2026.",
    "The team's professional experience across SAP, cloud, data, AI, software factories, and integration. It does not represent the age of the company incorporated in 2026.",
  ),
});

export default function ExperiencePage() {
  return (
    <>
      <ServiceHero
        eyebrow={l("Experiencia del equipo", "Team experience")}
        title={l(
          "Experiencia profesional aplicada a entornos empresariales",
          "Professional experience applied to enterprise environments",
        )}
        description={l(
          "Trayectoria de los especialistas en SAP, nube, datos e IA operativa. Esta experiencia corresponde a sus carreras profesionales y no a la antigüedad de 7VS Business Solutions, constituida en 2026.",
          "Specialist experience across SAP, cloud, data, and operational AI. This experience belongs to their professional careers, not to the age of 7VS Business Solutions, incorporated in 2026.",
        )}
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow={l("Capacidades del equipo", "Team capabilities")}
          title={l(
            "Cuatro ámbitos de experiencia profesional",
            "Four areas of professional experience",
          )}
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {EXPERIENCE_HIGHLIGHTS.map((h) => {
            const Icon = h.icon;
            return (
              <Card key={h.title} as="li" interactive>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <CardTitle className="mt-5">{h.title}</CardTitle>
                <CardDescription>{h.description}</CardDescription>
              </Card>
            );
          })}
        </ul>
      </Section>

      <ExperienceTracks />
      <ExperienceRoles />
      <ExperienceEducation />
      <ProofStrip />
      <ExperienceProof />
      <ContactCTA />
    </>
  );
}
