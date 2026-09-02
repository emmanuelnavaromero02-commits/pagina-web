import Link from "next/link";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Boxes,
  Check,
  ChevronRight,
  CircleDollarSign,
  CloudCog,
  Database,
  FileCheck2,
  Gauge,
  Layers3,
  Network,
  PackageCheck,
  RefreshCcw,
  Route,
  ServerCog,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ServicePageStructuredData } from "@/components/seo/ServicePageStructuredData";
import type { SpecializedPage } from "@/components/services/SpecializedServicePage";
import { LinkButton } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { l } from "@/lib/i18n/config";

type IconItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  detail?: string;
};

const serviceModules: IconItem[] = [
  {
    icon: Route,
    title: l("Assessment y caso de negocio", "Assessment and business case"),
    description: l(
      "Inventariamos cargas, dependencias, versiones, consumo, criticidad, ventanas y costos para construir una ruta por oleadas.",
      "We inventory workloads, dependencies, versions, consumption, criticality, windows, and cost to build a wave-based route.",
    ),
    detail: l("Inventario · dependencias · TCO · oleadas", "Inventory · dependencies · TCO · waves"),
  },
  {
    icon: Network,
    title: l("Landing zone y conectividad", "Landing zone and connectivity"),
    description: l(
      "Diseñamos cuentas, red, identidad, cifrado, registros, políticas y separación de ambientes antes de mover la primera carga.",
      "We design accounts, networking, identity, encryption, logging, policies, and environment separation before moving the first workload.",
    ),
    detail: l("Identidad · red · gobierno · seguridad", "Identity · network · governance · security"),
  },
  {
    icon: RefreshCcw,
    title: l("Fábrica de migración", "Migration factory"),
    description: l(
      "Ejecutamos oleadas repetibles con pruebas, criterios de entrada y salida, cutover, reversa y estabilización documentada.",
      "We execute repeatable waves with testing, entry and exit criteria, cutover, rollback, and documented stabilization.",
    ),
    detail: l("Piloto · oleadas · cutover · hypercare", "Pilot · waves · cutover · hypercare"),
  },
  {
    icon: ServerCog,
    title: "SAP on AWS",
    description: l(
      "Preparamos y migramos landscapes SAP considerando HANA, Basis, interfaces, alta disponibilidad, respaldos y continuidad del negocio.",
      "We prepare and migrate SAP landscapes considering HANA, Basis, interfaces, high availability, backups, and business continuity.",
    ),
    detail: l("SAP · HANA · Basis · continuidad", "SAP · HANA · Basis · continuity"),
  },
  {
    icon: Boxes,
    title: l("Modernización de aplicaciones", "Application modernization"),
    description: l(
      "Replanteamos componentes donde sí existe valor: contenedores, servicios administrados, serverless, APIs y automatización de despliegues.",
      "We reshape components where value exists: containers, managed services, serverless, APIs, and deployment automation.",
    ),
    detail: l("Contenedores · serverless · APIs · CI/CD", "Containers · serverless · APIs · CI/CD"),
  },
  {
    icon: Database,
    title: l("Datos y analítica", "Data and analytics"),
    description: l(
      "Movemos y modernizamos bases de datos, integración, almacenamiento y analítica conservando calidad, linaje, acceso y trazabilidad.",
      "We move and modernize databases, integration, storage, and analytics while preserving quality, lineage, access, and traceability.",
    ),
    detail: l("Bases de datos · lake · integración · BI", "Databases · lake · integration · BI"),
  },
  {
    icon: ShieldCheck,
    title: l("Resiliencia y recuperación", "Resilience and recovery"),
    description: l(
      "Diseñamos respaldos, recuperación, conmutación y pruebas de continuidad con objetivos definidos por la criticidad de cada proceso.",
      "We design backup, recovery, failover, and continuity testing with objectives defined by each process's criticality.",
    ),
    detail: "RTO · RPO · backup · disaster recovery",
  },
  {
    icon: Gauge,
    title: l("Operación administrada y FinOps", "Managed operations and FinOps"),
    description: l(
      "Operamos capacidad, parches, observabilidad, incidentes, seguridad y costo con responsables, tableros y ciclos de optimización.",
      "We operate capacity, patching, observability, incidents, security, and cost with owners, dashboards, and optimization cycles.",
    ),
    detail: l("Monitoreo · SLA · costo · optimización", "Monitoring · SLA · cost · optimization"),
  },
];

