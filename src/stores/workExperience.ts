import { defineStore } from "pinia";
import { ref } from "vue";

export interface WorkExperience {
  company: string;
  url: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
  clients: string[];
}

export const useWorkExperienceStore = defineStore("workExperience", () => {
  const experiences = ref<WorkExperience[]>([
    {
      company: "TJIP BV",
      url: "https://www.tjip.com",
      role: "Software Engineer & Cloud‑Native Platform Specialist",
      period: "Sep 2017 — Present",
      location: "Delft, Netherlands",
      description:
        "Leading software architecture for enterprise clients, specializing in Cloud Native solutions on Kubernetes. Designing event-driven, distributed systems and driving digital transformation through GitOps, infrastructure-as-code, and modern DevOps practices.",
      tags: ["Cloud Native", "Kubernetes", "Event-Driven", "GitOps", ".NET", "Azure", "Architecture"],
      clients: ["ABN AMRO", "Domivest"]
    },
    {
      company: "PANGAEA Internet Marketing",
      url: "#",
      role: "Lead .NET Software Developer",
      period: "Jul 2011 — Sep 2017",
      location: "The Hague, Netherlands",
      description:
        "Led .NET software development teams using Agile methodologies. Responsible for architecture decisions, code quality, and delivery of scalable web platforms.",
      tags: ["C#", ".NET", "Architecture", "Agile", "SQL Server", "MongoDB", "Elastic Search"],
      clients: [
        "Deen Supermarkten",
        "Lens Express",
        "City Lens",
        "Terpstra Muziek",
        "GeoStick",
        "Carlton Hotels",
        "Van Lier",
        "Happy Hair Service"
      ]
    },
    {
      company: "MapTrace",
      url: "#",
      role: "Lead Developer",
      period: "Sep 2010 — Jun 2011",
      location: "De Lier, Netherlands",
      description:
        "Led development at a SaaS company building fleet management and field service solutions. Responsible for guiding and mentoring junior developers, maintaining code standards, and managing software releases across products including trip registration, vehicle telemetry, on-board computers, and workflow management.",
      tags: ["Architecture", "REST", "Team Management", "C#", "SQL", "Embedded Systems", "Windows CE"],
      clients: []
    },
    {
      company: "Quistor",
      url: "#",
      role: "Consultant",
      period: "Jul 2005 — Aug 2010",
      location: "Bergen op Zoom, Netherlands",
      description:
        "Consultant at an international JD Edwards Consultancy & Support firm and global Oracle partner, delivering managed & outsourced solutions with offices across The Netherlands, UK, Czech Republic, France, and Italy.",
      tags: ["Windows Server", "AS400", "Oracle", "JD Edwards", "REST", "C++", "SQL"],
      clients: ["CEVA Logistics", "OMRON", "BRÜEL&KJÆR", "Ten Kate", "KEUNE Haircosmetics"]
    },
    {
      company: "Butler Systems",
      url: "#",
      role: "IT Engineer, System Builder",
      period: "Sep 2001 — Jul 2002",
      location: "Hoek, Netherlands",
      description: "Worked as a system builder, assembling and configuring customized personal computers for clients.",
      tags: ["Classic ASP", "OIDC", "Novell Networks", "Hardware", "IT Support"],
      clients: []
    }
  ]);

  return {
    experiences
  };
});