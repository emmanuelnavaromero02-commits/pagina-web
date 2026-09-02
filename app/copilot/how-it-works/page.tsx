import {
  BookOpenCheck,
  Eye,
  GitBranch,
  ListChecks,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/copilot/how-it-works",
  title: l(
    "Qué resuelven · Agentes de Decisión IA",
    "What they solve · AI Decision Agents",
  ),
  description: l(
    "Los Agentes de Decisión IA convierten información dispersa en evidencia verificable, escenarios comparables y acciones controladas.",
    "AI Decision Agents turn fragmented information into verifiable evidence, comparable scenarios, and controlled actions.",
  ),
});

const outcomes = [
  {
    title: l("Reúne el contexto", "Brings context together"),
    description: l(
      "Consolida la información autorizada que una persona tendría que buscar entre distintos sistemas, archivos y equipos.",
      "Consolidates authorized information that would otherwise be searched across systems, files, and teams.",
    ),
    icon: ScanSearch,
  },
  {
    title: l("Señala lo importante", "Surfaces what matters"),
    description: l(
      "Identifica diferencias, cambios y riesgos que requieren revisión sin obligar al equipo a inspeccionar cada fuente por separado.",
      "Highlights differences, changes, and risks that require review without forcing teams to inspect every source separately.",
    ),
    icon: Eye,
  },
  {
    title: l("Explica con evidencia", "Explains with evidence"),
    description: l(
      "Presenta respuestas, reportes y hallazgos con el contexto necesario para verificarlos.",
      "Presents answers, reports, and findings with the context needed to verify them.",
    ),
    icon: BookOpenCheck,
  },
  {
    title: l("Ordena las opciones", "Frames the options"),
    description: l(
      "Organiza alternativas y criterios para que la persona responsable pueda compararlos antes de decidir.",
      "Organizes alternatives and criteria so the accountable person can compare them before deciding.",
    ),
    icon: ListChecks,
  },
  {
    title: l("Prepara el siguiente paso", "Prepares the next step"),
    description: l(
      "Deja lista la acción, el reporte o el seguimiento correspondiente y solicita aprobación cuando pueda afectar la operación.",
      "Gets the action, report, or follow-up ready and requests approval whenever it may affect the operation.",
    ),
    icon: ShieldCheck,
  },
  {
    title: l("Conserva el resultado", "Preserves the outcome"),
    description: l(
      "Mantiene vinculados la consulta, la decisión, la autorización y el resultado para facilitar seguimiento y auditoría.",
      "Keeps the request, decision, authorization, and result connected for follow-up and audit.",
    ),
    icon: GitBranch,
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <ServiceHero
        eyebrow={l("Qué resuelve", "What it solves")}
        title={l(
          "Convierte información dispersa en una decisión útil",
          "Turns fragmented information into a useful decision",
        )}
        description={l(
          "Los agentes coordinan datos, conocimiento y análisis para revisar evidencia, entender qué requiere atención y decidir el siguiente paso con control.",
          "Agents coordinate data, knowledge, and analysis to review evidence, understand what needs attention, and decide the next step with control.",
        )}
      />

      <Section className="bg-white">
        <SectionHeader
          eyebrow={l("Resultados", "Outcomes")}
          title={l(
            "Seis mejoras visibles para la operación",
            "Six visible improvements for the operation",
          )}
          description={l(
            "El valor está en reducir trabajo manual, aclarar la decisión y mantener control sobre el resultado.",
            "The value lies in reducing manual work, clarifying the decision, and maintaining control over the outcome.",
          )}
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome) => {
            const Icon = outcome.icon;
            return (
              <Card key={outcome.title} as="li" interactive>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <CardTitle className="mt-5">{outcome.title}</CardTitle>
                <CardDescription>{outcome.description}</CardDescription>
              </Card>
            );
          })}
        </ul>
      </Section>

      <ContactCTA />
    </>
  );
}
