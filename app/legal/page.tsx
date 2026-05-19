import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Términos de uso del sitio corporativo, propiedad intelectual y limitación de responsabilidad.",
  alternates: { canonical: "/legal" },
  robots: { index: true, follow: true },
};

export default function LegalPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Aviso legal"
        title="Condiciones de uso del sitio"
        description="Texto base editable. El cliente debe revisarlo con su área legal antes de considerarlo definitivo."
      />

      <Section className="bg-white">
        <article className="prose mx-auto max-w-3xl text-ink-700">
          <h2 className="font-display text-xl font-semibold text-ink-950">
            1. Titularidad
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            Este sitio es operado por {SITE.name}. Los datos completos del
            titular (denominación legal, domicilio y representante) deben
            registrarse antes de publicar en producción.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-ink-950">
            2. Propiedad intelectual
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            Los contenidos, marcas, diseños y elementos gráficos publicados en
            este sitio son propiedad de {SITE.name} o se utilizan bajo licencia.
            No se autoriza su reproducción total o parcial sin consentimiento
            previo por escrito.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-ink-950">
            3. Uso del sitio
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
            <li>Está prohibido cualquier uso que pueda dañar el sitio o sus servicios.</li>
            <li>El contenido del sitio es informativo y comercial; no constituye una oferta vinculante.</li>
            <li>Las propuestas, alcances y precios definitivos se entregan únicamente por canales formales.</li>
          </ul>

          <h2 className="mt-8 font-display text-xl font-semibold text-ink-950">
            4. Limitación de responsabilidad
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            {SITE.name} no garantiza la disponibilidad ininterrumpida del sitio
            ni la ausencia de errores en el contenido. Cualquier decisión
            tomada por terceros con base en este contenido es responsabilidad
            de quien la ejecute.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-ink-950">
            5. Legislación aplicable
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            Este aviso se rige por la legislación aplicable al domicilio legal
            de {SITE.name}. Cualquier controversia se resolverá en los
            tribunales competentes acordados contractualmente entre las partes.
          </p>

          <p className="mt-10 rounded-lg border border-ink-200 bg-ink-50 p-4 text-xs text-ink-600">
            <strong className="text-ink-800">Nota:</strong> este es un texto
            base editable. Debe validarse con asesoría legal antes de su
            publicación oficial.
          </p>
        </article>
      </Section>
    </>
  );
}
