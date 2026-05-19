import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import type { ServiceCard } from "@/lib/site-data";
import { SERVICE_DELIVERABLES } from "@/lib/site-data";

type DeliverablesProps = {
  slug: ServiceCard["slug"];
  related?: { label: string; href: string };
};

export function Deliverables({ slug, related }: DeliverablesProps) {
  const content = SERVICE_DELIVERABLES[slug];
  return (
    <Section className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            Qué entregamos
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-600">
            No vendemos diapositivas. Cada compromiso es algo tangible que
            puedes revisar, auditar y operar.
          </p>
          {related ? (
            <div className="mt-6">
              <LinkButton href={related.href} variant="outline" size="md">
                {related.label}
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
            </div>
          ) : null}
        </div>

        <ul className="space-y-3">
          {content.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4 text-sm text-ink-800 shadow-soft"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
