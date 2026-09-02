import { ArrowRight, CheckCircle2, Compass, Hammer } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { l } from "@/lib/i18n/config";

const STEPS = [
  {
    icon: Compass,
    title: l("Entender", "Understand"),
    description: l(
      "Revisamos el proceso, los sistemas involucrados y la decisión que necesita mejorar.",
      "We review the process, the systems involved, and the decision that needs to improve.",
    ),
  },
  {
    icon: CheckCircle2,
    title: l("Definir", "Define"),
    description: l(
      "Acordamos alcance, entregables, controles y criterios claros de aceptación.",
      "We agree on scope, deliverables, controls, and clear acceptance criteria.",
    ),
  },
  {
    icon: Hammer,
    title: l("Construir y evolucionar", "Build and evolve"),
    description: l(
      "Entregamos por etapas, validamos con el equipo y priorizamos el siguiente avance.",
      "We deliver in stages, validate with the team, and prioritize the next improvement.",
    ),
  },
] as const;

export function HowWeWork() {
  return (
    <Section className="relative overflow-hidden bg-white">
      <div aria-hidden className="absolute -left-48 bottom-0 h-96 w-96 rounded-full bg-accent-400/10 blur-3xl" />
      <div className="relative grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
        <SectionHeader
          eyebrow={l("Forma de trabajo", "How we work")}
          title={l(
            "Menos ceremonia. Más avance visible.",
            "Less ceremony. More visible progress.",
          )}
          description={l(
            "Un ciclo corto para entender, enfocar y demostrar valor antes de ampliar.",
            "A short cycle to understand, focus, and demonstrate value before expanding.",
          )}
        />

        <ol className="grid gap-3 sm:grid-cols-3">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className={`relative min-h-64 overflow-hidden rounded-3xl border px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-float ${index === 1 ? "border-ink-950 bg-ink-950 text-white" : "border-ink-100 bg-ink-50/70 text-ink-950"}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-2xl shadow-soft ${index === 1 ? "bg-white/10 text-accent-400" : "bg-white text-brand-700"}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className={`text-xs font-semibold tracking-[0.18em] ${index === 1 ? "text-ink-600" : "text-ink-500"}`}>
                    0{index + 1}
                  </span>
                </div>
                <h3 className={`mt-8 font-display text-xl font-semibold ${index === 1 ? "text-white" : "text-ink-950"}`}>
                  {step.title}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed ${index === 1 ? "text-ink-300" : "text-ink-600"}`}>
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="relative mt-10 flex justify-start lg:justify-end">
        <LinkButton href="/contact" variant="outline">
          {l("Hablar sobre un proyecto", "Discuss a project")}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </LinkButton>
      </div>
    </Section>
  );
}
