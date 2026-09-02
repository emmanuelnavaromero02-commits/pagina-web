import Link from "@/components/ui/SafeLink";
import {
  Activity,
  ArrowRight,
  Boxes,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDollarSign,
  CodeXml,
  Database,
  FileCheck2,
  GitBranch,
  HeartHandshake,
  PackageCheck,
  Route,
  ServerCog,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ServicePageStructuredData } from "@/components/seo/ServicePageStructuredData";
import type { SpecializedPage } from "@/components/services/SpecializedServicePage";
import { LinkButton } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { l } from "@/lib/i18n/config";

type ServiceModule = {
  icon: LucideIcon;
  id: string;
  number: string;
  title: string;
  promise: string;
  description: string;
  capabilities: string[];
  href?: string;
  cta?: string;
};

const transformationRoutes = [
  {
    key: "01",
    title: l("Greenfield", "Greenfield"),
    label: l("Rediseñar", "Redesign"),
    description: l(
      "Un núcleo nuevo, procesos fit-to-standard y migración controlada de datos cuando la prioridad es simplificar de raíz.",
      "A new core, fit-to-standard processes, and controlled data migration when the priority is foundational simplification.",
    ),
  },
  {
    key: "02",
    title: l("Conversión brownfield", "Brownfield conversion"),
    label: l("Evolucionar", "Evolve"),
    description: l(
      "Conversión del sistema actual preservando procesos útiles, historial y continuidad mientras se atiende la deuda técnica.",
      "Current-system conversion that preserves useful processes, history, and continuity while addressing technical debt.",
    ),
  },
  {
    key: "03",
    title: l("Transición selectiva", "Selective transition"),
    label: l("Elegir", "Select"),
    description: l(
      "Combinación de rediseño y conservación para migrar sociedades, periodos y datos elegidos con menor volumen y exposición.",
      "A blend of redesign and preservation to migrate selected companies, periods, and data with lower volume and exposure.",
    ),
  },
  {
    key: "04",
    title: "SAP Cloud ERP",
    label: l("Adoptar", "Adopt"),
    description: l(
      "Evaluación de nube pública, privada, RISE o GROW según complejidad, extensiones, regulación y modelo operativo.",
      "Assessment of public cloud, private cloud, RISE, or GROW based on complexity, extensions, regulation, and operating model.",
    ),
  },
];

