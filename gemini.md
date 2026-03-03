# 🚀 Astro-Edge: Project Context & Status

Fail ini merupakan "Source of Truth" bagi status semasa projek. Sila kemas kini fail ini selepas setiap perubahan besar untuk memastikan kelangsungan konteks.

---

## 🆔 1. Identiti Projek
- **Nama Projek:** Astro-Edge (Blog + E-commerce)
- **Framework:** Astro 5.x (Hybrid Mode)
- **Deployment:** Cloudflare Pages (Pending)
- **Source Control:** GitHub (`kodeexii/astro-edge-blog`)
- **URL Pembangunan:** `http://localhost:4321`

---

## 🎯 2. Konteks Pembangunan Aktif
- **Fokus Sekarang:** Pembangunan Lokal & Strategi Kandungan.
- **Strategi Storage:** 
  - **Lokal:** Untuk pembangunan pantas (Sekarang).
  - **GitHub:** Untuk production & CMS di awan (Akan datang).
- **Tugasan Rutin:**
  - [ ] Jana 1 entri blog "Daily Recap" di akhir setiap sesi pembangunan.
- **Tugasan Seterusnya:** 
  - [ ] Setup GitHub Repository & Remote.
  - [ ] Implementasi Homepage Singleton di Keystatic.
  - [ ] Membina Halaman Butiran Produk (`products/[id].astro`).
  - [ ] Integrasi Pembayaran CHIP.
- **Kemas Kini Terakhir:** 2026-03-01

---

## 🔐 3. Senarai Semak Persekitaran (Secrets)
*Sila pastikan rahsia berikut dikonfigurasi dalam fail `.env` (Rujuk `.env.example`):*
- [ ] `CHIP_API_KEY` (Payment Gateway)
- [ ] `RESEND_API_KEY` (Email Service)
- [ ] `TURNSTILE_SITE_KEY` (Bot Protection)
- [ ] `TURNSTILE_SECRET_KEY` (Bot Protection)
- [ ] `KEYSTATIC_GITHUB_CLIENT_ID` (Keystatic Cloud/GitHub Auth)
- [ ] `KEYSTATIC_GITHUB_CLIENT_SECRET` (Keystatic Cloud/GitHub Auth)

---

## 📏 4. Konvensyen Kod (The Rules)
- **Styles:** Modular BEM (Block Element Modifier) + Scoped CSS.
- **Fluid Design:** Wajib guna `clamp()` dan `calc()` (Definisi dalam `global.css`).
- **Typography:** Relatif kepada `--fs-m`. Skala: `xxl`, `xl`, `l`, `m`, `s`, `xs`, `xxs`.
- **Font Stack:** **Zero External Requests**. Hanya gunakan *System Font Stack*.
- **Components:** UI components dalam `src/components/ui/`.
- **Database:** Cloudflare D1 (SQL) - Binding Name: `DB`.
- **Hybrid Strategy:** Mod `output: server` + `export const prerender = true` untuk halaman statik.

---

## 🗺️ 5. Pemetaan Direktori
- 📂 `src/content/blog/` — Artikel Markdoc (`.mdoc`).
- 📂 `src/content/products/` — Katalog Produk (JSON).
- 📂 `src/content/pages/` — Halaman Umum (About, etc).
- 📂 `src/content/legals/` — Polisi & Terma (Markdoc).
- 📂 `src/styles/` — `global.css` & Variables.
- 📂 `src/pages/` — Routing & Acuan (Layouts).

---

## 📈 6. Log Kemajuan (Progress Log)
- [x] PRD finalized (v1.1).
- [x] Tech stack: Astro 5, Cloudflare, Keystatic, CHIP.
- [x] Style: BEM + Fluid Typography.
- [x] Keystatic Schema (Blog, Pages, Products, Legals).
- [x] Core config: `package.json`, `wrangler.toml`, `astro.config.mjs`.
- [x] Folder structure initialized.
- [x] `Layout.astro` dengan Navigasi Dinamik.
- [x] Keystatic 'local' storage mode diaktifkan.
- [x] Content Layer synchronized dengan Keystatic.
- [x] 5 Blog posts "Deep Dive" & About page generated.
- [x] Hybrid Rendering (Prerendering) diaktifkan untuk Blog & Pages.
- [x] Git Lokal: `.gitignore` & Initial Commit.
- [x] Template dinamik `src/pages/[slug].astro` untuk Koleksi Pages.
- [x] Sistem "Datetime" & UTC Sorting diaktifkan untuk Blog.
- [x] Paparan Dashboard Keystatic diperkemas dengan kolom maklumat.
- [x] Daily Recap #1 (Storytelling Style) diterbitkan.

---
> *Nota: Mat Gem (Gemini CLI) sentiasa memantau fail ini untuk memastikan arahan dipatuhi.*
