import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Deliverables } from "@/components/services/Deliverables";
import { EnterpriseAIBlocks } from "@/components/services/EnterpriseAIBlocks";
import { ServiceHero } from "@/components/services/ServiceHero";
import { WhenToUse } from "@/components/services/WhenToUse";
import { SERVICE_DETAILS } from "@/lib/site-data";

const detail = SERVICE_DETAILS["enterprise-ai"];

export const metadata: Metadata = {
  title: `${detail.title} · GenAI · ML · Corporate RAG`,
  description: detail.intro,
  alternates: { canonical: "/services/enterprise-ai" },
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
      <EnterpriseAIBlocks />
      <WhenToUse slug="enterprise-ai" variant="dark" />
      <Deliverables
        slug="enterprise-ai"
        related={{
          label: "Explore Enterprise Copilot",
          href: "/copilot",
        }}
      />
      <ContactCTA />
    </>
  );
}
