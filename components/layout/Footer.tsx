import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SITE, hasContactInfo } from "@/lib/constants";
import { FOOTER_LINKS } from "@/lib/navigation";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  const showContact = hasContactInfo();
  const { email, phone, address } = SITE.contact;
  const { linkedin, github } = SITE.social;

  return (
    <footer className="border-t border-ink-100 bg-ink-950 text-ink-200">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo variant="dark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-300">
              Intelligent business solutions. We design, integrate, and support
              enterprise software, integration, governed data, and operational
              AI for companies in Mexico and Spain.
            </p>

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
                    <span>{phone}</span>
                  </li>
                ) : null}
                {address ? (
                  <li className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 text-ink-400" />
                    <span>{address}</span>
                  </li>
                ) : null}
              </ul>
            ) : (
              <p className="mt-6 text-sm text-ink-400">
                Reach us through the{" "}
                <Link
                  href="/contact"
                  className="text-ink-100 underline-offset-4 hover:underline"
                >
                  contact page
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
            © {year} {SITE.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/legal" className="hover:text-white">
                Legal Notice
              </Link>
            </li>
            <li className="text-ink-500">
              Static Next.js site · AWS S3 + CloudFront
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
