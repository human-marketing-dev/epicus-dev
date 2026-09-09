import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { SectionLabel, IconBox, svgStyle } from "@/components/sections/demo/shared";

// ─── Iconos ───────────────────────────────────────────────────────────────────

const IconObjetivo = () => (
  <svg viewBox="0 0 24 24" style={svgStyle}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" />
  </svg>
);

const IconFiltro = () => (
  <svg viewBox="0 0 24 24" style={svgStyle}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const IconAnalisis = () => (
  <svg viewBox="0 0 24 24" style={svgStyle}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const IconCierre = () => (
  <svg viewBox="0 0 24 24" style={svgStyle}>
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const etapas = [
  {
    num: "01",
    icon: <IconObjetivo />,
    title: "Empezamos por tu objetivo",
    body: "Antes de mostrarte opciones, entendemos qué buscas, en qué momento estás y qué papel juega esta decisión en tu patrimonio.",
  },
  {
    num: "02",
    icon: <IconFiltro />,
    title: "Filtramos el mercado completo",
    body: "Con más de 95 proyectos activos en monitoreo, identificamos las opciones que se alinean con tu perfil, tu presupuesto y tu objetivo.",
  },
  {
    num: "03",
    icon: <IconAnalisis />,
    title: "Analizamos y comparamos",
    body: "Recibes un análisis con argumentos, contexto de mercado y proyección de rendimiento, para que la decisión tenga base.",
  },
  {
    num: "04",
    icon: <IconCierre />,
    title: "Cerramos contigo",
    body: "Coordinamos el proceso hasta la formalización, con claridad y seguimiento constante en cada etapa.",
  },
];

// ─── 08 · Proceso ─────────────────────────────────────────────────────────────

export default function ProcesoDemo() {
  return (
    <Section className="bg-cream" size="lg">
      <FadeIn delay={0}>
        <SectionLabel>Cómo trabajamos</SectionLabel>
        <h2 className="font-display text-h2 text-ink">
          El proceso que nos <em className="italic text-blue">define.</em>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.08] mt-14">
        {etapas.map((e, i) => (
          <FadeIn key={e.num} delay={0.15 + i * 0.1}>
            <div className="relative bg-white px-8 py-10 h-full overflow-hidden group hover:bg-[#f4f3f0] transition-colors duration-200">
              <span
                className="absolute top-4 right-5 font-display font-light leading-none select-none pointer-events-none text-[80px]"
                style={{ color: "rgba(37,99,235,0.08)" }}
                aria-hidden
              >
                {e.num}
              </span>
              <IconBox className="relative mb-5">{e.icon}</IconBox>
              <h3 className="relative font-display text-h4 font-normal text-ink mb-3">
                {e.title}
              </h3>
              <p className="relative text-[13px] font-light text-ink-soft leading-[1.8]">
                {e.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
