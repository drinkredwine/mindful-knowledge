import { defineCollection, z } from 'astro:content';

const glossaryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    term: z.string(),
    category: z.enum(['epistemology', 'methodology', 'practice', 'philosophy']),
    thinker: z.string().optional(),
    bookRef: z.string().optional(),
    relatedTerms: z.array(z.string()),
    tags: z.array(z.string()),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('intermediate'),
  }),
});

const slidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    slideNumber: z.number(),
    title: z.string(),
    section: z.string(),
    bookCover: z.string().optional(),
    glossaryTerms: z.array(z.string()).optional(),
  }),
});

export const collections = {
  glossary: glossaryCollection,
  slides: slidesCollection,
};
