<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4"
    :class="isScrolled ? 'bg-deepblue-900/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent'"
  >
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-xl font-bold text-white tracking-tighter">
        <span class="text-blue-400">Patrick</span> Evers
      </div>
      
      <div class="hidden md:flex items-center space-x-8 text-sm font-medium text-blue-100/80 uppercase tracking-widest">
        <a href="#about" class="hover:text-white transition-colors">About</a>
        <a href="#skills" class="hover:text-white transition-colors">Skills</a>
        <a href="#projects" class="hover:text-white transition-colors">Projects</a>
        <a href="#contact" class="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded text-blue-300 hover:bg-blue-500/30 hover:text-white transition-all">
          Contact
        </a>
      </div>
    </div>
  </nav>
</template>
