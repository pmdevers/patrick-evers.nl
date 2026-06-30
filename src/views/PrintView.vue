<script setup lang="ts">
import { computed } from 'vue'
import { useMarkdownResumeStore, defaultResume } from '@/stores/markdownResumeStore'

const { resume } = useMarkdownResumeStore()
const resolvedResume = computed(() => resume.value ?? defaultResume)
</script>

<template>
  <div class="bg-white text-black p-12 max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-6 pb-6 border-b-2 border-gray-300 ">
      <h1 class="text-4xl font-bold">{{ resolvedResume.personal.name }}</h1>
      <p class="text-xl font-semibold text-gray-700">{{ resolvedResume.personal.title }}</p>
      <p class="text-sm text-gray-600 mt-1">{{ resolvedResume.personal.tagline }}</p>
      <div class="flex flex-wrap gap-4 text-sm mt-2">
        <span>{{ resolvedResume.personal.location }}</span> |
        <span>{{ resolvedResume.personal.phone }}</span> |
        <span>{{ resolvedResume.personal.email }}</span> 
      </div>
      <div class="flex flex-wrap gap-2 text-sm mt-1">
        <a :href="resolvedResume.personal.linkedin" target="_blank" class="text-blue-600 hover:underline">{{ resolvedResume.personal.linkedin }}</a> |
        <a :href="resolvedResume.personal.github" target="_blank" class="text-blue-600 hover:underline">{{ resolvedResume.personal.github }}</a> |
        <a :href="resolvedResume.personal.website" target="_blank" class="text-blue-600 hover:underline">{{ resolvedResume.personal.website }}</a>
      </div>
    </div>

    <!-- Professional Summary -->
    <div class="mb-6">
      <h2 class="text-lg font-bold uppercase tracking-wide mb-2 border-b-2 border-gray-300 pb-1">
        Professional Summary
      </h2>
      <p class="text-sm leading-relaxed">{{ resolvedResume.personal.summary }}</p>
    </div>

    <!-- Skills -->
    <div class="mb-6">
      <h2 class="text-lg font-bold uppercase tracking-wide mb-3 border-b-2 border-gray-300 pb-1">
        Core Competencies & Technical Skills
      </h2>
      <div class="space-y-1 text-sm">
        <div v-for="skillGroup in resolvedResume.skills" :key="skillGroup.category">
          <span class="font-bold">{{ skillGroup.category }}: </span>
          <span class="text-gray-700">{{ skillGroup.items.join(', ') }}</span>
        </div>
      </div>
    </div>

    <!-- Certifications & Memberships -->
    <div class="mb-6" v-if="resolvedResume.certificates.length || resolvedResume.memberships?.length">
      <h2 class="text-lg font-bold uppercase tracking-wide mb-3 border-b-2 border-gray-300 pb-1">
        Professional Development, Certifications &amp; Memberships
      </h2>
      <div class="space-y-2 text-sm">
        <div v-for="cert in resolvedResume.certificates" :key="cert.id">
          <p class="font-bold">{{ cert.name }} - <span class="text-gray-700">{{ cert.issuer }} • {{ cert.issued }}</span></p>
        </div>
        <div v-for="m in resolvedResume.memberships" :key="m.id">
          <p class="font-bold">{{ m.organization }} {{ m.type }} - <span class="text-gray-700">{{ m.organization }} • Member since {{ m.since }}</span></p>
        </div>
      </div>
    </div>

    <!-- Professional Experience -->
    <div class="mb-6">
      <h2 class="text-lg font-bold uppercase tracking-wide mb-3 border-b-2 border-gray-300 pb-1">
        Professional Experience
      </h2>
      <div class="space-y-4">
        <div v-for="exp in resolvedResume.experience.slice(0, 3)" :key="exp.id" class="text-sm">
          <div class="flex justify-between items-start">
            <div>
              <p class="font-bold">{{ exp.position }}</p>
              <p class="text-gray-700">{{ exp.company }} | {{ exp.location }}</p>
            </div>
            <p class="text-gray-600">{{ exp.duration }}</p>
          </div>
          <ul class="ml-4 mt-1 space-y-0.5 list-disc text-gray-700">
            <li v-for="(desc, i) in exp.description" :key="i">
              {{ desc }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Education -->
    <div class="mb-6">
      <h2 class="text-lg font-bold uppercase tracking-wide mb-3 border-b-2 border-gray-300 pb-1">
        Education
      </h2>
      <div class="space-y-2 text-sm">
        <div v-for="edu in resolvedResume.education" :key="edu.id">
          <div class="flex justify-between items-start">
            <div>
              <p class="font-bold">{{ edu.degree }} in {{ edu.field }}</p>
              <p class="text-gray-700">{{ edu.school }}</p>
            </div>
            <p class="text-gray-600">{{ edu.year }}</p>
          </div>
          <p v-if="edu.details" class="text-gray-600 text-xs mt-0.5">{{ edu.details }}</p>
        </div>
      </div>
    </div>

    <!-- Projects -->
    <div>
      <h2 class="text-lg font-bold uppercase tracking-wide mb-3 border-b-2 border-gray-300 pb-1">
        Featured Projects
      </h2>
      <div class="space-y-3 text-sm">
        <div v-for="project in resolvedResume.projects" :key="project.id">
          <div class="flex justify-between items-start">
            <p class="font-bold">{{ project.title }}</p>
          </div>
          <p class="text-gray-700">{{ project.description }}</p>
          <p class="text-gray-600 text-xs">{{ project.technologies.join(' • ') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media print {
  div {
    max-width: 100%;
    page-break-inside: avoid;
  }
}
</style>
