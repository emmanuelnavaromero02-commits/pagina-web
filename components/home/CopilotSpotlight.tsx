import { ArrowRight, Sparkles } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { COPILOT_CAPABILITIES } from "@/lib/site-data";
import { l } from "@/lib/i18n/config";

export function CopilotSpotlight() {
  return (
    <Section className="bg-ink-950 text-white">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-400">
            <Sparkles className="h-3.5 w-3.5" />
            {l("Producto principal", "Flagship product")}
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Enterprise Copilot
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg">
            {l(
              "Convierte información dispersa en respuestas verificables, señales relevantes y opciones claras para decidir.",
              "Turns fragmented information into verifiable answers, relevant signals, and clear options for decision-making.",
            )}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-300/90">
            {l(
              "Ayuda a los equipos a reunir evidencia, entender qué requiere atención y preparar el siguiente paso bajo aprobación humana y trazabilidad.",
              "Helps teams bring evidence together, understand what needs attention, and prepare the next step under human approval and traceability.",
            )}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/copilot" size="lg" variant="primary">
              {l("Explorar Enterprise Copilot", "Explore Enterprise Copilot")}
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <LinkButton
              href="/copilot/how-it-works"
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              {l("Ver qué resuelve", "See what it solves")}
            </LinkButton>
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.18em] text-ink-500">
            {l(
              "Evidencia · Decisiones · Aprobaciones · Seguimiento",
              "Evidence · Decisions · Approvals · Follow-up",
            )}
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {COPILOT_CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <Card
                key={cap.title}
                as="li"
                className="border-white/10 bg-white/5 text-white shadow-none"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-accent-400">
                  <Icon className="h-5 w-5" />
                </span>
                <CardTitle className="mt-4 text-white">{cap.title}</CardTitle>
                <CardDescription className="text-ink-300">
                  {cap.description}
                </CardDescription>
              </Card>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
