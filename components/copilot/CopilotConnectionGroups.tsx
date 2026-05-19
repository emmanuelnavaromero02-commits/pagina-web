import { Section, SectionHeader } from "@/components/ui/Section";
import { COPILOT_CONNECTION_GROUPS } from "@/lib/data/copilot";

export function CopilotConnectionGroups() {
  return (
    <Section id="capabilities-by-connection" className="bg-ink-50">
      <SectionHeader
        eyebrow="Capabilities by connection"
        title="What the copilot can reach — and how it integrates"
        description="Connected to the platforms the client already operates, respecting permissions and traceability. Each block shows the source type and the technologies we have already shipped on."
      />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {COPILOT_CONNECTION_GROUPS.map((g) => {
          const Icon = g.icon;
          return (
            <li
              key={g.id}
              className="flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-soft"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink-950">
                {g.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                {g.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {g.badges.map((b) => (
                  <li
                    key={b}
                    className="rounded-full border border-ink-200 bg-ink-50 px-2.5 py-0.5 text-xs font-medium text-ink-700"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
