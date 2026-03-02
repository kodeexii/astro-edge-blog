import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react'; // Diperlukan untuk Keystatic UI
import keystatic from '@keystatic/astro';

export default defineConfig({
  // Astro 5 menggunakan 'static' secara lalai yang menyokong hybrid behavior
  adapter: cloudflare({
    mode: 'directory', // Sesuai untuk Cloudflare Pages
    runtime: {
      mode: 'local',
      type: 'pages'
    }
  }),
  integrations: [
    markdoc(), // Sesuai untuk blog content yang kompleks
    react(),    // Keystatic perlukan React untuk dashboard dia
    keystatic()
  ],
});