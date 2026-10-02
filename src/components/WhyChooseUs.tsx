import React from 'react';
import { 
  Award, BookOpen, Bus, CheckCircle2, 
  GraduationCap, Monitor, ShieldCheck, Sparkles, Users 
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

export const WhyChooseUs: React.FC = () => {
  const verifiedPillars = [
    {
      title: "108-Year Educational Heritage",
      desc: "Managed by the K.L.E. Society Belagavi, founded in 1916 by the historic Saptarishis, ensuring trustworthy academic governance and time-tested values.",
      icon: Award,
    },
    {
      title: "AICTE Approved Technical Excellence",
      desc: "The Department of Computer Applications holds formal Letter of Approval (LoA) from the All India Council for Technical Education, New Delhi.",
      icon: ShieldCheck,
    },
    {
      title: "Wi-Fi Enabled Computing Laboratories",
      desc: "Modern computer laboratory with high-speed internet and practical software development environments for C, Java, Python, and Web Technologies.",
      icon: Monitor,
    },
    {
      title: "Dedicated College Bus Transit",
      desc: "Fleet of college buses providing safe, reliable, and punctual transit covering Gangavathi, Koppal Road, and key rural villages.",
      icon: Bus,
    },
    {
      title: "Faculty Mentorship & Guided Study Hours",
      desc: "Structured guided study sessions under personal oversight of qualified professors for doubt clearance and intensive examination preparation.",
      icon: Users,
    },
    {
      title: "Non-Disturbance Learning Environment",
      desc: "A purpose-built academic campus away from urban congestion, surrounded by calm greenery on Koppal Road, Vaddarahatti.",
      icon: BookOpen,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0b1f3f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>Institutional Strengths</span>
            <span aria-hidden="true">·</span>
            <span>Why Choose KLE Gangavathi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-white">
            Documented Strengths & Educational Heritage
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Combining over a century of institutional credibility with modern computing infrastructure and dedicated student mentorship in Gangavathi.
          </p>
        </div>

        {/* Verified Quantitative Figures (No fabricated numbers) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 pb-14 border-b border-slate-800">
          <div className="p-5 rounded-md bg-slate-900/60 border border-slate-800">
            <span className="text-3xl sm:text-4xl font-bold font-serif text-amber-400 tabular-nums">
              108+
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-200 block mt-2">
              Years of Society Legacy
            </span>
            <span className="text-[11px] text-slate-400 mt-1 block">
              Founded 1916 by Saptarishis
            </span>
          </div>

          <div className="p-5 rounded-md bg-slate-900/60 border border-slate-800">
            <span className="text-3xl sm:text-4xl font-bold font-serif text-amber-400 tabular-nums">
              270+
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-200 block mt-2">
              KLE Sister Institutions
            </span>
            <span className="text-[11px] text-slate-400 mt-1 block">
              Colleges & health campuses
            </span>
          </div>

          <div className="p-5 rounded-md bg-slate-900/60 border border-slate-800">
            <span className="text-3xl sm:text-4xl font-bold font-serif text-amber-400 tabular-nums">
              16,000+
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-200 block mt-2">
              KLE Society Educators
            </span>
            <span className="text-[11px] text-slate-400 mt-1 block">
              Mentoring 1,10,000+ learners
            </span>
          </div>

          <div className="p-5 rounded-md bg-slate-900/60 border border-slate-800">
            <span className="text-3xl sm:text-4xl font-bold font-serif text-amber-400">
              AICTE
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-200 block mt-2">
              National Approval
            </span>
            <span className="text-[11px] text-slate-400 mt-1 block">
              Formal LoA for BCA Degree
            </span>
          </div>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verifiedPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-lg bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold font-serif text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
