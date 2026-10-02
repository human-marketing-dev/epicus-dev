import Link from "next/link";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/sections/shared";

// ─── 02 · Posición ────────────────────────────────────────────────────────────

export default function Posicion() {
  return (
    <Section className="bg-cream" size="lg">
      <FadeIn delay={0}>
        <div className="max-w-[760px]">
          <SectionLabel>Quiénes somos</SectionLabel>

          <h2 className="font-display text-h2 text-ink mb-7">
            Operamos el mercado<br />
            que te <em className="italic text-blue">asesoramos.</em>
          </h2>

          <p className="text-b1 text-ink-mid mb-5">
            Alfra Inmobiliaria trabaja en los dos frentes del mercado
            inmobiliario regiomontano. Comercializamos desarrollos para los
            principales desarrolladores de Monterrey y su área metropolitana, y
            asesoramos a quienes compran e invierten en ellos.
          </p>
          <p className="text-b1 text-ink-mid mb-5">
            Esa doble posición nos da acceso a precio de origen, a inventario en
            etapa previa a su salida abierta y a una lectura directa de cómo se
            comporta cada proyecto. Con esa información, cada decisión se toma
            con criterio y con datos reales.
          </p>
          <p className="text-b1 text-ink-mid mb-9">
            Trabajamos con horizonte patrimonial. Una propiedad rinde durante
            décadas, y nuestro trabajo es que rinda al máximo desde la elección.
          </p>

          <Link
            href="/nosotros"
            className="inline-flex items-center gap-2 hover:gap-4 text-btn text-ink hover:text-blue transition-all duration-200"
          >
            Conocer a Alfra Inmobiliaria
            <span aria-hidden>→</span>
          </Link>
        </div>
      </FadeIn>
    </Section>
  );
}
