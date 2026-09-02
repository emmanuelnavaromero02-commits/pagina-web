import { ContactCTA } from "@/components/home/ContactCTA";
import { CopilotSecurity } from "@/components/copilot/CopilotSecurity";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/copilot/security",
  title: l(
    "Seguridad y permisos · Agentes de Decisión IA",
    "Security and permissions · AI Decision Agents",
  ),
  description: l(
    "Principios de seguridad para agentes de IA: aislamiento, acceso controlado, evidencia, validaciones previas y supervisión humana.",
    "Security principles for AI agents: isolation, controlled access, evidence, pre-execution validation, and human oversight.",
  ),
});

const principles = [
  {
    title: l("Mínimo privilegio", "Least privilege"),
    description: l(
      "La solución se diseña para respetar los permisos de los sistemas de origen y limitar el acceso según el rol.",
      "The solution is designed to respect source-system permissions and limit access by role.",
    ),
  },
  {
    title: l("Trazabilidad desde el diseño", "Traceability by design"),
    description: l(
      "El alcance define qué consultas, fuentes, validaciones y acciones deben registrarse para auditoría.",
      "The project scope defines which queries, sources, validations, and actions must be logged for audit.",
    ),
  },
  {
    title: l("Supervisión humana", "Human oversight"),
    description: l(
      "Las acciones críticas pueden exigir confirmación explícita antes de aplicarse en sistemas reales.",
      "Critical actions can require explicit confirmation before they are applied to production systems.",
    ),
  },
  {
    title: l("Datos bajo control del cliente", "Client-controlled data"),
    description: l(
      "El alcance define qué información puede utilizarse, quién puede consultarla y qué acciones requieren aprobación.",
      "The scope defines which information may be used, who may access it, and which actions require approval.",
    ),
  },
];

export default function CopilotSecurityPage() {
  return (
    <>
      <ServiceHero
        eyebrow={l("Seguridad", "Security")}
        title={l(
          "Seguridad y permisos para el entorno empresarial",
          "Security and permissions for enterprise environments",
        )}
        description={l(
          "Una solución operativa debe integrarse con los controles existentes. Estos principios orientan el diseño de cada implementación.",
          "An operational solution must integrate with existing controls. These principles guide each implementation.",
        )}
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow={l("Principios", "Principles")}
          title={l(
            "Cuatro principios que orientan el diseño",
            "Four principles that guide the design",
          )}
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {principles.map((p) => (
            <Card key={p.title} as="li">
              <CardTitle>{p.title}</CardTitle>
              <CardDescription>{p.description}</CardDescription>
            </Card>
          ))}
        </ul>
      </Section>

      <CopilotSecurity />
      <ContactCTA />
    </>
  );
}
