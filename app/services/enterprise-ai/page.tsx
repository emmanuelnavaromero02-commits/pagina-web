import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Deliverables } from "@/components/services/Deliverables";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServiceHero } from "@/components/services/ServiceHero";
import { WhenToUse } from "@/components/services/WhenToUse";
import { SERVICE_DETAILS } from "@/lib/site-data";

const detail = SERVICE_DETAILS["enterprise-ai"];

export const metadata: Metadata = {
  title: `${detail.title} · GenAI · ML · RAG corporativo`,
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
      <WhenToUse slug="enterprise-ai" variant="dark" />
      <ServiceDetail slug="enterprise-ai" />
      <Deliverables
        slug="enterprise-ai"
        related={{
          label: "Ver Copiloto Empresarial",
          href: "/copilot",
        }}
      />
      <ContactCTA />
    </>
  );
}
