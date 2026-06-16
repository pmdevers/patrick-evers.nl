<template>
  <section class="cv-hero relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-grid">
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
          Patrick <span class="text-gradient font-black text-[1em] leading-[inherit]">Evers</span>
        </h1>
        <p class="text-2xl md:text-3xl font-medium text-slate-400 mt-6 max-w-2xl leading-relaxed">
          Software Architect & DevOps Engineer specialized in <span class="text-white">Cloud Native</span> & <span class="text-white">Event-Driven Architectures</span>.
        </p>

        <div class="print-only print-hero-meta mt-4">
          <p>The Hague, Netherlands</p>
          <p><a href="mailto:pmdevers@gmail.com">pmdevers@gmail.com</a></p>
          <p><a href="https://www.linkedin.com/in/pmdevers">linkedin.com/in/pmdevers</a></p>
          <p><a href="https://www.github.com/pmdevers">github.com/pmdevers</a></p>
        </div>

        <div class="mt-12 flex flex-wrap gap-6 cv-contact-links">
          <a href="#contact" class="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-xl shadow-blue-900/20 transition-all transform hover:-translate-y-1 no-print">
            Let's Architect Together
          </a>
          <div class="flex items-center space-x-6 hide-in-print">
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

    <div class="absolute -right-20 top-40 opacity-20 hidden lg:block no-print">
      <div class="w-96 h-96 border-2 border-blue-500/30 rounded-full animate-pulse"></div>
      <div class="w-64 h-64 border border-blue-400/20 rounded-full absolute top-16 right-16"></div>
    </div>
  </section>
</template>
