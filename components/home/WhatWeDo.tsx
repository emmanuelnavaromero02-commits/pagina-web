import { Section, SectionHeader } from "@/components/ui/Section";
import { WHAT_WE_DO } from "@/lib/site-data";

export function WhatWeDo() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Qué hacemos"
        title="Construimos software, conectamos sistemas y automatizamos operación."
        description="Tres frentes que combinamos en el mismo equipo para que el resultado se opere, no solo se entregue."
      />

      <ul className="mt-12 grid gap-6 lg:grid-cols-3">
        {WHAT_WE_DO.map((block) => {
          const Icon = block.icon;
          return (
            <li
              key={block.verb}
              className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 shadow-soft transition-all hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-elevate"
            >
              <div
                aria-hidden
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-50 opacity-0 transition-opacity group-hover:opacity-100"
              />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                    {block.verb}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink-950">
                  {block.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {block.description}
                </p>
                <ul className="mt-5 space-y-1.5 border-t border-ink-100 pt-4">
                  {block.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-ink-700"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
