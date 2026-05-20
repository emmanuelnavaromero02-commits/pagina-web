import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { AnimatedCopilotDemo } from "@/components/copilot/AnimatedCopilotDemo";
import { LinkButton } from "@/components/ui/Button";

const HERO_STATS = [
  { label: "Reports", value: "Hours → minutes" },
  { label: "Audit evidence", value: "Days → minutes" },
  { label: "Reconciliation", value: "Days → guided review" },
  { label: "Decisions", value: "Delayed → traceable" },
];

export function CopilotHero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(900px_500px_at_15%_0%,rgba(91,225,196,0.18),transparent_60%),radial-gradient(1000px_600px_at_100%_0%,rgba(59,101,245,0.22),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:pt-28">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-400">
              <Sparkles className="h-3.5 w-3.5" />
              Enterprise Copilot
            </div>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              From manual work to{" "}
              <span className="bg-gradient-to-r from-accent-400 via-accent-500 to-brand-400 bg-clip-text text-transparent">
                traceable answers in minutes.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-200">
              Enterprise Copilot connects{" "}
              <strong className="text-white">SAP</strong>,{" "}
              <strong className="text-white">databases</strong>,{" "}
              <strong className="text-white">APIs</strong>,{" "}
              <strong className="text-white">reports</strong>, and{" "}
              <strong className="text-white">business rules</strong> so teams
              can ask, validate, explain, and act with evidence, permissions,
              and auditability.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-3">
              {HERO_STATS.map((s) => (
                <li
                  key={s.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 backdrop-blur"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                    {s.label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white">
                    {s.value}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="#metrics" size="lg">
                View operational impact
                <ArrowDown className="h-4 w-4" />
              </LinkButton>
              <LinkButton
                href="/copilot/pilot"
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                Request a pilot
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
            </div>

            <p className="mt-6 max-w-2xl text-xs leading-relaxed text-ink-500">
              Indicative scenarios. Actual impact depends on connected sources,
              data quality, permissions, process complexity, and pilot scope.
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand-400/20 via-accent-400/10 to-transparent blur-2xl"
            />
            <div className="relative">
              <AnimatedCopilotDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
