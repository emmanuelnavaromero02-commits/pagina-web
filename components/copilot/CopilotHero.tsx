import {
  ArrowRight,
  Bot,
  Calculator,
  Database,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { l } from "@/lib/i18n/config";

const HERO_STATS = [
  {
    label: l("Contexto", "Context"),
    value: l("Datos gobernados", "Governed data"),
  },
  {
    label: l("Agentes", "Agents"),
    value: l("Especialistas coordinados", "Coordinated specialists"),
  },
  {
    label: l("Decisión", "Decision"),
    value: l("Escenarios comparables", "Comparable scenarios"),
  },
  {
    label: l("Control", "Control"),
    value: l("Aprobación y auditoría", "Approval and audit"),
  },
];

const DECISION_FLOW = [
  {
    step: "01",
    title: l("Comprende", "Understands"),
    description: l("Integra contexto autorizado", "Integrates authorized context"),
    icon: Database,
  },
  {
    step: "02",
    title: l("Modela", "Models"),
    description: l("Calibra variables y restricciones", "Calibrates variables and constraints"),
    icon: Bot,
  },
  {
    step: "03",
    title: l("Interpreta", "Interprets"),
    description: l("Agentes explican rutas y riesgo", "Agents explain paths and risk"),
    icon: Calculator,
  },
  {
    step: "04",
    title: l("Actúa", "Acts"),
    description: l("Solicita aprobación y registra", "Requests approval and records"),
    icon: ShieldCheck,
  },
];

const AGENT_TAGS = [
  l("Finanzas", "Finance"),
  l("Talento", "Talent"),
  l("Operaciones", "Operations"),
  l("Riesgo", "Risk"),
  l("Datos", "Data"),
];

export function CopilotHero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(900px_520px_at_12%_0%,rgba(91,225,196,0.2),transparent_60%),radial-gradient(1000px_620px_at_100%_0%,rgba(59,101,245,0.24),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_72%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-400/25 bg-accent-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-400">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {l(
                "Novedad · Inteligencia de decisión",
                "New · Decision intelligence",
              )}
            </div>

            <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.03] tracking-tight sm:text-5xl lg:text-[3.65rem]">
              {l("Inteligencia de Decisión para ", "Decision Intelligence that turns ")}
              <span className="bg-gradient-to-r from-accent-400 via-accent-500 to-brand-400 bg-clip-text text-transparent">
                {l(
                  "convertir datos en acciones confiables.",
                  "data into trusted action.",
                )}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-200">
              {l(
                "Un sistema que primero mide con un núcleo cuantitativo calibrado y después complementa el análisis con agentes especializados e IA generativa. Conecta información empresarial, compara rutas y prepara el siguiente paso con evidencia verificable.",
                "A system that measures first with a calibrated quantitative core, then complements the analysis with specialist agents and generative AI. It connects enterprise information, compares paths, and prepares the next step with verifiable evidence.",
              )}
            </p>

            <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-white">
              {l(
                "No es un chat aislado. Es una capa de inteligencia sobre tus sistemas, reglas y permisos, con supervisión humana antes de cualquier acción sensible.",
                "It is not an isolated chat. It is an intelligence layer over your systems, rules, and permissions, with human oversight before any sensitive action.",
              )}
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-3">
              {HERO_STATS.map((item) => (
                <li
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 backdrop-blur"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white">
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/copilot/how-it-works" size="lg">
                {l("Descubrir cómo funciona", "Discover how it works")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </LinkButton>
              <LinkButton
                href="#demo-interactiva"
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                {l("Probar demo interactiva", "Try the interactive demo")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </LinkButton>
            </div>

            <p className="mt-6 max-w-2xl text-xs leading-relaxed text-ink-500">
              {l(
                "Las capacidades disponibles dependen de las fuentes conectadas, la calidad de los datos, los permisos y el alcance validado para cada proceso.",
                "Available capabilities depend on connected sources, data quality, permissions, and the validated scope for each process.",
              )}
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-8 rounded-full bg-gradient-to-br from-brand-400/25 via-accent-400/10 to-transparent blur-3xl"
            />
            <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.065] p-5 shadow-elevate backdrop-blur sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-400">
                    {l("Ciclo de decisión", "Decision cycle")}
                  </p>
                  <h2 className="mt-1.5 font-display text-xl font-semibold text-white">
                    {l(
                      "Inteligencia coordinada, control humano",
                      "Coordinated intelligence, human control",
                    )}
                  </h2>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-accent-400/20 bg-accent-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                  {l("Verificable", "Verifiable")}
                </span>
              </div>

              <ol className="mt-5 space-y-3">
                {DECISION_FLOW.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.step}
                      className="relative grid grid-cols-[2.75rem_1fr_auto] items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/50 p-3.5"
                    >
                      {index < DECISION_FLOW.length - 1 ? (
                        <span
                          aria-hidden
                          className="absolute left-[1.78rem] top-[3.95rem] h-5 w-px bg-gradient-to-b from-accent-400/60 to-transparent"
                        />
                      ) : null}
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent-400">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-semibold tracking-[0.16em] text-ink-500">
                            {item.step}
                          </span>
                          <h3 className="text-sm font-semibold text-white">
                            {item.title}
                          </h3>
                        </div>
                        <p className="mt-0.5 text-xs leading-relaxed text-ink-300">
                          {item.description}
                        </p>
                      </div>
                      <span className="h-2 w-2 rounded-full bg-accent-400 shadow-[0_0_0_5px_rgba(91,225,196,0.08)]" />
                    </li>
                  );
                })}
              </ol>

              <div className="mt-5 rounded-2xl border border-brand-400/20 bg-brand-400/10 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-300">
                  {l("Agentes especializados", "Specialized agents")}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {AGENT_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-ink-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
