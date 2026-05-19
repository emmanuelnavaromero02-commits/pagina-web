import { ArrowRight, type LucideIcon } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  badges?: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function ServiceHero({
  eyebrow,
  title,
  description,
  icon: Icon,
  badges,
  primaryCta,
  secondaryCta,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div aria-hidden className="absolute inset-0 bg-brand-radial opacity-70" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700 backdrop-blur">
            {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
            {eyebrow}
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
            {description}
          </p>

          {badges && badges.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {badges.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-brand-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-brand-800 backdrop-blur"
                >
                  {b}
                </li>
              ))}
            </ul>
          ) : null}

          {primaryCta || secondaryCta ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <LinkButton href={primaryCta.href} size="lg">
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </LinkButton>
              ) : null}
              {secondaryCta ? (
                <LinkButton
                  href={secondaryCta.href}
                  size="lg"
                  variant="outline"
                >
                  {secondaryCta.label}
                </LinkButton>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
