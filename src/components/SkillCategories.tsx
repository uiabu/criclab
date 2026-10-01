"use client";

import { useState } from "react";
import { 
  Target, 
  Flame, 
  Shield, 
  Hand, 
  Activity, 
  Brain, 
  ArrowRight, 
  Check, 
  Play, 
  BarChart2,
  Sparkles
} from "lucide-react";
import { SKILL_CATEGORIES, SkillCategory } from "@/data/cricketData";

interface SkillCategoriesProps {
  onOpenAssessment?: () => void;
}

export default function SkillCategories({ onOpenAssessment }: SkillCategoriesProps) {
  const [selectedSkillId, setSelectedSkillId] = useState<string>("batting");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Target":
        return <Target className="w-6 h-6" />;
      case "Flame":
        return <Flame className="w-6 h-6" />;
      case "Shield":
        return <Shield className="w-6 h-6" />;
      case "HandMetal":
        return <Hand className="w-6 h-6" />;
      case "Activity":
        return <Activity className="w-6 h-6" />;
      case "Brain":
        return <Brain className="w-6 h-6" />;
      default:
        return <Target className="w-6 h-6" />;
    }
  };

  const selectedSkill = SKILL_CATEGORIES.find((s) => s.id === selectedSkillId) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Specialized Skill Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Six Pillars of Cricket Mastery
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Every aspect of your cricket development is structured into dedicated modules,
            combining biomechanical science with proven match routines.
          </p>
        </div>

        {/* 6 Skill Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-10">
          {SKILL_CATEGORIES.map((skill) => {
            const isSelected = skill.id === selectedSkillId;
            return (
              <button
                key={skill.id}
                type="button"
                onClick={() => setSelectedSkillId(skill.id)}
                className={`flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? "bg-slate-900/90 border-emerald-400 shadow-lg shadow-emerald-500/15 -translate-y-1"
                    : "bg-slate-900/40 border-white/5 hover:border-white/20 hover:bg-slate-900/60"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                    isSelected
                      ? "bg-emerald-400 text-slate-950 shadow-md shadow-emerald-400/25"
                      : "bg-white/5 text-slate-300 group-hover:text-white"
                  }`}
                >
                  {getIcon(skill.icon)}
                </div>
                <h3 className="font-bold text-sm sm:text-base text-white tracking-tight">
                  {skill.name}
                </h3>
                <span className="text-[11px] font-medium text-slate-400 mt-1">
                  {skill.drillsCount} Drills
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Skill Deep Dive Showcase Box */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
          {/* Ambient inner glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            
            {/* Left side: Overview & Key focus */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                  {selectedSkill.programsCount} Structured Programs
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {selectedSkill.drillsCount} Total Drills
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {selectedSkill.name} Coaching Curriculum
              </h3>
              <p className="mt-3 text-slate-300 text-base leading-relaxed">
                {selectedSkill.description}
              </p>

              {/* Key Technical Focus Areas */}
              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Core Technical Focus
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedSkill.keyFocus.map((focus, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-200">
                        {focus}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Sample Drill & Metric Proof Card */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* Sample Drill Card */}
              <div className="p-5 rounded-2xl bg-[#060b13] border border-white/10">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <Play className="w-3.5 h-3.5 fill-current" /> FEATURED DRILL
                  </span>
                  <span>4K Slow-Motion</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {selectedSkill.sampleDrill}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Multi-angle breakdown with visual checkpoint markers, audio cadence cues, and solo net rep counters.
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                  <span className="text-slate-400">Average Improvement:</span>
                  <span className="font-mono font-bold text-emerald-400">
                    {selectedSkill.statHighlight}
                  </span>
                </div>
              </div>

              {/* Assessment CTA */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenAssessment}
                  className="flex-1 py-3 px-5 rounded-xl text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Assess My {selectedSkill.name}</span>
                </button>
                <a
                  href="#programs"
                  className="py-3 px-5 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  Browse Drills
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
