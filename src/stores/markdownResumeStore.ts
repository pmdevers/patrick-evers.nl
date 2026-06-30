import { computed, ref } from 'vue'
import type { Certificate, Education, Experience, Membership, Project, Resume, Skill } from '@/data/resume'
import atsResumeMarkdown from '../../ATS_RESUME.md?raw'

const markdown = ref(atsResumeMarkdown)
const parseError = ref<string | null>(null)

const toId = (prefix: string, value: string, index: number): string => {
  const slug = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return `${prefix}-${slug || index + 1}`
}

const sectionBetween = (source: string, heading: string, nextHeading?: string): string => {
  const start = source.indexOf(`## ${heading}`)
  if (start === -1) {
    return ''
  }

  const bodyStart = source.indexOf('\n', start) + 1
  if (!nextHeading) {
    return source.slice(bodyStart).trim()
  }

  const end = source.indexOf(`## ${nextHeading}`, bodyStart)
  return (end === -1 ? source.slice(bodyStart) : source.slice(bodyStart, end)).trim()
}

const parsePersonal = (source: string): Resume['personal'] => {
  const lines = source.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)

  const name = (lines.find((line) => line.startsWith('# ')) || '#').replace(/^#\s+/, '').trim()
  const title = lines[1] || ''
  const location = lines[2] || ''

  const readField = (label: string): string => {
    const line = lines.find((value) => value.toLowerCase().startsWith(`${label.toLowerCase()}:`))
    return line ? line.slice(line.indexOf(':') + 1).trim() : ''
  }

  const summarySection = sectionBetween(source, 'Professional Summary', 'Core Competencies & Technical Skills')
  const summaryParts = summarySection
    .split(/\n\s*\n/)
    .map((part) => part.replace(/\n/g, ' ').trim())
    .filter(Boolean)

  const tagline = summaryParts[0] || ''
  const summary = summaryParts[1] || tagline
  const focusLabel = sectionBetween(source, 'Core Focus', 'Professional Experience')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find(Boolean) || ''

  return {
    name,
    title,
    tagline,
    email: readField('Email'),
    phone: readField('Phone'),
    location,
    summary,
    linkedin: readField('LinkedIn'),
    github: readField('GitHub'),
    website: readField('Website'),
    about: summaryParts.length ? summaryParts : [summary].filter(Boolean),
    focusLabel,
    quote: readField('Quote') || '',
  }
}

const parseSkills = (source: string): Skill[] => {
  const section = sectionBetween(source, 'Core Competencies & Technical Skills', 'Core Focus')
  if (!section) {
    return []
  }

  return section
    .split('\n### ')
    .map((chunk, index) => (index === 0 ? chunk.replace(/^###\s+/, '') : chunk))
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk) => {
      const lines = chunk.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
      const category = lines[0] || ''
      const items = (lines[1] || '')
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)

      return { category, items }
    })
}

