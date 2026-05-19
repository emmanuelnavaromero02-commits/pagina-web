import type { Metadata } from "next";
import {
  Activity,
  ArrowRight,
  Cable,
  CheckCircle2,
  Compass,
  FileBarChart,
  ShieldCheck,
  Target,
} from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";

export const metadata: Metadata = {
  title: "Request a pilot · Enterprise Copilot",
  description:
    "Scoped Enterprise Copilot pilot: what we connect, the use cases we can test, how we measure impact, and the next step toward a roadmap.",
  alternates: { canonical: "/copilot/pilot" },
};

const CONNECTS = [
  {
    title: "One operational source",
    description:
      "Typically SAP (FI/CO/HCM), a corporate database, or one critical internal API.",
    icon: Cable,
  },
  {
    title: "Business rules and validations",
    description:
      "The rules that turn raw data into a decision — closing rules, reconciliation logic, HR validations.",
    icon: ShieldCheck,
  },
  {
    title: "Reporting surface",
    description:
      "An existing report or dashboard the team uses today, used as the comparison baseline.",
    icon: FileBarChart,
  },
];

const USE_CASES = [
  "Assisted monthly closing or reconciliation.",
  "Headcount, absences, or organizational queries over SAP HCM / SuccessFactors.",
  "Executive report preparation with traceability to source.",
  "Operational incident research across multiple systems.",
  "Helpdesk first-line response over corporate documentation.",
];

const MEASURE = [
  {
    title: "Manual hours reduced",
    description:
      "Time the team used to spend on the targeted task, before vs after.",
    icon: Activity,
  },
  {
    title: "Cycle-time delta",
    description:
      "How long it now takes from question to traceable, approved answer.",
    icon: Compass,
  },
  {
    title: "Audit evidence ready",
    description:
      "Whether the audit log produced is exportable and complete.",
    icon: CheckCircle2,
  },
  {
    title: "Operational fit",
    description:
      "How the pilot fits into the team's existing workflow — adoption is part of the measurement.",
    icon: Target,
  },
];

export default function CopilotPilotPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Enterprise Copilot · Pilot"
        title="Run a scoped pilot in your own systems."
        description="In a focused pilot we connect one operational source, define one use case, and measure how much manual work can be reduced — with traceability and human approval before any action."
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow="What gets connected"
          title="A pilot is intentionally small."
          description="One source, a clear use case, an existing report as comparison. We do not boil the ocean."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONNECTS.map((c) => {
            const Icon = c.icon;
            return (
              <li
                key={c.title}
                className="flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-soft"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink-950">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                  {c.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section className="bg-ink-50">
        <SectionHeader
          eyebrow="Use cases we can test"
          title="Pick one, not five"
          description="The point of a pilot is to learn fast on a real case — not to demo every feature."
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {USE_CASES.map((u) => (
            <li
              key={u}
              className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4 text-sm leading-relaxed text-ink-800 shadow-soft"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
              <span>{u}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-white">
        <SectionHeader
          eyebrow="What we measure"
          title="Concrete signals, not vague feelings"
          description="The pilot ends with measurable signals on whether scaling Enterprise Copilot makes sense for the operation."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MEASURE.map((m) => {
            const Icon = m.icon;
            return (
              <li
                key={m.title}
                className="flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-soft"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink-950">
                  {m.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                  {m.description}
                </p>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink-500">
          Typical pilots can be scoped for 2–4 weeks. The actual window depends
          on connected sources, data access, permissions, and complexity. The
          range is a planning reference for the diagnosis — not a guarantee.
        </p>
      </Section>

      <Section className="bg-ink-950 text-white">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-800 via-brand-900 to-ink-950 p-10 sm:p-14">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl"
          />
          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
              Next step
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to scope a pilot?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-200">
              Tell us the source, the use case, and the existing report we
              should use as baseline. We come back with a focused pilot
              proposal — including timeline, scope, and what we will measure.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/contact?topic=copilot-pilot" size="lg">
                Request a pilot
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton
                href="/copilot"
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                See the product
              </LinkButton>
            </div>
          </div>
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
