import { DeepDiveBlock } from "@/components/sections/DeepDiveBlock";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Tabs } from "@/components/ui/Tabs";
import { SOFTWARE_FACTORY_BLOCKS } from "@/lib/data/services";

export function SoftwareFactoryBlocks() {
  const tabs = SOFTWARE_FACTORY_BLOCKS.map((block) => ({
    id: block.id,
    label: block.label,
    content: <DeepDiveBlock block={block} />,
  }));

  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Modelo de fábrica"
        title="Qué construimos, cómo operamos y con qué tecnologías"
        description="Una fábrica de software no es un grupo de programadores. Es una operación con responsabilidad sobre construcción, calidad y soporte."
      />
      <Tabs
        ariaLabel="Modelo de fábrica"
        tabs={tabs}
        className="mt-10"
      />
    </Section>
  );
}