const serviceModules: ServiceModule[] = [
  {
    icon: Route,
    id: "estrategia",
    number: "01",
    title: l("Estrategia, readiness y caso de negocio", "Strategy, readiness, and business case"),
    promise: l("Decidir antes de comprometer el programa.", "Decide before committing the program."),
    description: l(
      "Evaluamos procesos, simplification items, custom code, datos, interfaces, infraestructura, licenciamiento, capacidad interna y restricciones de negocio.",
      "We assess processes, simplification items, custom code, data, interfaces, infrastructure, licensing, internal capacity, and business constraints.",
    ),
    capabilities: [l("Readiness S/4HANA", "S/4HANA readiness"), l("Roadmap", "Roadmap"), "TCO", l("Prueba de valor", "Proof of value"), l("Arquitectura objetivo", "Target architecture")],
  },
  {
    icon: BriefcaseBusiness,
    id: "s4hana",
    number: "02",
    title: l("S/4HANA y SAP Cloud ERP", "S/4HANA and SAP Cloud ERP"),
    promise: l("Transformar el núcleo con una ruta defendible.", "Transform the core through a defensible route."),
    description: l(
      "Diseñamos y ejecutamos implementaciones greenfield, conversiones brownfield o transiciones selectivas, desde fit-to-standard hasta cutover e hypercare.",
      "We design and execute greenfield implementations, brownfield conversions, or selective transitions, from fit-to-standard through cutover and hypercare.",
    ),
    capabilities: ["Greenfield", "Brownfield", l("Transición selectiva", "Selective transition"), "RISE", "GROW", "Fiori"],
  },
  {
    icon: CircleDollarSign,
    id: "finanzas",
    number: "03",
    title: l("Finanzas, control y consolidación", "Finance, controlling, and consolidation"),
    promise: l("Cerrar con confianza y explicar el resultado.", "Close with confidence and explain the result."),
    description: l(
      "Conectamos contabilidad, activos, tesorería, costos, rentabilidad, planeación y consolidación con datos consistentes y controles auditables.",
      "We connect accounting, assets, treasury, cost, profitability, planning, and consolidation with consistent data and auditable controls.",
    ),
    capabilities: ["FI", "CO", "AA", l("Tesorería", "Treasury"), "Group Reporting", "SAC"],
  },
  {
    icon: Boxes,
    id: "operaciones",
    number: "04",
    title: l("Compras, cadena de suministro y activos", "Procurement, supply chain, and assets"),
    promise: l("Conectar la demanda con la ejecución física.", "Connect demand with physical execution."),
    description: l(
      "Integramos abastecimiento, inventario, producción, ventas, almacenes, transporte, mantenimiento y activos para mejorar continuidad y nivel de servicio.",
      "We integrate sourcing, inventory, production, sales, warehousing, transport, maintenance, and assets to improve continuity and service levels.",
    ),
    capabilities: ["MM", "SD", "PP", "EWM", "TM", "PM / EAM", "QM", "Ariba"],
  },
  {
    icon: HeartHandshake,
    id: "personas",
    number: "05",
    title: l("HCM, SuccessFactors, tiempo y nómina", "HCM, SuccessFactors, time, and payroll"),
    promise: l("Una experiencia de personas conectada con nómina.", "A people experience connected to payroll."),
    description: l(
      "Cubrimos estrategia HCM, Employee Central, talento, analítica, SAP HCM, tiempo, Employee Central Payroll, integraciones y operación de nómina.",
      "We cover HCM strategy, Employee Central, talent, analytics, SAP HCM, time, Employee Central Payroll, integrations, and payroll operations.",
    ),
    capabilities: ["Employee Central", "ECP", l("Talento", "Talent"), l("Tiempo", "Time"), "SAP HCM", l("Nómina", "Payroll")],
    href: "/services#personas-nomina",
    cta: l("Explorar personas y nómina", "Explore people and payroll"),
  },
  {
    icon: Database,
    id: "datos",
    number: "06",
    title: l("Datos y transformación de landscapes", "Data and landscape transformation"),
    promise: l("Mover solamente el dato necesario y protegerlo.", "Move only the data needed and protect it."),
    description: l(
      "Preparamos migraciones, carve-outs, consolidaciones, archivado, retiro de sistemas, refreshes de prueba y enmascaramiento sin exponer producción.",
      "We prepare migrations, carve-outs, consolidations, archiving, system retirement, test refreshes, and masking without exposing production.",
    ),
    capabilities: [l("Calidad de datos", "Data quality"), l("Migración selectiva", "Selective migration"), "Carve-out", l("Archivado", "Archiving"), l("Refresh y masking", "Refresh and masking")],
  },
  {
    icon: CodeXml,
    id: "tecnologia",
    number: "07",
    title: l("BTP, integración, ABAP y Fiori", "BTP, integration, ABAP, and Fiori"),
    promise: l("Extender sin volver frágil el núcleo.", "Extend without making the core fragile."),
    description: l(
      "Diseñamos extensiones side-by-side, aplicaciones Fiori, APIs, eventos, automatización e integraciones híbridas con gobierno de clean core.",
      "We design side-by-side extensions, Fiori applications, APIs, events, automation, and hybrid integrations with clean-core governance.",
    ),
    capabilities: ["SAP BTP", "Integration Suite", "ABAP", "Fiori / UI5", "OData", "APIs", l("Eventos", "Events")],
    href: "/services/sap-integrations",
    cta: l("Ver integración SAP", "View SAP integration"),
  },
  {
    icon: ServerCog,
    id: "basis",
    number: "08",
    title: l("Basis, seguridad y plataforma", "Basis, security, and platform"),
    promise: l("Una base estable, observable y protegida.", "A stable, observable, protected foundation."),
    description: l(
      "Operamos instalaciones, upgrades, parches, transportes, HANA, rendimiento, respaldos, continuidad, roles, vulnerabilidades y plataformas cloud.",
      "We operate installations, upgrades, patching, transports, HANA, performance, backup, continuity, roles, vulnerabilities, and cloud platforms.",
    ),
    capabilities: ["SAP Basis", "HANA", l("Seguridad y roles", "Security and roles"), l("Upgrades", "Upgrades"), "HA / DR", l("Monitoreo", "Monitoring")],
  },
  {
    icon: Activity,
    id: "ams",
    number: "09",
    title: l("AMS, soporte y mejora continua", "AMS, support, and continuous improvement"),
    promise: l("Operar hoy mientras el landscape evoluciona.", "Operate today while the landscape evolves."),
    description: l(
      "Atendemos soporte funcional y técnico, incidentes, problemas, cambios, evolutivos, releases y backlog con SLA, responsables y transferencia de conocimiento.",
      "We handle functional and technical support, incidents, problems, changes, enhancements, releases, and backlog with SLA, ownership, and knowledge transfer.",
    ),
    capabilities: ["L2 / L3", "24/7", "ITIL", l("Soporte funcional", "Functional support"), l("Soporte técnico", "Technical support"), l("Mejora continua", "Continuous improvement")],
  },
];

