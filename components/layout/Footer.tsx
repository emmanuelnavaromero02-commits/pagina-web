import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { FOOTER_LINKS } from "@/lib/navigation";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-100 bg-ink-950 text-ink-200">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo variant="dark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-300">
              Fábrica de software empresarial e IA operativa. Diseñamos,
              integramos y soportamos soluciones sobre SAP, cloud, datos e
              inteligencia artificial.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink-300">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-ink-400" />
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="hover:text-white"
                >
                  {SITE.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-ink-400" />
                <span>{SITE.contact.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-ink-400" />
                <span>{SITE.contact.address}</span>
              </li>
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink-800 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center">
          <p>
            © {year} {SITE.name}. Todos los derechos reservados.
          </p>
          <p>
            Sitio estático Next.js · desplegado en AWS S3 + CloudFront.
          </p>
        </div>
      </div>
    </footer>
  );
}
