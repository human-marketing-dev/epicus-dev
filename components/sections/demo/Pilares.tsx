import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { SectionLabel, IconBox, svgStyle } from "@/components/sections/demo/shared";

// ─── Iconos ───────────────────────────────────────────────────────────────────

const IconPosicion = () => (
  <svg viewBox="0 0 24 24" style={svgStyle}>
    <path d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" />
    <circle cx="12" cy="11" r="3" />
  </svg>
);

const IconDatos = () => (
  <svg viewBox="0 0 24 24" style={svgStyle}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const IconAmplitud = () => (
  <svg viewBox="0 0 24 24" style={svgStyle}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const IconIntegral = () => (
  <svg viewBox="0 0 24 24" style={svgStyle}>
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const pilares = [
  {
    num: "01",
    icon: <IconPosicion />,
    title: "Posición estratégica",
    body: "Operamos como brazo comercial de los principales desarrolladores de Monterrey. Vemos el mercado desde adentro.",
  },
  {
    num: "02",
    icon: <IconDatos />,
    title: "Inteligencia real de mercado",
    body: "Monitoreamos precio, absorción y velocidad de venta en tiempo real. Cada recomendación viaja con su dato.",
  },
  {
    num: "03",
    icon: <IconAmplitud />,
    title: "Amplitud de inventario",
    body: "Con más de 95 proyectos activos, elegimos dentro del mercado completo y la recomendación sigue tu perfil.",
  },
  {
    num: "04",
    icon: <IconIntegral />,
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
            <div className="relative bg-white px-8 py-10 h-full overflow-hidden group hover:bg-[#f4f3f0] transition-colors duration-200">
              <span
                className="absolute top-4 right-5 font-display font-light leading-none select-none pointer-events-none text-[80px]"
                style={{ color: "rgba(37,99,235,0.08)" }}
                aria-hidden
              >
                {p.num}
              </span>
              <IconBox className="relative mb-5">{p.icon}</IconBox>
              <h3 className="relative font-display text-h4 font-normal text-ink mb-3">
                {p.title}
              </h3>
              <p className="relative text-[13px] font-light text-ink-soft leading-[1.8]">
                {p.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
