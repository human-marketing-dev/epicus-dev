import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function DesarrolladoresHero() {
  return (
    <div
      className="relative min-h-[480px] flex items-center overflow-hidden bg-ink"
      style={{ background: "linear-gradient(135deg, #0a0f1a 0%, #0f1f3d 50%, #0a0a0f 100%)" }}
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 65%)" }} />

      <Container className="relative z-10 py-28">
        <FadeIn delay={0}>
          <p className="flex items-center gap-3 text-overline text-blue-light/70 mb-5">
            <span className="block w-6 h-px bg-blue-light/70" />
            Para desarrolladores
          </p>
          <h1 className="font-display text-h1 text-white max-w-[700px] mb-6">
            Tu proyecto,<br />
            <em className="italic text-blue-light">comercializado</em><br />
            con estructura y resultados.
          </h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="text-b1 font-light text-white/55 max-w-[560px] mb-10">
            ALFRA INMOBILIARIA opera como brazo comercial estratégico para desarrolladores que
            buscan resultados de ventas reales, no promesas. Ponemos nuestro equipo,
            nuestros sistemas y nuestro acceso al mercado al servicio de tu proyecto.
          </p>
        </FadeIn>
        <FadeIn delay={0.25}>
          <Link href="/contacto" className="inline-block bg-blue hover:bg-blue-light text-white text-btn px-8 py-[14px] rounded-[4px] transition-all duration-200 hover:-translate-y-px">
            Platica con nosotros
          </Link>
        </FadeIn>
      </Container>
    </div>
  );
}