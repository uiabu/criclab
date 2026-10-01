"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillCategories from "@/components/SkillCategories";
import HowItWorks from "@/components/HowItWorks";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import CoachingVideos from "@/components/CoachingVideos";
import ChallengesSection from "@/components/30DayChallenges";
import PlayerProgress from "@/components/PlayerProgress";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import AssessmentModal from "@/components/AssessmentModal";

export default function Home() {
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  const handleOpenAssessment = () => {
    setAssessmentOpen(true);
  };

  const handleCloseAssessment = () => {
    setAssessmentOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#060b13] text-slate-100 flex flex-col selection:bg-emerald-500/30 selection:text-white">
      {/* 1. Navbar */}
      <Navbar onOpenAssessment={handleOpenAssessment} />

      <main className="flex-1 flex flex-col">
        {/* 2. Hero */}
        <Hero onOpenAssessment={handleOpenAssessment} />

        {/* 3. Skill Categories */}
        <SkillCategories onOpenAssessment={handleOpenAssessment} />

        {/* 4. How CricketLab Works */}
        <HowItWorks onOpenAssessment={handleOpenAssessment} />

        {/* 5. Featured Training Programs */}
        <FeaturedPrograms onOpenAssessment={handleOpenAssessment} />

        {/* 6. Expert Coaching Videos */}
        <CoachingVideos />

        {/* 7. 30-Day Challenges */}
        <ChallengesSection onOpenAssessment={handleOpenAssessment} />

        {/* 8. Player Progress section */}
        <PlayerProgress />

        {/* 9. Testimonials */}
        <Testimonials />

        {/* 10. Pricing */}
        <Pricing onOpenAssessment={handleOpenAssessment} />

        {/* 11. Final CTA */}
        <FinalCTA onOpenAssessment={handleOpenAssessment} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Interactive Assessment Modal Dialog */}
      <AssessmentModal
        isOpen={assessmentOpen}
        onClose={handleCloseAssessment}
      />
    </div>
  );
}
