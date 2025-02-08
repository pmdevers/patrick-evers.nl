<script setup>
import { ref, computed } from "vue";
import { MotionComponent } from "@vueuse/motion";


class FibonacciSphere {
    #points;

    get points() {
        return this.#points;
    }

    constructor(N) {
        this.#points = [];

        const goldenAngle = Math.PI * (3 - Math.sqrt(5));

        for (let i = 0; i < N; i++) {
            const y = 1 - (i / (N - 1)) * 2;
            const radius = Math.sqrt(1 - y ** 2);
            const a = goldenAngle * i;
            const x = Math.cos(a) * radius;
            const z = Math.sin(a) * radius;

            this.#points.push([x, y, z]);
        }
    }
}

// Sample tags
const tags = ref([
  "Vue3", "Tailwind CSS", "Vite", "TypeScript", "Bun",
  "Docker", "Kubernetes", "Azure",
  "C#", "MongoDB", "PostgreSQL", "GitHub", "Azure DevOps", "REST API", "GitOps",
  "FluxCD", "Prometheus", "Grafana", "Loki", "Helm", "Kustomize", "k9s", "SQL"
]);

// Generate random styles for each tag
const getTagStyle = () => {
  return {
    fontSize: `${Math.floor(Math.random() * 12) + 14}px`, // 14px - 26px
    transform: `rotate(${Math.floor(Math.random() * 10) - 5}deg)`, // -5 to 5 degrees
    color: `hsl(${Math.floor(Math.random() * 250)}, 70%, 50%)`, // Random color,
    //x: Math.floor(Math.random() * 300) - 150, // Random X (-150 to 150)
    //y: Math.floor(Math.random() * 100) - 50,  // Random Y (-50 to 50)
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