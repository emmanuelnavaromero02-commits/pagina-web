import { ArrowRight, Layers3, ShieldCheck, Waypoints, type LucideIcon } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { l } from "@/lib/i18n/config";

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  badges?: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function ServiceHero({ eyebrow, title, description, icon: Icon, badges, primaryCta, secondaryCta }: ServiceHeroProps) {
  const principles = [
    { icon: Waypoints, label: l("Alcance conectado al proceso", "Scope connected to the process") },
    { icon: Layers3, label: l("Entrega visible por fases", "Visible delivery in stages") },
    { icon: ShieldCheck, label: l("Control y trazabilidad", "Control and traceability") },
  ];

  return (
    <section className="relative bg-ink-50 pb-8 pt-3 sm:pb-12 sm:pt-5">
      <div className="site-container">
        <div className="dark-panel relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-12 text-white shadow-[0_36px_100px_-46px_rgba(11,14,28,0.85)] sm:px-9 sm:py-16 lg:px-12 lg:py-20">
          <div aria-hidden className="surface-noise pointer-events-none absolute inset-0 opacity-[0.1]" />
          <div aria-hidden className="absolute -right-20 -top-32 h-[26rem] w-[26rem] rounded-full border border-white/10" />
          <div aria-hidden className="absolute -right-8 -top-20 h-[18rem] w-[18rem] rounded-full border border-accent-400/15" />

          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(280px,0.55fr)] lg:items-end lg:gap-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent-400">
                {Icon ? <Icon className="h-3.5 w-3.5" aria-hidden="true" /> : <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />}
                {eyebrow}
              </div>
              <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-300 sm:text-lg">
                {description}
              </p>

              {badges && badges.length > 0 ? (
                <ul className="mt-7 flex flex-wrap gap-2">
                  {badges.map((badge) => (
                    <li key={badge} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink-200 backdrop-blur">
                      {badge}
                    </li>
                  ))}
                </ul>
              ) : null}

              {primaryCta || secondaryCta ? (
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  {primaryCta ? (
                    <LinkButton href={primaryCta.href} size="lg">
                      {primaryCta.label}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </LinkButton>
                  ) : null}
                  {secondaryCta ? (
                    <LinkButton href={secondaryCta.href} size="lg" variant="outline" className="border-white/15 bg-white/[0.06] text-white hover:border-white/30 hover:bg-white/10 hover:text-white">
                      {secondaryCta.label}
                    </LinkButton>
                  ) : null}
                </div>
              ) : null}
            </div>

            <aside className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-sm">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-ink-400">
                {l("Principios de entrega", "Delivery principles")}
              </p>
              <ul className="mt-4 divide-y divide-white/10">
                {principles.map((principle) => {
                  const PrincipleIcon = principle.icon;
                  return (
                    <li key={principle.label} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] text-accent-400">
                        <PrincipleIcon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="text-xs font-medium leading-relaxed text-ink-200">{principle.label}</span>
                    </li>
                  );
                })}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
