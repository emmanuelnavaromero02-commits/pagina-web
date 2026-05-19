import { ArrowRight, Sparkles } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { COPILOT_CAPABILITIES } from "@/lib/site-data";

export function CopilotSpotlight() {
  return (
    <Section className="bg-ink-950 text-white">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-400">
            <Sparkles className="h-3.5 w-3.5" />
            Producto estrella
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Copiloto Empresarial
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg">
            La nueva capa inteligente para consultar, validar, reportar y
            automatizar procesos sobre tus sistemas actuales.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-300/90">
            No es un chatbot genérico. Es un copiloto operativo conectado a
            datos, reglas, reportes, APIs y sistemas empresariales para ayudar
            a equipos internos a trabajar con más velocidad, control y
            trazabilidad.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/copilot" size="lg" variant="primary">
              Ver Copiloto Empresarial
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <LinkButton
              href="/copilot/how-it-works"
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              Ver cómo funciona
            </LinkButton>
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.18em] text-ink-500">
            Conectado a · SAP · BD · APIs · BI · Sistemas legacy
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
