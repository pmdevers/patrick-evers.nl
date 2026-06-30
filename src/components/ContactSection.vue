<script setup lang="ts">
import type { Resume } from '@/data/resume'

interface Props {
  personal: Resume['personal']
}

defineProps<Props>()
</script>

<template>
  <section id="contact" class="cv-section py-32 relative overflow-hidden">
    <div class="absolute inset-0 bg-blue-600/5 no-print"></div>

    <div class="container mx-auto px-6 relative z-10 text-center">
      <h2 class="text-5xl md:text-7xl font-black text-white mb-8">Let&apos;s <span class="text-gradient">Work</span> Together</h2>
      <p class="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
        Looking for a {{ personal.title }} to help design your next <span class="text-white font-semibold">{{ personal.focusLabel }}</span> platform? Let&apos;s talk.
      </p>

      <a :href="`mailto:${personal.email}`" class="inline-flex items-center justify-center px-10 py-5 bg-white text-deepblue-950 font-black rounded-xl hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-2xl shadow-white/10 text-xl print-contact-link">
        INITIATE CONTACT
      </a>
    </div>
  </section>
</template>

<style scoped></style>
