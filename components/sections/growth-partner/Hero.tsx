import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

// ─── Hero · Growth Partner ────────────────────────────────────────────────────

export default function GrowthPartnerHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(140deg, #0a0f1a 0%, #101f3d 55%, #0a0a0f 100%)",
      }}
    >
      <div
        className="absolute -top-32 -right-24 w-[520px] h-[520px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.26) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10 pt-[150px] pb-24 lg:pt-[190px] lg:pb-32">
        <div className="max-w-[720px]">

          <FadeIn delay={0}>
            <p className="flex items-center gap-3 text-overline text-blue-light mb-8">
              <span className="block w-8 h-px bg-blue-light" />
              Growth Partner
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display text-h1 text-white mb-7 tracking-[-0.02em]">
              Tú te enfocas en desarrollar;<br />
              nosotros en <em className="italic text-blue-light">vender.</em>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-b1 text-white/60 max-w-[560px] mb-11">
              Growth Partner es el servicio con el que Epicus opera el área
              comercial completa de un desarrollo: atracción de leads,
              procesamiento y agendamiento, dirección de ventas y cierre. El
              argumento es uno solo: velocidad de colocación.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contacto"
                className="inline-block bg-blue hover:bg-blue-light text-white text-btn px-8 py-[15px] rounded-[4px] transition-all duration-200 hover:-translate-y-px"
              >
                Hablemos de tu proyecto
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 hover:gap-4 text-btn text-white border border-white/25 hover:border-white/60 px-8 py-[15px] rounded-[4px] transition-all duration-200"
              >
                Conocer Epicus
                <span aria-hidden>→</span>
              </Link>
            </div>
          </FadeIn>

        </div>
      </Container>
    </section>
  );
}
