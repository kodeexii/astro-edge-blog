import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		publishedAt: z.coerce.date(),
		isDraft: z.boolean().default(true),
		coverImage: z.string().optional(),
		description: z.string(),
	}),
});

const pages = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

const legals = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		lastUpdated: z.coerce.date(),
	}),
});

// Products menggunakan data (JSON) dari Keystatic
const products = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
		price: z.number(),
		description: z.string(),
		image: z.string().optional(),
		stock: z.number().int(),
	}),
});

export const collections = {
	'blog': blog,
	'pages': pages,
	'legals': legals,
	'products': products,
};
