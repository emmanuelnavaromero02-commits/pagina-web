import { ContactCTA } from "@/components/home/ContactCTA";
import { Deliverables } from "@/components/services/Deliverables";
import { EnterpriseAIBlocks } from "@/components/services/EnterpriseAIBlocks";
import { ServiceHero } from "@/components/services/ServiceHero";
import { WhenToUse } from "@/components/services/WhenToUse";
import { SERVICE_DETAILS } from "@/lib/site-data";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

const detail = SERVICE_DETAILS["enterprise-ai"];

export const metadata = createPageMetadata({
  path: "/services/enterprise-ai",
  title: `${detail.title} · GenAI · ML · Corporate RAG`,
  description: detail.intro,
});

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
          label: l("Conocer los Agentes de Decisión IA", "Explore AI Decision Agents"),
          href: "/copilot",
        }}
      />
      <ContactCTA />
    </>
  );
}
