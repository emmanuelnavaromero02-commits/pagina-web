import { ArrowRight, CheckCircle2, Compass } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { l } from "@/lib/i18n/config";

export function AfterSteps() {
  const steps = [
    {
      title: l("Entendemos el caso", "We understand the case"),
      description: l(
        "Revisamos el contexto e identificamos el bloqueo principal.",
        "We review the context and identify the main bottleneck.",
      ),
      icon: Compass,
    },
    {
      title: l("Definimos el alcance", "We define the scope"),
      description: l(
        "Acordamos el objetivo, las fuentes necesarias y una ruta viable.",
        "We agree on the objective, required inputs, and a viable path.",
      ),
      icon: CheckCircle2,
    },
    {
      title: l("Proponemos el siguiente paso", "We propose the next step"),
      description: l(
        "Planteamos un piloto concreto o una hoja de ruta por fases.",
        "We outline a focused pilot or a phased roadmap.",
      ),
      icon: ArrowRight,
    },
  ];

  return (
    <Section className="border-t border-ink-100 bg-white py-14 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            {l("Qué sigue", "What happens next")}
          </p>
          <h2 className="mt-3 max-w-md font-display text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
            {l(
              "Una conversación clara, sin procesos innecesarios.",
              "A clear conversation, without unnecessary process.",
            )}
          </h2>
        </div>

        <ol className="grid gap-3 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="rounded-2xl border border-ink-100 bg-ink-50 p-5 transition-colors hover:border-brand-100 hover:bg-white hover:shadow-soft sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-brand-700 shadow-sm">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold text-ink-400">0{index + 1}</span>
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
