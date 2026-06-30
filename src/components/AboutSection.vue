<script setup lang="ts">
import { computed } from 'vue'
import { useMarkdownResumeStore, defaultResume } from '@/stores/markdownResumeStore'

const { resume } = useMarkdownResumeStore()
const resolvedResume = computed(() => resume.value ?? defaultResume)
const personal = computed(() => resolvedResume.value.personal)
const experiences = computed(() => resolvedResume.value.experience)

const yearsExp = computed(() => {
  const years = experiences.value
    .map((exp) => {
      const matches = exp.duration.match(/\d{4}/g)
      return matches ? Number(matches[0]) : NaN
    })
    .filter((year) => !Number.isNaN(year))

  if (!years.length) {
    return null
  }

  const startYear = Math.min(...years)
  return new Date().getFullYear() - startYear
})
</script>

<template>
  <section id="about" class="cv-section py-24 bg-deepblue-900/30 border-y border-white/5">
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-4xl font-bold text-white mb-8 relative hide-in-print">
            Design Beyond Code
            <span class="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500"></span>
          </h2>

          <div class="space-y-6 text-lg text-slate-400 leading-relaxed">
            <p v-for="(paragraph, idx) in personal.about" :key="idx">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 hide-in-print">
          <div class="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <div class="text-4xl font-bold text-blue-400 mb-2">{{ yearsExp ?? '8+' }}</div>
            <div class="text-sm uppercase tracking-widest font-bold text-slate-500">Years Exp</div>
          </div>

          <div class="p-8 bg-blue-600/10 border border-blue-500/20 rounded-2xl">
            <div class="text-4xl font-bold text-white mb-2">☁️</div>
            <div class="text-sm uppercase tracking-widest font-bold text-slate-300">{{ personal.focusLabel }}</div>
          </div>

          <div class="p-8 bg-blue-600 border border-blue-500 rounded-2xl col-span-2">
            <div class="text-2xl font-bold text-white mb-2 italic">
              "{{ personal.quote }}"
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
