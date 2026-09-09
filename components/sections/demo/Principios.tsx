import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/sections/demo/shared";

// ─── Data ─────────────────────────────────────────────────────────────────────

const principios = [
  {
    num: "01",
    title: "Tu decisión es nuestra métrica",
    body: "Medimos el éxito por la calidad de la decisión que tomas, y esa métrica ordena todo lo demás.",
  },
  {
    num: "02",
    title: "La información es un activo",
    body: "Invertimos en inteligencia de mercado porque la información bien procesada es la mayor ventaja que podemos darte.",
  },
  {
    num: "03",
    title: "El criterio conduce la operación",
    body: "Acompañamos con tiempo y con argumentos. La mejor operación es la que cierras convencido.",
  },
  {
    num: "04",
    title: "Los resultados se miden",
    body: "Trabajamos con KPI, dashboards y sistemas de seguimiento. La estructura nos hace constantes, escalables y confiables.",
  },
  {
    num: "05",
    title: "El horizonte es largo",
    body: "Construimos relaciones que duran décadas. Muchos de nuestros clientes han comprado con nosotros más de una vez.",
  },
  {
    num: "06",
    title: "La recomendación es honesta",
    body: "Cuando una propiedad se ajusta a tu objetivo, lo decimos. Cuando otra se ajusta mejor, también.",
  },
];

// ─── 09 · Principios ──────────────────────────────────────────────────────────

export default function Principios() {
  return (
    <Section className="bg-white" size="lg">
      <FadeIn delay={0}>
        <SectionLabel>Nuestros principios</SectionLabel>
        <h2 className="font-display text-h2 text-ink">
          Cómo pensamos.{" "}
          <em className="italic text-blue">Cómo operamos.</em>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.08] border border-black/[0.08] mt-14">
        {principios.map((p, i) => (
          <FadeIn key={p.num} delay={0.1 + i * 0.07}>
            <div className="bg-white px-8 py-9 h-full group hover:bg-cream transition-colors duration-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-h4 font-light text-blue leading-none">
                  {p.num}
                </span>
                <span className="block flex-1 h-px bg-black/[0.08] group-hover:bg-blue/30 transition-colors duration-200" />
              </div>
              <h3 className="text-h6 text-ink mb-3">{p.title}</h3>
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
