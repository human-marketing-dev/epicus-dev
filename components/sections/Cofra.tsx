import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";

// ─── Data ─────────────────────────────────────────────────────────────────────

const estructura = [
  { label: "COFRA",               sub: "Holding / Family Office",                  active: false },
  { label: "ALFRA INMOBILIARIA",              sub: "Comercialización & Brokerage",              active: true  },
  { label: "Desarrollo",          sub: "División en crecimiento",                   active: false },
  { label: "Portafolio de inversión", sub: "Activos residenciales + industriales",  active: false },
];

// ─── Cofra ────────────────────────────────────────────────────────────────────

export default function Cofra() {
  return (
    <Section container={false} className="bg-ink">
      <div className="mx-auto w-full px-[4%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Columna izquierda — texto */}
          <FadeIn delay={0} direction="right">
            <div>
              <p className="flex items-center gap-3 text-overline text-blue-light/70 mb-5">
                <span className="block w-6 h-px bg-blue-light/70" />
                Estructura corporativa
              </p>
              <h2 className="font-display text-h2 text-white">
                ALFRA INMOBILIARIA forma parte<br />
                de <em className="italic text-blue-light">COFRA</em>
              </h2>
              <p className="text-b1 font-light text-white/55 mt-6 mb-4 max-w-[420px]">
                COFRA es nuestra estructura de holding familiar orientada a la
                acumulación de activos inmobiliarios en el largo plazo. ALFRA INMOBILIARIA es
                su brazo de comercialización e inteligencia de mercado.
              </p>
              <p className="text-[14px] font-light text-white/40 leading-[1.8] max-w-[420px]">
                Esta estructura nos da una alineación de intereses única: operamos
                como inmobiliaria, pero pensamos como inversionistas.
              </p>
            </div>
          </FadeIn>

          {/* Columna derecha — estructura */}
          <div className="flex flex-col gap-px">
            {estructura.map((item, i) => (
              <FadeIn key={item.label} delay={0.1 + i * 0.1} direction="left">
                <div
                  className={
                    item.active
                      ? "flex items-center justify-between px-6 py-5 border border-blue/40 bg-blue/10"
                      : "flex items-center justify-between px-6 py-5 border border-white/[0.06] bg-white/[0.03]"
                  }
                >
                  <span className={item.active ? "text-[15px] font-medium tracking-[0.04em] text-white" : "text-[15px] font-light tracking-[0.04em] text-white/50"}>
                    {item.label}
                  </span>
                  <span className={item.active ? "text-[11px] tracking-[0.08em] text-blue-light" : "text-[11px] tracking-[0.08em] text-white/30"}>
                    {item.sub}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
}