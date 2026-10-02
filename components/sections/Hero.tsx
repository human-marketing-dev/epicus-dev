import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface HeroData {
  eyebrow?: string;
  titulo?: string;
  descripcion?: string;
  ctaPrimario?: string;
  ctaSecundario?: string;
  stat1Num?: string;
  stat1Label?: string;
  stat2Num?: string;
  stat2Label?: string;
  stat3Num?: string;
  stat3Label?: string;
}

// ─── Sub-componentes internos ─────────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-overline text-blue mb-8">
      <span className="block w-8 h-px bg-blue" />
      {children}
    </p>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero({
  imagenUrl,
  data,
}: {
  imagenUrl?: any;
  data?: HeroData;
}) {
  return (
    <div className="relative min-h-[calc(100vh-68px)] flex flex-col lg:block">

      {/* ── Imagen — mitad derecha en desktop, bloque completo en mobile ── */}
      <div className="relative lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full overflow-hidden bg-ink h-[280px] lg:h-auto order-last lg:order-none">

        {imagenUrl ? (
          <img
            src={imagenUrl}
            alt="ALFRA INMOBILIARIA Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #0a1628 0%, #1e3a8a 40%, #0a0a0f 100%)",
              }}
            />
            <div
              className="absolute inset-0 flex items-center justify-center select-none pointer-events-none font-display font-light leading-none"
              style={{ fontSize: "220px", color: "rgba(255,255,255,0.05)" }}
              aria-hidden
            >
              E
            </div>
          </>
        )}

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(37,99,235,0.3) 0%, rgba(0,0,0,0.4) 100%)",
          }}
        />

        {/* Badge inferior — solo desktop */}
        <div className="absolute bottom-12 left-12 right-12 backdrop-blur-xl border border-white/15 bg-white/[0.08] px-7 py-6 text-white hidden lg:block">
          <div className="font-display text-h5 font-light italic mb-1">
            Alfra Intelligence
          </div>
          <div className="text-overline opacity-70 mb-5">
            Sistema de inteligencia comercial
          </div>
          <div className="h-px bg-white/10 mb-5" />
          <div className="flex gap-10">
            <div>
              <div className="font-display text-h4 font-light leading-none">
                {data?.stat1Num ?? "95"}
              </div>
              <div className="text-overline opacity-50 mt-1">
                {data?.stat1Label ?? "Proyectos activos"}
              </div>
            </div>
            <div>
              <div className="font-display text-h4 font-light leading-none">
                {data?.stat2Num ?? "4,480"}
              </div>
              <div className="text-overline opacity-50 mt-1">
                {data?.stat2Label ?? "Unidades disponibles"}
              </div>
            </div>
            <div>
              <div className="font-display text-h4 font-light leading-none">
                {data?.stat3Num ?? "MTY"}
              </div>
              <div className="text-overline opacity-50 mt-1">
                {data?.stat3Label ?? "Monterrey y área"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Contenido ── */}
      <Container className="relative flex flex-col justify-center lg:min-h-[calc(100vh-68px)] pt-[100px] pb-10 lg:pt-28 lg:pb-12">
        <div className="lg:w-1/2 lg:pr-16">

          <FadeIn delay={0}>
            <Eyebrow>
              {data?.eyebrow ?? "Asesoría Inmobiliaria · Monterrey"}
            </Eyebrow>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display text-h1 text-ink mb-7 tracking-[-0.02em]">
              Las mejores decisiones<br />
              inmobiliarias empiezan<br />
              con la{" "}
              <em className="italic text-blue">
                conversación<br />correcta.
              </em>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-b1 text-ink-mid max-w-[440px] mb-12">
              {data?.descripcion ?? "Permítenos conversar. Estamos seguros de que juntos podemos fortalecer la información que necesitas para tomar la mejor decisión posible."}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contacto"
                className="inline-block bg-blue hover:bg-blue-light text-white text-btn px-8 py-[14px] rounded-[4px] transition-all duration-200 hover:-translate-y-px"
              >
                {data?.ctaPrimario ?? "Agenda tu asesoría"}
              </Link>
              <Link
                href="/portafolio"
                className="inline-flex items-center gap-2 hover:gap-4 text-btn font-normal text-ink py-[14px] transition-all duration-200"
              >
                {data?.ctaSecundario ?? "Ver portafolio →"}
              </Link>
            </div>
          </FadeIn>

        </div>
      </Container>

    </div>
  );
}