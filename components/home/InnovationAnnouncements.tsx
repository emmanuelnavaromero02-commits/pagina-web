"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  ChevronLeft,
  ChevronRight,
  CodeXml,
  Database,
  Gauge,
  Pause,
  Play,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { l } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

type Announcement = {
  label: string;
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  kind: "decision" | "factory";
};

const announcements: Announcement[] = [
  {
    label: l("Novedad · Inteligencia de Decisión", "New · Decision Intelligence"),
    icon: BrainCircuit,
    title: l(
      "De datos gobernados a decisiones explicables.",
      "From governed data to explainable decisions.",
    ),
    description: l(
      "Un núcleo cuantitativo calibrado estudia escenarios y evidencia; agentes especializados investigan el contexto y la IA generativa lo convierte en una recomendación clara, trazable y supervisada.",
      "A calibrated quantitative core studies scenarios and evidence; specialist agents investigate context, and generative AI turns it into a clear, traceable, supervised recommendation.",
    ),
    points: [
      l("Escenarios y señales cuantitativas", "Quantitative scenarios and signals"),
      l("Agentes especializados por función", "Function-specific agents"),
      l("IA generativa con trazabilidad", "Generative AI with traceability"),
    ],
    primary: { label: l("Explorar la novedad", "Explore the innovation"), href: "/copilot" },
    secondary: { label: l("Probar demostración", "Try the demonstration"), href: "/copilot#demo-interactiva" },
    kind: "decision",
  },
  {
    label: l("Novedad · Fábrica ABAP + Fiori", "New · ABAP + Fiori Factory"),
    icon: CodeXml,
    title: l(
      "Más capacidad SAP. Menor costo de entrega.",
      "More SAP capacity. Lower delivery cost.",
    ),
    description: l(
      "Una fábrica especializada convierte el backlog en evolutivos, interfaces y experiencias Fiori con estimación consistente, patrones reutilizables, QA integrado y liberaciones frecuentes.",
      "A specialist factory turns backlog into enhancements, interfaces, and Fiori experiences through consistent estimates, reusable patterns, built-in QA, and frequent releases.",
    ),
    points: [
      l("Hasta 60% de ahorro potencial", "Up to 60% potential savings"),
      l("ABAP, Fiori, UI5 e integraciones", "ABAP, Fiori, UI5, and integrations"),
      l("Calidad y trazabilidad por entrega", "Quality and traceability per delivery"),
    ],
    primary: { label: l("Conocer la fábrica", "Explore the factory"), href: "/services/software-factory" },
    secondary: { label: l("Abrir simulador", "Open simulator"), href: "/services/software-factory#abap-factory-lab" },
    kind: "factory",
  },
];

const ROTATION_MS = 7000;

