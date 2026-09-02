import {
  Bot,
  Calculator,
  Database,
  GitBranch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { l } from "@/lib/i18n/config";

const LAYERS = [
  {
    eyebrow: l("01 · Contexto", "01 · Context"),
    title: l("Datos conectados y gobernados", "Connected, governed data"),
    description: l(
      "Unifica información autorizada de SAP, CRM, bases de datos, APIs, archivos y fuentes públicas sin perder origen, vigencia ni alcance.",
      "Unifies authorized information from SAP, CRM, databases, APIs, files, and public sources without losing origin, freshness, or scope.",
    ),
    icon: Database,
  },
  {
    eyebrow: l("02 · Cálculo", "02 · Calculation"),
    title: l("Núcleo cuantitativo calibrado", "Calibrated quantitative core"),
    description: l(
      "Resuelve relaciones, reglas y límites del negocio antes de construir cualquier explicación. Calcula con lo disponible y conserva lo que falta.",
      "It resolves business relationships, rules, and limits before building any explanation. It calculates with what is available and preserves what is missing.",
    ),
    icon: Calculator,
  },
  {
    eyebrow: l("03 · Comprensión", "03 · Understanding"),
    title: l("Inteligencia generativa que estudia el resultado", "Generative intelligence that studies the result"),
    description: l(
      "Interpreta el resultado calculado, lo conecta con el contexto corporativo y lo transforma en una explicación clara, útil y accionable.",
      "It interprets the calculated result, connects it with corporate context, and turns it into a clear, useful, actionable explanation.",
    ),
    icon: Sparkles,
  },
  {
    eyebrow: l("04 · Coordinación", "04 · Coordination"),
    title: l("Agentes que convierten la decisión en flujo", "Agents that turn the decision into a workflow"),
    description: l(
      "Especialistas digitales de datos, finanzas, talento, riesgo y operaciones preparan el siguiente paso bajo permisos y control humano.",
      "Digital specialists across data, finance, talent, risk, and operations prepare the next step under permissions and human control.",
    ),
    icon: Bot,
  },
];

const CAPABILITY_TAGS = [
  l("Cálculo calibrado", "Calibrated calculation"),
  l("Detección de señales", "Signal detection"),
  l("Explicación generativa", "Generative explanation"),
  l("Escenarios dinámicos", "Dynamic scenarios"),
  l("Acciones supervisadas", "Supervised actions"),
  l("Monitoreo continuo", "Continuous monitoring"),
];

export function DecisionIntelligenceSystem() {
  return (
    <Section className="overflow-hidden bg-white">
      <SectionHeader
        eyebrow={l("El sistema detrás de la novedad", "The system behind the release")}
        title={l(
          "Más que un asistente: una arquitectura de decisión empresarial",
          "More than an assistant: an enterprise decision architecture",
        )}
        description={l(
          "Combina distintas formas de inteligencia para llevar una pregunta desde el dato confiable hasta una recomendación explicable y, si se autoriza, una acción controlada.",
          "It combines multiple forms of intelligence to move a question from trusted data to an explainable recommendation and, when authorized, a controlled action.",
        )}
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {LAYERS.map((layer) => {
          const Icon = layer.icon;
          return (
            <article
              key={layer.eyebrow}
              className="group rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-elevate sm:p-7"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-100">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                    {layer.eyebrow}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink-950">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {layer.description}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl bg-ink-950 text-white shadow-elevate">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-400/10 text-accent-400">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-400">
                  {l("Autonomía supervisada", "Supervised autonomy")}
                </p>
                <h3 className="mt-1 font-display text-2xl font-semibold">
                  {l("La IA propone. La autoridad permanece contigo.", "AI proposes. Authority stays with you.")}
                </h3>
              </div>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-300">
              {l(
                "Las acciones sensibles pasan por vista previa, evidencia congelada, separación entre quien propone y quien aprueba, permisos por etapa y registro del resultado. Cada reintento conserva identidad y trazabilidad.",
                "Sensitive actions pass through preview, frozen evidence, separation between proposer and approver, stage-specific permissions, and outcome recording. Every retry preserves identity and traceability.",
              )}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-300">
              <GitBranch className="h-4 w-4 text-accent-400" aria-hidden="true" />
              {l("Capas de inteligencia", "Intelligence layers")}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {CAPABILITY_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-ink-950/40 px-3 py-1.5 text-xs text-ink-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
