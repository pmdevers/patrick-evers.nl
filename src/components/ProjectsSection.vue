<script setup lang="ts">

import { useGithubPinnedRepos } from '../composables/useGithubPinnedRepos'

const { repos, loading } = useGithubPinnedRepos();
</script>

<template>
  <section id="projects" class="cv-section cv-projects py-24 bg-deepblue-900/30 border-y border-white/5">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 class="text-4xl font-bold text-white mb-4">Home Lab Projects</h2>
          <p class="text-slate-400 max-w-xl">A selection of systems I've architected, focusing on performance and reliability.</p>
        </div>
        <a href="https://github.com/pmdevers" class="text-blue-400 font-bold hover:text-white transition-colors uppercase tracking-widest text-sm border-b border-blue-400/30 pb-1">
          Explore All Repo's →
        </a>
      </div>

      <div v-if="loading" class="grid md:grid-cols-3 gap-8">
        <div v-for="i in 6" :key="i" class="flex flex-col bg-deepblue-900 border border-white/5 rounded-2xl overflow-hidden animate-pulse">
          <div class="h-48 bg-deepblue-800"></div>
          <div class="p-8 space-y-4">
            <div class="flex gap-2">
              <div class="h-4 w-16 bg-deepblue-800 rounded"></div>
              <div class="h-4 w-20 bg-deepblue-800 rounded"></div>
            </div>
            <div class="h-6 bg-deepblue-800 rounded w-3/4"></div>
            <div class="h-4 bg-deepblue-800 rounded"></div>
            <div class="h-4 bg-deepblue-800 rounded w-5/6"></div>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="repo in repos" :key="repo.name" class="group cv-card avoid-break flex flex-col bg-deepblue-900 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-400/40 transition-all duration-500 shadow-2xl">
          <div class="relative overflow-hidden h-48 no-print">
            <img src="../assets/project.png" :alt="repo.name" class="w-full h-full object-cover grayscale transition-all duration-700 transform group-hover:scale-110">
            <div class="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div class="p-8 flex flex-col grow">
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-if="repo.primaryLanguage"
                class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border rounded"
                :style="{ backgroundColor: repo.primaryLanguage.color + '30', borderColor: repo.primaryLanguage.color + '60', color: repo.primaryLanguage.color }"
              >
                {{ repo.primaryLanguage.name }}
              </span>
              <span
                v-for="t in repo.repositoryTopics.nodes.slice(0, 4)"
                :key="t.topic.name"
                class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white/5 border border-white/10 rounded text-slate-400 group-hover:text-blue-300 transition-colors"
              >
                {{ t.topic.name }}
              </span>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">{{ repo.name }}</h3>
            <p class="text-slate-400 leading-relaxed grow">{{ repo.description ?? 'No description provided.' }}</p>
            <div class="mt-8 flex items-center justify-between">
              <a :href="repo.url" target="_blank" rel="noopener noreferrer" class="flex items-center text-blue-400 font-bold group/link">
                VIEW REPO <span class="ml-2 group-hover/link:ml-4 transition-all">→</span>
              </a>
              <span v-if="repo.stargazerCount > 0" class="text-slate-500 text-xs font-medium">★ {{ repo.stargazerCount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
