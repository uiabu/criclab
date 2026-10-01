"use client";

import { useState } from "react";
import { 
  Clock, 
  BookOpen, 
  Star, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Award,
  ChevronDown
} from "lucide-react";
import { FEATURED_PROGRAMS, TrainingProgram } from "@/data/cricketData";

interface FeaturedProgramsProps {
  onOpenAssessment?: () => void;
}

export default function FeaturedPrograms({ onOpenAssessment }: FeaturedProgramsProps) {
  const [activeProgramId, setActiveProgramId] = useState<string | null>(null);

  return (
    <section id="programs" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Elite Curriculum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Featured Training Programs
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
              Step-by-step masterclasses engineered by former international pros and ICC specialists.
              Structured week-by-week with drill sheets, video analysis, and net benchmarks.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenAssessment}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-emerald-400 hover:text-white bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Match With My Role</span>
            </button>
          </div>
        </div>

        {/* 4 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {FEATURED_PROGRAMS.map((program) => {
            const isExpanded = activeProgramId === program.id;

            return (
              <div
                key={program.id}
                className="rounded-3xl bg-slate-900/70 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-emerald-950/30"
              >
                <div>
                  {/* Top Badges & Meta */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                        {program.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/5">
                        {program.level}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{program.rating}</span>
                      <span className="text-slate-400 font-normal">({program.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Program Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {program.tagline}
                  </p>

                  {/* Duration & Drills Meta */}
                  <div className="flex items-center gap-5 mt-5 py-3 border-y border-white/10 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-emerald-400" />
                      <span>{program.drills} Drills</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-emerald-400" />
                      <span>{program.studentsEnrolled.toLocaleString()} Enrolled</span>
                    </div>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="mt-5 space-y-2.5">
                    <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                      Key Syllabus Modules:
                    </div>
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Coach Credentials Row */}
                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-emerald-500/30 flex items-center justify-center font-bold text-xs text-emerald-400">
                        {program.coach.avatar}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-1.5">
                          {program.coach.name}
                          <span className="text-[10px] bg-white/10 text-emerald-300 px-1.5 py-0.2 rounded font-normal">
                            {program.coach.badge}
                          </span>
                        </div>
                        <div className="text-xs text-slate-400">{program.coach.role}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onOpenAssessment}
                    className="flex-1 py-3 px-5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 cursor-pointer"
                  >
                    <span>Enroll in Program</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
