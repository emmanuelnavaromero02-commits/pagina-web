import { Section } from "@/components/ui/Section";
import { l } from "@/lib/i18n/config";

export function CopilotPositioning() {
  return (
    <Section className="bg-white">
      <div className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          {l("Posicionamiento", "Positioning")}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
          {l("No es IA solo para preguntar. ", "Not AI just for asking. ")}
          <span className="block sm:inline">
            {l("Inteligencia para ", "Intelligence for ")}
            <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-accent-500 bg-clip-text text-transparent">
              {l("activar, optimizar y transformar", "activating, optimizing, and transforming")}
            </span>{" "}
            {l(" operaciones.", " operations.")}
          </span>
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-600 sm:text-lg">
          {l("Enterprise Copilot conecta sistemas, datos, informes y reglas de negocio para que los equipos consulten, validen, expliquen y actúen con evidencia, permisos y trazabilidad.", "Enterprise Copilot connects systems, data, reports, and business rules so teams can query, validate, explain, and act with evidence, permissions, and traceability.")}
        </p>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-700">
          {l("No sustituye a quienes toman decisiones; les aporta contexto trazable para evaluarlas.", "It does not replace decision-makers; it gives them traceable context to evaluate decisions.")}
        </p>
      </div>
    </Section>
  );
}
