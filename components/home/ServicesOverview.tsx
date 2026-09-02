import Link from "next/link";
import { ArrowRight, Layers3 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { PORTFOLIO_DOMAINS, PORTFOLIO_SERVICE_COUNT } from "@/lib/data/portfolio";
import { l } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function ServicesOverview() {
  const domainHref = (id: string) => {
    if (id === "sap-erp") return "/services/sap";
    if (id === "fabrica-integracion") return "/services/software-factory";
    if (id === "nube-datos") return "/services/cloud-data/aws";
    if (id === "innovacion-inteligencia") return "/copilot";
    return `/services#${id}`;
  };

  return (
    <Section className="relative overflow-hidden border-y border-ink-100 bg-ink-50">
      <div aria-hidden className="surface-grid pointer-events-none absolute inset-x-0 top-0 h-[34rem] opacity-60" />

      <div className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="eyebrow">{l("Portafolio empresarial", "Enterprise portfolio")}</p>
            <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-ink-950 sm:text-5xl">
              {l(
                "Siete dominios para transformar sin fragmentar.",
                "Seven domains for transformation without fragmentation.",
              )}
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
              {l(
                "Desde personas y nómina hasta S/4HANA, software, nube, seguridad e inteligencia aplicada. Entramos por una prioridad y conectamos solamente las capacidades que producen el resultado.",
                "From people and payroll to S/4HANA, software, cloud, security, and applied intelligence. We enter through one priority and connect only the capabilities that produce the outcome.",
              )}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold text-ink-500">
              <span className="rounded-full border border-ink-100 bg-white px-3 py-2 shadow-soft">
                {PORTFOLIO_SERVICE_COUNT} {l("capacidades", "capabilities")}
              </span>
              <span className="rounded-full border border-ink-100 bg-white px-3 py-2 shadow-soft">
                {l("Una sola gobernanza", "One governance model")}
              </span>
            </div>
          </div>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {PORTFOLIO_DOMAINS.map((domain, index) => {
            const Icon = domain.icon;
            const highlighted = domain.featured;

            return (
              <li
                key={domain.id}
                className={cn(
                  index === 0 && "md:col-span-2 xl:col-span-1",
                  highlighted && "xl:col-span-1",
                )}
              >
                <Link
                  href={domainHref(domain.id)}
                  className={cn(
                    "group relative flex h-full min-h-[19rem] flex-col overflow-hidden rounded-[1.75rem] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-float sm:p-7",
                    highlighted
                      ? "border-white/10 bg-ink-950 text-white"
                      : "border-ink-100 bg-white text-ink-950",
                  )}
                >
                  {highlighted ? (
                    <div aria-hidden className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
                  ) : null}

                  <div className="relative flex items-center justify-between gap-4">
                    <span
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-2xl",
                        highlighted
                          ? "border border-accent-400/20 bg-accent-400/10 text-accent-400"
                          : "bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white",
                      )}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className={cn("font-display text-xs font-semibold tracking-[0.18em]", highlighted ? "text-ink-500" : "text-ink-400")}>
                      {domain.number} / 07
                    </span>
                  </div>

                  <h3 className="relative mt-8 font-display text-2xl font-semibold leading-tight tracking-[-0.025em]">
                    {domain.title}
                  </h3>
                  <p className={cn("relative mt-3 text-sm leading-relaxed", highlighted ? "text-ink-300" : "text-ink-600")}>
                    {domain.promise}
                  </p>

                  <div className="relative mt-auto flex items-end justify-between gap-5 pt-8">
                    <span className={cn("inline-flex items-center gap-2 text-[0.64rem] font-bold uppercase tracking-[0.15em]", highlighted ? "text-accent-400" : "text-brand-700")}>
                      <Layers3 className="h-3.5 w-3.5" aria-hidden="true" />
                      {domain.services.length} {l("servicios", "services")}
                    </span>
                    <span className={cn("flex h-9 w-9 items-center justify-center rounded-full border transition-colors", highlighted ? "border-white/10 text-white group-hover:border-accent-400 group-hover:bg-accent-400 group-hover:text-ink-950" : "border-ink-100 text-brand-700 group-hover:border-brand-700 group-hover:bg-brand-700 group-hover:text-white")}>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>

        <div className="mt-8 flex justify-center">
          <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-5 py-3 text-sm font-semibold text-ink-900 shadow-soft transition-all hover:border-brand-300 hover:text-brand-700 hover:shadow-float">
            {l("Ver el portafolio completo y sus descripciones", "See the complete portfolio and descriptions")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
