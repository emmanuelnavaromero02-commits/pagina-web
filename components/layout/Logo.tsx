import Image from "next/image";
import Link from "@/components/ui/SafeLink";
import { SITE } from "@/lib/constants";
import { l } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  wordmarkClassName?: string;
  variant?: "light" | "dark";
  presentation?: "compact" | "full";
};

export function Logo({
  className,
  wordmarkClassName,
  variant = "light",
  presentation = "compact",
}: LogoProps) {
  const isDark = variant === "dark";

  if (presentation === "full") {
    return (
      <Link
        href="/"
        className={cn("group inline-flex w-full max-w-[260px]", className)}
        aria-label={`${SITE.name} — ${l("Inicio", "Home")}`}
      >
        <span
          className={cn(
            "block w-full rounded-xl",
            isDark && "bg-white p-3 shadow-soft ring-1 ring-white/10",
          )}
        >
          <span className="relative block aspect-[16/9] w-full">
            <Image
              src="/brand/seven-lockup.webp"
              alt=""
              fill
              sizes="260px"
              className="object-contain"
              aria-hidden="true"
            />
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex shrink-0 items-center gap-2.5",
        isDark ? "text-white" : "text-ink-950",
        className,
      )}
      aria-label={`${SITE.name} — ${l("Inicio", "Home")}`}
    >
      <span
        className="relative block h-11 w-11 shrink-0 transition-transform group-hover:scale-[1.02]"
        aria-hidden="true"
      >
        <Image
          src="/brand/seven-mark.webp"
          alt=""
          fill
          sizes="44px"
          className="object-contain"
          aria-hidden="true"
        />
      </span>
      <span className={cn("shrink-0", wordmarkClassName)}>
        <span className="relative block h-10 w-40">
          <Image
            src="/brand/seven-wordmark.webp"
            alt=""
            fill
            sizes="160px"
            className="object-contain"
            aria-hidden="true"
          />
        </span>
      </span>
    </Link>
  );
}
