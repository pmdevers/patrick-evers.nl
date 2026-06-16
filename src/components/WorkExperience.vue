<script setup>
import { storeToRefs } from "pinia";
import { useWorkExperienceStore } from "../stores/workExperience";

const workExperienceStore = useWorkExperienceStore();
const { experiences } = storeToRefs(workExperienceStore);

</script>

<template>
  <section id="experience" class="cv-section py-24 bg-deepblue-900/30 border-y border-white/5">
    <div class="container mx-auto px-6">
      <div class="text-center mb-14">
        <h2 class="text-4xl font-bold text-white mb-4">Work Experience</h2>
        <p class="hide-in-print text-slate-400 max-w-2xl mx-auto">20+ years of engineering — from code to cloud, from feature to
          architecture.</p>
      </div>

      <div class="relative">
        <!-- Vertical timeline line -->
        <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>

        <div class="space-y-4">
          <div v-for="(exp, index) in experiences" :key="index"
            class="relative md:grid md:grid-cols-2 md:gap-12 items-start group">
            <!-- Timeline dot -->
            <div
              class="absolute left-0 md:left-1/2 top-2 w-3 h-3 rounded-full bg-blue-400 border-2 border-deepblue-950 -translate-x-1/2 hidden md:block group-hover:bg-mauverose-300 transition-colors z-10">
            </div>

            <!-- Left column: meta -->
            <div :class="index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12 md:row-start-1'"
              class="mb-4 md:mb-0 text-xl font-bold text-white">
              <div class="">
                {{ exp.role }}
              </div>
              <a :href="exp.url" target="_blank" class="text-blue-400 font-semibold mt-1 hover:text-blue-400 transition-colors" rel="noopener noreferrer">{{ exp.company }}</a>
              <div class="text-slate-500 text-sm mt-1 font-medium">{{ exp.location }} | {{ exp.start }} - {{ exp.end }} </div>
            </div>

            <!-- Right column: details -->
            <div :class="index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right md:col-start-1 md:row-start-1'">
              <div
                class="bg-deepblue-900/60 border border-white/5 rounded-2xl p-6 group-hover:border-blue-400/20 transition-all">
                <p class="text-slate-400 leading-relaxed text-sm">{{ exp.description }}</p>
                <div v-if="exp.clients.length" class="mt-4 hide-in-print">
                  <div class="text-[10px] uppercase tracking-widest text-slate-600 font-bold mb-2">Clients</div>
                  <div class="flex flex-wrap gap-2" :class="index % 2 === 0 ? '' : 'md:justify-end'">
                    <span v-for="client in exp.clients" :key="client"
                      class="text-[10px] font-bold px-2 py-0.5 bg-blue-400/10 border border-blue-400/20 rounded text-blue-300">{{
                      client }}</span>
                  </div>
                </div>
                <div v-if="exp.tags.length" class="mt-4 hide-in-print">
                  <div class="text-[10px] uppercase tracking-widest text-slate-600 font-bold mb-2">Skills</div>
                  <div class="flex flex-wrap gap-2 mt-4" :class="index % 2 === 0 ? '' : 'md:justify-end'">
                    <span v-for="tag in exp.tags" :key="tag"
                      class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white/5 border border-white/10 rounded text-slate-400">{{
                      tag }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
