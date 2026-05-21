"use client";

import {
  CheckCircle2,
  ChevronRight,
  Cpu,
  FileText,
  Loader2,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const QUESTION =
  "Show me March financial closing items not reconciled between SAP FI and bank statements. Prepare an executive summary for Finance.";

const STATUSES = [
  "Analyzing request…",
  "Checking permissions…",
  "Connecting to sources…",
];

const SOURCES = [
  "SAP FI",
  "Bank Statement",
  "SQL Database",
  "Reporting Layer",
  "Approval Rules",
  "Audit Log",
];

const RESULTS = [
  "3 unreconciled items found",
  "2 require review",
  "1 needs approval before action",
  "Sources verified",
];

type TableRow = {
  item: string;
  source: string;
  status: string;
  action: string;
  tone: "warn" | "info" | "approve";
};

const TABLE_ROWS: TableRow[] = [
  {
    item: "Vendor payment",
    source: "SAP FI + Bank",
    status: "Unmatched",
    action: "Review",
    tone: "warn",
  },
  {
    item: "Bank fee",
    source: "Bank only",
    status: "Missing in SAP",
    action: "Draft adjustment",
    tone: "info",
  },
  {
    item: "Manual entry",
    source: "SAP FI",
    status: "Needs approval",
    action: "Request approval",
    tone: "approve",
  },
];

const AUDIT: { label: string; value: string }[] = [
  { label: "User", value: "Authorized · Finance" },
  { label: "Timestamp", value: "Mar 7, 2026 · 09:42" },
  { label: "Sources", value: "SAP FI · Bank · DB" },
  { label: "Permission check", value: "Passed" },
  { label: "Draft generated", value: "Executive summary v1" },
  { label: "Approval pending", value: "Routed to CFO Office" },
];

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export function AnimatedCopilotDemo() {
  const reduced = useReducedMotion();
  const [typed, setTyped] = useState("");
  const [statusIdx, setStatusIdx] = useState(0);
  const [sourceCount, setSourceCount] = useState(0);
  const [resultCount, setResultCount] = useState(0);
  const [tableCount, setTableCount] = useState(0);
  const [draftVisible, setDraftVisible] = useState(false);
  const [auditCount, setAuditCount] = useState(0);
  const [done, setDone] = useState(false);
  const [runKey, setRunKey] = useState(0);
  const mountedRef = useRef(true);

  const reset = useCallback(() => {
    setTyped("");
    setStatusIdx(0);
    setSourceCount(0);
    setResultCount(0);
    setTableCount(0);
    setDraftVisible(false);
    setAuditCount(0);
    setDone(false);
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (reduced) {
      setTyped(QUESTION);
      setStatusIdx(STATUSES.length);
      setSourceCount(SOURCES.length);
      setResultCount(RESULTS.length);
      setTableCount(TABLE_ROWS.length);
      setDraftVisible(true);
      setAuditCount(AUDIT.length);
      setDone(true);
      return;
    }

    let alive = true;
    reset();

    const run = async () => {
      // Step 1 — typewriter
      for (let i = 1; i <= QUESTION.length; i++) {
        if (!alive || !mountedRef.current) return;
        setTyped(QUESTION.slice(0, i));
        await sleep(22);
      }

      // Step 2 — statuses
      for (let i = 1; i <= STATUSES.length; i++) {
        if (!alive || !mountedRef.current) return;
        await sleep(550);
        setStatusIdx(i);
      }

      // Step 3 — source badges
      for (let i = 1; i <= SOURCES.length; i++) {
        if (!alive || !mountedRef.current) return;
        await sleep(220);
        setSourceCount(i);
      }

      // Step 4 — results
      for (let i = 1; i <= RESULTS.length; i++) {
        if (!alive || !mountedRef.current) return;
        await sleep(260);
        setResultCount(i);
      }

      // Step 5 — table
      for (let i = 1; i <= TABLE_ROWS.length; i++) {
        if (!alive || !mountedRef.current) return;
        await sleep(420);
        setTableCount(i);
      }

      // Step 6 — draft
      if (!alive || !mountedRef.current) return;
      await sleep(700);
      setDraftVisible(true);

      // Step 7 — audit trail
      for (let i = 1; i <= AUDIT.length; i++) {
        if (!alive || !mountedRef.current) return;
        await sleep(200);
        setAuditCount(i);
      }

      if (!alive || !mountedRef.current) return;
      await sleep(400);
      setDone(true);
    };

    void run();
    return () => {
      alive = false;
    };
  }, [reduced, runKey, reset]);

  const replay = () => {
    reset();
    setRunKey((k) => k + 1);
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-ink-100 bg-white text-ink-900 shadow-elevate"
      aria-label="Enterprise Copilot illustrative demo"
    >
      <div className="flex items-center justify-between gap-3 border-b border-ink-100 bg-ink-50/80 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          <span className="ml-3 inline-flex items-center gap-1.5 text-xs font-medium text-ink-500">
            <Sparkles className="h-3 w-3 text-brand-700" />
            Enterprise Copilot · Illustrative demo
          </span>
        </div>
        <button
          type="button"
          onClick={replay}
          className="inline-flex items-center gap-1.5 rounded-md border border-ink-200 bg-white px-2.5 py-1 text-[11px] font-medium text-ink-700 hover:border-ink-300 hover:text-ink-900"
          aria-label="Replay demo"
        >
          <RotateCcw className="h-3 w-3" />
          Replay demo
        </button>
      </div>

      {/* Status badges that light up as the demo progresses */}
      {(() => {
        const permissionVerified = statusIdx >= STATUSES.length;
        const sourcesConnected = sourceCount >= SOURCES.length;
        const evidenceReady = tableCount >= TABLE_ROWS.length;
        const approvalPending = auditCount >= AUDIT.length;
        const statusBadges = [
          { label: "Permission Verified", on: permissionVerified },
          { label: "Sources Connected", on: sourcesConnected },
          { label: "Evidence Ready", on: evidenceReady },
          { label: "Approval Pending", on: approvalPending },
        ];
        return (
          <ul className="flex flex-wrap gap-1.5 border-b border-ink-100 bg-white px-4 py-2.5 sm:px-5">
            {statusBadges.map((b) => (
              <li
                key={b.label}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold tracking-[0.06em] transition-colors duration-300",
                  b.on
                    ? "border-accent-400/50 bg-accent-400/10 text-accent-600"
                    : "border-ink-100 bg-ink-50 text-ink-400",
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors duration-300",
                    b.on ? "bg-accent-500" : "bg-ink-300",
                  )}
                />
                {b.label}
              </li>
            ))}
          </ul>
        );
      })()}

      <div className="space-y-3 p-4 sm:p-5">
        {/* User question */}
        <div className="rounded-xl border border-ink-100 bg-ink-50 p-4 text-sm text-ink-800">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-500">
            User · Finance
          </p>
          <p className="mt-2 leading-relaxed">
            {typed}
            {typed.length < QUESTION.length && !reduced ? (
              <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-ink-400" />
            ) : null}
          </p>
        </div>

        {/* Statuses */}
        {typed.length === QUESTION.length ? (
          <ul className="space-y-1.5 text-xs text-ink-600" aria-live="polite">
            {STATUSES.map((s, i) => {
              const visible = i < statusIdx;
              const active = i === statusIdx - 1 && statusIdx < STATUSES.length;
              return visible ? (
                <li
                  key={s}
                  className="flex items-center gap-2 transition-opacity duration-300"
                >
                  {active ? (
                    <Loader2 className="h-3 w-3 animate-spin text-brand-700" />
                  ) : (
                    <CheckCircle2 className="h-3 w-3 text-brand-700" />
                  )}
                  <span>{s}</span>
                </li>
              ) : null;
            })}
          </ul>
        ) : null}

        {/* Sources */}
        {sourceCount > 0 ? (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">
              Sources connected
            </p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {SOURCES.map((s, i) => (
                <li
                  key={s}
                  className={cn(
                    "rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition-all duration-300",
                    i < sourceCount
                      ? "border-brand-200 bg-brand-50 text-brand-800 opacity-100 translate-y-0"
                      : "border-ink-100 bg-ink-50 text-ink-300 opacity-0 -translate-y-1",
                  )}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Results */}
        {resultCount > 0 ? (
          <ul className="grid grid-cols-2 gap-1.5 pt-1" aria-live="polite">
            {RESULTS.map((r, i) => (
              <li
                key={r}
                className={cn(
                  "flex items-start gap-1.5 rounded-md border border-ink-100 bg-white px-2 py-1.5 text-[11px] text-ink-700 transition-all duration-300",
                  i < resultCount
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1",
                )}
              >
                <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-brand-700" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {/* Table */}
        {tableCount > 0 ? (
          <div className="overflow-hidden rounded-xl border border-ink-100">
            <div className="grid grid-cols-[1.2fr_1fr_1fr_1.1fr] gap-2 border-b border-ink-100 bg-ink-50 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">
              <div>Item</div>
              <div>Source</div>
              <div>Status</div>
              <div>Action</div>
            </div>
            <ul className="divide-y divide-ink-100">
              {TABLE_ROWS.map((row, i) => (
                <li
                  key={row.item}
                  className={cn(
                    "grid grid-cols-[1.2fr_1fr_1fr_1.1fr] gap-2 px-3 py-2 text-[11px] transition-all duration-400",
                    i < tableCount
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-1",
                  )}
                >
                  <div className="font-semibold text-ink-900">{row.item}</div>
                  <div className="text-ink-600">{row.source}</div>
                  <div>
                    <span
                      className={cn(
                        "inline-flex rounded-full border px-2 py-0.5 text-[10px] font-medium",
                        row.tone === "warn" &&
                          "border-amber-200 bg-amber-50 text-amber-700",
                        row.tone === "info" &&
                          "border-brand-200 bg-brand-50 text-brand-800",
                        row.tone === "approve" &&
                          "border-accent-400/40 bg-accent-400/10 text-accent-600",
                      )}
                    >
                      {row.status}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1 text-ink-700">
                    {row.action}
                    <ChevronRight className="h-3 w-3 text-ink-400" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Draft */}
        {draftVisible ? (
          <div className="rounded-xl border border-brand-200 bg-brand-50/60 p-3 text-xs text-brand-900 transition-all duration-500">
            <div className="flex items-center gap-1.5">
              <FileText className="h-3.5 w-3.5 text-brand-700" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                Draft prepared
              </p>
            </div>
            <p className="mt-1.5 leading-relaxed">
              Executive summary prepared.{" "}
              <strong>
                No financial adjustment will be executed without approval.
              </strong>
            </p>
          </div>
        ) : null}

        {/* Audit trail */}
        {auditCount > 0 ? (
          <div className="rounded-xl border border-ink-100 bg-white p-3">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-700" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                Audit trail
              </p>
            </div>
            <dl className="mt-2 grid grid-cols-1 gap-x-3 gap-y-1.5 sm:grid-cols-2">
              {AUDIT.map((a, i) => (
                <div
                  key={a.label}
                  className={cn(
                    "flex items-baseline justify-between gap-2 transition-all duration-300",
                    i < auditCount
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-1",
                  )}
                >
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                    {a.label}
                  </dt>
                  <dd className="text-[11px] font-medium text-ink-800">
                    {a.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ) : null}

        {/* Footer status */}
        <div className="flex items-center justify-between gap-2 border-t border-ink-100 pt-3 text-[10px] text-ink-500">
          <span className="inline-flex items-center gap-1.5">
            <Cpu className="h-3 w-3 text-brand-700" />
            Permissions inherited
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Workflow className="h-3 w-3 text-brand-700" />
            {done ? "Awaiting approval" : "Running…"}
          </span>
        </div>
      </div>

      <p className="border-t border-ink-100 bg-ink-50/40 px-4 py-2 text-[10px] leading-relaxed text-ink-500">
        Illustrative demo. Actual behavior depends on configuration, connected
        sources, permissions, and business rules in each implementation.
      </p>
    </div>
  );
}
