import React from 'react';
import { ArrowDown, ArrowRight, Award, CheckCircle2, ChevronDown, GraduationCap, MapPin } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface HeroProps {
  onOpenEnquiry: (course?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Campus Photograph with Refined Academic Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/kle/campus.jpg"
          alt="KLE College Gangavathi Academic Campus Building"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtleZoom opacity-35"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Elegant fallback gradient if image fails
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Subtle dark gradient scrim ensuring 4.5:1 text contrast across all devices */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#091a35]/80 to-[#0b1f3f]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-radial-vignette opacity-60" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
        
        {/* Institutional Heritage Kicker (No pill enclosures - clean unboxed typography) */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-amber-400 font-medium tracking-wider uppercase mb-5">
          <Award className="w-4 h-4 text-amber-400" />
          <span>K.L.E. Society Belagavi</span>
          <span className="text-slate-500">·</span>
          <span>Established 1916</span>
          <span className="text-slate-500">·</span>
          <span>108+ Years of Service</span>
        </div>

        {/* Institution Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight font-serif max-w-4xl leading-[1.15] text-balance">
          {COLLEGE_INFO.name}
        </h1>

        {/* Short Institutional Tagline */}
        <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-amber-300/90 tracking-wide">
          {COLLEGE_INFO.tagline}
        </p>

        {/* One Concise Supporting Statement */}
        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          Imparting quality higher education and fostering competent IT professionals, corporate leaders, and ethical entrepreneurs in Gangavathi, Koppal District.
        </p>

        {/* Verified Affiliation & Approval Signals */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-300">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Approved by AICTE, New Delhi</span>
          </div>
          <span className="hidden sm:inline text-slate-600">·</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Affiliated to Koppal University</span>
          </div>
          <span className="hidden sm:inline text-slate-600">·</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Koppal Road, Gangavathi</span>
          </div>
        </div>

        {/* Primary & Secondary Action CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <a
            href="#academics"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-md transition-all shadow-lg hover:shadow-amber-500/20"
          >
            <span>Explore Programs</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#admissions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-md transition-all backdrop-blur-sm"
          >
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>Admissions 2025–26</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-all"
          >
            <span>Contact Us</span>
          </a>
        </div>

        {/* Quick Highlights Counter Bar */}
        <div className="mt-14 w-full max-w-4xl pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {COLLEGE_INFO.verifiedStats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-amber-400/90 mt-1">
                {stat.label}
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll down to About section"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white flex flex-col items-center gap-1 transition-colors group"
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-amber-400">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-slate-400 group-hover:text-amber-400" />
      </a>
    </section>
  );
};
