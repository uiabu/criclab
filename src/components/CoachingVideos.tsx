"use client";

import { useState } from "react";
import { 
  Play, 
  Clock, 
  Eye, 
  X, 
  Download, 
  CheckCircle, 
  Sparkles, 
  Volume2, 
  Maximize2,
  Film
} from "lucide-react";
import { COACHING_VIDEOS, CoachingVideo } from "@/data/cricketData";

export default function CoachingVideos() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeVideo, setActiveVideo] = useState<CoachingVideo | null>(null);

  const categories = ["All", "Batting", "Bowling", "Wicketkeeping", "Mental Skills"];

  const filteredVideos =
    selectedCategory === "All"
      ? COACHING_VIDEOS
      : COACHING_VIDEOS.filter((v) => v.category === selectedCategory);

  return (
    <section id="coaches" className="py-20 md:py-28 bg-[#040810] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>On-Demand Masterclass Library</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Expert Coaching Videos
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
              Deconstructed technique filmed in 4K at 240 frames-per-second.
              Watch international specialists explain the micro-adjustments that transform your game.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-emerald-400 text-slate-950 font-bold shadow-md shadow-emerald-400/20"
                    : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="rounded-2xl bg-slate-900/60 border border-white/10 hover:border-emerald-500/40 transition-all duration-200 overflow-hidden group cursor-pointer flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/30"
            >
              <div>
                {/* Simulated High-Res Video Thumbnail */}
                <div className="relative aspect-video bg-[#070d18] flex items-center justify-center overflow-hidden border-b border-white/5">
                  {/* Subtle technical background grid */}
                  <div className="absolute inset-0 stadium-grid opacity-20" />
                  
                  {/* Subject Tag in thumbnail */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-emerald-300 border border-white/10">
                    {video.thumbnailTopic}
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-mono text-white flex items-center gap-1 border border-white/10">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    <span>{video.duration}</span>
                  </div>

                  {/* Play Button Overlay with Pulse */}
                  <div className="w-13 h-13 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/40 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Video Info Body */}
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="text-emerald-400 font-semibold">{video.category}</span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> {video.views}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 leading-snug">
                    {video.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {video.keyTakeaway}
                  </p>
                </div>
              </div>

              {/* Coach Footer */}
              <div className="px-5 pb-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-300 font-medium">{video.coach}</span>
                <span className="text-slate-400">{video.coachRole}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Video Player Modal */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-4xl bg-[#090f1d] border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Film className="w-4 h-4" />
                  <span>MASTERCLASS PLAYER // 4K 240FPS</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player Display Screen */}
              <div className="relative aspect-video bg-black flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <div className="text-xs font-mono text-emerald-400 font-bold">
                      {activeVideo.thumbnailTopic}
                    </div>
                    <div className="text-sm font-bold text-white">{activeVideo.coach}</div>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2.5 py-1 rounded font-mono border border-emerald-500/30">
                    SLOW-MO ACTIVE
                  </span>
                </div>

                {/* Center playback indicator */}
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-500/50 mb-3 animate-pulse">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                  <p className="text-sm text-slate-300 font-medium max-w-md">
                    Click to stream full masterclass & high-speed camera sequence
                  </p>
                </div>

                {/* Bottom Scrub Bar & Controls */}
                <div>
                  <div className="w-full h-1.5 bg-white/20 rounded-full mb-3 overflow-hidden cursor-pointer">
                    <div className="h-full bg-emerald-400 w-1/3 rounded-full" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-3">
                      <Play className="w-4 h-4 text-white" />
                      <Volume2 className="w-4 h-4 text-white" />
                      <span>04:12 / {activeVideo.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>1080p60</span>
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Details & Action Bar */}
              <div className="p-6 bg-slate-900/90">
                <h3 className="text-lg font-bold text-white mb-2">{activeVideo.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {activeVideo.keyTakeaway}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Includes PDF Net Drill Sheet & Checkpoint Card</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveVideo(null)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Drill Companion</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
