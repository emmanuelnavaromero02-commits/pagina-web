import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SOFTWARE_FACTORY_PAGES } from "@/lib/data/specialized-services";
import { l } from "@/lib/i18n/config";

const outcomes = [
  l("Menos captura duplicada entre sistemas.", "Less duplicate data entry across systems."),
  l("Validaciones y aprobaciones dentro del flujo.", "Validations and approvals within the workflow."),
  l("Estado, responsables y pendientes visibles.", "Visible status, ownership, and pending work."),
  l("Integración con las plataformas existentes.", "Integration with existing platforms."),
  l("Evolución gradual de sistemas heredados.", "Gradual evolution of legacy systems."),
  l(
    "Documentación y transferencia para operar la solución.",
    "Documentation and knowledge transfer to operate the solution.",
  ),
];

export function SoftwareFactoryBlocks() {
  const pages = Object.values(SOFTWARE_FACTORY_PAGES);

  return (
    <>
      <Section className="bg-white">
        <SectionHeader
          eyebrow={l("Capacidades", "Capabilities")}
          title={l(
            "Software para procesos que no caben en una solución estándar",
            "Software for processes that do not fit a standard product",
          )}
          description={l(
            "Diseñamos, construimos y evolucionamos soluciones alrededor de la operación real, con alcance, entregables y soporte definidos.",
            "We design, build, and evolve solutions around real operations, with defined scope, deliverables, and support.",
          )}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => (
            <Link
              key={page.slug}
              href={`/services/software-factory/${page.slug}`}
              className="group rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
            >
              <Card interactive className="h-full">
                <CardTitle className="flex items-start justify-between gap-4">
                  <span>{page.title}</span>
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-700 transition-transform group-hover:translate-x-1" />
                </CardTitle>
                <CardDescription>{page.intro}</CardDescription>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-ink-50">
        <SectionHeader
          eyebrow={l("Resultado operativo", "Operational outcome")}
          title={l(
            "Menos trabajo manual y más control sobre cada proceso",
            "Less manual work and more control over every process",
          )}
          description={l(
            "La solución se diseña para integrarse con lo que ya existe y quedar lista para operar, mantener y evolucionar.",
            "The solution is designed to work with what already exists and remain ready to operate, maintain, and evolve.",
          )}
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome) => (
            <li
              key={outcome}
              className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4 text-sm leading-relaxed text-ink-800 shadow-soft"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
