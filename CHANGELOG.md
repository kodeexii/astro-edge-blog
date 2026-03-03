# 📜 Changelog: Astro-Edge (Blog + E-commerce)

Semua perubahan penting pada projek ini akan didokumentasikan dalam fail ini. Format ini berdasarkan [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased] - 2026-03-01

### ✨ Ditambah (Added)
- **Struktur Projek:** Folder utama `src/layouts`, `src/pages`, `src/content`, dan `src/styles` diwujudkan.
- **Konfigurasi Astro 5:** Menggunakan `output: 'server'` dengan sokongan Cloudflare Adapter.
- **Hybrid Rendering:** Penggunaan `export const prerender = true` pada Blog dan Pages untuk kelajuan statik.
- **Layout Utama (`Layout.astro`):** Dilengkapi dengan navigasi dinamik, fluid typography, dan BEM styling.
- **Keystatic CMS:** Konfigurasi `local` storage mode untuk pengurusan kandungan secara visual tanpa internet.
- **Content Collections:** Skema Zod untuk `blog`, `pages`, `products`, dan `legals`.
- **Kandungan Blog:** 5 artikel "Deep Dive" permulaan dijana (Astro 5, Keystatic, Cloudflare, CSS, CHIP).
- **Halaman Dinamik:** Templat `src/pages/blog/[slug].astro` dan `src/pages/[slug].astro` siap untuk paparan kandungan.
- **Git Lokal:** Inisialisasi repositori Git dengan `.gitignore` dan `.env.example`.

### 🛠️ Diperbaiki (Fixed)
- **Vite External Issue:** Penambahan `noExternal` dalam `astro.config.mjs` untuk mengelakkan ralat `fields.string is not a function`.
- **Keystatic Schema:** Penyelarasan `fields.slug` dan `entryLayout` untuk memastikan `title` tersimpan dalam frontmatter.
- **Routing:** Pembetulan logik pengambilan data (SSR fallback) dalam templat slug untuk mengelakkan ralat `render`.
- **Timezone Shift:** Penggunaan kaedah UTC (`getUTCDate`, `getUTCMonth`) dalam paparan tarikh untuk mengelakkan ralat anjakan hari (+8 jam).
- **Keystatic UI:** Penambahan kolom maklumat (Title, Date, Price, Stock) dalam paparan senarai koleksi Dashboard.

### 📝 Kandungan (Content)
- **Daily Recap #1:** Entri blog pertama menceritakan perjalanan Hari ke-1 dengan gaya penulisan "Den & Mat Gem".
- **Halaman About:** Kandungan rasmi mengenai visi Astro-Edge dijana.
- **Datetime Migration:** Semua artikel blog dikemas kini dari format `date` ke `datetime` untuk penyusunan yang lebih tepat.

---

## [0.1.0] - 2026-03-01
### 🚀 Permulaan Projek (Initial Release)
- Inisialisasi projek menggunakan Astro 5.
- Konfigurasi asas `package.json`, `tsconfig.json`, dan `wrangler.toml`.
- Dokumen mandat `gemini.md` diwujudkan sebagai Source of Truth.
