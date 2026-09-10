import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

// ─── 01 · Hero ────────────────────────────────────────────────────────────────
// Idea rectora y bifurcación de rutas.
// La imagen viene de Sanity (imagenSitio · seccion "hero"). Si no hay imagen
// cargada, cae a un gradiente de marca.

export default function Hero({
  imagenUrl,
  imagenAlt,
}: {
  imagenUrl?: string | null;
  imagenAlt?: string | null;
}) {
  return (
    <div className="relative min-h-[calc(100vh-68px)] flex flex-col lg:block bg-white">

      {/* ── Panel visual — mitad derecha en desktop ── */}
      <div className="relative lg:absolute lg:top-0 lg:right-0 lg:w-[46%] lg:h-full overflow-hidden bg-ink h-[320px] lg:h-auto order-last lg:order-none">

        {imagenUrl ? (
          <img
            src={imagenUrl}
            alt={imagenAlt ?? "Proyecto del portafolio de Epicus"}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(150deg, #0a1628 0%, #142d6b 45%, #0a0a0f 100%)",
              }}
            />
            <div
              className="absolute inset-0 flex items-center justify-center select-none pointer-events-none font-display font-light leading-none"
              style={{ fontSize: "260px", color: "rgba(255,255,255,0.04)" }}
              aria-hidden
            >
              E
            </div>
          </>
        )}

        {/* Velo — asienta la foto y da contraste al badge */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(150deg, rgba(10,22,40,0.45) 0%, rgba(20,45,107,0.35) 40%, rgba(10,10,15,0.75) 100%)",
          }}
          aria-hidden
        />

        {/* Badge de escala — solo desktop */}
        <div className="absolute bottom-12 left-10 right-10 backdrop-blur-xl border border-white/15 bg-white/[0.07] px-7 py-6 text-white hidden lg:block">
          <div className="flex items-center gap-2 mb-5">
            <span className="relative flex w-[7px] h-[7px]">
              <span className="absolute inline-flex w-full h-full rounded-full bg-blue-light opacity-60 animate-ping" />
              <span className="relative inline-flex w-[7px] h-[7px] rounded-full bg-blue-light" />
            </span>
            <span className="text-overline text-white/60">
              Monitoreo permanente
            </span>
          </div>

          <div className="h-px bg-white/10 mb-5" />

          <div className="flex gap-9">
            <div>
              <div className="font-display text-[32px] font-light leading-none">
                +95
              </div>
              <div className="text-overline text-white/45 mt-2">
                Proyectos activos
              </div>
            </div>
            <div>
              <div className="font-display text-[32px] font-light leading-none">
                3
              </div>
              <div className="text-overline text-white/45 mt-2">
                Líneas de producto
              </div>
            </div>
            <div>
              <div className="font-display text-[32px] font-light leading-none">
                MTY
              </div>
              <div className="text-overline text-white/45 mt-2">
                Y área metropolitana
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Contenido ── */}
      <Container className="relative flex flex-col justify-center lg:min-h-[calc(100vh-68px)] pt-[110px] pb-14 lg:py-28">
        <div className="lg:w-[54%] lg:pr-16">

          <FadeIn delay={0}>
            <p className="flex items-center gap-3 text-overline text-blue mb-8">
              <span className="block w-8 h-px bg-blue" />
              Inteligencia inmobiliaria en Monterrey
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display text-h1 text-ink mb-7 tracking-[-0.02em]">
              Toda decisión inmobiliaria<br />
              es una{" "}
              <em className="italic text-blue">decisión de capital.</em>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-b1 text-ink-mid max-w-[520px] mb-11">
              Operamos la comercialización de los principales desarrolladores de
              Monterrey. Esa posición nos permite elegir dentro del mercado
              completo y maximizar el rendimiento de cada decisión: la tuya y la
              de tu proyecto.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#comprador"
                className="inline-block bg-blue hover:bg-blue-light text-white text-btn px-8 py-[15px] rounded-[4px] transition-all duration-200 hover:-translate-y-px"
              >
                Quiero comprar o invertir
              </Link>
              <Link
                href="#desarrollador"
                className="inline-flex items-center gap-2 hover:gap-4 text-btn text-ink border border-black/15 hover:border-blue hover:text-blue px-8 py-[15px] rounded-[4px] transition-all duration-200"
              >
                Soy desarrollador
              </Link>
            </div>
          </FadeIn>

          {/* Dato de apoyo */}
          <FadeIn delay={0.4}>
            <div className="flex items-center gap-3 mt-12 pt-8 border-t border-black/[0.08] max-w-[520px]">
              <span className="relative flex w-[7px] h-[7px] shrink-0">
                <span className="absolute inline-flex w-full h-full rounded-full bg-blue opacity-50 animate-ping" />
                <span className="relative inline-flex w-[7px] h-[7px] rounded-full bg-blue" />
              </span>
              <p className="text-[13px] font-light text-ink-soft tracking-[0.02em]">
                Más de 95 proyectos activos en monitoreo permanente.
              </p>
            </div>
          </FadeIn>

        </div>
      </Container>
    </div>
  );
}
