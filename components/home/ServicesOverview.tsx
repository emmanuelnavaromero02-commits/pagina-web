import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SERVICES } from "@/lib/site-data";

export function ServicesOverview() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Servicios"
        title="Cuatro líneas de servicio, una sola operación"
        description="Combinamos fábrica de software, integración SAP, cloud y datos, e IA empresarial bajo el mismo equipo y la misma forma de entregar."
      />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.slug} as="li" interactive className="flex flex-col">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </span>
              <CardTitle className="mt-5">{service.title}</CardTitle>
              <CardDescription>{service.short}</CardDescription>
              <ul className="mt-4 space-y-1.5 text-sm text-ink-700">
                {service.bullets.slice(0, 4).map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                Ver detalle
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          );
        })}
      </ul>
    </Section>
  );
}
