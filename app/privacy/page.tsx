import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy and personal data handling for visitors and prospects of the corporate site.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Privacy Policy"
        title="How we handle your personal data"
        description="This notice describes, in general terms, the handling of personal data collected through the site. The final text must be reviewed by the client's legal team before publication."
      />

      <Section className="bg-white">
        <article className="prose mx-auto max-w-3xl text-ink-700">
          <h2 className="font-display text-xl font-semibold text-ink-950">
            1. Data controller
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            {SITE.name} is responsible for the handling of personal data
            received through the contact form and the corporate channels
            published on the site. The controller&rsquo;s full details (legal name,
            registered address, and legal representative) must be filled in
            before publishing this notice in production.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-ink-950">
            2. Data we collect
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            Through the contact form we collect name, company, corporate
            email, phone (optional), area of interest, and message. We do not
            collect sensitive data from this website.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-ink-950">
            3. Purposes of processing
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
            <li>Respond to information requests and commercial proposals.</li>
            <li>Schedule diagnostic meetings or Enterprise Copilot pilots.</li>
            <li>
              Manage contracts, billing, and support where applicable.
            </li>
          </ul>

          <h2 className="mt-8 font-display text-xl font-semibold text-ink-950">
            4. Transfers
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            We do not share personal data with third parties without your
            consent, except for legal obligation or cloud infrastructure
            providers (for example, AWS for transactional email) under
            confidentiality agreements.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-ink-950">
            5. Rights of access, rectification, cancellation, and opposition
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            You can exercise your rights of access, rectification,
            cancellation, or opposition by writing to us through the contact
            page. We will respond within the timeframes set by applicable
            legislation.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-ink-950">
            6. Changes to this notice
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            We may update this notice when operations, technology, or
            applicable legislation change. The current version will always be
            available at this URL.
          </p>

          <p className="mt-10 rounded-lg border border-ink-200 bg-ink-50 p-4 text-xs text-ink-600">
            <strong className="text-ink-800">Note (TODO_CLIENTE):</strong> this
            is editable base text. The client must validate it with legal
            counsel before considering it final, including jurisdiction-specific
            requirements (Mexico LFPDPPP and Spain LOPDGDD / GDPR).
          </p>
        </article>
      </Section>
    </>
  );
}
