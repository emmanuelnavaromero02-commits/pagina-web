import { DeepDiveBlock } from "@/components/sections/DeepDiveBlock";
import { Section, SectionHeader } from "@/components/ui/Section";
import { DATA_PLATFORM_BLOCKS } from "@/lib/data/services";

export function DataPlatform() {
  return (
    <Section className="bg-ink-50">
      <SectionHeader
        eyebrow="Data and reporting"
        title="From enterprise databases to auditable executive reports"
        description="Three blocks that cover the full path: enterprise databases, auditable pipelines, and reporting with traceability."
      />
      <div className="mt-12 space-y-12">
        {DATA_PLATFORM_BLOCKS.map((block) => (
          <div
            key={block.id}
            className="rounded-2xl border border-ink-100 bg-white p-7 shadow-soft sm:p-10"
          >
            <DeepDiveBlock block={block} />
          </div>
        ))}
      </div>
    </Section>
  );
}
