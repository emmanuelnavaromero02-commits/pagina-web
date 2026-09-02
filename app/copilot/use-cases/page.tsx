import { ContactCTA } from "@/components/home/ContactCTA";
import { CopilotUseCases } from "@/components/copilot/CopilotUseCases";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/copilot/use-cases",
  title: l(
    "Casos de uso · Agentes de Decisión IA",
    "Use cases · AI Decision Agents",
  ),
  description: l(
    "Casos de uso para agentes especializados en recursos humanos, finanzas, operaciones, reporte ejecutivo, auditoría y soporte interno.",
    "Use cases for specialized agents across HR, finance, operations, executive reporting, audit, and internal support.",
  ),
});

const scenarios = [
  {
    title: l("Cierre financiero mensual", "Monthly financial closing"),
    description: l(
      "El equipo financiero consulta el estado del cierre, revisa partidas sin conciliar y valida ajustes antes de registrarlos en SAP FI.",
      "The finance team checks closing status, reviews unreconciled entries, and validates adjustments before they reach SAP FI.",
    ),
  },
  {
    title: l("Consultas de recursos humanos", "HR queries"),
    description: l(
      "Plantilla por unidad, saldos de vacaciones, estructura organizativa y validaciones de datos maestros con permisos por rol.",
      "Headcount by business unit, vacation balances, organizational structure, and master-data validations with role-based permissions.",
    ),
  },
  {
    title: l("Reporte ejecutivo bajo demanda", "On-demand executive reporting"),
    description: l(
      "La dirección formula una consulta y recibe una respuesta vinculada a los datos de origen disponibles.",
      "Leadership asks a question and receives an answer linked to the available source data.",
    ),
  },
  {
    title: l("Soporte funcional asistido", "Assisted functional support"),
    description: l(
      "Primera respuesta para soporte técnico y funcional sobre plataformas internas y SAP.",
      "First-line response for technical and functional support across internal platforms and SAP.",
    ),
  },
  {
    title: l("Auditoría operativa", "Operational audit"),
    description: l(
      "Registro de consultas, acciones y reglas aplicadas, configurable para los requisitos de cumplimiento del proyecto.",
      "A record of queries, actions, and applied rules, configurable for the project's compliance requirements.",
    ),
  },
  {
    title: l("Automatización asistida", "Assisted automation"),
    description: l(
      "Conciliaciones recurrentes que un agente prepara y una persona revisa antes de su ejecución.",
      "Recurring reconciliations prepared by an agent and reviewed by a person before execution.",
    ),
  },
];

export default function CopilotUseCasesPage() {
  return (
    <>
      <ServiceHero
        eyebrow={l("Casos de uso", "Use cases")}
        title={l(
          "Dónde pueden aportar valor los Agentes de Decisión IA",
          "Where AI Decision Agents can add value",
        )}
        description={l(
          "Escenarios posibles en distintas áreas que combinan consulta, validación, reporte y, cuando corresponde, acciones autorizadas.",
          "Potential scenarios across business areas that combine queries, validation, reporting, and, where applicable, authorized actions.",
        )}
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow={l("Escenarios", "Scenarios")}
          title={l("Seis escenarios concretos", "Six concrete scenarios")}
          description={l(
            "Cada escenario puede delimitarse como piloto según los sistemas, accesos y reglas disponibles.",
            "Each scenario can be scoped as a pilot according to the available systems, access, and rules.",
          )}
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
