import { Award, GraduationCap } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { l } from "@/lib/i18n/config";

export function ExperienceEducation() {
  return (
    <Section className="bg-ink-50">
      <SectionHeader
        eyebrow={l("Asignación de especialistas", "Specialist assignment")}
        title={l(
          "Capacidad adecuada para cada proyecto",
          "The right capability for each project",
        )}
        description={l(
          "No presentamos estudios ni certificaciones personales como credenciales corporativas. La experiencia y las credenciales relevantes se validan para el equipo propuesto antes de iniciar.",
          "We do not present personal education or certifications as corporate credentials. Relevant experience and credentials are validated for the proposed team before work begins.",
        )}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-ink-100 bg-white p-7 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <GraduationCap className="h-5 w-5" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              {l("Competencia técnica", "Technical competence")}
            </p>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink-600">
            {l(
              "La propuesta identifica las funciones, capacidades y experiencia requeridas para cumplir el alcance acordado.",
              "The proposal identifies the roles, capabilities, and experience required to deliver the agreed scope.",
            )}
          </p>
        </article>

        <article className="rounded-2xl border border-ink-100 bg-white p-7 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <Award className="h-5 w-5" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              {l("Validación por proyecto", "Project-level validation")}
            </p>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink-600">
            {l(
              "Cuando una certificación sea necesaria, se documentará en la propuesta y se verificará antes de asignar al especialista.",
              "When a certification is required, it will be documented in the proposal and verified before assigning the specialist.",
            )}
          </p>
        </article>
      </div>
    </Section>
  );
}
