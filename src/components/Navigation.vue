<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { Resume } from '@/data/resume'

interface Section {
  id: string
  label: string
}

interface Props {
  sections: Section[]
  personal: Resume['personal']
  forceDark?: boolean
}

interface Emits {
  (e: 'navigate', hash: string): void
  (e: 'download'): void
}

const props = withDefaults(defineProps<Props>(), {
  forceDark: false,
})
defineEmits<Emits>()

const isScrolled = ref(false)

const onScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 no-print"
    :class="props.forceDark || isScrolled ? 'bg-deepblue-900/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent'"
  >
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-xl font-bold text-white tracking-tighter">
        <a href="/"><span class="text-blue-400">{{ props.personal.name.split(' ')[0] }}</span>
        {{ props.personal.name.split(' ').slice(1).join(' ') }}</a>
      </div>

      <div class="hidden md:flex items-center space-x-8 text-sm font-medium text-blue-100/80 uppercase tracking-widest">
        <a
          v-for="section in sections"
          :key="section.id"
          :href="`#${section.id}`"
          class="hover:text-white transition-colors"
          @click.prevent="$emit('navigate', section.id)"
        >
          {{ section.label }}
        </a>
      </div>

      <button
        @click="$emit('download')"
        class="px-4 py-2 bg-blue-800/20 border border-blue-700/30 rounded text-blue-300 hover:bg-blue-500/30 hover:text-white transition-all"
      >
        Download CV
      </button>
    </div>
  </nav>
</template>
