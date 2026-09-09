import FadeIn from "@/components/ui/FadeIn";
import Container from "@/components/ui/Container";
import { ChipConfirmar } from "@/components/sections/demo/shared";

// ─── Data ─────────────────────────────────────────────────────────────────────
// `pendiente: true` = dato marcado «confirmar» en el Brief Maestro (§0).
// Sustituye `valor` y quita la bandera cuando Epicus valide la cifra.

const cifras = [
  {
    valor: "+95",
    descriptor: "proyectos activos en monitoreo permanente",
    pendiente: false,
  },
  {
    valor: "—",
    descriptor: "desarrolladores atendidos en Monterrey y su área metropolitana",
    pendiente: true,
  },
  {
    valor: "3",
    descriptor: "líneas de producto: residencial, vertical e industrial",
    pendiente: false,
  },
  {
    valor: "—",
    descriptor: "operaciones acompañadas hasta la escrituración",
    pendiente: true,
  },
];

// ─── 03 · Cifras ──────────────────────────────────────────────────────────────

export default function Cifras() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0f1a 0%, #101f3d 55%, #0a0a0f 100%)",
      }}
    >
      <div
        className="absolute -top-32 -left-24 w-[460px] h-[460px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10">
        <FadeIn delay={0}>
          <h2 className="font-display text-h2 text-white max-w-[620px] mb-14">
            La escala que sostiene la{" "}
            <em className="italic text-blue-light">recomendación.</em>
          </h2>
        </FadeIn>

        {/* Rejilla de cifras */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08] border-y border-white/[0.08]">
          {cifras.map((c, i) => (
            <FadeIn key={c.descriptor} delay={0.1 + i * 0.08}>
              <div className="bg-[#0b101c] px-7 py-9 h-full flex flex-col">
                <div className="font-display text-[54px] leading-none font-light text-white mb-4">
                  {c.valor}
                </div>
                <p className="text-[13px] font-light text-white/50 leading-[1.7] flex-1">
                  {c.descriptor}
                </p>
                {c.pendiente && (
                  <div className="mt-4">
                    <ChipConfirmar tone="dark" />
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Pie de bloque */}
        <FadeIn delay={0.45}>
          <p className="text-[14px] font-light text-white/55 leading-[1.8] max-w-[560px] mt-10">
            Elegimos dentro del mercado completo, y por eso la recomendación
            sigue tu perfil.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
