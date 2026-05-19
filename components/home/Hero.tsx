import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { LinkButton } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div aria-hidden className="absolute inset-0 bg-brand-radial" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(11,14,28,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(11,14,28,0.04)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pb-32 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              {SITE.name} · Mexico &amp; Spain
            </p>

            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink-950 sm:text-5xl lg:text-[3.5rem]">
              <span className="block bg-gradient-to-r from-brand-900 via-brand-600 to-accent-500 bg-clip-text font-bold uppercase tracking-tight text-transparent">
                Intelligent business solutions
              </span>
              <span className="mt-2 block text-balance text-ink-900">
                for companies that need speed, control, and operational AI.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
              We identify where your company is losing time, money, and
              productivity — then deliver focused{" "}
              <strong className="text-ink-900">software</strong>,{" "}
              <strong className="text-ink-900">integration</strong>,{" "}
              <strong className="text-ink-900">automation</strong>, and{" "}
              <strong className="text-ink-900">AI</strong> solutions in weeks,
              not months.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/copilot" size="lg">
                Explore Enterprise Copilot
                <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton href="/contact" variant="outline" size="lg">
                Request a business diagnosis
              </LinkButton>
            </div>

            <Link
              href="/copilot"
              className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-brand-200 bg-white/80 py-1.5 pl-2 pr-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-800 shadow-soft backdrop-blur transition-colors hover:bg-white"
            >
              <span className="flex h-5 items-center gap-1 rounded-full bg-brand-700 px-2 text-[10px] text-white">
                <Sparkles className="h-3 w-3" />
                New
              </span>
              {SITE.product.name}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-ink-100 pt-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Focus
                </dt>
                <dd className="mt-1 text-sm font-medium text-ink-900">
                  SAP · Cloud · AI
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Model
                </dt>
                <dd className="mt-1 text-sm font-medium text-ink-900">
                  Dedicated factory
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Markets
                </dt>
                <dd className="mt-1 text-sm font-medium text-ink-900">
                  Mexico &amp; Spain
                </dd>
              </div>
            </dl>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative animate-fade-up [animation-delay:120ms]">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand-100/60 to-accent-400/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-elevate">
        <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          <span className="ml-3 text-xs font-medium text-ink-500">
            Enterprise Copilot · Conceptual preview
          </span>
        </div>
        <div className="space-y-4 p-5">
          <div className="rounded-xl border border-ink-100 bg-ink-50 px-4 py-3 text-sm text-ink-700">
            What was the March finance closing, and which entries are still
            unreconciled?
          </div>
          <div className="rounded-xl border border-brand-100 bg-white px-4 py-4 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
              Enterprise Copilot
            </p>
            <p className="mt-2 text-sm text-ink-800">
              March closing posted on the 7th. I found{" "}
              <strong>3 entries</strong> unreconciled between SAP FI and the
              bank statement. I prepared the detail and a proposed adjustment
              for your review before applying anything.
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
              <div className="rounded-md bg-ink-50 px-2 py-1.5 text-ink-700">
                <span className="block font-semibold text-ink-900">SAP FI</span>
                3 docs
              </div>
              <div className="rounded-md bg-ink-50 px-2 py-1.5 text-ink-700">
                <span className="block font-semibold text-ink-900">Bank</span>
                3 entries
              </div>
              <div className="rounded-md bg-accent-400/15 px-2 py-1.5 text-accent-600">
                <span className="block font-semibold">Status</span>
                Ready to review
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-ink-500">
            <span className="rounded-full bg-ink-100 px-2 py-0.5">SAP</span>
            <span className="rounded-full bg-ink-100 px-2 py-0.5">
              Database
            </span>
            <span className="rounded-full bg-ink-100 px-2 py-0.5">API</span>
            <span className="rounded-full bg-ink-100 px-2 py-0.5">
              Executive report
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
