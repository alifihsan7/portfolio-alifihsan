import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Replace with the real production URL once the Vercel domain is known.
const site = process.env.SITE_URL || "https://portfolio-alifihsan.vercel.app/";

export default defineConfig({
  site,
  integrations: [sitemap()],
});
