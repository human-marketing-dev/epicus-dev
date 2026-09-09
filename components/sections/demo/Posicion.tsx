import Link from "next/link";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/sections/demo/shared";

// ─── Diagrama de doble posición ───────────────────────────────────────────────

function Conector() {
  return (
    <div className="flex justify-center" aria-hidden>
      <span className="block w-px h-8 bg-gradient-to-b from-black/[0.12] to-blue/40" />
    </div>
  );
}

function DiagramaDoblePosicion() {
  return (
    <div className="w-full">
      {/* Frente 1 — desarrolladores */}
      <div className="bg-white border border-black/[0.08] px-7 py-6">
        <p className="text-overline text-ink-soft mb-2">Frente 01</p>
        <h3 className="text-h6 text-ink mb-1">Desarrolladores</h3>
        <p className="text-[13px] font-light text-ink-soft leading-[1.7]">
          Comercializamos sus desarrollos en Monterrey y su área metropolitana.
        </p>
      </div>

      <Conector />

      {/* Núcleo — Epicus */}
      <div
        className="px-7 py-7 text-white"
        style={{
          background:
            "linear-gradient(135deg, #0a1628 0%, #142d6b 60%, #0a0a0f 100%)",
        }}
      >
        <p className="text-overline text-blue-light mb-2">Epicus</p>
        <h3 className="font-display text-h4 font-light mb-4">
          Inteligencia de mercado
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Precio de origen",
            "Inventario en preventa",
            "Lectura directa del mercado",
          ].map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-light tracking-[0.04em] text-white/70 border border-white/15 px-3 py-[5px] rounded-[2px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Conector />

      {/* Frente 2 — compradores */}
      <div className="bg-white border border-black/[0.08] px-7 py-6">
        <p className="text-overline text-ink-soft mb-2">Frente 02</p>
        <h3 className="text-h6 text-ink mb-1">Compradores e inversionistas</h3>
        <p className="text-[13px] font-light text-ink-soft leading-[1.7]">
          Asesoramos la selección de propiedad residencial, vertical e industrial.
        </p>
      </div>
    </div>
  );
}

// ─── 02 · Posición ────────────────────────────────────────────────────────────

export default function Posicion() {
  return (
    <Section className="bg-cream" size="lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

        {/* Columna izquierda — texto */}
        <FadeIn delay={0} direction="right">
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

        {/* Columna derecha — diagrama */}
        <FadeIn delay={0.15} direction="left">
          <DiagramaDoblePosicion />
        </FadeIn>

      </div>
    </Section>
  );
}
