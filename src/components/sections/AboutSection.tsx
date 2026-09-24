"use client";

import React from "react";
import { PERSONAL_INFO, TIMELINE_MILESTONES } from "@/data/portfolioData";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-white/[0.06] bg-[#07090e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
          About
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: 2 Concise Paragraphs */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Building reliable software systems
            </h2>

            <div className="space-y-4 text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
              <p>
                I am a Computer Science & Engineering student at{" "}
                <span className="text-white font-medium">Amrita Vishwa Vidyapeetham</span> (CGPA:{" "}
                <span className="text-cyan-400 font-mono font-medium">9.61/10</span>) with software engineering experience from{" "}
                <span className="text-white font-medium">Fidelity Investments</span>. My technical focus centers on backend engineering, RESTful APIs, distributed workflows, and AI-powered applications.
              </p>

              <p className="text-slate-400">
                Through enterprise testing at Fidelity and competitive hackathon projects, I design software with an emphasis on system predictability, clean interface contracts, and reliable failure handling under real-world conditions.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Clean Engineering Focus Areas */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Engineering Focus
            </div>

            <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {PERSONAL_INFO.engineeringFocus.map((focus) => (
                <div key={focus.number} className="py-3.5 space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-cyan-400 font-medium">
                      {focus.number}
                    </span>
                    <h3 className="text-sm font-semibold text-white tracking-tight">
                      {focus.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 font-mono pl-7">
                    {focus.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="pt-8 border-t border-white/[0.06] space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">
              Academic & Engineering Milestones
            </h3>
            <span className="text-xs font-mono text-slate-400">2023 — 2027</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {TIMELINE_MILESTONES.map((milestone) => (
              <div
                key={milestone.year}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 hover:border-white/[0.12] transition-colors"
              >
                <div className="text-lg font-mono font-bold text-cyan-400">
                  {milestone.year}
                </div>
                <div className="text-xs font-semibold text-white">
                  {milestone.title}
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  {milestone.institution}
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed pt-1">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
