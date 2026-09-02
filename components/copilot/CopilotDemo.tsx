import { FileCheck2, SearchCheck, ShieldCheck } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { l } from "@/lib/i18n/config";

const scenario = [
  {
    eyebrow: l("Situación", "Situation"),
    title: l(
      "La explicación está repartida",
      "The explanation is spread across multiple places",
    ),
    description: l(
      "Finanzas necesita explicar una diferencia de cierre, pero la evidencia está distribuida entre sistemas, archivos y conversaciones.",
      "Finance needs to explain a closing difference, but the evidence is spread across systems, files, and conversations.",
    ),
    icon: SearchCheck,
  },
  {
    eyebrow: l("Resultado", "Outcome"),
    title: l(
      "La evidencia queda lista para revisar",
      "The evidence is ready for review",
    ),
    description: l(
      "Los agentes reúnen la información relevante, señalan las diferencias que requieren atención y preparan un resumen verificable.",
      "The agents bring together the relevant information, flag the differences that need attention, and prepare a verifiable summary.",
    ),
    icon: FileCheck2,
  },
  {
    eyebrow: l("Control", "Control"),
    title: l(
      "La decisión sigue en manos de la persona responsable",
      "The decision remains with the accountable person",
    ),
    description: l(
      "La persona responsable revisa la evidencia y aprueba, rechaza o ajusta el siguiente paso. La decisión y su resultado permanecen registrados.",
      "The accountable person reviews the evidence and approves, rejects, or adjusts the next step. The decision and its outcome remain recorded.",
    ),
    icon: ShieldCheck,
  },
];

export function CopilotDemo() {
  return (
    <Section className="bg-ink-50">
      <SectionHeader
        eyebrow={l("Caso operativo", "Operational scenario")}
        title={l(
          "Del cierre fragmentado a una decisión trazable",
          "From a fragmented close to a traceable decision",
        )}
        description={l(
          "Un ejemplo centrado en el problema y el resultado, sin depender de cifras o respuestas simuladas.",
          "An example focused on the problem and the outcome, without relying on simulated figures or answers.",
        )}
      />

      <ol className="mt-12 grid gap-6 lg:grid-cols-3">
        {scenario.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} as="li" className="relative">
              <span className="absolute -top-3 right-5 inline-flex items-center rounded-full bg-brand-700 px-2.5 py-0.5 text-[10px] font-semibold tracking-widest text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                {item.eyebrow}
              </p>
              <CardTitle className="mt-2">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          );
        })}
      </ol>

      <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink-500">
        {l(
          "Escenario ilustrativo. El alcance y el impacto se validan con los datos y procesos del cliente durante el piloto.",
          "Illustrative scenario. Scope and impact are validated against the client’s data and processes during the pilot.",
        )}
      </p>
    </Section>
  );
}
