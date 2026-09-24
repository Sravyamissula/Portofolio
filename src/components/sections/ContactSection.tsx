"use client";

import React, { useState } from "react";
import { Mail, Phone, ArrowUpRight, Copy, Check } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/portfolioData";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#07090e] border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Contact
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Let&apos;s build something.
            </h2>
          </div>

          <p className="text-base text-slate-300 font-sans max-w-xl leading-relaxed">
            Interested in software engineering, backend systems, AI, or building something ambitious? I&apos;d love to connect.
          </p>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {/* Email Card */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="text-[11px] font-mono text-slate-400">EMAIL</div>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                >
                  {SOCIAL_LINKS.email}
                </a>
              </div>

              <button
                onClick={handleCopy}
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 transition"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
              <div className="text-[11px] font-mono text-slate-400">PHONE</div>
              <div className="text-sm font-medium text-white font-mono">
                {SOCIAL_LINKS.phone}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-slate-400">
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
              <span className="text-slate-400">GitHub (add in portfolioData.ts)</span>
            )}

            <span className="text-white/10">•</span>

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
              <span className="text-slate-400">LinkedIn (add in portfolioData.ts)</span>
            )}

            <span className="text-white/10">•</span>

            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="hover:text-cyan-400 transition-colors"
            >
              Write email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
