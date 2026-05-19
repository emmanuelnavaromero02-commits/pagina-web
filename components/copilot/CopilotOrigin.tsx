import { Section, SectionHeader } from "@/components/ui/Section";
import { COPILOT_ORIGIN_BLOCKS } from "@/lib/data/copilot";

export function CopilotOrigin() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Nace de experiencia en operación real"
        title="No es un chatbot que aprendió de internet"
        description="El Copiloto Empresarial nace desde experiencia en SAP, fábricas de software, integración de sistemas, reportes empresariales, bases de datos, workflows, soporte y procesos operativos. Esa experiencia se ve en cómo está diseñado."
      />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {COPILOT_ORIGIN_BLOCKS.map((b) => {
          const Icon = b.icon;
          return (
            <li
              key={b.title}
              className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-elevate"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-4 font-display text-base font-semibold text-ink-900">
                {b.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                {b.description}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