const parseExperience = (source: string): Experience[] => {
  const section = sectionBetween(source, 'Professional Experience', 'Education')
  if (!section) {
    return []
  }

  return section
    .split('\n### ')
    .map((chunk, index) => (index === 0 ? chunk.replace(/^###\s+/, '') : chunk))
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk, index) => {
      const lines = chunk.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
      const position = lines[0] || ''
      const details = (lines[1] || '').split('|').map((part) => part.trim())
      const company = details[0] || ''
      const location = details[1] || ''
      const duration = details.slice(2).join(' | ')
      const description = lines.filter((line) => line.startsWith('- ')).map((line) => line.replace(/^-\s+/, '').replace(/\.$/, ''))

      return {
        id: toId('exp', position || company, index),
        company,
        position,
        duration,
        location,
        description,
      }
    })
}

const parseEducation = (source: string): Education[] => {
  const section = sectionBetween(source, 'Education', 'Certifications')
  if (!section) {
    return []
  }

  return section
    .split('\n### ')
    .map((chunk, index) => (index === 0 ? chunk.replace(/^###\s+/, '') : chunk))
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk, index) => {
      const lines = chunk.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
      const heading = lines[0] || ''
      const schoolAndYear = (lines[1] || '').split('|').map((part) => part.trim())
      const school = schoolAndYear[0] || ''
      const year = schoolAndYear[1] || ''
      const details = (lines.find((line) => line.startsWith('- ')) || '').replace(/^-\s+/, '') || undefined

      const inIndex = heading.toLowerCase().lastIndexOf(' in ')
      const degree = inIndex > -1 ? heading.slice(0, inIndex).trim() : heading
      const field = inIndex > -1 ? heading.slice(inIndex + 4).trim() : ''

      return {
        id: toId('edu', heading, index),
        school,
        degree,
        field,
        year,
        details,
      }
    })
}

const parseCertificates = (source: string): Certificate[] => {
  const section = sectionBetween(source, 'Certifications', 'Memberships')
  if (!section) {
    return []
  }

  return section
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith('- '))
    .map((line, index) => {
      const value = line.replace(/^-\s+/, '')
      const yearMatch = value.match(/\(([^)]+)\)\s*$/)
      const issued = yearMatch ? yearMatch[1].trim() : ''
      const withoutYear = yearMatch ? value.slice(0, yearMatch.index).trim() : value
      const parts = withoutYear.split(',').map((part) => part.trim())
      const name = parts[0] || ''
      const issuer = parts.slice(1).join(', ')

      return {
        id: toId('cert', name, index),
        name,
        issuer,
        issued,
      }
    })
}

const parseMemberships = (source: string): Membership[] => {
  const section = sectionBetween(source, 'Memberships', 'Selected Projects')
  if (!section) {
    return []
  }

  return section
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith('- '))
    .map((line, index) => {
      const value = line.replace(/^-\s+/, '')
      const yearMatch = value.match(/\(([^)]+)\)\s*$/)
      const since = yearMatch ? yearMatch[1].trim() : undefined
      const withoutYear = yearMatch ? value.slice(0, yearMatch.index).trim() : value
      const parts = withoutYear.split(',').map((part) => part.trim())
      const organization = parts[0] || ''
      const type = parts.slice(1).join(', ') || 'Member'

      return {
        id: toId('mem', organization, index),
        organization,
        type,
        since,
      }
    })
}

const parseProjects = (source: string): Project[] => {
  const section = sectionBetween(source, 'Selected Projects')
  if (!section) {
    return []
  }

  return section
    .split('\n### ')
    .map((chunk, index) => (index === 0 ? chunk.replace(/^###\s+/, '') : chunk))
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk, index) => {
      const lines = chunk.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
      const title = lines[0] || ''
      const description = lines[1] || ''
      const techLine = lines.find((line) => line.toLowerCase().startsWith('- technologies:')) || ''
      const linkLine = lines.find((line) => line.toLowerCase().startsWith('- link:')) || ''

      const technologies = techLine
        .replace(/^-\s*technologies:\s*/i, '')
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)

      const link = linkLine.replace(/^-\s*link:\s*/i, '').trim() || undefined

      return {
        id: toId('proj', title, index),
        title,
        description,
        technologies,
        link,
      }
    })
}

const parseResumeMarkdown = (source: string): Resume => {
  const personal = parsePersonal(source)

  return {
    personal,
    experience: parseExperience(source),
    education: parseEducation(source),
    certificates: parseCertificates(source),
    skills: parseSkills(source),
    projects: parseProjects(source),
    memberships: parseMemberships(source),
  }
}

const parsedResume = computed<Resume | null>(() => {
  try {
    parseError.value = null
    return parseResumeMarkdown(markdown.value)
  } catch (error) {
    parseError.value = error instanceof Error ? error.message : 'Failed to parse ATS markdown resume'
    return null
  }
})

export const useMarkdownResumeStore = () => {
  const setMarkdown = (value: string): void => {
    markdown.value = value
  }

  const reloadFromDefault = (): void => {
    markdown.value = atsResumeMarkdown
  }

  return {
    markdown,
    resume: parsedResume,
    parseError,
    setMarkdown,
    reloadFromDefault,
  }
}
