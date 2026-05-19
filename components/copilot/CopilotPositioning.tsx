import { Section } from "@/components/ui/Section";

export function CopilotPositioning() {
  return (
    <Section className="bg-white">
      <div className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          Positioning
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
          Not AI for asking.{" "}
          <span className="block sm:inline">
            Intelligence for{" "}
            <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-accent-500 bg-clip-text text-transparent">
              activating, optimizing, and transforming
            </span>{" "}
            operations.
          </span>
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-600 sm:text-lg">
          Enterprise Copilot connects systems, data, reports, and business
          rules so teams can ask, validate, explain, and act with evidence,
          permissions, and auditability.
        </p>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-700">
          We do not replace decision-makers. We give them faster, traceable
          intelligence.
        </p>
      </div>
    </Section>
  );
}
