import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import {
  EU_MARKET_ENABLED,
  EU_REPRESENTATIVE,
  LEGAL_ENTITY,
  SITE,
} from "@/lib/constants";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

const title = l("Aviso de privacidad", "Privacy Notice");
const description = l(
  "Información sobre el tratamiento de datos personales de visitantes y prospectos de 7 Business Solutions.",
  "Information about how 7 Business Solutions processes personal data from visitors and prospects.",
);

export const metadata: Metadata = createPageMetadata({
  path: "/privacy",
  title,
  description,
});

const address = `${LEGAL_ENTITY.registeredAddress.street}, ${LEGAL_ENTITY.registeredAddress.neighborhood}, C.P. ${LEGAL_ENTITY.registeredAddress.postalCode}, ${LEGAL_ENTITY.registeredAddress.city}, ${LEGAL_ENTITY.registeredAddress.state}, ${LEGAL_ENTITY.registeredAddress.country}`;

const hasEuRepresentative = Boolean(
  EU_MARKET_ENABLED &&
    EU_REPRESENTATIVE.name &&
    EU_REPRESENTATIVE.address &&
    EU_REPRESENTATIVE.email,
);

export default function PrivacyPage() {
  return (
    <>
      <ServiceHero
        eyebrow={title}
        title={l(
          "Cómo tratamos sus datos personales",
          "How we process your personal data",
        )}
        description={description}
      />

      <Section className="bg-white">
        <article className="mx-auto max-w-3xl space-y-9 text-sm leading-relaxed text-ink-700">
          <LegalSection title={l("1. Responsable", "1. Controller")}>
            <p>
              <strong className="text-ink-900">{LEGAL_ENTITY.legalName}</strong>,
              {l(
                ` con RFC ${LEGAL_ENTITY.taxId} y domicilio en ${address}, es responsable del tratamiento de los datos recibidos mediante este sitio.`,
                ` Mexican tax ID ${LEGAL_ENTITY.taxId}, with registered address at ${address}, is the controller of the data received through this site.`,
              )}
            </p>
            <p>
              {l("Contacto de privacidad: ", "Privacy contact: ")}
              <a
                href={`mailto:${SITE.contact.email}`}
                className="font-medium text-brand-700 hover:text-brand-800"
              >
                {SITE.contact.email}
              </a>
              .
            </p>
            {hasEuRepresentative ? (
              <p>
                <strong className="text-ink-900">
                  {l("Representante en la Unión Europea: ", "EU representative: ")}
                </strong>
                {EU_REPRESENTATIVE.name}, {EU_REPRESENTATIVE.address},{" "}
                <a
                  href={`mailto:${EU_REPRESENTATIVE.email}`}
                  className="text-brand-700 hover:text-brand-800"
                >
                  {EU_REPRESENTATIVE.email}
                </a>
                .
              </p>
            ) : null}
          </LegalSection>

          <LegalSection
            title={l("2. Datos que tratamos", "2. Data we process")}
          >
            <p>
              {l(
                "El formulario solicita nombre, empresa, correo corporativo, teléfono opcional, área de interés y mensaje. Para proteger el servicio también se procesan temporalmente dirección IP, fecha, agente de usuario y señales técnicas de seguridad. No solicitamos datos sensibles.",
                "The form requests name, company, corporate email, optional telephone number, area of interest, and message. To protect the service, IP address, date, user agent, and technical security signals are also processed temporarily. We do not request sensitive data.",
              )}
            </p>
          </LegalSection>

          <LegalSection
            title={l(
              "3. Finalidades y bases jurídicas",
              "3. Purposes and legal bases",
            )}
          >
            <ul className="list-disc space-y-2 pl-5">
              <li>
                {l(
                  "Responder solicitudes, preparar diagnósticos o propuestas y coordinar reuniones: medidas precontractuales solicitadas por la persona interesada e interés legítimo en atender consultas B2B.",
                  "Respond to requests, prepare diagnostics or proposals, and coordinate meetings: pre-contractual steps requested by the data subject and legitimate interest in handling B2B enquiries.",
                )}
              </li>
              <li>
                {l(
                  "Prevenir abuso, fraude y ataques: interés legítimo en proteger el sitio y sus usuarios.",
                  "Prevent abuse, fraud, and attacks: legitimate interest in protecting the site and its users.",
                )}
              </li>
              <li>
                {l(
                  "Cumplir obligaciones legales, fiscales o de atención de derechos: cumplimiento de obligaciones aplicables.",
                  "Comply with legal, tax, or data-rights obligations: compliance with applicable obligations.",
                )}
              </li>
            </ul>
            <p>
              {l(
                "No utilizamos el formulario para suscribir a comunicaciones promocionales ni realizamos decisiones automatizadas o perfiles con efectos jurídicos.",
                "We do not use the form to subscribe users to promotional communications, and we do not make automated decisions or profiles with legal effects.",
              )}
            </p>
          </LegalSection>

          <LegalSection
            title={l(
              "4. Proveedores, destinatarios y transferencias",
              "4. Providers, recipients, and transfers",
            )}
          >
            <p>
              {l(
                EU_MARKET_ENABLED
                  ? "AWS presta infraestructura, protección y envío transaccional; Google Workspace recibe y conserva el correo comercial. Estos proveedores actúan bajo sus contratos y medidas de protección de datos. Los datos pueden tratarse fuera de México o del Espacio Económico Europeo mediante cláusulas contractuales, marcos de transferencia u otras garantías aplicables. No vendemos datos ni los cedemos para publicidad de terceros."
                  : "AWS presta infraestructura, protección y envío transaccional; Google Workspace recibe y conserva el correo comercial. Estos proveedores actúan bajo sus contratos y medidas de protección de datos. Los datos pueden tratarse fuera de México con las garantías contractuales y legales aplicables. No vendemos datos ni los cedemos para publicidad de terceros.",
                EU_MARKET_ENABLED
                  ? "AWS provides infrastructure, protection, and transactional email; Google Workspace receives and retains commercial email. These providers operate under their data-protection terms and safeguards. Data may be processed outside Mexico or the European Economic Area under contractual clauses, transfer frameworks, or other applicable safeguards. We do not sell data or disclose it for third-party advertising."
                  : "AWS provides infrastructure, protection, and transactional email; Google Workspace receives and retains commercial email. These providers operate under their data-protection terms and applicable safeguards. Data may be processed outside Mexico under applicable contractual and legal safeguards. We do not sell data or disclose it for third-party advertising.",
              )}
            </p>
          </LegalSection>

          <LegalSection
            title={l("5. Conservación", "5. Retention")}
          >
            <p>
              {l(
                "Las consultas que no generen una relación comercial se eliminan o anonimizan 12 meses después de la última interacción. Si existe relación contractual, se conservan durante los plazos legales aplicables. Los registros técnicos se conservan hasta 30 días y no incluyen el contenido del formulario.",
                "Enquiries that do not lead to a commercial relationship are deleted or anonymised 12 months after the last interaction. Where a contractual relationship exists, data is retained for applicable legal periods. Technical logs are retained for up to 30 days and do not include form contents.",
              )}
            </p>
          </LegalSection>

          <LegalSection
            title={l("6. Derechos", "6. Your rights")}
          >
            <p>
              {l(
                EU_MARKET_ENABLED
                  ? "En México puede ejercer derechos de acceso, rectificación, cancelación y oposición, limitar el uso o divulgación y revocar el consentimiento cuando sea la base aplicable. En el marco europeo puede solicitar acceso, rectificación, supresión, limitación, oposición y portabilidad, así como retirar el consentimiento cuando corresponda."
                  : "En México puede ejercer derechos de acceso, rectificación, cancelación y oposición, limitar el uso o divulgación y revocar el consentimiento cuando sea la base aplicable.",
                EU_MARKET_ENABLED
                  ? "In Mexico, you may exercise rights of access, rectification, cancellation, and objection, limit use or disclosure, and withdraw consent where it is the applicable basis. Under European law, you may request access, rectification, erasure, restriction, objection, and portability, and withdraw consent where applicable."
                  : "In Mexico, you may exercise rights of access, rectification, cancellation, and objection, limit use or disclosure, and withdraw consent where it is the applicable basis.",
              )}
            </p>
            <p>
              {l(
                EU_MARKET_ENABLED
                  ? `Envíe la solicitud a ${SITE.contact.email}, indicando el derecho que desea ejercer, información para localizar la consulta y un medio para recibir respuesta. México contempla una respuesta inicial máxima de 20 días hábiles y, cuando proceda, 15 días adicionales para hacerla efectiva; el RGPD establece como regla general un mes.`
                  : `Envíe la solicitud a ${SITE.contact.email}, indicando el derecho que desea ejercer, información para localizar la consulta y un medio para recibir respuesta. México contempla una respuesta inicial máxima de 20 días hábiles y, cuando proceda, 15 días adicionales para hacerla efectiva.`,
                EU_MARKET_ENABLED
                  ? `Send your request to ${SITE.contact.email}, stating the right you wish to exercise, information needed to locate the enquiry, and a way to receive our response. Mexico provides for an initial response within 20 business days and, where applicable, a further 15 days to give effect to it; the GDPR generally provides one month.`
                  : `Send your request to ${SITE.contact.email}, stating the right you wish to exercise, information needed to locate the enquiry, and a way to receive our response. Mexico provides for an initial response within 20 business days and, where applicable, a further 15 days to give effect to it.`,
              )}
            </p>
            <p>
              {l(
                EU_MARKET_ENABLED
                  ? "También puede presentar una reclamación ante la Secretaría Anticorrupción y Buen Gobierno en México o ante la autoridad de protección de datos competente en la Unión Europea."
                  : "También puede presentar una reclamación ante la Secretaría Anticorrupción y Buen Gobierno en México.",
                EU_MARKET_ENABLED
                  ? "You may also lodge a complaint with Mexico's Ministry of Anti-Corruption and Good Government or the competent data-protection authority in the European Union."
                  : "You may also lodge a complaint with Mexico's Ministry of Anti-Corruption and Good Government.",
              )}
            </p>
          </LegalSection>

          <LegalSection
            title={l(
              "7. Seguridad, incidentes y cambios",
              "7. Security, incidents, and changes",
            )}
          >
            <p>
              {l(
                "Aplicamos controles de acceso, cifrado en tránsito, validación, limitación de solicitudes y registro técnico minimizado. Si un incidente pudiera afectar significativamente sus derechos, se realizarán las comunicaciones exigidas. Los cambios a este aviso se publicarán en esta misma URL con una nueva fecha de versión.",
                "We apply access controls, encryption in transit, validation, request limiting, and minimised technical logging. If an incident could significantly affect your rights, required notifications will be made. Changes to this notice will be published at this URL with a new version date.",
              )}
            </p>
          </LegalSection>

          <LegalSection title={l("8. Marco normativo", "8. Legal framework")}>
            <p>
              {l(
                "Este aviso se preparó con referencia a la legislación vigente aplicable. Consulte las fuentes oficiales: ",
                "This notice was prepared with reference to applicable current law. See the official sources: ",
              )}
              <a
                href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf"
                className="text-brand-700 hover:text-brand-800"
              >
                LFPDPPP
              </a>
              {EU_MARKET_ENABLED ? (
                <>
                  {", "}
                  <a
                    href="https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807"
                    className="text-brand-700 hover:text-brand-800"
                  >
                    RGPD
                  </a>
                </>
              ) : null}
              .
            </p>
          </LegalSection>

          <div className="rounded-xl border border-ink-200 bg-ink-50 p-5 text-xs text-ink-600">
            <p>
              {l(
                "Última actualización · 14 de julio de 2026.",
                "Last updated · 14 July 2026.",
              )}
            </p>
            <p className="mt-2">
              {l("Consulte también nuestra ", "See also our ")}
              <Link href="/cookies" className="text-brand-700 hover:text-brand-800">
                {l(
                  "política de cookies y tecnologías de seguridad",
                  "cookie and security technologies policy",
                )}
              </Link>
              .
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
