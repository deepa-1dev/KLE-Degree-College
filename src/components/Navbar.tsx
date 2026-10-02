import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Search, Phone, Mail, FileText, ChevronRight, 
  MapPin, Clock, ArrowUpRight, Award, ExternalLink, Type
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface NavbarProps {
  onOpenEnquiry: (prefilledCourse?: string) => void;
  onOpenSearch: () => void;
  textSize: 'normal' | 'large' | 'xlarge';
  onChangeTextSize: (size: 'normal' | 'large' | 'xlarge') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenEnquiry, 
  onOpenSearch,
  textSize,
  onChangeTextSize
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'academics', 'admissions', 'facilities', 'notices', 'gallery', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Academics', href: '#academics' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Events & Life', href: '#events' },
    { label: 'Notices', href: '#notices' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Institutional Notification & Utility Strip */}
      <div className="bg-[#0b1f3f] text-slate-200 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2">
          {/* Left: Quick Society & AICTE Badge */}
          <div className="flex items-center gap-3 text-slate-300">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-amber-400 font-medium">
              <Award className="w-3.5 h-3.5" />
              K.L.E. Society Belagavi (Estd. 1916)
            </span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span className="inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Admissions Open 2025–26 & 2026–27
            </span>
            <span className="text-slate-600 hidden md:inline">·</span>
            <span className="hidden md:inline text-slate-400">
              Affiliated to Koppal University | AICTE Approved
            </span>
          </div>

          {/* Right: Helpline & Accessibility Controls */}
          <div className="flex items-center gap-4 ml-auto">
            <a 
              href="tel:+919483482741" 
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span className="font-mono tabular-nums">+91 94834 82741</span>
            </a>

            <div className="hidden lg:flex items-center gap-1.5 pl-3 border-l border-slate-700 text-[11px]">
              <span className="text-slate-400">Text:</span>
              <button 
                onClick={() => onChangeTextSize('normal')}
                className={`px-1.5 py-0.5 rounded transition-colors ${textSize === 'normal' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                title="Normal text size"
              >
                A
              </button>
              <button 
                onClick={() => onChangeTextSize('large')}
                className={`px-1.5 py-0.5 rounded text-xs transition-colors ${textSize === 'large' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                title="Large text size"
              >
                A+
              </button>
              <button 
                onClick={() => onChangeTextSize('xlarge')}
                className={`px-1.5 py-0.5 rounded text-sm transition-colors ${textSize === 'xlarge' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                title="Extra large text size"
              >
                A++
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-2.5' 
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Zone 1: Authentic Brand Wordmark / Emblem Lockup */}
            <a 
              href="#home" 
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
            >
              <img 
                src="/images/kle/logo.png" 
                alt="KLE Society's College of Commerce & BCA Gangavathi" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
                onError={(e) => {
                  // Fallback container in case the image fails
                  e.currentTarget.style.display = 'none';
                  const fb = document.getElementById('navbar-brand-fallback');
                  if (fb) fb.style.display = 'flex';
                }}
              />
              <div id="navbar-brand-fallback" className="hidden flex-col">
                <span className="font-serif text-base sm:text-lg font-bold text-[#0b1f3f] tracking-tight leading-tight">
                  KLE COLLEGE GANGAVATHI
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  College of Commerce & Bachelor of Computer Applications
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Clean typography, no pill enclosures) */}
            <div className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium tracking-normal transition-colors relative py-1 ${
                      isActive 
                        ? 'text-[#0f2b5c] font-semibold' 
                        : 'text-slate-600 hover:text-[#0f2b5c]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Zone 3: Actions (Search & Apply Now) */}
            <div className="flex items-center gap-3">
              {/* Global Search Trigger */}
              <button
                onClick={onOpenSearch}
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label="Search website"
                title="Search website (Ctrl + K)"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Primary Apply CTA */}
              <button
                onClick={() => onOpenEnquiry()}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-md transition-all shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <span>Apply / Enquire</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col divide-y divide-slate-100 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 font-medium text-slate-800 hover:text-blue-900 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 text-center text-xs uppercase tracking-wider font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors"
              >
                Start Admission Enquiry
              </button>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href="tel:+919483482741"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>Call Campus</span>
                </a>
                <a
                  href={`https://wa.me/919483482741?text=Hello%20KLE%20College%20Gangavathi%20I%20am%20interested%20in%20Admission`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-md font-medium"
                >
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
