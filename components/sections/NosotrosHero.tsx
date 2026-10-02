import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";

export default function NosotrosHero() {
  return (
    <Section className="bg-cream py-24 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Columna izquierda — headline */}
        <div>
          <FadeIn delay={0}>
            <p className="flex items-center gap-3 text-overline text-blue mb-5">
              <span className="block w-6 h-px bg-blue" />
              Quiénes somos
            </p>
            <h1 className="font-display text-h1 text-ink">
              Construimos<br />
              relaciones.<br />
              <em className="italic text-blue">No transacciones.</em>
            </h1>
          </FadeIn>
        </div>

        {/* Columna derecha — texto */}
        <div className="flex flex-col gap-5 lg:pt-4">
          <FadeIn delay={0.15}>
            <p className="text-b1 text-ink-mid">
              ALFRA INMOBILIARIA nació de una convicción simple: el cliente merece más que un
              listado de propiedades. Merece un asesor que conozca el mercado a
              fondo, que entienda sus objetivos financieros y de vida, y que le
              ayude a tomar la mejor decisión posible con información real.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="text-b1 text-ink-mid">
              Operamos como brazo comercial estratégico para los principales
              desarrolladores de Monterrey y su área metropolitana. Eso nos da
              acceso a información, precios y proyectos que no están disponibles
              al público general. Pero más que acceso, lo que ofrecemos es
              criterio.
            </p>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="text-b1 text-ink-mid">
              Pensamos en el largo plazo — tanto el tuyo como el nuestro. Por eso
              el éxito de cada cliente es la métrica que más nos importa.
            </p>
          </FadeIn>
        </div>

      </div>
    </Section>
  );
}