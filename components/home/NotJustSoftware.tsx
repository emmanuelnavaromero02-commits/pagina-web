import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/constants";
import { l } from "@/lib/i18n/config";

export function NotJustSoftware() {
  return (
    <Section className="bg-ink-950 text-white">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-900 via-ink-950 to-ink-950 p-10 sm:p-14 lg:p-16">
        <div
          aria-hidden
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-400/15 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-28 -left-10 h-80 w-80 rounded-full bg-brand-400/15 blur-3xl"
        />
        <div className="relative max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
            {l("Posicionamiento", "Positioning")}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
            <span className="block">
              {l("No solo software.", "Not just software.")}
            </span>
            <span className="mt-2 block">
              {l("Una ", "A ")}
              <span className="bg-gradient-to-r from-accent-400 to-brand-400 bg-clip-text text-transparent">
                {l(
                  "firma de transformación empresarial",
                  "business transformation firm",
                )}
              </span>
              .
            </span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-200 sm:text-lg">
            {l(
              "Hacemos más que desarrollar aplicaciones. Convertimos operaciones, datos, procesos, indicadores y necesidades reales del negocio en sistemas inteligentes que pueden medirse, operarse y evolucionar.",
              "We do more than build applications. We turn real operations, data, processes, indicators, and business needs into intelligent systems that can be measured, operated, and evolved.",
            )}
          </p>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-accent-400/90">
            {SITE.name}{" "}
            {l(
              "no es una plataforma más. Es una capacidad empresarial inteligente.",
              "is not another platform. It is an intelligent business capability.",
            )}
          </p>
        </div>
      </div>
    </Section>
  );
}
