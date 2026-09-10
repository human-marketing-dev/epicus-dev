import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/sections/demo/shared";

// ─── Data ─────────────────────────────────────────────────────────────────────

const puntos = [
  "Qué se está vendiendo en cada zona y a qué ritmo de absorción.",
  "El precio real de operación, más allá del precio de lista.",
  "Qué proyectos cambiaron de velocidad y qué significa para tu momento de entrada.",
  "Acceso a precio de origen y a etapas de preventa.",
];

// ─── 04 · Inteligencia de mercado ─────────────────────────────────────────────

export default function Inteligencia() {
  return (
    <Section className="bg-white" size="lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

        {/* Columna izquierda — ceja y titular */}
        <FadeIn delay={0} direction="right">
          <div className="lg:sticky lg:top-28">
            <SectionLabel>Inteligencia real de mercado</SectionLabel>

            <h2 className="font-display text-h2 text-ink">
              Sabemos qué se vende,<br />
              a qué precio y a qué{" "}
              <em className="italic text-blue">velocidad.</em>
            </h2>
          </div>
        </FadeIn>

        {/* Columna derecha — cuerpo, puntos y cierre */}
        <FadeIn delay={0.15} direction="left">
          <div className="lg:pt-2">
            <p className="text-b1 text-ink-mid mb-9">
              El mercado de Monterrey se mueve rápido y cada proyecto avanza a su
              propio ritmo. Monitoreamos ese movimiento en tiempo real y lo
              traducimos en información que puedes usar.
            </p>

            {/* Puntos */}
            <ul className="flex flex-col gap-px bg-black/[0.08] border-y border-black/[0.08] mb-9">
              {puntos.map((p) => (
                <li key={p} className="bg-white flex items-start gap-4 py-4">
                  <span className="mt-[7px] block w-[18px] h-px bg-blue shrink-0" />
                  <span className="text-[14px] font-light text-ink-mid leading-[1.75]">
                    {p}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-[15px] font-light text-ink leading-[1.8]">
              Con esa lectura, identificas la oportunidad antes y la aprovechas
              con certeza.
            </p>
          </div>
        </FadeIn>

      </div>
    </Section>
  );
}
