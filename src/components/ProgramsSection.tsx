import React, { useState } from 'react';
import { 
  ArrowRight, BookOpen, Check, Clock, Code, FileText, 
  GraduationCap, HelpCircle, Layers, Monitor, Sparkles, X 
} from 'lucide-react';
import { PROGRAMS, Program } from '../data/collegeData';

interface ProgramsSectionProps {
  onOpenEnquiry: (courseId: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenEnquiry }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'it' | 'commerce' | 'pre-university'>('all');
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  const filteredPrograms = selectedFilter === 'all' 
    ? PROGRAMS 
    : PROGRAMS.filter(p => p.category === selectedFilter);

  return (
    <section id="academics" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
              <span>Academic Programs</span>
              <span aria-hidden="true">·</span>
              <span>Undergraduate & Pre-University</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0b1f3f] tracking-tight">
              Degree & Career Pathways
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Curricula aligned with National Education Policy (NEP 2020), Koppal University standards, and AICTE technical norms.
            </p>
          </div>

          {/* Filter Controls (Allowed functional buttons as per Zero-Pill discipline) */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-md self-start md:self-auto text-xs font-medium">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-[#0f2b5c] text-white shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Courses
            </button>
            <button
              onClick={() => setSelectedFilter('it')}
              className={`px-3 py-1.5 rounded transition-colors ${
                selectedFilter === 'it'
                  ? 'bg-[#0f2b5c] text-white shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Computer Applications (BCA)
            </button>
            <button
              onClick={() => setSelectedFilter('commerce')}
              className={`px-3 py-1.5 rounded transition-colors ${
                selectedFilter === 'commerce'
                  ? 'bg-[#0f2b5c] text-white shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Commerce (B.Com)
            </button>
            <button
              onClick={() => setSelectedFilter('pre-university')}
              className={`px-3 py-1.5 rounded transition-colors ${
                selectedFilter === 'pre-university'
                  ? 'bg-[#0f2b5c] text-white shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pre-University (PUC)
            </button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPrograms.map((program) => {
            const isBCA = program.id === 'bca';
            return (
              <div
                key={program.id}
                className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
              >
                {/* Program Card Header */}
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-amber-700 uppercase tracking-wider">
                      {program.degree}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {program.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-serif text-[#0b1f3f] tracking-tight">
                    {program.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500 font-medium">
                    {program.affiliation} {program.approval && `· ${program.approval}`}
                  </p>

                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Eligibility Statement */}
                  <div className="mt-5 p-3.5 bg-slate-50 rounded-md border border-slate-150">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                      Official Eligibility Criteria:
                    </span>
                    <p className="text-xs text-slate-600 leading-normal">
                      {program.eligibility}
                    </p>
                  </div>

                  {/* Core Topics Highlights */}
                  <div className="mt-5">
                    <span className="text-xs font-semibold text-slate-800 block mb-2">
                      Key Curriculum Highlights:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                      {program.keySubjects.slice(0, 6).map((sub, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                          <span className="truncate">{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalProgram(program)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f2b5c] hover:text-blue-800 py-1"
                  >
                    <span>View Full Syllabus & Objectives</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(program.name)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors"
                  >
                    <span>Apply for {program.shortName}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Program Syllabus Modal */}
        {activeModalProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 p-6 sm:p-8 relative">
              <button
                onClick={() => setActiveModalProgram(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 transition-colors"
                aria-label="Close syllabus modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs text-amber-600 font-semibold uppercase tracking-wider mb-1">
                {activeModalProgram.degree}
              </div>
              <h3 className="text-2xl font-bold font-serif text-[#0b1f3f]">
                {activeModalProgram.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {activeModalProgram.affiliation} · {activeModalProgram.duration}
              </p>

              {/* Objectives */}
              <div className="mt-6">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 mb-2">
                  Academic Objectives:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {activeModalProgram.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Year-by-Year Syllabus Structure */}
              <div className="mt-6 space-y-4">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900">
                  Curriculum Architecture:
                </h4>
                {activeModalProgram.syllabusOverview.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-md bg-slate-50 border border-slate-200">
                    <span className="text-xs font-bold text-[#0f2b5c] block mb-1.5">
                      {item.year}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.topics.map((t, tidx) => (
                        <span key={tidx} className="text-[11px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Career Opportunities */}
              <div className="mt-6">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 mb-2">
                  Graduate Career Pathways:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProgram.careerProspects.map((cp, idx) => (
                    <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded">
                      {cp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProgram(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const prog = activeModalProgram.name;
                    setActiveModalProgram(null);
                    onOpenEnquiry(prog);
                  }}
                  className="px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors"
                >
                  Register / Enquire for this Course
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
