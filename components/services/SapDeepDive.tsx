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
        eyebrow="SAP in depth"
        title="What we do inside SAP"
        description="Six fronts across the SAP ecosystem — from functional modules and ABAP development through enterprise middleware and governance. Pick the front that matters to you."
      />
      <Tabs ariaLabel="SAP in depth" tabs={tabs} className="mt-10" />
    </Section>
  );
}
