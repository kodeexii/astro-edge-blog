import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Membolehkan mod Hybrid/SSR
  adapter: cloudflare(), // Menggunakan adapter Cloudflare untuk Pages
  integrations: [
    markdoc(),
    react(),
    keystatic()
  ],
  vite: {
    ssr: {
      noExternal: ['@keystatic/core', '@keystatic/astro']
    }
  }
});
