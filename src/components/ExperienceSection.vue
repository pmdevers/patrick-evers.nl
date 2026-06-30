<script setup lang="ts">
import { computed } from 'vue'
import { useMarkdownResumeStore, defaultResume } from '@/stores/markdownResumeStore'

const { resume } = useMarkdownResumeStore()
const resolvedResume = computed(() => resume.value ?? defaultResume)
const experiences = computed(() => resolvedResume.value.experience)
</script>

<template>
  <section id="experience" class="cv-section py-24 bg-deepblue-900/30 border-y border-white/5">
    <div class="container mx-auto px-6">
      <div class="text-center mb-14">
        <h2 class="text-4xl font-bold text-white mb-4">Work Experience</h2>
        <p class="hide-in-print text-slate-400 max-w-2xl mx-auto">20+ years of engineering — from code to cloud, from feature to architecture.</p>
      </div>

      <div class="relative">
        <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>

        <div class="space-y-8">
          <div v-for="(exp, index) in experiences" :key="exp.id" class="relative md:grid md:grid-cols-2 md:gap-12 items-start group">
            <div class="absolute left-0 md:left-1/2 top-2 w-3 h-3 rounded-full bg-blue-400 border-2 border-deepblue-950 -translate-x-1/2 hidden md:block group-hover:bg-mauverose-300 transition-colors z-10"></div>

            <div :class="[index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12 md:row-start-1', 'mb-4 md:mb-0 text-xl font-bold text-white']">
              <h3 class="text-xl font-bold text-white">{{ exp.position }}</h3>
              <p class="text-blue-300 font-semibold">{{ exp.company }}</p>
              <div class="text-slate-400 text-sm">{{ exp.location }} | {{ exp.duration }}</div>
            </div>

            <div :class="index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right md:col-start-1 md:row-start-1'">
              <div class="bg-deepblue-900/60 border border-white/5 rounded-2xl p-6 group-hover:border-blue-400/20 transition-all">
                <ul class="space-y-2">
                  <li v-for="(line, lineIndex) in exp.description" :key="`${exp.id}-${lineIndex}`" class="text-slate-400 leading-relaxed text-xs flex items-start">
                    <span v-if="index % 2 === 0" class="mr-2 mt-0.5 text-slate-500 shrink-0" aria-hidden="true">&bull;</span>
                    <span class="flex-1">{{ line }}</span>
                    <span v-if="index % 2 === 1" class="ml-2 mt-0.5 text-slate-500 shrink-0" aria-hidden="true">&bull;</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
