import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { INDUSTRY_PAGES } from "@/lib/data/industry-pages";

// Stable, sales-led order: business areas first, then cross-cutting.
const PAGE_ORDER = [
  "finance",
  "operations",
  "hr-payroll",
  "executive-reporting",
  "sap-integrations",
  "process-automation",
  "internal-support",
  "data-governance",
];

export const metadata: Metadata = {
  title: "Industries & use cases · Finance · Operations · HR",
  description:
    "Eight specialized use-case pages: Finance, Operations, HR / Payroll, Executive Reporting, SAP Integrations, Process Automation, Internal Support, and Data Governance.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Industries / use cases"
        title="Where we deliver value"
        description="Each functional area has its own dedicated page — with the typical problem, what we do, the systems and capabilities involved, the deliverables, and how Enterprise Copilot connects."
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Specialized pages"
          title="Eight functional and cross-cutting areas"
          description="Pick the area that matters to you to see specific problems, capabilities, and deliverables."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {PAGE_ORDER.map((slug) => {
            const page = INDUSTRY_PAGES[slug];
            if (!page) return null;
            return (
              <li
                key={page.slug}
                id={page.slug}
                className="group flex scroll-mt-24 flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-soft transition-all hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-elevate"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                  {page.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink-950">
                  {page.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {page.intro}
                </p>

                <div className="mt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500">
                    Systems and capabilities
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {page.capabilities.slice(0, 6).map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-ink-200 bg-ink-50 px-2.5 py-0.5 text-xs font-medium text-ink-700"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/industries/${page.slug}`}
                  className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  Open {page.title} page
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      <ContactCTA />
    </>
  );
}
