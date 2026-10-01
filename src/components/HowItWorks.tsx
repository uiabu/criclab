"use client";

import { useState } from "react";
import { 
  ClipboardCheck, 
  CalendarDays, 
  Video, 
  Dumbbell, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/data/cricketData";

interface HowItWorksProps {
  onOpenAssessment?: () => void;
}

export default function HowItWorks({ onOpenAssessment }: HowItWorksProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ClipboardCheck className="w-5 h-5" />;
      case 1:
        return <CalendarDays className="w-5 h-5" />;
      case 2:
        return <Video className="w-5 h-5" />;
      case 3:
        return <Dumbbell className="w-5 h-5" />;
      case 4:
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const activeStep = HOW_IT_WORKS_STEPS[activeStepIndex];

  return (
    <section className="py-20 md:py-28 bg-[#040810] relative overflow-hidden border-y border-white/5">
      {/* Background grid accent */}
      <div className="absolute inset-0 stadium-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>The CricketLab Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How CricketLab Works
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            A battle-tested 5-phase framework designed by elite performance coaches to turn
            inconsistent technique into repeatable, match-winning execution.
          </p>
        </div>

        {/* 5-Step Process Pipeline Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`relative p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer border flex flex-col justify-between ${
                  isActive
                    ? "bg-slate-900 border-emerald-400 shadow-lg shadow-emerald-500/10"
                    : "bg-slate-900/40 border-white/5 hover:border-white/15 hover:bg-slate-900/60"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      isActive ? "bg-emerald-400 text-slate-950" : "bg-white/5 text-slate-400"
                    }`}>
                      STEP {step.step}
                    </span>
                    <div className={isActive ? "text-emerald-400" : "text-slate-500"}>
                      {getStepIcon(idx)}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                    {step.subtitle}
                  </p>
                </div>

                {/* Progress bar line indicator */}
                <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      isActive ? "bg-emerald-400 w-full" : "w-0"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Detail Interactive Stage */}
        <div className="rounded-3xl bg-[#0b1322] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left description */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-extrabold font-mono text-emerald-400">
                  {activeStep.step}
                </span>
                <div className="h-6 w-px bg-white/20" />
                <span className="text-sm font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  {activeStep.subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                {activeStep.title} Phase
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                {activeStep.description}
              </p>

              {/* Checkpoint points */}
              <div className="space-y-3 mb-8">
                {activeStep.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200 font-medium">{pt}</span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <button
                type="button"
                onClick={onOpenAssessment}
                className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md shadow-emerald-500/20"
              >
                <span>Experience Phase {activeStep.step}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right preview display card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#060b13] border border-white/10 p-6 relative overflow-hidden shadow-inner">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-white/10">
                  <span className="text-emerald-400 font-semibold">CRICKETLAB ENGINE</span>
                  <span>{activeStep.metric}</span>
                </div>

                {/* Simulated visual for the current phase */}
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-[11px] font-mono uppercase text-slate-400 mb-1">
                      System Action
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {activeStepIndex === 0 && "Biomechanical Video Angle Calibration & Flaw Audit"}
                      {activeStepIndex === 1 && "Algorithmic Match-Day Periodization Generation"}
                      {activeStepIndex === 2 && "4K 240fps Multi-Angle Technique Deconstruction"}
                      {activeStepIndex === 3 && "Deliberate Practice Net Reps & Target Tracking"}
                      {activeStepIndex === 4 && "Wagon Wheel & Bat Speed Velocity Dashboard"}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-[11px] font-mono uppercase text-slate-400 mb-1">
                      Target Outcome
                    </div>
                    <div className="text-sm text-slate-300">
                      {activeStepIndex === 0 && "Zero guess-work. Accurate baseline of your strengths & technical vulnerabilities."}
                      {activeStepIndex === 1 && "Clear daily roadmaps. Know exactly what to drill on Tuesdays vs match Fridays."}
                      {activeStepIndex === 2 && "Visual mental model. Internalize how elite professionals position head and hands."}
                      {activeStepIndex === 3 && "Muscle memory reinforcement. Hundreds of calibrated quality reps."}
                      {activeStepIndex === 4 && "Tangible proof. Noticeable jumps in runs scored, wickets taken, and confidence."}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 text-xs font-mono text-slate-400">
                    <span>STATUS: ACTIVE CALIBRATION</span>
                    <span className="text-emerald-400 font-bold">100% READY</span>
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
