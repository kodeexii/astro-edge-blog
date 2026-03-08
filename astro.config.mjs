import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
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
    react()
    // keystatic() dibuang untuk membolehkan custom admin page
  ],
  vite: {
    ssr: {
      noExternal: ['@keystatic/core', '@keystatic/astro']
    },
    optimizeDeps: {
      exclude: ['@keystatic/core/api']
    }
  }
});
