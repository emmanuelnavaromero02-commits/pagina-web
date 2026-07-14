import { Section, SectionHeader } from "@/components/ui/Section";
import { QUICK_WINS } from "@/lib/data/home";
import { l } from "@/lib/i18n/config";

export function QuickWins() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow={l(
          "7 soluciones empresariales de alto impacto",
          "7 High-Impact Business Solutions",
        )}
        title={l(
          "Impacto empresarial en semanas, no en meses.",
          "Business impact in weeks, not months.",
        )}
        description={l(
          "Un problema · una solución · un resultado medible. Siete áreas de intervención para generar valor operativo.",
          "One problem · one solution · one measurable result. Seven focused intervention areas for delivering operational value.",
        )}
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {QUICK_WINS.map((w) => {
          const Icon = w.icon;
          return (
            <li
              key={w.title}
              className="group rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-elevate"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-100">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold text-ink-950">
                {w.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                {w.description}
              </p>
            </li>
          );
        })}
      </ul>

      <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink-500">
        {l(
          "Un piloto de alcance acotado puede plantearse en un plazo estimado de 2 a 4 semanas, según los sistemas, el acceso a los datos y la complejidad. Es una referencia para el diagnóstico, no una garantía.",
          "A focused pilot can typically be scoped for an estimated 2–4 weeks, depending on systems, data access, and complexity. This is a planning reference for the diagnosis, not a guarantee.",
        )}
      </p>
    </Section>
  );
}
