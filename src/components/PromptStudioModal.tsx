import React, { useState } from 'react';
import { 
  Check, Copy, Download, ExternalLink, FileCode, 
  MapPin, Sparkles, Terminal, X 
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface PromptStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromptStudioModal: React.FC<PromptStudioModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'prompt' | 'audit'>('prompt');

  if (!isOpen) return null;

  const masterPromptText = `You are a Principal Software Architect and Senior UI/UX Designer. Build a premium, modern, fully functional appointment booking and admissions counseling website for **KLE Society's College of Commerce & Bachelor of Computer Applications (BCA)**, Gangavathi, Karnataka.

### 1. Verified Business Profile & Identity
- **Business Name:** KLE Society's College of Commerce & Bachelor of Computer Applications (KLE Degree College Gangavathi)
- **Parent Sponsoring Body:** K.L.E. Society Belagavi (Estd. 1916 · 108+ Year Educational Legacy)
- **Category:** Higher Educational Institution / Degree College
- **Affiliation & Approvals:** Affiliated to Koppal University; Approved by All India Council for Technical Education (AICTE), New Delhi (LoA Granted)
- **Leadership:** Chairman Dr. Prabhakar Kore, M.P. (Rajya Sabha); Principal Dr. Manasa D. A.
- **Physical Address:** KLE Campus, Koppal Road, Dist. Koppal, Vaddarahatti – Gangavathi - 583235, Karnataka, India
- **Coordinates:** 15.4465693, 76.4970108
- **Google Maps Link:** https://maps.app.goo.gl/BfDGfAMWRgSVHheC9
- **Helpline / Phone:** +91 94834 82741 / +91 83962 20111
- **Official Emails:** klesbcagvt@gmail.com, klecommgvt@gmail.com
- **Operating Hours:** Monday to Saturday: 8:00 AM – 5:00 PM (Sunday Closed)

### 2. Verified Academic Programs & Services to Book
1. **1-on-1 Admission Counseling (BCA):** 3/4-Year Bachelor of Computer Applications under NEP 2020. Covers software engineering, programming in C/Java/Python, web technologies, and AICTE compliance.
2. **1-on-1 Admission Counseling (B.Com):** 3/4-Year Bachelor of Commerce (Estd. 2011). Covers corporate accounting, taxation, GST, auditing, and banking.
3. **Campus Guided Tour & Computer Lab Inspection:** In-person walk-through of the Wi-Fi enabled computer lab, central library, seminar hall, and peaceful non-disturbance campus grounds.
4. **Principal & HOD Academic Consultation:** Mentorship meeting with Principal Dr. Manasa D. A. or Department Heads for career trajectory guidance.
5. **Scholarship & Fee Concession Guidance:** Assistance with Karnataka State Scholarship Portal (SSP), Post-Matric schemes, and SC/ST/Cat-I fee concessions.
6. **College Bus Transit Route Registration:** Booking seat inquiries for college bus transit covering Gangavathi and surrounding feeder villages.

### 3. Visual Identity & Brand Constitution
- **Palette (60-30-10 Rule):**
  - Dominant Neutral (60%): Clean Slate/White (#ffffff, #f8fafc)
  - Structural Brand Navy (30%): Deep Collegiate Navy (#0b1f3f, #0f2b5c)
  - High-Intent Accent (10%): Academic Amber Gold (#d97706, #f59e0b)
- **Typography:** Display Serif (Cinzel / Georgia) for authoritative academic headings; Sans-serif (Plus Jakarta Sans) for clean body prose; Tabular numerals for dates/slots.
- **Anti-Slop Restraint:** No generic purple gradients, no floating pill tags, no fake telemetry tickers, no hallucinated statistics. Only verified numbers: 108+ Years of Society Legacy, 270+ Sister Institutions, 16,000+ Educators.

### 4. Core Functional Modules Required
1. **Interactive Multi-Step Booking Funnel:**
   - Step 1: Select Purpose (Admission Counseling, Lab Tour, Principal Consultation, Scholarship Desk).
   - Step 2: Choose Department & Officer (BCA Dept, B.Com Dept, Admissions Officer).
   - Step 3: Date & Slot Picker (Mon–Sat, 8:00 AM – 5:00 PM slots with real-time availability).
   - Step 4: Student & Parent Details (Name, Phone, WhatsApp opt-in, Email, Course of interest, Qualifying exam marks).
   - Step 5: Instant Confirmation Pass with printable Appointment Slip, unique Reference ID (e.g. KLE-GVT-XXXXXX), and .ics Google Calendar file download.
2. **Appointment Lookup & Status Tracker:** Enter reference number or phone to view/reschedule/cancel appointment pass.
3. **Counselor / Staff Dashboard Preview:** View incoming booking queue, filter by course (BCA/B.Com), daily timeline breakdown, and approve/reschedule actions.
4. **Interactive Google Maps Embed:** Exact location on Koppal Road with one-click "Get Directions" linking to https://maps.app.goo.gl/BfDGfAMWRgSVHheC9.
5. **Official AICTE Approval Notice & PDF Download:** Downloadable official regulatory letter.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(masterPromptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([masterPromptText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'KLE-College-Gangavathi-Website-Prompt.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] border border-slate-200 flex flex-col overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-[#0b1f3f] text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <FileCode className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-serif">
                Client Business Audit & Ready-To-Use Master Prompt
              </h3>
              <p className="text-xs text-slate-300">
                Generated from Google Maps (https://maps.app.goo.gl/BfDGfAMWRgSVHheC9) & Official Site
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="bg-slate-100 border-b border-slate-200 px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('prompt')}
              className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${
                activeTab === 'prompt' 
                  ? 'bg-white text-[#0f2b5c] shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Master Prompt for AI Models
            </button>
            <button
              onClick={() => setActiveTab('audit')}
              className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${
                activeTab === 'audit' 
                  ? 'bg-white text-[#0f2b5c] shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Client Business Intelligence Audit
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded shadow-sm inline-flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-900" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Prompt!' : 'Copy Master Prompt'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded inline-flex items-center gap-1.5 transition-colors"
              title="Download as Markdown file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .md</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)] text-xs">
          {activeTab === 'prompt' ? (
            <div className="space-y-4">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded text-amber-900 flex items-center justify-between">
                <span>
                  <strong>Ready-to-Use Prompt:</strong> Paste this directly into any AI system or LLM to build a full-stack appointment booking and college portal.
                </span>
                <button
                  onClick={handleCopy}
                  className="font-bold underline ml-2 shrink-0"
                >
                  {copied ? 'Copied!' : 'Click to Copy'}
                </button>
              </div>

              <pre className="p-5 bg-slate-950 text-slate-200 rounded-lg font-mono text-[11px] leading-relaxed whitespace-pre-wrap overflow-x-auto border border-slate-800">
                {masterPromptText}
              </pre>
            </div>
          ) : (
            <div className="space-y-6 text-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Business Entity
                  </span>
                  <div className="text-sm font-bold text-slate-900">{COLLEGE_INFO.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">Sponsoring Society: K.L.E. Society Belagavi (Estd. 1916)</div>
                </div>

                <div className="p-4 rounded bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Category & Regulatory Status
                  </span>
                  <div className="text-sm font-bold text-slate-900">Higher Education Degree College</div>
                  <div className="text-xs text-slate-500 mt-0.5">Affiliated to Koppal University · Approved by AICTE, New Delhi</div>
                </div>

                <div className="p-4 rounded bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Official Location & Coordinates
                  </span>
                  <div className="text-xs font-semibold text-slate-900">{COLLEGE_INFO.contact.address}</div>
                  <div className="text-xs text-slate-500 mt-1 font-mono">15.4465693° N, 76.4970108° E</div>
                </div>

                <div className="p-4 rounded bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Business Hours & Contacts
                  </span>
                  <div className="text-xs font-semibold text-slate-900">{COLLEGE_INFO.contact.officeHours}</div>
                  <div className="text-xs text-slate-600 mt-1 font-mono">Phone: {COLLEGE_INFO.contact.phone} · {COLLEGE_INFO.contact.email1}</div>
                </div>
              </div>

              {/* Verified Services */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 mb-2">
                  Verified Services & Courses Available for Booking
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded border border-slate-200">
                    <strong>1. BCA Admission Counseling:</strong> 3/4-Year NEP Degree, AICTE Approved, full-stack programming & lab training.
                  </div>
                  <div className="p-3 bg-white rounded border border-slate-200">
                    <strong>2. B.Com Admission Counseling:</strong> 3/4-Year NEP Degree, corporate accounting, GST, income tax & audit specialization.
                  </div>
                  <div className="p-3 bg-white rounded border border-slate-200">
                    <strong>3. Guided Campus & Lab Tours:</strong> In-person inspection of high-speed Wi-Fi labs, Central Library, and staffroom.
                  </div>
                  <div className="p-3 bg-white rounded border border-slate-200">
                    <strong>4. Scholarship & Welfare Assistance:</strong> Post-Matric Karnataka SSP/NSP registration support.
                  </div>
                </div>
              </div>

              {/* Brand Color Tokens */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 mb-2">
                  Extracted Brand Color Tokens
                </h4>
                <div className="flex flex-wrap gap-4 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-[#0b1f3f] border border-slate-300" />
                    <span>#0b1f3f (Midnight Navy)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-[#0f2b5c] border border-slate-300" />
                    <span>#0f2b5c (Collegiate Royal)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-[#d97706] border border-slate-300" />
                    <span>#d97706 (Academic Amber)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-[#f8fafc] border border-slate-300" />
                    <span>#f8fafc (Neutral Canvas)</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            Source Maps URL: <a href="https://maps.app.goo.gl/BfDGfAMWRgSVHheC9" target="_blank" rel="noopener noreferrer" className="text-blue-800 underline">maps.app.goo.gl/BfDGfAMWRgSVHheC9</a>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded shadow-sm hover:bg-slate-50 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
