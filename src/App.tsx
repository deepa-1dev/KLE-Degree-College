/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { BookingSystem } from './components/BookingSystem';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FacilitiesSection } from './components/FacilitiesSection';
import { StudentLifeAndAchievements } from './components/StudentLifeAndAchievements';
import { NoticesSection } from './components/NoticesSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { PromptStudioModal } from './components/PromptStudioModal';
import { SupabaseModal } from './components/SupabaseModal';
import { FileCode, Calendar, Sparkles, Database } from 'lucide-react';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [prefilledCourse, setPrefilledCourse] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPromptStudioOpen, setIsPromptStudioOpen] = useState(false);
  const [isSupabaseModalOpen, setIsSupabaseModalOpen] = useState(false);
  const [textSize, setTextSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  const handleOpenEnquiry = (course?: string) => {
    setPrefilledCourse(course || '');
    setIsEnquiryOpen(true);
  };

  const handleSelectSearchResult = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getTextSizeClass = () => {
    switch (textSize) {
      case 'large':
        return 'text-[1.05rem]';
      case 'xlarge':
        return 'text-[1.12rem]';
      default:
        return 'text-base';
    }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 text-slate-900 transition-all ${getTextSizeClass()}`}>
      
      {/* Navbar with 3-Zone Contract, Top Announcement Bar, and Accessibility Controls */}
      <Navbar
        onOpenEnquiry={handleOpenEnquiry}
        onOpenSearch={() => setIsSearchOpen(true)}
        textSize={textSize}
        onChangeTextSize={setTextSize}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section with authentic campus photo and institutional credentials */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* About Section: History, Vision, Mission, & Leadership (Principal & Chairman) */}
        <AboutSection />

        {/* Academic Programs: BCA, B.Com, PUC with detailed syllabus modal */}
        <ProgramsSection onOpenEnquiry={handleOpenEnquiry} />

        {/* Admissions Section: 4-step process, documents checklist, FAQs, and policy */}
        <AdmissionsSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Interactive Campus Appointment Booking Funnel with Calendar Sync and Supabase save */}
        <BookingSystem 
          onOpenSupabaseModal={() => setIsSupabaseModalOpen(true)}
        />

        {/* Why Choose Us: Verified quantitative metrics and 6 institutional pillars */}
        <WhyChooseUs />

        {/* Campus & Facilities: Authentic photo gallery and interactive Lightbox */}
        <FacilitiesSection />

        {/* Student Life & Milestones Timeline */}
        <StudentLifeAndAchievements />

        {/* Official Notice Board with downloadable AICTE approval letter */}
        <NoticesSection />

        {/* Full Image Gallery */}
        <GallerySection />

        {/* Contact Section: Verified details, Google Maps embed & directions */}
        <ContactSection onOpenEnquiry={() => handleOpenEnquiry()} />
      </main>

      {/* Multi-Column Collegiate Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Modals */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        prefilledCourse={prefilledCourse}
      />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSelectSearchResult}
      />

      <PromptStudioModal
        isOpen={isPromptStudioOpen}
        onClose={() => setIsPromptStudioOpen(false)}
      />

      <SupabaseModal
        isOpen={isSupabaseModalOpen}
        onClose={() => setIsSupabaseModalOpen(false)}
      />

      {/* Floating Action Button Bar */}
      <aside aria-label="Quick Actions" className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <button
          onClick={() => setIsSupabaseModalOpen(true)}
          className="px-4 py-2.5 rounded-full bg-emerald-700 text-white hover:bg-emerald-600 text-xs font-bold uppercase tracking-wider shadow-xl border border-emerald-500/50 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all group"
          title="Supabase Database Status & Live Records"
        >
          <Database className="w-4 h-4 text-emerald-200 group-hover:rotate-12 transition-transform" />
          <span>Supabase Sync</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </button>

        <button
          onClick={() => setIsPromptStudioOpen(true)}
          className="px-4 py-2.5 rounded-full bg-[#0b1f3f] text-white hover:bg-[#0f2b5c] text-xs font-bold uppercase tracking-wider shadow-xl border border-slate-700/80 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all group"
          title="Open Complete Ready-to-Use Prompt & Business Audit"
        >
          <FileCode className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
          <span>Client Prompt & Business Audit</span>
        </button>

        <a
          href="#booking-system"
          className="px-4 py-2.5 rounded-full bg-amber-500 text-slate-950 hover:bg-amber-400 text-xs font-bold uppercase tracking-wider shadow-xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Campus Visit</span>
        </a>
      </aside>

    </div>
  );
}
