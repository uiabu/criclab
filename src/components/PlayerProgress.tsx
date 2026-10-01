"use client";

import { useState } from "react";
import { 
  TrendingUp, 
  Activity, 
  Crosshair, 
  Compass, 
  Zap, 
  CheckCircle2, 
  BarChart3,
  Flame,
  ArrowUpRight
} from "lucide-react";

export default function PlayerProgress() {
  const [activeTab, setActiveTab] = useState<"batting" | "bowling" | "fitness">("batting");

  return (
    <section className="py-20 md:py-28 bg-[#040810] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Biomechanical Telemetry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Data-Driven Player Progress
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Stop guessing if your practice is working. Track measurable improvements in bat speed,
            release velocity, seam consistency, and wagon wheel shot dispersion over time.
          </p>

          {/* Interactive Metric Filter Switcher */}
          <div className="flex items-center gap-2 mt-8 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10">
            <button
              type="button"
              onClick={() => setActiveTab("batting")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "batting"
                  ? "bg-emerald-400 text-slate-950 shadow-md shadow-emerald-400/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Batting Telemetry & Wagon Wheel
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("bowling")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "bowling"
                  ? "bg-emerald-400 text-slate-950 shadow-md shadow-emerald-400/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Bowling Velocity & Seam Vector
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("fitness")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "fitness"
                  ? "bg-emerald-400 text-slate-950 shadow-md shadow-emerald-400/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Athleticism & Reaction Time
            </button>
          </div>
        </div>

        {/* Telemetry Display Dashboard Container */}
        <div className="rounded-3xl bg-[#090f1d] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* TAB 1: BATTING TELEMETRY & WAGON WHEEL */}
          {activeTab === "batting" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              
              {/* Left: Interactive Wagon Wheel SVG Visualization */}
              <div className="lg:col-span-6 flex flex-col items-center">
                <div className="w-full max-w-md aspect-square rounded-2xl bg-[#050a14] border border-white/10 p-4 relative flex flex-col items-center justify-center">
                  <div className="absolute top-3 left-3 text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <Crosshair className="w-3.5 h-3.5" /> 360° SCORING WAGON WHEEL
                  </div>
                  <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-400">
                    MATCH SAMPLE: 14 INNINGS
                  </div>

                  {/* SVG Wagon Wheel Stadium Oval */}
                  <svg viewBox="0 0 300 300" className="w-full h-full max-w-[280px]">
                    {/* Boundary ropes */}
                    <ellipse cx="150" cy="150" rx="135" ry="135" fill="none" stroke="#1e293b" strokeWidth="2" />
                    <ellipse cx="150" cy="150" rx="100" ry="100" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                    <ellipse cx="150" cy="150" rx="60" ry="60" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />

                    {/* Central pitch strip */}
                    <rect x="146" y="130" width="8" height="40" fill="#334155" rx="1" />
                    <circle cx="150" cy="150" r="3" fill="#10b981" />

                    {/* Radial shot rays with emerald & gold highlights */}
                    {/* Cover Drive / Extra cover rays */}
                    <line x1="150" y1="150" x2="60" y2="70" stroke="#10b981" strokeWidth="2.5" strokeOpacity="0.9" />
                    <circle cx="60" cy="70" r="4" fill="#10b981" />
                    <line x1="150" y1="150" x2="80" y2="45" stroke="#10b981" strokeWidth="2" strokeOpacity="0.8" />
                    
                    {/* Straight down ground */}
                    <line x1="150" y1="150" x2="150" y2="20" stroke="#10b981" strokeWidth="3" strokeOpacity="0.9" />
                    <circle cx="150" cy="20" r="5" fill="#10b981" />
                    <line x1="150" y1="150" x2="135" y2="30" stroke="#10b981" strokeWidth="2" strokeOpacity="0.7" />

                    {/* Mid wicket & Pull shot rays */}
                    <line x1="150" y1="150" x2="235" y2="60" stroke="#10b981" strokeWidth="2.5" strokeOpacity="0.85" />
                    <circle cx="235" cy="60" r="4" fill="#10b981" />
                    <line x1="150" y1="150" x2="255" y2="105" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.8" />

                    {/* Square cut */}
                    <line x1="150" y1="150" x2="30" y2="140" stroke="#10b981" strokeWidth="2" strokeOpacity="0.8" />
                    <circle cx="30" cy="140" r="3.5" fill="#10b981" />

                    {/* Third man / Fine leg */}
                    <line x1="150" y1="150" x2="70" y2="245" stroke="#64748b" strokeWidth="1.5" strokeOpacity="0.5" />
                    <line x1="150" y1="150" x2="230" y2="240" stroke="#64748b" strokeWidth="1.5" strokeOpacity="0.5" />

                    {/* Field Labels */}
                    <text x="150" y="16" fill="#10b981" fontSize="8" textAnchor="middle" fontFamily="monospace">LONG OFF</text>
                    <text x="60" y="60" fill="#10b981" fontSize="8" textAnchor="middle" fontFamily="monospace">COVER (34%)</text>
                    <text x="245" y="55" fill="#10b981" fontSize="8" textAnchor="middle" fontFamily="monospace">MID-WICKET (28%)</text>
                    <text x="35" y="135" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="monospace">POINT</text>
                    <text x="150" y="288" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="monospace">FINE LEG</text>
                  </svg>

                  <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-400 mt-2 pt-2 border-t border-white/5">
                    <span className="text-emerald-400 font-bold">Boundary Percentage: 48.2%</span>
                    <span>Dot Ball Rate: 28% (-14% drop)</span>
                  </div>
                </div>
              </div>

              {/* Right: Comparative Metric Progress Cards */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase text-slate-400">Peak Bat Speed</span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 font-bold">
                      <TrendingUp className="w-3.5 h-3.5" /> +14.2 km/h Gain
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-extrabold text-white font-mono">122.4</span>
                    <span className="text-xs text-slate-400">km/h (from 108.2 baseline)</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-emerald-400 w-[88%]" />
                  </div>
                  <div className="text-[11px] text-slate-400 mt-2">
                    Ranked in Top 4% of Academy Competitors
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase text-slate-400">Sweet Spot Impact Accuracy</span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 font-bold">
                      <TrendingUp className="w-3.5 h-3.5" /> +22% Precision
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-extrabold text-white font-mono">94.8%</span>
                    <span className="text-xs text-slate-400">middle-bat efficiency</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-teal-400 w-[94%]" />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase text-slate-400">Strike Rotation Rate</span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 font-bold">
                      <TrendingUp className="w-3.5 h-3.5" /> +18.4%
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-extrabold text-white font-mono">72.0%</span>
                    <span className="text-xs text-slate-400">balls rotated into runs</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: BOWLING VELOCITY & SEAM VECTOR */}
          {activeTab === "bowling" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              
              <div className="lg:col-span-6">
                <div className="w-full aspect-video rounded-2xl bg-[#050a14] border border-white/10 p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="text-emerald-400 font-bold">BOWLING RELEASE RADAR</span>
                    <span>FRONT KNEE BRACING: 172°</span>
                  </div>

                  {/* Velocity Graph Curve */}
                  <div className="h-32 w-full flex items-center justify-center relative">
                    <svg viewBox="0 0 320 120" className="w-full h-full">
                      {/* Grid lines */}
                      <line x1="20" y1="100" x2="300" y2="100" stroke="#1e293b" strokeWidth="1" />
                      <line x1="20" y1="60" x2="300" y2="60" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="20" y1="20" x2="300" y2="20" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                      
                      {/* Before line (Red/Grey) */}
                      <path
                        d="M 20 85 Q 90 82, 160 80 T 300 78"
                        fill="none"
                        stroke="#64748b"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                      
                      {/* After line (Emerald) */}
                      <path
                        d="M 20 85 Q 90 60, 160 40 T 300 25"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="3.5"
                        className="drop-shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                      />

                      <circle cx="300" cy="25" r="5" fill="#10b981" />
                    </svg>

                    <div className="absolute bottom-2 left-4 text-[10px] font-mono text-slate-400">
                      WEEK 1: 124 km/h
                    </div>
                    <div className="absolute top-2 right-4 text-[11px] font-mono font-bold text-emerald-400">
                      WEEK 8: 135.2 km/h (+11.2 km/h)
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/5 pt-2">
                    <span>SEAM REVOLUTIONS: 2,420 RPM</span>
                    <span className="text-emerald-400 font-bold">WOBBLE SEAM SUCCESS: 84%</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono uppercase text-slate-400">Release Velocity</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">+8.4 km/h Average</span>
                  </div>
                  <div className="text-3xl font-extrabold text-white font-mono">
                    135.2 <span className="text-sm font-normal text-slate-400">km/h</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    Generated via front knee lockout and explosive non-bowling arm pull down.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono uppercase text-slate-400">Death Yorker Precision</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">78% in Yorker Channel</span>
                  </div>
                  <div className="text-3xl font-extrabold text-white font-mono">
                    -1.42 <span className="text-sm font-normal text-slate-400">Runs / Over Economy Drop</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: FITNESS & REACTION TIME */}
          {activeTab === "fitness" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              
              <div className="lg:col-span-6 space-y-4">
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase text-slate-400">Slip & Ring Reaction Window</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">-0.12s Quicker</span>
                  </div>
                  <div className="text-3xl font-extrabold text-white font-mono">
                    0.24 <span className="text-sm font-normal text-slate-400">seconds (Elite benchmark: 0.25s)</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-emerald-400 w-[92%]" />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase text-slate-400">Yo-Yo Intermittent Recovery</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">Level 19.4</span>
                  </div>
                  <div className="text-3xl font-extrabold text-white font-mono">
                    +3.2 <span className="text-sm font-normal text-slate-400">Level Improvement</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-cyan-400 w-[84%]" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="p-6 rounded-2xl bg-[#050a14] border border-white/10">
                  <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    Injury Resilience & Rotator Cuff Prehab
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    Pace bowlers and aggressive hitters reduce lumbar and shoulder strain by 34%
                    through our cricket-specific kinetic chain protocols.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs p-2 rounded bg-white/[0.02]">
                      <span className="text-slate-300">Lumbar Shear Load Mitigation</span>
                      <span className="text-emerald-400 font-mono font-bold">-32% Strain</span>
                    </div>
                    <div className="flex items-center justify-between text-xs p-2 rounded bg-white/[0.02]">
                      <span className="text-slate-300">Rotational Core Torque</span>
                      <span className="text-emerald-400 font-mono font-bold">+28% Power</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
