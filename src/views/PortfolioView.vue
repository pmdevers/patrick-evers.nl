<script setup lang="ts">
import { computed } from 'vue'
import { resumeData } from '@/data/resume'
import { useMarkdownResumeStore } from '@/stores/markdownResumeStore'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'

const { resume } = useMarkdownResumeStore()
const resolvedResume = computed(() => resume.value ?? resumeData)
</script>

<template>
  <main>
    <HeroSection :personal="resolvedResume.personal" :memberships="resolvedResume.memberships" />
    <AboutSection :personal="resolvedResume.personal" :experiences="resolvedResume.experience" />
    <SkillsSection :skills="resolvedResume.skills" />
    <ExperienceSection :experiences="resolvedResume.experience" />
    <EducationSection :education="resolvedResume.education" :certificates="resolvedResume.certificates" :memberships="resolvedResume.memberships" />
    <ProjectsSection :projects="resolvedResume.projects" />
    <ContactSection :personal="resolvedResume.personal" />
    <FooterSection :personal="resolvedResume.personal" />
  </main>
</template>

<style scoped></style>
