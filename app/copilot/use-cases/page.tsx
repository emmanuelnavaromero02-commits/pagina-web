import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CopilotUseCases } from "@/components/copilot/CopilotUseCases";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Casos de uso · Copiloto Empresarial",
  description:
    "Casos de uso reales del Copiloto Empresarial en RRHH, finanzas, operaciones, reporting, auditoría y soporte interno.",
};

const scenarios = [
  {
    title: "Cierre financiero mensual",
    description:
      "El equipo de finanzas pregunta el estado del cierre, ve partidas sin conciliar y valida ajustes antes de aplicarlos contra SAP FI.",
  },
  {
    title: "Consultas de RRHH",
    description:
      "Headcount por unidad, vacaciones disponibles, organigrama y validación de datos maestros con permisos por rol.",
  },
  {
    title: "Reporte ejecutivo en vivo",
    description:
      "La dirección pregunta y obtiene una respuesta confiable con trazabilidad al dato original.",
  },
  {
    title: "Soporte funcional asistido",
    description:
      "Primera línea para help-desk técnico y funcional sobre plataformas internas y SAP.",
  },
  {
    title: "Auditoría operativa",
    description:
      "Trazabilidad completa de consultas, acciones y reglas aplicadas, exportable para cumplimiento.",
  },
  {
    title: "Automatización asistida",
    description:
      "Conciliaciones recurrentes que el copiloto prepara y el humano valida antes de ejecutar.",
  },
];

export default function CopilotUseCasesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Casos de uso"
        title="Donde el Copiloto Empresarial aporta valor real"
        description="Escenarios reales en áreas funcionales que combinan consulta, validación, reporte y, cuando aplica, acción autorizada."
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Escenarios"
          title="Seis escenarios concretos"
          description="Cada escenario se puede arrancar como piloto guiado en pocas semanas."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((s) => (
            <Card key={s.title} as="li" interactive>
              <CardTitle>{s.title}</CardTitle>
              <CardDescription>{s.description}</CardDescription>
            </Card>
          ))}
        </ul>
      </Section>

      <CopilotUseCases />
      <ContactCTA />
    </>
  );
}
