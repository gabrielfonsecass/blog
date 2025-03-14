import { Github, Linkedin } from "lucide-react"

export const defaultLanguage: string = "br"

export const common = {
  domain: "https://gabrielfonsecas.com",
  meta: {
    favicon: "/avatar.png",
    url: "https://gabrielfonsecas.com",
  },
  googleAnalyticsId: "",
  social: [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/gabrielfonsecas/",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/gabrielfonsecass",
    },
  ],
  rss: true,
  navigation: {
    home: true,
    notes: true,
    blog: true,
    jobs: true,
    about: true,
  },
  latestPosts: 8,
  latestNotes: 8,
  latestJobs: 8,
}

export const br = {
  ...common,
  siteName: "Gabriel Fonseca",
  meta: {
    ...common.meta,
    title: "Gabriel Fonseca",
    description: "Tentando entender o mundo através do Machine Learning",
  },
  navigation: {
    ...common.navigation,
  },
  pageMeta: {
    notes: {
      title: "Todas as anotações",
      description: "Aqui estão as minhas anotações",
    },
    jobs: {
      title: "Todos os projetos",
      description: "Aqui estão os meus projetos pessoais",
    },
    blog: {
      title: "Todos os posts",
      description: "Aqui estão os meus posts",
    },
    about: {
      title: "Sobre mim",
      description: "Deixa eu me apresentar",
    },
  },
}

export const en = {
  ...common,
  siteName: "Gabriel Fonseca",
  meta: {
    ...common.meta,
    title: "Gabriel Fonseca",
    description: "Tentando entender o mundo através do Machine Learning",
  },
  navigation: {
    ...common.navigation,
  },
  pageMeta: {
    notes: {
      title: "All Posts",
      description: "Here are Gabriel Fonseca's all posts",
    },
    jobs: {
      title: "Todos os projetos",
      description: "Aqui estão os meus projetos pessoais",
    },
    blog: {
      title: "Todos os posts",
      description: "Aqui estão os meus posts",
    },
    links: {
      title: "My Friends",
      description: "Here are Gabriel Fonseca's friends",
    },
    about: {
      title: "About Me",
      description: "Here is Gabriel Fonseca's self-introduction",
    },
  },
}
