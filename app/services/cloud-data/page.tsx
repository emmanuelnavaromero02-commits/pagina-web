import { CloudProvidersTabs } from "@/components/services/CloudProvidersTabs";
import { ContactCTA } from "@/components/home/ContactCTA";
import { DataPlatform } from "@/components/services/DataPlatform";
import { Deliverables } from "@/components/services/Deliverables";
import { ServiceHero } from "@/components/services/ServiceHero";
import { WhenToUse } from "@/components/services/WhenToUse";
import { SERVICE_DETAILS } from "@/lib/site-data";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

const detail = SERVICE_DETAILS["cloud-data"];

export const metadata = createPageMetadata({
  path: "/services/cloud-data",
  title: `${detail.title} · AWS · Azure · GCP · Auditable BI`,
  description: detail.intro,
});

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
          label: l("Hablar con el equipo", "Talk to the team"),
          href: "/contact?topic=governance",
        }}
      />
      <ContactCTA />
    </>
  );
}
