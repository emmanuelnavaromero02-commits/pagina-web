import type { Metadata } from "next";
import { CloudProvidersTabs } from "@/components/services/CloudProvidersTabs";
import { ContactCTA } from "@/components/home/ContactCTA";
import { DataPlatform } from "@/components/services/DataPlatform";
import { Deliverables } from "@/components/services/Deliverables";
import { ServiceHero } from "@/components/services/ServiceHero";
import { WhenToUse } from "@/components/services/WhenToUse";
import { SERVICE_DETAILS } from "@/lib/site-data";

const detail = SERVICE_DETAILS["cloud-data"];

export const metadata: Metadata = {
  title: `${detail.title} · AWS · Azure · GCP · Auditable BI`,
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
      <CloudProvidersTabs />
      <DataPlatform />
      <WhenToUse slug="cloud-data" />
      <Deliverables
        slug="cloud-data"
        related={{
          label: "Talk to the team",
          href: "/contact?topic=cloud-data",
        }}
      />
      <ContactCTA />
    </>
  );
}
