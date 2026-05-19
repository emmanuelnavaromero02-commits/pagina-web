import { Section, SectionHeader } from "@/components/ui/Section";
import { COPILOT_FLOW_STEPS } from "@/lib/data/copilot";

export function CopilotFlow() {
  return (
    <Section id="flow" className="bg-white">
      <SectionHeader
        eyebrow="Operational flow"
        title="Six steps, one conversation"
        description="From the user's question to the final action, with validations and traceability at every step. No shortcuts that break the operation."
      />
      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COPILOT_FLOW_STEPS.map((step) => {
          const Icon = step.icon;
          return (
            <li
              key={step.step}
              className="relative rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-elevate"
            >
              <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-brand-700 px-2.5 py-0.5 text-[10px] font-semibold tracking-widest text-white">
                {step.step}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-4 font-display text-base font-semibold text-ink-900">
                {step.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                {step.description}
              </p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
