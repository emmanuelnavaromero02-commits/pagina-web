import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Deliverables } from "@/components/services/Deliverables";
import { SapDeepDive } from "@/components/services/SapDeepDive";
import { ServiceHero } from "@/components/services/ServiceHero";
import { WhenToUse } from "@/components/services/WhenToUse";
import { SERVICE_DETAILS } from "@/lib/site-data";

const detail = SERVICE_DETAILS["sap-integrations"];

export const metadata: Metadata = {
  title: `${detail.title} · SAP On-Premise · Cloud · BTP`,
  description: detail.intro,
  alternates: { canonical: "/services/sap-integrations" },
};

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
          label: "Review SAP integration",
          href: "/contact?topic=sap",
        }}
      />
      <ContactCTA />
    </>
  );
}
