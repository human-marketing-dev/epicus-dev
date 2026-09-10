import Link from "next/link";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { SectionLabel, IconBox, svgStyle } from "@/components/sections/shared";

// ─── Iconos ───────────────────────────────────────────────────────────────────

const IconResidencial = () => (
  <svg viewBox="0 0 24 24" style={svgStyle}>
    <path d="M3 9l9-6 9 6v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const IconVertical = () => (
  <svg viewBox="0 0 24 24" style={svgStyle}>
    <rect x="4" y="2" width="16" height="20" rx="1" />
    <path d="M9 6h1M14 6h1M9 10h1M14 10h1M9 14h1M14 14h1" />
    <path d="M10 22v-4h4v4" />
  </svg>
);

const IconIndustrial = () => (
  <svg viewBox="0 0 24 24" style={svgStyle}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const productos = [
  {
    icon: <IconResidencial />,
    name: "Residencial",
    body: "La casa correcta también es una decisión de capital. Comparamos zona, entrega, plan de pagos y plusvalía para que las dos cosas queden resueltas.",
  },
  {
    icon: <IconVertical />,
    name: "Vertical",
    body: "Departamentos en preventa y en operación, con análisis de absorción, precio por metro y potencial de renta y reventa.",
  },
  {
    icon: <IconIndustrial />,
    name: "Industrial",
    body: "Naves y parques evaluados como activo operativo: especificación técnica, conectividad logística, infraestructura y disponibilidad real.",
  },
];

// ─── 06 · Ruta comprador ──────────────────────────────────────────────────────

export default function RutaComprador() {
  return (
    <div id="comprador" className="scroll-mt-[68px]">
      <Section className="bg-white" size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-12 lg:gap-20 items-start">

          {/* Encabezado */}
          <FadeIn delay={0} direction="right">
            <div className="lg:sticky lg:top-28">
              <SectionLabel>Compra e inversión</SectionLabel>

              <h2 className="font-display text-h2 text-ink mb-6">
                Elige dentro del<br />
                <em className="italic text-blue">mercado completo.</em>
              </h2>

              <p className="text-b1 text-ink-mid mb-9 max-w-[420px]">
                Más de 95 proyectos activos, precio de origen y un análisis que
                compara opciones con criterio. Para tu casa, para tu inversión o
                para tu operación.
              </p>

              <Link
                href="/contacto"
                className="inline-block bg-blue hover:bg-blue-light text-white text-btn px-8 py-[15px] rounded-[4px] transition-all duration-200 hover:-translate-y-px"
              >
                Iniciar conversación
              </Link>
            </div>
          </FadeIn>

          {/* Tarjetas de producto */}
          <div className="flex flex-col gap-px bg-black/[0.08] border-y border-black/[0.08]">
            {productos.map((p, i) => (
              <FadeIn key={p.name} delay={0.15 + i * 0.1} direction="left">
                <div className="bg-white flex items-start gap-6 px-2 py-8 group">
                  <IconBox className="mt-1 transition-colors duration-200 group-hover:bg-blue group-hover:text-white">
                    {p.icon}
                  </IconBox>
                  <div>
                    <h3 className="font-display text-h3 font-normal text-ink mb-2">
                      {p.name}
                    </h3>
                    <p className="text-[14px] font-light text-ink-soft leading-[1.8] max-w-[460px]">
                      {p.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </Section>
    </div>
  );
}
