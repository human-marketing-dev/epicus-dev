import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { SectionLabel, IconBox, svgStyle } from "@/components/sections/demo/shared";

// ─── Iconos ───────────────────────────────────────────────────────────────────

const IconAtraccion = () => (
  <svg viewBox="0 0 24 24" style={svgStyle}>
    <path d="M3 11l18-8-8 18-2-8-8-2z" />
  </svg>
);

const IconProcesamiento = () => (
  <svg viewBox="0 0 24 24" style={svgStyle}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M8 14h8M8 17h5" />
  </svg>
);

const IconCierre = () => (
  <svg viewBox="0 0 24 24" style={svgStyle}>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const bloques = [
  {
    num: "01",
    icon: <IconAtraccion />,
    title: "Atracción de leads",
    body: "Estrategia de medios, campañas, creativos y landing pages, con reporte mensual de resultados.",
  },
  {
    num: "02",
    icon: <IconProcesamiento />,
    title: "Procesamiento comercial",
    body: "Setters dedicados que filtran, contactan y confirman la cita. CRM con trazabilidad completa y dashboard en tiempo real.",
  },
  {
    num: "03",
    icon: <IconCierre />,
    title: "Acompañamiento y cierre",
    body: "Trabajamos hombro a hombro con tu equipo de ventas: supervisión semanal de pipeline, metas mensuales acordadas y reporte ejecutivo. Cuando el proyecto lo requiere, sumamos vendedores a tu estructura.",
  },
];

const datosApoyo = [
  { valor: "~3%", label: "Costo de venta sobre la venta" },
  { valor: "3", label: "Semanas al lanzamiento de campañas" },
  { valor: "45", label: "Días a la primera venta proyectada" },
];

// ─── 07 · Ruta desarrollador ──────────────────────────────────────────────────

export default function RutaDesarrollador() {
  return (
    <div id="desarrollador" className="scroll-mt-[68px]">
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a0f1a 0%, #101f3d 55%, #0a0a0f 100%)",
        }}
      >
        <div
          className="absolute -top-24 -right-28 w-[480px] h-[480px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.24) 0%, transparent 70%)",
          }}
          aria-hidden
        />

        <Container className="relative z-10">

          {/* Encabezado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-14">
            <FadeIn delay={0} direction="right">
              <div>
                <SectionLabel tone="dark">Growth Partner</SectionLabel>
                <h2 className="font-display text-h2 text-white">
                  Sumamos estructura<br />
                  comercial a tu{" "}
                  <em className="italic text-blue-light">proyecto.</em>
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} direction="left">
              <div className="lg:pt-3">
                <p className="text-b1 text-white/60 mb-5">
                  Colaboramos con tu equipo de ventas para acelerar la colocación
                  del desarrollo: generamos la demanda, procesamos cada lead y
                  entregamos citas confirmadas para que tu equipo haga lo que
                  mejor hace, cerrar.
                </p>
                <p className="text-b1 text-white/60">
                  El retorno de un proyecto depende del precio de lista y del
                  ritmo al que el inventario se coloca. Trabajamos junto a tu
                  operación comercial para sostener ese ritmo.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Bloques de servicio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.08] border-y border-white/[0.08]">
            {bloques.map((b, i) => (
              <FadeIn key={b.num} delay={0.2 + i * 0.1}>
                <div className="relative bg-[#0b101c] px-7 py-9 h-full overflow-hidden">
                  <span
                    className="absolute top-4 right-5 font-display font-light leading-none select-none pointer-events-none text-[76px]"
                    style={{ color: "rgba(255,255,255,0.045)" }}
                    aria-hidden
                  >
                    {b.num}
                  </span>
                  <IconBox tone="dark" className="relative mb-5">
                    {b.icon}
                  </IconBox>
                  <h3 className="relative font-display text-h4 font-normal text-white mb-3">
                    {b.title}
                  </h3>
                  <p className="relative text-[13px] font-light text-white/50 leading-[1.8]">
                    {b.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Datos de apoyo + CTA */}
          <FadeIn delay={0.5}>
            <div className="mt-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
                {datosApoyo.map((d) => (
                  <div key={d.label}>
                    <div className="font-display text-[40px] leading-none font-light text-white mb-2">
                      {d.valor}
                    </div>
                    <div className="text-[11px] tracking-[0.1em] uppercase text-white/35 max-w-[160px] leading-[1.6]">
                      {d.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/desarrolladores"
                className="shrink-0 inline-block bg-blue hover:bg-blue-light text-white text-btn px-8 py-[15px] rounded-[4px] transition-all duration-200 hover:-translate-y-px"
              >
                Conocer Growth Partner
              </Link>
            </div>
          </FadeIn>

        </Container>
      </section>
    </div>
  );
}
