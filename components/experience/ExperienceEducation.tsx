import { Award, BookOpen, GraduationCap } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  EXPERIENCE_CERTIFICATIONS,
  EXPERIENCE_EDUCATION,
} from "@/lib/data/experience";

export function ExperienceEducation() {
  return (
    <Section className="bg-ink-50">
      <SectionHeader
        eyebrow="Base técnica y formación especializada"
        title="Formación y certificaciones que respaldan al equipo"
        description="No es CV: es la base técnica sobre la que armamos diagnósticos, arquitecturas y propuestas comerciales."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.6fr]">
        <article className="rounded-2xl border border-ink-100 bg-white p-7 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <GraduationCap className="h-5 w-5" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Formación
            </p>
          </div>
          <ul className="mt-5 space-y-4">
            {EXPERIENCE_EDUCATION.map((edu) => (
              <li key={edu.title}>
                <p className="font-display text-base font-semibold text-ink-950">
                  {edu.title}
                </p>
                {edu.subtitle ? (
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">
                    {edu.subtitle}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-ink-100 bg-white p-7 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <Award className="h-5 w-5" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Certificaciones SAP
            </p>
          </div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {EXPERIENCE_CERTIFICATIONS.map((c) => (
              <li
                key={c.title}
                className="flex items-start gap-3 rounded-xl border border-ink-100 bg-ink-50/60 p-4 text-sm leading-relaxed text-ink-800"
              >
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                <div>
                  <p className="font-medium text-ink-900">{c.title}</p>
                  <p className="text-xs text-ink-500">{c.track}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
