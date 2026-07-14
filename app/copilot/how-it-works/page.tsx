import { Bot, Layers, Lock, Network, ShieldCheck, Workflow } from "lucide-react";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CopilotArchitecture } from "@/components/copilot/CopilotArchitecture";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/copilot/how-it-works",
  title: l(
    "Cómo funciona · Enterprise Copilot",
    "How it works · Enterprise Copilot",
  ),
  description: l(
    "Arquitectura de Enterprise Copilot: capas de IA, conectores, permisos, validaciones y trazabilidad sobre SAP, bases de datos, APIs e informes.",
    "Enterprise Copilot architecture: AI layers, connectors, permissions, validations, and traceability across SAP, databases, APIs, and reports.",
  ),
});

const layers = [
  {
    title: l("Interfaz conversacional", "Conversational interface"),
    description: l(
      "Un único punto de entrada para consultar, validar, informar o solicitar acciones mediante una interfaz directa.",
      "A single entry point to ask, validate, report, or request actions through a direct interface.",
    ),
    icon: Bot,
  },
  {
    title: l("Orquestador de IA", "AI orchestrator"),
    description: l(
      "Determina qué fuente consultar, qué regla aplicar y cuándo escalar a una persona antes de ejecutar.",
      "Determines which source to query, which rule to apply, and when to escalate to a person before execution.",
    ),
    icon: Workflow,
  },
  {
    title: l("Capa de conectores", "Connector layer"),
    description: l(
      "Conectores para SAP, bases de datos, APIs internas, nube e informes corporativos.",
      "Connectors for SAP, databases, internal APIs, cloud, and corporate reports.",
    ),
    icon: Network,
  },
  {
    title: l("Permisos y políticas", "Permissions and policies"),
    description: l(
      "Respeta los permisos del sistema de origen y permite aplicar políticas adicionales por rol y área.",
      "Respects source-system permissions and supports additional policies by role and business area.",
    ),
    icon: Lock,
  },
  {
    title: l("Validaciones de negocio", "Business validations"),
    description: l(
      "Reglas que detectan inconsistencias y validan antes de aplicar una acción crítica.",
      "Rules that detect inconsistencies and validate before a critical action is applied.",
    ),
    icon: ShieldCheck,
  },
  {
    title: l("Trazabilidad", "Traceability"),
    description: l(
      "Registro auditable de cada consulta, fuente consultada, validación y resultado.",
      "Auditable record of each query, source consulted, validation, and result.",
    ),
    icon: Layers,
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <ServiceHero
        eyebrow={l("Cómo funciona", "How it works")}
        title={l(
          "Una arquitectura diseñada para entornos empresariales",
          "An architecture designed for enterprise environments",
        )}
        description={l(
          "Enterprise Copilot combina orquestación, conectores, permisos, validaciones y trazabilidad en una arquitectura configurable.",
          "Enterprise Copilot combines orchestration, connectors, permissions, validations, and traceability in a configurable architecture.",
        )}
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow={l("Capas", "Layers")}
          title={l(
            "Seis capas que trabajan en conjunto",
            "Six layers working together",
          )}
          description={l(
            "Cada capa tiene una responsabilidad definida y puede evolucionar de forma independiente.",
            "Each layer has a defined responsibility and can evolve independently.",
          )}
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
