"use client";

import React from "react";
import { MapPin, Calendar, Check } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export const ExperienceSection: React.FC = () => {
  const exp = EXPERIENCES[0];

  return (
    <section id="experience" className="py-24 relative bg-[#06080e] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            Experience
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Software Engineering Experience
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Verified enterprise experience migrating test automation frameworks, resolving dependencies, and testing RESTful APIs and event workflows.
          </p>
        </div>

        {/* Clean Vertical Timeline Card */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/[0.1] space-y-8">
          <div className="relative">
            {/* Timeline node dot */}
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-[#06080e]" />

            <div className="space-y-4">
              {/* Header: Company, Role, Meta */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-white">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="text-sm font-mono text-cyan-400">
                  {exp.role}
                </div>
              </div>

              {/* Verified Responsibilities */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Engineering Responsibilities
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {exp.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]"
                    >
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Framework Migration Workflow Diagram */}
              <div className="pt-4 space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Automation Migration Architecture
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 font-mono text-xs">
                  {exp.architectureFlow.map((step, idx) => (
                    <div
                      key={step.step}
                      className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1"
                    >
                      <div className="text-[10px] text-cyan-400 font-semibold">
                        0{idx + 1}
                      </div>
                      <div className="font-semibold text-white text-xs">
                        {step.step}
                      </div>
                      <p className="text-[11px] text-slate-400 font-sans leading-snug">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Stack */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">Technologies:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.03] text-slate-200 border border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
