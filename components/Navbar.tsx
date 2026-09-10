"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Data ─────────────────────────────────────────────────────────────────────

// Nosotros, Portafolio y Desarrolladores quedan fuera de la navegación.
// Sus rutas siguen vivas (Desarrolladores redirige a Growth Partner).
const links = [
  { label: "Inmobiliaria",   href: "/" },
  { label: "Growth Partner", href: "/growth-partner" },
  { label: "Contacto",       href: "/contacto" },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[68px] bg-white/95 backdrop-blur-[16px] border-b border-black/[0.08] flex items-center">
      <div className="w-full px-[4%] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
          <Image
            src="/logos/epicus-logo-black-blue.webp"
            alt="EPICUS"
            width={120}
            height={32}
            className="h-17 w-auto"
            priority
          />
        </Link>

        {/* Links — desktop */}
        <nav className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[13px] tracking-[0.06em] transition-colors duration-200",
                pathname === link.href
                  ? "text-ink font-medium"
                  : "text-ink-mid font-normal hover:text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="text-[13px] font-medium tracking-[0.06em] bg-blue hover:bg-blue-light text-white px-[22px] py-[10px] rounded-[4px] transition-colors duration-200"
          >
            Solicitar Asesoría
          </Link>
        </nav>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          aria-label="Abrir menú"
        >
          <span className={cn("block h-[2px] bg-ink transition-all duration-200 origin-center",
            open ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
          )} />
          <span className={cn("block h-[2px] bg-ink transition-all duration-200",
            open ? "opacity-0 w-0" : "w-4"
          )} />
          <span className={cn("block h-[2px] bg-ink transition-all duration-200 origin-center",
            open ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"
          )} />
        </button>
      </div>

      {/* Menú mobile — con animación */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[68px] left-0 right-0 bg-white border-b border-black/[0.08] flex flex-col px-[4%] py-6 gap-5 md:hidden"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-[15px] tracking-[0.04em] transition-colors duration-200",
                    pathname === link.href ? "text-ink font-medium" : "text-ink-mid font-normal"
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: links.length * 0.05, duration: 0.2 }}
            >
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="inline-block text-center text-[13px] font-medium tracking-[0.06em] bg-blue text-white px-6 py-3 rounded-[4px] mt-2"
              >
                Solicitar Asesoría
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}