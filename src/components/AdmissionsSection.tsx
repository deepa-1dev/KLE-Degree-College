import React, { useState } from 'react';
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, 
  Download, FileCheck, FileText, HelpCircle, 
  Info, PhoneCall, Sparkles 
} from 'lucide-react';
import { 
  ADMISSION_PROCESS_STEPS, COLLEGE_INFO, 
  FAQS, REQUIRED_DOCUMENTS 
} from '../data/collegeData';

interface AdmissionsSectionProps {
  onOpenEnquiry: () => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({ onOpenEnquiry }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="admissions" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            <span>Admission Information</span>
            <span aria-hidden="true">·</span>
            <span>Academic Session 2025–26 & 2026–27</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0b1f3f] tracking-tight">
            Start Your Academic Journey at KLE Gangavathi
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Transparent, merit-based admission guidelines for undergraduate BCA & B.Com programs affiliated to Koppal University and approved by AICTE.
          </p>
        </div>

        {/* 4-Step Admission Journey Flow */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-wider font-bold text-slate-900 block mb-6">
            Four-Step Enrollment Process
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADMISSION_PROCESS_STEPS.map((step, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-lg bg-slate-50 border border-slate-200 relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-serif font-bold text-amber-600 block mb-3 tabular-nums">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold font-serif text-[#0b1f3f] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column Grid: Required Documents Checklist (Left) + FAQ & Support (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Required Documents Checklist */}
          <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2.5 mb-4">
              <FileCheck className="w-5 h-5 text-[#0f2b5c]" />
              <h3 className="text-xl font-bold font-serif text-[#0b1f3f]">
                Mandatory Documents for Verification
              </h3>
            </div>
            <p className="text-xs text-slate-600 mb-6">
              Please carry original copies along with 3 sets of self-attested photocopies during your campus counseling appointment:
            </p>

            <ul className="space-y-3">
              {REQUIRED_DOCUMENTS.map((doc, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-600">
                <span className="font-semibold block text-slate-900">Admission Office Hours:</span>
                <span>Mon – Sat: 8:00 AM – 5:00 PM</span>
              </div>
              <a
                href="tel:+919483482741"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f2b5c] hover:text-blue-800"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Admission Desk</span>
              </a>
            </div>
          </div>

          {/* Right Column: Admission FAQs Accordion */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-amber-600" />
              <h3 className="text-xl font-bold font-serif text-[#0b1f3f]">
                Frequently Asked Admission Questions
              </h3>
            </div>
            
            <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg overflow-hidden bg-white">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className="transition-colors">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
                    >
                      <span className="text-sm font-semibold text-slate-900">
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-600' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-5 pt-1 sm:px-5 text-xs text-slate-600 leading-relaxed bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Fee Policy Transparency Notice */}
            <div className="p-4 rounded-md bg-amber-50/60 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <p>
                <strong>Fee Policy Note:</strong> In accordance with ethical standards, the course fees are structured transparently as per Koppal University and Karnataka State Higher Education norms. For the exact current semester schedule and installment options, please consult the college office.
              </p>
            </div>
          </div>

        </div>

        {/* Focal Carrier Action Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-lg bg-[#0b1f3f] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs uppercase tracking-wider font-bold text-amber-400 block mb-1">
              Direct Campus Admission Window
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight">
              Start Your Admission Journey Today
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Submit your preliminary details online to receive immediate counseling callback and reserve your counseling session with our department mentors.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-all shadow-md"
            >
              Start Admission Journey
            </button>
            <a
              href="tel:+919483482741"
              className="w-full sm:w-auto px-5 py-3.5 text-xs uppercase tracking-wider font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-md transition-all text-center"
            >
              Helpline: +91 94834 82741
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
