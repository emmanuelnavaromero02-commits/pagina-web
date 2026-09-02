import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section" | "li";
  interactive?: boolean;
  id?: string;
};

export function Card({
  children,
  className,
  as = "div",
  interactive = false,
  id,
}: CardProps) {
  const Tag = as;
  return (
    <Tag
      id={id}
      className={cn(
        "rounded-3xl border border-ink-100/90 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(11,14,28,0.4)]",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-float",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function CardTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "font-display text-lg font-semibold text-ink-900",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("mt-2 text-sm leading-relaxed text-ink-600", className)}>
      {children}
    </p>
  );
}
