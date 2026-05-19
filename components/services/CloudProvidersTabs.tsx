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
        eyebrow="Cloud por proveedor"
        title="Qué hacemos en AWS, Azure y GCP"
        description="No usamos la palabra cloud como adorno. Cada proveedor entra cuando aporta algo concreto al caso del cliente."
      />
      <Tabs ariaLabel="Cloud por proveedor" tabs={tabs} className="mt-10" />
    </Section>
  );
}
