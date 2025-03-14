import { defaultLanguage } from "~/config"
import { getPostsByLocale, getNotesByLocale, getJobsByLocale } from "~/types/utils"

const posts = await getPostsByLocale(defaultLanguage)
const notes = await getNotesByLocale(defaultLanguage)
const jobs = await getJobsByLocale(defaultLanguage)

// Transform the collection into an object
// @ts-ignore
const pages = Object.fromEntries([...posts,...notes,...jobs].map(({ id, data }) => [id, { data }]))
