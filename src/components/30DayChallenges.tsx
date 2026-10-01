"use client";

import { useState } from "react";
import { 
  Flame, 
  Calendar, 
  Users, 
  Award, 
  ArrowRight, 
  Check, 
  Zap, 
  Target, 
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { CHALLENGES, Challenge } from "@/data/cricketData";

interface ChallengesProps {
  onOpenAssessment?: () => void;
}

export default function ChallengesSection({ onOpenAssessment }: ChallengesProps) {
  const [selectedChallengeId, setSelectedChallengeId] = useState<string>(CHALLENGES[0].id);

  const selectedChallenge = CHALLENGES.find((c) => c.id === selectedChallengeId) || CHALLENGES[0];

  return (
    <section id="challenges" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>High-Intensity Habit Transformation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            30-Day Skill Challenges
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Consistency beats sporadic genius. Commit to 20 minutes of deliberate daily drills
            engineered to hardwire muscle memory and unlock measurable performance gains.
          </p>
        </div>

        {/* 3 Challenge Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {CHALLENGES.map((challenge) => {
            const isSelected = challenge.id === selectedChallengeId;
            return (
              <button
                key={challenge.id}
                type="button"
                onClick={() => setSelectedChallengeId(challenge.id)}
                className={`p-6 rounded-2xl text-left transition-all duration-200 cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? "bg-slate-900 border-emerald-400 shadow-xl shadow-emerald-500/15 -translate-y-1"
                    : "bg-slate-900/40 border-white/5 hover:border-white/20 hover:bg-slate-900/60"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      {challenge.duration}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {challenge.difficulty}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {challenge.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    {challenge.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                    {challenge.activePlayers.toLocaleString()} Active
                  </span>
                  <span className="text-emerald-400 font-bold">
                    {challenge.completionRate} Finish Rate
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Challenge Interactive Roadmap Card */}
        <div className="rounded-3xl bg-[#090f1d] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Challenge Overview & Milestones */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-400 text-slate-950">
                  Active Challenge Roadmap
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  {selectedChallenge.focusMetrics}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                {selectedChallenge.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {selectedChallenge.subtitle}
              </p>

              {/* 3-Stage Progression */}
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      DAYS 01 &ndash; 10: FOUNDATION
                    </span>
                    <span className="text-[11px] text-slate-400">Activation & Mechanics</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {selectedChallenge.daysHighlight.day1_10}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-teal-400">
                      DAYS 11 &ndash; 20: ACCELERATION
                    </span>
                    <span className="text-[11px] text-slate-400">Volume & Intensity</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {selectedChallenge.daysHighlight.day11_20}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      DAYS 21 &ndash; 30: PRESSURE INTEGRATION
                    </span>
                    <span className="text-[11px] text-slate-400">Match Readiness</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {selectedChallenge.daysHighlight.day21_30}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenAssessment}
                className="px-8 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
              >
                <span>Join Challenge for Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column: 30-Day Grid Streak Tracker Widget */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-[#050a14] border border-white/10">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div>
                    <div className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                      Daily Streak Tracker
                    </div>
                    <div className="text-sm font-bold text-white">30 Consecutive Rep Days</div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Streak Ready</span>
                  </div>
                </div>

                {/* 30 Day Box Matrix */}
                <div className="grid grid-cols-6 gap-2 mb-4">
                  {Array.from({ length: 30 }).map((_, index) => {
                    const dayNum = index + 1;
                    const isCompleted = dayNum <= 9;
                    const isCurrent = dayNum === 10;
                    return (
                      <div
                        key={dayNum}
                        className={`aspect-square rounded-lg flex flex-col items-center justify-center text-xs font-mono transition-all ${
                          isCompleted
                            ? "bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-bold"
                            : isCurrent
                            ? "bg-emerald-400 text-slate-950 font-extrabold ring-2 ring-emerald-300 animate-pulse"
                            : "bg-white/[0.03] border border-white/5 text-slate-500"
                        }`}
                      >
                        <span>{dayNum}</span>
                        {isCompleted && <Check className="w-2.5 h-2.5 mt-0.5" />}
                      </div>
                    );
                  })}
                </div>

                {/* Milestone reward badge */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-white">Completion Reward</div>
                    <div className="text-slate-400">
                      Verified CricketLab Academy Certificate & Benchmark Badge
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