const migrationPaths = [
  {
    key: "01",
    title: "Rehost",
    description: l(
      "Movemos la carga con cambios mínimos cuando la prioridad es salir de infraestructura actual con riesgo controlado.",
      "We move the workload with minimal change when the priority is leaving current infrastructure with controlled risk.",
    ),
  },
  {
    key: "02",
    title: "Replatform",
    description: l(
      "Ajustamos componentes concretos para aprovechar servicios administrados sin rediseñar toda la aplicación.",
      "We adjust specific components to use managed services without redesigning the entire application.",
    ),
  },
  {
    key: "03",
    title: "Refactor",
    description: l(
      "Rediseñamos donde escalabilidad, resiliencia o velocidad de cambio justifican una arquitectura nueva.",
      "We redesign where scalability, resilience, or speed of change justifies a new architecture.",
    ),
  },
  {
    key: "04",
    title: l("Retener o retirar", "Retain or retire"),
    description: l(
      "Conservamos temporalmente lo que aún no debe moverse y retiramos activos sin valor para no migrar costo innecesario.",
      "We temporarily retain what should not move yet and retire low-value assets so unnecessary cost is not migrated.",
    ),
  },
];

const deliveryPhases = [
  {
    step: "01",
    title: l("Descubrir", "Discover"),
    description: l("Landscape, dependencias, criticidad, consumo y restricciones.", "Landscape, dependencies, criticality, consumption, and constraints."),
    output: l("Línea base confiable", "Trusted baseline"),
  },
  {
    step: "02",
    title: l("Decidir", "Decide"),
    description: l("Ruta por carga, arquitectura objetivo, TCO, riesgos y secuencia.", "Path per workload, target architecture, TCO, risks, and sequence."),
    output: l("Caso de negocio", "Business case"),
  },
  {
    step: "03",
    title: l("Preparar", "Prepare"),
    description: l("Landing zone, conectividad, seguridad, automatización y piloto.", "Landing zone, connectivity, security, automation, and pilot."),
    output: l("Base lista para migrar", "Migration-ready foundation"),
  },
  {
    step: "04",
    title: l("Migrar", "Migrate"),
    description: l("Oleadas, ensayos, cutover, reversa, validación y evidencia.", "Waves, rehearsals, cutover, rollback, validation, and evidence."),
    output: l("Cargas estabilizadas", "Stabilized workloads"),
  },
  {
    step: "05",
    title: l("Operar", "Operate"),
    description: l("Observabilidad, SLA, capacidad, seguridad, costo y mejora continua.", "Observability, SLA, capacity, security, cost, and continuous improvement."),
    output: l("Operación gobernada", "Governed operations"),
  },
];

const deliverables = [
  l("Inventario de aplicaciones, infraestructura y dependencias validado con los responsables.", "Application, infrastructure, and dependency inventory validated with owners."),
  l("Matriz de decisión por carga y plan de oleadas con criterios de prioridad.", "Workload decision matrix and wave plan with prioritization criteria."),
  l("Arquitectura objetivo y landing zone documentadas por ambiente.", "Target architecture and landing zone documented per environment."),
  l("Modelo de costo actual y objetivo, supuestos, presupuestos y alarmas.", "Current and target cost model, assumptions, budgets, and alarms."),
  l("Plan de pruebas, cutover, reversa, continuidad y estabilización.", "Testing, cutover, rollback, continuity, and stabilization plan."),
  l("Infraestructura como código, automatización de despliegue y controles técnicos.", "Infrastructure as code, deployment automation, and technical controls."),
  l("Tableros de salud, rendimiento, seguridad, capacidad y gasto.", "Health, performance, security, capacity, and spend dashboards."),
  l("Runbooks, modelo de soporte, responsables, SLA y transferencia de conocimiento.", "Runbooks, support model, owners, SLA, and knowledge transfer."),
];

const architectureFlow = [
  {
    label: l("Origen", "Source"),
    title: l("Landscape actual", "Current landscape"),
    items: [l("SAP y HANA", "SAP and HANA"), l("Aplicaciones", "Applications"), l("Datos e interfaces", "Data and interfaces")],
  },
  {
    label: l("Fundación", "Foundation"),
    title: "AWS Landing Zone",
    items: [l("Identidad y cuentas", "Identity and accounts"), l("Red y seguridad", "Network and security"), l("Registro y gobierno", "Logging and governance")],
  },
  {
    label: l("Ejecución", "Execution"),
    title: l("Migrar y modernizar", "Migrate and modernize"),
    items: [l("Oleadas y pruebas", "Waves and testing"), l("Datos y aplicaciones", "Data and applications"), l("Cutover y reversa", "Cutover and rollback")],
  },
  {
    label: l("Control", "Control"),
    title: l("Operar y optimizar", "Operate and optimize"),
    items: [l("Observabilidad", "Observability"), l("Continuidad y SLA", "Continuity and SLA"), l("FinOps", "FinOps")],
  },
];

