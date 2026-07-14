import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SERVICES } from "@/lib/site-data";
import { l } from "@/lib/i18n/config";

export function ServicesOverview() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow={l("Servicios", "Services")}
        title={l(
          "Cuatro líneas de servicio, un modelo de entrega",
          "Four service lines, one delivery model",
        )}
        description={l(
          "Fábrica de software, integración empresarial, nube y datos gobernados e IA operativa bajo un mismo modelo de trabajo.",
          "Software factory, enterprise integration, cloud and governed data, and operational AI — under one delivery model.",
        )}
      />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <Card
              key={service.slug}
              as="li"
              interactive
              className="flex flex-col"
            >
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
                {l("Explorar servicio", "Explore service")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          );
        })}
      </ul>
    </Section>
  );
}
