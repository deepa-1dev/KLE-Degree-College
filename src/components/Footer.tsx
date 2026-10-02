import React from 'react';
import { 
  ArrowUp, Award, ExternalLink, FileText, 
  Mail, MapPin, Phone, ShieldCheck 
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface FooterProps {
  onOpenEnquiry: (course?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071326] text-slate-300 border-t border-slate-800 text-xs">
      {/* Top Footer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-800">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-wider font-bold text-amber-400">
              K.L.E. Society Belagavi · Established 1916
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              {COLLEGE_INFO.name}
            </h3>
            <p className="text-xs text-slate-400 max-w-xl">
              Affiliated to Koppal University · Approved by AICTE, New Delhi · Koppal Road, Gangavathi - 583235.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded transition-colors"
            >
              Start Admission Enquiry
            </button>
            <a
              href="tel:+919483482741"
              className="px-4 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors"
            >
              Call: +91 94834 82741
            </a>
          </div>
        </div>
      </div>

      {/* Main 5-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Institution Branding & Heritage */}
          <div className="space-y-4 lg:col-span-1">
            <div className="bg-white p-2 rounded max-w-[200px]">
              <img
                src="/images/kle/logo.png"
                alt="KLE Society's College Gangavathi Logo"
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Established to groom competent IT professionals and commerce leaders with a strong foundation of ethical values.
            </p>
            <div className="text-[11px] text-amber-400/90 font-medium">
              Motto: "Work is Worship (Kayakave Kailasa)"
            </div>
          </div>

          {/* Column 2: Quick Institutional Links */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-wider font-bold text-white block">
              About College
            </span>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">College Profile</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About K.L.E. Society</a></li>
              <li><a href="#leadership" className="hover:text-amber-400 transition-colors">Principal's Desk</a></li>
              <li><a href="#leadership" className="hover:text-amber-400 transition-colors">Chairman's Message</a></li>
              <li><a href="#achievements" className="hover:text-amber-400 transition-colors">Milestones & History</a></li>
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-wider font-bold text-white block">
              Academics & Courses
            </span>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#academics" className="hover:text-amber-400 transition-colors">Bachelor of Computer Applications (BCA)</a></li>
              <li><a href="#academics" className="hover:text-amber-400 transition-colors">Bachelor of Commerce (B.Com)</a></li>
              <li><a href="#academics" className="hover:text-amber-400 transition-colors">Pre-University Science & Commerce</a></li>
              <li><a href="#facilities" className="hover:text-amber-400 transition-colors">Computer Laboratories</a></li>
              <li><a href="/documents/AICTE-Approval-Letter-KLE-Gangavathi.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors inline-flex items-center gap-1">AICTE Approval Letter <ExternalLink className="w-3 h-3 text-slate-500" /></a></li>
            </ul>
          </div>

          {/* Column 4: Admissions & Student Support */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-wider font-bold text-white block">
              Admissions & Welfare
            </span>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#admissions" className="hover:text-amber-400 transition-colors">Admission Process 2025–26</a></li>
              <li><a href="#admissions" className="hover:text-amber-400 transition-colors">Required Documents</a></li>
              <li><a href="#notices" className="hover:text-amber-400 transition-colors">College Circulars & Notices</a></li>
              <li><a href="#facilities" className="hover:text-amber-400 transition-colors">Bus Transit Routes</a></li>
              <li><a href="#notices" className="hover:text-amber-400 transition-colors">SSP / NSP Scholarship Help</a></li>
            </ul>
          </div>

          {/* Column 5: Campus Address & Official Contact */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-wider font-bold text-white block">
              Campus Contact
            </span>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>KLE Campus, Koppal Road, Vaddarahatti – Gangavathi - 583235</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="tel:+919483482741" className="hover:text-white">+91 94834 82741</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="mailto:klesbcagvt@gmail.com" className="hover:text-white">klesbcagvt@gmail.com</a>
              </div>
              <div className="pt-2">
                <a
                  href={COLLEGE_INFO.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright and Legal Bar */}
      <div className="bg-[#050e1a] border-t border-slate-800/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} KLE Society's College of Commerce & BCA, Gangavathi. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Affiliated to Koppal University</span>
            <span>·</span>
            <span>AICTE Approved</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="text-amber-400 hover:text-white inline-flex items-center gap-1 transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
