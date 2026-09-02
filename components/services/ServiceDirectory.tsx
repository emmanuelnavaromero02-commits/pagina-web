"use client";

import Link from "@/components/ui/SafeLink";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Layers3,
  MessageSquareText,
  PackageCheck,
  Route,
  Sparkles,
} from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import {
  PORTFOLIO_DOMAINS,
  PORTFOLIO_DOMAIN_DETAILS,
  PORTFOLIO_SERVICE_COUNT,
} from "@/lib/data/portfolio";
import { l } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

const domainActions: Record<string, { href: string; label: string }> = {
  "personas-nomina": {
    href: "/contact?topic=hr",
    label: l("Hablar sobre personas y nómina", "Discuss people and payroll"),
  },
  "sap-erp": {
    href: "/services/sap",
    label: l("Conocer servicios SAP", "Explore SAP services"),
  },
  "fabrica-integracion": {
    href: "/services/software-factory",
    label: l("Conocer la fábrica de software", "Explore the software factory"),
  },
  "operacion-ams": {
    href: "/services/sap#ams",
    label: l("Explorar AMS y operación", "Explore AMS and operations"),
  },
  "nube-datos": {
    href: "/services/cloud-data/aws",
    label: l("Ver migraciones AWS", "View AWS migrations"),
  },
  "privacidad-transformacion": {
    href: "/contact?topic=governance",
    label: l("Evaluar privacidad y datos", "Assess privacy and data"),
  },
  "innovacion-inteligencia": {
    href: "/copilot",
    label: l("Conocer inteligencia de decisión", "Explore decision intelligence"),
  },
};

const popularRoutes = [
  {
    eyebrow: "SAP",
    title: l("Transformación SAP y S/4HANA", "SAP and S/4HANA transformation"),
    description: l("Estrategia, procesos, datos, tecnología y AMS.", "Strategy, processes, data, technology, and AMS."),
    href: "/services/sap",
  },
  {
    eyebrow: "AWS",
    title: l("Migración y modernización AWS", "AWS migration and modernization"),
    description: l("Assessment, landing zone, oleadas, FinOps y operación.", "Assessment, landing zone, waves, FinOps, and operations."),
    href: "/services/cloud-data/aws",
  },
  {
    eyebrow: l("Fábrica", "Factory"),
    title: "ABAP + Fiori",
    description: l("Capacidad industrializada, calidad y entregas más rápidas.", "Industrialized capacity, quality, and faster delivery."),
    href: "/services/software-factory",
  },
  {
    eyebrow: l("Innovación", "Innovation"),
    title: l("Inteligencia de decisión", "Decision intelligence"),
    description: l("Núcleo cuantitativo, agentes e IA generativa gobernada.", "Quantitative core, agents, and governed generative AI."),
    href: "/copilot",
  },
];