const processLines = [
  { number: "01", title: "Record to Report", detail: l("Contabilidad, cierre, control, consolidación y reporte.", "Accounting, close, controlling, consolidation, and reporting.") },
  { number: "02", title: "Source to Pay", detail: l("Demanda, compra, recepción, factura, proveedor y gasto.", "Demand, purchasing, receipt, invoice, supplier, and spend.") },
  { number: "03", title: "Plan to Produce", detail: l("Planeación, materiales, fabricación, calidad y capacidad.", "Planning, materials, manufacturing, quality, and capacity.") },
  { number: "04", title: "Order to Cash", detail: l("Pedido, disponibilidad, entrega, facturación y cobranza.", "Order, availability, delivery, billing, and collections.") },
  { number: "05", title: "Acquire to Retire", detail: l("Proyecto, activo, mantenimiento, costo y disposición.", "Project, asset, maintenance, cost, and disposal.") },
  { number: "06", title: "Hire to Retire", detail: l("Empleado, talento, tiempo, nómina y analítica de personas.", "Employee, talent, time, payroll, and people analytics.") },
];

const deliveryPhases = [
  { step: "01", title: l("Diagnosticar", "Diagnose"), description: l("Proceso, sistema, datos, riesgos y objetivos.", "Process, system, data, risks, and objectives."), output: l("Línea base", "Baseline") },
  { step: "02", title: l("Diseñar", "Design"), description: l("Modelo objetivo, alcance, arquitectura y gobierno.", "Target model, scope, architecture, and governance."), output: l("Diseño aprobado", "Approved design") },
  { step: "03", title: l("Construir", "Build"), description: l("Configuración, desarrollo, integración y datos.", "Configuration, development, integration, and data."), output: l("Solución verificable", "Verifiable solution") },
  { step: "04", title: l("Validar", "Validate"), description: l("Pruebas, seguridad, rendimiento y ensayo de cutover.", "Testing, security, performance, and cutover rehearsal."), output: l("Evidencia de salida", "Exit evidence") },
  { step: "05", title: l("Activar", "Activate"), description: l("Migración, cutover, adopción, soporte e hypercare.", "Migration, cutover, adoption, support, and hypercare."), output: l("Operación estable", "Stable operations") },
  { step: "06", title: l("Evolucionar", "Evolve"), description: l("AMS, backlog, optimización y nuevas capacidades.", "AMS, backlog, optimization, and new capabilities."), output: l("Mejora continua", "Continuous improvement") },
];

const deliverables = [
  l("Assessment ejecutivo y técnico con riesgos, dependencias y decisiones abiertas.", "Executive and technical assessment with risks, dependencies, and open decisions."),
  l("Mapa de procesos y capacidades SAP con dueños, brechas y prioridades.", "SAP process and capability map with owners, gaps, and priorities."),
  l("Arquitectura objetivo, estrategia de transformación y roadmap por releases.", "Target architecture, transformation strategy, and release roadmap."),
  l("Backlog trazable desde requerimiento y diseño hasta prueba y transporte.", "Traceable backlog from requirement and design through testing and transport."),
  l("Estrategia de datos, reconciliación, calidad, archivado y protección.", "Data strategy, reconciliation, quality, archiving, and protection."),
  l("Plan integrado de pruebas, cutover, reversa, hypercare y continuidad.", "Integrated testing, cutover, rollback, hypercare, and continuity plan."),
  l("Modelo operativo con RACI, SLA, cobertura, escalamiento y conocimiento.", "Operating model with RACI, SLA, coverage, escalation, and knowledge."),
  l("Indicadores de proceso, estabilidad, adopción, costo y valor realizado.", "Process, stability, adoption, cost, and realized-value indicators."),
];

