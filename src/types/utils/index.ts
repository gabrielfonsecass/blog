import { getCollection } from "astro:content"

export const formatDate = (
  date: Date | string | undefined,
  format: string = "DD/MM/YYYY",
): string => {
  const validDate = date ? new Date(date) : new Date()

  const tokens: Record<string, string> = {
    YYYY: validDate.getFullYear().toString(),
    MM: String(validDate.getMonth() + 1).padStart(2, "0"),
    DD: String(validDate.getDate()).padStart(2, "0"),
    HH: String(validDate.getHours()).padStart(2, "0"),
    mm: String(validDate.getMinutes()).padStart(2, "0"),
    ss: String(validDate.getSeconds()).padStart(2, "0"),
  }

  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => tokens[match])
}

export const getPostsByLocale = async (locale: string) => {
  const posts =
    locale === "br"
      ? await getCollection("brPosts")
      : await getCollection("enPosts")
  return posts.sort(
    (a: any, b: any) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  )
}

export const getNotesByLocale = async (locale: string) => {
  const notes =
    locale === "br"
      ? await getCollection("brNotes")
      : await getCollection("brNotes")
  return notes.sort(
    (a: any, b: any) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  )
}

export const getJobsByLocale = async (locale: string) => {
  const jobs =
    locale === "br"
      ? await getCollection("brJobs")
      : await getCollection("brJobs")
  return jobs.sort(
    (a: any, b: any) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  )
}
