import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Experiencia · Clientes enterprise · SAP · Cloud · IA",
  description:
    "Experiencia entregando proyectos para corporativos grandes sobre SAP, cloud, datos e IA. Liderazgo, fábricas de software, integración y formación especializada.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <ServiceHero
        eyebrow="Experiencia"
        title="Trabajo real en clientes empresariales grandes"
        description="Programas entregados sobre SAP, cloud, datos e IA empresarial. Equipos senior con responsabilidad sobre la operación, no solo sobre el alcance."
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Lo que respalda al equipo"
          title="Cuatro frentes donde tenemos historia entregada"
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
