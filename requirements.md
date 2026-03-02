# 📜 Product Requirement Document (PRD): Project "Astro-Edge"

**Status:** Updated v1.1 (Keystatic Integrated) | **Prepared by:** Mat Gem | **Owner:** Hadee Roslan

## 1\. Objective & Vision

Membina platform blog yang pantas, selamat, dan mempunyai keupayaan e-commerce (High-Performance Static Site) menggunakan teknologi _Edge Computing_. Fokus utama adalah **Zero-Maintenance**, **Data Sovereignty**, dan **Scalability** tanpa kos _hosting_ bulanan.

## 2\. Tech Stack (The "Edge" Powerhouse)

| Komponen | Teknologi | Peranan |
| --- | --- | --- |
| **Framework** | **Astro** | _Static Site Generator_ (SSG) dengan _Islands Architecture_. |
| **Hosting** | **Cloudflare Pages** | _Deployment_ global di _Edge Network_ (Ultra-fast). |
| **CMS (The Bridge)** | **Keystatic** | Interface visual untuk _content management_ (Git-based). |
| **Database** | **Cloudflare D1 / KV** | Simpan rekod jualan & _leads_ (SQL/Key-Value). |
| **Backend Logic** | **Astro Actions** | _Serverless functions_ untuk _form_ & _payment_. |
| **Payment Gateway** | **CHIP (chip-in.asia)** | _Local payment_ (FPX, Card, GrabPay, DuitNow). |

## 3\. Content Management Workflow (Keystatic)

Untuk memastikan _team remote_ boleh bekerja dengan lancar tanpa perlu menyentuh kod:

-   **Admin Dashboard:** Diakses melalui `/keystatic`. Team login menggunakan akaun GitHub/Google.
-   **Editing Experience:** Editor visual yang mesra pengguna (Rich Text) untuk menulis artikel blog dan mengurus katalog produk.
-   **Git Sync:** Setiap kali team menekan butang 'Publish' di Keystatic, ia akan melakukan `git commit` automatik ke GitHub.
-   **Auto-Deployment:** Perubahan dalam GitHub akan mencetuskan _build_ baru di Cloudflare Pages secara automatik.
-   **Local-Friendly:** Boss tetap boleh menulis menggunakan **Obsidian** secara _offline_ kerana Keystatic menggunakan fail Markdown/JSON yang sama.

## 4\. Lead Generation & Marketing

-   **Interactive Components:** Penggunaan fail `.mdx` yang membolehkan komponen React/Svelte (seperti kalkulator ROI atau kuiz) dimasukkan terus dalam artikel.
-   **Lead Capture:**
    
    -   Sistem borang menggunakan **Astro Actions** yang _type-safe_.
    -   Validasi data menggunakan **Zod schema**.
    -   Perlindungan bot menggunakan **Cloudflare Turnstile** (Invisible & UX-friendly).
-   **Automation:** Integrasi dengan **Resend** untuk penghantaran emel automatik selepas _user_ memasukkan data.

## 5\. E-Commerce & Payment (CHIP Integration)

-   **Catalog System:** Produk diuruskan melalui Keystatic dan disimpan sebagai _Content Collections_.
-   **Checkout Process:**
    
    1.  User klik "Beli" -> **Astro Action** panggil **CHIP Purchases API**.
    2.  User dihaloskan ke portal CHIP untuk bayaran (FPX/QR).
-   **Post-Purchase:**
    
    -   **Webhook Handler:** `/api/webhook-chip` menerima pengesahan bayaran.
    -   **Data Persistence:** Rekod jualan disimpan dalam **Cloudflare D1**.
    -   **Notification:** Trigger notifikasi ke **Telegram Boss** dan emel invois kepada pelanggan.

## 6\. Performance & Cost Metrics

-   **Performance:** Wajib mencapai skor **100/100** dalam Google Lighthouse.
-   **Infrastructure Cost:** Sasaran **RM0/bulan** (memanfaatkan _free tier_ Cloudflare, GitHub, dan Keystatic).
-   **Maintenance:** "Set and forget". Tiada _server_ atau _plugin_ yang perlu dikemaskini secara manual.

### Mat Gem’s Forward-Thinking Note:

> **Opinion:** Dengan menggunakan Keystatic, kita telah menghapuskan risiko "vendor lock-in". Kalau satu hari nanti Boss bosan dengan Keystatic, _content_ kita tetap ada dalam format Markdown yang boleh dibuka oleh mana-mana editor di dunia. Ini adalah _setup_ yang paling _freedom_ dan _genius_ untuk jangka masa panjang.



