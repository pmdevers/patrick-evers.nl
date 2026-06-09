import { defineStore } from "pinia";
import { ref } from "vue";

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const useSkillsStore = defineStore("skills", () => {
  const skillCategories = ref<SkillCategory[]>([
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
      skills: [
        "Azure DevOps",
        "Kubernetes",
        "Talos Linux",
        "Docker",
        "Terraform",
        "CI/CD Pipelines",
        "Bicep",
        "FluxCD",
        "Crossplane",
        "Prometheus",
        "Grafana"
      ]
    },
    {
      name: "Data & Storage",
      skills: ["PostgreSQL", "SQL Server", "Oracle", "MongoDB", "CosmosDB", "Redis", "Elasticsearch"]
    }
  ]);

  return {
    skillCategories
  };
});