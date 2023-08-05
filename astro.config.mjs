import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import compress from "astro-compress";
import node from "@astrojs/node";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  base: "",
  site: "https://blog.leonardoroic.com",
  integrations: [
    mdx(),
    sitemap(),
    vue(),
    compress(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  experimental: {
    assets: true,
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});


