import { DeepDiveBlock } from "@/components/sections/DeepDiveBlock";
import { LinkButton } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Tabs } from "@/components/ui/Tabs";
import { CLOUD_PROVIDERS } from "@/lib/data/services";
import { l } from "@/lib/i18n/config";
import { ArrowRight } from "lucide-react";

export function CloudProvidersTabs() {
  const tabs = CLOUD_PROVIDERS.map((block) => ({
    id: block.id,
    label: block.label,
    content: <DeepDiveBlock block={block} />,
  }));

  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow={l("Cloud por proveedor", "Cloud by provider")}
        title={l("Qué hacemos en AWS, Azure y GCP", "What we do on AWS, Azure, and GCP")}
        description={l("Seleccionamos cada proveedor según las necesidades técnicas y operativas del caso.", "We select each provider according to the technical and operational needs of the case.")}
      />
      <Tabs ariaLabel={l("Cloud por proveedor", "Cloud by provider")} tabs={tabs} className="mt-10" />
      <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-brand-100 bg-brand-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <p className="text-sm font-semibold text-ink-950">{l("AWS ya tiene una página dedicada", "AWS now has a dedicated page")}</p>
          <p className="mt-1 text-sm leading-relaxed text-ink-600">{l("Assessment, migración de SAP y aplicaciones, modernización, FinOps y operación.", "Assessment, SAP and application migration, modernization, FinOps, and operations.")}</p>
        </div>
        <LinkButton href="/services/cloud-data/aws" variant="outline" className="shrink-0 border-brand-200 bg-white">
          {l("Explorar AWS", "Explore AWS")}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </LinkButton>
      </div>
    </Section>
  );
}
