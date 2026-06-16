import { defineStore } from "pinia";
import { ref } from "vue";

export interface WorkExperience {
  company: string;
  url: string;
  role: string;
  start: string;
  end: string;
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
      start: "Sep 2017",
      end: "Present",
      location: "Delft, Netherlands",
      description:
        "Provided executive leadership across cloud‑native infrastructure, developer experience, and platform reliability. I defined the strategic direction for modernising the engineering ecosystem and led initiatives that significantly elevated delivery speed, platform stability, and operational maturity. A key achievement was introducing GitOps practices with FluxCD, establishing a declarative, auditable, and fully automated deployment model that strengthened governance and reduced operational risk across environments.",
      tags: ["Cloud Native", "Kubernetes", "Event-Driven", "GitOps", ".NET", "Azure", "Architecture"],
      clients: ["ABN AMRO", "Domivest"]
    },
    {
      company: "PANGAEA Internet Marketing",
      url: "https://www.pangaea.nl/",
      role: "Lead .NET Software Developer",
      start: "Jul 2011",
      end: "Sep 2017",
      location: "The Hague, Netherlands",
      description:
        "Led and mentored .NET engineering teams while driving architectural direction for a multi‑tenant platform serving multiple clients from a single, generic CMS integrated with a shared WebShop. Ensured high code quality, scalable design patterns, and reliable delivery of complex web solutions within Agile environment.",
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
      start: "Sep 2010",
      end: "Jun 2011",
      location: "De Lier, Netherlands",
      description:
        "Directed end‑to‑end product delivery for a SaaS fleet and field‑service platform, mentoring junior engineers, strengthening engineering standards, and orchestrating release cycles. Drove measurable improvements across four product domains: trip registration, vehicle telemetry, on‑board computer integrations, and workflow management.",
      tags: ["Architecture", "REST", "Team Management", "C#", "SQL", "Embedded Systems", "Windows CE"],
      clients: []
    },
    {
      company: "Quistor",
      url: "https://quistor.com/",
      role: "Consultant",
      start: "Jul 2005",
      end: "Aug 2010",
      location: "Bergen op Zoom, Netherlands",
      description:
        "Driving managed and outsourced service delivery across five European countries, supporting clients from offices in the Netherlands, UK, Czech Republic, France, and Italy. Delivered a wide range of IT services, including infrastructure management, application support, and custom development.",
      tags: ["Windows Server", "AS400", "Oracle", "JD Edwards", "REST", "C++", "SQL"],
      clients: ["CEVA Logistics", "OMRON", "BRÜEL&KJÆR", "Ten Kate", "KEUNE Haircosmetics"]
    },
    {
      company: "Butler Systems",
      url: "#",
      role: "IT Engineer, System Builder",
      start: "Sep 2001",
      end: "Jul 2002",
      location: "Hoek, Netherlands",
      description: "Worked as a custom PC builder, assembling and configuring high‑performance, fully tailored computer systems for a wide range of client needs. Handled component selection, precise hardware installation, system optimization, and thorough testing for gaming, productivity, and professional workloads. In addition to system builds, provided on‑site network and administrative support for multiple clients, including troubleshooting, hardware diagnostics, network setup, and general IT maintenance.",
      tags: ["Classic ASP", "OIDC", "Novell Networks", "Hardware", "IT Support"],
      clients: []
    }
  ]);

  return {
    experiences
  };
});