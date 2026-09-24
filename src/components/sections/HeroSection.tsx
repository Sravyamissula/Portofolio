"use client";

import React from "react";
import { ArrowDown, ArrowUpRight, FileDown, Mail } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/portfolioData";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Subtle fine technical grid & soft ambient glow */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-left sm:text-center space-y-8">
        {/* Availability Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>
            AVAILABLE FOR:{" "}
            <span className="text-slate-100 font-medium">Software Engineering • Backend • Full-Stack • AI</span>
          </span>
        </div>

        {/* Main Name & Identity */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            {PERSONAL_INFO.name}
          </h1>

          <div className="flex flex-wrap items-center sm:justify-center gap-2 text-lg sm:text-xl font-medium text-slate-300">
            <span>{PERSONAL_INFO.roleHeadline}</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-cyan-400 font-mono text-base sm:text-lg">{PERSONAL_INFO.focusAreas}</span>
          </div>
        </div>

        {/* Core Tagline & Concise Paragraph */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-xl sm:text-2xl text-slate-200 font-medium tracking-tight">
            &ldquo;{PERSONAL_INFO.tagline}&rdquo;
          </p>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            {PERSONAL_INFO.shortBio}
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center sm:justify-center gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-slate-950 hover:bg-slate-200 font-semibold text-xs sm:text-sm transition-all duration-150 shadow-sm"
          >
            <span>View Projects</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href={SOCIAL_LINKS.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.1] font-medium text-xs sm:text-sm transition-all duration-150"
          >
            <FileDown className="w-3.5 h-3.5 text-slate-300" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] text-slate-300 hover:text-white border border-white/[0.08] font-medium text-xs sm:text-sm transition-all duration-150"
          >
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>Contact</span>
          </a>
        </div>

        {/* Clean Contact & Profile Links */}
        <div className="flex flex-wrap items-center sm:justify-center gap-6 pt-4 text-xs font-mono text-slate-400">
          {SOCIAL_LINKS.github ? (
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 text-slate-400">
              <span>GitHub</span>
            </span>
          )}

          <span className="text-white/10 hidden sm:inline">•</span>

          {SOCIAL_LINKS.linkedin ? (
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 text-slate-400">
              <span>LinkedIn</span>
            </span>
          )}

          <span className="text-white/10 hidden sm:inline">•</span>

          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="inline-flex items-center gap-1 hover:text-cyan-300 transition-colors"
          >
            <span>{SOCIAL_LINKS.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
