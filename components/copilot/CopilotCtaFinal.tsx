import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { l } from "@/lib/i18n/config";

export function CopilotCtaFinal() {
  return (
    <Section className="bg-ink-950 text-white">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-800 via-brand-900 to-ink-950 p-10 sm:p-14">
        <div
          aria-hidden
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-28 -left-10 h-80 w-80 rounded-full bg-brand-400/20 blur-3xl"
        />
        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
              {l("Siguiente paso", "Next step")}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {l("¿Quieres ver qué puede resolver en tus propios sistemas?", "Want to see what it can solve in your own systems?")}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-200">
              {l("En un piloto acotado conectamos una fuente, definimos un caso de uso y evaluamos cuánto trabajo manual puede reducirse en informes, validaciones o consultas internas.", "In a scoped pilot we connect one source, define one use case, and evaluate how much manual work can be reduced in reports, validations, or internal queries.")}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
            <LinkButton
              href="/contact?topic=copilot"
              size="lg"
              className="w-full sm:w-auto"
            >
              {l("Solicitar un piloto de Enterprise Copilot", "Request an Enterprise Copilot pilot")}
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <LinkButton
              href="/contact?topic=copilot"
              size="lg"
              variant="outline"
              className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 sm:w-auto"
            >
              {l("Hablar sobre un caso de uso", "Talk about a use case")}
            </LinkButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
