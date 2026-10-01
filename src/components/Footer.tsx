"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#03060c] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10 items-start">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-slate-950 fill-current"
                >
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M4.93 4.93c4.2 4.2 4.2 9.94 0 14.14M19.07 4.93c-4.2 4.2-4.2 9.94 0 14.14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                  />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  Cricket<span className="text-emerald-400">Lab</span>
                </span>
                <span className="text-[10px] tracking-widest font-semibold uppercase text-emerald-400/80 -mt-1">
                  High Performance Academy
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The premier online cricket performance academy. Transforming aspiring cricketers
              worldwide with elite coaching curricula, slow-motion biomechanics, and deliberate net practice.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Coaching Telemetry & Video Vaults Active</span>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/50 border border-white/10 p-6 sm:p-8">
            <div className="max-w-md">
              <h4 className="text-base font-bold text-white mb-1">
                Get Weekly Pro Drills & Biomechanical Breakdowns
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">
                Join 38,000+ cricketers receiving weekly net routines, video drills, and tactical advice from international coaches.
              </p>

              {subscribed ? (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Welcome to CricketLab! Check your inbox for your first 3 net drills.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      className="w-full bg-[#060b13] border border-white/15 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-500/20"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10 text-xs sm:text-sm">
          <div>
            <h5 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">
              Academy
            </h5>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#programs" className="hover:text-emerald-400 transition-colors">Training Programs</a></li>
              <li><a href="#coaches" className="hover:text-emerald-400 transition-colors">Video Masterclasses</a></li>
              <li><a href="#challenges" className="hover:text-emerald-400 transition-colors">30-Day Challenges</a></li>
              <li><a href="#skills" className="hover:text-emerald-400 transition-colors">Biomechanics Lab</a></li>
              <li><a href="#coaches" className="hover:text-emerald-400 transition-colors">Master Coaches Roster</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">
              Skills
            </h5>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#skills" className="hover:text-emerald-400 transition-colors">Batting Strokes & Power</a></li>
              <li><a href="#skills" className="hover:text-emerald-400 transition-colors">Fast Bowling Velocity</a></li>
              <li><a href="#skills" className="hover:text-emerald-400 transition-colors">Spin Bowling Variations</a></li>
              <li><a href="#skills" className="hover:text-emerald-400 transition-colors">Fielding & Catching Reflexes</a></li>
              <li><a href="#skills" className="hover:text-emerald-400 transition-colors">Wicketkeeping Glovework</a></li>
              <li><a href="#skills" className="hover:text-emerald-400 transition-colors">Cricket Mental Skills</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">
              Resources
            </h5>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#programs" className="hover:text-emerald-400 transition-colors">Solo Net Drill Sheets</a></li>
              <li><a href="#challenges" className="hover:text-emerald-400 transition-colors">Bat Speed Target Calculator</a></li>
              <li><a href="#challenges" className="hover:text-emerald-400 transition-colors">Yorker Precision Floor Mats</a></li>
              <li><a href="#coaches" className="hover:text-emerald-400 transition-colors">Academy Journal & Insights</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Junior Scholarships</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">
              Company & Legal
            </h5>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About CricketLab</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Affiliated Cricket Boards</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Coach Certification Program</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Accreditation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} CricketLab High Performance Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Designed for Cricketers Worldwide</span>
            <span>&bull;</span>
            <span className="text-slate-400">ISO 9001 Sports Tech Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
