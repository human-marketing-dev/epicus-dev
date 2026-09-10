import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/sections/demo/shared";

// ─── Foto flotante ────────────────────────────────────────────────────────────
// Marco desplazado + sombra profunda para que la imagen se despegue del fondo.
// El encuadre se corre a la derecha para sacar del cuadro el auto de la esquina.

function FotoFlotante() {
  return (
    <div className="relative">

      {/* Marco desplazado */}
      <div
        className="hidden sm:block absolute -left-5 -top-5 w-full h-full border border-blue/30 pointer-events-none"
        aria-hidden
      />

      {/* Bloque de acento */}
      <div
        className="hidden sm:block absolute -right-4 -bottom-4 w-28 h-28 bg-blue/10 pointer-events-none"
        aria-hidden
      />

      {/* Imagen */}
      <div
        className="relative aspect-[4/3] overflow-hidden bg-ink"
        style={{
          boxShadow:
            "0 48px 88px -28px rgba(10,10,15,0.45), 0 16px 32px -16px rgba(10,10,15,0.28)",
        }}
      >
        <Image
          src="/epicus-santte.webp"
          alt="Santte Residencial, desarrollo del portafolio de Epicus en Monterrey"
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover"
          style={{ objectPosition: "60% 50%" }}
        />
      </div>
    </div>
  );
}

// ─── 02 · Posición ────────────────────────────────────────────────────────────

export default function Posicion() {
  return (
    <Section className="bg-cream" size="lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Columna izquierda — foto */}
        <FadeIn
          delay={0.15}
          direction="right"
          className="order-2 lg:order-1 lg:pl-5"
        >
          <FotoFlotante />
        </FadeIn>

        {/* Columna derecha — texto */}
        <FadeIn delay={0} direction="left" className="order-1 lg:order-2">
          <div>
            <SectionLabel>Quiénes somos</SectionLabel>

            <h2 className="font-display text-h2 text-ink mb-7">
              Operamos el mercado<br />
              que te <em className="italic text-blue">asesoramos.</em>
            </h2>

            <p className="text-b1 text-ink-mid mb-5">
              Epicus trabaja en los dos frentes del mercado inmobiliario
              regiomontano. Comercializamos desarrollos para los principales
              desarrolladores de Monterrey y su área metropolitana, y asesoramos
              a quienes compran e invierten en ellos.
            </p>
            <p className="text-b1 text-ink-mid mb-5">
              Esa doble posición nos da acceso a precio de origen, a inventario
              en etapa previa a su salida abierta y a una lectura directa de cómo
              se comporta cada proyecto. Con esa información, cada decisión se
              toma con criterio y con datos reales.
            </p>
            <p className="text-b1 text-ink-mid mb-9">
              Trabajamos con horizonte patrimonial. Una propiedad rinde durante
              décadas, y nuestro trabajo es que rinda al máximo desde la
              elección.
            </p>

            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 hover:gap-4 text-btn text-ink hover:text-blue transition-all duration-200"
            >
              Conocer a Epicus
              <span aria-hidden>→</span>
            </Link>
          </div>
        </FadeIn>

      </div>
    </Section>
  );
}
