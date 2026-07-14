"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { l } from "@/lib/i18n/config";

export default function ErrorBoundary({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="flex min-h-[60vh] items-center py-20" role="alert">
      <div className="mx-auto w-full max-w-2xl px-4 text-center sm:px-6">
        <AlertTriangle className="mx-auto h-12 w-12 text-brand-700" aria-hidden="true" />
        <h1 className="mt-5 font-display text-3xl font-semibold text-ink-950">
          {l("No pudimos mostrar esta página.", "We could not display this page.")}
        </h1>
        <p className="mt-3 text-ink-600">
          {l(
            "Inténtalo de nuevo. Si el problema continúa, vuelve al inicio o contáctanos.",
            "Try again. If the problem continues, return home or contact us.",
          )}
        </p>
        <Button type="button" size="lg" onClick={reset} className="mt-7">
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          {l("Reintentar", "Try again")}
        </Button>
      </div>
    </section>
  );
}
