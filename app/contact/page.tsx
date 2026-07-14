import { Mail, Phone } from "lucide-react";
import { AfterSteps } from "@/components/contact/AfterSteps";
import { ContactForm } from "@/components/contact/ContactForm";
import { Section } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SITE } from "@/lib/constants";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: l(
    "Contacto · Diagnóstico, integración SAP o piloto de Enterprise Copilot",
    "Contact · Diagnosis, SAP integration, or Enterprise Copilot pilot",
  ),
  description: l(
    "Cuéntanos qué problema operativo quieres resolver. Identificaremos una ruta enfocada con software, integración, automatización, datos o Enterprise Copilot.",
    "Tell us which operational problem you want to solve. We will identify a focused path using software, integration, automation, data, or Enterprise Copilot.",
  ),
  path: "/contact",
});

export default function ContactPage() {
  const { email, phone, phoneHref } = SITE.contact;

  return (
    <>
      <ServiceHero
        eyebrow={l("Contacto", "Contact")}
        title={l(
          "Empecemos por un problema de negocio concreto.",
          "Start with one concrete business problem.",
        )}
        description={l(
          "Cuéntanos dónde pierde tiempo o control tu operación. Te ayudaremos a identificar una ruta enfocada con software, integración, automatización, datos o Enterprise Copilot.",
          "Tell us where your operation loses time or control. We will help identify a focused path using software, integration, automation, data, or Enterprise Copilot.",
        )}
      />

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft sm:p-8">
            <h2 className="font-display text-xl font-semibold text-ink-950">
              {l("Cuéntanos el contexto", "Tell us the context")}
            </h2>
            <p className="mt-2 text-sm text-ink-600">
              {l(
                "Solo pedimos los datos necesarios para entender tu solicitud y responder.",
                "We only request the information needed to understand and respond to your request.",
              )}
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6">
              <h3 className="font-display text-base font-semibold text-ink-950">
                {l("Contacto directo", "Direct contact")}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-800">
                <li className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 h-4 w-4 text-brand-700" />
                  <a href={`mailto:${email}`} className="hover:text-brand-800">
                    {email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 text-brand-700" />
                  <a href={`tel:${phoneHref}`} className="hover:text-brand-800">
                    {phone}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
              <h3 className="font-display text-base font-semibold text-brand-900">
                {l("¿Buscas un piloto de Enterprise Copilot?", "Looking for an Enterprise Copilot pilot?")}
              </h3>
              <p className="mt-2 text-sm text-brand-900/80">
                {l(
                  "Indica el área en tu mensaje —recursos humanos, finanzas, operaciones o reporting— y definiremos el alcance inicial.",
                  "Mention the area in your message—HR, finance, operations, or reporting—and we will define the initial scope.",
                )}
              </p>
            </div>

            <div className="rounded-2xl border border-ink-100 bg-white p-6">
              <h3 className="font-display text-base font-semibold text-ink-950">
                {l("Cómo trabajamos", "How we work")}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-700">
                <li>· {l("Orientación inicial sin compromiso.", "Initial guidance with no commitment.")}</li>
                <li>· {l("Criterio técnico y de negocio en la misma conversación.", "Technical and business judgment in the same conversation.")}</li>
                <li>· {l("Especialistas senior según las necesidades del proyecto.", "Senior specialists selected for the project's needs.")}</li>
                <li>· {l("Tratamiento de datos limitado a la solicitud.", "Data processing limited to the request.")}</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-ink-100 bg-white p-6">
              <h3 className="font-display text-base font-semibold text-ink-950">
                {l("Tiempo de respuesta", "Response time")}
              </h3>
              <p className="mt-2 text-sm text-ink-600">
                {l(
                  "Nuestro objetivo es responder en un día hábil. Si el caso es urgente, indícalo en el mensaje.",
                  "Our target is to reply within one business day. If the case is urgent, mention it in your message.",
                )}
              </p>
            </div>
          </aside>
        </div>
      </Section>

      <AfterSteps />
    </>
  );
}
