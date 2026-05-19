import { CheckCircle2 } from "lucide-react";
import type { DeepDiveBlock as DeepDiveBlockData } from "@/lib/data/services";
import { cn } from "@/lib/utils";

type DeepDiveBlockProps = {
  block: DeepDiveBlockData;
  variant?: "light" | "dark";
};

export function DeepDiveBlock({
  block,
  variant = "light",
}: DeepDiveBlockProps) {
  const Icon = block.icon;
  const isDark = variant === "dark";
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
      <div>
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xl",
              isDark
                ? "bg-white/10 text-accent-400"
                : "bg-brand-50 text-brand-700",
            )}
          >
            <Icon className="h-5 w-5" />
          </span>
          <span
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.18em]",
              isDark ? "text-accent-400" : "text-brand-700",
            )}
          >
            {block.eyebrow}
          </span>
        </div>
        <h3
          className={cn(
            "mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl",
            isDark ? "text-white" : "text-ink-950",
          )}
        >
          {block.title}
        </h3>
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            isDark ? "text-ink-300" : "text-ink-600",
          )}
        >
          {block.description}
        </p>
        <ul className="mt-6 flex flex-wrap gap-1.5">
          {block.badges.map((b) => (
            <li
              key={b}
              className={cn(
                "rounded-full border px-2.5 py-0.5 text-xs font-medium",
                isDark
                  ? "border-white/15 bg-white/5 text-ink-200"
                  : "border-ink-200 bg-ink-50 text-ink-700",
              )}
            >
              {b}
            </li>
          ))}
        </ul>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {block.bullets.map((item) => (
          <li
            key={item}
            className={cn(
              "flex items-start gap-3 rounded-xl border p-4 text-sm leading-relaxed shadow-soft",
              isDark
                ? "border-white/10 bg-white/5 text-ink-200"
                : "border-ink-100 bg-white text-ink-800",
            )}
          >
            <CheckCircle2
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                isDark ? "text-accent-400" : "text-brand-700",
              )}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
