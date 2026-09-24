"use client";

import React, { useState } from "react";
import { ArrowRight, Layers, ArrowUpRight } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import { ProjectModal } from "@/components/ui/ProjectModal";

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const flagshipProject = PROJECTS.find((p) => p.isFlagship) || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => !p.isFlagship);

  return (
    <section id="projects" className="py-24 relative bg-[#07090e] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-14">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            Projects
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Featured Systems & Projects
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Reliable event delivery infrastructure, full-stack trading platforms, and quantum communication protocols.
          </p>
        </div>

        {/* ======================================================== */}
        {/* 1. FLAGSHIP PROJECT: EVENTPULSE                           */}
        {/* ======================================================== */}
        <div className="mb-12">
          <div className="rounded-2xl bg-[#0b0e17] border border-white/[0.1] hover:border-cyan-500/30 transition-all duration-200 overflow-hidden shadow-xl p-6 sm:p-8 lg:p-10 space-y-8">
            {/* Top Label */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider">
                  Flagship Architecture
                </span>
                <span className="text-slate-600">|</span>
                <span className="text-xs font-mono text-slate-400">
                  Reliable Webhook Delivery & Observability
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {flagshipProject.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {flagshipProject.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-3xl">
                {flagshipProject.description}
              </p>
            </div>

            {/* Verified Capabilities */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                System Capabilities
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs text-slate-300 font-sans">
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  • Asynchronous event ingestion via FastAPI
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  • Redis task queue for decoupled worker pools
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  • Configurable exponential backoff retries
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  • Dead Letter Queue (DLQ) for failed dispatches
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  • Delivery tracking and HTTP status audit logs
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  • LLM failure analysis for root-cause diagnosis
                </div>
              </div>
            </div>

            {/* Event Delivery Flow Engineering Diagram */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="uppercase tracking-wider flex items-center gap-1.5 text-slate-300">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  Event Delivery Flow
                </span>
                <span>End-to-End Pipeline</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                {flagshipProject.architectureSteps.map((step, idx) => (
                  <div
                    key={step.label}
                    className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1"
                  >
                    <div className="text-[10px] font-mono text-cyan-400">
                      0{idx + 1}
                    </div>
                    <div className="text-xs font-semibold text-white leading-tight">
                      {step.label}
                    </div>
                    <p className="text-[10px] text-slate-400 leading-tight">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study Button */}
            <div className="pt-2 flex items-center justify-between border-t border-white/[0.06]">
              <button
                onClick={() => setActiveModalProject(flagshipProject)}
                className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Read EventPulse Engineering Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-[11px] font-mono text-slate-400">
                Python • FastAPI • Redis • PostgreSQL
              </span>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. SECONDARY PROJECTS: TRADEGENIE & QUANTUM             */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#0b0e17] border border-white/[0.08] hover:border-white/[0.16] transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-lg"
            >
              <div className="space-y-4">
                {/* Meta & Hackathon Recognition */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-cyan-400">
                    {project.category}
                  </span>

                  {project.hackathonBadge && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                      {project.hackathonBadge.name} — {project.hackathonBadge.result}
                    </span>
                  )}
                </div>

                {/* Title */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400">{project.subtitle}</p>
                </div>

                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {project.description}
                </p>

                {/* Architecture Steps Summary */}
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Architecture Flow
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                    {project.architectureSteps.map((s, idx) => (
                      <React.Fragment key={s.label}>
                        <span className="text-slate-300">{s.label}</span>
                        {idx < project.architectureSteps.length - 1 && (
                          <span className="text-slate-600">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Verified Metric / Badges */}
                {project.quantumMetric && (
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-xs font-mono text-slate-300">
                    <span className="text-cyan-400 font-medium">Result:</span> {project.quantumMetric}
                  </div>
                )}

                {project.securityBadges && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.securityBadges.map((badge) => (
                      <span
                        key={badge}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                      >
                        ✓ {badge}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.02] text-slate-400 border border-white/[0.05]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Inspect Button */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
