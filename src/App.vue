<script setup>
import { ref } from "vue";
import Tagcloud from "./components/tagcloud.vue";

const projects = ref([
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with Vue 3 and Tailwind CSS.",
    link: "#",
    img: "https://picsum.photos/400/250?=12"
  },
  {
    title: "Task Manager App",
    description: "A simple yet powerful task manager for personal productivity.",
    link: "#",
    img: "https://picsum.photos/400/250?=13"
  },
  {
    title: "E-commerce Platform",
    description: "A fully-featured e-commerce site built with Vue.js.",
    link: "#",
    img: "https://picsum.photos/400/250?=14"
  }
]);
</script>

<template>
  <div class="bg-deepblue-50 text-gray-900">
    
    <!-- Hero Section -->
    <section class="bg-deepblue-500 text-white py-20 text-center">
      <div class="container mx-auto px-6">
        <h1 class="text-5xl font-bold">Hi, I'm Patrick Evers</h1>
        <p class="mt-4 text-lg">Software Developer / Cloud Architect</p>
        <div class="mt-6 flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/pmdevers" class="px-4 py-2 bg-softblush-300 rounded-lg shadow-lg">LinkedIn</a>
          <a href="https://www.github.com/pmdevers" class="px-4 py-2 bg-skyblue-500 rounded-lg shadow-lg">GitHub</a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16 text-center">
      <div class="container mx-auto px-6 max-w-250">
        <h2 class="text-3xl font-bold text-deepblue-500">About Me</h2>
        <p class="mt-4 text-lg text-midnight-600">
          I am a Software Architect with a deep passion for designing scalable, resilient, and future-proof systems. At Tjip, I specialize in Software Architecture, focusing on building robust solutions that drive digital transformation. My expertise includes Event-Driven Architectures, Event Streaming, and designing distributed systems that handle high-throughput, real-time data processing.        </p>
        <p class="mt-4 text-lg text-midnight-600">
          With hands-on experience in event streaming platforms like Apache Kafka and cloud-native architectures, I enjoy solving complex challenges related to system scalability, integration, and performance optimization. I believe in leveraging asynchronous communication patterns and domain-driven design to create systems that are both efficient and maintainable.        </p>
        <p class="mt-4 text-lg text-midnight-600">
          Beyond my technical work, I have a strong passion for travel and cultural exploration, which inspires my problem-solving approach—combining curiosity, adaptability, and strategic thinking. Whether planning a multi-city camper trip through Italy and the U.S. or architecting event-driven solutions, I thrive on finding the best path forward in complex landscapes.          
        </p>
        <p class="mt-4 text-lg text-midnight-600">
          I am always eager to collaborate on innovative projects that push the boundaries of modern software architecture and real-time data processing.
        </p>
      </div>
    </section>

    <section class="bg-softblush-50 py-16 text-center">
      <div class="container mx-auto px-6 max-w-250">
        <h2 class="text-3xl font-bold text-deepblue-500">These are the technologies I currently use on a daily basis.</h2>
        <Tagcloud />
      </div>

    </section>

    <!-- Projects Section -->
    <section class="bg-midnight-100 py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-deepblue-500">Projects</h2>
        <div class="grid md:grid-cols-3 gap-8 mt-10">
          <div v-for="(project, index) in projects" :key="index" class="flex flex-col bg-white p-6 rounded-lg shadow">
            <img :src="project.img" :alt="project.title" class="rounded-lg">
            <h3 class="text-xl font-semibold mt-4">{{ project.title }}</h3>
            <p class="mt-2 text-midnight-600 grow">{{ project.description }}</p>
            <a :href="project.link" class="mt-4 inline-block text-skyblue-500 font-semibold">View Project →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16 text-center bg-deepblue-500 text-white pb-20">
      <h2 class="text-3xl font-bold">Let's Work Together</h2>
      <p class="mt-4 text-lg">Feel free to reach out for collaboration or inquiries.</p>
      <a href="mailto:alex@example.com" class="text-mauverose-300 font-semibold">
        Contact Me
      </a>
    </section>

  </div>
</template>
