import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Deliverables } from "@/components/services/Deliverables";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServiceHero } from "@/components/services/ServiceHero";
import { WhenToUse } from "@/components/services/WhenToUse";
import { SERVICE_DETAILS } from "@/lib/site-data";

const detail = SERVICE_DETAILS["software-factory"];

export const metadata: Metadata = {
  title: `${detail.title} · Equipos senior dedicados`,
  description: detail.intro,
  alternates: { canonical: "/services/software-factory" },
};

export default function SoftwareFactoryPage() {
  return (
    <>
      <ServiceHero
        eyebrow={detail.eyebrow}
        title={detail.title}
        description={detail.intro}
        icon={detail.icon}
      />
      <WhenToUse slug="software-factory" />
      <ServiceDetail slug="software-factory" />
      <Deliverables
        slug="software-factory"
        related={{
          label: "Ver Copiloto Empresarial",
          href: "/copilot",
        }}
      />
      <ContactCTA />
    </>
  );
}