export function InnovationAnnouncements() {
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (userPaused || interactionPaused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % announcements.length);
    }, ROTATION_MS);
    return () => window.clearInterval(timer);
  }, [interactionPaused, reducedMotion, userPaused]);

  const announcement = announcements[active];
  const Icon = announcement.icon;
  const goTo = (index: number) => setActive((index + announcements.length) % announcements.length);

  return (
    <section
      aria-label={l("Últimas innovaciones", "Latest innovations")}
      className="border-b border-ink-100 bg-white py-6 sm:py-8"
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
      onFocusCapture={() => setInteractionPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setInteractionPaused(false);
      }}
    >
      <div className="site-container">
        <div className="dark-panel relative min-h-[34rem] overflow-hidden rounded-[2rem] border border-white/10 text-white shadow-float lg:min-h-[31rem]">
          <div aria-hidden className="surface-noise pointer-events-none absolute inset-0 opacity-[0.1]" />
          <div aria-hidden className="absolute -right-28 -top-36 h-[30rem] w-[30rem] rounded-full border border-accent-400/15" />
          <div aria-hidden className="absolute -right-8 -top-20 h-[20rem] w-[20rem] rounded-full border border-white/10" />

          <div key={active} className="relative grid min-h-[34rem] animate-fade-up pb-20 lg:min-h-[31rem] lg:grid-cols-[1.08fr_0.92fr] lg:pb-16">
            <div className="flex flex-col justify-center px-6 py-10 sm:px-9 sm:py-12 lg:px-12 lg:py-14">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-400/20 bg-accent-400/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.15em] text-accent-400">
                <Icon className="h-4 w-4" aria-hidden="true" />
                {announcement.label}
              </div>
              <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                {announcement.title}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-300 sm:text-lg">
                {announcement.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {announcement.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm font-medium text-ink-200">
                    <Check className="h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />{point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton href={announcement.primary.href} size="lg" className="bg-white text-ink-950 hover:bg-accent-50 hover:text-ink-950">
                  {announcement.primary.label}<ArrowRight className="h-4 w-4" aria-hidden="true" />
                </LinkButton>
                <LinkButton href={announcement.secondary.href} size="lg" variant="outline" className="border-white/15 bg-white/[0.06] text-white hover:border-white/30 hover:bg-white/10 hover:text-white">
                  {announcement.secondary.label}
                </LinkButton>
              </div>
            </div>

            <div className="relative flex items-center border-t border-white/10 bg-white/[0.035] p-6 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
              {announcement.kind === "decision" ? <DecisionVisual /> : <FactoryVisual />}
            </div>
          </div>

          <div className="absolute bottom-4 left-6 right-6 z-20 flex items-center justify-between gap-5 sm:bottom-5 sm:left-9 sm:right-9 lg:left-12 lg:right-12">
            <div className="flex items-center gap-2" role="group" aria-label={l("Seleccionar novedad", "Select innovation")}>
              {announcements.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  aria-pressed={active === index}
                  aria-label={item.label}
                  onClick={() => goTo(index)}
                  className={cn("h-2.5 rounded-full transition-all", active === index ? "w-10 bg-accent-400" : "w-2.5 bg-white/25 hover:bg-white/50")}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => goTo(active - 1)} aria-label={l("Novedad anterior", "Previous innovation")} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-ink-950/55 text-white hover:border-white/25 hover:bg-white/10"><ChevronLeft className="h-4 w-4" /></button>
              <button type="button" onClick={() => setUserPaused((paused) => !paused)} aria-label={userPaused ? l("Reanudar rotación", "Resume rotation") : l("Pausar rotación", "Pause rotation")} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-ink-950/55 text-white hover:border-white/25 hover:bg-white/10">{userPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}</button>
              <button type="button" onClick={() => goTo(active + 1)} aria-label={l("Siguiente novedad", "Next innovation")} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-ink-950/55 text-white hover:border-white/25 hover:bg-white/10"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DecisionVisual() {
  const stages = [
    { icon: Database, label: l("Evidencia", "Evidence"), value: l("Datos gobernados", "Governed data") },
    { icon: Gauge, label: l("Análisis", "Analysis"), value: l("Núcleo cuantitativo", "Quantitative core") },
    { icon: BrainCircuit, label: l("Estudio", "Study"), value: l("Agentes especializados", "Specialist agents") },
    { icon: ShieldCheck, label: l("Resultado", "Outcome"), value: l("Acción supervisada", "Supervised action") },
  ];
  return (
    <div className="mx-auto w-full max-w-xl rounded-[1.75rem] border border-white/10 bg-ink-950/55 p-5 shadow-elevate sm:p-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <span className="text-xs font-bold uppercase tracking-[0.15em] text-accent-400">{l("Sistema de decisión", "Decision system")}</span>
        <span className="flex items-center gap-2 text-xs text-ink-400"><span className="h-2 w-2 rounded-full bg-accent-400" />{l("Escenario activo", "Active scenario")}</span>
      </div>
      <ol className="mt-4 space-y-3">
        {stages.map((stage, index) => {
          const StageIcon = stage.icon;
          return (
            <li key={stage.label} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-400/10 text-accent-400"><StageIcon className="h-4 w-4" /></span>
              <span className="min-w-0 flex-1"><span className="block text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">0{index + 1} · {stage.label}</span><strong className="mt-1 block text-sm font-semibold text-white">{stage.value}</strong></span>
              {index < stages.length - 1 ? <ArrowRight className="h-4 w-4 text-brand-300" aria-hidden="true" /> : <Check className="h-4 w-4 text-accent-400" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function FactoryVisual() {
  return (
    <div className="mx-auto w-full max-w-xl rounded-[1.75rem] border border-white/10 bg-ink-950/55 p-5 shadow-elevate sm:p-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <span className="text-xs font-bold uppercase tracking-[0.15em] text-accent-400">ABAP + Fiori Factory</span>
        <span className="flex items-center gap-2 text-xs text-ink-400"><span className="h-2 w-2 rounded-full bg-accent-400" />{l("Flujo activo", "Active flow")}</span>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
        <article className="rounded-2xl border border-white/10 bg-white/[0.055] p-5">
          <span className="text-xs font-bold uppercase tracking-[0.13em] text-ink-500">{l("Entrada", "Input")}</span>
          <h3 className="mt-5 font-display text-xl font-semibold text-white">{l("Backlog SAP", "SAP backlog")}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-400">{l("Evolutivos, reportes, interfaces, formularios y Fiori.", "Enhancements, reports, interfaces, forms, and Fiori.")}</p>
        </article>
        <div className="flex items-center justify-center text-brand-300"><ArrowRight className="h-5 w-5 rotate-90 sm:rotate-0" aria-hidden="true" /></div>
        <article className="rounded-2xl border border-accent-400/20 bg-accent-400/10 p-5">
          <span className="text-xs font-bold uppercase tracking-[0.13em] text-accent-400">{l("Impacto potencial", "Potential impact")}</span>
          <strong className="mt-3 block font-display text-5xl font-semibold tracking-[-0.05em] text-white">60%</strong>
          <p className="mt-2 text-sm leading-relaxed text-ink-300">{l("de ahorro potencial según volumen, repetibilidad y alcance validado.", "potential savings based on validated volume, repeatability, and scope.")}</p>
        </article>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs font-semibold text-ink-300">
        <span className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-3">{l("Estimar", "Estimate")}</span>
        <span className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-3">{l("Construir", "Build")}</span>
        <span className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-3">{l("Validar", "Validate")}</span>
      </div>
    </div>
  );
}
