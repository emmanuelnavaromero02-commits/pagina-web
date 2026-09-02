import Link from "next/link";
import { ArrowUpRight, BrainCircuit, CodeXml, Github, Linkedin, Mail, Phone } from "lucide-react";
import {
  EU_MARKET_ENABLED,
  LEGAL_ENTITY,
  SITE,
  hasContactInfo,
} from "@/lib/constants";
import { BUILD_LOCALE, l } from "@/lib/i18n/config";
import { FOOTER_LINKS as EN_FOOTER_LINKS } from "@/lib/i18n/navigation/en";
import { FOOTER_LINKS as ES_FOOTER_LINKS } from "@/lib/i18n/navigation/es";
import { Logo } from "./Logo";

const FOOTER_LINKS = BUILD_LOCALE === "es" ? ES_FOOTER_LINKS : EN_FOOTER_LINKS;

export function Footer() {
  const year = new Date().getFullYear();
  const showContact = hasContactInfo();
  const { email, phone, phoneHref } = SITE.contact;
  const { linkedin, github } = SITE.social;

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950 text-ink-200">
      <div aria-hidden className="surface-noise pointer-events-none absolute inset-0 opacity-[0.08]" />
      <div aria-hidden className="absolute -right-44 top-0 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="site-container relative pt-8 sm:pt-10">
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] lg:grid-cols-2">
          <Link
            href="/copilot#demo-interactiva"
            className="group flex items-start gap-4 border-b border-white/10 p-6 transition-colors hover:bg-white/[0.06] sm:p-7 lg:border-b-0 lg:border-r"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent-400/20 bg-accent-400/10 text-accent-400">
              <BrainCircuit className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-accent-400">
                {l("Innovación empresarial", "Enterprise innovation")}
              </span>
              <span className="mt-1 block font-display text-lg font-semibold text-white">
                {l("Prueba la Inteligencia de Decisión", "Try Decision Intelligence")}
              </span>
              <span className="mt-1.5 block text-sm text-ink-300">
                {l("Modelos, agentes, evidencia y acción supervisada.", "Models, agents, evidence, and supervised action.")}
              </span>
            </span>
            <ArrowUpRight className="mt-1 h-5 w-5 text-ink-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
          </Link>

          <Link
            href="/services/software-factory#abap-factory-lab"
            className="group flex items-start gap-4 p-6 transition-colors hover:bg-white/[0.06] sm:p-7"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-400/20 bg-brand-400/10 text-brand-300">
              <CodeXml className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-brand-300">
                {l("Fábrica SAP", "SAP factory")}
              </span>
              <span className="mt-1 block font-display text-lg font-semibold text-white">
                {l("Simula una entrega ABAP + Fiori", "Simulate an ABAP + Fiori delivery")}
              </span>
              <span className="mt-1.5 block text-sm text-ink-300">
                {l("Hasta 60% menos costo, con calidad industrial.", "Up to 60% lower cost, with industrial quality.")}
              </span>
            </span>
            <ArrowUpRight className="mt-1 h-5 w-5 text-ink-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
          </Link>
        </div>
      </div>

      <div className="site-container relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo presentation="full" variant="dark" className="max-w-[220px]" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-300">
              {l(
                EU_MARKET_ENABLED
                  ? "Soluciones empresariales inteligentes. Diseñamos, integramos y damos soporte a software, integraciones, datos gobernados e IA operacional para empresas de México y la Unión Europea."
                  : "Soluciones empresariales inteligentes. Diseñamos, integramos y damos soporte a software, integraciones, datos gobernados e IA operacional para empresas de México.",
                EU_MARKET_ENABLED
                  ? "Intelligent business solutions. We design, integrate, and support enterprise software, integrations, governed data, and operational AI for companies in Mexico and the European Union."
                  : "Intelligent business solutions. We design, integrate, and support enterprise software, integrations, governed data, and operational AI for companies in Mexico.",
              )}
            </p>

            <div className="mt-6 border-l border-accent-400/40 pl-4 text-xs leading-relaxed text-ink-400">
              <p className="font-semibold tracking-[0.08em] text-ink-100">
                {LEGAL_ENTITY.legalName}
              </p>
              <p className="mt-1">
                {l(LEGAL_ENTITY.activity, "Computer consulting services")}
              </p>
              <p>RFC: {LEGAL_ENTITY.taxId}</p>
              <p>{l("Estado de México, México.", "State of Mexico, Mexico.")}</p>
            </div>

            {showContact ? (
              <ul className="mt-6 space-y-2 text-sm text-ink-300">
                {email ? (
                  <li className="flex items-start gap-2">
                    <Mail className="mt-0.5 h-4 w-4 text-ink-400" />
                    <a href={`mailto:${email}`} className="hover:text-white">
                      {email}
                    </a>
                  </li>
                ) : null}
                {phone ? (
                  <li className="flex items-start gap-2">
                    <Phone className="mt-0.5 h-4 w-4 text-ink-400" />
                    <a href={`tel:${phoneHref}`} className="hover:text-white">
                      {phone}
                    </a>
                  </li>
                ) : null}
              </ul>
            ) : (
              <p className="mt-6 text-sm text-ink-400">
                {l("Escríbenos desde la", "Reach us through the")}{" "}
                <Link
                  href="/contact"
                  className="text-ink-100 underline-offset-4 hover:underline"
                >
                  {l("página de contacto", "contact page")}
                </Link>
                .
              </p>
            )}

            {(linkedin || github) && (
              <ul className="mt-5 flex items-center gap-3">
                {linkedin ? (
                  <li>
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="LinkedIn"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-200 hover:bg-white/10 hover:text-white"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </li>
                ) : null}
                {github ? (
                  <li>
                    <a
                      href={github}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="GitHub"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-200 hover:bg-white/10 hover:text-white"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </li>
                ) : null}
              </ul>
            )}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
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

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-xs text-ink-400 sm:flex-row sm:items-center">
          <p>
            © {year} {SITE.name}.{" "}
            {l("Todos los derechos reservados.", "All rights reserved.")}
          </p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <li>
              <Link href="/privacy" className="hover:text-white">
                {l("Aviso de privacidad", "Privacy Notice")}
              </Link>
            </li>
            <li>
              <Link href="/legal" className="hover:text-white">
                {l("Aviso legal", "Legal Notice")}
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-white">
                {l("Política de cookies", "Cookie Policy")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
