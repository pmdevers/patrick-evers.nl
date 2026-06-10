import { ref } from 'vue'
// @ts-expect-error — virtual module resolved by vite.config.ts at build time
import pinnedRepos from 'virtual:github-pinned-repos'

export interface GithubRepo {
  name: string
  description: string | null
  url: string
  stargazerCount: number
  forkCount: number
  primaryLanguage: { name: string; color: string } | null
  repositoryTopics: { nodes: { topic: { name: string } }[] }
  openGraphImageUrl: string
}

const tokenMissingMessage = 'GITHUB_TOKEN is not set. Configure it at build time to load pinned repositories.'

const fallbackRepo: GithubRepo = {
  name: 'Not Found',
  description: tokenMissingMessage,
  url: 'https://github.com/pmdevers',
  stargazerCount: 0,
  forkCount: 0,
  primaryLanguage: null,
  repositoryTopics: { nodes: [] },
  openGraphImageUrl: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg'
}

export function useGithubPinnedRepos() {
  const hasPinnedRepos = pinnedRepos.length > 0
  const repos = ref<GithubRepo[]>(hasPinnedRepos ? pinnedRepos : [fallbackRepo])
  const loading = ref(false)
  const error = ref<string | null>(hasPinnedRepos ? null : tokenMissingMessage)

  return { repos, loading, error }
}
