<script setup>
import { ref, computed } from "vue";
import { MotionComponent } from "@vueuse/motion";


// Sample tags
const tags = ref([
  "Vue3", "Tailwind CSS", "Vite", "TypeScript", "Bun",
  "Docker", "Kubernetes", "Azure", "Apache Kafka",
  "C#", "MongoDB", "PostgreSQL", "GitHub", "Azure DevOps", "REST API", "GitOps",
  "FluxCD", "Prometheus", "Grafana", "Loki", "Helm", "Kustomize", "k9s", "SQL"
]);

// Generate random styles for each tag
const getTagStyle = () => {
  return {
    fontSize: `${Math.floor(Math.random() * 50) + 14}px`,
    transform: `rotate(${Math.floor(Math.random() * 10) - 5}deg)`,
    color: `hsl(${Math.floor(Math.random() * 250)}, 70%, 50%)`
  };
};

const styledTags = computed(() => {
  return tags.value
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
      .map(tag => ({
        text: tag.value,
        style: getTagStyle()
    }))
    ;
});
</script>

<template>
  <div class="flex flex-wrap gap-3 justify-center p-6">
    <span 
      v-for="(word, index) in styledTags"
      :key="index"
      class="inline-block bg-gray-100 px-3 py-1 transition-transform transform hover:scale-110"
      :style="word.style"
    >
      {{ word.text }}
    </span>
  </div>
</template>