export interface Resume {
  personal: {
    name: string
    title: string
    tagline: string
    email: string
    phone: string
    location: string
    summary: string
    linkedin: string
    github: string
    website: string
    about: string[]
    focusLabel: string
    quote: string
  }
  experience: Experience[]
  education: Education[]
  certificates: Certificate[]
  skills: Skill[]
  projects: Project[]
  memberships: Membership[]
}

export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  location: string
  description: string[]
}

export interface Education {
  id: string
  school: string
  degree: string
  field: string
  year: string
  details?: string
}

export interface Certificate {
  id: string
  name: string
  issuer: string
  issued: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link?: string
}

export interface Membership {
  id: string
  organization: string
  type: string
  since?: string
  link?: string
}
