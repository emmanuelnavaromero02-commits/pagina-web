import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { AfterSteps } from "@/components/contact/AfterSteps";
import { ContactForm } from "@/components/contact/ContactForm";
import { Section } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SITE, hasContactInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact · Diagnosis, SAP integration, or Enterprise Copilot pilot",
  description:
    "Tell us where your operation is losing time, money, or control. We will help identify a focused path: software, integration, automation, data, or Enterprise Copilot.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const { email, phone, address } = SITE.contact;
  const showContact = hasContactInfo();

  return (
    <>
      <ServiceHero
        eyebrow="Contact"
        title="Start with one measurable business problem."
        description="Tell us where your operation is losing time, money, or control. We will help identify a focused solution path — software, integration, automation, data, or Enterprise Copilot."
      />

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft sm:p-8">
            <h2 className="font-display text-xl font-semibold text-ink-950">
              Tell us the context
            </h2>
            <p className="mt-2 text-sm text-ink-600">
              No endless forms. Just enough to respond quickly and propose a
              useful conversation.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6">
            {showContact ? (
              <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6">
                <h3 className="font-display text-base font-semibold text-ink-950">
                  Direct contacts
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
                Want an Enterprise Copilot pilot?
              </h3>
              <p className="mt-2 text-sm text-brand-900/80">
                Mention the area in your message (HR, finance, operations,
                reporting). We will send a scoped guided-pilot proposal.
              </p>
            </div>

            <div className="rounded-2xl border border-ink-100 bg-white p-6">
              <h3 className="font-display text-base font-semibold text-ink-950">
                Why work with us
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-700">
                <li>· First orientation with no commitment.</li>
                <li>· Technical and business judgment in the room.</li>
                <li>· Experience in SAP, cloud, data, and AI.</li>
                <li>· We do not share your data with third parties.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-ink-100 bg-white p-6">
              <h3 className="font-display text-base font-semibold text-ink-950">
                Response time
              </h3>
              <p className="mt-2 text-sm text-ink-600">
                We respond within one business day. If the case is urgent,
                mention it in the message and we will prioritize it.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      <AfterSteps />
    </>
  );
}
