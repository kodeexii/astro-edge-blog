import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [
    markdoc(),
    react(),
    keystatic()
  ],
  vite: {
    ssr: {
      noExternal: ['@keystatic/core', '@keystatic/astro']
    },
    // Tambahan untuk memastikan auth Keystatic stabil di Cloudflare
    optimizeDeps: {
      exclude: ['@keystatic/core/api']
    }
  }
});
