import { Section, SectionHeader } from "@/components/ui/Section";
import { Tabs } from "@/components/ui/Tabs";
import { METHODOLOGIES } from "@/lib/data/home";

export function Methodologies() {
  const tabs = METHODOLOGIES.map((group) => ({
    id: group.id,
    label: group.label,
    content: (
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            {group.label}
          </p>
          <p className="mt-3 text-base leading-relaxed text-ink-600">
            {group.description}
          </p>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2">
          {group.items.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-ink-100 bg-white p-4 text-sm font-medium text-ink-800 shadow-soft"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  }));

  return (
    <Section className="bg-ink-50">
      <SectionHeader
        eyebrow="Methods & capabilities"
        title="Enterprise methods. Operational execution."
        description="Four capability groups we combine on every engagement. Selected to fit the case — not applied as a checklist."
      />
      <Tabs
        ariaLabel="Methodologies and capabilities"
        tabs={tabs}
        className="mt-10"
      />
    </Section>
  );
}