export function AwsMigrationPage({ data }: { data: SpecializedPage }) {
  return (
    <>
      <ServicePageStructuredData data={data} />

      <div className="bg-ink-50">
        <div className="site-container pt-7">
          <nav aria-label={l("Ruta de navegación", "Breadcrumb")} className="text-sm text-ink-500">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="hover:text-ink-800">{l("Inicio", "Home")}</Link></li>
              <li aria-hidden><ChevronRight className="h-3 w-3 text-ink-300" /></li>
              <li><Link href="/services" className="hover:text-ink-800">{l("Servicios", "Services")}</Link></li>
              <li aria-hidden><ChevronRight className="h-3 w-3 text-ink-300" /></li>
              <li><Link href="/services/cloud-data" className="hover:text-ink-800">{l("Nube y datos", "Cloud and data")}</Link></li>
              <li aria-hidden><ChevronRight className="h-3 w-3 text-ink-300" /></li>
              <li className="font-medium text-ink-700">AWS</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="relative bg-ink-50 pb-10 pt-3 sm:pb-14 sm:pt-5">
        <div className="site-container">
          <div className="dark-panel relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-12 text-white shadow-[0_36px_100px_-46px_rgba(11,14,28,0.85)] sm:px-9 sm:py-16 lg:px-12 lg:py-20">
            <div aria-hidden className="surface-noise pointer-events-none absolute inset-0 opacity-[0.1]" />
            <div aria-hidden className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-accent-400/15" />
            <div aria-hidden className="absolute -right-3 top-3 h-52 w-52 rounded-full border border-white/10" />

            <div className="relative grid gap-12 lg:grid-cols-[1.12fr_0.58fr] lg:items-end lg:gap-20">
              <div>
                <div className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent-400">
                  <CloudCog className="h-4 w-4" aria-hidden="true" />
                  {l("AWS · Migración · Modernización · Operación", "AWS · Migration · Modernization · Operations")}
                </div>
                <h1 className="mt-5 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                  {l("Mueve cargas críticas a AWS con una ruta que puedes defender.", "Move critical workloads to AWS with a route you can defend.")}
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-300 sm:text-lg">
                  {l(
                    "Convertimos el landscape actual en un plan ejecutable: qué mover, qué modernizar, en qué orden, con qué costo, qué riesgo y cómo operarlo después. Para SAP y cargas empresariales.",
                    "We turn the current landscape into an executable plan: what to move, what to modernize, in what order, at what cost, with what risk, and how to operate it afterward. For SAP and enterprise workloads.",
                  )}
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <LinkButton href="/contact?topic=governance" size="lg">
                    {l("Solicitar assessment AWS", "Request an AWS assessment")}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </LinkButton>
                  <LinkButton href="#ruta" size="lg" variant="outline" className="border-white/15 bg-white/[0.06] text-white hover:border-white/30 hover:bg-white/10 hover:text-white">
                    {l("Ver la ruta", "See the route")}
                  </LinkButton>
                </div>
              </div>

              <aside className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-sm">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-accent-400">
                  {l("La decisión queda explícita", "The decision becomes explicit")}
                </p>
                <ul className="mt-4 divide-y divide-white/10">
                  {[
                    l("Caso de negocio y TCO con supuestos visibles", "Business case and TCO with visible assumptions"),
                    l("Ruta diferente para cada tipo de carga", "A different path for each workload type"),
                    l("Seguridad y continuidad desde el diseño", "Security and continuity by design"),
                    l("Operación y costo incluidos desde el inicio", "Operations and cost included from the start"),
                  ].map((item) => (
                    <li key={item} className="flex gap-3 py-3 text-xs font-medium leading-relaxed text-ink-200 first:pt-0 last:pb-0">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-[5.25rem] z-30 border-y border-ink-100 bg-white/95 py-3 backdrop-blur-xl">
        <div className="site-container">
          <nav aria-label={l("Contenido de AWS", "AWS page contents")} className="flex gap-2 overflow-x-auto pb-1">
            {[
              ["#capacidades", l("Capacidades", "Capabilities")],
              ["#arquitectura", l("Arquitectura", "Architecture")],
              ["#ruta", l("Ruta de migración", "Migration route")],
              ["#entregables", l("Entregables", "Deliverables")],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="shrink-0 rounded-full border border-ink-100 bg-ink-50 px-4 py-2 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <Section id="capacidades" className="bg-white">
        <SectionHeader
          eyebrow={l("Un servicio completo", "A complete service")}
          title={l("De la primera evidencia a una operación estable", "From the first evidence to stable operations")}
          description={l(
            "Activamos solamente los módulos que necesita el caso. El alcance puede iniciar con un assessment, una migración específica o la operación de una plataforma ya existente.",
            "We activate only the modules the case needs. Scope can begin with an assessment, a specific migration, or operation of an existing platform.",
          )}
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceModules.map((module) => {
            const Icon = module.icon;
            return (
              <article key={module.title} className="group flex min-h-[18rem] flex-col rounded-[1.5rem] border border-ink-100 bg-white p-6 shadow-[0_22px_60px_-52px_rgba(11,14,28,.75)] transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-7 font-display text-xl font-semibold leading-snug tracking-tight text-ink-950">{module.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{module.description}</p>
                <p className="mt-6 border-t border-ink-100 pt-4 text-[0.62rem] font-bold uppercase tracking-[0.13em] text-brand-700">{module.detail}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="arquitectura" className="bg-ink-50">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16">
          <div>
            <p className="eyebrow">{l("Arquitectura de referencia", "Reference architecture")}</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink-950 sm:text-4xl">
              {l("No se trata de mover servidores. Se trata de construir un sistema operable.", "It is not about moving servers. It is about building an operable system.")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600">
              {l(
                "La arquitectura conecta origen, fundación AWS, ejecución y control. Cada bloque tiene un responsable, criterios de aceptación y evidencia antes de avanzar.",
                "The architecture connects source, AWS foundation, execution, and control. Each block has an owner, acceptance criteria, and evidence before moving forward.",
              )}
            </p>
            <div className="mt-7 rounded-2xl border border-brand-100 bg-brand-50 p-5">
              <p className="text-sm font-semibold text-brand-900">{l("Decisión de arquitectura", "Architecture decision")}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {l(
                  "Cada servicio se incorpora por una razón verificable: continuidad, seguridad, rendimiento, velocidad de entrega o costo total.",
                  "Each service is included for a verifiable reason: continuity, security, performance, delivery speed, or total cost.",
                )}
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-ink-100 bg-white p-5 shadow-soft sm:p-7">
            <div className="grid gap-3 xl:grid-cols-4 xl:items-stretch">
              {architectureFlow.map((block, index) => (
                <div key={block.title} className="contents">
                  <article className="rounded-2xl border border-ink-100 bg-ink-50 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-brand-700">{block.label}</span>
                      <span className="font-display text-xs font-semibold text-ink-300">0{index + 1}</span>
                    </div>
                    <h3 className="mt-6 font-display text-base font-semibold text-ink-950">{block.title}</h3>
                    <ul className="mt-4 space-y-2.5">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-ink-600">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                  {index < architectureFlow.length - 1 ? (
                    <div className="flex items-center justify-center py-1 text-brand-400 xl:hidden" aria-hidden>
                      <ArrowDown className="h-4 w-4" />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="mt-3 hidden items-center justify-around rounded-xl border border-dashed border-brand-200 bg-brand-50/60 px-5 py-3 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-brand-700 xl:flex">
              <span>{l("Gobierno", "Governance")}</span><span>→</span><span>{l("Automatización", "Automation")}</span><span>→</span><span>{l("Evidencia", "Evidence")}</span><span>→</span><span>{l("Optimización", "Optimization")}</span>
            </div>
          </div>
        </div>
      </Section>

      <Section id="ruta" className="bg-white">
        <SectionHeader
          eyebrow={l("Ruta por carga", "Workload path")}
          title={l("No todo se migra de la misma forma", "Not everything migrates the same way")}
          description={l(
            "La decisión se toma con evidencia de negocio y técnica. Así evitamos modernizar por moda o mover deuda sin entenderla.",
            "The decision is made with business and technical evidence. This avoids modernizing for fashion or moving debt without understanding it.",
          )}
        />

        <div className="mt-11 grid gap-4 lg:grid-cols-4">
          {migrationPaths.map((path) => (
            <article key={path.key} className="rounded-[1.5rem] border border-ink-100 bg-ink-50 p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="font-display text-xs font-bold tracking-[0.15em] text-brand-700">{path.key}</span>
                <Layers3 className="h-4 w-4 text-ink-300" aria-hidden="true" />
              </div>
              <h3 className="mt-8 font-display text-xl font-semibold text-ink-950">{path.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{path.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-ink-950 p-6 text-white shadow-elevate sm:p-9 lg:p-11">
          <div className="grid gap-9 lg:grid-cols-[0.66fr_1.34fr] lg:items-end">
            <div>
              <p className="text-[0.64rem] font-bold uppercase tracking-[0.2em] text-accent-400">{l("Ejecución por fases", "Phased execution")}</p>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white">{l("Cinco decisiones, una sola trazabilidad", "Five decisions, one traceability chain")}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-300">{l("Cada fase termina con un resultado revisable antes de autorizar la siguiente.", "Each phase ends with a reviewable outcome before the next is authorized.")}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {deliveryPhases.map((phase) => (
                <article key={phase.step} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                  <span className="text-[0.6rem] font-bold tracking-[0.15em] text-accent-400">{phase.step}</span>
                  <h4 className="mt-5 font-display text-base font-semibold text-white">{phase.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-ink-400">{phase.description}</p>
                  <p className="mt-5 border-t border-white/10 pt-3 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-ink-200">{phase.output}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="entregables" className="bg-ink-50">
        <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
          <div>
            <p className="eyebrow">{l("Qué recibe el cliente", "What the client receives")}</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink-950 sm:text-4xl">
              {l("Entregables para decidir, ejecutar y operar", "Deliverables for decision, execution, and operations")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600">
              {l(
                "La migración no termina con una carga encendida. Termina cuando existe evidencia, soporte, visibilidad de costo y un equipo capaz de operarla.",
                "Migration does not end when a workload is running. It ends when evidence, support, cost visibility, and an operations-ready team exist.",
              )}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {[
                { icon: FileCheck2, label: l("Decisión documentada", "Documented decision") },
                { icon: ShieldCheck, label: l("Control verificable", "Verifiable control") },
                { icon: Activity, label: l("Operación observable", "Observable operations") },
                { icon: CircleDollarSign, label: l("Costo gobernado", "Governed cost") },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3 rounded-xl border border-ink-100 bg-white p-4 text-sm font-semibold text-ink-800 shadow-soft">
                    <Icon className="h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {deliverables.map((item, index) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-ink-100 bg-white p-5 text-sm leading-relaxed text-ink-700 shadow-soft">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 font-display text-[0.6rem] font-bold text-brand-700">{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-[1.75rem] border border-ink-100 bg-white p-7 shadow-soft lg:col-span-2 sm:p-9">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700"><PackageCheck className="h-5 w-5" aria-hidden="true" /></div>
            <h2 className="mt-7 font-display text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">{l("El primer paso puede ser pequeño", "The first step can be small")}</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-600">
              {l(
                "Podemos comenzar con un assessment acotado a un landscape, una aplicación crítica o una plataforma de datos. El resultado debe permitir decidir con claridad si conviene migrar, modernizar, retener o retirar.",
                "We can begin with an assessment scoped to one landscape, a critical application, or a data platform. The result must make it clear whether to migrate, modernize, retain, or retire.",
              )}
            </p>
            <LinkButton href="/contact?topic=governance" size="lg" className="mt-7">
              {l("Definir el assessment", "Define the assessment")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </LinkButton>
          </article>
          <aside className="rounded-[1.75rem] border border-brand-100 bg-brand-50 p-7 sm:p-9">
            <Sparkles className="h-5 w-5 text-brand-700" aria-hidden="true" />
            <p className="mt-6 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-brand-700">{l("Siguiente módulo", "Next module")}</p>
            <h3 className="mt-3 font-display text-xl font-semibold text-ink-950">{l("El catálogo se vuelve navegable", "The catalog becomes navigable")}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">{l("AWS es la primera página dedicada. El mismo modelo puede aplicarse después a cada servicio prioritario.", "AWS is the first dedicated page. The same model can then be applied to each priority service.")}</p>
            <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900">
              {l("Volver a servicios", "Back to services")}<ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </Section>

      <ContactCTA primaryHref="/contact?topic=governance" />
    </>
  );
}
