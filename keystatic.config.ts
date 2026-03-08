import { config, fields, collection } from '@keystatic/core';

// Logik pemilihan storan: 'local' untuk development, 'github' untuk production
const storage =
  process.env.NODE_ENV === 'development'
    ? { kind: 'local' }
    : {
        kind: 'github',
        repo: 'kodeexii/astro-edge-blog',
        branchPrefix: 'draf/', // Menggunakan istilah 'draf/' untuk branch CMS
      };

export default config({
  storage,
  ui: {
    brand: {
      name: 'Astro-Edge CMS',
    },
  },
  collections: {
    /**
     * Blog Posts: Untuk artikel dan berita.
     * Disimpan dalam format Markdoc agar mudah selitkan komponen interaktif.
     */
    posts: collection({
      label: 'Blog & Artikel',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      columns: ['title', 'status', 'publishedAt'],
      schema: {
        title: fields.slug({ name: { label: 'Tajuk Artikel' } }),
        publishedAt: fields.datetime({ 
          label: 'Tarikh & Masa Terbit',
          description: 'Tarikh dan masa artikel ini diterbitkan',
          defaultValue: { kind: 'now' },
        }),
        status: fields.select({
          label: 'Status Penerbitan',
          options: [
            { label: '🌑 Draf (Hanya di Pratonton)', value: 'draft' },
            { label: '🌟 Terbit (Live di Website)', value: 'published' },
          ],
          defaultValue: 'draft',
        }),
        coverImage: fields.image({
          label: 'Gambar Muka Depan',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        description: fields.text({ 
          label: 'Ringkasan SEO (Automatik jika kosong)', 
          multiline: true,
          description: 'Penerangan ringkas untuk Google Search'
        }),
        content: fields.markdoc({ 
          label: 'Isi Kandungan',
          options: {
            image: {
              directory: 'public/images/blog',
              publicPath: '/images/blog/',
            },
          },
        }),
      },
    }),

    /**
     * Pages: Untuk halaman umum seperti "About Us", "Contact", dll.
     */
    pages: collection({
      label: 'Halaman Statik',
      slugField: 'title',
      path: 'src/content/pages/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      columns: ['title'],
      schema: {
        title: fields.slug({ name: { label: 'Tajuk Halaman' } }),
        description: fields.text({ label: 'Ringkasan SEO', multiline: true }),
        content: fields.markdoc({ label: 'Kandungan' }),
      },
    }),

    /**
     * Legal Pages: Khas untuk Privacy Policy dan Terms of Service.
     */
    legals: collection({
      label: 'Legal Pages',
      slugField: 'title',
      path: 'src/content/legals/*',
      format: { contentField: 'content' },
      columns: ['title', 'lastUpdated'],
      schema: {
        title: fields.text({ label: 'Tajuk' }),
        lastUpdated: fields.date({ label: 'Kemaskini Terakhir' }),
        content: fields.markdoc({ label: 'Kandungan' }),
      },
    }),

    /**
     * Products: Katalog produk e-commerce.
     * Disimpan sebagai JSON untuk memudahkan pengiraan harga/logic.
     */
    products: collection({
      label: 'Katalog Produk',
      slugField: 'name',
      path: 'src/content/products/*',
      format: { data: 'json' },
      columns: ['name', 'price', 'stock'],
      schema: {
        name: fields.text({ label: 'Nama Produk' }),
        price: fields.number({ 
          label: 'Harga (RM)',
          description: 'Harga dalam Ringgit Malaysia'
        }),
        description: fields.text({ label: 'Penerangan Produk', multiline: true }),
        image: fields.image({
          label: 'Gambar Produk',
          directory: 'public/images/products',
          publicPath: '/images/products/',
        }),
        stock: fields.integer({ label: 'Baki Stok', defaultValue: 10 }),
      },
    }),
  },
});
