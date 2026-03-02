🧠 Project Context: Astro-Edge

Fail ini adalah rujukan utama untuk status semasa projek. Sila kemas kini fail ini selepas setiap perubahan besar untuk memastikan "konteks" sentiasa segar.

1. Project Identity

Name: Astro-Edge (Blog + E-commerce)

Framework: Astro 5.x

Deployment: Cloudflare Pages

Primary URL: (Akan dikemas kini selepas deployment pertama)

2. Active Development Context

Current Focus: Initial Project Setup & Core Configuration.

Next Task: Build src/layouts/Layout.astro & Base Components.

Last Modified: 2024-05-20

3. Environment & Secrets Checklist

Sila pastikan secret berikut telah dikonfigurasi dalam Cloudflare Dashboard (Wrangler) dan .env:

[ ] CHIP_API_KEY (Payment Gateway)

[ ] RESEND_API_KEY (Email Service)

[ ] TURNSTILE_SITE_KEY (Bot Protection)

[ ] TURNSTILE_SECRET_KEY (Bot Protection)

4. Coding Conventions (The Rules)

Styles: Modular BEM (Block Element Modifier) + Scoped CSS.

Mixing Technique: Gunakan class global (cth: .button) untuk rupa, dan class lokal (cth: .card__button) untuk susun atur.

Fluid Design: Wajib guna clamp() dan calc() untuk tipografi dan spacing.

Typography Scale: Menggunakan skala relatif kepada --fs-m (Medium). Terma: xxl, xl, l, m, s, xs, xxs.

Font: Hanya gunakan System Font Stack (Zero external font requests).

Components: UI components dalam src/components/ui/. Astro files sebagai pilihan utama.

Database: Cloudflare D1 (SQL) - Binding Name: DB.

Type Safety: Strict TypeScript & Zod validation untuk semua input data.

5. Directory Mapping

src/content/blog/: Markdoc files untuk artikel.

src/content/products/: JSON files untuk katalog produk.

src/content/pages/: Markdoc untuk general pages (About, etc).

src/content/legals/: Markdoc untuk polisi (Privacy, Terms).

src/styles/global.css: Definisi variables dan global BEM blocks.

6. Progress Log (Recent Changes)

[x] PRD finalized (v1.1).

[x] Tech stack selected (Astro, Cloudflare, Keystatic, CHIP).

[x] Style Convention updated: BEM + Fluid Typography Scale.

[x] Keystatic Schema defined (including Legals & Pages collections).

[x] Core config files generated (package.json, wrangler.toml, etc).