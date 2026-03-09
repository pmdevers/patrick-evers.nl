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

export function useGithubPinnedRepos() {
  const repos = ref<GithubRepo[]>(pinnedRepos)
  const loading = ref(false)
  const error = ref<string | null>(pinnedRepos.length === 0 ? 'No pinned repositories found. Set GITHUB_TOKEN at build time.' : null)

  return { repos, loading, error }
}
