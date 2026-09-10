import Link from "next/link";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const menu = [
  { label: "Inmobiliaria",   href: "/" },
  { label: "Growth Partner", href: "/growth-partner" },
  { label: "Contacto",       href: "/contacto" },
];

const contacto = [
  { label: "www.epicus.com.mx", href: "https://www.epicus.com.mx" },
  { label: "811 538 5567",      href: "tel:+528115385567" },
  { label: "Monterrey, N.L.",   href: null },
];

// ─── Iconos sociales ──────────────────────────────────────────────────────────

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "currentColor" }}>
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const IconInstagram = () => (
  <svg
    viewBox="0 0 24 24"
    style={{
      width: 18,
      height: 18,
      stroke: "currentColor",
      fill: "none",
      strokeWidth: 1.5,
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
    }}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="3" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

// ─── Pie de página ────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="bg-blue text-white pt-16 pb-10">
      <div className="mx-auto w-full px-[4%]">

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-12 lg:gap-24 pb-12 border-b border-white/20 mb-8">

          {/* Boilerplate */}
          <div>
            <Image
              src="/logo-footer-epicus.webp"
              alt="EPICUS"
              width={130}
              height={44}
              className="mb-6"
            />
            <p className="text-[14px] font-light text-white/75 leading-[1.9] max-w-[560px]">
              Epicus es una firma de inteligencia inmobiliaria en Monterrey.
              Opera como brazo comercial de los principales desarrolladores de la
              ciudad y su área metropolitana, con más de 95 proyectos activos en
              monitoreo. Esa posición le permite maximizar el rendimiento de cada
              decisión de compra e inversión: residencial, vertical e industrial.
            </p>

            <div className="flex gap-3 mt-8">
              <a
                href="https://www.facebook.com/epicusresidencial/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[4px] border border-white/25 bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-white/50 transition-all duration-200"
                aria-label="Facebook"
              >
                <IconFacebook />
              </a>
              <a
                href="https://www.instagram.com/epicusinmobiliaria/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[4px] border border-white/25 bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-white/50 transition-all duration-200"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
            </div>
          </div>

          {/* Contacto + menú */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <h5 className="text-overline text-white/60 mb-5">Contacto</h5>
              <ul className="flex flex-col gap-[10px]">
                {contacto.map((c) => (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-[13px] font-light text-white/80 hover:text-white transition-colors duration-200"
                      >
                        {c.label}
                      </a>
                    ) : (
                      <span className="text-[13px] font-light text-white/80">
                        {c.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-overline text-white/60 mb-5">Navegación</h5>
              <ul className="flex flex-col gap-[10px]">
                {menu.map((m) => (
                  <li key={m.label}>
                    <Link
                      href={m.href}
                      className="text-[13px] font-light text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {m.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12px] text-white/50">
            © {new Date().getFullYear()} EPICUS — Todos los derechos reservados
          </p>
          <Link
            href="/aviso-de-privacidad"
            className="text-[12px] text-white/50 hover:text-white transition-colors duration-200"
          >
            Aviso de privacidad
          </Link>
        </div>

      </div>
    </footer>
  );
}
