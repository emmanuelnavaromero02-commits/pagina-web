import { Sparkles, UserCircle2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

const RESPONSE_BADGES = [
  { label: "SAP FI", tone: "brand" as const },
  { label: "Banco", tone: "brand" as const },
  { label: "Validación", tone: "brand" as const },
  { label: "Draft", tone: "brand" as const },
  { label: "Aprobación requerida", tone: "accent" as const },
  { label: "Audit log", tone: "neutral" as const },
];

const TONE_CLASSES: Record<"brand" | "accent" | "neutral", string> = {
  brand: "border-brand-200 bg-brand-50 text-brand-800",
  accent: "border-accent-400/40 bg-accent-400/10 text-accent-600",
  neutral: "border-ink-200 bg-ink-50 text-ink-700",
};

export function CopilotDemo() {
  return (
    <Section className="bg-ink-50">
      <SectionHeader
        eyebrow="Ejemplo de uso"
        title="Una pregunta que antes abría cinco sistemas"
        description="Esto es lo que pasa cuando una pregunta de finanzas atraviesa SAP, el banco y reglas de validación sin que el usuario salga del copiloto."
      />

      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        <article className="rounded-2xl border border-ink-100 bg-white p-5 shadow-soft sm:ml-12">
          <div className="flex items-center gap-2">
            <UserCircle2 className="h-4 w-4 text-ink-500" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500">
              Usuario · finanzas
            </p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink-800">
            “Muéstrame las partidas sin conciliar del cierre de marzo, cruza
            SAP FI con banco y prepara resumen para finanzas.”
          </p>
        </article>

        <article className="relative overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-white to-brand-50/40 p-5 shadow-elevate sm:mr-12">
          <div
            aria-hidden
            className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-400/15 blur-2xl"
          />
          <div className="relative flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-700 text-white">
              <Sparkles className="h-3 w-3" />
            </span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">
              Copiloto Empresarial
            </p>
          </div>
          <p className="relative mt-3 text-sm leading-relaxed text-ink-800">
            Encontré{" "}
            <strong className="text-ink-950">3 partidas sin conciliar</strong>{" "}
            entre SAP FI y el extracto bancario del cierre de marzo. Preparé un{" "}
            <strong className="text-ink-950">resumen ejecutivo</strong> y una
            propuesta de revisión.
          </p>
          <p className="relative mt-2 text-sm leading-relaxed text-ink-700">
            No ejecutaré ningún ajuste sin aprobación.
          </p>
          <ul className="relative mt-4 flex flex-wrap gap-1.5">
            {RESPONSE_BADGES.map((b) => (
              <li
                key={b.label}
                className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${TONE_CLASSES[b.tone]}`}
              >
                {b.label}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <p className="mx-auto mt-6 max-w-3xl text-xs leading-relaxed text-ink-500">
        Ejemplo orientativo. El comportamiento exacto depende de la
        configuración, fuentes conectadas y reglas de negocio aplicadas en cada
        implementación.
      </p>
    </Section>
  );
}
