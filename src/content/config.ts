import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		image: z.string().optional(),
		author: z.string().default('Wasatch Back Train'),
	}),
});

export const collections = { blog };