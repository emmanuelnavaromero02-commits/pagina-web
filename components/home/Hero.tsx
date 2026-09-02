import { ArrowRight, BrainCircuit, Check, CodeXml, DatabaseZap, Network, ShieldCheck } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { l } from "@/lib/i18n/config";

export function Hero() {
  const markets = SITE.regions.join(l(" y ", " & "));

  return (
    <section className="dark-panel relative -mt-[5.25rem] overflow-hidden pb-12 pt-[7.25rem] text-white sm:pb-16 sm:pt-[8rem] lg:pb-20">
      <div aria-hidden className="surface-noise pointer-events-none absolute inset-0 opacity-[0.1]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
      <div aria-hidden className="absolute -left-64 top-10 h-[38rem] w-[38rem] rounded-full bg-brand-500/20 blur-[120px]" />
      <div aria-hidden className="absolute -right-48 bottom-0 h-[36rem] w-[36rem] rounded-full bg-accent-400/15 blur-[120px]" />

      <div className="site-container relative">
        <div className="grid min-h-[calc(100vh-3rem)] items-center gap-14 py-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(520px,1.06fr)] lg:gap-14 lg:py-14 xl:gap-20">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent-400 shadow-[0_0_0_5px_rgba(91,225,196,.1)]" />
              <span className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-ink-300">
                {l("Arquitectura empresarial integrada", "Integrated enterprise architecture")}
              </span>
            </div>

            <h1 className="mt-7 max-w-4xl text-balance font-display text-[2.75rem] font-semibold leading-[0.96] tracking-[-0.06em] text-white sm:text-6xl lg:text-[4.6rem] xl:text-[5.15rem]">
              {l("Tu operación. Más rápida. Más inteligente.", "Your operation. Faster. Smarter.")}{" "}
              <span className="bg-gradient-to-r from-brand-300 via-white to-accent-300 bg-clip-text text-transparent">
                {l("Más tuya.", "More yours.")}
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-300 sm:text-xl">
              {l(
                "Integramos personas, nómina, SAP, software, operación, nube, seguridad e inteligencia aplicada para que tu empresa entregue mejor y decida con ventaja.",
                "We integrate people, payroll, SAP, software, operations, cloud, security, and applied intelligence so your company can deliver better and decide with an edge.",
              )}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/contact" size="lg" className="bg-white text-ink-950 shadow-float hover:bg-accent-50 hover:text-ink-950">
                {l("Diseñar mi siguiente nivel", "Design my next level")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </LinkButton>
              <LinkButton href="/services" variant="outline" size="lg" className="border-white/15 bg-white/[0.06] text-white hover:border-white/30 hover:bg-white/10 hover:text-white">
                {l("Ver servicios por área", "View services by domain")}
              </LinkButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs font-medium text-ink-400">
              <Proof label={l("7 dominios conectados", "7 connected domains")} />
              <Proof label={l("84 capacidades especializadas", "84 specialist capabilities")} />
              <Proof label={l("Hasta 60% de ahorro potencial", "Up to 60% potential savings")} />
            </div>

            <p className="mt-6 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ink-500">
              {SITE.name} · {markets}
            </p>
          </div>

          <SystemMap />
        </div>
      </div>
    </section>
  );
}

function Proof({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <Check className="h-3.5 w-3.5 text-accent-400" aria-hidden="true" />
      {label}
    </span>
  );
}

function SystemMap() {
  return (
    <div className="relative animate-fade-up [animation-delay:120ms]">
      <div aria-hidden className="absolute -inset-10 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-3 shadow-[0_44px_120px_-42px_rgba(0,0,0,.8)] backdrop-blur-xl sm:p-4">
        <div className="flex items-center justify-between border-b border-white/10 px-2 pb-4 pt-1 sm:px-3">
          <div>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-accent-400">7 / Enterprise Core</p>
            <p className="mt-1 text-xs text-ink-400">{l("Arquitectura unificada", "Unified architecture")}</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-950/40 px-2.5 py-1.5 text-[0.62rem] font-semibold text-ink-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400 shadow-[0_0_0_4px_rgba(91,225,196,.1)]" />
            {l("Sistema activo", "System active")}
          </span>
        </div>

        <div className="relative mt-3 h-[27rem] overflow-hidden rounded-[1.45rem] border border-white/10 bg-ink-950/55 sm:h-[30rem]">
          <div aria-hidden className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
          <div aria-hidden className="absolute left-1/2 top-1/2 h-px w-[62%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-brand-400/50 to-transparent" />
          <div aria-hidden className="absolute left-1/2 top-1/2 h-[62%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-accent-400/45 to-transparent" />
          <div aria-hidden className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-400/20 sm:h-60 sm:w-60" />
          <div aria-hidden className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10 sm:h-80 sm:w-80" />

          <SystemNode className="left-3 top-4 sm:left-5 sm:top-6" icon={CodeXml} eyebrow={l("Construir", "Build")} title="ABAP + Fiori" accent="blue" />
          <SystemNode className="right-3 top-4 sm:right-5 sm:top-6" icon={Network} eyebrow={l("Conectar", "Connect")} title="SAP + Cloud" accent="blue" />
          <SystemNode className="bottom-4 left-3 sm:bottom-6 sm:left-5" icon={DatabaseZap} eyebrow={l("Gobernar", "Govern")} title={l("Datos confiables", "Trusted data")} accent="mint" />
          <SystemNode className="bottom-4 right-3 sm:bottom-6 sm:right-5" icon={BrainCircuit} eyebrow={l("Decidir", "Decide")} title={l("Agentes IA", "AI agents")} accent="mint" />

          <div className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/15 bg-ink-950/90 text-center shadow-[0_0_80px_rgba(59,101,245,.2)] sm:h-36 sm:w-36">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-accent-400">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            </span>
            <strong className="mt-2 font-display text-sm font-semibold text-white">{l("Tu negocio", "Your business")}</strong>
            <span className="mt-1 text-[0.58rem] uppercase tracking-[0.14em] text-ink-500">{l("En el centro", "At the center")}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-3 text-center text-[0.62rem] font-medium text-ink-400">
          <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-2">{l("Escalable", "Scalable")}</span>
          <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-2">{l("Auditable", "Auditable")}</span>
          <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-2">{l("Evolutivo", "Evolutive")}</span>
        </div>
      </div>
    </div>
  );
}

function SystemNode({ className, icon: Icon, eyebrow, title, accent }: { className: string; icon: typeof CodeXml; eyebrow: string; title: string; accent: "blue" | "mint" }) {
  const mint = accent === "mint";

  return (
    <div className={`absolute z-10 w-[8.75rem] rounded-2xl border border-white/10 bg-ink-950/85 p-3 shadow-elevate backdrop-blur sm:w-40 sm:p-4 ${className}`}>
      <div className="flex items-center gap-2">
        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${mint ? "bg-accent-400/10 text-accent-400" : "bg-brand-400/10 text-brand-300"}`}>
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        <span className={`text-[0.56rem] font-semibold uppercase tracking-[0.15em] ${mint ? "text-accent-400" : "text-brand-300"}`}>{eyebrow}</span>
      </div>
      <p className="mt-2 text-xs font-semibold text-white sm:text-sm">{title}</p>
    </div>
  );
}
