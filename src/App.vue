<script setup>
import Navbar from "./components/Navbar.vue";
import Skills from "./components/Skills.vue";
import WorkExperience from "./components/WorkExperience.vue";
import { useGithubPinnedRepos } from "./composables/useGithubPinnedRepos.ts";

const { repos, loading, error } = useGithubPinnedRepos();
</script>

<template>
  <div class="cv-document bg-deepblue-950 text-slate-200 min-h-screen font-sans selection:bg-blue-500/30">
    <div class="no-print">
      <Navbar />
    </div>
    
    <!-- Hero Section -->
    <section class="cv-hero relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-grid">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0 no-print">
        <img src="https://images.pexels.com/photos/1181320/pexels-photo-1181320.jpeg" alt="" class="w-full h-full object-cover opacity-30 grayscale brightness-50 contrast-125">
      </div>
      <div class="absolute inset-0 bg-radial-at-t from-blue-900/40 via-deepblue-950 to-deepblue-950 no-print"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 no-print">
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
            Software Architect & DevOps Engineer specialized in <span class="text-white">Cloud Native</span> & <span class="text-white">Event-Driven Architectures</span>.
          </p>
          
          <div class="mt-12 flex flex-wrap gap-6 cv-contact-links">
            <a href="#contact" class="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-xl shadow-blue-900/20 transition-all transform hover:-translate-y-1 no-print">
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
      <div class="absolute -right-20 top-40 opacity-20 hidden lg:block no-print">
        <div class="w-96 h-96 border-2 border-blue-500/30 rounded-full animate-pulse"></div>
        <div class="w-64 h-64 border border-blue-400/20 rounded-full absolute top-16 right-16"></div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="cv-section py-24 bg-deepblue-900/30 border-y border-white/5">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl font-bold text-white mb-8 relative">
              Design Beyond Code
              <span class="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500"></span>
            </h2>
            <div class="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                I am a Software Architect with a deep passion for designing <span class="text-blue-300 font-medium">scalable, resilient, and future-proof systems</span>. At Tjip, I specialize in <span class="text-white">Cloud Native Software Architecture</span>, building robust Kubernetes-native solutions that drive digital transformation.
              </p>
              <p>
                My expertise includes <span class="text-white">Cloud Native architectures</span>, Event-Driven Design, and Event Streaming — designing distributed systems that handle high-throughput, real-time data processing on Kubernetes. I leverage GitOps, infrastructure-as-code, and domain-driven design to create platforms that are efficient, observable, and maintainable.
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <div class="text-4xl font-bold text-blue-400 mb-2">20+</div>
              <div class="text-sm uppercase tracking-widest font-bold text-slate-500">Years Exp</div>
            </div>
            <div class="p-8 bg-blue-600/10 border border-blue-500/20 rounded-2xl">
              <div class="text-4xl font-bold text-white mb-2">☁️</div>
              <div class="text-sm uppercase tracking-widest font-bold text-slate-300">Cloud Native</div>
            </div>
            <div class="p-8 bg-blue-600 border border-blue-500 rounded-2xl col-span-2">
              <div class="text-2xl font-bold text-white mb-2 italic">"Architecture is about making the important decisions early."</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="cv-section py-24">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">The Tech Stack</h2>
          <p class="text-slate-400 max-w-2xl mx-auto">Modern tools for modern problems. My toolkit is built for speed, scalability, and security.</p>
        </div>
        <Skills />
      </div>
    </section>

    <!-- Work Experience Section -->
    <section id="experience" class="cv-section py-24 bg-deepblue-900/30 border-y border-white/5">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p class="text-slate-400 max-w-2xl mx-auto">20+ years of engineering — from code to cloud, from feature to architecture.</p>
        </div>
        <WorkExperience />
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="cv-section cv-projects py-24 bg-deepblue-900/30 border-y border-white/5">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 class="text-4xl font-bold text-white mb-4">Home Lab Projects</h2>
            <p class="text-slate-400 max-w-xl">A selection of systems I've architected, focusing on performance and reliability.</p>
          </div>
          <a href="https://github.com/pmdevers" class="text-blue-400 font-bold hover:text-white transition-colors uppercase tracking-widest text-sm border-b border-blue-400/30 pb-1">
            Explore All Repo's →
          </a>
        </div>
        
        <!-- Loading skeletons -->
        <div v-if="loading" class="grid md:grid-cols-3 gap-8">
          <div v-for="i in 6" :key="i" class="flex flex-col bg-deepblue-900 border border-white/5 rounded-2xl overflow-hidden animate-pulse">
            <div class="h-48 bg-deepblue-800"></div>
            <div class="p-8 space-y-4">
              <div class="flex gap-2">
                <div class="h-4 w-16 bg-deepblue-800 rounded"></div>
                <div class="h-4 w-20 bg-deepblue-800 rounded"></div>
              </div>
              <div class="h-6 bg-deepblue-800 rounded w-3/4"></div>
              <div class="h-4 bg-deepblue-800 rounded"></div>
              <div class="h-4 bg-deepblue-800 rounded w-5/6"></div>
            </div>
          </div>
        </div>

        <!-- Pinned repos grid -->
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="repo in repos" :key="repo.name" class="group cv-card avoid-break flex flex-col bg-deepblue-900 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-400/40 transition-all duration-500 shadow-2xl">
            <div class="relative overflow-hidden h-48 no-print">
              <img src="./assets/project.png" :alt="repo.name" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110">
              <div class="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div class="p-8 flex flex-col grow">
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-if="repo.primaryLanguage"
                  class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border rounded"
                  :style="{ backgroundColor: repo.primaryLanguage.color + '30', borderColor: repo.primaryLanguage.color + '60', color: repo.primaryLanguage.color }"
                >
                  {{ repo.primaryLanguage.name }}
                </span>
                <span
                  v-for="t in repo.repositoryTopics.nodes.slice(0, 4)"
                  :key="t.topic.name"
                  class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white/5 border border-white/10 rounded text-slate-400 group-hover:text-blue-300 transition-colors"
                >
                  {{ t.topic.name }}
                </span>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">{{ repo.name }}</h3>
              <p class="text-slate-400 leading-relaxed grow">{{ repo.description ?? 'No description provided.' }}</p>
              <div class="mt-8 flex items-center justify-between">
                <a :href="repo.url" target="_blank" rel="noopener noreferrer" class="flex items-center text-blue-400 font-bold group/link">
                  VIEW REPO <span class="ml-2 group-hover/link:ml-4 transition-all">→</span>
                </a>
                <span v-if="repo.stargazerCount > 0" class="text-slate-500 text-xs font-medium">★ {{ repo.stargazerCount }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="cv-section py-32 relative overflow-hidden">
      <div class="absolute inset-0 bg-blue-600/5 no-print"></div>
      <div class="container mx-auto px-6 relative z-10 text-center">
        <h2 class="text-5xl md:text-7xl font-black text-white mb-8">Let's <span class="text-gradient">Work</span> Together</h2>
        <p class="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          Looking for a Software Architect to help design your next <span class="text-white font-semibold">Cloud Native</span> platform? Or a DevOps engineer to automate your growth? Let's talk.
        </p>
        <a href="mailto:pmdevers@gmail.com" class="inline-flex items-center justify-center px-10 py-5 bg-white text-deepblue-950 font-black rounded-xl hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-2xl shadow-white/10 text-xl print-contact-link">
          INITIATE CONTACT
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="no-print py-12 border-t border-white/5 bg-deepblue-950">
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

@page {
  size: A4;
  margin: 14mm;
}

@media print {
  html,
  body {
    background: #ffffff !important;
    color: #0f172a !important;
    font-size: 11pt;
    line-height: 1.45;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .cv-document {
    background: #ffffff !important;
    color: #0f172a !important;
    min-height: auto;
  }

  /* Normalize utility text colors for print so no white/light text remains. */
  .text-white,
  .text-blue-300,
  .text-blue-400,
  .text-slate-200,
  .text-slate-300,
  .text-slate-400,
  .text-slate-500,
  .text-slate-600 {
    color: #1e293b !important;
  }

  .no-print {
    display: none !important;
  }

  #contact {
    display: none !important;
  }

  .cv-hero {
    padding: 0 0 8mm 0 !important;
    margin: 0 0 8mm 0 !important;
    background: #ffffff !important;
    border-bottom: 1px solid #dbe4f0;
    page-break-after: avoid;
  }

  .cv-hero h1 {
    font-size: 30pt !important;
    line-height: 1.05 !important;
    margin: 0 0 3mm 0 !important;
    color: #0f172a !important;
  }

  .cv-hero p {
    color: #334155 !important;
    font-size: 12pt !important;
    margin-top: 0 !important;
  }

  .cv-contact-links {
    margin-top: 5mm !important;
    gap: 4mm !important;
  }

  .cv-contact-links a {
    color: #1d4ed8 !important;
    text-decoration: none !important;
    font-weight: 700 !important;
  }

  .cv-contact-links a::after {
    content: " (" attr(href) ")";
    font-weight: 500;
    color: #64748b;
  }

  .cv-section {
    padding: 8mm 0 !important;
    background: #ffffff !important;
    border: 0 !important;
    border-bottom: 1px solid #e2e8f0 !important;
    page-break-inside: avoid;
  }

  .cv-section h2,
  .cv-section h3,
  .text-gradient {
    color: #0f172a !important;
    background: transparent !important;
    -webkit-text-fill-color: #0f172a !important;
  }

  #about .grid,
  #skills .grid,
  #experience .space-y-12,
  #projects .grid {
    gap: 4mm !important;
  }

  .cv-card,
  .avoid-break,
  #skills > div > div > div,
  #experience .group,
  #projects .group {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  #skills .group,
  #projects .group {
    background: #f8fafc !important;
    border: 1px solid #e2e8f0 !important;
    box-shadow: none !important;
  }

  #experience .group > div:last-child > div {
    background: transparent !important;
    border: 0 !important;
    box-shadow: none !important;
    padding: 0 !important;
  }

  #experience .group > div:first-child {
    background: transparent !important;
    border: 0 !important;
  }

  #experience p,
  #experience a,
  #experience .text-slate-400,
  #experience .text-slate-500,
  #experience .text-slate-600,
  #projects p,
  #projects a,
  #projects .text-slate-400,
  #projects .text-slate-500,
  #about p,
  #about .text-slate-400,
  #skills p,
  #skills .text-slate-400,
  #contact p,
  #contact .text-slate-400 {
    color: #334155 !important;
  }

  #skills span,
  #experience span,
  #projects span {
    background: #eef2ff !important;
    color: #1e293b !important;
    border-color: #cbd5e1 !important;
  }

  #experience .text-blue-300,
  #experience .text-blue-400,
  #projects .text-blue-400,
  #contact .text-blue-400 {
    color: #1d4ed8 !important;
  }

  #experience .absolute,
  #experience .hidden.md\:block {
    display: none !important;
  }

  #experience .md\:grid,
  #experience .md\:grid-cols-2,
  #experience [class*='md:text-right'],
  #experience [class*='md:pl-12'],
  #experience [class*='md:pr-12'],
  #experience [class*='md:col-start-'],
  #experience [class*='md:row-start-'] {
    display: block !important;
    text-align: left !important;
    padding: 0 !important;
  }

  #contact {
    text-align: left !important;
    border-bottom: 0 !important;
    page-break-before: avoid;
  }

  #contact h2 {
    font-size: 19pt !important;
    margin-bottom: 2mm !important;
  }

  .print-contact-link {
    display: inline !important;
    padding: 0 !important;
    margin: 0 !important;
    background: transparent !important;
    color: #1d4ed8 !important;
    box-shadow: none !important;
    text-decoration: none !important;
    font-size: 11pt !important;
    font-weight: 700 !important;
  }

  .print-contact-link::after {
    content: " (" attr(href) ")";
    color: #64748b;
    font-weight: 500;
  }

  a[href^='http']::after {
    content: " (" attr(href) ")";
    font-size: 9pt;
    color: #64748b;
  }

  #projects .group\/link span,
  #projects .group\/link,
  #projects .group-hover\/link\:ml-4 {
    margin-left: 0 !important;
    transition: none !important;
  }
}
</style>
