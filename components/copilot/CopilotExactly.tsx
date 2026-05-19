import { Section, SectionHeader } from "@/components/ui/Section";
import { COPILOT_EXACTLY } from "@/lib/data/copilot";

export function CopilotExactly() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="What it does exactly"
        title="Concrete operational actions — not vague answers"
        description="Not an open-ended assistant that offers opinions. A copilot that queries, cross-checks, validates, prepares, and logs over the client's real systems."
      />

      <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {COPILOT_EXACTLY.map((item) => {
          const Icon = item.icon;
          return (
            <li
              key={item.text}
              className="group flex items-start gap-3 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-elevate"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-100">
                <Icon className="h-4 w-4" />
              </span>
              <p className="pt-1 text-sm leading-relaxed text-ink-800">
                {item.text}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
