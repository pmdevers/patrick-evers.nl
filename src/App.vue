<script setup>
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";
import Skills from "./components/Skills.vue";

const projects = ref([
  {
    title: "Event-Driven Core Framework",
    description: "A high-performance C# framework for building scalable microservices with Kafka and MediatR integration.",
    link: "#",
    tech: [".NET 8", "Kafka", "MediatR"],
    img: "https://picsum.photos/600/400?=architect-1"
  },
  {
    title: "DevOps Pipeline as Code",
    description: "Multi-stage CI/CD automation for Azure Kubernetes Service using Terraform and GitHub Actions.",
    link: "#",
    tech: ["Kubernetes", "Terraform", "Azure"],
    img: "https://picsum.photos/600/400?=devops-1"
  },
  {
    title: "Scalable Data Ingestion",
    description: "Real-time data processing pipeline handling millions of events daily with MongoDB and Redis caching.",
    link: "#",
    tech: ["MongoDB", "Redis", "C#"],
    img: "https://picsum.photos/600/400?=data-1"
  }
]);
</script>

<template>
  <div class="bg-deepblue-950 text-slate-200 min-h-screen font-sans selection:bg-blue-500/30">
    <Navbar />
    
    <!-- Hero Section -->
    <section class="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-grid">
      <div class="absolute inset-0 bg-radial-at-t from-blue-900/40 via-deepblue-950 to-deepblue-950"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Available for New Projects</span>
          </div>
          
          <h1 class="text-6xl md:text-8xl font-black text-white leading-tight tracking-tight">
            Patrick <span class="text-gradient">Evers</span>
          </h1>
          <p class="text-2xl md:text-3xl font-medium text-slate-400 mt-6 max-w-2xl leading-relaxed">
            Software Architect & DevOps Engineer specialized in <span class="text-white">Event-Driven Architectures</span>.
          </p>
          
          <div class="mt-12 flex flex-wrap gap-6">
            <a href="#contact" class="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-xl shadow-blue-900/20 transition-all transform hover:-translate-y-1">
              Let's Architect Together
            </a>
            <div class="flex items-center space-x-6">
              <a href="https://www.linkedin.com/in/pmdevers" class="text-slate-400 hover:text-white transition-colors">
                <span class="text-sm font-bold uppercase tracking-widest">LinkedIn</span>
              </a>
              <a href="https://www.github.com/pmdevers" class="text-slate-400 hover:text-white transition-colors">
                <span class="text-sm font-bold uppercase tracking-widest">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Decorative Element -->
      <div class="absolute -right-20 top-40 opacity-20 hidden lg:block">
        <div class="w-96 h-96 border-2 border-blue-500/30 rounded-full animate-pulse"></div>
        <div class="w-64 h-64 border border-blue-400/20 rounded-full absolute top-16 right-16"></div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-24 bg-deepblue-900/30 border-y border-white/5">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl font-bold text-white mb-8 relative">
              Design Beyond Code
              <span class="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500"></span>
            </h2>
            <div class="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                I am a Software Architect with a deep passion for designing <span class="text-blue-300 font-medium">scalable, resilient, and future-proof systems</span>. At Tjip, I specialize in Software Architecture, focusing on building robust solutions that drive digital transformation.
              </p>
              <p>
                My expertise includes <span class="text-white">Event-Driven Architectures</span>, Event Streaming, and designing distributed systems that handle high-throughput, real-time data processing. I believe in leveraging asynchronous communication patterns and domain-driven design to create systems that are both efficient and maintainable.
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <div class="text-4xl font-bold text-blue-400 mb-2">10+</div>
              <div class="text-sm uppercase tracking-widest font-bold text-slate-500">Years Exp</div>
            </div>
            <div class="p-8 bg-blue-600/10 border border-blue-500/20 rounded-2xl">
              <div class="text-4xl font-bold text-white mb-2">50+</div>
              <div class="text-sm uppercase tracking-widest font-bold text-slate-300">Deployments</div>
            </div>
            <div class="p-8 bg-blue-600 border border-blue-500 rounded-2xl col-span-2">
              <div class="text-2xl font-bold text-white mb-2 italic">"Architecture is about making the important decisions early."</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-24">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">The Tech Stack</h2>
          <p class="text-slate-400 max-w-2xl mx-auto">Modern tools for modern problems. My toolkit is built for speed, scalability, and security.</p>
        </div>
        <Skills />
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24 bg-deepblue-900/30 border-y border-white/5">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 class="text-4xl font-bold text-white mb-4">Architectural Works</h2>
            <p class="text-slate-400 max-w-xl">A selection of systems I've architected, focusing on performance and reliability.</p>
          </div>
          <a href="https://github.com/pmdevers" class="text-blue-400 font-bold hover:text-white transition-colors uppercase tracking-widest text-sm border-b border-blue-400/30 pb-1">
            Explore All Repo's →
          </a>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(project, index) in projects" :key="index" class="group flex flex-col bg-deepblue-900 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-500 shadow-2xl">
            <div class="relative overflow-hidden h-48">
              <img :src="project.img" :alt="project.title" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110">
              <div class="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div class="p-8 flex flex-col grow">
              <div class="flex gap-2 mb-4">
                <span v-for="t in project.tech" :key="t" class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white/5 border border-white/10 rounded text-slate-400 group-hover:text-blue-300 transition-colors">
                  {{ t }}
                </span>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">{{ project.title }}</h3>
              <p class="text-slate-400 leading-relaxed grow">{{ project.description }}</p>
              <a :href="project.link" class="mt-8 flex items-center text-blue-400 font-bold group/link">
                SYSTEM SPECS <span class="ml-2 group-hover/link:ml-4 transition-all">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-32 relative overflow-hidden">
      <div class="absolute inset-0 bg-blue-600/5"></div>
      <div class="container mx-auto px-6 relative z-10 text-center">
        <h2 class="text-5xl md:text-7xl font-black text-white mb-8">Let's <span class="text-gradient">Work</span> Together</h2>
        <p class="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          Looking for a Software Architect to help scale your next big idea? Or a DevOps engineer to automate your growth? Let's talk.
        </p>
        <a href="mailto:alex@example.com" class="inline-flex items-center justify-center px-10 py-5 bg-white text-deepblue-950 font-black rounded-xl hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-2xl shadow-white/10 text-xl">
          INITIATE CONTACT
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 border-t border-white/5 bg-deepblue-950">
      <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-slate-500 text-sm">
          &copy; {{ new Date().getFullYear() }} Patrick Evers. All systems operational.
        </div>
        <div class="flex items-center space-x-8">
          <a href="https://www.linkedin.com/in/pmdevers" class="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">LinkedIn</a>
          <a href="https://www.github.com/pmdevers" class="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">GitHub</a>
        </div>
      </div>
    </footer>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

:root {
  font-family: 'Inter', sans-serif;
}

html {
  scroll-behavior: smooth;
}
</style>
