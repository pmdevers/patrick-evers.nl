<script setup lang="ts">
import { computed } from 'vue'
import { useMarkdownResumeStore, defaultResume } from '@/stores/markdownResumeStore'

const { resume } = useMarkdownResumeStore()
const resolvedResume = computed(() => resume.value ?? defaultResume)
const personal = computed(() => resolvedResume.value.personal)
</script>

<template>
  <footer class="no-print py-12 border-t border-white/5 bg-deepblue-950">
    <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="text-slate-500 text-sm">© {{ new Date().getFullYear() }} {{ personal.name }}. All systems operational.</div>
      <div class="flex items-center space-x-8">
        <a :href="personal.linkedin" class="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">LinkedIn</a>
        <a :href="personal.github" class="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">GitHub</a>
      </div>
    </div>
  </footer>
</template>
