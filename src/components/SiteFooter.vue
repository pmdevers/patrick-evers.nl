<template>
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
</template>
