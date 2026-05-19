import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
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
      <div className="px-6 py-6 lg:px-8 lg:py-8">
        <div className={cn("grid gap-x-6 gap-y-6", colsClass)}>
          {item.columns.map((col) => (
            <div key={col.title}>
              <div className="mb-3 flex items-center justify-between">
                {col.href ? (
                  <Link
                    href={col.href}
                    onClick={onItemClick}
                    className="group inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 hover:text-brand-700"
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
              <ul className="space-y-1">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onItemClick}
                      className="group block rounded-lg px-3 py-2 transition-colors hover:bg-ink-50"
                    >
                      <span className="block text-sm font-medium text-ink-900 group-hover:text-brand-800">
                        {link.label}
                      </span>
                      {link.description ? (
                        <span className="mt-0.5 block text-xs leading-relaxed text-ink-500">
                          {link.description}
                        </span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {item.featured ? (
        <aside className="border-t border-ink-100 bg-ink-50/60 px-6 py-6 lg:border-l lg:border-t-0 lg:px-8 lg:py-8">
          <div className="flex h-full flex-col">
            <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-brand-200 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
              <Sparkles className="h-3 w-3" />
              {item.featured.eyebrow}
            </div>
            <h4 className="mt-4 font-display text-lg font-semibold text-ink-950">
              {item.featured.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              {item.featured.description}
            </p>
            <div className="mt-auto pt-6">
              <Link
                href={item.featured.href}
                onClick={onItemClick}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
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
