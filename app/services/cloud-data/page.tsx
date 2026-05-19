import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Deliverables } from "@/components/services/Deliverables";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServiceHero } from "@/components/services/ServiceHero";
import { WhenToUse } from "@/components/services/WhenToUse";
import { SERVICE_DETAILS } from "@/lib/site-data";

const detail = SERVICE_DETAILS["cloud-data"];

export const metadata: Metadata = {
  title: `${detail.title} · AWS · Azure · GCP · BI auditable`,
  description: detail.intro,
  alternates: { canonical: "/services/cloud-data" },
};

export default function CloudDataPage() {
  return (
    <>
      <ServiceHero
        eyebrow={detail.eyebrow}
        title={detail.title}
        description={detail.intro}
        icon={detail.icon}
      />
      <WhenToUse slug="cloud-data" />
      <ServiceDetail slug="cloud-data" />
      <Deliverables
        slug="cloud-data"
        related={{
          label: "Hablar con el equipo",
          href: "/contact?topic=cloud-data",
        }}
      />
      <ContactCTA />
    </>
  );
}
