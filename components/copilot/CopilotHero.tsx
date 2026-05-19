import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { COPILOT_HERO_CARDS } from "@/lib/data/copilot";

export function CopilotHero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(900px_500px_at_15%_0%,rgba(91,225,196,0.18),transparent_60%),radial-gradient(1000px_600px_at_100%_0%,rgba(59,101,245,0.22),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-400">
          <Sparkles className="h-3.5 w-3.5" />
          Copiloto Empresarial
        </div>

        <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem]">
          De horas de Excel a{" "}
          <span className="bg-gradient-to-r from-accent-400 via-accent-500 to-brand-400 bg-clip-text text-transparent">
            respuestas trazables en minutos.
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-200">
          Copiloto Empresarial conecta{" "}
          <strong className="text-white">SAP</strong>,{" "}
          <strong className="text-white">bases de datos</strong>,{" "}
          <strong className="text-white">APIs</strong>,{" "}
          <strong className="text-white">reportes</strong> y{" "}
          <strong className="text-white">reglas de negocio</strong> para
          consultar, validar, explicar y preparar acciones con evidencia,
          permisos y trazabilidad.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="#impact" size="lg">
            Ver impacto operativo
            <ArrowDown className="h-4 w-4" />
          </LinkButton>
          <LinkButton
            href="/contact?topic=copilot"
            size="lg"
            variant="outline"
            className="border-white/20 bg-white/5 text-white hover:bg-white/10"
          >
            Solicitar piloto
            <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </div>

        <ul className="mt-12 grid gap-4 lg:grid-cols-3">
          {COPILOT_HERO_CARDS.map((card) => (
            <li
              key={card.before}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                Antes
              </p>
              <p className="mt-1 text-sm leading-snug text-ink-300 line-through decoration-1 decoration-ink-500">
                {card.before}
              </p>
              <div className="my-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-400">
                <span className="h-px flex-1 bg-white/10" />
                <ArrowDown className="h-3 w-3" />
                <span>Con Copiloto</span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <p className="font-display text-base font-semibold leading-snug text-white">
                {card.after}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-ink-500">
          Escenarios orientativos. El impacto real depende de fuentes
          conectadas, calidad de datos, permisos y alcance del piloto.
        </p>
      </div>
    </section>
  );
}
