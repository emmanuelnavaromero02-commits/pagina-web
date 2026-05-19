import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CopilotSecurity } from "@/components/copilot/CopilotSecurity";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";

export const metadata: Metadata = {
  title: "Seguridad y permisos · Copiloto Empresarial",
  description:
    "Modelo de seguridad del Copiloto Empresarial: permisos por rol, trazabilidad, validaciones antes de ejecutar y despliegue controlado.",
  alternates: { canonical: "/copilot/security" },
};

const principles = [
  {
    title: "Mínimo privilegio",
    description:
      "El copiloto nunca tiene más permisos que el usuario que lo invoca. Hereda y respeta las políticas existentes.",
  },
  {
    title: "Trazabilidad por defecto",
    description:
      "Cada consulta, fuente, validación y acción queda registrada para auditoría sin configuración adicional.",
  },
  {
    title: "Human-in-the-loop",
    description:
      "Las acciones críticas se confirman explícitamente antes de aplicarse contra sistemas reales.",
  },
  {
    title: "Datos donde el cliente decide",
    description:
      "On-premise, cloud privado o VPC dedicada. El modelo de despliegue se adapta a la política del cliente.",
  },
];

export default function CopilotSecurityPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Seguridad"
        title="Seguridad y permisos pensados para corporativo"
        description="Un copiloto operativo solo es útil si no rompe la seguridad existente. Estos son los principios que aplicamos por defecto."
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Principios"
          title="Cuatro principios que guían el diseño"
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
