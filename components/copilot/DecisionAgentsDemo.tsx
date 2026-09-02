"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  BrainCircuit,
  Calculator,
  CheckCircle2,
  Gauge,
  Minus,
  Play,
  Plus,
  RotateCcw,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { l } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

type InputDefinition = {
  id: string;
  label: string;
  helper: string;
  min: number;
  max: number;
  step: number;
  unit: string;
};

type DecisionResult = {
  state: "attention" | "opportunity" | "stable";
  stateLabel: string;
  headline: string;
  description: string;
  primary: { label: string; value: string; progress: number };
  secondary: { label: string; value: string };
  impact: { label: string; value: string };
  priority: string;
  explanation: string;
  nextStep: string;
};

type DemoScenario = {
  id: string;
  label: string;
  context: string;
  question: string;
  inputs: InputDefinition[];
  defaults: Record<string, number>;
  calculate: (values: Record<string, number>) => DecisionResult;
};

const clamp = (value: number, min = 0, max = 100) =>
  Math.min(max, Math.max(min, value));

const formatNumber = (value: number, maximumFractionDigits = 0) =>
  new Intl.NumberFormat(l("es-MX", "en-US"), {
    maximumFractionDigits,
  }).format(value);

const SCENARIOS: DemoScenario[] = [
  {
    id: "finance",
    label: l("Rentabilidad", "Profitability"),
    context: l("Dirección financiera", "Finance leadership"),
    question: l(
      "¿Dónde está el valor que todavía no llega al resultado?",
      "Where is the value that has not reached the result yet?",
    ),
    inputs: [
      {
        id: "revenue",
        label: l("Facturación visible", "Visible billing"),
        helper: l("Acumulado del periodo", "Period-to-date"),
        min: 220,
        max: 460,
        step: 10,
        unit: l("mil MXN", "k MXN"),
      },
      {
        id: "cost",
        label: l("Costo ejecutado", "Executed cost"),
        helper: l("Costo reconocido", "Recognized cost"),
        min: 150,
        max: 360,
        step: 10,
        unit: l("mil MXN", "k MXN"),
      },
      {
        id: "readyHours",
        label: l("Trabajo listo sin facturar", "Billable work pending"),
        helper: l("Horas ya validadas", "Already validated hours"),
        min: 0,
        max: 320,
        step: 20,
        unit: l("horas", "hours"),
      },
    ],
    defaults: { revenue: 320, cost: 260, readyHours: 140 },
    calculate: ({ revenue, cost, readyHours }) => {
      const currentMargin = clamp(((revenue - cost) / revenue) * 100, -20, 60);
      const recoverable = readyHours * 0.65;
      const protectedRevenue = revenue + recoverable;
      const protectedMargin = clamp(
        ((protectedRevenue - cost) / protectedRevenue) * 100,
        -20,
        60,
      );
      const marginGain = protectedMargin - currentMargin;
      const hasOpportunity = recoverable >= 52;

      return {
        state: hasOpportunity ? "opportunity" : currentMargin < 12 ? "attention" : "stable",
        stateLabel: hasOpportunity
          ? l("Valor recuperable", "Recoverable value")
          : currentMargin < 12
            ? l("Atención requerida", "Attention required")
            : l("Resultado estable", "Stable result"),
        headline: hasOpportunity
          ? l(
              "El margen visible no cuenta toda la historia.",
              "The visible margin does not tell the whole story.",
            )
          : l(
              "El resultado depende más del costo que de trabajo pendiente.",
              "The result depends more on cost than pending work.",
            ),
        description: l(
          `El sistema encontró ${formatNumber(readyHours)} horas ya validadas que todavía no participan en el resultado del periodo.`,
          `The system found ${formatNumber(readyHours)} already validated hours that are not yet reflected in the period result.`,
        ),
        primary: {
          label: l("Margen visible", "Visible margin"),
          value: `${formatNumber(currentMargin, 1)}%`,
          progress: clamp(currentMargin * 2.2),
        },
        secondary: {
          label: l("Margen protegido", "Protected margin"),
          value: `${formatNumber(protectedMargin, 1)}%`,
        },
        impact: {
          label: l("Valor por activar", "Value to activate"),
          value: `$${formatNumber(recoverable)}k`,
        },
        priority: hasOpportunity
          ? l("Liberar trabajo validado para facturación", "Release validated work for billing")
          : l("Revisar estructura de costo del periodo", "Review the period cost structure"),
        explanation: l(
          `Al incorporar únicamente trabajo que ya pasó validación, el margen potencial cambia ${formatNumber(Math.max(0, marginGain), 1)} puntos. No se agregó ninguna suposición al cálculo.`,
          `By incorporating only work that already passed validation, potential margin changes by ${formatNumber(Math.max(0, marginGain), 1)} points. No assumption was added to the calculation.`,
        ),
        nextStep: l(
          "Preparar el lote de partidas listas, asignar responsable y solicitar aprobación para liberar la facturación.",
          "Prepare the batch of ready entries, assign an owner, and request approval to release billing.",
        ),
      };
    },
  },
  {
    id: "talent",
    label: l("Cobertura de talento", "Talent coverage"),
    context: l("Dirección de talento", "Talent leadership"),
    question: l(
      "¿La organización tiene cobertura real para sus posiciones críticas?",
      "Does the organization have real coverage for its critical positions?",
    ),
    inputs: [
      {
        id: "criticalRoles",
        label: l("Posiciones críticas", "Critical positions"),
        helper: l("Alcance analizado", "Analyzed scope"),
        min: 8,
        max: 30,
        step: 1,
        unit: l("posiciones", "positions"),
      },
      {
        id: "candidates",
        label: l("Candidatos identificados", "Identified candidates"),
        helper: l("Con señales disponibles", "With available signals"),
        min: 0,
        max: 24,
        step: 1,
        unit: l("personas", "people"),
      },
      {
        id: "completeEvidence",
        label: l("Expedientes completos", "Complete profiles"),
        helper: l("Listos para evaluación", "Ready for assessment"),
        min: 0,
        max: 24,
        step: 1,
        unit: l("expedientes", "profiles"),
      },
    ],
    defaults: { criticalRoles: 18, candidates: 11, completeEvidence: 7 },
    calculate: ({ criticalRoles, candidates, completeEvidence }) => {
      const identified = Math.min(candidates, criticalRoles);
      const validated = Math.min(completeEvidence, identified);
      const coverage = clamp((validated / criticalRoles) * 100);
      const potentialCoverage = clamp((identified / criticalRoles) * 100);
      const missingEvidence = Math.max(0, identified - validated);
      const uncovered = Math.max(0, criticalRoles - validated);

      return {
        state: coverage < 45 ? "attention" : coverage < 75 ? "opportunity" : "stable",
        stateLabel:
          coverage < 45
            ? l("Cobertura insuficiente", "Insufficient coverage")
            : coverage < 75
              ? l("Cobertura por consolidar", "Coverage to consolidate")
              : l("Cobertura sólida", "Strong coverage"),
        headline:
          missingEvidence > 0
            ? l(
                "Hay capacidad identificada, pero todavía no es una decisión defendible.",
                "Capacity has been identified, but it is not yet a defensible decision.",
              )
            : l(
                "La cobertura visible ya puede pasar a revisión.",
                "Visible coverage can now move to review.",
              ),
        description: l(
          `${formatNumber(missingEvidence)} candidatos tienen señales, pero aún no cuentan con un expediente completo.`,
          `${formatNumber(missingEvidence)} candidates have signals but do not yet have a complete profile.`,
        ),
        primary: {
          label: l("Cobertura validada", "Validated coverage"),
          value: `${formatNumber(coverage)}%`,
          progress: coverage,
        },
        secondary: {
          label: l("Cobertura posible", "Potential coverage"),
          value: `${formatNumber(potentialCoverage)}%`,
        },
        impact: {
          label: l("Brecha actual", "Current gap"),
          value: l(`${uncovered} posiciones`, `${uncovered} positions`),
        },
        priority:
          missingEvidence > 0
            ? l("Completar evidencia antes de recomendar", "Complete evidence before recommending")
            : l("Revisar cobertura con responsables", "Review coverage with accountable owners"),
        explanation: l(
          `El cálculo separa candidatos identificados de candidatos realmente evaluables. Completar ${formatNumber(missingEvidence)} expedientes puede elevar la cobertura de ${formatNumber(coverage)}% a ${formatNumber(potentialCoverage)}%.`,
          `The calculation separates identified candidates from candidates who can actually be assessed. Completing ${formatNumber(missingEvidence)} profiles can raise coverage from ${formatNumber(coverage)}% to ${formatNumber(potentialCoverage)}%.`,
        ),
        nextStep: l(
          "Crear solicitudes de evidencia faltante y abrir la revisión únicamente para los casos completos.",
          "Create requests for missing evidence and open review only for complete cases.",
        ),
      };
    },
  },
  {
    id: "operations",
    label: l("Continuidad operativa", "Operational continuity"),
    context: l("Control de operaciones", "Operations control"),
    question: l(
      "¿Qué señal debe atenderse antes de afectar el servicio?",
      "Which signal must be addressed before it affects service?",
    ),
    inputs: [
      {
        id: "runs",
        label: l("Procesos del periodo", "Period processes"),
        helper: l("Ejecuciones observadas", "Observed runs"),
        min: 20,
        max: 90,
        step: 2,
        unit: l("procesos", "processes"),
      },
      {
        id: "delays",
        label: l("Actualizaciones demoradas", "Delayed updates"),
        helper: l("Fuera de ventana", "Outside the window"),
        min: 0,
        max: 18,
        step: 1,
        unit: l("eventos", "events"),
      },
      {
        id: "retries",
        label: l("Reintentos acumulados", "Accumulated retries"),
        helper: l("En el mismo flujo", "In the same workflow"),
        min: 0,
        max: 12,
        step: 1,
        unit: l("reintentos", "retries"),
      },
    ],
    defaults: { runs: 48, delays: 7, retries: 4 },
    calculate: ({ runs, delays, retries }) => {
      const affected = Math.min(runs, delays + Math.ceil(retries / 2));
      const continuity = clamp(100 - (affected / runs) * 100);
      const recoverable = Math.max(0, delays - Math.floor(retries / 3));

      return {
        state: continuity < 78 ? "attention" : continuity < 92 ? "opportunity" : "stable",
        stateLabel:
          continuity < 78
            ? l("Intervención prioritaria", "Priority intervention")
            : continuity < 92
              ? l("Corrección preventiva", "Preventive correction")
              : l("Operación estable", "Stable operation"),
        headline:
          retries > 2
            ? l(
                "El problema no es el volumen: es una dependencia que repite el bloqueo.",
                "The problem is not volume: it is a dependency that repeats the blockage.",
              )
            : l(
                "La continuidad está dentro del rango esperado.",
                "Continuity is within the expected range.",
              ),
        description: l(
          `${formatNumber(affected)} de ${formatNumber(runs)} procesos muestran una señal que puede corregirse antes de la siguiente ventana.`,
          `${formatNumber(affected)} of ${formatNumber(runs)} processes show a signal that can be corrected before the next window.`,
        ),
        primary: {
          label: l("Continuidad calculada", "Calculated continuity"),
          value: `${formatNumber(continuity)}%`,
          progress: continuity,
        },
        secondary: {
          label: l("Procesos en atención", "Processes needing attention"),
          value: formatNumber(affected),
        },
        impact: {
          label: l("Recuperables ahora", "Recoverable now"),
          value: formatNumber(recoverable),
        },
        priority:
          retries > 2
            ? l("Corregir la dependencia que acumula reintentos", "Correct the dependency accumulating retries")
            : l("Mantener observación en la siguiente ventana", "Maintain observation in the next window"),
        explanation: l(
          `El patrón concentra ${formatNumber(retries)} reintentos dentro del mismo flujo. Resolver la dependencia primero evita tratar cada demora como un incidente aislado.`,
          `The pattern concentrates ${formatNumber(retries)} retries within the same workflow. Resolving the dependency first avoids treating each delay as an isolated incident.`,
        ),
        nextStep: l(
          "Preparar diagnóstico, responsable y ventana de corrección; ejecutar únicamente después de aprobación.",
          "Prepare the diagnosis, owner, and correction window; execute only after approval.",
        ),
      };
    },
  },
];

