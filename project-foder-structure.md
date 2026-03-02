# 📂 Astro-Edge Directory Structure

Susunan folder ini mengikut "Directory Mapping" dalam gemini.md dan dioptimumkan untuk Cloudflare Pages + Keystatic.

```
/
├── public/                  # Static assets (favicons, fonts)
├── src/
│   ├── components/
│   │   ├── layout/          # Base Layout, Header, Footer
│   │   └── ui/              # BEM-based components (ProductCard.astro, Button.astro)
│   ├── content/
│   │   ├── blog/            # Markdown files for blog posts
│   │   ├── products/        # JSON/YAML for e-commerce products
│   │   └── config.ts        # Content Collections schema (Zod)
│   ├── layouts/
│   │   └── Layout.astro     # Main HTML wrapper
│   ├── pages/
│   │   ├── api/             # Backend (Cloudflare Workers / CHIP Webhooks)
│   │   │   └── webhook-chip.ts
│   │   ├── blog/            # Blog routing
│   │   ├── index.astro      # Homepage
│   │   └── keystatic/       # Keystatic admin dashboard (Auto-generated)
│   └── styles/
│       └── global.css       # Global BEM blocks & variables
├── .env                     # Local secrets (CHIP_API_KEY, etc.)
├── astro.config.mjs         # Astro & Cloudflare adapter config
├── keystatic.config.ts      # Keystatic schema & UI config
├── package.json
├── tsconfig.json
└── wrangler.toml            # Cloudflare D1 & KV bindings
```



