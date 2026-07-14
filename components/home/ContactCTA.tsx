import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { l } from "@/lib/i18n/config";

export function ContactCTA() {
  return (
    <Section className="bg-ink-950 text-white">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-800 via-brand-900 to-ink-950 p-10 sm:p-14">
        <div
          aria-hidden
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl"
        />
        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
              {l("Siguiente paso", "Next step")}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {l(
                "¿Quiere desarrollar software, integrar SAP o probar un piloto de Enterprise Copilot?",
                "Want to build software, integrate SAP, or pilot an Enterprise Copilot?",
              )}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-200">
              {l(
                "Le ayudamos a diagnosticar el caso, definir un alcance concreto y formar el equipo adecuado. Comunicación clara, sin promesas vagas.",
                "We help diagnose the case, define a focused scope, and assemble the right team. Clear communication, without vague promises.",
              )}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <LinkButton href="/contact" size="lg">
              {l("Solicitar un diagnóstico", "Request a diagnosis")}
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <LinkButton
              href="/copilot"
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              {l("Explorar Enterprise Copilot", "Explore Enterprise Copilot")}
            </LinkButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
