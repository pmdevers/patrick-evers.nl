<script setup lang="ts">
import { computed } from 'vue'
import { useMarkdownResumeStore, defaultResume } from '@/stores/markdownResumeStore'

const { resume } = useMarkdownResumeStore()
const resolvedResume = computed(() => resume.value ?? defaultResume)
const education = computed(() => resolvedResume.value.education)
const certificates = computed(() => resolvedResume.value.certificates)
const memberships = computed(() => resolvedResume.value.memberships)
</script>

<template>
  <section id="education" class="cv-section py-24 border-y border-white/5 bg-deepblue-900/20">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        <div>
          <div class="text-center mb-10">
            <h2 class="text-4xl font-bold text-white mb-4">Education</h2>
          </div>
          <div class="space-y-6">
            <article v-for="edu in education" :key="edu.id" class="bg-deepblue-900/50 border border-white/5 rounded-2xl p-6 avoid-break">
              <header class="mb-3">
                <h3 class="text-xl font-bold text-white">{{ edu.degree }}</h3>
                <p class="text-blue-300 font-semibold">{{ edu.school }}</p>
              </header>
              <p class="text-slate-400 text-sm">{{ edu.field }} | {{ edu.year }}</p>
              <p v-if="edu.details" class="text-slate-500 text-sm mt-2">{{ edu.details }}</p>
            </article>
          </div>
        </div>

        <div v-if="certificates.length || memberships?.length">
          <div class="text-center mb-10">
            <h2 class="text-4xl font-bold text-white mb-4">Certifications &amp; Memberships</h2>
          </div>
          <div class="space-y-6">
            <article v-for="cert in certificates" :key="cert.id" class="bg-deepblue-900/50 border border-white/5 rounded-2xl p-6 avoid-break">
              <header class="mb-3">
                <h3 class="text-xl font-bold text-white">{{ cert.name }}</h3>
                <p class="text-blue-300 font-semibold">{{ cert.issuer }}</p>
              </header>
              <p class="text-slate-400 text-sm">Issued: {{ cert.issued }}</p>
            </article>
            <article v-for="m in memberships" :key="m.id" class="bg-deepblue-900/50 border border-white/5 rounded-2xl p-6 avoid-break">
              <header class="mb-3">
                <h3 class="text-xl font-bold text-white">{{ m.organization }} {{ m.type }}</h3>
                <p class="text-blue-300 font-semibold">{{ m.organization }}</p>
              </header>
              <p class="text-slate-400 text-sm">Member since: {{ m.since }}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