export function ServiceDirectory() {
  const [activeId, setActiveId] = useState(PORTFOLIO_DOMAINS[0].id);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  useEffect(() => {
    const selectFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (PORTFOLIO_DOMAINS.some((domain) => domain.id === hash)) {
        setActiveId(hash);
      }
    };
    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    return () => window.removeEventListener("hashchange", selectFromHash);
  }, []);

  const activeDomain = useMemo(
    () => PORTFOLIO_DOMAINS.find((domain) => domain.id === activeId) ?? PORTFOLIO_DOMAINS[0],
    [activeId],
  );
  const detail = PORTFOLIO_DOMAIN_DETAILS[activeDomain.id];
  const action = domainActions[activeDomain.id];
  const ActiveIcon = activeDomain.icon;

  const selectDomain = (id: string) => {
    setActiveId(id);
    setExpandedService(null);
    window.history.replaceState(null, "", `#${id}`);
    if (window.matchMedia("(max-width: 1023px)").matches) {
      requestAnimationFrame(() => {
        document.getElementById("directorio-panel")?.scrollIntoView({ block: "start", behavior: "smooth" });
      });
    }
  };

  return (
    <>
      <section className="border-y border-ink-100 bg-white py-16 sm:py-20">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                {l("Soluciones destacadas", "Featured solutions")}
              </div>
              <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-tight tracking-[-0.035em] text-ink-950 sm:text-4xl">
                {l("Capacidades para prioridades críticas.", "Capabilities for critical priorities.")}
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-relaxed text-ink-600 sm:text-lg lg:justify-self-end">
              {l(
                "Transformación SAP, migración AWS, desarrollo ABAP y Fiori e inteligencia aplicada con alcance, entregables y operación definidos.",
                "SAP transformation, AWS migration, ABAP and Fiori development, and applied intelligence with defined scope, deliverables, and operations.",
              )}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {popularRoutes.map((route) => (
              <Link key={route.href} href={route.href} className="group flex min-h-48 flex-col rounded-2xl border border-ink-100 bg-ink-50 p-5 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:bg-white hover:shadow-soft sm:p-6">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">{route.eyebrow}</span>
                <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-ink-950">{route.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{route.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                  {l("Conocer más", "Learn more")}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="eyebrow">{l("Áreas de especialidad", "Areas of expertise")}</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight tracking-[-0.035em] text-ink-950 sm:text-4xl lg:text-5xl">
              {l("Experiencia especializada para cada parte de la operación.", "Specialist expertise for every part of the operation.")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
              {l(
                `${PORTFOLIO_SERVICE_COUNT} capacidades organizadas en siete áreas empresariales, desde personas y SAP hasta nube, seguridad e inteligencia aplicada.`,
                `${PORTFOLIO_SERVICE_COUNT} capabilities across seven enterprise areas, from people and SAP to cloud, security, and applied intelligence.`,
              )}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[22rem_minmax(0,1fr)] xl:gap-10">
            <nav aria-label={l("Áreas de servicio", "Service domains")} className="lg:sticky lg:top-28 lg:self-start">
              <div role="tablist" aria-orientation="vertical" className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {PORTFOLIO_DOMAINS.map((domain) => {
                  const Icon = domain.icon;
                  const selected = domain.id === activeDomain.id;
                  return (
                    <button
                      key={domain.id}
                      id={`tab-${domain.id}`}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-controls="directorio-panel"
                      onClick={() => selectDomain(domain.id)}
                      className={cn(
                        "group flex min-h-[5.25rem] w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all",
                        selected
                          ? "border-brand-700 bg-brand-700 text-white shadow-elevate"
                          : "border-ink-100 bg-white text-ink-900 hover:border-brand-200 hover:bg-brand-50",
                      )}
                    >
                      <span className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-xl", selected ? "bg-white/10 text-accent-400" : "bg-brand-50 text-brand-700 group-hover:bg-white")}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className={cn("block text-xs font-bold uppercase tracking-[0.14em]", selected ? "text-brand-200" : "text-ink-400")}>{domain.number}</span>
                        <span className="mt-1 block text-base font-semibold leading-snug">{domain.shortTitle}</span>
                      </span>
                      <ArrowRight className={cn("h-4 w-4 shrink-0 transition-transform", selected ? "text-accent-400" : "text-ink-300 group-hover:translate-x-0.5 group-hover:text-brand-700")} aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
            </nav>

            <div
              id="directorio-panel"
              role="tabpanel"
              aria-labelledby={`tab-${activeDomain.id}`}
              className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-ink-100 bg-white shadow-soft"
            >
              <header className="border-b border-ink-100 p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700"><ActiveIcon className="h-5 w-5" aria-hidden="true" /></span>
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">{activeDomain.number} / 07</span>
                    </div>
                    <h3 className="mt-6 text-balance font-display text-3xl font-semibold leading-tight tracking-[-0.035em] text-ink-950 sm:text-4xl">{activeDomain.title}</h3>
                    <p className="mt-4 text-lg font-semibold leading-relaxed text-brand-700">{activeDomain.promise}</p>
                    <p className="mt-4 text-base leading-relaxed text-ink-600">{activeDomain.description}</p>
                  </div>
                  {action ? (
                    <LinkButton href={action.href} className="shrink-0">
                      {action.label}<ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </LinkButton>
                  ) : null}
                </div>
              </header>

              {detail ? (
                <div className="grid border-b border-ink-100 lg:grid-cols-3">
                  <article className="border-b border-ink-100 p-6 lg:border-b-0 lg:border-r lg:p-7">
                    <div className="flex items-center gap-3"><MessageSquareText className="h-5 w-5 text-brand-700" aria-hidden="true" /><h4 className="font-display text-lg font-semibold text-ink-950">{l("Qué resolvemos", "What we solve")}</h4></div>
                    <ul className="mt-5 space-y-4">
                      {detail.problems.slice(0, 2).map((item) => <li key={item.title}><p className="text-sm font-semibold text-ink-900">{item.title}</p><p className="mt-1 text-sm leading-relaxed text-ink-600">{item.description}</p></li>)}
                    </ul>
                  </article>
                  <article className="border-b border-ink-100 p-6 lg:border-b-0 lg:border-r lg:p-7">
                    <div className="flex items-center gap-3"><Route className="h-5 w-5 text-brand-700" aria-hidden="true" /><h4 className="font-display text-lg font-semibold text-ink-950">{l("Cómo empezamos", "How we start")}</h4></div>
                    <ol className="mt-5 space-y-3">
                      {detail.approach.map((item) => <li key={item.step} className="flex gap-3 text-sm leading-relaxed text-ink-600"><span className="font-display text-xs font-bold text-brand-700">{item.step}</span><span><strong className="font-semibold text-ink-900">{item.title}.</strong> {item.description}</span></li>)}
                    </ol>
                  </article>
                  <article className="p-6 lg:p-7">
                    <div className="flex items-center gap-3"><PackageCheck className="h-5 w-5 text-brand-700" aria-hidden="true" /><h4 className="font-display text-lg font-semibold text-ink-950">{l("Qué recibes", "What you receive")}</h4></div>
                    <ul className="mt-5 space-y-3">
                      {detail.deliverables.slice(0, 4).map((item) => <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-600"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />{item}</li>)}
                    </ul>
                  </article>
                </div>
              ) : null}

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">{l("Servicios disponibles", "Available services")}</p>
                    <h4 className="mt-2 font-display text-2xl font-semibold text-ink-950">{l("Capacidades especializadas", "Specialist capabilities")}</h4>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-ink-100 bg-ink-50 px-3 py-2 text-xs font-semibold text-ink-600"><Layers3 className="h-4 w-4 text-brand-700" aria-hidden="true" />{activeDomain.services.length} {l("servicios", "services")}</span>
                </div>

                <div className="mt-7 divide-y divide-ink-100 rounded-2xl border border-ink-100">
                  {activeDomain.services.map((service, index) => {
                    const expanded = expandedService === service.title;
                    const panelId = `service-${activeDomain.id}-${index}`;
                    return (
                      <article key={service.title} className="bg-white first:rounded-t-2xl last:rounded-b-2xl">
                        <button
                          type="button"
                          onClick={() => setExpandedService(expanded ? null : service.title)}
                          aria-expanded={expanded}
                          aria-controls={panelId}
                          className="group flex w-full items-center gap-4 p-5 text-left hover:bg-ink-50 sm:p-6"
                        >
                          <span className="font-display text-xs font-bold tracking-[0.13em] text-brand-700">{String(index + 1).padStart(2, "0")}</span>
                          <span className="min-w-0 flex-1 text-base font-semibold leading-snug text-ink-950 sm:text-lg">{service.title}</span>
                          <span className="hidden gap-2 md:flex">
                            {service.outcomes.slice(0, 2).map((outcome) => <span key={outcome} className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-800">{outcome}</span>)}
                          </span>
                          <ChevronDown className={cn("h-5 w-5 shrink-0 text-ink-400 transition-transform", expanded && "rotate-180 text-brand-700")} aria-hidden="true" />
                        </button>
                        {expanded ? (
                          <div id={panelId} className="border-t border-ink-100 bg-ink-50 px-5 pb-6 pt-5 sm:px-14 sm:pb-7">
                            <p className="max-w-3xl text-base leading-relaxed text-ink-700">{service.description}</p>
                            <div className="mt-5 flex flex-wrap items-center gap-3">
                              {service.href ? (
                                <Link href={service.href} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900">{l("Conocer esta capacidad", "Explore this capability")}<ArrowRight className="h-4 w-4" /></Link>
                              ) : (
                                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900">{l("Consultar este servicio", "Ask about this service")}<ArrowRight className="h-4 w-4" /></Link>
                              )}
                            </div>
                          </div>
                        ) : null}
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
