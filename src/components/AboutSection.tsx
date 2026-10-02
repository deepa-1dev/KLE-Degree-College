import React, { useState } from 'react';
import { Award, BookOpen, Check, ChevronRight, Compass, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

export const AboutSection: React.FC = () => {
  const [activeLeaderTab, setActiveLeaderTab] = useState<'principal' | 'chairman'>('principal');

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            <span>Institutional Profile</span>
            <span aria-hidden="true">·</span>
            <span>Estd. Under K.L.E. Society Belagavi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0b1f3f] tracking-tight">
            Nurturing Ethical Intellect & Practical Excellence
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            KLE Society's College in Gangavathi, Koppal District, provides an inspiring ecosystem for technical and commercial studies, grooming ambitious students into competent IT professionals, accounting specialists, and ethical entrepreneurs.
          </p>
        </div>

        {/* Split Layout: Authentic Photo (Left) + Detailed Institution Narrative (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Authentic College Campus Photograph */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-lg overflow-hidden shadow-lg border border-slate-200 bg-slate-100 group">
              <img
                src="/images/kle/campus.jpg"
                alt="KLE Society's College Campus Building, Koppal Road, Gangavathi"
                className="w-full h-80 sm:h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-medium text-amber-400">Campus Facility</span>
                <p className="text-sm font-semibold">KLE Campus, Koppal Road, Gangavathi - 583235</p>
              </div>
            </div>

            {/* Quick Supporting Visual Card */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-md border border-slate-200 bg-slate-50">
                <span className="text-xs uppercase tracking-wider font-bold text-[#0f2b5c] block">
                  K.L.E. Legacy
                </span>
                <p className="mt-1 text-xs text-slate-600">
                  Rooted in 108+ years of selfless educational devotion since 1916.
                </p>
              </div>
              <div className="p-4 rounded-md border border-slate-200 bg-slate-50">
                <span className="text-xs uppercase tracking-wider font-bold text-[#0f2b5c] block">
                  Koppal University
                </span>
                <p className="mt-1 text-xs text-slate-600">
                  Affiliated degree programs with NEP 2020 curriculum rigor.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Educational Vision, Mission, & Core Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Vision & Mission Blocks */}
            <div className="space-y-4">
              <div className="border-l-2 border-amber-500 pl-4">
                <span className="text-xs uppercase tracking-wider font-bold text-amber-600 block">
                  Educational Vision
                </span>
                <p className="mt-1 text-sm text-slate-700 leading-relaxed font-medium">
                  "To expand the horizons of teaching and learning realms wherein the students' interpersonal and intra-personal disposition is groomed with human values, professional ethics, and global competence."
                </p>
              </div>

              <div className="border-l-2 border-[#0f2b5c] pl-4">
                <span className="text-xs uppercase tracking-wider font-bold text-[#0f2b5c] block">
                  Academic Mission
                </span>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  "To provide a dynamic ecosystem for study, research, and professional growth in IT and Commerce. We believe that theoretical knowledge supported by ample in-depth practical exposure is essential to shape the next generation of IT professionals and financial leaders with employable skills."
                </p>
              </div>
            </div>

            {/* Key Institutional Highlights */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-900 block mb-3">
                Key Documented Highlights
              </span>
              <ul className="space-y-2 text-sm text-slate-600">
                {COLLEGE_INFO.highlights.slice(0, 5).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#academics"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs uppercase tracking-wider font-bold text-white bg-[#0f2b5c] hover:bg-[#1e3a8a] rounded-md transition-colors"
              >
                <span>View Degree Courses</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#leadership"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs uppercase tracking-wider font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
              >
                <span>Meet Academic Leadership</span>
              </a>
            </div>

          </div>
        </div>

        {/* Leadership Spotlight Section */}
        <div id="leadership" className="mt-20 pt-16 border-t border-slate-200">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-1">
              <span>Academic Governance</span>
              <span aria-hidden="true">·</span>
              <span>Visionary Leadership</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#0b1f3f]">
              Guiding Minds Behind the Institution
            </h3>
          </div>

          {/* Interactive Leader Switcher */}
          <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-2">
            <button
              onClick={() => setActiveLeaderTab('principal')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-bold transition-all relative ${
                activeLeaderTab === 'principal' 
                  ? 'text-[#0f2b5c]' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Principal's Desk (Dr. Manasa D. A.)
              {activeLeaderTab === 'principal' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveLeaderTab('chairman')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-bold transition-all relative ${
                activeLeaderTab === 'chairman' 
                  ? 'text-[#0f2b5c]' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Chairman's Message (Dr. Prabhakar Kore)
              {activeLeaderTab === 'chairman' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
              )}
            </button>
          </div>

          {/* Leader Card */}
          {activeLeaderTab === 'principal' ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-50 p-6 sm:p-8 rounded-lg border border-slate-200 items-center">
              <div className="md:col-span-4 lg:col-span-3">
                <div className="relative rounded-md overflow-hidden border border-slate-300 shadow-sm max-w-[240px] mx-auto md:mx-0">
                  <img
                    src={COLLEGE_INFO.principal.image}
                    alt={COLLEGE_INFO.principal.name}
                    className="w-full h-auto object-cover aspect-square"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-2 text-center bg-white border-t border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block">{COLLEGE_INFO.principal.name}</span>
                    <span className="text-[11px] text-slate-500">{COLLEGE_INFO.principal.title}</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-8 lg:col-span-9 space-y-3">
                <div className="flex items-center gap-2 text-xs text-amber-600 font-semibold uppercase tracking-wider">
                  <UserCheck className="w-4 h-4" />
                  <span>Principal's Desk</span>
                </div>
                <h4 className="text-xl font-bold font-serif text-[#0b1f3f]">
                  "Empowering Students for Tomorrow's Technological & Corporate Challenges"
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {COLLEGE_INFO.principal.message}
                </p>
                <div className="pt-2 text-xs text-slate-500 flex flex-wrap gap-4">
                  <span><strong>Institution:</strong> {COLLEGE_INFO.principal.institution}</span>
                  <span><strong>Contact:</strong> klesbcagvt@gmail.com</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-50 p-6 sm:p-8 rounded-lg border border-slate-200 items-center">
              <div className="md:col-span-4 lg:col-span-3">
                <div className="relative rounded-md overflow-hidden border border-slate-300 shadow-sm max-w-[240px] mx-auto md:mx-0">
                  <img
                    src={COLLEGE_INFO.chairman.image}
                    alt={COLLEGE_INFO.chairman.name}
                    className="w-full h-auto object-cover aspect-[4/3]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-2 text-center bg-white border-t border-slate-200">
                    <span className="text-xs font-bold text-slate-900 block">{COLLEGE_INFO.chairman.name}</span>
                    <span className="text-[11px] text-slate-500">{COLLEGE_INFO.chairman.designation}</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-8 lg:col-span-9 space-y-3">
                <div className="flex items-center gap-2 text-xs text-amber-600 font-semibold uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Chairman's Message · K.L.E. Society</span>
                </div>
                <h4 className="text-xl font-bold font-serif text-[#0b1f3f]">
                  "A Century-Old Missionary Zeal for Quality Education"
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {COLLEGE_INFO.chairman.message}
                </p>
                <div className="pt-2 text-xs text-slate-500">
                  <span><strong>Chairman:</strong> Dr. Prabhakar Kore, M.P. (Rajya Sabha), Chancellor of KLE University Belagavi</span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
