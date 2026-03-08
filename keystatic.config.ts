import { config, fields, collection } from '@keystatic/core';

// Logik pemilihan storan: 'local' untuk development, 'github' untuk production
const storage =
  process.env.NODE_ENV === 'development'
    ? { kind: 'local' }
    : {
        kind: 'github',
        repo: 'kodeexii/astro-edge-blog',
        branchPrefix: 'draf/', // Setiap 'Save' baru akan mencadangkan branch draf
      };

export default config({
  storage,
  ui: {
    brand: {
      name: 'Astro-Edge CMS',
    },
    navigation: {
      'Kandungan Web': ['posts', 'pages'],
      'Kedai & Jualan': ['products'],
    },
  },
  collections: {
    /**
     * Blog Posts: Untuk artikel dan berita.
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
          label: 'Ringkasan SEO', 
          multiline: true,
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
     * Pages: Untuk halaman umum.
     */
    pages: collection({
      label: 'Halaman Statik',
      slugField: 'title',
      path: 'src/content/pages/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Tajuk Halaman' } }),
        description: fields.text({ label: 'Ringkasan SEO', multiline: true }),
        content: fields.markdoc({ label: 'Kandungan' }),
      },
    }),

    /**
     * Products: Katalog produk e-commerce.
     */
    products: collection({
      label: 'Katalog Produk',
      slugField: 'name',
      path: 'src/content/products/*',
      format: { data: 'json' },
      columns: ['name', 'price', 'stock'],
      schema: {
        name: fields.text({ label: 'Nama Produk' }),
        price: fields.number({ label: 'Harga (RM)' }),
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
