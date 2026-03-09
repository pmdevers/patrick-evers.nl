<script setup>
const experiences = [
  {
    company: "TJIP BV",
    url: "https://www.tjip.com",
    role: "Software Engineer & Cloud‑Native Platform Specialist",
    period: "Sep 2017 — Present",
    location: "Delft, Netherlands",
    description: "Leading software architecture for enterprise clients, specializing in Cloud Native solutions on Kubernetes. Designing event-driven, distributed systems and driving digital transformation through GitOps, infrastructure-as-code, and modern DevOps practices.",
    tags: ["Cloud Native", "Kubernetes", "Event-Driven", "GitOps", ".NET", "Azure", "Architecture"],
    clients: ["ABN AMRO", "Domivest"]
  },
  {
    company: "PANGAEA Internet Marketing",
    url: "#",
    role: "Lead .NET Software Developer",
    period: "Jul 2011 — Sep 2017",
    location: "The Hague, Netherlands",
    description: "Led .NET software development teams using Agile methodologies. Responsible for architecture decisions, code quality, and delivery of scalable web platforms.",
    tags: ["C#", ".NET", "Architecture", "Agile", "SQL Server", "MongoDB", "Elastic Search"],
    clients: ["Deen Supermarkten", "Lens Express", "City Lens", "Terpstra Muziek", "GeoStick", "Carlton Hotels"]
  },
  {
    company: "MapTrace",
    url: "#",
    role: "Lead Developer",
    period: "Sep 2010 — Jun 2011",
    location: "De Lier, Netherlands",
    description: "Led development at a SaaS company building fleet management and field service solutions. Responsible for guiding and mentoring junior developers, maintaining code standards, and managing software releases across products including trip registration, vehicle telemetry, on-board computers, and workflow management.",
    tags: ["Architecture", "REST", "Team Management", "C#", "SQL", "Embedded Systems", "Windows CE"],
    clients: []
  },
  {
    company: "Quistor",
    url: "#",
    role: "Consultant",
    period: "Jul 2005 — Aug 2010",
    location: "Bergen op Zoom, Netherlands",
    description: "Consultant at an international JD Edwards Consultancy & Support firm and global Oracle partner, delivering managed & outsourced solutions with offices across The Netherlands, UK, Czech Republic, France, and Italy.",
    tags: ["Windows Server", "AS400", "Oracle", "JD Edwards", "REST", "C++", "SQL"],
    clients: ["CEVA Logistics", "OMRON", "BRÜEL&KJÆR"]
  },
  {
    company: "Butler Systems",
    url: "#",
    role: "IT Engineer, System Builder",
    period: "Sep 2001 — Jul 2002",
    location: "Hoek, Netherlands",
    description: "Worked as a system builder, assembling and configuring customized personal computers for clients.",
    tags: [ "Classic ASP", "OIDC", "Novell Networks", "Hardware", "IT Support"],
    clients: []
  },
];
</script>

<template>
  <div class="relative">
    <!-- Vertical timeline line -->
    <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>

    <div class="space-y-12">
      <div
        v-for="(exp, index) in experiences"
        :key="index"
        class="relative md:grid md:grid-cols-2 md:gap-12 items-start group"
      >
        <!-- Timeline dot -->
        <div class="absolute left-0 md:left-1/2 top-2 w-3 h-3 rounded-full bg-blue-400 border-2 border-deepblue-950 -translate-x-1/2 hidden md:block group-hover:bg-mauverose-300 transition-colors z-10"></div>

        <!-- Left column: meta -->
        <div :class="index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12 md:row-start-1'" class="mb-4 md:mb-0">
          <a
            :href="exp.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xl font-bold text-white hover:text-blue-400 transition-colors"
          >{{ exp.company }}</a>
          <div class="text-blue-400 font-semibold mt-1">{{ exp.role }}</div>
          <div class="text-slate-500 text-sm mt-1 font-medium">{{ exp.period }}</div>
          <div class="text-slate-600 text-xs mt-0.5 uppercase tracking-widest">{{ exp.location }}</div>
        </div>

        <!-- Right column: details -->
        <div :class="index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right md:col-start-1 md:row-start-1'">
          <div class="bg-deepblue-900/60 border border-white/5 rounded-2xl p-6 group-hover:border-blue-400/20 transition-all">
            <p class="text-slate-400 leading-relaxed text-sm">{{ exp.description }}</p>
            <div v-if="exp.clients.length" class="mt-4">
              <div class="text-[10px] uppercase tracking-widest text-slate-600 font-bold mb-2">Clients</div>
              <div class="flex flex-wrap gap-2" :class="index % 2 === 0 ? '' : 'md:justify-end'">
                <span
                  v-for="client in exp.clients"
                  :key="client"
                  class="text-[10px] font-bold px-2 py-0.5 bg-blue-400/10 border border-blue-400/20 rounded text-blue-300"
                >{{ client }}</span>
              </div>
            </div>
            <div v-if="exp.tags.length" class="mt-4">
            <div class="text-[10px] uppercase tracking-widest text-slate-600 font-bold mb-2">Skills</div>
            <div class="flex flex-wrap gap-2 mt-4" :class="index % 2 === 0 ? '' : 'md:justify-end'">
              <span
                v-for="tag in exp.tags"
                :key="tag"
                class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white/5 border border-white/10 rounded text-slate-400"
              >{{ tag }}</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
