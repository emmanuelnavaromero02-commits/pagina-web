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
  title: "Experience · Enterprise clients · SAP · Cloud · AI",
  description:
    "Real delivery experience across SAP, cloud, data, and AI for large clients. Leadership, software factories, integration, and specialized training.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <ServiceHero
        eyebrow="Experience"
        title="Real work for large enterprise clients"
        description="Programs delivered across SAP, cloud, data, and operational AI. Senior teams accountable for the operation — not just the scope."
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow="What backs the team"
          title="Four fronts where we have delivered history"
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
