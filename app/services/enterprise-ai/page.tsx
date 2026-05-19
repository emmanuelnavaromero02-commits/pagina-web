import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SERVICE_DETAILS } from "@/lib/site-data";

const detail = SERVICE_DETAILS["enterprise-ai"];

export const metadata: Metadata = {
  title: detail.title,
  description: detail.intro,
};

export default function EnterpriseAIPage() {
  return (
    <>
      <ServiceHero
        eyebrow={detail.eyebrow}
        title={detail.title}
        description={detail.intro}
        icon={detail.icon}
      />
      <ServiceDetail slug="enterprise-ai" />
      <ContactCTA />
    </>
  );
}
