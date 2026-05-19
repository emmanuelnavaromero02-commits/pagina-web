import { ArrowRight, Sparkles } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-brand-radial"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(11,14,28,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(11,14,28,0.04)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pb-32 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="animate-fade-up">
            <a
              href="/copilot"
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700 shadow-soft backdrop-blur transition-colors hover:bg-white"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Nueva innovación: {SITE.product.name}
            </a>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
              Fábrica de software empresarial e{" "}
              <span className="bg-gradient-to-r from-brand-700 to-accent-500 bg-clip-text text-transparent">
                IA operativa
              </span>{" "}
              para compañías que necesitan avanzar rápido.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
              Diseñamos, integramos y soportamos soluciones sobre{" "}
              <strong className="text-ink-900">SAP</strong>,{" "}
              <strong className="text-ink-900">cloud</strong>,{" "}
              <strong className="text-ink-900">datos</strong> e{" "}
              <strong className="text-ink-900">inteligencia artificial</strong>{" "}
              para convertir procesos complejos en software operativo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/copilot" size="lg">
                Ver Copiloto Empresarial
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton href="/contact" variant="outline" size="lg">
                Solicitar diagnóstico
              </LinkButton>
            </div>
            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-ink-100 pt-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Stack
                </dt>
                <dd className="mt-1 text-sm font-medium text-ink-900">
                  SAP · Cloud · IA
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Modelo
                </dt>
                <dd className="mt-1 text-sm font-medium text-ink-900">
                  Fábrica dedicada
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Clientes
                </dt>
                <dd className="mt-1 text-sm font-medium text-ink-900">
                  Enterprise
                </dd>
              </div>
            </dl>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative animate-fade-up [animation-delay:120ms]">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand-100/60 to-accent-400/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-elevate">
        <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          <span className="ml-3 text-xs font-medium text-ink-500">
            Copiloto Empresarial · Vista conceptual
          </span>
        </div>
        <div className="space-y-4 p-5">
          <div className="rounded-xl border border-ink-100 bg-ink-50 px-4 py-3 text-sm text-ink-700">
            ¿Cuál fue el cierre de finanzas de marzo y qué partidas
            quedaron sin conciliar?
          </div>
          <div className="rounded-xl border border-brand-100 bg-white px-4 py-4 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
              Copiloto Empresarial
            </p>
            <p className="mt-2 text-sm text-ink-800">
              El cierre de marzo se procesó el día 7. Detecté{" "}
              <strong>3 partidas</strong> sin conciliar entre SAP FI y el
              extracto bancario. Te muestro el detalle y la propuesta de
              ajuste antes de aplicarla.
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
              <div className="rounded-md bg-ink-50 px-2 py-1.5 text-ink-700">
                <span className="block font-semibold text-ink-900">
                  SAP FI
                </span>
                3 docs
              </div>
              <div className="rounded-md bg-ink-50 px-2 py-1.5 text-ink-700">
                <span className="block font-semibold text-ink-900">
                  Banco
                </span>
                3 mov.
              </div>
              <div className="rounded-md bg-accent-400/15 px-2 py-1.5 text-accent-600">
                <span className="block font-semibold">
                  Estado
                </span>
                Listo p/ validar
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-ink-500">
            <span className="rounded-full bg-ink-100 px-2 py-0.5">SAP</span>
            <span className="rounded-full bg-ink-100 px-2 py-0.5">
              Base de datos
            </span>
            <span className="rounded-full bg-ink-100 px-2 py-0.5">API</span>
            <span className="rounded-full bg-ink-100 px-2 py-0.5">
              Reporte ejecutivo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
