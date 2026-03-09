import { defineConfig, loadEnv, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";

const VIRTUAL_ID = 'virtual:github-pinned-repos'
const RESOLVED_ID = '\0' + VIRTUAL_ID

const QUERY = `{
  user(login: "pmdevers") {
    pinnedItems(first: 6, types: [REPOSITORY]) {
      nodes {
        ... on Repository {
          name
          description
          url
          stargazerCount
          forkCount
          primaryLanguage { name color }
          repositoryTopics(first: 5) { nodes { topic { name } } }
          openGraphImageUrl
        }
      }
    }
  }
}`

function githubPinnedReposPlugin(token: string | undefined): Plugin {
  let cachedData: string | null = null

  return {
    name: 'github-pinned-repos',
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
    },
    async load(id) {
      if (id !== RESOLVED_ID) return

      if (cachedData) return cachedData

      if (!token) {
        console.warn('[github-pinned-repos] GITHUB_TOKEN not set — using empty array')
        cachedData = `export default []`
        return cachedData
      }

      const res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          Authorization: `bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: QUERY }),
      })

      if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`)
      const json = await res.json()
      if (json.errors?.length) throw new Error(json.errors[0].message)

      const repos = json.data.user.pinnedItems.nodes
      cachedData = `export default ${JSON.stringify(repos)}`
      return cachedData
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // loadEnv reads .env files; passing '' as prefix loads ALL vars (not just VITE_ ones)
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      vue(),
      tailwindcss(),
      githubPinnedReposPlugin(env.GITHUB_TOKEN),
    ],
  }
})
