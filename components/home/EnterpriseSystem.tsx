import { ArrowRight, Blocks, BrainCircuit, Braces, Database, Network, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { l } from "@/lib/i18n/config";

const SYSTEM_LAYERS = [
  {
    icon: Braces,
    index: "01",
    title: l("Construimos", "We build"),
    description: l("Software, ABAP y Fiori alrededor del proceso real.", "Software, ABAP, and Fiori around the real process."),
    tone: "blue",
  },
  {
    icon: Network,
    index: "02",
    title: l("Conectamos", "We connect"),
    description: l("SAP, nube, APIs y sistemas de terceros sin silos.", "SAP, cloud, APIs, and third-party systems without silos."),
    tone: "blue",
  },
  {
    icon: Database,
    index: "03",
    title: l("Gobernamos", "We govern"),
    description: l("Datos consistentes, trazables y listos para operar.", "Consistent, traceable data that is ready to operate."),
    tone: "mint",
  },
  {
    icon: BrainCircuit,
    index: "04",
    title: l("Amplificamos", "We amplify"),
    description: l("Agentes que estudian, explican y preparan decisiones.", "Agents that study, explain, and prepare decisions."),
    tone: "mint",
  },
] as const;

export function EnterpriseSystem() {
  return (
    <Section id="sistema-empresarial" className="relative overflow-hidden bg-white">
      <div aria-hidden className="absolute -right-48 top-0 h-96 w-96 rounded-full bg-brand-100/70 blur-3xl" />
      <div className="relative grid gap-12 lg:grid-cols-[0.74fr_1.26fr] lg:gap-16 xl:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">{l("7 / Enterprise System", "7 / Enterprise System")}</p>
          <h2 className="mt-5 max-w-xl text-balance font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-ink-950 sm:text-5xl">
            {l("No vendemos piezas. Diseñamos un sistema que avanza contigo.", "We do not sell pieces. We design a system that moves with you.")}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
            {l(
              "Cada iniciativa entra por un problema concreto y sale como una capacidad operativa: conectada, medible y preparada para evolucionar.",
              "Every initiative starts with a concrete problem and becomes an operational capability: connected, measurable, and ready to evolve.",
            )}
          </p>

          <Link href="/services" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900">
            {l("Ver la arquitectura de servicios", "See the service architecture")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <div className="mt-10 flex items-center gap-4 rounded-2xl border border-ink-100 bg-ink-50 p-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-700 shadow-soft">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-xs leading-relaxed text-ink-600">
              <strong className="block text-sm text-ink-950">{l("Tu operación conserva el control.", "Your operation stays in control.")}</strong>
              {l("La tecnología se adapta a reglas, permisos y responsables existentes.", "Technology adapts to existing rules, permissions, and owners.")}
            </p>
          </div>
        </div>

        <div className="relative">
          <div aria-hidden className="absolute bottom-10 left-1/2 top-10 w-px -translate-x-1/2 bg-gradient-to-b from-brand-200 via-ink-200 to-accent-300 sm:block" />
          <ol className="relative grid gap-4 sm:grid-cols-2">
            {SYSTEM_LAYERS.map((layer, index) => {
              const Icon = layer.icon;
              const mint = layer.tone === "mint";
              return (
                <li key={layer.title} className={`group min-h-64 rounded-[2rem] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-float sm:p-7 ${index === 0 || index === 3 ? "border-ink-100 bg-ink-950 text-white" : "border-ink-100 bg-ink-50 text-ink-950"}`}>
                  <div className="flex items-center justify-between gap-4">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${index === 0 || index === 3 ? (mint ? "bg-accent-400/10 text-accent-400" : "bg-brand-400/10 text-brand-300") : (mint ? "bg-accent-400/10 text-accent-600" : "bg-brand-100 text-brand-700")}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className={`font-display text-xs font-semibold tracking-[0.16em] ${index === 0 || index === 3 ? "text-ink-500" : "text-ink-400"}`}>{layer.index}</span>
                  </div>
                  <h3 className="mt-10 font-display text-2xl font-semibold tracking-tight">{layer.title}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${index === 0 || index === 3 ? "text-ink-300" : "text-ink-600"}`}>{layer.description}</p>
                </li>
              );
            })}
          </ol>

          <div className="relative z-10 mx-auto -mt-3 flex w-fit items-center gap-3 rounded-full border border-ink-100 bg-white px-4 py-2.5 shadow-float">
            <Blocks className="h-4 w-4 text-brand-700" aria-hidden="true" />
            <span className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-ink-800">
              {l("Una sola capacidad empresarial", "One enterprise capability")}
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
