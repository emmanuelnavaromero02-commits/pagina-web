import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { COPILOT_CONNECTIONS, COPILOT_FLOW_STEPS } from "@/lib/site-data";

export function CopilotArchitecture() {
  return (
    <Section id="connects" className="bg-white">
      <SectionHeader
        eyebrow="Cómo se conecta"
        title="Conectado a los sistemas que ya usas"
        description="Se integra con SAP, bases de datos, APIs internas, plataformas cloud y reportes. Respeta los permisos del sistema fuente."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COPILOT_CONNECTIONS.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.title}
              className="flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </span>
              <p className="font-display text-base font-semibold text-ink-900">
                {c.title}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-16">
        <SectionHeader
          eyebrow="Flujo operativo"
          title="Cuatro pasos, una sola conversación"
          description="Del pregunta del usuario hasta la acción final, con validaciones y trazabilidad en cada paso."
        />
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COPILOT_FLOW_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.step}
                className="relative rounded-2xl border border-ink-100 bg-white p-6 shadow-soft"
              >
                <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-brand-700 px-2.5 py-0.5 text-[10px] font-semibold tracking-widest text-white">
                  {step.step}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 font-display text-base font-semibold text-ink-900">
                  {step.title}
                </p>
                <p className="mt-1 text-sm text-ink-600">{step.description}</p>
              </li>
            );
          })}
        </ol>
        <div className="mt-8">
          <Link
            href="/copilot/how-it-works"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            Ver detalle de la arquitectura
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