const RUN_STEPS = [
  l("Leyendo señales del caso", "Reading case signals"),
  l("Resolviendo relaciones", "Resolving relationships"),
  l("Preparando una decisión clara", "Preparing a clear decision"),
];

export function DecisionAgentsDemo() {
  const [scenarioId, setScenarioId] = useState(SCENARIOS[0].id);
  const scenario = SCENARIOS.find((item) => item.id === scenarioId) ?? SCENARIOS[0];
  const [values, setValues] = useState<Record<string, number>>(scenario.defaults);
  const [analyzedResult, setAnalyzedResult] = useState<DecisionResult>(() =>
    scenario.calculate(scenario.defaults),
  );
  const [status, setStatus] = useState<"ready" | "dirty" | "running">("ready");
  const [phase, setPhase] = useState(RUN_STEPS.length);
  const timerRef = useRef<number | null>(null);

  const liveResult = useMemo(() => scenario.calculate(values), [scenario, values]);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => clearTimer, []);

  const selectScenario = (nextId: string) => {
    const nextScenario = SCENARIOS.find((item) => item.id === nextId) ?? SCENARIOS[0];
    clearTimer();
    setScenarioId(nextScenario.id);
    setValues(nextScenario.defaults);
    setAnalyzedResult(nextScenario.calculate(nextScenario.defaults));
    setStatus("ready");
    setPhase(RUN_STEPS.length);
  };

  const updateValue = (inputId: string, value: number) => {
    clearTimer();
    setValues((current) => ({ ...current, [inputId]: value }));
    setStatus("dirty");
    setPhase(0);
  };

  const adjustValue = (input: InputDefinition, direction: -1 | 1) => {
    const current = values[input.id] ?? input.min;
    updateValue(
      input.id,
      clamp(current + input.step * direction, input.min, input.max),
    );
  };

  const resetScenario = () => {
    clearTimer();
    setValues(scenario.defaults);
    setAnalyzedResult(scenario.calculate(scenario.defaults));
    setStatus("ready");
    setPhase(RUN_STEPS.length);
  };

  const runAnalysis = () => {
    clearTimer();
    const nextResult = scenario.calculate(values);
    setStatus("running");
    setPhase(0);
    let nextPhase = 0;

    timerRef.current = window.setInterval(() => {
      nextPhase += 1;
      setPhase(nextPhase);
      if (nextPhase >= RUN_STEPS.length) {
        clearTimer();
        setAnalyzedResult(nextResult);
        setStatus("ready");
      }
    }, 620);
  };

  const progress =
    status === "ready"
      ? 100
      : status === "running"
        ? Math.max(12, ((phase + 1) / RUN_STEPS.length) * 100)
        : 0;

  return (
    <Section id="demo-interactiva" className="bg-ink-50">
      <SectionHeader
        eyebrow={l("Laboratorio de decisión", "Decision lab")}
        title={l(
          "Entra al sistema. Cambia el caso. Mira cómo responde.",
          "Enter the system. Change the case. See how it responds.",
        )}
        description={l(
          "Una experiencia compacta del producto: el núcleo calcula el escenario, revela lo importante y la inteligencia generativa lo convierte en una decisión lista para revisión.",
          "A compact product experience: the core calculates the scenario, reveals what matters, and generative intelligence turns it into a decision ready for review.",
        )}
      />

      <div className="mt-10 overflow-hidden rounded-[2rem] border border-ink-200 bg-white shadow-elevate">
        <div className="grid lg:grid-cols-[13.5rem_minmax(0,1fr)]">
          <aside className="hidden min-h-[52rem] flex-col bg-[radial-gradient(circle_at_top_left,rgba(91,225,196,0.18),transparent_32%),linear-gradient(180deg,#111f38_0%,#08111f_100%)] p-5 text-white lg:flex">
            <div className="flex items-center gap-3 border-b border-white/10 pb-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-400 text-ink-950">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold">Decision Lab</p>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                  {l("Modo demostración", "Demonstration mode")}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink-500">
                {l("Caso activo", "Active case")}
              </p>
              <div className="mt-3 space-y-2" role="group" aria-label={l("Caso de demostración", "Demonstration case")}>
                {SCENARIOS.map((item) => {
                  const selected = item.id === scenarioId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => selectScenario(item.id)}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400",
                        selected
                          ? "bg-white text-ink-950"
                          : "text-ink-300 hover:bg-white/10 hover:text-white",
                      )}
                    >
                      <span className={cn("h-1.5 w-1.5 rounded-full", selected ? "bg-brand-500" : "bg-ink-600")} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink-500">
                {l("Ciclo de decisión", "Decision cycle")}
              </p>
              <ol className="mt-4 space-y-1">
                {[
                  l("Condiciones", "Conditions"),
                  l("Cálculo", "Calculation"),
                  l("Comprensión", "Understanding"),
                  l("Acción", "Action"),
                ].map((label, index) => {
                  const complete = status === "ready" || index < 2;
                  const active =
                    (status === "dirty" && index === 1) ||
                    (status === "running" && index === Math.min(phase + 1, 3));
                  return (
                    <li key={label} className="relative flex items-center gap-3 py-2 text-xs">
                      {index < 3 ? (
                        <span className="absolute left-[0.3rem] top-6 h-4 w-px bg-white/10" />
                      ) : null}
                      <span
                        className={cn(
                          "relative h-2.5 w-2.5 rounded-full border",
                          active
                            ? "border-accent-400 bg-accent-400 shadow-[0_0_0_4px_rgba(91,225,196,0.12)]"
                            : complete
                              ? "border-brand-400 bg-brand-400"
                              : "border-ink-600 bg-ink-800",
                        )}
                      />
                      <span className={active || complete ? "text-white" : "text-ink-500"}>{label}</span>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-accent-400">
                {l("Entorno seguro", "Safe environment")}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-ink-400">
                {l("Datos ficticios. Ninguna acción sale de esta demostración.", "Fictional data. No action leaves this demonstration.")}
              </p>
            </div>
          </aside>

          <div className="min-w-0 bg-[#f4f7fb] text-ink-950">
            <header className="border-b border-ink-100 bg-white px-4 py-5 sm:px-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-accent-500" />
                    {l("Motor activo · respuesta en vivo", "Engine active · live response")}
                  </div>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                    {scenario.context}
                  </p>
                  <h3 className="mt-2 max-w-3xl font-display text-xl font-semibold leading-snug text-ink-950 sm:text-2xl">
                    {scenario.question}
                  </h3>
                </div>
                <StatusPill result={liveResult} dirty={status === "dirty"} />
              </div>

              <div className="mt-5 flex flex-wrap gap-2 lg:hidden" role="group" aria-label={l("Caso de demostración", "Demonstration case")}>
                {SCENARIOS.map((item) => {
                  const selected = item.id === scenarioId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => selectScenario(item.id)}
                      className={cn(
                        "rounded-full border px-3 py-2 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500",
                        selected
                          ? "border-ink-950 bg-ink-950 text-white"
                          : "border-ink-200 bg-white text-ink-600",
                      )}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </header>

            <div className="p-4 sm:p-6">
              <div className="grid gap-4 xl:grid-cols-[0.78fr_1.22fr]">
                <article className="rounded-2xl border border-ink-100 bg-white p-5 shadow-soft">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                        {l("Condiciones del caso", "Case conditions")}
                      </p>
                      <h4 className="mt-1.5 font-display text-lg font-semibold text-ink-950">
                        {l("Modifica el escenario", "Modify the scenario")}
                      </h4>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <SlidersHorizontal className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="mt-6 space-y-6">
                    {scenario.inputs.map((input) => {
                      const value = values[input.id] ?? input.min;
                      const fill = ((value - input.min) / (input.max - input.min)) * 100;
                      return (
                        <div key={input.id}>
                          <label htmlFor={`demo-${input.id}`} className="block">
                            <span className="block text-sm font-semibold text-ink-900">{input.label}</span>
                            <span className="mt-0.5 block text-xs text-ink-500">{input.helper}</span>
                          </label>
                          <div className="mt-3 flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => adjustValue(input, -1)}
                              disabled={value <= input.min || status === "running"}
                              aria-label={l(`Reducir ${input.label}`, `Decrease ${input.label}`)}
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-ink-200 bg-ink-50 text-ink-600 transition-colors hover:border-ink-300 hover:bg-ink-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:cursor-not-allowed disabled:opacity-35"
                            >
                              <Minus className="h-4 w-4" aria-hidden="true" />
                            </button>
                            <div className="min-w-0 flex-1 text-center">
                              <span className="font-display text-xl font-semibold text-brand-700">{formatNumber(value)}</span>
                              <span className="ml-1.5 text-[9px] font-semibold uppercase tracking-wide text-ink-400">{input.unit}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => adjustValue(input, 1)}
                              disabled={value >= input.max || status === "running"}
                              aria-label={l(`Aumentar ${input.label}`, `Increase ${input.label}`)}
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-ink-200 bg-ink-50 text-ink-600 transition-colors hover:border-ink-300 hover:bg-ink-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:cursor-not-allowed disabled:opacity-35"
                            >
                              <Plus className="h-4 w-4" aria-hidden="true" />
                            </button>
                          </div>
                          <input
                            id={`demo-${input.id}`}
                            type="range"
                            min={input.min}
                            max={input.max}
                            step={input.step}
                            value={value}
                            onChange={(event) => updateValue(input.id, Number(event.target.value))}
                            className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-ink-100 accent-brand-600"
                            style={{ background: `linear-gradient(90deg, rgb(59 101 245) ${fill}%, rgb(226 232 240) ${fill}%)` }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-7 grid gap-2 sm:grid-cols-[1fr_auto]">
                    <button
                      type="button"
                      onClick={runAnalysis}
                      disabled={status === "running"}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:cursor-wait disabled:opacity-70"
                    >
                      <Play className="h-4 w-4" aria-hidden="true" />
                      {status === "running" ? RUN_STEPS[Math.min(phase, RUN_STEPS.length - 1)] : l("Resolver escenario", "Resolve scenario")}
                    </button>
                    <button
                      type="button"
                      onClick={resetScenario}
                      disabled={status === "running"}
                      aria-label={l("Restablecer escenario", "Reset scenario")}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink-600 transition-colors hover:bg-ink-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:opacity-50"
                    >
                      <RotateCcw className="h-4 w-4" aria-hidden="true" />
                      <span className="sm:hidden xl:inline">{l("Restablecer", "Reset")}</span>
                    </button>
                  </div>
                </article>

                <article className="rounded-2xl border border-ink-100 bg-white p-5 shadow-soft sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-100 text-accent-700">
                        <Calculator className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-700">
                          {l("Núcleo de cálculo", "Calculation core")}
                        </p>
                        <h4 className="mt-1.5 font-display text-xl font-semibold text-ink-950">
                          {l("Calcula antes de explicar", "It calculates before it explains")}
                        </h4>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-600">
                          {l("Aplica relaciones y límites del negocio. No improvisa ni completa lo que falta.", "It applies business relationships and limits. It does not improvise or fill in what is missing.")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 grid items-center gap-6 sm:grid-cols-[10.5rem_1fr]">
                    <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full p-3 transition-[background] duration-500" style={{ background: `conic-gradient(rgb(91 225 196) ${liveResult.primary.progress}%, rgb(226 232 240) ${liveResult.primary.progress}%)` }}>
                      <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white text-center shadow-inner">
                        <Gauge className="h-5 w-5 text-brand-600" aria-hidden="true" />
                        <p className="mt-2 font-display text-3xl font-semibold text-ink-950">{liveResult.primary.value}</p>
                        <p className="mt-1 max-w-24 text-[10px] font-semibold uppercase leading-tight tracking-[0.12em] text-ink-400">{liveResult.primary.label}</p>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <MetricCard icon={Activity} label={liveResult.secondary.label} value={liveResult.secondary.value} />
                      <MetricCard icon={ArrowUpRight} label={liveResult.impact.label} value={liveResult.impact.value} />
                      <div className="rounded-xl border border-ink-100 bg-ink-50 p-4 sm:col-span-2">
                        <div className="flex items-center justify-between gap-4">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                            {status === "dirty" ? l("Caso modificado", "Case modified") : status === "running" ? RUN_STEPS[Math.min(phase, RUN_STEPS.length - 1)] : l("Resultado resuelto", "Result resolved")}
                          </p>
                          <span className="text-xs font-semibold text-brand-700">{Math.round(progress)}%</span>
                        </div>
                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink-200">
                          <div className="h-full rounded-full bg-gradient-to-r from-brand-600 to-accent-500 transition-[width] duration-500" style={{ width: `${progress}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              <article className="relative mt-4 overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_top_right,rgba(91,225,196,0.16),transparent_36%),linear-gradient(135deg,#111f38_0%,#08111f_100%)] p-5 text-white shadow-soft sm:p-6">
                <div className="flex flex-col items-start gap-4 sm:flex-row">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white shadow-lg shadow-brand-500/20">
                    <BrainCircuit className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-300">
                          {l("Inteligencia generativa", "Generative intelligence")}
                        </p>
                        <h4 className="mt-1.5 font-display text-xl font-semibold text-white">
                          {l("Estudia el resultado. Completa la decisión.", "It studies the result. It completes the decision.")}
                        </h4>
                      </div>
                      {status === "ready" ? (
                        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-accent-400/25 bg-accent-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-400">
                          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                          {l("Decisión preparada", "Decision prepared")}
                        </span>
                      ) : null}
                    </div>
                    <GenerativeResult status={status} phase={phase} result={analyzedResult} />
                  </div>
                </div>
              </article>

              <div className="mt-4 flex flex-col gap-3 rounded-xl border border-ink-100 bg-white px-4 py-3 text-xs leading-relaxed text-ink-500 sm:flex-row sm:items-center sm:justify-between">
                <p>{l("Caso simulado con datos ficticios. Los controles alteran el cálculo y la recomendación.", "Simulated case with fictional data. Controls alter the calculation and recommendation.")}</p>
                <p className="inline-flex shrink-0 items-center gap-2 font-semibold text-ink-700">
                  <ShieldCheck className="h-4 w-4 text-accent-600" aria-hidden="true" />
                  {l("Nada se ejecuta sin aprobación", "Nothing executes without approval")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function StatusPill({ result, dirty }: { result: DecisionResult; dirty: boolean }) {
  const color =
    result.state === "attention"
      ? "border-rose-200 bg-rose-50 text-rose-700"
      : result.state === "opportunity"
        ? "border-amber-200 bg-amber-50 text-amber-700"
        : "border-emerald-200 bg-emerald-50 text-emerald-700";

  return (
    <span
      className={cn(
        "inline-flex w-fit shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em]",
        dirty ? "border-ink-200 bg-ink-50 text-ink-600" : color,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {dirty ? l("Por recalcular", "Pending recalculation") : result.stateLabel}
    </span>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  progress,
}: {
  icon: typeof Gauge;
  label: string;
  value: string;
  progress?: number;
}) {
  return (
    <div className="rounded-xl border border-ink-100 bg-ink-50 p-4">
      <div className="flex items-center justify-between gap-3">
        <Icon className="h-4 w-4 text-brand-600" aria-hidden="true" />
        {progress !== undefined ? (
          <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-400">
            {l("En vivo", "Live")}
          </span>
        ) : null}
      </div>
      <p className="mt-4 font-display text-2xl font-semibold text-ink-950">{value}</p>
      <p className="mt-1 text-xs leading-relaxed text-ink-500">{label}</p>
      {progress !== undefined ? (
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-ink-200">
          <div
            className="h-full rounded-full bg-accent-500 transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      ) : null}
    </div>
  );
}

function GenerativeResult({
  status,
  phase,
  result,
}: {
  status: "ready" | "dirty" | "running";
  phase: number;
  result: DecisionResult;
}) {
  if (status === "dirty") {
    return (
      <div className="mt-5 rounded-xl border border-dashed border-white/15 bg-ink-950/30 p-5">
        <div className="flex items-start gap-3">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-200" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-white">
              {l("El caso cambió.", "The case changed.")}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink-300">
              {l(
                "El núcleo ya refleja los nuevos valores. Ejecuta el análisis para que la capa generativa estudie el resultado actualizado.",
                "The core already reflects the new values. Run the analysis so the generative layer can study the updated result.",
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (status === "running") {
    return (
      <div className="mt-5 rounded-xl border border-brand-400/20 bg-ink-950/30 p-5">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-60" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-400" />
          </span>
          <p className="text-sm font-semibold text-white">
            {RUN_STEPS[Math.min(phase, RUN_STEPS.length - 1)]}
          </p>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {RUN_STEPS.map((step, index) => (
            <div key={step}>
              <div
                className={cn(
                  "h-1 rounded-full transition-colors",
                  phase >= index ? "bg-brand-400" : "bg-white/10",
                )}
              />
              <p className="mt-2 hidden text-[9px] font-medium leading-tight text-ink-500 sm:block">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-5">
      <div className="rounded-xl border border-white/10 bg-ink-950/35 p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-300">
          {result.stateLabel}
        </p>
        <h4 className="mt-2 font-display text-lg font-semibold leading-snug text-white sm:text-xl">
          {result.headline}
        </h4>
        <p className="mt-3 text-sm leading-relaxed text-ink-300">{result.description}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-300">{result.explanation}</p>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]">
        <div className="rounded-xl border border-accent-400/20 bg-accent-400/10 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent-400">
            {l("Prioridad recomendada", "Recommended priority")}
          </p>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-white">
            {result.priority}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-ink-300">{result.nextStep}</p>
        </div>
        <div className="flex min-w-44 items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
          <ShieldCheck className="h-5 w-5 shrink-0 text-accent-400" aria-hidden="true" />
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">
              {l("Control", "Control")}
            </p>
            <p className="mt-1 text-xs font-semibold text-white">
              {l("Requiere aprobación", "Requires approval")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
