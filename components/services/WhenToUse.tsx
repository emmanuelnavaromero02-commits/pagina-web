import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import type { ServiceCard } from "@/lib/site-data";
import { SERVICE_WHEN_TO_USE } from "@/lib/site-data";
import { l } from "@/lib/i18n/config";

type WhenToUseProps = {
  slug: ServiceCard["slug"];
  variant?: "light" | "dark";
};

export function WhenToUse({ slug, variant = "light" }: WhenToUseProps) {
  const content = SERVICE_WHEN_TO_USE[slug];
  const isDark = variant === "dark";
  return (
    <Section className={isDark ? "bg-ink-950 text-white" : "bg-ink-50"}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div>
          <p
            className={
              isDark
                ? "text-xs font-semibold uppercase tracking-[0.18em] text-accent-400"
                : "text-xs font-semibold uppercase tracking-[0.18em] text-brand-700"
            }
          >
            {l("Cuándo aplica", "When it applies")}
          </p>
          <h2
            className={`mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl ${
              isDark ? "text-white" : "text-ink-950"
            }`}
          >
            {content.title}
          </h2>
          <p
            className={`mt-4 text-base leading-relaxed ${
              isDark ? "text-ink-300" : "text-ink-600"
            }`}
          >
            {content.subtitle}
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {content.items.map((item) => (
            <li
              key={item}
              className={
                isDark
                  ? "flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-ink-200"
                  : "flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4 text-sm text-ink-800 shadow-soft"
              }
            >
              <CheckCircle2
                className={`mt-0.5 h-4 w-4 shrink-0 ${
                  isDark ? "text-accent-400" : "text-brand-700"
                }`}
              />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
