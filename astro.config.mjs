import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Replace with the real production URL once the Vercel domain is known.
const site = process.env.SITE_URL || "https://portfolio.alifihsan.my.id/";

export default defineConfig({
  site,
  // English is the default at "/", Indonesian lives under "/id/".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // /print is the layout used to export the PDF portfolio; keep it out of the sitemap.
      filter: (page) => !page.includes("/print"),
      i18n: { defaultLocale: "en", locales: { en: "en", id: "id" } },
    }),
  ],
});
