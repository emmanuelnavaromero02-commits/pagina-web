import Link from "@/components/ui/SafeLink";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { NavItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type MegaMenuProps = {
  item: NavItem;
  onItemClick?: () => void;
};

export function MegaMenu({ item, onItemClick }: MegaMenuProps) {
  if (!item.columns) return null;
  const colsClass =
    item.columns.length >= 4
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      : item.columns.length === 3
        ? "grid-cols-1 md:grid-cols-3"
        : "grid-cols-1 md:grid-cols-2";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px]">
      <div className="px-6 py-7 lg:px-8">
        <div className={cn("grid gap-x-5 gap-y-6", colsClass)}>
          {item.columns.map((col) => (
            <div key={col.title}>
              <div className="mb-3 flex items-center justify-between">
                {col.href ? (
                  <Link
                    href={col.href}
                    onClick={onItemClick}
                    className="group inline-flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 hover:text-brand-900"
                  >
                    {col.title}
                    <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ) : (
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                    {col.title}
                  </span>
                )}
              </div>
              <ul className="space-y-0.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onItemClick}
                    className="group flex items-start justify-between gap-3 rounded-xl px-3 py-3 text-[0.95rem] font-semibold text-ink-800 transition-all hover:bg-brand-50 hover:text-brand-800"
                    >
                      <span>
                        <span className="block">{link.label}</span>
                        {link.description ? <span className="mt-1 block text-xs font-normal leading-relaxed text-ink-500">{link.description}</span> : null}
                      </span>
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {item.featured ? (
        <aside className="dark-panel border-t border-white/10 px-7 py-7 text-white lg:border-l lg:border-t-0">
          <div className="flex h-full flex-col">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-400">
              {item.featured.eyebrow}
            </div>
            <h4 className="mt-4 font-display text-xl font-semibold text-white">
              {item.featured.title}
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              {item.featured.description}
            </p>
            <div className="mt-auto pt-6">
              <Link
                href={item.featured.href}
                onClick={onItemClick}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400 hover:text-white"
              >
                {item.featured.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </aside>
      ) : null}
    </div>
  );
}
