import { DeepDiveBlock } from "@/components/sections/DeepDiveBlock";
import { Tabs } from "@/components/ui/Tabs";
import { ENTERPRISE_AI_BLOCKS } from "@/lib/data/services";

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
            IA empresarial en profundidad
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Qué hacemos con IA generativa, ML, asistentes y copilotos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300">
            La IA empresarial solo aporta valor cuando entiende el contexto:
            datos internos, permisos, reglas de negocio, reportes y procesos.
            Por eso construimos asistentes y copilotos conectados a sistemas
            reales, no demos aisladas.
          </p>
        </div>
        <Tabs
          ariaLabel="IA empresarial en profundidad"
          tabs={tabs}
          variant="pill-dark"
          className="mt-10"
        />
      </div>
    </section>
  );
}
