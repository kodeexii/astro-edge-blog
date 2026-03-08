# 🚀 Astro-Edge: Blog & E-commerce System

**Astro-Edge** adalah sebuah sistem hibrid (Blog + E-commerce) yang dibina menggunakan **Astro 5.x**. Projek ini direka untuk kelajuan maksima, aksesibiliti tinggi, dan kos pengurusan yang rendah dengan memanfaatkan infrastruktur *serverless* Cloudflare.

---

## 🛠️ Stack Teknologi

*   **Framework:** [Astro 5](https://astro.build/) (Hybrid Rendering Mode)
*   **CMS:** [Keystatic](https://keystatic.com/) (Git-based CMS)
*   **Styling:** Pure CSS dengan metodologi **Modular BEM** + **Fluid Typography** (`clamp()`).
*   **Infrastruktur:** [Cloudflare Pages](https://pages.cloudflare.com/) (Hosting) & [Cloudflare D1](https://developers.cloudflare.com/d1/) (Database).
*   **Email:** [Resend](https://resend.com/) (Transactional & Marketing).
*   **Payment:** [CHIP](https://www.chip-in.asia/) (Payment Gateway).
*   **Security:** [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) (Bot Protection).

---

## ✨ Ciri-Ciri Utama

- ✅ **Hybrid Rendering:** Halaman statik untuk SEO dan halaman dinamik untuk fungsi e-commerce.
- ✅ **No Framework CSS:** Bebas daripada Tailwind/Bootstrap untuk kelajuan *loading* yang optimum.
- ✅ **Accessible UI:** Komponen yang mematuhi standard WAI-ARIA (Dialog, Tabs, Accordion).
- ✅ **Git-based Workflow:** Kemas kini kandungan terus melalui Keystatic yang disinkronkan ke GitHub.
- ✅ **Fluid Design:** Rekaan yang responsif secara automatik pada semua saiz skrin tanpa banyak *media queries*.

---

## 🚀 Bermula (Getting Started)

### 1. Prasyarat
Pastikan ekau dah ada [Node.js](https://nodejs.org/) (versi terbaru) terpasang di komputer.

### 2. Pemasangan
```bash
git clone https://github.com/kodeexii/astro-edge-blog.git
cd astro-edge-blog
npm install
```

### 3. Konfigurasi Persekitaran
Salin fail `.env.example` kepada `.env` dan masukkan API keys yang diperlukan:
```bash
cp .env.example .env
```

### 4. Menjalankan Server Pembangunan
```bash
npm run dev
```
Buka [http://localhost:4321](http://localhost:4321) untuk melihat website dan [/keystatic](http://localhost:4321/keystatic) untuk editor kandungan.

---

## 📂 Struktur Projek

*   `src/content/` — Sumber kandungan (Blog, Pages, Products, Legals).
*   `src/layouts/` — Acuan utama halaman.
*   `src/pages/` — Sistem routing Astro.
*   `src/components/ui/` — Komponen UI yang boleh diguna semula (Vanilla HTML/JS).
*   `src/styles/` — Global CSS dan sistem fluid typography.
*   `public/` — Fail statik seperti gambar dan aset luaran.

---

## 📈 Status Projek & Progress
Projek ini sedang aktif dibangunkan. Sila rujuk fail `gemini.md` untuk melihat log kemajuan harian dan tugasan yang akan datang.

---

## 📜 Lesen
Projek ini dilesenkan di bawah **GNU Affero General Public License v3.0 (AGPL-3.0)**. Sila rujuk fail `LICENSE` untuk maklumat lanjut.

---
> Dibina dengan ❤️ oleh **Hadee Roslan** & **Mat Gem (Gemini CLI)**.
