"use client";

import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/navigation/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#07090e] text-[#f8fafc] selection:bg-cyan-400 selection:text-slate-950 font-sans">
      {/* Sticky Clean Navigation */}
      <Navbar />

      {/* Main Flow */}
      <div className="relative z-10 flex flex-col">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <EducationSection />
        <ContactSection />
      </div>

      {/* Minimal Footer */}
      <Footer />
    </main>
  );
}
