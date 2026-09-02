"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Gauge,
  Minus,
  Plus,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { l } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

type FactoryMode = {
  id: string;
  label: string;
  description: string;
  backlog: number;
  budget: number;
  cycle: number;
  repeatable: number;
  bonus: number;
  flow: string[];
};

const FACTORY_MODES: FactoryMode[] = [
  {
    id: "abap",
    label: "ABAP Core",
    description: l(
      "Evolutivos, reportes, interfaces, formularios y mejoras sobre ECC o S/4HANA.",
      "Enhancements, reports, interfaces, forms, and improvements across ECC or S/4HANA.",
    ),
    backlog: 26,
    budget: 1100,
    cycle: 8,
    repeatable: 70,
    bonus: 2,
    flow: [
      l("Diseño", "Design"),
      "ABAP",
      "ATC",
      l("Pruebas", "Testing"),
      l("Transporte", "Transport"),
    ],
  },
  {
    id: "fiori",
    label: "Fiori Experience",
    description: l(
      "Aplicaciones Fiori y SAPUI5 conectadas a procesos SAP mediante servicios gobernados.",
      "Fiori and SAPUI5 applications connected to SAP processes through governed services.",
    ),
    backlog: 18,
    budget: 900,
    cycle: 7,
    repeatable: 55,
    bonus: 0,
    flow: ["UX", "SAPUI5", "OData", l("Pruebas", "Testing"), l("Despliegue", "Deployment")],
  },
  {
    id: "full",
    label: "ABAP + Fiori",
    description: l(
      "Equipos coordinados para resolver lógica SAP, servicios y experiencia de usuario de punta a punta.",
      "Coordinated teams that solve SAP logic, services, and user experience end to end.",
    ),
    backlog: 24,
    budget: 1200,
    cycle: 10,
    repeatable: 65,
    bonus: 3,
    flow: [
      l("Diseño", "Design"),
      "ABAP · OData",
      "Fiori · UI5",
      "QA",
      l("Liberación", "Release"),
    ],
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const formatNumber = (value: number, digits = 0) =>
  new Intl.NumberFormat(l("es-MX", "en-US"), {
    maximumFractionDigits: digits,
  }).format(value);

export function AbapFactoryShowcase() {
  const [modeId, setModeId] = useState("full");
  const initialMode = FACTORY_MODES.find((mode) => mode.id === modeId) ?? FACTORY_MODES[2];
  const [monthlyBudget, setMonthlyBudget] = useState(initialMode.budget);
  const [cycleWeeks, setCycleWeeks] = useState(initialMode.cycle);
  const [repeatableWork, setRepeatableWork] = useState(initialMode.repeatable);

  const mode = FACTORY_MODES.find((item) => item.id === modeId) ?? FACTORY_MODES[2];

  const result = useMemo(() => {
    const costReduction = Math.round(
      clamp(
        25 + repeatableWork * 0.45 + Math.min(mode.backlog, 30) * 0.25 + mode.bonus,
        30,
        60,
      ),
    );
    const timeReduction = Math.round(
      clamp(
        20 + repeatableWork * 0.35 + Math.min(mode.backlog, 30) * 0.25,
        28,
        55,
      ),
    );
    const factoryBudget = monthlyBudget * (1 - costReduction / 100);
    const monthlySavings = monthlyBudget - factoryBudget;
    const annualSavings = (monthlySavings * 12) / 1000;
    const factoryCycle = cycleWeeks * (1 - timeReduction / 100);
    const capacity = 100 / (100 - costReduction);

    return {
      costReduction,
      timeReduction,
      factoryBudget,
      monthlySavings,
      annualSavings,
      factoryCycle,
      capacity,
    };
  }, [cycleWeeks, mode, monthlyBudget, repeatableWork]);

  const selectMode = (nextId: string) => {
    const nextMode = FACTORY_MODES.find((item) => item.id === nextId) ?? FACTORY_MODES[2];
    setModeId(nextMode.id);
    setMonthlyBudget(nextMode.budget);
    setCycleWeeks(nextMode.cycle);
    setRepeatableWork(nextMode.repeatable);
  };

  return (
    <Section id="abap-factory-lab" className="overflow-hidden bg-ink-950 text-white">
      <div className="relative">
        <div
          aria-hidden
          className="absolute -left-32 -top-40 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-accent-400/10 blur-3xl"
        />

        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-400/20 bg-accent-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-400">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {l("Nueva oferta · Fábrica SAP industrializada", "New offer · Industrialized SAP Factory")}
            </div>
            <h2 className="mt-5 max-w-4xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {l("Convierte el backlog ABAP y Fiori en ", "Turn the ABAP and Fiori backlog into ")}
              <span className="bg-gradient-to-r from-accent-400 to-brand-300 bg-clip-text text-transparent">
                {l("entregas continuas.", "continuous delivery.")}
              </span>
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-300 sm:text-lg">
              {l(
                "Una fábrica especializada que reutiliza patrones, coordina especialistas SAP e incorpora calidad desde el inicio para reducir costo y tiempo sin convertir la velocidad en deuda técnica.",
                "A specialized factory that reuses patterns, coordinates SAP specialists, and embeds quality from the start to reduce cost and time without turning speed into technical debt.",
              )}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <ValueCard
              icon={CircleDollarSign}
              value={l("Hasta 60%", "Up to 60%")}
              label={l("reducción potencial del costo", "potential cost reduction")}
            />
            <ValueCard
              icon={Clock3}
              value={l("Ciclos cortos", "Short cycles")}
              label={l("entregas frecuentes y visibles", "frequent, visible delivery")}
            />
            <ValueCard
              icon={ShieldCheck}
              value="QA integrado"
              label={l("calidad dentro del flujo", "quality inside the workflow")}
            />
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white text-ink-950 shadow-elevate">
          <div className="border-b border-ink-100 bg-ink-50 p-5 sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                  {l("Estimador de oportunidad", "Opportunity estimator")}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-semibold text-ink-950 sm:text-2xl">
                  {l("¿Qué puede cambiar una fábrica dedicada?", "What could a dedicated factory change?")}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2" role="group" aria-label={l("Tipo de fábrica", "Factory type")}>
                {FACTORY_MODES.map((item) => {
                  const selected = item.id === modeId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => selectMode(item.id)}
                      className={cn(
                        "rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500",
                        selected
                          ? "border-ink-950 bg-ink-950 text-white"
                          : "border-ink-200 bg-white text-ink-600 hover:border-ink-300",
                      )}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-600">{mode.description}</p>
          </div>

          <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
            <div className="border-b border-ink-100 p-5 sm:p-6 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Gauge className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                    {l("Tu operación actual", "Your current operation")}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink-900">
                    {l(`${mode.backlog} solicitudes mensuales`, `${mode.backlog} monthly requests`)}
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-7">
                <FactoryControl
                  id="factory-budget"
                  label={l("Costo mensual de entrega", "Monthly delivery cost")}
                  helper={l("Equipo, proveedores y retrabajo", "Team, vendors, and rework")}
                  value={monthlyBudget}
                  unit={l("mil MXN", "k MXN")}
                  min={500}
                  max={2500}
                  step={100}
                  onChange={setMonthlyBudget}
                />
                <FactoryControl
                  id="factory-cycle"
                  label={l("Ciclo promedio", "Average cycle")}
                  helper={l("De solicitud a producción", "From request to production")}
                  value={cycleWeeks}
                  unit={l("semanas", "weeks")}
                  min={4}
                  max={16}
                  step={1}
                  onChange={setCycleWeeks}
                />
                <FactoryControl
                  id="factory-repeatable"
                  label={l("Trabajo con patrones reutilizables", "Work with reusable patterns")}
                  helper={l("Componentes, pruebas y plantillas", "Components, tests, and templates")}
                  value={repeatableWork}
                  unit="%"
                  min={20}
                  max={80}
                  step={5}
                  onChange={setRepeatableWork}
                />
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="grid gap-3 sm:grid-cols-3">
                <ResultCard
                  eyebrow={l("Ahorro proyectado", "Projected savings")}
                  value={`$${formatNumber(result.monthlySavings)}k`}
                  detail={l(`${formatNumber(result.annualSavings, 1)}M MXN al año`, `${formatNumber(result.annualSavings, 1)}M MXN per year`)}
                  accent
                />
                <ResultCard
                  eyebrow={l("Reducción estimada", "Estimated reduction")}
                  value={`${result.costReduction}%`}
                  detail={l("sobre el costo actual", "against current cost")}
                />
                <ResultCard
                  eyebrow={l("Capacidad equivalente", "Equivalent capacity")}
                  value={`${formatNumber(result.capacity, 1)}×`}
                  detail={l("con el mismo presupuesto", "with the same budget")}
                />
              </div>

              <div className="mt-5 rounded-2xl bg-ink-950 p-5 text-white sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-400">
                      {l("Comparación del modelo", "Model comparison")}
                    </p>
                    <h4 className="mt-1.5 font-display text-xl font-semibold">
                      {l("Menos costo. Menos espera. Más capacidad.", "Less cost. Less waiting. More capacity.")}
                    </h4>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-400/20 bg-accent-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                    {l("Proyección en vivo", "Live projection")}
                  </span>
                </div>

                <div className="mt-6 space-y-6">
                  <ComparisonRow
                    label={l("Modelo tradicional", "Traditional model")}
                    cost={`$${formatNumber(monthlyBudget)}k / ${l("mes", "month")}`}
                    cycle={l(`${cycleWeeks} semanas`, `${cycleWeeks} weeks`)}
                    width={100}
                    muted
                  />
                  <ComparisonRow
                    label={l("Fábrica ABAP + Fiori", "ABAP + Fiori Factory")}
                    cost={`$${formatNumber(result.factoryBudget)}k / ${l("mes", "month")}`}
                    cycle={l(`${formatNumber(result.factoryCycle, 1)} semanas`, `${formatNumber(result.factoryCycle, 1)} weeks`)}
                    width={100 - result.costReduction}
                  />
                </div>

                <div className="mt-6 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">
                  <p className="flex items-center gap-2 text-sm font-semibold text-white">
                    <CircleDollarSign className="h-4 w-4 text-accent-400" aria-hidden="true" />
                    {l(`${result.costReduction}% menos costo estimado`, `${result.costReduction}% lower estimated cost`)}
                  </p>
                  <p className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Clock3 className="h-4 w-4 text-accent-400" aria-hidden="true" />
                    {l(`${result.timeReduction}% menos tiempo estimado`, `${result.timeReduction}% lower estimated cycle time`)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-ink-100 bg-ink-50 p-5 sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-brand-700" aria-hidden="true" />
                  <h4 className="font-display text-lg font-semibold text-ink-950">
                    {l("La calidad viaja dentro de cada entrega", "Quality travels inside every delivery")}
                  </h4>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {l(
                    "Revisión técnica, pruebas, rendimiento, seguridad, documentación y liberación controlada forman parte del flujo; no son una fase tardía.",
                    "Technical review, testing, performance, security, documentation, and controlled release are part of the flow, not a late phase.",
                  )}
                </p>
              </div>
              <ol className="grid min-w-0 flex-1 grid-cols-2 gap-2 sm:grid-cols-5 lg:max-w-2xl">
                {mode.flow.map((step, index) => (
                  <li key={step} className="relative rounded-xl border border-ink-100 bg-white p-3 text-center shadow-soft">
                    <CheckCircle2 className="mx-auto h-4 w-4 text-accent-600" aria-hidden="true" />
                    <p className="mt-2 text-[10px] font-semibold leading-tight text-ink-800">{step}</p>
                    <span className="mt-1 block text-[9px] font-semibold text-ink-400">0{index + 1}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="relative mt-6 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="text-sm font-semibold text-white">
              {l("Los Agentes de Decisión encuentran la oportunidad. La fábrica ABAP + Fiori la convierte en entrega.", "Decision Agents find the opportunity. The ABAP + Fiori Factory turns it into delivery.")}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-ink-400">
              {l(
                "La proyección es ilustrativa y debe validarse contra backlog, complejidad, equipo actual, deuda técnica y criterios de aceptación.",
                "The projection is illustrative and must be validated against backlog, complexity, current team, technical debt, and acceptance criteria.",
              )}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <LinkButton href="/contact?topic=software" size="md">
              {l("Calcular mi ahorro", "Calculate my savings")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </LinkButton>
            <LinkButton
              href="/copilot"
              size="md"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              {l("Ver Agentes de Decisión IA", "See AI Decision Agents")}
            </LinkButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ValueCard({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Boxes;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <Icon className="h-5 w-5 text-accent-400" aria-hidden="true" />
      <p className="mt-3 font-display text-lg font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs leading-relaxed text-ink-400">{label}</p>
    </div>
  );
}

function FactoryControl({
  id,
  label,
  helper,
  value,
  unit,
  min,
  max,
  step,
  onChange,
}: {
  id: string;
  label: string;
  helper: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  const fill = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <label htmlFor={id} className="block">
        <span className="block text-sm font-semibold text-ink-900">{label}</span>
        <span className="mt-0.5 block text-xs text-ink-500">{helper}</span>
      </label>
      <div className="mt-3 flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(clamp(value - step, min, max))}
          disabled={value <= min}
          aria-label={l(`Reducir ${label}`, `Decrease ${label}`)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-ink-200 bg-ink-50 text-ink-600 transition-colors hover:bg-ink-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:opacity-35"
        >
          <Minus className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="min-w-0 flex-1 text-center">
          <span className="font-display text-xl font-semibold text-brand-700">{formatNumber(value)}</span>
          <span className="ml-1.5 text-[9px] font-semibold uppercase tracking-wide text-ink-400">{unit}</span>
        </p>
        <button
          type="button"
          onClick={() => onChange(clamp(value + step, min, max))}
          disabled={value >= max}
          aria-label={l(`Aumentar ${label}`, `Increase ${label}`)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-ink-200 bg-ink-50 text-ink-600 transition-colors hover:bg-ink-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:opacity-35"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-ink-100 accent-brand-600"
        style={{ background: `linear-gradient(90deg, rgb(59 101 245) ${fill}%, rgb(226 232 240) ${fill}%)` }}
      />
    </div>
  );
}

function ResultCard({
  eyebrow,
  value,
  detail,
  accent = false,
}: {
  eyebrow: string;
  value: string;
  detail: string;
  accent?: boolean;
}) {
  return (
    <div className={cn("rounded-2xl border p-4", accent ? "border-accent-200 bg-accent-50" : "border-ink-100 bg-ink-50")}>
      <p className={cn("text-[9px] font-semibold uppercase tracking-[0.16em]", accent ? "text-accent-700" : "text-ink-400")}>
        {eyebrow}
      </p>
      <p className="mt-2 font-display text-2xl font-semibold text-ink-950">{value}</p>
      <p className="mt-1 text-xs leading-relaxed text-ink-500">{detail}</p>
    </div>
  );
}

function ComparisonRow({
  label,
  cost,
  cycle,
  width,
  muted = false,
}: {
  label: string;
  cost: string;
  cycle: string;
  width: number;
  muted?: boolean;
}) {
  return (
    <div>
      <div className="flex flex-col gap-1 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p className={cn("font-semibold", muted ? "text-ink-400" : "text-white")}>{label}</p>
        <p className="text-ink-400">
          <span className={muted ? "text-ink-400" : "text-accent-400"}>{cost}</span>
          <span className="mx-2 text-ink-600">·</span>
          {cycle}
        </p>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className={cn("h-full rounded-full transition-[width] duration-500", muted ? "bg-ink-600" : "bg-gradient-to-r from-brand-500 to-accent-400")}
          style={{ width: `${Math.max(width, 8)}%` }}
        />
      </div>
    </div>
  );
}
