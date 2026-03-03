import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

export default defineConfig({
  output: 'server',
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
