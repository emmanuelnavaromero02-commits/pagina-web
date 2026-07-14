import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SERVICES } from "@/lib/site-data";
import { l } from "@/lib/i18n/config";

export function ServiceGrid() {
  return (
    <Section className="bg-ink-50">
      <SectionHeader
        eyebrow={l("Capacidades principales", "Core capabilities")}
        title={l("Cuatro líneas de servicio, un solo equipo", "Four service lines, one team")}
        description={l("Cada servicio puede contratarse de forma independiente o combinarse en una solución integral.", "Each service can be engaged independently or combined into an integrated solution.")}
      />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <Card
              key={service.slug}
              as="li"
              interactive
              className="flex flex-col gap-4 p-7"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </div>
              </div>
              <ul className="grid gap-1.5 sm:grid-cols-2">
                {service.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-ink-700"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                {l("Ver detalle del servicio", "See service detail")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          );
        })}
      </ul>
    </Section>
  );
}
