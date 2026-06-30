<script setup lang="ts">
import type { Project } from '@/data/resume'
import projectImage from '@/assets/project.png'

interface Props {
  projects: Project[],
  github: string
}

defineProps<Props>()

</script>

<template>
  <section id="projects" class="cv-section cv-projects py-24 bg-deepblue-900/30 border-y border-white/5">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 class="text-4xl font-bold text-white mb-4">Home Lab Projects</h2>
          <p class="text-slate-400 max-w-xl">A selection of systems I've architected, focusing on performance and reliability.</p>
        </div>
        <a :href="github" class="text-blue-400 font-bold hover:text-white transition-colors uppercase tracking-widest text-sm border-b border-blue-400/30 pb-1">Explore All Repo's →</a>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id" class="group cv-card avoid-break flex flex-col bg-deepblue-900 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-400/40 transition-all duration-500 shadow-2xl">
          <div class="relative overflow-hidden h-48 no-print">
            <img :src="projectImage" :alt="project.title" class="w-full h-full object-cover grayscale transition-all duration-700 transform group-hover:scale-110" />
            <div class="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors"></div>
          </div>

          <div class="p-8 flex flex-col grow">
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border rounded text-blue-300 border-blue-400/40 bg-blue-400/10">
                {{ project.technologies[0] ?? 'Project' }}
              </span>
              <span v-for="tech in project.technologies.slice(1, 5)" :key="tech" class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white/5 border border-white/10 rounded text-slate-400 group-hover:text-blue-300 transition-colors">{{ tech }}</span>
            </div>

            <h3 class="text-xl font-bold text-white mb-3">{{ project.title }}</h3>
            <p class="text-slate-400 leading-relaxed grow">{{ project.description }}</p>

            <div class="mt-8 flex items-center justify-between">
              <a :href="project.link || '#'" target="_blank" rel="noopener noreferrer" class="flex items-center text-blue-400 font-bold group/link">VIEW REPO <span class="ml-2 group-hover/link:ml-4 transition-all">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
