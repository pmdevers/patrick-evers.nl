<script setup lang="ts">
import { computed, ref } from 'vue'
import { useMarkdownResumeStore, defaultResume } from '@/stores/markdownResumeStore'

const { resume } = useMarkdownResumeStore()
const resolvedResume = computed(() => resume.value ?? defaultResume)
const personal = computed(() => resolvedResume.value.personal)

// Form state
const formJobTitle = ref('')
const formCompanyName = ref('')
const formHiringManager = ref('')
const formGoalMission = ref('')
const formSpecificArea = ref('')
const showForm = ref(true)

// Initialize from URL params if available
const initializeFromUrl = () => {
  const query = new URLSearchParams(window.location.search)
  const urlJobTitle = query.get('jobTitle')
  const urlCompany = query.get('company')
  const urlHiring = query.get('hiring')
  const urlGoal = query.get('goal')
  const urlArea = query.get('area')
  
  if (urlJobTitle) formJobTitle.value = decodeURIComponent(urlJobTitle)
  if (urlCompany) formCompanyName.value = decodeURIComponent(urlCompany)
  if (urlHiring) formHiringManager.value = decodeURIComponent(urlHiring)
  if (urlGoal) formGoalMission.value = decodeURIComponent(urlGoal)
  if (urlArea) formSpecificArea.value = decodeURIComponent(urlArea)
}

initializeFromUrl()

const jobTitle = computed(() => formJobTitle.value || '[Job Title]')
const companyName = computed(() => formCompanyName.value || '[Company Name]')
const hiringManager = computed(() => formHiringManager.value || '[Hiring Manager Name]')
const goalMission = computed(() => formGoalMission.value || '[specific goal/mission]')
const specificArea = computed(() => formSpecificArea.value || '[mention specific area from job description]')

const currentDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

const resetForm = () => {
  formJobTitle.value = ''
  formCompanyName.value = ''
  formHiringManager.value = ''
  formGoalMission.value = ''
  formSpecificArea.value = ''
}
</script>

