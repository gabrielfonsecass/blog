// src/pages/og/[...route].ts
import { defaultLanguage } from "~/config";
import { getPostsByLocale, getNotesByLocale, getJobsByLocale } from "~/types/utils";

interface Params {
    route: string;
}

// Função para gerar as rotas possíveis
export async function getStaticPaths() {
  const posts = await getPostsByLocale(defaultLanguage);
  const notes = await getNotesByLocale(defaultLanguage);
  const jobs = await getJobsByLocale(defaultLanguage);

  // Coletar todas as IDs dos posts, notas e empregos
  const paths = [
    ...posts.map(post => ({ params: { route: post.id } })),
    ...notes.map(note => ({ params: { route: note.id } })),
    ...jobs.map(job => ({ params: { route: job.id } })),
  ];

  return {
    paths,
    fallback: false, // ou true, dependendo do seu caso
  };
}

// Função para obter os dados de uma página específica
export async function get({ params }: { params: Params }) {
  const { route } = params;
  const posts = await getPostsByLocale(defaultLanguage);
  const notes = await getNotesByLocale(defaultLanguage);
  const jobs = await getJobsByLocale(defaultLanguage);

  // Buscar o item correspondente pela ID
  const page = [
    ...posts,
    ...notes,
    ...jobs,
  ].find(item => item.id === route);

  if (!page) {
    return { status: 404, body: "Página não encontrada" };
  }

  return {
    body: JSON.stringify(page.data), // ou qualquer outro formato de resposta que você precise
  };
}
