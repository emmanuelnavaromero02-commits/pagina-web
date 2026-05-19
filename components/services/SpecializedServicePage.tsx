import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { LinkButton } from "@/components/ui/Button";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";

export type SpecializedPage = {
  slug: string;
  eyebrow: string;
  title: string;
  parent: { label: string; href: string };
  rootBreadcrumb?: { label: string; href: string };
  intro: string;
  problem: string;
  whatWeDo: string[];
  capabilitiesHeading?: string;
  capabilities: string[];
  deliverables: string[];
  copilot?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function SpecializedServicePage({ data }: { data: SpecializedPage }) {
  const root = data.rootBreadcrumb ?? {
    label: "Services",
    href: "/services",
  };

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs text-ink-500">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-ink-800">
                  Home
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
      />

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Typical problem
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
              Where companies usually need help
            </h2>
          </div>
          <p className="text-base leading-relaxed text-ink-700">
            {data.problem}
          </p>
        </div>
      </Section>

      <Section className="bg-ink-50">
        <SectionHeader
          eyebrow="What we do"
          title="Concrete activities, not vague offerings"
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

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Capabilities & technologies"
          title={data.capabilitiesHeading ?? "Stack and capabilities we apply"}
        />
        <ul className="mt-10 flex flex-wrap gap-2">
          {data.capabilities.map((b) => (
            <li
              key={b}
              className="rounded-full border border-ink-200 bg-ink-50 px-4 py-1.5 text-sm font-medium text-ink-800"
            >
              {b}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-ink-50">
        <SectionHeader
          eyebrow="What we deliver"
          title="Tangible outputs you can operate and audit"
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
        <Section className="bg-white">
          <article className="relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-white via-brand-50/30 to-white p-8 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                  <Sparkles className="h-3 w-3" />
                  Enterprise Copilot
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink-950">
                  How this connects with Enterprise Copilot
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink-700">
                  {data.copilot}
                </p>
              </div>
              <div className="lg:justify-self-end">
                <LinkButton href="/copilot" size="md">
                  Explore Enterprise Copilot
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
              </div>
            </div>
          </article>
        </Section>
      ) : null}

      <Section className="bg-white">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <LinkButton
            href={data.primaryCta?.href ?? "/contact"}
            size="lg"
          >
            {data.primaryCta?.label ?? "Request a diagnosis"}
            <ArrowRight className="h-4 w-4" />
          </LinkButton>
          {data.secondaryCta ? (
            <LinkButton
              href={data.secondaryCta.href}
              size="lg"
              variant="outline"
            >
              {data.secondaryCta.label}
            </LinkButton>
          ) : (
            <LinkButton
              href={data.parent.href}
              size="lg"
              variant="outline"
            >
              Back to {data.parent.label}
            </LinkButton>
          )}
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
