"use client";

import { BUILD_LOCALE, l, localizedPath } from "@/lib/i18n/config";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang={BUILD_LOCALE}>
      <body className="min-h-screen bg-white font-sans text-ink-900">
        <main className="flex min-h-screen items-center justify-center px-4 text-center">
          <div className="max-w-xl">
            <h1 className="font-display text-3xl font-semibold">
              {l("Ocurrió un error inesperado.", "An unexpected error occurred.")}
            </h1>
            <p className="mt-3 text-ink-600">
              {l(
                "Puedes reintentar o volver al inicio.",
                "You can try again or return home.",
              )}
            </p>
            <div className="mt-7 flex justify-center gap-3">
              <button
                type="button"
                onClick={reset}
                className="rounded-lg bg-brand-700 px-5 py-3 font-medium text-white"
              >
                {l("Reintentar", "Try again")}
              </button>
              <a
                href={localizedPath(BUILD_LOCALE, "/")}
                className="rounded-lg border border-ink-200 px-5 py-3 font-medium"
              >
                {l("Ir al inicio", "Go home")}
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
