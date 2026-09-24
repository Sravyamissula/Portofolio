"use client";

import React from "react";
import { EDUCATION_DATA } from "@/data/portfolioData";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-[#06080e] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            Education
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Academic Background
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Undergraduate and intermediate academic credentials with strong computer science and mathematics foundations.
          </p>
        </div>

        {/* Short Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_DATA.map((edu) => (
            <div
              key={edu.institution}
              className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono text-cyan-400 font-medium">
                  {edu.score}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {edu.period}
                </span>
              </div>

              <div className="space-y-0.5">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {edu.institution}
                </h3>
                <div className="text-xs font-mono text-slate-300">
                  {edu.degree}
                </div>
                <div className="text-xs text-slate-400">
                  {edu.location}
                </div>
              </div>

              <ul className="space-y-1.5 pt-2 border-t border-white/[0.06] text-xs text-slate-300 list-disc list-inside font-sans">
                {edu.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
