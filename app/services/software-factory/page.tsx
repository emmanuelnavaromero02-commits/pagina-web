import { ContactCTA } from "@/components/home/ContactCTA";
import { Deliverables } from "@/components/services/Deliverables";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SoftwareFactoryBlocks } from "@/components/services/SoftwareFactoryBlocks";
import { WhenToUse } from "@/components/services/WhenToUse";
import { SERVICE_DETAILS } from "@/lib/site-data";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

const detail = SERVICE_DETAILS["software-factory"];

export const metadata = createPageMetadata({
  path: "/services/software-factory",
  title: `${detail.title} · ${l("Equipos senior dedicados", "Senior dedicated teams")}`,
  description: detail.intro,
});

export default function SoftwareFactoryPage() {
  return (
    <>
      <ServiceHero
        eyebrow={detail.eyebrow}
        title={detail.title}
        description={detail.intro}
        icon={detail.icon}
      />
      <SoftwareFactoryBlocks />
      <WhenToUse slug="software-factory" />
      <Deliverables
        slug="software-factory"
        related={{
          label: l("Conocer Enterprise Copilot", "Explore Enterprise Copilot"),
          href: "/copilot",
        }}
      />
      <ContactCTA />
    </>
  );
}
