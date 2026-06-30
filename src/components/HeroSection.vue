<script setup lang="ts">
import { computed } from 'vue'
import { useMarkdownResumeStore, defaultResume } from '@/stores/markdownResumeStore'

const { resume } = useMarkdownResumeStore()
const resolvedResume = computed(() => resume.value ?? defaultResume)
const personal = computed(() => resolvedResume.value.personal)
const memberships = computed(() => resolvedResume.value.memberships)

const nameParts = computed(() => {
  const parts = personal.value.name.trim().split(/\s+/)
  if (parts.length < 2) {
    return { first: personal.value.name, last: '' }
  }

  return {
    first: parts.slice(0, -1).join(' '),
    last: parts.slice(-1)[0],
  }
})
</script>

<template>
  <section class="cv-hero relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-grid">
    <div class="absolute inset-0 z-0 no-print">
      <img
        src="/background.jpeg"
        alt=""
        class="w-full h-full object-cover opacity-30 grayscale brightness-50 contrast-125"
      />
    </div>
    <div class="absolute inset-0 bg-radial-at-t from-blue-900/40 via-deepblue-950 to-deepblue-950 no-print"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl">
        <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 no-print">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span>Available for New Projects</span>
        </div>

        <h1 class="text-6xl md:text-8xl font-black text-white leading-tight tracking-tight">
          {{ nameParts.first }} <span class="text-gradient font-black text-[1em] leading-[inherit]">{{ nameParts.last }}</span>
        </h1>

        <p class="text-2xl md:text-3xl font-medium text-slate-400 mt-6 max-w-2xl leading-relaxed">
          {{ personal.tagline }}
        </p>

        <div v-if="memberships && memberships.length" class="mt-4 flex flex-wrap gap-2">
          <a
            v-for="m in memberships"
            :key="m.id"
            :href="m.link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs font-semibold tracking-wide hover:border-blue-500/40 hover:text-blue-300 transition-colors"
          >
            <svg class="w-3.5 h-3.5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            {{ m.organization }} {{ m.type }}<span v-if="m.since" class="text-slate-500 font-normal">&nbsp;· since {{ m.since }}</span>
          </a>
        </div>

        <div class="print-only print-hero-meta mt-4">
          <p>{{ personal.location }}</p>
          <p><a :href="`mailto:${personal.email}`">{{ personal.email }}</a></p>
          <p><a :href="`tel:${personal.phone}`">{{ personal.phone }}</a></p>
          <p><a :href="personal.linkedin">{{ personal.linkedin }}</a></p>
          <p><a :href="personal.github">{{ personal.github }}</a></p>
        </div>

        <div class="mt-12 flex flex-wrap gap-6 cv-contact-links">
          <a href="#contact" class="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-xl shadow-blue-900/20 transition-all transform hover:-translate-y-1 no-print">
            Let&apos;s Architect Together
          </a>
          <div class="flex items-center space-x-6 hide-in-print">
            <a :href="personal.linkedin" class="text-slate-400 hover:text-white transition-colors">
              <span class="text-sm font-bold uppercase tracking-widest">LinkedIn</span>
            </a>
            <a :href="personal.github" class="text-slate-400 hover:text-white transition-colors">
              <span class="text-sm font-bold uppercase tracking-widest">GitHub</span>
            </a>
          </div>
        </div>

        <div class="absolute -right-20 top-40 opacity-20 hidden lg:block no-print">
          <div class="w-96 h-96 border-2 border-blue-500/30 rounded-full animate-pulse"></div>
          <div class="w-64 h-64 border border-blue-400/20 rounded-full absolute top-16 right-16"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
