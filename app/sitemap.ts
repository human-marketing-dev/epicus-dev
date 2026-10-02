import { MetadataRoute } from "next";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://alfrainmobiliaria.com").replace(/\/$/, "");

// Solo las páginas que viven en la navegación. Nosotros, Portafolio y el home
// anterior siguen accesibles por URL pero quedan fuera de buscadores.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
