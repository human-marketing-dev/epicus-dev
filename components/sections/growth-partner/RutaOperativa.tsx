import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/sections/shared";

// ─── Data ─────────────────────────────────────────────────────────────────────

const pasos = [
  {
    num: "01",
    title: "El lead entra por campaña",
    body: "Estrategia de medios y campañas que llevan demanda calificada a landing pages construidas para el proyecto.",
  },
  {
    num: "02",
    title: "CRM y setter agendan la cita",
    body: "Cada lead se filtra, se contacta y se confirma. La trazabilidad queda registrada y visible en dashboard.",
  },
  {
    num: "03",
    title: "El equipo vendedor cierra",
    body: "Tu fuerza de ventas recibe citas confirmadas. Cuando el proyecto lo requiere, sumamos vendedores a tu estructura.",
  },
];

const tiempos = [
  {
    dato: "3 semanas",
    label: "Setup y lanzamiento",
    body: "De la firma al primer día de campañas en el aire.",
  },
  {
    dato: "Semana 3",
    label: "Remarketing",
    body: "Activamos la base de leads existente como palanca de aceleración.",
  },
  {
    dato: "45 días",
    label: "Primera venta proyectada",
    body: "Ciclo completo del funnel, de la primera impresión al primer cierre.",
  },
];

// ─── Refuerzo · ruta operativa y tiempos ──────────────────────────────────────

export default function RutaOperativa() {
  return (
    <Section className="bg-cream" size="lg">

      <FadeIn delay={0}>
        <SectionLabel>Cómo opera</SectionLabel>
        <h2 className="font-display text-h2 text-ink max-w-[720px]">
          El capital inmovilizado en inventario{" "}
          <em className="italic text-blue">tiene costo.</em>
        </h2>
        <p className="text-b1 text-ink-mid max-w-[620px] mt-6">
          El retorno de un desarrollo depende del precio de lista y del ritmo al
          que el inventario se coloca. Construir una estructura comercial propia
          consume tiempo y foco de dirección; nosotros la ponemos a operar desde
          la semana uno.
        </p>
      </FadeIn>

      {/* Ruta operativa */}
      <ol className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 mt-16">
        {pasos.map((p, i) => (
          <li key={p.num} className="relative">
            <FadeIn delay={0.15 + i * 0.12}>
              <div className="flex items-center mb-6">
                <span className="relative z-10 shrink-0 w-[13px] h-[13px] rounded-full border border-blue bg-cream flex items-center justify-center">
                  <span className="block w-[5px] h-[5px] rounded-full bg-blue" />
                </span>
                <span
                  className={
                    i === pasos.length - 1
                      ? "flex-1 h-px bg-black/[0.12] md:hidden"
                      : "flex-1 h-px bg-black/[0.12] md:-mr-8"
                  }
                  aria-hidden
                />
              </div>

              <p className="text-overline text-blue mb-3">Paso {p.num}</p>
              <h3 className="font-display text-h4 font-normal text-ink mb-3">
                {p.title}
              </h3>
              <p className="text-[13px] font-light text-ink-soft leading-[1.8] max-w-[300px]">
                {p.body}
              </p>
            </FadeIn>
          </li>
        ))}
      </ol>

      {/* Tiempos de referencia */}
      <FadeIn delay={0.45}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-black/[0.08] border border-black/[0.08] mt-16">
          {tiempos.map((t) => (
            <div key={t.label} className="bg-white px-8 py-9">
              <div className="font-display text-[36px] font-light text-blue leading-none mb-4">
                {t.dato}
              </div>
              <h3 className="text-h6 text-ink mb-2">{t.label}</h3>
              <p className="text-[13px] font-light text-ink-soft leading-[1.8]">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>

    </Section>
  );
}
