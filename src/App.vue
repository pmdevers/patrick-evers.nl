<script setup>
import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import WorkExperience from "./components/WorkExperience.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ContactSection from "./components/ContactSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
import EducationSection from "./components/EducationSection.vue";
import "./styles/app.css";

</script>

<template>
  <div class="cv-document bg-deepblue-950 text-slate-200 min-h-screen font-sans selection:bg-blue-500/30">
    <div class="no-print">
      <Navbar />
    </div>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <WorkExperience />
    <EducationSection />
    <ProjectsSection />
    <ContactSection />
    <SiteFooter />

  </div>
</template>
