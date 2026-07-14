import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SITE } from "@/lib/constants";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

const title = l(
  "Cookies y tecnologías de seguridad",
  "Cookies and security technologies",
);
const description = l(
  "Información sobre las tecnologías estrictamente necesarias para proteger el sitio y el formulario.",
  "Information about technologies strictly necessary to protect the website and contact form.",
);

export const metadata: Metadata = createPageMetadata({
  path: "/cookies",
  title,
  description,
});

export default function CookiesPage() {
  return (
    <>
      <ServiceHero
        eyebrow={title}
        title={l(
          "Seguridad sin seguimiento publicitario",
          "Security without advertising tracking",
        )}
        description={description}
      />

      <Section className="bg-white">
        <article className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-ink-700">
          <section>
            <h2 className="font-display text-xl font-semibold text-ink-950">
              {l("Configuración actual", "Current configuration")}
            </h2>
            <p className="mt-3">
              {l(
                "El sitio no utiliza cookies de publicidad, perfiles, remarketing ni redes sociales. Tampoco almacena los datos del formulario en el navegador.",
                "The website does not use advertising, profiling, remarketing, or social-media cookies. It also does not store form data in the browser.",
              )}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink-950">
              {l("Tecnología estrictamente necesaria", "Strictly necessary technology")}
            </h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-ink-200">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead className="bg-ink-50 text-ink-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold">
                      {l("Proveedor", "Provider")}
                    </th>
                    <th className="px-4 py-3 font-semibold">
                      {l("Finalidad", "Purpose")}
                    </th>
                    <th className="px-4 py-3 font-semibold">
                      {l("Duración", "Duration")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-ink-200">
                    <td className="px-4 py-3">AWS WAF</td>
                    <td className="px-4 py-3">
                      {l(
                        "Validar que el envío del formulario no procede de tráfico automatizado abusivo.",
                        "Verify that form submissions do not originate from abusive automated traffic.",
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {l(
                        "Hasta cinco minutos después de un desafío de seguridad.",
                        "Up to five minutes after a security challenge.",
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              {l(
                "Esta tecnología es necesaria para la seguridad y disponibilidad del formulario. No se utiliza para publicidad ni para seguir la navegación entre sitios.",
                "This technology is necessary for the security and availability of the form. It is not used for advertising or cross-site tracking.",
              )}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink-950">
              {l("Analítica", "Analytics")}
            </h2>
            <p className="mt-3">
              {l(
                "La analítica de audiencia no está activa en esta versión. Si se habilita una solución sin cookies, este documento y el aviso de privacidad se actualizarán antes de activarla. Cualquier tecnología no esencial requerirá una evaluación y, cuando corresponda, consentimiento previo.",
                "Audience analytics is not active in this release. If a cookieless solution is enabled, this document and the privacy notice will be updated before activation. Any non-essential technology will be assessed and, where required, blocked until consent is obtained.",
              )}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink-950">
              {l("Contacto y cambios", "Contact and changes")}
            </h2>
            <p className="mt-3">
              {l("Puede escribir a ", "You can write to ")}
              <a
                href={`mailto:${SITE.contact.email}`}
                className="font-medium text-brand-700 hover:text-brand-800"
              >
                {SITE.contact.email}
              </a>
              {l(" para resolver dudas. Consulte también el ", ". See also the ")}
              <Link href="/privacy" className="text-brand-700 hover:text-brand-800">
                {l("aviso de privacidad", "privacy notice")}
              </Link>
              .
            </p>
          </section>

          <div className="rounded-xl border border-ink-200 bg-ink-50 p-5 text-xs text-ink-600">
            <p>
              {l(
                "Última actualización · 14 de julio de 2026.",
                "Last updated · 14 July 2026.",
              )}
            </p>
          </div>
        </article>
      </Section>
    </>
  );
}
