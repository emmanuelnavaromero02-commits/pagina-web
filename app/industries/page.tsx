import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { INDUSTRY_PAGES } from "@/lib/data/industry-pages";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

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

export const metadata = createPageMetadata({
  path: "/industries",
  title: l(
    "Áreas y casos de uso · Finanzas · Operaciones · RR. HH.",
    "Business areas and use cases · Finance · Operations · HR",
  ),
  description: l(
    "Ocho áreas especializadas: finanzas, operaciones, recursos humanos y nómina, reporte ejecutivo, integraciones SAP, automatización, soporte interno y gobierno de datos.",
    "Eight specialized areas: finance, operations, HR and payroll, executive reporting, SAP integrations, automation, internal support, and data governance.",
  ),
});

export default function IndustriesPage() {
  return (
    <>
      <ServiceHero
        eyebrow={l("Áreas y casos de uso", "Business areas and use cases")}
        title={l("Dónde podemos aportar valor", "Where we can add value")}
        description={l(
          "Cada área dispone de una página con el problema habitual, el enfoque propuesto, los sistemas y capacidades implicados, los entregables y la posible conexión con Enterprise Copilot.",
          "Each area has a page covering the common problem, proposed approach, involved systems and capabilities, deliverables, and potential connection with Enterprise Copilot.",
        )}
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow={l("Páginas especializadas", "Specialized pages")}
          title={l(
            "Ocho áreas funcionales y transversales",
            "Eight functional and cross-cutting areas",
          )}
          description={l(
            "Seleccione el área relevante para consultar problemas, capacidades y entregables posibles.",
            "Select the relevant area to review potential problems, capabilities, and deliverables.",
          )}
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
                    {l("Sistemas y capacidades", "Systems and capabilities")}
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
                  {l("Abrir", "Open")} {page.title}
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
