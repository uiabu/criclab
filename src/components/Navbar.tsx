"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles, 
  Activity, 
  ShieldCheck,
  Compass
} from "lucide-react";

interface NavbarProps {
  onOpenAssessment?: () => void;
}

export default function Navbar({ onOpenAssessment }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Learn", href: "#skills" },
    { name: "Training Programs", href: "#programs" },
    { name: "Coaches", href: "#coaches" },
    { name: "Challenges", href: "#challenges" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060b13]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-emerald-950/20 py-3.5"
          : "bg-transparent border-b border-white/5 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition-transform duration-200">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-slate-950 fill-current"
              >
                {/* Stylized cricket ball seam & wicket angle */}
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
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                Cricket<span className="text-emerald-400">Lab</span>
              </span>
              <span className="text-[10px] tracking-widest font-semibold uppercase text-emerald-400/80 -mt-1">
                High Performance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-5 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.08] rounded-full transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenAssessment}
              className="text-sm font-medium text-slate-300 hover:text-white px-3.5 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              Login
            </button>
            <button
              type="button"
              onClick={onOpenAssessment}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 transition-all duration-200 shadow-md shadow-emerald-500/25 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Start Training</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenAssessment}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-950 bg-emerald-400"
            >
              Start
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0a101d] border-b border-white/10 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-4 mt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssessment?.();
              }}
              className="w-full text-center py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-white/5 rounded-xl"
            >
              Player Login
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssessment?.();
              }}
              className="w-full py-3 rounded-xl text-center text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-emerald-500 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <Sparkles className="w-4 h-4" />
              Start Free Assessment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
