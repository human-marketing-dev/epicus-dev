import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

const WHATSAPP = "https://wa.me/528115385567";

// ─── 11 · Cierre ──────────────────────────────────────────────────────────────

export default function Cierre() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0f1a 0%, #0f1f3d 60%, #0a0a0f 100%)",
      }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 65%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10 text-center">
        <FadeIn delay={0}>
          <h2 className="font-display text-h2 text-white max-w-[820px] mx-auto mb-6">
            Las mejores decisiones inmobiliarias empiezan con la{" "}
            <em className="italic text-blue-light">conversación correcta.</em>
          </h2>
          <p className="text-b1 text-white/60 max-w-[540px] mx-auto mb-11">
            Cuéntanos qué estás buscando y ponemos el mercado completo a trabajar
            a favor de tu objetivo.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="inline-block bg-blue hover:bg-blue-light text-white text-btn px-8 py-[15px] rounded-[4px] transition-all duration-200 hover:-translate-y-px"
            >
              Agendar una conversación
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:gap-4 text-btn text-white border border-white/25 hover:border-white/60 px-8 py-[15px] rounded-[4px] transition-all duration-200"
            >
              Escribir por WhatsApp
              <span aria-hidden>→</span>
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