<template>
  <div class="flex relative min-h-screen bg-white">
    <!-- Left Sidebar Form Panel with Tab -->
    <div
      class="fixed left-0 top-1/2 -translate-y-1/2 z-40 print:hidden transition-transform duration-300 ease-in-out flex"
      :style="{ transform: showForm ? 'translateX(0) translateY(-50%)' : 'translateX(-320px) translateY(-50%)' }"
    >
      <!-- Sidebar Content -->
      <div class="w-80 bg-white border-r-2 border-gray-300 p-6 overflow-y-auto">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-bold uppercase tracking-wide text-gray-900">Generator</h2>
          <button
            @click="showForm = false"
            class="text-gray-600 hover:text-gray-900 text-xl font-semibold"
            title="Close form"
          >
            ×
          </button>
        </div>

        <form @submit.prevent class="space-y-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Job Title</label>
            <input
              v-model="formJobTitle"
              type="text"
              placeholder="e.g., Senior Cloud Architect"
              class="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-gray-900"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Company Name</label>
            <input
              v-model="formCompanyName"
              type="text"
              placeholder="e.g., TechCorp Inc"
              class="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-gray-900"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Hiring Manager</label>
            <input
              v-model="formHiringManager"
              type="text"
              placeholder="e.g., Jane Smith"
              class="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-gray-900"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Goal/Mission</label>
            <input
              v-model="formGoalMission"
              type="text"
              placeholder="e.g., leading the cloud transformation"
              class="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-gray-900"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Specific Area</label>
            <input
              v-model="formSpecificArea"
              type="text"
              placeholder="e.g., Kubernetes and distributed systems"
              class="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-gray-900"
            />
          </div>
        </form>

        <!-- Reset Button -->
        <button
          @click="resetForm"
          class="w-full mt-6 px-3 py-2 bg-slate-700 hover:bg-slate-800 text-white text-sm font-semibold rounded transition-colors"
        >
          🔄 Reset
        </button>

        <p class="text-xs text-gray-600 mt-4 pt-4 border-t border-gray-300">
          💡 <strong>Tip:</strong> Fill in the fields and the letter will update in real-time.
        </p>
      </div>

      <!-- Tab Button (Right Edge) -->
      <button
        @click="showForm = !showForm"
        class="w-12 bg-slate-700 hover:bg-slate-800 text-white flex items-center justify-center transition-colors shadow-lg flex-shrink-0"
        :style="{ minHeight: '120px' }"
        title="Toggle form"
      >
        <span class="writing-mode-vertical text-sm font-bold whitespace-nowrap" style="writing-mode: vertical-rl; text-orientation: mixed;">
          {{ showForm ? '▶ HIDE' : '◀ EDIT' }}
        </span>
      </button>
    </div>

    <!-- Overlay (click to close) -->
    <div
      v-if="showForm"
      @click="showForm = false"
      class="fixed inset-0 bg-black/20 z-30 print:hidden"
    ></div>

    <!-- Cover Letter Content -->
    <div class="flex-1 bg-deepblue-950 text-black py-12 px-6 print:p-0 print:bg-white">
      <div class="max-w-4xl mx-auto bg-white p-12 print:p-0 print:bg-transparent shadow-lg print:shadow-none">
        <!-- Header with contact info -->
        <div class="mb-6 pb-6 border-b-2 border-gray-300">
          <h1 class="text-4xl font-bold text-gray-900">{{ personal.name }}</h1>
          <p class="text-lg font-semibold text-gray-700 mt-1">{{ personal.title }}</p>
          <div class="flex flex-wrap gap-4 text-sm mt-2 text-gray-600">
            <span>{{ personal.location }}</span> |
            <span>{{ personal.phone }}</span> |
            <a :href="`mailto:${personal.email}`" class="text-blue-600 hover:underline">{{ personal.email }}</a>
          </div>
          <div class="flex flex-wrap gap-2 text-sm mt-1">
            <a :href="personal.linkedin" target="_blank" class="text-blue-600 hover:underline">{{ personal.linkedin }}</a> |
            <a :href="personal.github" target="_blank" class="text-blue-600 hover:underline">{{ personal.github }}</a>
          </div>
        </div>

        <!-- Date and recipient -->
        <div class="mb-8 text-sm text-gray-600">
          <p>{{ currentDate }}</p>
        </div>

        <div class="mb-8 text-sm text-gray-700">
          <p>{{ hiringManager }}</p>
          <p class="font-semibold">{{ companyName }}</p>
        </div>

        <!-- Salutation -->
        <p class="mb-6 text-sm text-gray-700">Dear {{ hiringManager }},</p>

        <!-- Opening paragraph -->
        <div class="space-y-4 text-sm leading-relaxed text-gray-700 mb-6">
          <p>
            I am writing to express my strong interest in the {{ jobTitle }} position at {{ companyName }}. With {{ personal.focusLabel }} expertise and 20+ years of experience architecting and scaling enterprise platforms, I am confident in my ability to drive meaningful impact on your engineering organization.
          </p>

          <!-- Main body -->
          <p>
            Throughout my career, I have specialized in designing cloud-native architectures, implementing GitOps-driven deployment strategies, and leading cross-functional teams to modernize legacy systems into resilient, observable platforms. At my current role, I have successfully:
          </p>

          <ul class="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li>Modernized 75+ microservices on Kubernetes, improving infrastructure scalability by 40%</li>
            <li>Reduced time-to-production from weeks to same-day releases through automated CI/CD and Infrastructure as Code</li>
            <li>Implemented GitOps with FluxCD, decreasing production incidents by 25%</li>
            <li>Maintained high-availability Kafka clusters for enterprise event-driven workloads</li>
          </ul>

          <p>
            What excites me about {{ companyName }} is the opportunity to bring this expertise to your organization and contribute to {{ goalMission }}. I am particularly drawn to your work in {{ specificArea }}, and I am eager to help drive the engineering excellence your team is known for.
          </p>

          <!-- Closing -->
          <p>
            I would welcome the opportunity to discuss how my background in platform engineering, distributed systems, and technical leadership can contribute to your team's success. Thank you for considering my application; I look forward to speaking with you soon.
          </p>
        </div>

        <!-- Signature -->
        <p class="text-sm text-gray-700">Sincerely,</p>
        <div class="h-12"></div>
        <p class="text-sm font-semibold text-gray-900">{{ personal.name }}</p>

        <!-- Print instructions -->
        <div class="mt-12 pt-6 border-t border-gray-300 text-xs text-gray-500 print:hidden">
          <p><strong>How to use:</strong></p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>Click the tab on the left edge to open/close the form sidebar</li>
            <li>Fill in the fields and the letter will update in real-time</li>
            <li>Click the Reset button in the sidebar to clear all fields</li>
            <li>Print or save as PDF using your browser's print dialog (Ctrl+P)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media print {
  .print\:hidden {
    display: none !important;
  }
  .print\:p-0 {
    padding: 0;
  }
  .print\:bg-white {
    background-color: white;
  }
  .print\:bg-transparent {
    background-color: transparent;
  }
  .print\:shadow-none {
    box-shadow: none;
  }
}
</style>
