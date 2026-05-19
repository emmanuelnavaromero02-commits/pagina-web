import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: "brand" | "neutral" | "accent";
  icon?: ReactNode;
};

const tones = {
  brand: "border-brand-200 bg-brand-50 text-brand-800",
  neutral: "border-ink-200 bg-ink-50 text-ink-800",
  accent: "border-accent-400/40 bg-accent-400/10 text-accent-600",
};

export function Badge({
  children,
  className,
  tone = "brand",
  icon,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {icon ? <span className="flex h-3.5 w-3.5 items-center">{icon}</span> : null}
      {children}
    </span>
  );
}
