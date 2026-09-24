"use client";

import React, { useEffect } from "react";
import { X, ArrowRight, ShieldCheck, Cpu } from "lucide-react";
import { Project, SOCIAL_LINKS } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-3xl max-h-[88vh] bg-[#0b0e17] border border-white/[0.1] rounded-xl shadow-2xl overflow-y-auto flex flex-col font-sans">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-start justify-between p-6 bg-[#0e121e]/95 border-b border-white/[0.08] backdrop-blur-md">
          <div className="space-y-1 pr-4">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-cyan-400">
                {project.category}
              </span>
              {project.hackathonBadge && (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                  {project.hackathonBadge.name} — {project.hackathonBadge.result}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-slate-400">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-7 text-sm">
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
            {project.description}
          </p>

          {/* Problem */}
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1.5">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              The Problem
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* What I Built / Highlights */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Engineering Implementation
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.whatIBuilt.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]"
                >
                  <span className="text-cyan-400 text-xs mt-0.5">•</span>
                  <p className="text-xs text-slate-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Pipeline Flow */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Architecture & Data Flow
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {project.architectureSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1"
                >
                  <div className="text-[10px] font-mono text-cyan-400 font-semibold">
                    0{idx + 1}
                  </div>
                  <div className="text-xs font-semibold text-white">{step.label}</div>
                  <p className="text-[11px] text-slate-400 leading-snug">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Concepts */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Key Engineering Concepts
            </div>
            <div className="flex flex-wrap gap-2">
              {project.keyConcepts.map((concept) => (
                <span
                  key={concept}
                  className="px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-300"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>

          {/* Verified Quantum Metric if present */}
          {project.quantumMetric && (
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
              <Cpu className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono text-cyan-400 font-medium">Measured Quantum Result</div>
                <p className="text-xs text-slate-300 mt-0.5">{project.quantumMetric}</p>
              </div>
            </div>
          )}

          {/* Security Badges if present */}
          {project.securityBadges && (
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                Security & Controls
              </div>
              <div className="flex flex-wrap gap-2">
                {project.securityBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-300"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Outcome */}
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Outcome
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{project.outcome}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 bg-[#0e121e] border-t border-white/[0.08] flex items-center justify-between">
          <div className="text-xs font-mono text-slate-400">
            {project.isFlagship ? "Flagship System Project" : "Engineering Project"}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-medium transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
