"use client";

import React from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#05070c] text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Identity & Tagline */}
          <div className="space-y-1">
            <div className="font-semibold text-slate-200 text-sm">
              {PERSONAL_INFO.name}
            </div>
            <p className="text-slate-400 font-sans text-xs">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
            {SOCIAL_LINKS.github && (
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition flex items-center gap-1"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            )}

            {SOCIAL_LINKS.linkedin && (
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            )}

            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="hover:text-white transition"
            >
              Email
            </a>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-[11px] font-mono text-slate-400">
          © 2026 Sai Sri Sravya Missula. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
