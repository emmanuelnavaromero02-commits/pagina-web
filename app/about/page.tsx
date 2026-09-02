import type { Metadata } from "next";
import { ArrowRight, Building2, CheckCircle2, Landmark, UserRound } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { LEGAL_ENTITY } from "@/lib/constants";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

const title = l("Empresa", "Company");
const description = l(
  "Conozca la estructura responsable y el modelo de especialistas de 7 Business Solutions.",
  "Meet the accountable structure and specialist delivery model behind 7 Business Solutions.",
);

export const metadata: Metadata = createPageMetadata({
  path: "/about",
  title,
  description,
});

const operatingPrinciples = [
  {
    title: l("Coordinación responsable", "Accountable coordination"),
    description: l(
      "Un punto de contacto coordina la atención, el alcance y el seguimiento operativo.",
      "One point of contact coordinates enquiries, scope, and operational follow-up.",
    ),
  },
  {
    title: l("Especialización según el proyecto", "Expertise matched to the project"),
    description: l(
      "Incorporamos especialistas senior en software, SAP, cloud, datos e IA según el alcance real.",
      "We bring in senior software, SAP, cloud, data, and AI specialists according to the actual scope.",
    ),
  },
  {
    title: l("Ejecución con contexto", "Delivery with context"),
    description: l(
      "El equipo combina criterio técnico y operativo para trabajar sobre el problema, no sobre una solución genérica.",
      "The team combines technical and operational judgment to address the problem, not a generic solution.",
    ),
  },
];

const leadershipProfiles = [
  {
    name: "Luis Benjamin",
    eyebrow: l("Liderazgo financiero", "Financial leadership"),
    role:
      "Corporate Finance & Accounting | Accounts Payable (AP) & Accounts Receivable (AR)",
    description: l(
      "Especialista senior que lidera el control financiero corporativo y supervisa los ciclos de cuentas por pagar y por cobrar. Define criterios, seguimiento y conciliaciones para fortalecer liquidez, trazabilidad y disciplina operativa en la toma de decisiones.",
      "A senior specialist who leads corporate financial control and oversees accounts payable and accounts receivable cycles. He establishes criteria, monitoring, and reconciliations to strengthen liquidity, traceability, and operating discipline in decision-making.",
    ),
    icon: Landmark,
  },
  {
    name: "Rabely Jovana",
    eyebrow: l("Coordinación operativa", "Operational coordination"),
    role: l(
      "Responsable de Administración y Operaciones",
      "Administration and Operations Lead",
    ),
    description: l(
      "Coordina la atención comercial, la administración y el seguimiento operativo para mantener alcance, responsables y comunicación claros.",
      "She coordinates commercial enquiries, administration, and operational follow-up to keep scope, ownership, and communication clear.",
    ),
    icon: UserRound,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="dark-panel relative overflow-hidden border-b border-white/10 text-white">
        <div aria-hidden className="surface-noise pointer-events-none absolute inset-0 opacity-[0.1]" />
        <div className="site-container relative py-16 sm:py-20 lg:py-24">
          <p className="eyebrow !text-accent-400">
            {title}
          </p>
          <h1 className="mt-5 max-w-5xl text-balance font-display text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            {l(
              "Responsabilidad clara. Especialistas adecuados para cada proyecto.",
              "Clear accountability. The right specialists for each project.",
            )}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            {l(
              "Coordinamos cada iniciativa desde el contexto de negocio hasta el seguimiento operativo, formando el equipo según el alcance.",
              "We coordinate every initiative from business context through operational follow-up, shaping the team around the scope.",
            )}
          </p>
        </div>
      </section>

      <Section className="bg-ink-50 py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {leadershipProfiles.map((profile) => {
              const Icon = profile.icon;

              return (
                <article
                  key={profile.name}
                  className="relative overflow-hidden rounded-3xl bg-ink-950 p-7 text-white shadow-elevate sm:p-8"
                >
                  <div
                    aria-hidden
                    className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-500/20 blur-3xl"
                  />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-accent-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
                    {profile.eyebrow}
                  </p>
                  <h2 className="relative mt-2 font-display text-2xl font-semibold sm:text-3xl">
                    {profile.name}
                  </h2>
                  <p className="relative mt-2 text-sm font-medium leading-relaxed text-ink-200">
                    {profile.role}
                  </p>
                  <p className="relative mt-5 max-w-md text-sm leading-relaxed text-ink-300">
                    {profile.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="rounded-[2rem] border border-ink-100 bg-white p-7 shadow-float sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              {l("Modelo de trabajo", "Delivery model")}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
              {l(
                "El equipo se configura alrededor del problema.",
                "The team is shaped around the problem.",
              )}
            </h2>
            <ul className="mt-7 divide-y divide-ink-100">
              {operatingPrinciples.map((item, index) => (
                <li key={item.title} className="grid gap-3 py-5 first:pt-0 last:pb-0 sm:grid-cols-[2.5rem_1fr]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-xs font-semibold text-brand-700">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-ink-950">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-ink-100 bg-white px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3">
            <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
            <div>
              <p className="font-medium text-ink-950">
                {l("Operación formal en México", "Formal operation in Mexico")}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-600">
                <span className="block font-semibold text-ink-900">
                  {LEGAL_ENTITY.legalName}
                </span>
                <span className="mt-1 block">
                  {l(LEGAL_ENTITY.activity, "Computer consulting services")}
                </span>
                <span className="block">RFC: {LEGAL_ENTITY.taxId}</span>
                <span className="block">
                  {l("Estado de México, México.", "State of Mexico, Mexico.")}
                </span>
              </p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-brand-800">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            {l("Estructura verificable", "Verifiable structure")}
          </span>
        </div>
      </Section>

      <Section className="bg-white py-14 sm:py-16">
        <div className="flex flex-col gap-7 rounded-3xl bg-gradient-to-br from-brand-800 via-brand-900 to-ink-950 p-8 text-white shadow-elevate sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
              {l("Siguiente paso", "Next step")}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {l("Conversemos sobre el alcance.", "Let’s discuss the scope.")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-200 sm:text-base">
              {l(
                "Cuéntanos qué necesita resolver tu operación y formaremos el equipo adecuado.",
                "Tell us what your operation needs to solve, and we will shape the right team.",
              )}
            </p>
          </div>
          <LinkButton
            href="/contact"
            size="lg"
            className="shrink-0"
          >
            {l("Solicitar diagnóstico", "Request a diagnosis")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </LinkButton>
        </div>
      </Section>
    </>
  );
}
