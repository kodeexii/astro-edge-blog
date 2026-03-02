import { config, fields, collection } from '@keystatic/core';

export default config({
  // Mod penyimpanan: Menggunakan GitHub untuk "Data Ownership" 100%
  storage: {
    kind: 'github',
    repo: {
      owner: 'kodeexii', // Ganti dengan username GitHub anda
      name: 'astro-edge-blog' // Ganti dengan nama repository anda
    },
  },

  collections: {
    /**
     * Blog Posts: Untuk artikel dan berita.
     * Disimpan dalam format Markdoc agar mudah selitkan komponen interaktif.
     */
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.string({ label: 'Title' }),
        publishedAt: fields.date({ 
          label: 'Published Date',
          description: 'Tarikh artikel ini diterbitkan'
        }),
        isDraft: fields.checkbox({ 
          label: 'Draft', 
          defaultValue: true,
          description: 'Jika ditanda, artikel tidak akan dipaparkan secara umum'
        }),
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        description: fields.text({ 
          label: 'SEO Description', 
          multiline: true,
          description: 'Penerangan ringkas untuk Google Search'
        }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),

    /**
     * Pages: Untuk halaman umum seperti "About Us", "Contact", dll.
     */
    pages: collection({
      label: 'Pages',
      slugField: 'title',
      path: 'src/content/pages/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.string({ label: 'Title' }),
        description: fields.text({ label: 'SEO Description', multiline: true }),
        content: fields.markdoc({ label: 'Content' }),
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
      schema: {
        title: fields.string({ label: 'Title' }),
        lastUpdated: fields.date({ label: 'Last Updated' }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),

    /**
     * Products: Katalog produk e-commerce.
     * Disimpan sebagai JSON untuk memudahkan pengiraan harga/logic.
     */
    products: collection({
      label: 'Products',
      slugField: 'name',
      path: 'src/content/products/*',
      format: { data: 'json' },
      schema: {
        name: fields.string({ label: 'Product Name' }),
        price: fields.number({ 
          label: 'Price (MYR)',
          description: 'Harga dalam Ringgit Malaysia'
        }),
        description: fields.text({ label: 'Description', multiline: true }),
        image: fields.image({
          label: 'Product Image',
          directory: 'public/images/products',
          publicPath: '/images/products/',
        }),
        stock: fields.integer({ label: 'Stock Quantity', defaultValue: 10 }),
      },
    }),
  },
});