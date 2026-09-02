import Link from "@/components/ui/SafeLink";
import { ArrowRight, Brain, Code2, Network, Workflow } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { l } from "@/lib/i18n/config";

const PRIORITIES = [
  {
    icon: Workflow,
    title: l("Operaciones con menos fricción", "Operations with less friction"),
    problem: l(
      "Tareas repetitivas, validaciones manuales y procesos difíciles de seguir.",
      "Repetitive tasks, manual checks, and processes that are hard to follow.",
    ),
    response: l(
      "Flujos claros, automatización controlada y seguimiento de cada paso.",
      "Clear workflows, controlled automation, and traceable follow-up.",
    ),
  },
  {
    icon: Network,
    title: l("Sistemas que trabajan juntos", "Systems that work together"),
    problem: l(
      "SAP, aplicaciones, archivos y datos operando como piezas separadas.",
      "SAP, applications, files, and data operating as separate pieces.",
    ),
    response: l(
      "Integraciones estables para mover información sin duplicar trabajo.",
      "Stable integrations that move information without duplicating work.",
    ),
  },
  {
    icon: Code2,
    title: l("Software ajustado al negocio", "Software shaped around the business"),
    problem: l(
      "Herramientas genéricas que obligan al equipo a adaptar su operación.",
      "Generic tools that force teams to adapt how they operate.",
    ),
    response: l(
      "Portales, aplicaciones y servicios diseñados alrededor del proceso real.",
      "Portals, applications, and services designed around the real process.",
    ),
  },
  {
    icon: Brain,
    title: l("Información lista para decidir", "Information ready for decisions"),
    problem: l(
      "Respuestas dispersas y reportes que requieren consolidación manual.",
      "Scattered answers and reports that require manual consolidation.",
    ),
    response: l(
      "Datos gobernados e IA operativa con evidencia, permisos y revisión humana.",
      "Governed data and operational AI with evidence, permissions, and human review.",
    ),
  },
] as const;

export function BusinessPriorities() {
  return (
    <Section className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 xl:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">
            {l("Problemas que convertimos en avance", "Problems turned into progress")}
          </p>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink-950 sm:text-4xl lg:text-[2.8rem]">
            {l(
              "Tecnología útil empieza por una necesidad operativa clara.",
              "Useful technology starts with a clear operational need.",
            )}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-600 sm:text-lg">
            {l(
              "Partimos del proceso, identificamos la fricción y definimos una solución que el equipo pueda operar y verificar.",
              "We start with the process, identify the friction, and define a solution the team can operate and verify.",
            )}
          </p>
          <Link
            href="/services"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
          >
            {l("Ver capacidades", "View capabilities")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2">
          {PRIORITIES.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-float ${
                  index === 0
                    ? "border-brand-100 bg-gradient-to-br from-brand-50 to-white"
                    : "border-ink-100 bg-ink-50/70 hover:border-brand-100 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-soft">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.16em] text-ink-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink-950">
                  {item.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm leading-relaxed">
                  <p className="text-ink-500">{item.problem}</p>
                  <p className="border-t border-ink-100 pt-3 font-medium text-ink-900">{item.response}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
