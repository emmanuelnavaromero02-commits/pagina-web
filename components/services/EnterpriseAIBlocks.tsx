import { DeepDiveBlock } from "@/components/sections/DeepDiveBlock";
import { Tabs } from "@/components/ui/Tabs";
import { ENTERPRISE_AI_BLOCKS } from "@/lib/data/services";
import { l } from "@/lib/i18n/config";

export function EnterpriseAIBlocks() {
  const tabs = ENTERPRISE_AI_BLOCKS.map((block) => ({
    id: block.id,
    label: block.label,
    content: <DeepDiveBlock block={block} variant="dark" />,
  }));

  return (
    <section className="bg-ink-950 py-20 text-white sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
            {l("IA operativa en detalle", "Operational AI in depth")}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {l("Qué hacemos con IA generativa, ML, asistentes y copilots", "What we do with generative AI, ML, assistants, and copilots")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300">
            {l("La IA operativa requiere contexto: datos privados, permisos, reglas de negocio, informes y procesos. Por eso diseñamos asistentes y copilots conectados a sistemas reales.", "Operational AI requires context: private data, permissions, business rules, reports, and processes. That is why we design assistants and copilots connected to real systems.")}
          </p>
        </div>
        <Tabs
          ariaLabel={l("IA operativa en detalle", "Operational AI in depth")}
          tabs={tabs}
          variant="pill-dark"
          className="mt-10"
        />
      </div>
    </section>
  );
}
