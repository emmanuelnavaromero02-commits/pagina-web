import { DeepDiveBlock } from "@/components/sections/DeepDiveBlock";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Tabs } from "@/components/ui/Tabs";
import { SAP_DEEP_DIVE } from "@/lib/data/services";

export function SapDeepDive() {
  const tabs = SAP_DEEP_DIVE.map((block) => ({
    id: block.id,
    label: block.label,
    content: <DeepDiveBlock block={block} />,
  }));

  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="SAP en profundidad"
        title="Qué sabemos hacer dentro de SAP"
        description="Seis frentes de trabajo sobre el ecosistema SAP, desde módulos funcionales y desarrollo ABAP hasta middleware empresarial y gobierno. Selecciona el frente que te interesa."
      />
      <Tabs ariaLabel="SAP en profundidad" tabs={tabs} className="mt-10" />
    </Section>
  );
}
