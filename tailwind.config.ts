import type { Config } from "tailwindcss";
 
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // ─── Colores ───────────────────────────────────────────────────────────────
    // Definido fuera de extend para reemplazar la paleta default de Tailwind
    // y tener control total sobre los colores disponibles.
    colors: {
      // Marca base — reemplaza por proyecto
      primary: {
        DEFAULT: "#0A0A0A",
        light:   "#333333",
        dark:    "#000000",
      },
      secondary: {
        DEFAULT: "#6B7280",
        light:   "#9CA3AF",
        dark:    "#4B5563",
      },
 
      // Alfra Inmobiliaria
      blue: {
        DEFAULT: "#2563eb",
        light:   "#3b82f6",
        dim:     "rgba(37,99,235,0.07)",
      },
      ink: {
        DEFAULT: "#0a0a0f",
        mid:     "#3d3d4a",
        soft:    "#7a7a8c",
      },
      cream: "#f9f8f5",
 
      // Neutros
      neutral: {
        50:  "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },
 
      black:       "#000000",
      white:       "#FFFFFF",
      transparent: "transparent",
    },
 
    extend: {
      // ─── Breakpoints ─────────────────────────────────────────────────────────
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
 
      // ─── Fuentes ──────────────────────────────────────────────────────────────
      fontFamily: {
        sans:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
      },
 
      // ─── Font Scale ───────────────────────────────────────────────────────────
      fontSize: {
        // Utilidades
        "overline": ["0.6875rem", { lineHeight: "1",    letterSpacing: "0.2em",  fontWeight: "500" }],
        "btn":      ["0.8125rem", { lineHeight: "1",    letterSpacing: "0.06em", fontWeight: "500" }],
        "b1":       ["1rem",      { lineHeight: "1.85",                          fontWeight: "300" }],
 
        // Headings (clamp para responsivo automático)
        "h6": ["0.875rem",                        { lineHeight: "1.4",  fontWeight: "500" }],
        "h5": ["1.125rem",                        { lineHeight: "1.4",  fontWeight: "400" }],
        "h4": ["1.375rem",                        { lineHeight: "1.3",  fontWeight: "400" }],
        "h3": ["1.75rem",                         { lineHeight: "1.25", fontWeight: "400" }],
        "h2": ["clamp(2.25rem, 3.5vw, 3.5rem)",  { lineHeight: "1.1",  fontWeight: "300" }],
        "h1": ["clamp(3rem, 5vw, 4.625rem)",      { lineHeight: "1.08", fontWeight: "300" }],
      },
 
      // ─── Spacing ──────────────────────────────────────────────────────────────
      spacing: {
        "parent": "20px", // Contenedor padre
        "child":  "10px", // Elementos hijo
        "nested": "5px",  // Elementos anidados
        "section": "4%", // Padding externo de sección full-width
      },
 
      // ─── Padding de secciones ─────────────────────────────────────────────────
      padding: {
        
        "inner":   "2%", // Padding de bloque de texto interno
      },
    },
  },
  plugins: [],
};
 
export default config;
