import type { LucideIcon } from "lucide-react";

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon?: LucideIcon;
};

export function ServiceHero({
  eyebrow,
  title,
  description,
  icon: Icon,
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
        </div>
      </div>
    </section>
  );
}
