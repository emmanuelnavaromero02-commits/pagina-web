import {
  ArrowRight,
  CheckCircle2,
  GitBranch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { l } from "@/lib/i18n/config";

const HERO_STATS = [
  {
    label: l("Contexto", "Context"),
    value: l("Información reunida", "Information brought together"),
  },
  {
    label: l("Señales", "Signals"),
    value: l("Prioridades visibles", "Visible priorities"),
  },
  {
    label: l("Decisión", "Decision"),
    value: l("Opciones comparables", "Comparable options"),
  },
  {
    label: l("Control", "Control"),
    value: l("Aprobación y registro", "Approval and record"),
  },
];

const OUTCOMES = [
  {
    title: l("Resultado verificable", "Verifiable outcome"),
    description: l(
      "La información relevante queda organizada para revisar diferencias, riesgos y pendientes.",
      "Relevant information is organized so teams can review differences, risks, and pending work.",
    ),
    icon: CheckCircle2,
  },
  {
    title: l("Decisión bajo control", "Decision under control"),
    description: l(
      "La persona responsable compara opciones y define el siguiente paso antes de cualquier acción sensible.",
      "The accountable person compares options and chooses the next step before any sensitive action.",
    ),
    icon: ShieldCheck,
  },
  {
    title: l("Seguimiento trazable", "Traceable follow-up"),
    description: l(
      "La consulta, la decisión, la autorización y el resultado permanecen vinculados.",
      "The request, decision, authorization, and outcome remain connected.",
    ),
    icon: GitBranch,
  },
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
              {l("Inteligencia operativa", "Operational intelligence")}
            </div>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              {l("De información dispersa a ", "From fragmented information to ")}
              <span className="bg-gradient-to-r from-accent-400 via-accent-500 to-brand-400 bg-clip-text text-transparent">
                {l(
                  "decisiones y acciones controladas.",
                  "controlled decisions and actions.",
                )}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-200">
              {l(
                "Enterprise Copilot reúne el contexto operativo que hoy está repartido entre sistemas, equipos y archivos. Convierte datos autorizados en respuestas verificables, detecta señales relevantes, organiza opciones y prepara el siguiente paso para aprobación, con trazabilidad de principio a fin.",
                "Enterprise Copilot brings together operational context scattered across systems, teams, and files. It turns authorized data into verifiable answers, surfaces relevant signals, frames options, and prepares the next step for approval, with end-to-end traceability.",
              )}
            </p>

            <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-white">
              {l(
                "Menos búsqueda y conciliación manual. Más claridad para decidir. Ninguna acción sensible sin autorización.",
                "Less manual search and reconciliation. More clarity to decide. No sensitive action without authorization.",
              )}
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
              <LinkButton href="/copilot/how-it-works" size="lg">
                {l("Ver qué resuelve", "See what it solves")}
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton
                href="/copilot/pilot"
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                {l("Solicitar un piloto", "Request a pilot")}
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
            </div>

            <p className="mt-6 max-w-2xl text-xs leading-relaxed text-ink-500">
              {l("Escenarios ilustrativos. El resultado depende de las fuentes conectadas, la calidad de los datos, los permisos, la complejidad del proceso y el alcance del piloto.", "Illustrative scenarios. Results depend on connected sources, data quality, permissions, process complexity, and pilot scope.")}
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand-400/20 via-accent-400/10 to-transparent blur-2xl"
            />
            <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white p-6 text-ink-900 shadow-elevate sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                {l("Situación operativa", "Operational situation")}
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink-950">
                {l(
                  "La evidencia existe, pero está repartida.",
                  "The evidence exists, but it is scattered.",
                )}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                {l(
                  "Un equipo necesita explicar una diferencia, atender una señal o decidir el siguiente paso sin reconstruir el contexto manualmente.",
                  "A team needs to explain a difference, respond to a signal, or decide the next step without rebuilding the context by hand.",
                )}
              </p>

              <ul className="mt-6 space-y-3">
                {OUTCOMES.map((outcome) => {
                  const Icon = outcome.icon;
                  return (
                    <li
                      key={outcome.title}
                      className="flex gap-3 rounded-xl border border-ink-100 bg-ink-50/70 p-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink-950">
                          {outcome.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-ink-600">
                          {outcome.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-5 border-t border-ink-100 pt-4 text-xs leading-relaxed text-ink-500">
                {l(
                  "Escenario ilustrativo. El alcance se valida con los datos, permisos y procesos del cliente.",
                  "Illustrative scenario. Scope is validated against the client’s data, permissions, and processes.",
                )}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
