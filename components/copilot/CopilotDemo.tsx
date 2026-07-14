import { Sparkles, UserCircle2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { l } from "@/lib/i18n/config";

const RESPONSE_BADGES = [
  { label: "SAP FI", tone: "brand" as const },
  { label: l("Banco", "Bank"), tone: "brand" as const },
  { label: l("Validación", "Validation"), tone: "brand" as const },
  { label: l("Borrador", "Draft"), tone: "brand" as const },
  { label: l("Requiere aprobación", "Approval required"), tone: "accent" as const },
  { label: l("Registro de auditoría", "Audit log"), tone: "neutral" as const },
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
        eyebrow={l("Interacción de ejemplo", "Example interaction")}
        title={l("Una consulta que reúne varios sistemas", "One query that brings multiple systems together")}
        description={l("Ejemplo de una consulta financiera que combina SAP, el banco y reglas de validación sin salir del copilot.", "Example of a finance query combining SAP, the bank, and validation rules without leaving the copilot.")}
      />

      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        <article className="rounded-2xl border border-ink-100 bg-white p-5 shadow-soft sm:ml-12">
          <div className="flex items-center gap-2">
            <UserCircle2 className="h-4 w-4 text-ink-500" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500">
              {l("Usuario · finanzas", "User · finance")}
            </p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink-800">
            {l("«Muéstrame las partidas no conciliadas del cierre de marzo, cruza SAP FI con el banco y prepara un resumen para finanzas»." , "“Show me the unreconciled entries from the March closing, cross SAP FI with the bank, and prepare a summary for finance.”")}
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
              Enterprise Copilot
            </p>
          </div>
          <p className="relative mt-3 text-sm leading-relaxed text-ink-800">
            {l("Encontré ", "I found ")}
            <strong className="text-ink-950">{l("3 partidas no conciliadas", "3 unreconciled entries")}</strong>{" "}
            {l("entre SAP FI y el estado de cuenta bancario del cierre de marzo. Preparé un ", "between SAP FI and the bank statement for the March closing. I prepared an ")}
            <strong className="text-ink-950">{l("resumen ejecutivo", "executive summary")}</strong>{" "}
            {l("y una propuesta de revisión.", "and a proposed review.")}
          </p>
          <p className="relative mt-2 text-sm leading-relaxed text-ink-700">
            {l("No aplicaré ningún ajuste sin aprobación.", "I will not apply any adjustment without approval.")}
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
        {l("Ejemplo ilustrativo. El comportamiento real depende de la configuración, las fuentes conectadas y las reglas de negocio de cada implementación.", "Illustrative example. Actual behavior depends on configuration, connected sources, and business rules in each implementation.")}
      </p>
    </Section>
  );
}
