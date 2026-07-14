import { DeepDiveBlock } from "@/components/sections/DeepDiveBlock";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Tabs } from "@/components/ui/Tabs";
import { SOFTWARE_FACTORY_BLOCKS } from "@/lib/data/services";
import { l } from "@/lib/i18n/config";

export function SoftwareFactoryBlocks() {
  const tabs = SOFTWARE_FACTORY_BLOCKS.map((block) => ({
    id: block.id,
    label: block.label,
    content: <DeepDiveBlock block={block} />,
  }));

  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow={l("Modelo de fábrica", "Factory model")}
        title={l("Qué construimos, cómo operamos y con qué stack", "What we build, how we operate, and with which stack")}
        description={l("Una fábrica de software organiza la entrega, la calidad y el soporte con responsabilidades definidas.", "A software factory organizes delivery, quality, and support with defined responsibilities.")}
      />
      <Tabs ariaLabel={l("Modelo de fábrica", "Factory model")} tabs={tabs} className="mt-10" />
    </Section>
  );
}
