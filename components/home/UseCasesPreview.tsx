import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { HOME_USE_CASES } from "@/lib/site-data";

export function UseCasesPreview() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Casos de uso"
        title="Áreas donde ya está aportando valor"
        description="Procesos donde el software a medida, las integraciones SAP y la IA empresarial reducen trabajo manual y aceleran decisiones."
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {HOME_USE_CASES.map((uc) => {
          const Icon = uc.icon;
          return (
            <li key={uc.title}>
              <Link
                href={uc.href}
                className="group flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-elevate"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="font-display text-base font-semibold text-ink-900 group-hover:text-brand-800">
                    {uc.title}
                  </p>
                  <p className="text-sm text-ink-500">
                    Casos operativos asistidos
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-700" />
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-10">
        <Link
          href="/industries"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          Ver todos los casos de uso
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
