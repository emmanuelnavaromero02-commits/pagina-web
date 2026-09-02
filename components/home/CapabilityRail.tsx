import Link from "@/components/ui/SafeLink";
import { ArrowRight } from "lucide-react";
import { l } from "@/lib/i18n/config";

const CAPABILITIES = [
  { label: l("Personas + nómina", "People + payroll"), href: "/services#personas-nomina" },
  { label: "SAP S/4HANA", href: "/services/sap" },
  { label: "ABAP + Fiori", href: "/services/software-factory" },
  { label: "AMS 24/7", href: "/services/sap#ams" },
  { label: l("AWS + nube", "AWS + cloud"), href: "/services/cloud-data/aws" },
  { label: l("Privacidad + seguridad", "Privacy + security"), href: "/services#privacidad-transformacion" },
  { label: l("Inteligencia de decisión", "Decision intelligence"), href: "/copilot" },
];

export function CapabilityRail() {
  return (
    <section className="border-y border-ink-100 bg-white py-4" aria-label={l("Accesos a servicios principales", "Priority service links")}>
      <div className="site-container overflow-x-auto">
        <div className="flex min-w-max items-center gap-2">
          <span className="mr-2 text-xs font-bold uppercase tracking-[0.16em] text-ink-500">{l("Ir directo", "Go directly")}</span>
          {CAPABILITIES.map((capability) => (
            <Link key={capability.href} href={capability.href} className="group inline-flex min-h-11 items-center gap-2 rounded-xl border border-ink-100 bg-ink-50 px-4 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800">
              {capability.label}<ArrowRight className="h-3.5 w-3.5 text-brand-700 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
