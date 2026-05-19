import { ArrowRight, Sparkles } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

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
      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-400">
            <Sparkles className="h-3.5 w-3.5" />
            Producto estrella
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Copiloto Empresarial
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-200">
            Una <strong className="text-white">capa de IA operativa</strong>{" "}
            que conecta sistemas, datos y procesos para que los equipos puedan
            consultar, validar, reportar y actuar desde un punto inteligente.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-300">
            Conectado a SAP, bases de datos, APIs internas y reportes
            corporativos, con permisos por rol y trazabilidad de cada acción.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/contact?topic=copilot" size="lg">
              Solicitar piloto
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <LinkButton
              href="/copilot/how-it-works"
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              Ver cómo funciona
            </LinkButton>
          </div>

          <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/10 pt-6 sm:grid-cols-4">
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                Para quién
              </dt>
              <dd className="mt-1 text-sm font-medium text-white">
                Equipos operativos
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                Foco
              </dt>
              <dd className="mt-1 text-sm font-medium text-white">
                Consultar y validar
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                Conexión
              </dt>
              <dd className="mt-1 text-sm font-medium text-white">
                SAP · BD · APIs · BI
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                Control
              </dt>
              <dd className="mt-1 text-sm font-medium text-white">
                Permisos + auditoría
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
