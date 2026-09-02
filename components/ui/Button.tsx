import Link from "@/components/ui/SafeLink";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-700 text-white shadow-[0_12px_30px_-14px_rgba(38,69,216,0.9)] hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-[0_18px_36px_-16px_rgba(38,69,216,0.9)] focus-visible:ring-brand-300",
  secondary:
    "bg-ink-950 text-white shadow-soft hover:-translate-y-0.5 hover:bg-ink-800 focus-visible:ring-ink-300",
  ghost:
    "bg-transparent text-ink-800 hover:bg-ink-100 focus-visible:ring-ink-200",
  outline:
    "border border-ink-200 bg-white/80 text-ink-800 shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-brand-200 hover:bg-white hover:text-brand-800 focus-visible:ring-ink-200",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm sm:text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export type LinkButtonProps = CommonProps & {
  href: string;
  external?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", className, children, ...props },
    ref,
  ) {
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
}: LinkButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
