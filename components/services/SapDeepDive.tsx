import { DeepDiveBlock } from "@/components/sections/DeepDiveBlock";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Tabs } from "@/components/ui/Tabs";
import { SAP_DEEP_DIVE } from "@/lib/data/services";
import { l } from "@/lib/i18n/config";

export function SapDeepDive() {
  const tabs = SAP_DEEP_DIVE.map((block) => ({
    id: block.id,
    label: block.label,
    content: <DeepDiveBlock block={block} />,
  }));

  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow={l("SAP en detalle", "SAP in depth")}
        title={l("Qué hacemos dentro de SAP", "What we do inside SAP")}
        description={l("Seis frentes del ecosistema SAP: módulos funcionales, desarrollo ABAP, middleware empresarial y gobierno.", "Six areas across the SAP ecosystem: functional modules, ABAP development, enterprise middleware, and governance.")}
      />
      <Tabs ariaLabel={l("SAP en detalle", "SAP in depth")} tabs={tabs} className="mt-10" />
    </Section>
  );
}
