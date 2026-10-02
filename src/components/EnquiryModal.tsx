import React, { useState, useEffect } from 'react';
import { 
  AlertCircle, ArrowRight, CheckCircle2, Clock, Database, 
  Download, FileCheck, Phone, Printer, Send, ShieldCheck, X 
} from 'lucide-react';
import { COLLEGE_INFO, PROGRAMS } from '../data/collegeData';
import { saveEnquiry, SUPABASE_PROJECT_ID } from '../lib/supabase';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledCourse?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ 
  isOpen, 
  onClose, 
  prefilledCourse = '' 
}) => {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    phone: '',
    parentPhone: '',
    course: prefilledCourse || 'Bachelor of Computer Applications (BCA)',
    qualification: 'PUC II / 10+2 Passed',
    marksPercentage: '',
    category: 'General',
    city: 'Gangavathi',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedRefId, setGeneratedRefId] = useState('');
  const [savedToSupabase, setSavedToSupabase] = useState(false);

  useEffect(() => {
    if (prefilledCourse) {
      setFormData(prev => ({ ...prev, course: prefilledCourse }));
    }
  }, [prefilledCourse]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required as per marks card';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email address is required';
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = 'Valid 10-digit mobile number is required';
    if (!formData.course) newErrors.course = 'Please select your preferred program';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Generate clean reference ID
    const ref = `KLE-GVT-${Date.now().toString().slice(-6)}`;
    setGeneratedRefId(ref);

    const res = await saveEnquiry({
      ref_id: ref,
      student_name: formData.studentName,
      email: formData.email,
      phone: formData.phone,
      parent_phone: formData.parentPhone,
      course: formData.course,
      qualification: formData.qualification,
      marks_percentage: formData.marksPercentage,
      category: formData.category,
      city: formData.city,
      message: formData.message,
    });

    setSavedToSupabase(res.savedInSupabase);
    setIsSubmitted(true);
    setErrors({});
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-xl w-full my-8 border border-slate-200 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#0b1f3f] text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-400 block mb-1">
              K.L.E. Society's College, Gangavathi
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif">
              Admission Registration & Enquiry Form
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Academic Session 2025–26 & 2026–27 · Affiliated to Koppal University
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            /* Submission Success State */
            <div className="space-y-6 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-2xl font-bold font-serif text-[#0b1f3f]">
                  Enquiry Submitted Successfully!
                </h4>
                <p className="mt-2 text-xs text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.studentName}</strong>. Your preliminary admission enquiry has been logged with the KLE Gangavathi Admission Office.
                </p>

                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <Database className="w-3 h-3 text-emerald-600" />
                  <span>
                    {savedToSupabase
                      ? `Synchronized to Supabase Database (${SUPABASE_PROJECT_ID})`
                      : 'Saved to Supabase buffer · Ready for cloud sync'}
                  </span>
                </div>
              </div>

              {/* Generated Admission Acknowledgement Card */}
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 text-left text-xs space-y-2.5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px]">
                    Acknowledgement Ref ID
                  </span>
                  <span className="font-mono font-bold text-[#0f2b5c] text-sm tabular-nums">
                    {generatedRefId}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-700">
                  <div><strong>Student Name:</strong> {formData.studentName}</div>
                  <div><strong>Course Selected:</strong> {formData.course}</div>
                  <div><strong>Phone:</strong> {formData.phone}</div>
                  <div><strong>Qualification:</strong> {formData.qualification}</div>
                  <div><strong>Category:</strong> {formData.category}</div>
                  <div><strong>Campus Desk:</strong> Koppal Road, Gangavathi</div>
                </div>
                <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500">
                  Please save or screenshot this acknowledgement slip. Our counseling desk will contact you via mobile within 24 working hours.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded border border-slate-300 inline-flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Slip</span>
                </button>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-2 text-xs uppercase tracking-wider font-bold text-white bg-[#0f2b5c] hover:bg-[#1e3a8a] rounded"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Active Registration Form */
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Program Selector */}
              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Program / Course of Interest *
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs font-medium"
                >
                  <option value="Bachelor of Computer Applications (BCA)">
                    Bachelor of Computer Applications (BCA) · 3/4 Yrs NEP · AICTE Approved
                  </option>
                  <option value="Bachelor of Commerce (B.Com)">
                    Bachelor of Commerce (B.Com) · 3/4 Yrs NEP · Koppal University
                  </option>
                  <option value="Pre-University Science (PCMB / PCMC)">
                    Pre-University Course: Science (PCMB / PCMC)
                  </option>
                  <option value="Pre-University Commerce (EBAC / HEBA)">
                    Pre-University Course: Commerce (EBAC / HEBA)
                  </option>
                </select>
                {errors.course && <p className="text-red-600 mt-1">{errors.course}</p>}
              </div>

              {/* Student Name */}
              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Applicant's Full Name (as per 10th Marks Card) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  placeholder="e.g. Anand S. Patil"
                  className={`w-full px-3 py-2 bg-slate-50 border rounded focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.studentName ? 'border-red-500 focus:ring-red-400' : 'border-slate-300 focus:ring-blue-600'
                  }`}
                />
                {errors.studentName && <p className="text-red-600 mt-1">{errors.studentName}</p>}
              </div>

              {/* Contact: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Student Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile"
                    className={`w-full px-3 py-2 bg-slate-50 border rounded focus:bg-white focus:outline-none focus:ring-2 ${
                      errors.phone ? 'border-red-500 focus:ring-red-400' : 'border-slate-300 focus:ring-blue-600'
                    }`}
                  />
                  {errors.phone && <p className="text-red-600 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="student@gmail.com"
                    className={`w-full px-3 py-2 bg-slate-50 border rounded focus:bg-white focus:outline-none focus:ring-2 ${
                      errors.email ? 'border-red-500 focus:ring-red-400' : 'border-slate-300 focus:ring-blue-600'
                    }`}
                  />
                  {errors.email && <p className="text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Parent Phone & Qualifying Exam */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Parent / Guardian Mobile
                  </label>
                  <input
                    type="tel"
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                    placeholder="Parent mobile number"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Previous Qualifying Examination
                  </label>
                  <select
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="PUC II (Commerce)">PUC II (Commerce Stream)</option>
                    <option value="PUC II (Science)">PUC II (Science Stream)</option>
                    <option value="PUC II (Arts)">PUC II (Arts Stream)</option>
                    <option value="12th CBSE / ICSE">12th Standard CBSE / ICSE</option>
                    <option value="SSLC (for PUC admission)">SSLC (10th) Passed (for PUC)</option>
                    <option value="Diploma Passed">3-Year Polytechnic Diploma</option>
                  </select>
                </div>
              </div>

              {/* Category Concession & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Social Category (for Scholarship)
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="General">General Merit (GM)</option>
                    <option value="SC">Scheduled Caste (SC)</option>
                    <option value="ST">Scheduled Tribe (ST)</option>
                    <option value="Cat-I">Category I</option>
                    <option value="Cat-IIA">Category IIA</option>
                    <option value="Cat-IIB">Category IIB</option>
                    <option value="Cat-IIIA">Category IIIA</option>
                    <option value="Cat-IIIB">Category IIIB</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Current City / Taluk
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Gangavathi, Koppal, Karatagi"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              {/* Specific Query / Message */}
              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Specific Query or Bus Route Requirement (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Need college bus transport, hostel guidance, or scholarship query..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Privacy Note */}
              <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Your information is safely handled by the college admission office and will never be shared.</span>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs uppercase tracking-wider font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded shadow transition-all inline-flex items-center gap-2"
                >
                  <span>Submit Admission Enquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
