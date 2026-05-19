import { DeepDiveBlock } from "@/components/sections/DeepDiveBlock";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Tabs } from "@/components/ui/Tabs";
import { CLOUD_PROVIDERS } from "@/lib/data/services";

export function CloudProvidersTabs() {
  const tabs = CLOUD_PROVIDERS.map((block) => ({
    id: block.id,
    label: block.label,
    content: <DeepDiveBlock block={block} />,
  }));

  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Cloud by provider"
        title="What we do on AWS, Azure, and GCP"
        description="We do not use the word cloud as decoration. Each provider enters the picture when it adds something concrete to the case."
      />
      <Tabs ariaLabel="Cloud by provider" tabs={tabs} className="mt-10" />
    </Section>
  );
}
