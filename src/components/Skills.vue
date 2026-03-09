<script setup>
const skillCategories = [
  {
    name: "Architecture & Design",
    skills: ["Event-Driven Design", "Microservices", "CQRS", "DDD", "Kafka", "RabbitMQ"]
  },
  {
    name: "C# / .NET Ecosystem",
    skills: [".NET 10", "ASP.NET Core", "Entity Framework", "NUnit", "TUnit", "XUnit"]
  },
  {
    name: "DevOps & Cloud",
    skills: ["Azure DevOps", "Kubernetes", "Talos Linux", "Docker", "Terraform", "CI/CD Pipelines", "Bicep", "FluxCD", "Crossplane", "Prometheus", "Grafana"]
  },
  {
    name: "Data & Storage",
    skills: ["PostgreSQL", "SQL Server", "Oracle", "MongoDB", "CosmosDB", "Redis", "Elasticsearch"]
  }
];
</script>

<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div 
      v-for="category in skillCategories" 
      :key="category.name"
      class="bg-deepblue-900/40 p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all group"
    >
      <h3 class="text-blue-300 font-bold mb-4 uppercase tracking-wider text-sm">{{ category.name }}</h3>
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="skill in category.skills" 
          :key="skill"
          class="text-sm px-3 py-1 bg-white/5 text-slate-300 rounded border border-white/5 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>
