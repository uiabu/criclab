"use client";

import { useState } from "react";
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Flame, 
  ShieldCheck,
  BookOpen,
  RotateCcw
} from "lucide-react";

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AssessmentModal({ isOpen, onClose }: AssessmentModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [role, setRole] = useState<string>("Top-Order Batter");
  const [level, setLevel] = useState<string>("Club / Grade Cricket");
  const [goal, setGoal] = useState<string>("Boost Bat Speed & Power");
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const roles = [
    { name: "Top-Order Batter", icon: "🏏" },
    { name: "Middle-Order Finisher", icon: "💥" },
    { name: "Fast / Seam Bowler", icon: "⚡" },
    { name: "Spin Bowler", icon: "🌀" },
    { name: "Wicketkeeper-Batter", icon: "🧤" },
    { name: "All-Rounder", icon: "🛡️" },
  ];

  const levels = [
    "Junior / School Cricket",
    "Club / Grade Cricket",
    "Academy / County Age-Group",
    "Premier League / Semi-Pro",
  ];

  const goals = [
    "Boost Bat Speed & Power Hitting",
    "Increase Bowling Velocity (+5-8 km/h)",
    "Eliminate Technical Flaws (Nicking / Seam drift)",
    "Master Composure & Match-Day Pressure",
  ];

  const handleComplete = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setStep(3);
    }, 600);
  };

  const handleReset = () => {
    setStep(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#090f1d] border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#060b13]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
              CricketLab Skill Assessment
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          
          {/* STEP 1: ROLE & LEVEL */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-semibold">QUESTION 1 OF 2</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  What is your primary cricket role?
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  We customize drill difficulty and biomechanics modules to your playing position.
                </p>
              </div>

              {/* Roles Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {roles.map((r) => (
                  <button
                    key={r.name}
                    type="button"
                    onClick={() => setRole(r.name)}
                    className={`p-3 rounded-xl border text-left transition-all text-xs font-medium cursor-pointer flex flex-col justify-between h-20 ${
                      role === r.name
                        ? "bg-emerald-500/15 border-emerald-400 text-white shadow-md shadow-emerald-500/15"
                        : "bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    <span className="text-lg">{r.icon}</span>
                    <span className="font-semibold leading-tight">{r.name}</span>
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                  Your Current Competition Level
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {levels.map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setLevel(lvl)}
                      className={`p-2.5 rounded-xl text-xs font-medium border text-left cursor-pointer transition-all ${
                        level === lvl
                          ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 font-semibold"
                          : "bg-white/[0.02] border-white/10 text-slate-400 hover:bg-white/5"
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-emerald-500/20"
                >
                  <span>Continue to Goals</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: GOALS & DESIRED BREAKTHROUGH */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-semibold">QUESTION 2 OF 2</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  What is your primary milestone?
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Select the skill leap you want to accomplish within your next 30 to 60 days.
                </p>
              </div>

              <div className="space-y-2.5">
                {goals.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGoal(g)}
                    className={`w-full p-4 rounded-xl border text-left transition-all text-xs sm:text-sm font-medium cursor-pointer flex items-center justify-between ${
                      goal === g
                        ? "bg-emerald-500/15 border-emerald-400 text-white shadow-md shadow-emerald-500/15"
                        : "bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    <span>{g}</span>
                    {goal === g && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                  </button>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Back
                </button>
                <button
                  type="button"
                  disabled={isGenerating}
                  onClick={handleComplete}
                  className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-emerald-500/25"
                >
                  {isGenerating ? (
                    <span>Calibrating Biomechanics...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Generate My Personalized Blueprint</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: INSTANT PERSONALIZED BLUEPRINT */}
          {step === 3 && (
            <div className="space-y-6 animate-in zoom-in-95 duration-200">
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-400 text-slate-950 flex items-center justify-center shrink-0 font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-emerald-400 font-bold uppercase">
                    Custom Assessment Complete
                  </div>
                  <div className="text-sm font-bold text-white">
                    {role} Blueprint &bull; {level}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-white/10">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Recommended Program</div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {role.includes("Batter") || role.includes("Finisher")
                      ? "T20 Power Hitting & Range Hitting Blueprint (6 Weeks)"
                      : role.includes("Fast")
                      ? "Express Pace Velocity & Seam Control 2.0 (8 Weeks)"
                      : role.includes("Spin")
                      ? "Spin Masterclass: Drift, Dip & Variations (6 Weeks)"
                      : "All-Round High-Performance Acceleration Series"}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-white/10">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Recommended 30-Day Challenge</div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">
                    {role.includes("Fast")
                      ? "30-Day Death Overs Yorker Precision Challenge"
                      : role.includes("Wicketkeeper")
                      ? "30-Day Reflex Catching & Slip Hands Challenge"
                      : "30-Day Bat Speed & Power Accelerator Challenge"}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-white/10">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Diagnostic Key Benchmark</div>
                  <div className="text-xs text-slate-300 mt-1">
                    Your baseline indicates high potential for immediate 10-15% gains in contact efficiency and release consistency.
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:flex-1 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Start My 14-Day Free Access</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto p-3 text-xs text-slate-400 hover:text-white flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
