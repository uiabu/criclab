"use client";

import { useState } from "react";
import { Check, Sparkles, Shield, ArrowRight } from "lucide-react";
import { PRICING_PLANS } from "@/data/cricketData";

interface PricingProps {
  onOpenAssessment?: () => void;
}

export default function Pricing({ onOpenAssessment }: PricingProps) {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("annual");

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#040810] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Membership & Access</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Transparent Academy Pricing
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Invest in your cricket future with world-class coaching for less than the cost of a single private net session.
          </p>

          {/* Monthly / Annual Billing Toggle */}
          <div className="flex items-center gap-3 mt-8 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10">
            <button
              type="button"
              onClick={() => setBillingPeriod("monthly")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                billingPeriod === "monthly"
                  ? "bg-emerald-400 text-slate-950 shadow-md shadow-emerald-400/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingPeriod("annual")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                billingPeriod === "annual"
                  ? "bg-emerald-400 text-slate-950 shadow-md shadow-emerald-400/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                billingPeriod === "annual" ? "bg-slate-950 text-emerald-400 font-bold" : "bg-emerald-500/20 text-emerald-400"
              }`}>
                SAVE 25%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = billingPeriod === "annual" ? plan.priceAnnualMonthly : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? "bg-[#0b1322] border-2 border-emerald-400 shadow-2xl shadow-emerald-500/20 lg:-translate-y-2"
                    : "bg-slate-900/60 border border-white/10 hover:border-white/20"
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 min-h-[40px] leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-white">$</span>
                      <span className="text-5xl font-extrabold text-white tracking-tight font-mono">
                        {price}
                      </span>
                      <span className="text-slate-400 text-sm font-medium">/ month</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1 font-mono">
                      {billingPeriod === "annual" ? "Billed annually (\$ " + price * 12 + "/yr)" : "Billed monthly, cancel anytime"}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                      What&apos;s Included:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-emerald-400" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={onOpenAssessment}
                  className={`w-full py-3.5 px-6 rounded-xl text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    plan.popular
                      ? "bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 hover:from-emerald-300 hover:to-teal-300 shadow-lg shadow-emerald-500/25"
                      : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 max-w-2xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <Shield className="w-4 h-4" />
            <span>14-Day Full Money-Back Guarantee</span>
          </div>
          <span className="hidden sm:inline">&bull;</span>
          <span>No long-term contracts &bull; Cancel anytime with one click</span>
        </div>

      </div>
    </section>
  );
}
