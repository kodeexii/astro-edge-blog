import { config, fields, collection, singleton } from '@keystatic/core';

// Logik pemilihan storan: 'local' untuk development, 'github' untuk production
const storage =
  process.env.NODE_ENV === 'development'
    ? { kind: 'local' }
    : {
        kind: 'github',
        repo: 'kodeexii/astro-edge-blog',
        branchPrefix: 'draf/',
      };

export default config({
  storage,
  ui: {
    brand: {
      name: 'Astro-Edge CMS <script src="/admin-fix.js" defer></script>',
    },
    navigation: {
      'Kandungan Web': ['posts', 'pages'],
      'Kedai & Jualan': ['products'],
      'Pentadbiran': ['admin_guide', 'system_tools'],
    },
  },
  collections: {
    posts: collection({
      label: 'Blog & Artikel',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      columns: ['title', 'publishedAt'],
      schema: {
        title: fields.slug({ name: { label: 'Tajuk Artikel' } }),
        publishedAt: fields.datetime({ 
          label: 'Tarikh & Masa Terbit',
          defaultValue: { kind: 'now' },
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

  singletons: {
    admin_guide: singleton({
      label: 'Panduan Editor',
      path: 'src/content/admin-guide',
      schema: {
        guide: fields.markdoc({ label: 'Arahan Penting' }),
      },
    }),
    system_tools: singleton({
      label: 'Reset & Penyelenggaraan',
      path: 'src/content/system-tools',
      schema: {
        info: fields.empty(), // Cuma tempat letak butang
      },
    }),
  },
});
