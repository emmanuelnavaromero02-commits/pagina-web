import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Section } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SITE, hasContactInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Habla con nosotros para diagnóstico inicial, piloto del Copiloto Empresarial o un proyecto de fábrica de software.",
};

export default function ContactPage() {
  const { email, phone, address } = SITE.contact;
  const showContact = hasContactInfo();

  return (
    <>
      <ServiceHero
        eyebrow="Contacto"
        title="Hablemos sin rodeos"
        description="Cuéntanos brevemente el caso. Te respondemos con un diagnóstico inicial, alcance estimado y siguientes pasos concretos."
      />

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft sm:p-8">
            <h2 className="font-display text-xl font-semibold text-ink-950">
              Cuéntanos el contexto
            </h2>
            <p className="mt-2 text-sm text-ink-600">
              Sin formularios eternos. Solo lo necesario para responder rápido y
              proponerte una conversación útil.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6">
            {showContact ? (
              <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6">
                <h3 className="font-display text-base font-semibold text-ink-950">
                  Datos directos
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-ink-800">
                  {email ? (
                    <li className="flex items-start gap-2.5">
                      <Mail className="mt-0.5 h-4 w-4 text-brand-700" />
                      <a
                        href={`mailto:${email}`}
                        className="hover:text-brand-800"
                      >
                        {email}
                      </a>
                    </li>
                  ) : null}
                  {phone ? (
                    <li className="flex items-start gap-2.5">
                      <Phone className="mt-0.5 h-4 w-4 text-brand-700" />
                      <span>{phone}</span>
                    </li>
                  ) : null}
                  {address ? (
                    <li className="flex items-start gap-2.5">
                      <MapPin className="mt-0.5 h-4 w-4 text-brand-700" />
                      <span>{address}</span>
                    </li>
                  ) : null}
                </ul>
              </div>
            ) : null}

            <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
              <h3 className="font-display text-base font-semibold text-brand-900">
                Quieres un piloto del Copiloto Empresarial
              </h3>
              <p className="mt-2 text-sm text-brand-900/80">
                Indica en el mensaje el área (RRHH, finanzas, operaciones,
                reporting). Te enviamos un alcance de piloto guiado.
              </p>
            </div>

            <div className="rounded-2xl border border-ink-100 bg-white p-6">
              <h3 className="font-display text-base font-semibold text-ink-950">
                Tiempos de respuesta
              </h3>
              <p className="mt-2 text-sm text-ink-600">
                Respondemos en menos de 24 horas hábiles. Si tu caso es urgente,
                indícalo en el mensaje y lo priorizamos.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
