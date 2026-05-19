import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Legal Notice",
  description:
    "Terms of use for the corporate site, intellectual property, and limitation of liability.",
  alternates: { canonical: "/legal" },
  robots: { index: true, follow: true },
};

export default function LegalPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Legal Notice"
        title="Terms of use of the site"
        description="Editable base text. The client must review it with legal counsel before considering it final."
      />

      <Section className="bg-white">
        <article className="prose mx-auto max-w-3xl text-ink-700">
          <h2 className="font-display text-xl font-semibold text-ink-950">
            1. Ownership
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            This site is operated by {SITE.name}. The full details of the
            owner (legal name, registered address, and representative) must be
            recorded before publishing in production.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-ink-950">
            2. Intellectual property
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            The content, trademarks, designs, and graphics published on this
            site are the property of {SITE.name} or are used under license.
            Total or partial reproduction is not authorized without prior
            written consent.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-ink-950">
            3. Use of the site
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
            <li>
              Any use that may harm the site or its services is prohibited.
            </li>
            <li>
              The content is informative and commercial; it does not
              constitute a binding offer.
            </li>
            <li>
              Final proposals, scopes, and prices are delivered only through
              formal channels.
            </li>
          </ul>

          <h2 className="mt-8 font-display text-xl font-semibold text-ink-950">
            4. Limitation of liability
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            {SITE.name} does not guarantee uninterrupted availability of the
            site or the absence of errors in its content. Any decision made by
            third parties based on this content is the responsibility of the
            party making the decision.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-ink-950">
            5. Applicable law
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            This notice is governed by the legislation applicable to the legal
            domicile of {SITE.name}. Any dispute will be resolved before the
            competent courts contractually agreed by the parties.
          </p>

          <p className="mt-10 rounded-lg border border-ink-200 bg-ink-50 p-4 text-xs text-ink-600">
            <strong className="text-ink-800">Note (TODO_CLIENTE):</strong> this
            is editable base text. It must be validated with legal counsel for
            both target jurisdictions (Mexico and Spain) before official
            publication.
          </p>
        </article>
      </Section>
    </>
  );
}
