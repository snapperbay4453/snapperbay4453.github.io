import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import Icons from 'unplugin-icons/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://snapperbay4453.github.io/',
  integrations: [
    preact(),
    sitemap(),
    tailwind(),
  ],
  redirects: {
    '/': {
      status: 302,
      destination: '/home'
    }
  },
  server: { port: 3000, host: true },
  vite: {
    plugins: [Icons({
      compiler: 'astro'
    })]
  }
});
