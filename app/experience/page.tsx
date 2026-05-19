import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ExperienceProof } from "@/components/home/ExperienceProof";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { EXPERIENCE_CLIENTS, EXPERIENCE_HIGHLIGHTS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Experiencia",
  description:
    "Experiencia entregando proyectos para corporativos grandes en SAP, cloud, datos e IA empresarial.",
};

export default function ExperiencePage() {
  return (
    <>
      <ServiceHero
        eyebrow="Experiencia"
        title="Trabajo real en clientes empresariales grandes"
        description="Hemos entregado proyectos sobre SAP, cloud, datos e IA empresarial para corporativos en retail, energía, telecomunicaciones, manufactura, banca y sector público."
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

      <Section className="bg-ink-50">
        <SectionHeader
          eyebrow="Sectores"
          title="Donde hemos entregado"
          description="Trabajo con corporativos de distintos sectores, con foco en operación crítica e integraciones complejas."
        />
        <ul className="mt-10 flex flex-wrap gap-2">
          {EXPERIENCE_CLIENTS.map((c) => (
            <li
              key={c}
              className="rounded-full border border-ink-200 bg-white px-4 py-1.5 text-sm font-medium text-ink-800 shadow-soft"
            >
              {c}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm text-ink-500">
          El detalle por cliente se comparte bajo NDA durante el diagnóstico
          inicial.
        </p>
      </Section>

      <ExperienceProof />
      <ContactCTA />
    </>
  );
}
