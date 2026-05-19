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
        "rounded-2xl border border-ink-100 bg-white p-6 shadow-soft",
        interactive &&
          "transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-elevate",
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
