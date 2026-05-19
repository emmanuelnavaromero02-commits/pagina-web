import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Aviso de privacidad y tratamiento de datos personales para visitantes y prospectos del sitio corporativo.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Aviso de privacidad"
        title="Cómo tratamos tus datos personales"
        description="Este aviso describe, en términos generales, el tratamiento de los datos personales que recopilamos a través del sitio. El texto definitivo debe ser revisado por el área legal del cliente antes de publicación."
      />

      <Section className="bg-white">
        <article className="prose mx-auto max-w-3xl text-ink-700">
          <h2 className="font-display text-xl font-semibold text-ink-950">
            1. Responsable del tratamiento
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            {SITE.name} es responsable del tratamiento de los datos personales
            que recibimos a través del formulario de contacto y de los canales
            corporativos publicados en el sitio. Los datos del responsable, su
            domicilio fiscal y su designación legal deben completarse antes de
            publicar este aviso en producción.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-ink-950">
            2. Datos recabados
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            A través del formulario de contacto recabamos nombre, empresa,
            correo corporativo, teléfono (opcional), servicio de interés y
            mensaje. No recabamos datos sensibles desde esta web.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-ink-950">
            3. Finalidades del tratamiento
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
            <li>Responder solicitudes de información y propuestas comerciales.</li>
            <li>Agendar reuniones de diagnóstico o pilotos del Copiloto Empresarial.</li>
            <li>Gestionar contratos, facturación y soporte cuando aplique.</li>
          </ul>

          <h2 className="mt-8 font-display text-xl font-semibold text-ink-950">
            4. Transferencias
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            No transferimos datos personales a terceros sin tu consentimiento,
            salvo por obligación legal o por proveedores de infraestructura
            cloud (por ejemplo, AWS para correo transaccional) bajo contratos de
            confidencialidad.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-ink-950">
            5. Derechos ARCO
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            Puedes ejercer tus derechos de acceso, rectificación, cancelación u
            oposición escribiéndonos desde la página de contacto. Atenderemos
            tu solicitud en los plazos establecidos por la legislación
            aplicable.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-ink-950">
            6. Cambios al aviso
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            Podemos actualizar este aviso cuando cambie la operación, la
            tecnología o la legislación aplicable. La versión vigente siempre
            estará disponible en esta URL.
          </p>

          <p className="mt-10 rounded-lg border border-ink-200 bg-ink-50 p-4 text-xs text-ink-600">
            <strong className="text-ink-800">Nota:</strong> este es un texto
            base editable. El cliente debe validarlo con su área legal antes de
            considerarlo definitivo.
          </p>
        </article>
      </Section>
    </>
  );
}
