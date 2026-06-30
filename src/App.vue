<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useMarkdownResumeStore, defaultResume } from '@/stores/markdownResumeStore'
import Navigation from '@/components/Navigation.vue'

const router = useRouter()
const route = useRoute()
const isMobileMenuOpen = ref(false)
const { resume } = useMarkdownResumeStore()
const resolvedResume = computed(() => resume.value ?? defaultResume)
const isPrintRoute = computed(() => route.path === '/print' )

const sections = computed(() => [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
])

const navigateTo = (hash: string) => {
  isMobileMenuOpen.value = false
  router.push({ path: '/', hash: `#${hash}` })
}

const downloadCV = () => {
  router.push('/print')
  setTimeout(() => {
    window.print()
  }, 500)
}
</script>

<template>
  <div class="cv-document bg-deepblue-950 text-slate-200 min-h-screen font-sans selection:bg-blue-500/30">
    <Navigation :sections="sections" :personal="resolvedResume.personal" :force-dark="isPrintRoute" @navigate="navigateTo" @download="downloadCV" />
    <main :class="isPrintRoute ? 'pt-24 print:pt-0' : ''">
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>
