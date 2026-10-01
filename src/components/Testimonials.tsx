"use client";

import { Star, ShieldCheck, Quote, Sparkles } from "lucide-react";
import { TESTIMONIALS } from "@/data/cricketData";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Player Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Serious Cricketers
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            From junior state representatives to premier league captains, see how players are
            breaking through plateaus with CricketLab’s data-driven coaching.
          </p>
        </div>

        {/* 4 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl bg-slate-900/60 border border-white/10 hover:border-emerald-500/30 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group shadow-xl"
            >
              <div>
                {/* Rating & Metric badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {t.metricsResult}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center font-bold text-slate-950 text-xs shadow-md">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      {t.name}
                      <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-0.5">
                        <ShieldCheck className="w-3 h-3" /> Verified Player
                      </span>
                    </h4>
                    <p className="text-xs text-slate-400">
                      {t.role} &bull; <span className="text-slate-300">{t.team}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Academy Credibility Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-[#090f1d] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Coaching Athletes Across 42 Cricket Nations
              </div>
              <div className="text-xs text-slate-400">
                England, Australia, India, South Africa, New Zealand, West Indies, Pakistan & more.
              </div>
            </div>
          </div>
          <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-lg border border-emerald-500/20 whitespace-nowrap">
            98.6% RENEWAL RATE
          </div>
        </div>

      </div>
    </section>
  );
}
