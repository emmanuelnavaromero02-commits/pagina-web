import type { Metadata } from "next";
import { ArrowLeft, SearchX } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { l } from "@/lib/i18n/config";

export const metadata: Metadata = {
  title: l("Página no encontrada", "Page not found"),
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[65vh] items-center bg-ink-50 py-20">
      <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-100 text-brand-800">
          <SearchX className="h-8 w-8" aria-hidden="true" />
        </span>
        <p className="mt-6 text-sm font-semibold tracking-[0.18em] text-brand-700">404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink-950">
          {l("Esta página no existe.", "This page does not exist.")}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-ink-600">
          {l(
            "La dirección pudo cambiar o estar incompleta. Vuelve al inicio para continuar.",
            "The address may have changed or be incomplete. Return home to continue.",
          )}
        </p>
        <LinkButton href="/" size="lg" className="mt-8">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {l("Volver al inicio", "Return home")}
        </LinkButton>
      </div>
    </section>
  );
}
