import type { Metadata } from "next";
import { Bot, Layers, Lock, Network, ShieldCheck, Workflow } from "lucide-react";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CopilotArchitecture } from "@/components/copilot/CopilotArchitecture";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";

export const metadata: Metadata = {
  title: "Cómo funciona · Copiloto Empresarial",
  description:
    "Arquitectura del Copiloto Empresarial: cómo se conecta a SAP, bases de datos, APIs y reportes con permisos y trazabilidad.",
};

const layers = [
  {
    title: "Interfaz conversacional",
    description:
      "Punto único donde el usuario consulta, valida, reporta o pide acciones. UI sobria, sin distracciones.",
    icon: Bot,
  },
  {
    title: "Orquestador de IA",
    description:
      "Decide qué fuente consultar, qué regla aplicar y cuándo escalar al humano antes de ejecutar.",
    icon: Workflow,
  },
  {
    title: "Capa de conectores",
    description:
      "Conectores a SAP, bases de datos, APIs internas, cloud y reportes corporativos.",
    icon: Network,
  },
  {
    title: "Permisos y políticas",
    description:
      "Respeta los permisos del sistema fuente y aplica políticas adicionales por rol y por área.",
    icon: Lock,
  },
  {
    title: "Validaciones de negocio",
    description:
      "Reglas que detectan inconsistencias y validan antes de aplicar cualquier acción crítica.",
    icon: ShieldCheck,
  },
  {
    title: "Trazabilidad",
    description:
      "Registro auditable de cada consulta, fuente consultada, validación y resultado.",
    icon: Layers,
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Cómo funciona"
        title="Una arquitectura pensada para entornos corporativos"
        description="El Copiloto Empresarial no es un modelo suelto: es una arquitectura completa con orquestación, conectores, permisos, validaciones y trazabilidad."
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Capas"
          title="Seis capas que trabajan juntas"
          description="Cada capa tiene una responsabilidad clara y puede evolucionar de forma independiente."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {layers.map((l) => {
            const Icon = l.icon;
            return (
              <Card key={l.title} as="li" interactive>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <CardTitle className="mt-5">{l.title}</CardTitle>
                <CardDescription>{l.description}</CardDescription>
              </Card>
            );
          })}
        </ul>
      </Section>

      <CopilotArchitecture />
      <ContactCTA />
    </>
  );
}
