import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { EU_MARKET_ENABLED, LEGAL_ENTITY, SITE } from "@/lib/constants";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

const title = l("Aviso legal", "Legal Notice");
const description = l(
  "Identidad del titular, condiciones de uso y responsabilidades del sitio de 7 Business Solutions.",
  "Site owner identity, terms of use, and responsibilities for the 7 Business Solutions website.",
);

export const metadata: Metadata = createPageMetadata({
  path: "/legal",
  title,
  description,
});

const address = `${LEGAL_ENTITY.registeredAddress.street}, ${LEGAL_ENTITY.registeredAddress.neighborhood}, C.P. ${LEGAL_ENTITY.registeredAddress.postalCode}, ${LEGAL_ENTITY.registeredAddress.city}, ${LEGAL_ENTITY.registeredAddress.state}, ${LEGAL_ENTITY.registeredAddress.country}`;

export default function LegalPage() {
  return (
    <>
      <ServiceHero
        eyebrow={title}
        title={l("Condiciones de uso del sitio", "Website terms of use")}
        description={description}
      />

      <Section className="bg-white">
        <article className="mx-auto max-w-3xl space-y-9 text-sm leading-relaxed text-ink-700">
          <LegalSection title={l("1. Titular del sitio", "1. Website owner")}>
            <p>
              {l("Este sitio es operado por ", "This website is operated by ")}
              <strong className="text-ink-900">{LEGAL_ENTITY.legalName}</strong>,{` `}
              {LEGAL_ENTITY.entityType}, RFC {LEGAL_ENTITY.taxId}, {address}.
            </p>
            <p>
              {l("Actividad: ", "Business activity: ")}
              {l(LEGAL_ENTITY.activity, "Computer consulting services")}. {l(
                "Correo de contacto: ",
                "Contact email: ",
              )}
              <a
                href={`mailto:${SITE.contact.email}`}
                className="font-medium text-brand-700 hover:text-brand-800"
              >
                {SITE.contact.email}
              </a>
              . {l("Teléfono: ", "Telephone: ")}
              <a
                href={`tel:${SITE.contact.phoneHref}`}
                className="font-medium text-brand-700 hover:text-brand-800"
              >
                {SITE.contact.phone}
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection
            title={l("2. Finalidad del sitio", "2. Purpose of the website")}
          >
            <p>
              {l(
                "El sitio presenta servicios de consultoría, desarrollo de software, integración, datos e inteligencia artificial y permite solicitar información o un diagnóstico. Su contenido es informativo y comercial; no constituye por sí mismo una oferta contractual vinculante.",
                "This website presents consulting, software development, integration, data, and artificial-intelligence services and allows visitors to request information or a diagnostic session. Its content is informational and commercial and does not itself constitute a binding contractual offer.",
              )}
            </p>
          </LegalSection>

          <LegalSection
            title={l("3. Condiciones de uso", "3. Terms of use")}
          >
            <ul className="list-disc space-y-2 pl-5">
              <li>
                {l(
                  "Debe utilizar el sitio de forma lícita, sin dañar su disponibilidad, seguridad o contenido.",
                  "You must use the website lawfully and must not damage its availability, security, or content.",
                )}
              </li>
              <li>
                {l(
                  "No está permitido introducir código malicioso, automatizar envíos abusivos ni intentar acceder a áreas o datos restringidos.",
                  "Introducing malicious code, automating abusive submissions, or attempting to access restricted areas or data is prohibited.",
                )}
              </li>
              <li>
                {l(
                  "Al enviar el formulario declara que la información facilitada es legítima y suficiente para responder a su solicitud.",
                  "By submitting the form, you confirm that the information provided is legitimate and sufficient to respond to your request.",
                )}
              </li>
            </ul>
          </LegalSection>

          <LegalSection
            title={l(
              "4. Propiedad intelectual e industrial",
              "4. Intellectual and industrial property",
            )}
          >
            <p>
              {l(
                "Los textos, diseños, código, gráficos, marcas y demás elementos son propiedad de su titular o se utilizan con autorización. No se concede licencia distinta de la necesaria para consultar el sitio. La reproducción, modificación o explotación comercial requiere autorización previa por escrito.",
                "Text, designs, code, graphics, trade names, and other elements belong to their respective owner or are used with authorisation. No licence is granted beyond what is necessary to browse the site. Reproduction, modification, or commercial exploitation requires prior written authorisation.",
              )}
            </p>
          </LegalSection>

          <LegalSection
            title={l("5. Disponibilidad y responsabilidad", "5. Availability and liability")}
          >
            <p>
              {l(
                "Se procura mantener la información correcta y el sitio disponible, pero pueden existir interrupciones, actualizaciones o errores. Nada en este aviso excluye responsabilidades que no puedan limitarse legalmente. Las decisiones empresariales deben basarse en una propuesta, alcance y contrato formal, no únicamente en contenido general del sitio.",
                "We aim to keep information accurate and the website available, but interruptions, updates, or errors may occur. Nothing in this notice excludes liability that cannot lawfully be limited. Business decisions should be based on a formal proposal, scope, and contract rather than solely on general website content.",
              )}
            </p>
          </LegalSection>

          <LegalSection
            title={l("6. Enlaces externos", "6. External links")}
          >
            <p>
              {l(
                "Los enlaces a sitios de terceros se ofrecen como referencia. Sus titulares controlan sus contenidos, disponibilidad y políticas; acceder a ellos implica aceptar sus propias condiciones.",
                "Links to third-party websites are provided for reference. Their owners control their content, availability, and policies; access to them is subject to their own terms.",
              )}
            </p>
          </LegalSection>

          <LegalSection
            title={l("7. Ley aplicable", "7. Applicable law")}
          >
            <p>
              {l(
                EU_MARKET_ENABLED
                  ? "La entidad operadora está establecida en México. Se aplicará la legislación mexicana y, cuando los servicios se dirijan o presten en la Unión Europea, las normas imperativas que correspondan. Los contratos comerciales definirán la jurisdicción y mecanismos de solución de controversias aplicables a cada relación."
                  : "La entidad operadora está establecida en México y el lanzamiento actual del sitio se dirige al mercado mexicano. Se aplicará la legislación mexicana. Los contratos comerciales definirán la jurisdicción y mecanismos de solución de controversias aplicables a cada relación.",
                EU_MARKET_ENABLED
                  ? "The operating entity is established in Mexico. Mexican law applies, together with any mandatory rules applicable where services are directed to or provided in the European Union. Commercial agreements will define the jurisdiction and dispute-resolution mechanisms applicable to each relationship."
                  : "The operating entity is established in Mexico, and the current website launch is directed to the Mexican market. Mexican law applies. Commercial agreements will define the jurisdiction and dispute-resolution mechanisms applicable to each relationship.",
              )}
            </p>
          </LegalSection>

          {EU_MARKET_ENABLED ? (
            <LegalSection title={l("8. Referencia normativa", "8. Legal reference")}>
              <p>
                {l(
                  "Para la prestación de servicios dirigida a la Unión Europea se consideran las normas imperativas aplicables al comercio y los servicios digitales en cada jurisdicción.",
                  "Services directed to the European Union are subject to the mandatory commerce and digital-services rules applicable in each jurisdiction.",
                )}
              </p>
            </LegalSection>
          ) : (
            <LegalSection title={l("8. Alcance territorial", "8. Territorial scope")}>
              <p>
                {l(
                  "La información comercial y el formulario de este sitio se ofrecen actualmente para atender solicitudes del mercado mexicano.",
                  "The commercial information and contact form on this website are currently offered for enquiries from the Mexican market.",
                )}
              </p>
            </LegalSection>
          )}

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
function LegalSection({
  title: sectionTitle,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-ink-950">
        {sectionTitle}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
