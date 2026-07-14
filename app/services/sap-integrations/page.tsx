import { ContactCTA } from "@/components/home/ContactCTA";
import { Deliverables } from "@/components/services/Deliverables";
import { SapDeepDive } from "@/components/services/SapDeepDive";
import { ServiceHero } from "@/components/services/ServiceHero";
import { WhenToUse } from "@/components/services/WhenToUse";
import { SERVICE_DETAILS } from "@/lib/site-data";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

const detail = SERVICE_DETAILS["sap-integrations"];

export const metadata = createPageMetadata({
  path: "/services/sap-integrations",
  title: `${detail.title} · SAP On-Premise · Cloud · BTP`,
  description: detail.intro,
});

export default function SapIntegrationsPage() {
  return (
    <>
      <ServiceHero
        eyebrow={detail.eyebrow}
        title={detail.title}
        description={detail.intro}
        icon={detail.icon}
      />
      <SapDeepDive />
      <WhenToUse slug="sap-integrations" />
      <Deliverables
        slug="sap-integrations"
        related={{
          label: l("Revisar una integración SAP", "Review a SAP integration"),
          href: "/contact?topic=sap",
        }}
      />
      <ContactCTA />
    </>
  );
}
