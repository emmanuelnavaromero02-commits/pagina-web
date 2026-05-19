import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { INDUSTRY_AREAS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Industrias y casos de uso · RRHH · Finanzas · Operaciones",
  description:
    "Casos de uso por área funcional: RRHH, finanzas, operaciones, reporting, soporte interno, integraciones SAP, automatización y gobierno de datos.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Industrias / casos de uso"
        title="Áreas donde aportamos valor"
        description="Combinamos software a medida, integraciones SAP y IA empresarial sobre áreas funcionales y capacidades transversales reales."
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Áreas"
          title="Problema, qué hacemos y sobre qué sistemas"
          description="Cada tarjeta describe el patrón típico, lo que hacemos en ese caso y las capacidades involucradas."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {INDUSTRY_AREAS.map((area) => {
            const Icon = area.icon;
            const contactHref = `/contact?topic=${area.id}`;
            return (
              <li
                key={area.id}
                id={area.id}
                className="scroll-mt-24 flex flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-soft transition-all hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-elevate"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink-950">
                    {area.title}
                  </h3>
                </div>

                <div className="mt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500">
                    Problema típico
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
                    {area.problem}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                    Qué hacemos
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {area.whatWeDo.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-ink-700"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500">
                    Sistemas y capacidades
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {area.systems.map((s) => (
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
                  href={contactHref}
                  className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  {area.cta}
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
