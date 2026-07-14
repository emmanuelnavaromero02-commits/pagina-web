import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { COPILOT_CONNECTIONS, COPILOT_FLOW_STEPS } from "@/lib/site-data";
import { l } from "@/lib/i18n/config";

export function CopilotArchitecture() {
  return (
    <>
      <Section id="connects" className="bg-white">
        <SectionHeader
          eyebrow={l("Cómo se conecta", "How it connects")}
          title={l("Conectado con los sistemas que ya utilizas", "Wired into the systems you already use")}
          description={l("Se integra con SAP, bases de datos, APIs internas, plataformas cloud e informes, respetando los permisos del sistema de origen.", "It integrates with SAP, databases, internal APIs, cloud platforms, and reports — and respects the permissions of the source system.")}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COPILOT_CONNECTIONS.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-elevate"
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
      </Section>

      <Section id="flow" className="bg-ink-50">
        <SectionHeader
          eyebrow={l("Flujo operativo", "Operational flow")}
          title={l("Seis pasos, una conversación", "Six steps, one conversation")}
          description={l("Desde la pregunta del usuario hasta la acción final, con validaciones y trazabilidad en cada paso.", "From the user's question to the final action, with validations and traceability at every step.")}
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <p className="mt-1.5 text-sm text-ink-600">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
        <div className="mt-8">
          <Link
            href="/copilot/how-it-works"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            {l("Ver detalle de arquitectura", "See architecture detail")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