export function SapServicesPage({ data }: { data: SpecializedPage }) {
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
              <li className="font-medium text-ink-700">SAP</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="relative bg-ink-50 pb-10 pt-3 sm:pb-14 sm:pt-5">
        <div className="site-container">
          <div className="dark-panel relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-12 text-white shadow-[0_36px_100px_-46px_rgba(11,14,28,0.85)] sm:px-9 sm:py-16 lg:px-12 lg:py-20">
            <div aria-hidden className="surface-noise pointer-events-none absolute inset-0 opacity-[0.1]" />
            <div aria-hidden className="absolute -right-20 -top-28 h-96 w-96 rounded-full border border-accent-400/15" />
            <div aria-hidden className="absolute -right-5 -top-4 h-60 w-60 rounded-full border border-white/10" />

            <div className="relative grid gap-12 lg:grid-cols-[1.12fr_0.58fr] lg:items-end lg:gap-20">
              <div>
                <div className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent-400">
                  <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                  {l("SAP · Estrategia · Transformación · Operación", "SAP · Strategy · Transformation · Operations")}
                </div>
                <h1 className="mt-5 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                  {l("Un núcleo SAP que evoluciona sin perder control del negocio.", "An SAP core that evolves without losing control of the business.")}
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-300 sm:text-lg">
                  {l(
                    "Conectamos la decisión ejecutiva, el proceso funcional, la arquitectura, los datos y la operación. Desde el roadmap de S/4HANA hasta el soporte diario, con responsables y evidencia en cada fase.",
                    "We connect executive decision-making, functional processes, architecture, data, and operations. From the S/4HANA roadmap to daily support, with owners and evidence in every phase.",
                  )}
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <LinkButton href="/contact?topic=sap" size="lg">
                    {l("Evaluar mi landscape SAP", "Assess my SAP landscape")}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </LinkButton>
                  <LinkButton href="#servicios-sap" size="lg" variant="outline" className="border-white/15 bg-white/[0.06] text-white hover:border-white/30 hover:bg-white/10 hover:text-white">
                    {l("Explorar servicios", "Explore services")}
                  </LinkButton>
                </div>
              </div>

              <aside className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-sm">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-accent-400">{l("Cobertura conectada", "Connected coverage")}</p>
                <ul className="mt-4 divide-y divide-white/10">
                  {[
                    l("S/4HANA y SAP Cloud ERP", "S/4HANA and SAP Cloud ERP"),
                    l("Finanzas, logística, activos y personas", "Finance, logistics, assets, and people"),
                    l("Datos, BTP, integración, ABAP y Fiori", "Data, BTP, integration, ABAP, and Fiori"),
                    l("Basis, seguridad, AMS y soporte 24/7", "Basis, security, AMS, and 24/7 support"),
                  ].map((item) => (
                    <li key={item} className="flex gap-3 py-3 text-xs font-medium leading-relaxed text-ink-200 first:pt-0 last:pb-0">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />{item}
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
          <nav aria-label={l("Contenido de servicios SAP", "SAP services contents")} className="flex gap-2 overflow-x-auto pb-1">
            {[
              ["#rutas", l("Rutas S/4HANA", "S/4HANA paths")],
              ["#servicios-sap", l("9 módulos", "9 modules")],
              ["#procesos", l("Procesos", "Processes")],
              ["#entrega-sap", l("Modelo de entrega", "Delivery model")],
              ["#entregables-sap", l("Entregables", "Deliverables")],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="shrink-0 rounded-full border border-ink-100 bg-ink-50 px-4 py-2 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800">{label}</Link>
            ))}
          </nav>
        </div>
      </section>

      <Section id="rutas" className="bg-white">
        <SectionHeader
          eyebrow={l("Primero: elegir la transformación", "First: choose the transformation")}
          title={l("Cuatro rutas. La correcta depende de tu negocio, no de una moda.", "Four paths. The right one depends on your business, not a trend.")}
          description={l(
            "La estrategia se define por procesos, datos, custom code, tiempo disponible, regulación y capacidad de cambio. Cada sistema puede requerir una decisión distinta.",
            "Strategy is defined by processes, data, custom code, available time, regulation, and change capacity. Each system may require a different decision.",
          )}
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {transformationRoutes.map((route) => (
            <article key={route.key} className="flex min-h-[17rem] flex-col rounded-[1.5rem] border border-ink-100 bg-ink-50 p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="font-display text-xs font-bold tracking-[0.15em] text-brand-700">{route.key}</span>
                <span className="rounded-full border border-brand-100 bg-white px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-brand-700">{route.label}</span>
              </div>
              <h3 className="mt-8 font-display text-xl font-semibold text-ink-950">{route.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{route.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="servicios-sap" className="bg-ink-50">
        <SectionHeader
          eyebrow={l("Servicios SAP modulares", "Modular SAP services")}
          title={l("Nueve módulos, cada uno con un resultado concreto", "Nine modules, each with a concrete outcome")}
          description={l(
            "Un módulo puede contratarse por separado o combinarse en un programa. El alcance se define por proceso, sistema, release, entregable y responsable.",
            "A module can be engaged separately or combined into a program. Scope is defined by process, system, release, deliverable, and owner.",
          )}
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {serviceModules.map((module) => {
            const Icon = module.icon;
            return (
              <article id={module.id} key={module.id} className="scroll-mt-32 rounded-[1.75rem] border border-ink-100 bg-white p-6 shadow-[0_22px_60px_-52px_rgba(11,14,28,.75)] sm:p-8">
                <div className="grid gap-5 sm:grid-cols-[4rem_1fr]">
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                    <span className="mt-3 block font-display text-[0.62rem] font-bold tracking-[0.16em] text-ink-300">{module.number}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold leading-snug tracking-tight text-ink-950">{module.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-brand-700">{module.promise}</p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-600">{module.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {module.capabilities.map((capability) => (
                        <li key={capability} className="rounded-full border border-ink-100 bg-ink-50 px-3 py-1.5 text-[0.62rem] font-semibold text-ink-600">{capability}</li>
                      ))}
                    </ul>
                    {module.href ? (
                      <Link href={module.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900">
                        {module.cta}<ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="procesos" className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16">
          <div>
            <p className="eyebrow">{l("Diseño orientado al negocio", "Business-oriented design")}</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink-950 sm:text-4xl">{l("SAP se diseña por procesos completos", "SAP is designed around complete processes")}</h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600">{l("La configuración, los datos y las integraciones se validan sobre el flujo real que cruza áreas; no como módulos aislados.", "Configuration, data, and integrations are validated against the real flow across functions, not as isolated modules.")}</p>
            <div className="mt-7 rounded-2xl border border-brand-100 bg-brand-50 p-5">
              <p className="text-sm font-semibold text-brand-900">{l("Principio de diseño", "Design principle")}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{l("Cada decisión debe mejorar un resultado de proceso, reducir un riesgo o simplificar la operación futura.", "Every decision must improve a process outcome, reduce a risk, or simplify future operations.")}</p>
            </div>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {processLines.map((process) => (
              <li key={process.number} className="rounded-2xl border border-ink-100 bg-ink-50 p-5">
                <div className="flex items-center justify-between gap-3"><span className="font-display text-[0.62rem] font-bold tracking-[0.15em] text-brand-700">{process.number}</span><GitBranch className="h-4 w-4 text-ink-300" aria-hidden="true" /></div>
                <h3 className="mt-6 font-display text-lg font-semibold text-ink-950">{process.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{process.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section id="entrega-sap" className="bg-ink-950 text-white">
        <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-end">
          <div>
            <p className="text-[0.64rem] font-bold uppercase tracking-[0.2em] text-accent-400">{l("Modelo de entrega", "Delivery model")}</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl">{l("De la decisión a la mejora continua", "From decision to continuous improvement")}</h2>
            <p className="mt-5 text-base leading-relaxed text-ink-300">{l("Cada fase termina con un resultado revisable. El programa avanza por evidencia, no solamente por calendario.", "Each phase ends with a reviewable outcome. The program advances through evidence, not calendar alone.")}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
            {deliveryPhases.map((phase) => (
              <article key={phase.step} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                <span className="text-[0.6rem] font-bold tracking-[0.15em] text-accent-400">{phase.step}</span>
                <h3 className="mt-5 font-display text-sm font-semibold text-white">{phase.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-400">{phase.description}</p>
                <p className="mt-5 border-t border-white/10 pt-3 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-ink-200">{phase.output}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="entregables-sap" className="bg-ink-50">
        <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
          <div>
            <p className="eyebrow">{l("Resultado tangible", "Tangible outcome")}</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink-950 sm:text-4xl">{l("Entregables que permanecen después del proyecto", "Deliverables that remain after the project")}</h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600">{l("La organización recibe decisiones documentadas, una solución operable y conocimiento transferido; no una colección de presentaciones.", "The organization receives documented decisions, an operable solution, and transferred knowledge, not a collection of presentations.")}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {[
                { icon: FileCheck2, label: l("Alcance trazable", "Traceable scope") },
                { icon: ShieldCheck, label: l("Control auditable", "Auditable control") },
                { icon: UsersRound, label: l("Adopción por rol", "Role-based adoption") },
                { icon: Wrench, label: l("Operación transferida", "Transferred operations") },
              ].map((item) => {
                const Icon = item.icon;
                return <div key={item.label} className="flex items-center gap-3 rounded-xl border border-ink-100 bg-white p-4 text-sm font-semibold text-ink-800 shadow-soft"><Icon className="h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />{item.label}</div>;
              })}
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {deliverables.map((item, index) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-ink-100 bg-white p-5 text-sm leading-relaxed text-ink-700 shadow-soft">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 font-display text-[0.6rem] font-bold text-brand-700">{String(index + 1).padStart(2, "0")}</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-[1.75rem] border border-ink-100 bg-white p-7 shadow-soft lg:col-span-2 sm:p-9">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700"><PackageCheck className="h-5 w-5" aria-hidden="true" /></div>
            <h2 className="mt-7 font-display text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">{l("Empecemos por una decisión concreta", "Start with one concrete decision")}</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-600">{l("Podemos iniciar con readiness de S/4HANA, assessment de un proceso, revisión de Basis, diagnóstico de AMS o una prueba de valor acotada. La primera fase debe producir una decisión accionable.", "We can begin with S/4HANA readiness, a process assessment, a Basis review, an AMS diagnosis, or a focused proof of value. The first phase must produce an actionable decision.")}</p>
            <LinkButton href="/contact?topic=sap" size="lg" className="mt-7">{l("Definir el diagnóstico SAP", "Define the SAP diagnosis")}<ArrowRight className="h-4 w-4" aria-hidden="true" /></LinkButton>
          </article>
          <aside className="rounded-[1.75rem] border border-brand-100 bg-brand-50 p-7 sm:p-9">
            <Sparkles className="h-5 w-5 text-brand-700" aria-hidden="true" />
            <p className="mt-6 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-brand-700">{l("Servicios relacionados", "Related services")}</p>
            <h3 className="mt-3 font-display text-xl font-semibold text-ink-950">{l("Conecta SAP con la ejecución", "Connect SAP with execution")}</h3>
            <div className="mt-5 space-y-3">
              <Link href="/services/software-factory" className="flex items-center justify-between gap-3 rounded-xl border border-brand-100 bg-white p-3 text-sm font-semibold text-ink-800 hover:border-brand-300"><span>{l("Fábrica ABAP + Fiori", "ABAP + Fiori factory")}</span><ArrowRight className="h-4 w-4 text-brand-700" /></Link>
              <Link href="/services/cloud-data/aws" className="flex items-center justify-between gap-3 rounded-xl border border-brand-100 bg-white p-3 text-sm font-semibold text-ink-800 hover:border-brand-300"><span>SAP on AWS</span><ArrowRight className="h-4 w-4 text-brand-700" /></Link>
              <Link href="/services/sap-integrations" className="flex items-center justify-between gap-3 rounded-xl border border-brand-100 bg-white p-3 text-sm font-semibold text-ink-800 hover:border-brand-300"><span>{l("Integración SAP", "SAP integration")}</span><ArrowRight className="h-4 w-4 text-brand-700" /></Link>
            </div>
          </aside>
        </div>
      </Section>

      <ContactCTA primaryHref="/contact?topic=sap" />
    </>
  );
}
