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
      skills: ["Event‑Driven Architecture", "Microservices", "CQRS", "Domain‑Driven Design (DDD)", "REST", "gRPC", "Kafka", "RabbitMQ"]
    },
    {
      name: "C# / .NET Ecosystem",
      skills: ["C#", ".NET 8/9/10", "ASP.NET Core", "Entity Framework", "Worker Services", "Minimal APIs", "NUnit", "XUnit", "TUnit"]
    },
    {
      name: "DevOps, Cloud & Platform Engineering",
      skills: [
        "Kubernetes", "Talos Linux", "Docker", "Terraform", "Bicep", "FluxCD", "Crossplane", "Azure DevOps", "GitOps", "CI/CD Pipelines", "Helm", "Kustomize"
      ]
    },
    // {
    //   name: "Observability & Reliability",
    //   skills: ["Prometheus", "Grafana", "Alertmanager", "OpenTelemetry", "Grafana Loki", "Grafana Tempo"]
    // },
    {
      name: "Data & Storage",
      skills: [
        "PostgreSQL", "SQL Server", "Oracle", "MongoDB", "CosmosDB", "Redis", "Elasticsearch", "Kafka"
      ]
    }
  ]);

  return {
    skillCategories
  };
});