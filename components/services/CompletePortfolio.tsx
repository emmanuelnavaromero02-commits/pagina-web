import Link from "@/components/ui/SafeLink";
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleDot,
  Layers3,
  MoveRight,
  PackageCheck,
  Route,
  Sparkles,
} from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import {
  PORTFOLIO_DOMAINS,
  PORTFOLIO_DOMAIN_DETAILS,
  PORTFOLIO_SERVICE_COUNT,
  type PortfolioDomainDetail,
} from "@/lib/data/portfolio";
import { l } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function CompletePortfolio() {
  return (
    <>
      <PortfolioIndex />

      <div className="bg-white pb-24 sm:pb-28">
        {PORTFOLIO_DOMAINS.map((domain, domainIndex) => {
          const Icon = domain.icon;
          const dark = domain.id === "innovacion-inteligencia";
          const detail = PORTFOLIO_DOMAIN_DETAILS[domain.id];

          return (
            <section
              id={domain.id}
              key={domain.id}
              className={cn(
                "scroll-mt-28 border-t py-24 sm:py-28 lg:py-32",
                dark
                  ? "dark-panel border-white/10 text-white"
                  : domainIndex % 2 === 0
                    ? "border-ink-100 bg-white"
                    : "border-ink-100 bg-ink-50",
              )}
            >
              <div className="site-container">
                <header className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-16 xl:gap-24">
                  <div>
                    <div className="flex items-center gap-4">
                      <span
                        className={cn(
                          "flex h-14 w-14 items-center justify-center rounded-2xl border",
                          dark
                            ? "border-accent-400/20 bg-accent-400/10 text-accent-400"
                            : "border-brand-100 bg-brand-50 text-brand-700",
                        )}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span
                        className={cn(
                          "font-display text-xs font-semibold tracking-[0.2em]",
                          dark ? "text-ink-500" : "text-ink-400",
                        )}
                      >
                        {domain.number} / 07
                      </span>
                    </div>
                    <h2
                      className={cn(
                        "mt-7 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.01] tracking-[-0.045em] sm:text-5xl",
                        dark ? "text-white" : "text-ink-950",
                      )}
                    >
                      {domain.title}
                    </h2>
                  </div>

                  <div>
                    <p
                      className={cn(
                        "max-w-3xl text-xl font-medium leading-relaxed",
                        dark ? "text-accent-400" : "text-brand-700",
                      )}
                    >
                      {domain.promise}
                    </p>
                    <p
                      className={cn(
                        "mt-5 max-w-3xl text-base leading-relaxed sm:text-lg",
                        dark ? "text-ink-300" : "text-ink-600",
                      )}
                    >
                      {domain.description}
                    </p>
                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <span
                        className={cn(
                          "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[0.66rem] font-bold uppercase tracking-[0.15em]",
                          dark
                            ? "border-white/10 bg-white/[0.06] text-ink-200"
                            : "border-ink-100 bg-white text-ink-600 shadow-soft",
                        )}
                      >
                        <Layers3 className="h-3.5 w-3.5" aria-hidden="true" />
                        {l(
                          `${domain.services.length} capacidades especializadas`,
                          `${domain.services.length} specialist capabilities`,
                        )}
                      </span>

                      {domain.id === "fabrica-integracion" ? (
                        <Link
                          href="/services/software-factory#abap-factory-lab"
                          className="inline-flex items-center gap-2 rounded-full border border-brand-300/30 px-3 py-2 text-[0.66rem] font-bold uppercase tracking-[0.13em] text-brand-700 hover:border-brand-600 hover:bg-brand-700 hover:text-white"
                        >
                          {l("Abrir simulador de fábrica", "Open the factory simulator")}
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      ) : null}

                      {domain.id === "innovacion-inteligencia" ? (
                        <Link
                          href="/copilot#demo-interactiva"
                          className="inline-flex items-center gap-2 rounded-full border border-accent-400/25 px-3 py-2 text-[0.66rem] font-bold uppercase tracking-[0.13em] text-accent-400 hover:bg-accent-400 hover:text-ink-950"
                        >
                          {l("Probar la demostración", "Try the demonstration")}
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </header>

                {detail ? <DomainExplanation detail={detail} dark={dark} /> : null}

                <div className={cn("mt-16 border-t pt-12 sm:mt-20 sm:pt-14", dark ? "border-white/10" : "border-ink-200")}>
                  <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
                    <div>
                      <p className={cn("text-[0.66rem] font-bold uppercase tracking-[0.2em]", dark ? "text-accent-400" : "text-brand-700")}>
                        {l("Capacidades de esta área", "Capabilities in this domain")}
                      </p>
                      <h3 className={cn("mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl", dark ? "text-white" : "text-ink-950")}>
                        {l("Qué podemos activar contigo", "What we can activate with you")}
                      </h3>
                    </div>
                    <p className={cn("max-w-2xl text-sm leading-relaxed lg:justify-self-end sm:text-base", dark ? "text-ink-400" : "text-ink-600")}>
                      {l(
                        "Cada capacidad puede contratarse como iniciativa independiente o combinarse con otras. El alcance se define por proceso, sistema, entregable y responsable; no por una lista genérica de horas.",
                        "Each capability can stand alone or combine with others. Scope is defined by process, system, deliverable, and owner, not by a generic list of hours.",
                      )}
                    </p>
                  </div>

                  <ol className="mt-9 grid gap-4 2xl:grid-cols-2">
                    {domain.services.map((service, serviceIndex) => (
                      <li
                        key={service.title}
                        className={cn(
                          "group grid overflow-hidden rounded-2xl border sm:grid-cols-[5rem_1fr]",
                          dark
                            ? "border-white/10 bg-white/[0.045]"
                            : "border-ink-100 bg-white shadow-[0_18px_60px_-50px_rgba(11,14,28,.55)]",
                        )}
                      >
                        <div
                          className={cn(
                            "flex items-start border-b px-5 py-5 sm:justify-center sm:border-b-0 sm:border-r sm:px-3 sm:py-7",
                            dark ? "border-white/10 bg-ink-950/35" : "border-ink-100 bg-ink-50/80",
                          )}
                        >
                          <span className={cn("font-display text-xs font-bold tracking-[0.15em]", dark ? "text-accent-400" : "text-brand-700")}>
                            {domain.number}.{String(serviceIndex + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div className="p-5 sm:p-7">
                          <h4 className={cn("font-display text-xl font-semibold leading-snug tracking-tight", dark ? "text-white" : "text-ink-950")}>
                            {service.title}
                          </h4>
                          <p className={cn("mt-3 text-sm leading-relaxed", dark ? "text-ink-300" : "text-ink-600")}>
                            {service.description}
                          </p>
                          <ul className="mt-5 flex flex-wrap gap-2">
                            {service.outcomes.map((item) => (
                              <li
                                key={item}
                                className={cn(
                                  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.62rem] font-semibold",
                                  dark
                                    ? "border-white/10 bg-ink-950/40 text-ink-300"
                                    : "border-ink-100 bg-ink-50 text-ink-600",
                                )}
                              >
                                <Check className={cn("h-3 w-3", dark ? "text-accent-400" : "text-brand-600")} aria-hidden="true" />
                                {item}
                              </li>
                            ))}
                          </ul>
                          {service.href ? (
                            <Link
                              href={service.href}
                              className={cn(
                                "mt-6 inline-flex items-center gap-2 text-sm font-semibold",
                                dark ? "text-accent-400 hover:text-white" : "text-brand-700 hover:text-brand-900",
                              )}
                            >
                              {l("Ver servicio dedicado", "View dedicated service")}
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                            </Link>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </section>
          );
        })}

        <div className="site-container pt-20">
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-100 bg-brand-50 px-6 py-9 sm:px-9 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-12">
            <div aria-hidden className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl" />
            <div className="relative max-w-3xl">
              <p className="eyebrow">{l("Diseño de solución", "Solution design")}</p>
              <h2 className="mt-4 text-balance font-display text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
                {l(
                  "No necesitas contratar todo. Necesitas conectar lo que resuelve el problema.",
                  "You do not need to engage everything. You need to connect what solves the problem.",
                )}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-600 sm:text-base">
                {l(
                  "Partimos de una prioridad concreta, definimos responsables y entregables, y formamos una célula con las capacidades necesarias. La primera fase debe producir evidencia, no solamente una presentación.",
                  "We start from a concrete priority, define owners and deliverables, and form a team with the required capabilities. The first phase must produce evidence, not just a presentation.",
                )}
              </p>
            </div>
            <LinkButton href="/contact" size="lg" className="relative mt-7 shrink-0 lg:mt-0">
              {l("Definir mi alcance", "Define my scope")}
              <MoveRight className="h-4 w-4" aria-hidden="true" />
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  );
}

function DomainExplanation({ detail, dark }: { detail: PortfolioDomainDetail; dark: boolean }) {
  return (
    <div className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] sm:mt-16">
      <article className={cn("rounded-[1.75rem] border p-6 sm:p-8", dark ? "border-white/10 bg-white/[0.05]" : "border-ink-100 bg-white shadow-soft")}>
        <div className="flex items-center gap-3">
          <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl", dark ? "bg-accent-400/10 text-accent-400" : "bg-brand-50 text-brand-700")}>
            <CircleDot className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <p className={cn("text-[0.6rem] font-bold uppercase tracking-[0.18em]", dark ? "text-accent-400" : "text-brand-700")}>
              {l("Punto de partida", "Starting point")}
            </p>
            <h3 className={cn("mt-1 font-display text-xl font-semibold", dark ? "text-white" : "text-ink-950")}>
              {l("Qué problemas resolvemos", "What problems we solve")}
            </h3>
          </div>
        </div>

        <ul className={cn("mt-7 divide-y", dark ? "divide-white/10" : "divide-ink-100")}>
          {detail.problems.map((problem, index) => (
            <li key={problem.title} className="grid gap-3 py-5 first:pt-0 last:pb-0 sm:grid-cols-[2rem_1fr]">
              <span className={cn("font-display text-xs font-bold", dark ? "text-accent-400" : "text-brand-700")}>
                0{index + 1}
              </span>
              <div>
                <h4 className={cn("font-display text-base font-semibold", dark ? "text-white" : "text-ink-950")}>{problem.title}</h4>
                <p className={cn("mt-2 text-sm leading-relaxed", dark ? "text-ink-300" : "text-ink-600")}>{problem.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </article>

      <div className="grid gap-5">
        <article className={cn("rounded-[1.75rem] border p-6 sm:p-8", dark ? "border-white/10 bg-ink-950/45" : "border-ink-100 bg-ink-950 text-white shadow-elevate")}>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-400/10 text-accent-400">
              <Route className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-accent-400">{l("Intervención", "Intervention")}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-white">{l("Cómo trabajamos esta área", "How we work in this domain")}</h3>
            </div>
          </div>

          <ol className="mt-7 grid gap-3 md:grid-cols-3">
            {detail.approach.map((item) => (
              <li key={item.step} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[0.62rem] font-bold tracking-[0.16em] text-accent-400">{item.step}</span>
                  <ChevronRight className="h-3.5 w-3.5 text-ink-600" aria-hidden="true" />
                </div>
                <h4 className="mt-5 font-display text-sm font-semibold leading-snug text-white">{item.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-ink-400">{item.description}</p>
              </li>
            ))}
          </ol>
        </article>

        <article className={cn("rounded-[1.75rem] border p-6 sm:p-8", dark ? "border-white/10 bg-white/[0.05]" : "border-ink-100 bg-white shadow-soft")}>
          <div className="flex items-center gap-3">
            <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl", dark ? "bg-accent-400/10 text-accent-400" : "bg-brand-50 text-brand-700")}>
              <PackageCheck className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className={cn("text-[0.6rem] font-bold uppercase tracking-[0.18em]", dark ? "text-accent-400" : "text-brand-700")}>
                {l("Resultado tangible", "Tangible result")}
              </p>
              <h3 className={cn("mt-1 font-display text-xl font-semibold", dark ? "text-white" : "text-ink-950")}>
                {l("Qué entregamos", "What we deliver")}
              </h3>
            </div>
          </div>
          <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {detail.deliverables.map((deliverable) => (
              <li key={deliverable} className={cn("flex items-start gap-2.5 text-sm leading-relaxed", dark ? "text-ink-300" : "text-ink-700")}>
                <Check className={cn("mt-0.5 h-4 w-4 shrink-0", dark ? "text-accent-400" : "text-brand-600")} aria-hidden="true" />
                {deliverable}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}

function PortfolioIndex() {
  return (
    <section className="border-y border-ink-100 bg-ink-50 py-16 sm:py-20">
      <div className="site-container">
        <div className="grid gap-10 xl:grid-cols-[0.72fr_1.28fr] xl:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-brand-700 shadow-soft">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {l("Portafolio completo", "Complete portfolio")}
            </div>
            <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-ink-950 sm:text-4xl">
              {l(
                `${PORTFOLIO_SERVICE_COUNT} capacidades organizadas en siete áreas claras.`,
                `${PORTFOLIO_SERVICE_COUNT} capabilities organized into seven clear domains.`,
              )}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-600">
              {l(
                "Cada capítulo explica el problema, nuestra forma de intervenir, los entregables y las capacidades disponibles. Puedes recorrer solamente el área que corresponde a tu prioridad.",
                "Each chapter explains the problem, how we intervene, the deliverables, and available capabilities. You can review only the domain that matches your priority.",
              )}
            </p>
          </div>

          <nav aria-label={l("Índice del portafolio", "Portfolio index")}>
            <ol className="grid gap-2 sm:grid-cols-2">
              {PORTFOLIO_DOMAINS.map((domain) => {
                const Icon = domain.icon;
                return (
                  <li key={domain.id}>
                    <Link
                      href={`#${domain.id}`}
                      className="group flex h-full items-center gap-3 rounded-2xl border border-ink-100 bg-white p-3.5 transition-all hover:border-brand-200 hover:shadow-soft"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[0.58rem] font-bold uppercase tracking-[0.16em] text-ink-400">{domain.number}</span>
                        <span className="mt-0.5 block text-sm font-semibold leading-snug text-ink-900">{domain.shortTitle}</span>
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-700" aria-hidden="true" />
                    </Link>
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
