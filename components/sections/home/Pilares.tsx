import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/sections/shared";

// ─── Data ─────────────────────────────────────────────────────────────────────

const pilares = [
  {
    num: "01",
    title: "Posición estratégica",
    body: "Operamos como brazo comercial de los principales desarrolladores de Monterrey. Vemos el mercado desde adentro.",
  },
  {
    num: "02",
    title: "Inteligencia real de mercado",
    body: "Monitoreamos precio, absorción y velocidad de venta en tiempo real. Cada recomendación viaja con su dato.",
  },
  {
    num: "03",
    title: "Amplitud de inventario",
    body: "Con más de 95 proyectos activos, elegimos dentro del mercado completo y la recomendación sigue tu perfil.",
  },
  {
    num: "04",
    title: "Solución integral",
    body: "Cubrimos el proceso completo: del primer análisis a la escrituración, y del seguimiento del activo a tu siguiente operación.",
  },
];

// ─── 05 · Pilares ─────────────────────────────────────────────────────────────

export default function Pilares() {
  return (
    <Section className="bg-cream" size="lg">
      <FadeIn delay={0}>
        <SectionLabel>Los fundamentos de la firma</SectionLabel>
        <h2 className="font-display text-h2 text-ink">
          Cuatro <em className="italic text-blue">fundamentos.</em>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.08] mt-14">
        {pilares.map((p, i) => (
          <FadeIn key={p.num} delay={0.15 + i * 0.1}>
            <div className="bg-white px-8 py-10 h-full group hover:bg-[#f4f3f0] transition-colors duration-200">
              <div className="font-display text-[40px] font-light text-blue leading-none mb-5">
                {p.num}
              </div>
              <h3 className="font-display text-h4 font-normal text-ink mb-3">
                {p.title}
              </h3>
              <p className="text-[13px] font-light text-ink-soft leading-[1.8]">
                {p.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
