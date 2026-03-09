# 🚀 Astro-Edge: Project Context & Status

Fail ini merupakan "Source of Truth" bagi status semasa projek. Sila kemas kini fail ini selepas setiap perubahan besar untuk memastikan kelangsungan konteks.

---

## 🆔 1. Identiti Projek
- **Nama Projek:** Astro-Edge (Blog + E-commerce)
- **Framework:** Astro 5.x (Hybrid Mode)
- **Deployment:** [Cloudflare Pages](https://astro-edge-blog.pages.dev) (Live)
- **Source Control:** GitHub (`kodeexii/astro-edge-blog`)
- **Fokus Strategik:** **Single-User Platform** (Optimasi untuk kepantasan dan kawalan penuh).
- **URL Pembangunan:** `http://localhost:4321`

---

## 🎯 2. Konteks Pembangunan Aktif
- **Fokus Sekarang:** Pembangunan Lokal & Strategi Kandungan.
- **Strategi Storage:** 
  - **Lokal:** Untuk pembangunan pantas (Dev).
  - **GitHub (Direct to Main):** Untuk kemas kini kandungan yang pantas tanpa Pull Request.
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
- [x] `GEMINI_API_KEY` (Image Generation / Nano Banana Pro)

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
- 📂 `local-content/` — Aset visual & kandungan untuk pembangunan lokal.

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
- [x] Integrasi `GEMINI_API_KEY` untuk penjanaan imej (Nano Banana Pro).
- [x] Pemasangan `uv` secara lokal untuk pengurusan dependensi Python yang pantas.
- [x] Penjanaan aset visual pertama menggunakan AI untuk folder `local-content/`.

---

## 🛠️ Git Workflow (The Standard)
Untuk mengelakkan konflik antara pembangunan kod dan kemas kini CMS:
1.  **Branch `main`:** Eksklusif untuk kandungan (Keystatic) dan Production.
2.  **Branch `dev`:** Tempat pembangunan kod lokal.
3.  **Sync Flow:** `main` (Content) perlu di-merge ke `dev` secara berkala.
4.  **Deploy Flow:** `dev` (Code) di-merge ke `main` melalui Pull Request apabila sedia.

---

## 📝 Daily Recap: Hari #3 - "The Power of Generative Assets"

Hari ini kita telah mengaktifkan kuasa AI secara langsung dalam *workflow* pembangunan kita.

### 🛠️ Apa yang kita capai:
1.  **AI Image Pipeline:** Mat Gem dah ada "mata" dan "tangan" kreatif melalui **Nano Banana Pro**. Kita berjaya jana imej sinematik pertama (Lelaki 50-an & One Piece) yang disimpan terus ke `local-content/`.
2.  **Tooling Upgrade (uv):** Penggunaan `uv` sebagai pengurus dependensi Python menjadikan skrip kita lebih ringan dan pantas. Tiada lagi isu "Module Not Found".
3.  **CMS Reality Check:** Kita sedar yang mod **GitHub Branching** di Keystatic agak "berat" untuk pengguna biasa (Editors). Kita dah ada strategi untuk memudahkannya di masa depan (sama ada guna mod Direct atau Keystatic Cloud).

### 🧠 Nota Teknikal Mat Gem:
-   **Security First:** Kunci API kini selamat dalam `.env` dan di-ignore oleh git. Jangan sesekali biarkan kunci ni "terbabas" ke GitHub Repo.
-   **Local vs Remote Assets:** Imej yang di-jana AI disimpan dalam `local-content/` untuk memastikan repo kita tak jadi terlalu besar dengan aset yang belum diproses.

### 📅 Plan Untuk Sesi Seterusnya:
-   [ ] Setup GitHub Remote & Initial Push (Tunda dari semalam).
-   [ ] Implementasi Homepage Singleton di Keystatic.
-   [ ] Integrasi Pembayaran CHIP.

---
> *Nota: Mat Gem (Gemini CLI) sentiasa memantau fail ini untuk memastikan arahan dipatuhi.*
