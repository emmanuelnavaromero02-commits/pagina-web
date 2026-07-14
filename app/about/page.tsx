import type { Metadata } from "next";
import { BriefcaseBusiness, Building2, ShieldCheck, UserRound } from "lucide-react";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Section, SectionHeader } from "@/components/ui/Section";
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

const capabilities = [
  {
    title: l("Responsabilidad clara", "Clear accountability"),
    description: l(
      "Cada iniciativa tiene coordinación administrativa, alcance definido y responsables identificados.",
      "Every initiative has administrative coordination, a defined scope, and identified owners.",
    ),
    icon: ShieldCheck,
  },
  {
    title: l("Especialistas por proyecto", "Specialists for each project"),
    description: l(
      "Se seleccionan perfiles senior en software, SAP, cloud, datos e IA según el problema que debe resolverse.",
      "Senior software, SAP, cloud, data, and AI specialists are selected according to the problem being solved.",
    ),
    icon: BriefcaseBusiness,
  },
  {
    title: l("Operación formal en México", "Formal operation in Mexico"),
    description: l(
      `${LEGAL_ENTITY.legalName} es una sociedad mexicana activa dedicada a servicios de consultoría en computación.`,
      `${LEGAL_ENTITY.legalName} is an active Mexican company providing computer consulting services.`,
    ),
    icon: Building2,
  },
];

export default function AboutPage() {
  return (
    <>
      <ServiceHero
        eyebrow={title}
        title={l(
          "Una estructura responsable, apoyada por especialistas senior.",
          "An accountable structure supported by senior specialists.",
        )}
        description={description}
      />

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
          <article className="rounded-3xl border border-brand-100 bg-brand-50/60 p-8 shadow-soft">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-700 text-white">
              <UserRound className="h-8 w-8" aria-hidden="true" />
            </span>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              {l("Responsable", "Accountable lead")}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink-950">
              Rabely Jovana
            </h2>
            <p className="mt-1 font-medium text-brand-800">
              {l(
                "Responsable de Administración y Operaciones",
                "Administration and Operations Lead",
              )}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-ink-700">
              {l(
                "Coordina la atención comercial, la administración y el seguimiento operativo para que cada proyecto tenga contexto, alcance y comunicación claros.",
                "She coordinates commercial enquiries, administration, and operational follow-up so every project has clear context, scope, and communication.",
              )}
            </p>
          </article>

          <div>
            <SectionHeader
              align="left"
              eyebrow={l("Cómo trabajamos", "How we work")}
              title={l(
                "El equipo se configura alrededor del problema.",
                "The team is shaped around the problem.",
              )}
              description={l(
                "No presentamos un organigrama artificial. Reunimos especialistas senior según la arquitectura, las plataformas y la operación implicadas.",
                "We do not present an artificial organisation chart. We bring together senior specialists according to the architecture, platforms, and operation involved.",
              )}
            />
            <ul className="mt-8 grid gap-5 sm:grid-cols-3">
              {capabilities.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-ink-100 bg-white p-5 shadow-soft"
                  >
                    <Icon className="h-5 w-5 text-brand-700" aria-hidden="true" />
                    <h3 className="mt-4 font-display font-semibold text-ink-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">
                      {item.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}

