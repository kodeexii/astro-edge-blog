# 🚀 Astro-Edge: Project Context & Status

Fail ini merupakan "Source of Truth" bagi status semasa projek. Sila kemas kini fail ini selepas setiap perubahan besar untuk memastikan kelangsungan konteks.

---

## 🆔 1. Identiti Projek
- **Nama Projek:** Astro-Edge (Blog + E-commerce)
- **Framework:** Astro 5.x (Hybrid Mode)
- **Deployment:** [Cloudflare Pages](https://astro-edge-blog.pages.dev) (Live)
- **Source Control:** GitHub (`kodeexii/astro-edge-blog`)
- **URL Pembangunan:** `http://localhost:4321`

---

## 🎯 2. Konteks Pembangunan Aktif
- **Fokus Sekarang:** Pembangunan Lokal & Strategi Kandungan.
- **Strategi Storage:** 
  - **Lokal:** Untuk pembangunan pantas (Dev).
  - **GitHub App:** Untuk production & CMS di awan (Live).
- **Tugasan Rutin:**
  - [x] Jana 1 entri blog "Daily Recap" di akhir setiap sesi pembangunan.
- **Tugasan Seterusnya:** 
  - [ ] Implementasi Homepage Singleton di Keystatic.
  - [ ] Integrasi Pembayaran CHIP.
- **Kemas Kini Terakhir:** 2026-03-08

---

## 🔐 3. Senarai Semak Persekitaran (Secrets)
*Sila pastikan rahsia berikut dikonfigurasi dalam fail `.env` (Rujuk `.env.example`):*
- [ ] `CHIP_API_KEY` (Payment Gateway)
- [ ] `RESEND_API_KEY` (Email Service)
- [x] `KEYSTATIC_GITHUB_CLIENT_ID` (GitHub App Auth)
- [x] `KEYSTATIC_GITHUB_CLIENT_SECRET` (GitHub App Auth)
- [x] `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` (GitHub App Context)
- [x] `KEYSTATIC_SECRET` (> 32 characters)

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
- [x] Pembangunan "Astro Edge Design System" (11 Komponen UI Native).
- [x] Integrasi Native CSS Nesting (Standard Browser) dalam Komponen.
- [x] Halaman Style Guide (`/styleguide`) dibina sebagai showroom komponen.
- [x] Halaman Katalog Produk & Detail Produk dengan sistem Aspect Ratio (3:4 & 1:1).
- [x] Infrastruktur MCP (Astro Docs) & Modular Skills (Frontend Design) diaktifkan.
- [x] Strategi Pengasingan Kod & Kandungan (Branching dev/main) diimplementasi.

---

## 🛠️ Git Workflow (The Standard)
Untuk mengelakkan konflik antara pembangunan kod dan kemas kini CMS:
1.  **Branch `main`:** Eksklusif untuk kandungan (Keystatic) dan Production.
2.  **Branch `dev`:** Tempat pembangunan kod lokal.
3.  **Sync Flow:** `main` (Content) perlu di-merge ke `dev` secara berkala.
4.  **Deploy Flow:** `dev` (Code) di-merge ke `main` melalui Pull Request apabila sedia.

---

## 📝 Daily Recap: Hari #2 - "The Birth of a Design System"

Hari ini bukan sekadar menulis kod, tapi kita telah melahirkan **Design System** kita sendiri yang dinamakan **Astro Edge UI**. 

### 🛠️ Apa yang kita capai:
1.  **UI Components Alpha:** Kita dah ada 11 komponen teras (Button, Card, Input, Accordion, Dialog, Switch, Tabs, Dropdown, Sheet, Toast, Skeleton) yang dibina 100% menggunakan HTML/JS/CSS tulen. Ringan, laju, dan "future-proof".
2.  **Product Engine:** Katalog produk kini nampak profesional dengan nisbah imej 3:4 (Listing) dan 1:1 (Detail). Imej laptop "Ultra-Edge Pro" kini menjadi penanda aras kualiti visual kita.
3.  **Infrastruktur Pintar:** Kita dah pasang folder `.gemini` yang mengandungi konfigurasi **MCP Astro Docs** dan **Modular Skills**. Mat Gem sekarang dah ada "kitab" Frontend Design untuk pastikan kod yang dihasilkan sentiasa premium.

### 🧠 Nota Teknikal Mat Gem:
-   **Native Nesting Lesson:** Kita belajar yang `&__` (Sass style) tak jalan dalam native CSS Astro. Kita dah beralih ke nama kelas penuh untuk nesting yang lebih stabil.
-   **Accessibility First:** Setiap komponen interaktif kita dah ada "nyawa" dan "suara" (ARIA) supaya semua orang boleh guna website ni nanti.

### 📅 Plan Untuk Sesi Seterusnya:
-   [ ] Setup GitHub Remote & Initial Push.
-   [ ] Implementasi Homepage Singleton di Keystatic.
-   [ ] Integrasi Pembayaran CHIP (The big one!).

---
> *Nota: Mat Gem (Gemini CLI) sentiasa memantau fail ini untuk memastikan arahan dipatuhi.*
