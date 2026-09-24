"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative bg-[#06080e] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            Skills
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Technical Competencies & Tooling
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Core technologies, backend frameworks, databases, and engineering principles used across academic curricula, internship projects, and hackathons.
          </p>
        </div>

        {/* Clean Categorized Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3"
            >
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 border-b border-white/[0.06] pb-2">
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.03] text-slate-200 border border-white/[0.05]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
