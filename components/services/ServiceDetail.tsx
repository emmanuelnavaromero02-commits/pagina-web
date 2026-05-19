import { Section, SectionHeader } from "@/components/ui/Section";
import { SERVICE_DETAILS, type ServiceCard } from "@/lib/site-data";

type ServiceDetailProps = {
  slug: ServiceCard["slug"];
};

export function ServiceDetail({ slug }: ServiceDetailProps) {
  const detail = SERVICE_DETAILS[slug];
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Áreas de trabajo"
        title="Qué hacemos dentro de este servicio"
        description="Cada bloque corresponde a un tipo de entregable o iniciativa que podemos arrancar contigo."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {detail.sections.map((section) => (
          <article
            key={section.id}
            id={section.id}
            className="scroll-mt-24 rounded-2xl border border-ink-100 bg-white p-7 shadow-soft"
          >
            <h3 className="font-display text-lg font-semibold text-ink-950">
              {section.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              {section.description}
            </p>
            {section.bullets ? (
              <ul className="mt-4 space-y-1.5">
                {section.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-ink-700"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
