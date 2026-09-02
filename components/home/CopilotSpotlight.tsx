import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Check,
  ChevronRight,
  CircleDollarSign,
  CodeXml,
  Gauge,
  Layers3,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Waypoints,
} from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { l } from "@/lib/i18n/config";

export function CopilotSpotlight() {
  return (
    <Section id="innovaciones" className="dark-panel relative overflow-hidden text-white">
      <div aria-hidden className="surface-noise pointer-events-none absolute inset-0 opacity-[0.08]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent-400/20 bg-accent-400/10 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent-400">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          {l("Pancarta de innovación · Nueva capacidad", "Innovation banner · New capability")}
        </div>

        <div className="mt-7 grid gap-10 xl:grid-cols-[0.86fr_1.14fr] xl:items-center xl:gap-16">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-300">
              7 / {l("Inteligencia de decisión", "Decision intelligence")}
            </p>
            <h2 className="mt-4 max-w-4xl text-balance font-display text-[2.6rem] font-semibold leading-[0.98] tracking-[-0.052em] text-white sm:text-5xl lg:text-6xl">
              {l("Antes de actuar,", "Before acting,")} {" "}
              <span className="bg-gradient-to-r from-accent-400 via-white to-brand-300 bg-clip-text text-transparent">
                {l("estudia todas las señales.", "study every signal.")}
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
              {l(
                "Un sistema de inteligencia empresarial que une un núcleo cuantitativo calibrado, agentes especializados e IA generativa. Primero mide y compara; después interpreta, explica y prepara una acción para que la persona responsable decida con ventaja.",
                "An enterprise intelligence system combining a calibrated quantitative core, specialist agents, and generative AI. It measures and compares first, then interprets, explains, and prepares an action so the accountable person can decide with an edge.",
              )}
            </p>

            <ul className="mt-7 grid gap-3 text-sm text-ink-200 sm:grid-cols-2">
              <InnovationPoint text={l("Explora restricciones y rutas posibles", "Explores constraints and possible paths")} />
              <InnovationPoint text={l("Explica qué cambió y por qué importa", "Explains what changed and why it matters")} />
              <InnovationPoint text={l("Trabaja sobre datos y permisos gobernados", "Works over governed data and permissions")} />
              <InnovationPoint text={l("Mantiene la decisión final en manos humanas", "Keeps final authority in human hands")} />
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/copilot#demo-interactiva" size="lg" className="bg-accent-400 text-ink-950 hover:bg-accent-400 hover:text-ink-950">
                {l("Verlo funcionar", "See it work")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </LinkButton>
              <LinkButton href="/copilot/how-it-works" size="lg" variant="outline" className="border-white/15 bg-white/[0.05] text-white hover:border-white/30 hover:bg-white/10 hover:text-white">
                {l("Conocer la arquitectura", "Explore the architecture")}
              </LinkButton>
            </div>
          </div>

          <DecisionSystemPreview />
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] backdrop-blur sm:mt-16">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div className="flex items-center justify-between gap-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-300/20 bg-brand-400/10 text-brand-300">
                  <CodeXml className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-brand-300">
                  {l("Innovación de entrega", "Delivery innovation")}
                </span>
              </div>
              <h3 className="mt-7 font-display text-3xl font-semibold tracking-tight text-white">
                ABAP + Fiori Factory
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-300 sm:text-base">
                {l(
                  "Una fábrica de software SAP que transforma demanda dispersa en un flujo industrial de entrega: células especializadas, componentes reutilizables, calidad integrada y trazabilidad de punta a punta.",
                  "A SAP software factory turning fragmented demand into an industrial delivery flow through specialist cells, reusable components, built-in quality, and end-to-end traceability.",
                )}
              </p>
              <Link href="/services/software-factory#abap-factory-lab" className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-white">
                {l("Abrir simulador de ahorro", "Open the savings simulator")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-3">
              <FactoryMetric
                icon={CircleDollarSign}
                value={l("Hasta 60%", "Up to 60%")}
                label={l("reducción potencial del costo", "potential cost reduction")}
              />
              <FactoryMetric
                icon={TimerReset}
                value={l("Ciclos cortos", "Short cycles")}
                label={l("entregas frecuentes y visibles", "frequent, visible delivery")}
              />
              <FactoryMetric
                icon={ShieldCheck}
                value={l("QA integrado", "Built-in QA")}
                label={l("evidencia dentro de cada liberación", "evidence inside every release")}
              />
            </div>
          </div>
          <p className="border-t border-white/10 px-6 py-3 text-[0.62rem] leading-relaxed text-ink-500 sm:px-8">
            {l(
              "El ahorro mostrado es una proyección potencial. El resultado real depende de volumen, repetibilidad, complejidad, modelo actual y alcance validado.",
              "Savings shown are a potential projection. Actual results depend on volume, repeatability, complexity, current model, and validated scope.",
            )}
          </p>
        </div>
      </div>
    </Section>
  );
}

function InnovationPoint({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-400/10 text-accent-400">
        <Check className="h-3 w-3" aria-hidden="true" />
      </span>
      {text}
    </li>
  );
}

function DecisionSystemPreview() {
  const steps = [
    {
      icon: Waypoints,
      eyebrow: l("01 · Observar", "01 · Observe"),
      title: l("Señales gobernadas", "Governed signals"),
      meta: "SAP · HR · Finance · Ops",
      tone: "blue",
    },
    {
      icon: ChartNoAxesCombined,
      eyebrow: l("02 · Comparar", "02 · Compare"),
      title: l("Núcleo cuantitativo", "Quantitative core"),
      meta: l("Restricciones · sensibilidad · rutas", "Constraints · sensitivity · paths"),
      tone: "mint",
    },
    {
      icon: BrainCircuit,
      eyebrow: l("03 · Explicar", "03 · Explain"),
      title: l("Agentes + IA generativa", "Agents + generative AI"),
      meta: l("Contexto · causas · narrativa", "Context · causes · narrative"),
      tone: "blue",
    },
  ] as const;

  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-10 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-950/70 p-3 shadow-[0_45px_130px_-48px_rgba(0,0,0,.9)] backdrop-blur-xl sm:p-4">
        <div className="flex items-center justify-between border-b border-white/10 px-2 pb-4 pt-1 sm:px-3">
          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-accent-400">7 / Decision Core</p>
            <p className="mt-1 text-xs text-ink-500">{l("Demostración conceptual", "Conceptual demonstration")}</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[0.62rem] font-semibold text-ink-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400 shadow-[0_0_0_4px_rgba(91,225,196,.1)]" />
            {l("Sistema preparado", "System ready")}
          </span>
        </div>

        <div className="mt-3 space-y-2.5 rounded-[1.45rem] border border-white/10 bg-white/[0.035] p-3 sm:p-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const mint = step.tone === "mint";
            return (
              <div key={step.title}>
                <div className="grid gap-3 rounded-2xl border border-white/10 bg-ink-950/75 p-4 sm:grid-cols-[2.75rem_1fr_auto] sm:items-center">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${mint ? "bg-accent-400/10 text-accent-400" : "bg-brand-400/10 text-brand-300"}`}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className={`text-[0.58rem] font-bold uppercase tracking-[0.17em] ${mint ? "text-accent-400" : "text-brand-300"}`}>{step.eyebrow}</p>
                    <p className="mt-1 text-sm font-semibold text-white">{step.title}</p>
                    <p className="mt-1 text-[0.66rem] text-ink-500">{step.meta}</p>
                  </div>
                  <ChevronRight className="hidden h-4 w-4 text-ink-600 sm:block" aria-hidden="true" />
                </div>
                {index < steps.length - 1 ? (
                  <div aria-hidden className="mx-auto h-2.5 w-px bg-gradient-to-b from-brand-400/50 to-accent-400/30" />
                ) : null}
              </div>
            );
          })}

          <div className="rounded-2xl border border-accent-400/20 bg-accent-400/10 p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-400 text-ink-950">
                <Gauge className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.17em] text-accent-400">04 · {l("Preparar decisión", "Prepare decision")}</p>
                  <span className="rounded-full border border-accent-400/20 px-2 py-1 text-[0.56rem] font-semibold text-accent-400">{l("Aprobación humana", "Human approval")}</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-white">{l("Tres rutas comparadas. Una recomendación explicable.", "Three paths compared. One explainable recommendation.")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-3 text-center text-[0.6rem] font-semibold text-ink-400">
          <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-2">{l("Calibrado", "Calibrated")}</span>
          <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-2">{l("Trazable", "Traceable")}</span>
          <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-2">{l("Supervisado", "Supervised")}</span>
        </div>
      </div>
    </div>
  );
}

function FactoryMetric({ icon: Icon, value, label }: { icon: typeof Layers3; value: string; label: string }) {
  return (
    <div className="bg-ink-950/65 p-6 sm:p-8 lg:min-h-[17rem]">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] text-brand-300">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <p className="mt-10 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">{value}</p>
      <p className="mt-2 max-w-[12rem] text-sm leading-relaxed text-ink-400">{label}</p>
    </div>
  );
}
