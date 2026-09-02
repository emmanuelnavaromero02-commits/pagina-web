import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  bleed?: boolean;
};

export function Section({
  children,
  className,
  id,
  containerClassName,
  bleed = false,
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-24 lg:py-28", className)}>
      <div
        className={cn(
          !bleed && "site-container",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="eyebrow">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink-950 sm:text-4xl lg:text-[2.8rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
