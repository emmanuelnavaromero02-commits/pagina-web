import {
  Activity,
  ArrowRight,
  Cable,
  CheckCircle2,
  Compass,
  FileBarChart,
  ShieldCheck,
  Target,
} from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/copilot/pilot",
  title: l(
    "Evaluar un caso · Agentes de Decisión IA",
    "Evaluate a use case · AI Decision Agents",
  ),
  description: l(
    "Alcance de una evaluación de Agentes de Decisión IA: conexiones, decisión objetivo, criterios de evaluación y siguiente paso hacia una hoja de ruta.",
    "Scope of an AI Decision Agents assessment: connections, target decision, evaluation criteria, and the next step toward a roadmap.",
  ),
});

const CONNECTS = [
  {
    title: l("Una fuente operativa", "One operational source"),
    description: l(
      "Por ejemplo, SAP (FI/CO/HCM), una base de datos corporativa o una API interna crítica.",
      "For example, SAP (FI/CO/HCM), a corporate database, or a critical internal API.",
    ),
    icon: Cable,
  },
  {
    title: l("Reglas y validaciones de negocio", "Business rules and validations"),
    description: l(
      "Reglas que convierten datos en criterios de decisión: cierre, conciliación o validaciones de recursos humanos.",
      "Rules that turn data into decision criteria: closing, reconciliation, or HR validations.",
    ),
    icon: ShieldCheck,
  },
  {
    title: l("Informe de referencia", "Reference report"),
    description: l(
      "Un informe o panel que el equipo ya utiliza y que sirve como base de comparación.",
      "An existing report or dashboard used by the team as the comparison baseline.",
    ),
    icon: FileBarChart,
  },
];

const USE_CASES = [
  l(
    "Cierre mensual o conciliación asistida.",
    "Assisted monthly closing or reconciliation.",
  ),
  l(
    "Consultas de plantilla, ausencias u organización sobre SAP HCM o SuccessFactors.",
    "Headcount, absence, or organizational queries across SAP HCM or SuccessFactors.",
  ),
  l(
    "Preparación de informes ejecutivos con trazabilidad a la fuente.",
    "Executive report preparation with source traceability.",
  ),
  l(
    "Investigación de incidentes operativos en varios sistemas.",
    "Operational incident research across multiple systems.",
  ),
  l(
    "Primera respuesta de soporte basada en documentación corporativa.",
    "First-line support based on corporate documentation.",
  ),
];

const MEASURE = [
  {
    title: l("Variación del trabajo manual", "Change in manual effort"),
    description: l(
      "Comparación del tiempo dedicado a la tarea antes y durante el piloto.",
      "Comparison of the time spent on the task before and during the pilot.",
    ),
    icon: Activity,
  },
  {
    title: l("Variación del tiempo de ciclo", "Cycle-time change"),
    description: l(
      "Tiempo desde la consulta hasta una respuesta trazable y aprobada.",
      "Time from a query to a traceable, approved answer.",
    ),
    icon: Compass,
  },
  {
    title: l("Evidencia de auditoría", "Audit evidence"),
    description: l(
      "Evaluación de si el registro generado cumple el alcance definido y puede exportarse.",
      "Assessment of whether the generated record meets the defined scope and can be exported.",
    ),
    icon: CheckCircle2,
  },
  {
    title: l("Encaje operativo", "Operational fit"),
    description: l(
      "Cómo se integra el piloto en el flujo existente y qué barreras de adopción aparecen.",
      "How the pilot fits into the existing workflow and which adoption barriers emerge.",
    ),
    icon: Target,
  },
];

export default function CopilotPilotPage() {
  return (
    <>
      <ServiceHero
        eyebrow={l(
          "Agentes de Decisión IA · Evaluación",
          "AI Decision Agents · Assessment",
        )}
        title={l(
          "Pruebe un alcance definido en sus propios sistemas.",
          "Test a defined scope in your own systems.",
        )}
        description={l(
          "Un piloto conecta una fuente operativa, delimita un caso de uso y evalúa el esfuerzo manual, con trazabilidad y aprobación humana antes de las acciones definidas como críticas.",
          "A pilot connects one operational source, scopes one use case, and evaluates manual effort, with traceability and human approval before actions defined as critical.",
        )}
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow={l("Qué se conecta", "What gets connected")}
          title={l(
            "Un piloto tiene un alcance acotado.",
            "A pilot has a focused scope.",
          )}
          description={l(
            "Una fuente, un caso de uso claro y un informe existente como referencia.",
            "One source, a clear use case, and an existing report as a reference.",
          )}
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONNECTS.map((c) => {
            const Icon = c.icon;
            return (
              <li
                key={c.title}
                className="flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-soft"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink-950">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                  {c.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section className="bg-ink-50">
        <SectionHeader
          eyebrow={l("Casos que se pueden probar", "Use cases to test")}
          title={l("Elegir un caso concreto", "Choose one focused case")}
          description={l(
            "El objetivo es evaluar un caso operativo definido, no demostrar todas las funciones.",
            "The goal is to evaluate a defined operational case, not demonstrate every feature.",
          )}
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {USE_CASES.map((u) => (
            <li
              key={u}
              className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4 text-sm leading-relaxed text-ink-800 shadow-soft"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
              <span>{u}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-white">
        <SectionHeader
          eyebrow={l("Qué se evalúa", "What we evaluate")}
          title={l("Criterios concretos", "Concrete criteria")}
          description={l(
            "La evaluación aporta información medible para decidir si tiene sentido ampliar los agentes de IA en la operación.",
            "The assessment provides measurable information to decide whether expanding AI agents across the operation makes sense.",
          )}
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MEASURE.map((m) => {
            const Icon = m.icon;
            return (
              <li
                key={m.title}
                className="flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-soft"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink-950">
                  {m.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                  {m.description}
                </p>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink-500">
          {l(
            "El calendario se estima después del diagnóstico y depende de las fuentes, el acceso a datos, los permisos y la complejidad. La propuesta concreta el alcance, los supuestos y los criterios de aceptación.",
            "The schedule is estimated after diagnosis and depends on sources, data access, permissions, and complexity. The proposal defines the scope, assumptions, and acceptance criteria.",
          )}
        </p>
      </Section>

      <Section className="bg-ink-950 text-white">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-800 via-brand-900 to-ink-950 p-10 sm:p-14">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl"
          />
          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
              {l("Siguiente paso", "Next step")}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {l("¿Definimos el alcance del piloto?", "Ready to scope a pilot?")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-200">
              {l(
                "Indíquenos la fuente, el caso de uso y el informe de referencia. Prepararemos una propuesta con calendario, alcance y criterios de evaluación.",
                "Tell us the source, use case, and reference report. We will prepare a proposal with the schedule, scope, and evaluation criteria.",
              )}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/contact?topic=copilot" size="lg">
                {l("Solicitar un piloto", "Request a pilot")}
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton
                href="/copilot"
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                {l("Ver el producto", "See the product")}
              </LinkButton>
            </div>
          </div>
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
