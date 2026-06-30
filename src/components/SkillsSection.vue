<script setup lang="ts">
import { computed } from 'vue'
import { useMarkdownResumeStore, defaultResume } from '@/stores/markdownResumeStore'

const { resume } = useMarkdownResumeStore()
const resolvedResume = computed(() => resume.value ?? defaultResume)
const skills = computed(() => resolvedResume.value.skills)
</script>

<template>
  <section id="skills" class="cv-section py-24">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16 no-print">
        <h2 class="text-4xl font-bold text-white mb-4">The Tech Stack</h2>
        <p class="text-slate-400 max-w-2xl mx-auto hide-in-print">Modern tools for modern problems. My toolkit is built for speed, scalability, and security.</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 no-print">
        <div v-for="group in skills" :key="group.category" class="avoid-break bg-deepblue-900/40 p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all group">
          <h3 class="text-blue-300 font-bold mb-4 uppercase tracking-wider text-sm">{{ group.category }}</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in group.items" :key="skill" class="text-sm px-3 py-1 bg-white/5 text-slate-300 rounded border border-white/5 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <div class="print-only ats-skills-list">
        <h2>Technical Skills</h2>
        <div v-for="group in skills" :key="`print-${group.category}`" class="ats-skill-row">
          <h3>{{ group.category }}</h3>
          <p>{{ group.items.join(', ') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
