// src/pages/og/[...route].ts
import { defaultLanguage } from "~/config";
import { getPostsByLocale, getNotesByLocale, getJobsByLocale } from "~/types/utils";

// Definir o tipo para `params`
interface Params {
  route: string;
}

// Função para gerar as rotas possíveis
export async function getStaticPaths() {
  const posts = await getPostsByLocale(defaultLanguage);
  const notes = await getNotesByLocale(defaultLanguage);
  const jobs = await getJobsByLocale(defaultLanguage);

  // Criar a lista de paths
  const paths = [
    ...posts.map(post => ({ params: { route: post.id } })),
    ...notes.map(note => ({ params: { route: note.id } })),
    ...jobs.map(job => ({ params: { route: job.id } })),
  ];

  return {
    paths,  // paths é o array de rotas
    fallback: false, // ou 'true', dependendo do comportamento que você deseja
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
    body: JSON.stringify(page.data),
  };
}
