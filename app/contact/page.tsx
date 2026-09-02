import {
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Phone,
  ShoppingBag,
} from "lucide-react";
import { AfterSteps } from "@/components/contact/AfterSteps";
import { ContactForm } from "@/components/contact/ContactForm";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/constants";
import { l } from "@/lib/i18n/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: l(
    "Contacto · Diagnóstico, fábrica SAP o piloto de Agentes de Decisión IA",
    "Contact · Diagnosis, SAP factory, or AI Decision Agents pilot",
  ),
  description: l(
    "Cuéntanos qué problema operativo quieres resolver. Identificaremos una ruta enfocada con software, integración, automatización, datos o Agentes de Decisión IA.",
    "Tell us which operational problem you want to solve. We will identify a focused path using software, integration, automation, data, or AI Decision Agents.",
  ),
  path: "/contact",
});

const CONTACT_CHANNELS = [
  {
    label: l("Ventas", "Sales"),
    description: l("Proyectos, servicios y diagnósticos", "Projects, services, and assessments"),
    email: "ventas@7businesssolutions.com",
    icon: ShoppingBag,
  },
  {
    label: l("Finanzas", "Finance"),
    description: l("Facturación y operaciones financieras", "Billing and finance operations"),
    email: "finance.operations@7businesssolutions.com",
    icon: CircleDollarSign,
  },
];

export default function ContactPage() {
  const { phone, phoneHref } = SITE.contact;

  return (
    <>
      <section className="dark-panel relative overflow-hidden border-b border-white/10 text-white">
        <div aria-hidden className="surface-noise pointer-events-none absolute inset-0 opacity-[0.1]" />
        <div className="site-container relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow !text-accent-400">
              {l("Contacto", "Contact")}
            </p>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              {l(
                "Empecemos por el problema que quieres resolver.",
                "Let’s start with the problem you need to solve.",
              )}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
              {l(
                "Comparte el contexto. Te ayudaremos a identificar un alcance viable y el siguiente paso adecuado.",
                "Share the context. We will help identify a viable scope and the right next step.",
              )}
            </p>
          </div>

          <address className="not-italic rounded-3xl border border-white/10 bg-white/[0.065] p-5 shadow-float backdrop-blur sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-400">
              {l("Contacto directo", "Direct contact")}
            </p>
            <div className="mt-4 space-y-3">
              {CONTACT_CHANNELS.map((channel) => {
                const ChannelIcon = channel.icon;
                return (
                  <a
                    key={channel.email}
                    href={`mailto:${channel.email}`}
                    className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-white transition-colors hover:bg-white/10"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-400/10 text-accent-400">
                      <ChannelIcon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <strong className="block text-sm font-semibold text-white">{channel.label}</strong>
                      <span className="mt-0.5 block text-xs leading-relaxed text-ink-400">{channel.description}</span>
                      <span className="mt-1.5 block break-all text-sm font-medium text-ink-100 group-hover:text-accent-400">{channel.email}</span>
                    </span>
                  </a>
                );
              })}
              <a
                href={`tel:${phoneHref}`}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                {phone}
              </a>
            </div>
          </address>
        </div>
      </section>

      <Section className="bg-ink-50 py-14 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.55fr] lg:items-start">
          <div className="rounded-[2rem] border border-ink-100 bg-white p-6 shadow-float sm:p-8 lg:p-10">
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

          <aside className="overflow-hidden rounded-3xl bg-ink-950 p-6 text-white shadow-elevate sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
              {l("Para empezar", "To get started")}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold">
              {l("Cuéntanos estos tres puntos.", "Tell us these three points.")}
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-ink-200">
              {[
                l("El proceso o área involucrada.", "The process or area involved."),
                l("El principal bloqueo operativo.", "The main operational bottleneck."),
                l("El resultado que necesitas conseguir.", "The result you need to achieve."),
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-7 border-t border-white/10 pt-6">
              <div className="flex gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    {l(
                      "Objetivo de respuesta: un día hábil",
                      "Response target: one business day",
                    )}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-300">
                    {l(
                      "Para los Agentes de Decisión IA, indica también el área de aplicación.",
                      "For AI Decision Agents, also mention the target area.",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <AfterSteps />
    </>
  );
}
