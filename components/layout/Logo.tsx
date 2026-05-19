import Link from "next/link";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function Logo({ className, variant = "light" }: LogoProps) {
  const isDark = variant === "dark";
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5",
        isDark ? "text-white" : "text-ink-950",
        className,
      )}
      aria-label={`${SITE.name} — Home`}
    >
      <span
        aria-hidden
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-lg shadow-soft transition-transform group-hover:scale-[1.02]",
          isDark
            ? "bg-white/10 ring-1 ring-white/20"
            : "bg-gradient-to-br from-brand-600 to-brand-800",
        )}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M5 6 L19 6 L11 20"
            stroke="#ffffff"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="11" cy="13" r="1.7" fill="#5be1c4" />
        </svg>
      </span>
      <span className="font-display text-base font-semibold tracking-tight">
        {SITE.name}
      </span>
    </Link>
  );
}
