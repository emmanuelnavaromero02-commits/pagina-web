import { Section, SectionHeader } from "@/components/ui/Section";
import { COPILOT_POWERS, COPILOT_REDUCES } from "@/lib/data/copilot";

export function CopilotReduce() {
  return (
    <Section className="bg-ink-50">
      <SectionHeader
        eyebrow="Trabajo que reduce / trabajo que potencia"
        title="Menos trabajo manual. Más análisis."
        description="El Copiloto Empresarial no existe para reemplazar criterio humano. Existe para quitar el trabajo repetitivo: buscar datos, cruzar Excels, rastrear fuentes, generar reportes recurrentes y documentar trazabilidad."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-ink-200 bg-white p-7 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
            Trabajo que reduce
          </p>
          <p className="mt-1 font-display text-lg font-semibold text-ink-950">
            Lo que deja de hacerse a mano
          </p>
          <ul className="mt-5 space-y-3">
            {COPILOT_REDUCES.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.text}
                  className="flex items-start gap-3 text-sm leading-relaxed text-ink-700"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-100 text-ink-500">
                    <Icon className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>
        </article>

        <article className="rounded-2xl border border-brand-200 bg-brand-50/40 p-7 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            Trabajo que potencia
          </p>
          <p className="mt-1 font-display text-lg font-semibold text-ink-950">
            Lo que el equipo puede hacer mejor
          </p>
          <ul className="mt-5 space-y-3">
            {COPILOT_POWERS.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.text}
                  className="flex items-start gap-3 text-sm leading-relaxed text-ink-800"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
                    <Icon className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </Section>
  );
}
