import { glob } from "astro/loaders"
import { defineCollection, z } from "astro:content"

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string().optional(),
  externalLink: z.string().optional(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).optional(),
})

const enPostsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/posts/en" }),
  schema: postSchema,
})

const brPostsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/posts/br" }),
  schema: postSchema,
})

const brNotesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/notes/br" }),
  schema: postSchema,
})

const brJobsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/jobs/br" }),
  schema: postSchema,
})

export const collections = {
  enPosts: enPostsCollection,
  brPosts: brPostsCollection,
  brNotes: brNotesCollection,
  brJobs: brJobsCollection,
}
