import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { LinkButton } from "@/components/ui/Button";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ServicePageStructuredData } from "@/components/seo/ServicePageStructuredData";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { l } from "@/lib/i18n/config";

export type SpecializedPage = {
  slug: string;
  eyebrow: string;
  title: string;
  parent: { label: string; href: string };
  rootBreadcrumb?: { label: string; href: string };
  intro: string;
  heroBadges?: string[];
  problem: string;
  whatWeDo: string[];
  useCases?: string[];
  capabilitiesHeading?: string;
  capabilities: string[];
  deliverables: string[];
  copilot?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function SpecializedServicePage({ data }: { data: SpecializedPage }) {
  const root = data.rootBreadcrumb ?? {
    label: l("Servicios", "Services"),
    href: "/services",
  };

  const defaultContactHref = data.parent.href.startsWith(
    "/services/software-factory",
  )
    ? "/contact?topic=software"
    : data.parent.href.startsWith("/services/sap-integrations")
      ? "/contact?topic=sap"
      : data.parent.href.startsWith("/services/cloud-data")
        ? "/contact?topic=governance"
        : data.parent.href.startsWith("/services/enterprise-ai")
          ? "/contact?topic=automation"
          : "/contact";
  const heroPrimary =
    data.primaryCta ?? {
      label: l("Solicitar diagnóstico", "Request a diagnosis"),
      href: defaultContactHref,
    };
  const heroSecondary =
    data.secondaryCta ?? { label: l(`Volver a ${data.parent.label}`, `Back to ${data.parent.label}`), href: data.parent.href };
  const hasCustomCtas = Boolean(data.primaryCta || data.secondaryCta);

  return (
    <>
      <ServicePageStructuredData data={data} />
      <div className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <nav aria-label={l("Ruta de navegación", "Breadcrumb")} className="text-xs text-ink-500">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-ink-800">
                  {l("Inicio", "Home")}
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="h-3 w-3 text-ink-300" />
              </li>
              <li>
                <Link href={root.href} className="hover:text-ink-800">
                  {root.label}
                </Link>
              </li>
              {data.parent.href !== root.href ? (
                <>
                  <li aria-hidden>
                    <ChevronRight className="h-3 w-3 text-ink-300" />
                  </li>
                  <li>
                    <Link
                      href={data.parent.href}
                      className="hover:text-ink-800"
                    >
                      {data.parent.label}
                    </Link>
                  </li>
                </>
              ) : null}
              <li aria-hidden>
                <ChevronRight className="h-3 w-3 text-ink-300" />
              </li>
              <li className="font-medium text-ink-700">{data.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <ServiceHero
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.intro}
        badges={data.heroBadges}
        primaryCta={heroPrimary}
        secondaryCta={heroSecondary}
      />

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              {l("El problema", "The problem")}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
              {l("Dónde las empresas pierden tiempo, recursos o control", "Where companies lose time, resources, or control")}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-ink-700">
            {data.problem}
          </p>
        </div>
      </Section>

      <Section className="bg-ink-50">
        <SectionHeader
          eyebrow={l("Qué hace 7 Business Solutions", "What 7 Business Solutions does")}
          title={l("Del problema de negocio al software operativo", "From business problem to operational software")}
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {data.whatWeDo.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4 text-sm leading-relaxed text-ink-800 shadow-soft"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {data.useCases && data.useCases.length > 0 ? (
        <Section className="bg-white">
          <SectionHeader
            eyebrow={l("Casos de uso", "Use cases")}
            title={l("Escenarios operativos para esta capacidad", "Operational scenarios for this capability")}
            description={l("Situaciones concretas en las que esta capacidad puede apoyar la operación.", "Concrete situations where this capability can support operations.")}
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.useCases.map((uc, idx) => (
              <li
                key={uc}
                className="group relative rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-elevate"
              >
                <span className="absolute -top-3 left-5 inline-flex items-center rounded-full bg-brand-700 px-2 py-0.5 text-[10px] font-semibold tracking-widest text-white">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-ink-800">
                  {uc}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section className="bg-ink-50">
        <SectionHeader
          eyebrow={l("Capacidades y tecnologías", "Capabilities and technologies")}
          title={data.capabilitiesHeading ?? l("Stack y capacidades que aplicamos", "Stack and capabilities we apply")}
        />
        <ul className="mt-10 flex flex-wrap gap-2">
          {data.capabilities.map((b) => (
            <li
              key={b}
              className="rounded-full border border-ink-200 bg-white px-4 py-1.5 text-sm font-medium text-ink-800 shadow-soft"
            >
              {b}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-white">
        <SectionHeader
          eyebrow={l("Qué entregamos", "What we deliver")}
          title={l("Entregables que puedes operar y auditar", "Deliverables you can operate and audit")}
        />
        <ul className="mt-10 grid gap-3 lg:grid-cols-2">
          {data.deliverables.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4 text-sm leading-relaxed text-ink-800 shadow-soft"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {data.copilot ? (
        <Section className="bg-ink-50">
          <article className="relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-white via-brand-50/30 to-white p-8 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                  <Sparkles className="h-3 w-3" />
                  Enterprise Copilot
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink-950">
                  {l(
                    "Qué puede resolver Enterprise Copilot",
                    "What Enterprise Copilot can help solve",
                  )}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink-700">
                  {data.copilot}
                </p>
              </div>
              <div className="lg:justify-self-end">
                <LinkButton href="/copilot" size="md">
                  {l("Explorar Enterprise Copilot", "Explore Enterprise Copilot")}
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
              </div>
            </div>
          </article>
        </Section>
      ) : null}

      {hasCustomCtas ? (
        <Section className="bg-white">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <LinkButton href={heroPrimary.href} size="lg">
              {heroPrimary.label}
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <LinkButton href={heroSecondary.href} size="lg" variant="outline">
              {heroSecondary.label}
            </LinkButton>
          </div>
        </Section>
      ) : (
        <ContactCTA primaryHref={defaultContactHref} />
      )}
    </>
  );
}
