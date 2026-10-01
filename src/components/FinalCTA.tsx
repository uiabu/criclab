"use client";

import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

interface FinalCTAProps {
  onOpenAssessment?: () => void;
}

export default function FinalCTA({ onOpenAssessment }: FinalCTAProps) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background stadium floodlight atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-500/15 via-teal-500/20 to-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 stadium-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-[#0e1828] to-[#070e1a] border border-emerald-500/30 p-8 sm:p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden">
          
          {/* Subtle glowing ring badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Join CricketLab Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6">
            Ready to Elevate Your Game to the{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Next Level?
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            Join over 24,000 cricketers refining their craft with data-driven coaching,
            structured training programs, and elite biomechanical insights.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              type="button"
              onClick={onOpenAssessment}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-all duration-200 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Start Free Assessment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#programs"
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              Explore Training Programs
            </a>
          </div>

          {/* Risk-free badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 font-medium pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No credit card required for assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Instant technique diagnosis</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>14-day risk-free guarantee</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
