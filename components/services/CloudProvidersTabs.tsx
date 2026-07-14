import { DeepDiveBlock } from "@/components/sections/DeepDiveBlock";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Tabs } from "@/components/ui/Tabs";
import { CLOUD_PROVIDERS } from "@/lib/data/services";
import { l } from "@/lib/i18n/config";

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
    </Section>
  );
}
