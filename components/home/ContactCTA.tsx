import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { l } from "@/lib/i18n/config";

export function ContactCTA({ primaryHref = "/contact" }: { primaryHref?: string }) {
  return (
    <Section className="bg-ink-50 !py-16 text-white sm:!py-20">
      <div className="dark-panel relative overflow-hidden rounded-[2rem] border border-white/10 p-7 shadow-float sm:p-10 lg:p-14">
        <div aria-hidden className="surface-noise pointer-events-none absolute inset-0 opacity-[0.1]" />
        <div
          aria-hidden
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl"
        />
        <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
              {l("Tu siguiente versión", "Your next version")}
            </p>
            <h2 className="mt-4 max-w-3xl text-balance font-display text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              {l(
                "¿Qué debería moverse primero en tu operación?",
                "What should move first in your operation?",
              )}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-200">
              {l(
                "Convirtamos esa respuesta en un diagnóstico concreto, una primera entrega y una ruta para escalar.",
                "Let us turn that answer into a focused diagnosis, a first deliverable, and a path to scale.",
              )}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <LinkButton href={primaryHref} size="lg">
              {l("Iniciar mi diagnóstico", "Start my diagnosis")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </LinkButton>
            <LinkButton
              href="/about"
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              {l("Conocer al equipo", "Meet the team")}
            </LinkButton>
          </div>
        </div>

        <div className="relative mt-9 grid gap-3 border-t border-white/10 pt-6 text-sm text-ink-300 sm:grid-cols-3 sm:gap-6">
          <p><span className="mr-2 text-accent-400">01</span>{l("Problema y contexto", "Problem and context")}</p>
          <p><span className="mr-2 text-accent-400">02</span>{l("Alcance y primera evidencia", "Scope and first evidence")}</p>
          <p><span className="mr-2 text-accent-400">03</span>{l("Ruta de evolución", "Evolution path")}</p>
        </div>
      </div>
    </Section>
  );
}
