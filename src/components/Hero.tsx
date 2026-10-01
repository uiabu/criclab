"use client";

import { ArrowRight, Play, CheckCircle2, TrendingUp, ShieldCheck, Zap, Crosshair } from "lucide-react";

interface HeroProps {
  onOpenAssessment?: () => void;
}

export default function Hero({ onOpenAssessment }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 stadium-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Elite Cricket Academy & Biomechanics Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Train Smarter.{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Play Better.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
              Learn from world-class cricket coaching, follow structured training programs,
              and build your game step by step.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onOpenAssessment}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Start Free Assessment</span>
                <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#programs"
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 border border-white/10 hover:border-emerald-500/40 transition-all duration-200 flex items-center justify-center gap-2.5 backdrop-blur-sm"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Explore Training</span>
              </a>
            </div>

            {/* Proof Metric Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  24,000+
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                  Cricketers Trained
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight flex items-center gap-1 justify-center lg:justify-start">
                  4.95
                  <span className="text-xs font-normal text-slate-400">/ 5</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                  Player Satisfaction
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  45+
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                  ICC & County Coaches
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sophisticated Sports Academy Telemetry HUD Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-cyan-500/30 blur-xl opacity-70" />

              {/* Main Telemetry Terminal Card */}
              <div className="relative rounded-2xl bg-[#0b1322] border border-white/15 p-5 sm:p-6 shadow-2xl overflow-hidden backdrop-blur-xl">
                
                {/* HUD Top Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 font-semibold">
                      Live Telemetry • Oval High Performance Bay #02
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    240 FPS
                  </span>
                </div>

                {/* Primary Biomechanical Radar / Strike Zone Visual */}
                <div className="my-5 p-4 rounded-xl bg-[#060b13] border border-white/10 relative overflow-hidden">
                  
                  {/* Pitch Corridor & Trajectory Grid */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <Crosshair className="w-3.5 h-3.5" /> Impact Vector Map
                    </span>
                    <span className="text-slate-400">Contact Point: 0.18m in front of pad</span>
                  </div>

                  {/* SVG Biomechanics Radar & Bat Swing Arc */}
                  <div className="relative h-44 w-full flex items-center justify-center">
                    <svg
                      viewBox="0 0 360 170"
                      className="w-full h-full overflow-visible"
                    >
                      {/* Pitch corridor grid */}
                      <line x1="20" y1="140" x2="340" y2="140" stroke="#1e293b" strokeWidth="1.5" />
                      <line x1="20" y1="100" x2="340" y2="100" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="20" y1="60" x2="340" y2="60" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                      
                      {/* Vertical line coordinates */}
                      <line x1="70" y1="30" x2="70" y2="150" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
                      <line x1="180" y1="30" x2="180" y2="150" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4" />
                      <line x1="290" y1="30" x2="290" y2="150" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />

                      {/* Bat Path Arc (High-velocity downswing) */}
                      <path
                        d="M 50 25 C 100 45, 140 115, 180 120 C 220 125, 270 60, 310 35"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                      />

                      {/* Ball incoming path */}
                      <path
                        d="M 330 90 Q 230 110, 180 120"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        strokeDasharray="4 3"
                      />

                      {/* Impact Node */}
                      <circle cx="180" cy="120" r="7" fill="#10b981" />
                      <circle cx="180" cy="120" r="14" fill="#10b981" fillOpacity="0.2" className="animate-ping" />
                      
                      {/* Stumps symbol at crease */}
                      <rect x="62" y="95" width="4" height="45" fill="#64748b" rx="1" />
                      <rect x="69" y="95" width="4" height="45" fill="#64748b" rx="1" />
                      <rect x="76" y="95" width="4" height="45" fill="#64748b" rx="1" />
                      <rect x="60" y="92" width="22" height="3" fill="#cbd5e1" rx="1" />

                      {/* Labels */}
                      <text x="70" y="158" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="monospace">
                        CREASE
                      </text>
                      <text x="180" y="158" fill="#10b981" fontSize="9" textAnchor="middle" fontWeight="bold" fontFamily="monospace">
                        SWEET SPOT (122 km/h)
                      </text>
                      <text x="290" y="158" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="monospace">
                        DRIVE ARC
                      </text>
                    </svg>

                    {/* Overlay Tag */}
                    <div className="absolute top-2 right-2 bg-emerald-950/80 border border-emerald-500/40 text-[10px] text-emerald-300 font-mono px-2 py-0.5 rounded">
                      SEAM: 11.2° OUTSWING
                    </div>
                  </div>

                  {/* Realtime Speed Gauges */}
                  <div className="grid grid-cols-3 gap-2 mt-2 pt-3 border-t border-white/10">
                    <div className="text-center p-2 rounded-lg bg-white/[0.02]">
                      <div className="text-[10px] font-mono uppercase text-slate-400">Bat Speed</div>
                      <div className="text-base sm:text-lg font-bold text-white font-mono text-emerald-400">
                        121.8 <span className="text-[10px] font-normal text-slate-400">km/h</span>
                      </div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-white/[0.02]">
                      <div className="text-[10px] font-mono uppercase text-slate-400">Middle Ratio</div>
                      <div className="text-base sm:text-lg font-bold text-white font-mono text-cyan-400">
                        97.4%
                      </div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-white/[0.02]">
                      <div className="text-[10px] font-mono uppercase text-slate-400">Reaction Time</div>
                      <div className="text-base sm:text-lg font-bold text-white font-mono text-amber-400">
                        0.28s
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coach Telemetry Feedback Notification */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-200">
                        Master Coach AI & Bio-mechanist Review
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">OPTIMAL</span>
                    </div>
                    <p className="text-slate-400 mt-0.5 leading-relaxed">
                      &quot;Head stayed still through the swing plane. Bat face was 100% square through mid-off line.&quot;
                    </p>
                  </div>
                </div>

                {/* Sub badge footer */}
                <div className="flex items-center justify-between mt-4 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Drill 04/12 &bull; Weight Transfer Series
                  </span>
                  <span className="text-slate-400 font-mono">Module 2.4</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
