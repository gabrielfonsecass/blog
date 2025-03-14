import { getPostsByLocale, getNotesByLocale, getJobsByLocale } from "~/types/utils"
import { defaultLanguage } from "~/config"

// Define the `getStaticPaths` function
export async function getStaticPaths() {
  const posts = await getPostsByLocale(defaultLanguage)
  const notes = await getNotesByLocale(defaultLanguage)
  const jobs = await getJobsByLocale(defaultLanguage)

  // Combine the posts, notes, and jobs into a single array of paths
  const paths = [...posts, ...notes, ...jobs].map(({ id }) => ({
    params: { route: id.toString() },
  }))

  return {
    paths,
    fallback: false, // or 'blocking' if you want to wait for new paths to be generated
  }
}

// Optionally, set prerender to false if you want this to be server-rendered
export const prerender = false
