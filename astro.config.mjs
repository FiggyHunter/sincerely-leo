import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import compress from "astro-compress";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  base: "",
  site: "https://test.leotg.com",
  integrations: [mdx(), sitemap(), vue(), compress()],
  experimental: {
    assets: true
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});