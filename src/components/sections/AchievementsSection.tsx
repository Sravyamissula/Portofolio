"use client";

import React from "react";
import { ACHIEVEMENTS } from "@/data/portfolioData";

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative bg-[#07090e] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            Achievements
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Certifications & Honors
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Verified national hackathon finalist finishes, podium honors, and cloud practitioner certification.
          </p>
        </div>

        {/* Clean Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors space-y-2.5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-mono text-cyan-400 font-medium">
                  {item.year}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]">
                  {item.badge}
                </span>
              </div>

              <div className="space-y-0.5">
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-slate-400">
                  {item.subtitle}
                </div>
              </div>

              <p className="text-xs text-slate-300 font-sans leading-relaxed pt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
