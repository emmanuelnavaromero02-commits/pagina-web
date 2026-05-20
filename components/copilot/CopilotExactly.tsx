import { Section, SectionHeader } from "@/components/ui/Section";
import { COPILOT_EXACTLY } from "@/lib/data/copilot";

export function CopilotExactly() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="7 Enterprise Copilot Capabilities"
        title="Operational capabilities — not generic chat"
        description="Seven specific things Enterprise Copilot does over real systems, with permissions, validations, and an audit trail behind every step."
      />

      <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {COPILOT_EXACTLY.map((item, idx) => {
          const Icon = item.icon;
          return (
            <li
              key={item.text}
              className="group relative flex items-start gap-3 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-elevate"
            >
              <span className="absolute -top-3 left-5 inline-flex items-center rounded-full bg-brand-700 px-2 py-0.5 text-[10px] font-semibold tracking-widest text-white">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="mt-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-100">
                <Icon className="h-4 w-4" />
              </span>
              <p className="pt-2 text-sm leading-relaxed text-ink-800">
                {item.text}
              </p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
