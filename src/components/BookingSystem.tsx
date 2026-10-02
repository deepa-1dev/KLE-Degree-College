import React, { useState } from 'react';
import { 
  Calendar, Check, CheckCircle2, ChevronRight, Clock, 
  Database, Download, FileCheck, HelpCircle, MapPin, 
  Printer, ShieldCheck, Sparkles, User, UserCheck, Users, AlertCircle 
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';
import { saveAppointment, SUPABASE_PROJECT_ID } from '../lib/supabase';

interface BookingSystemProps {
  onSuccessBooking?: (bookingRef: string) => void;
  onOpenSupabaseModal?: () => void;
}

export const BookingSystem: React.FC<BookingSystemProps> = ({ 
  onSuccessBooking, 
  onOpenSupabaseModal 
}) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [selectedService, setSelectedService] = useState('bca-admission');
  const [selectedCounselor, setSelectedCounselor] = useState('counselor-1');
  const [selectedDate, setSelectedDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [selectedSlot, setSelectedSlot] = useState('10:00 AM – 11:00 AM');
  
  const [studentDetails, setStudentDetails] = useState({
    name: '',
    phone: '',
    email: '',
    parentName: '',
    qualification: 'PUC II (Commerce)',
    marksPercentage: '',
    notes: '',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmedRef, setConfirmedRef] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [supabaseSaved, setSupabaseSaved] = useState<boolean | null>(null);
  const [supabaseErrorMsg, setSupabaseErrorMsg] = useState<string | null>(null);

  const services = [
    {
      id: 'bca-admission',
      title: 'BCA 1-on-1 Admission Counseling',
      desc: 'Meet computer applications faculty to discuss syllabus, lab training, AICTE approval, and IT career prospects.',
      duration: '45 mins',
      dept: 'Department of Computer Applications',
    },
    {
      id: 'bcom-admission',
      title: 'B.Com 1-on-1 Admission Counseling',
      desc: 'Consult commerce professors regarding financial accounting, GST specialization, audit training, and CA foundation.',
      duration: '45 mins',
      dept: 'Department of Commerce & Management',
    },
    {
      id: 'campus-tour',
      title: 'Guided Campus & Lab Walkthrough',
      desc: 'In-person inspection of our Wi-Fi enabled computer lab, central library, classrooms, and bus route arrangements.',
      duration: '60 mins',
      dept: 'Campus Facilities Administration',
    },
    {
      id: 'scholarship-desk',
      title: 'Scholarship & Fee Concession Guidance',
      desc: 'Advisory on Karnataka State Scholarship Portal (SSP), Post-Matric schemes, and Category fee concessions.',
      duration: '30 mins',
      dept: 'Student Welfare & Accounts Office',
    },
  ];

  const counselors = [
    {
      id: 'counselor-1',
      name: 'Admissions Officer & Senior Academic Mentor',
      role: 'Head of Admissions Counseling',
      location: 'Admission Office, Ground Floor',
      availability: 'Mon – Sat: 9:00 AM – 4:30 PM',
    },
    {
      id: 'counselor-2',
      name: 'Faculty Mentor (Dept. of Computer Applications)',
      role: 'BCA Technical Program Advisor',
      location: 'Computer Laboratory Block',
      availability: 'Mon – Sat: 10:00 AM – 4:00 PM',
    },
    {
      id: 'counselor-3',
      name: 'Faculty Mentor (Dept. of Commerce)',
      role: 'B.Com Academic Program Advisor',
      location: 'Commerce Department Chambers',
      availability: 'Mon – Sat: 9:30 AM – 4:00 PM',
    },
  ];

  const timeSlots = [
    '09:00 AM – 10:00 AM',
    '10:00 AM – 11:00 AM',
    '11:30 AM – 12:30 PM',
    '01:30 PM – 02:30 PM',
    '02:30 PM – 03:30 PM',
    '03:30 PM – 04:30 PM',
  ];

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentDetails.name || !studentDetails.phone || !studentDetails.email) return;

    setIsSubmitting(true);
    const ref = `KLE-APT-${Date.now().toString().slice(-6)}`;
    setConfirmedRef(ref);

    const serviceObj = services.find(s => s.id === selectedService);
    const counselorObj = counselors.find(c => c.id === selectedCounselor);

    const record = {
      booking_ref: ref,
      student_name: studentDetails.name,
      phone: studentDetails.phone,
      email: studentDetails.email,
      parent_name: studentDetails.parentName,
      qualification: studentDetails.qualification,
      marks_percentage: studentDetails.marksPercentage,
      service_id: selectedService,
      service_title: serviceObj?.title || 'Campus Counseling',
      counselor_id: selectedCounselor,
      counselor_name: counselorObj?.name,
      visit_date: selectedDate,
      time_slot: selectedSlot,
      notes: studentDetails.notes,
      status: 'confirmed',
    };

    const res = await saveAppointment(record);
    setIsSubmitting(false);
    setSupabaseSaved(res.savedInSupabase);
    if (!res.savedInSupabase && res.error) {
      setSupabaseErrorMsg(res.error);
    }
    setBookingConfirmed(true);
    if (onSuccessBooking) onSuccessBooking(ref);
  };

  const handleDownloadCalendar = () => {
    const serviceObj = services.find(s => s.id === selectedService);
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//KLE College Gangavathi//Appointment Booking//EN
BEGIN:VEVENT
SUMMARY:Campus Counseling: ${serviceObj?.title || 'KLE College Gangavathi'}
DESCRIPTION:Admissions counseling appointment at KLE Campus, Koppal Road, Gangavathi. Ref ID: ${confirmedRef}
LOCATION:${COLLEGE_INFO.contact.address}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `KLE-Appointment-${confirmedRef}.ics`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="booking-system" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
              <Calendar className="w-4 h-4 text-amber-600" />
              <span>Campus Visit Scheduler</span>
              <span aria-hidden="true">·</span>
              <span>1-on-1 Faculty Advisory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0b1f3f] tracking-tight">
              Schedule an In-Person Campus Counseling Appointment
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Reserve dedicated 1-on-1 consultation time with our department advisors, inspect our computer laboratory facilities, and review your course eligibility.
            </p>
          </div>

          {/* Supabase Backend Badge */}
          {onOpenSupabaseModal && (
            <button
              onClick={onOpenSupabaseModal}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-md text-emerald-900 text-xs font-medium self-start md:self-auto transition-colors"
            >
              <Database className="w-4 h-4 text-emerald-600" />
              <span>Supabase Backend: <strong>{SUPABASE_PROJECT_ID}</strong></span>
            </button>
          )}
        </div>

        {/* Multi-Step Funnel Container */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-10 shadow-sm">
          
          {/* Progress Indicator */}
          {!bookingConfirmed && (
            <div className="mb-10 pb-6 border-b border-slate-200">
              <div className="flex items-center justify-between max-w-2xl mx-auto text-xs font-semibold">
                <div className={`flex items-center gap-2 ${currentStep >= 1 ? 'text-[#0f2b5c]' : 'text-slate-400'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    currentStep >= 1 ? 'bg-[#0f2b5c] text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    1
                  </span>
                  <span className="hidden sm:inline">Select Service</span>
                </div>

                <div className="h-0.5 w-10 sm:w-16 bg-slate-200" />

                <div className={`flex items-center gap-2 ${currentStep >= 2 ? 'text-[#0f2b5c]' : 'text-slate-400'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    currentStep >= 2 ? 'bg-[#0f2b5c] text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    2
                  </span>
                  <span className="hidden sm:inline">Counselor & Time</span>
                </div>

                <div className="h-0.5 w-10 sm:w-16 bg-slate-200" />

                <div className={`flex items-center gap-2 ${currentStep >= 3 ? 'text-[#0f2b5c]' : 'text-slate-400'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    currentStep >= 3 ? 'bg-[#0f2b5c] text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    3
                  </span>
                  <span className="hidden sm:inline">Student Details</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Select Service / Purpose */}
          {!bookingConfirmed && currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold font-serif text-[#0b1f3f] mb-1">
                  Step 1: Choose Purpose of Campus Visit
                </h3>
                <p className="text-xs text-slate-600">
                  Select the counseling or inspection session you wish to book at the Gangavathi campus:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => setSelectedService(srv.id)}
                    className={`p-5 rounded-lg border cursor-pointer transition-all ${
                      selectedService === srv.id
                        ? 'bg-white border-[#0f2b5c] ring-2 ring-[#0f2b5c]/20 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                        {srv.duration}
                      </span>
                      {selectedService === srv.id && (
                        <CheckCircle2 className="w-4 h-4 text-[#0f2b5c]" />
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      {srv.title}
                    </h4>
                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                      {srv.desc}
                    </p>
                    <span className="text-[11px] text-slate-500 font-medium block">
                      Venue: {srv.dept}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-2.5 text-xs uppercase tracking-wider font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Continue to Slot Selection</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Counselor & Date/Time Selection */}
          {!bookingConfirmed && currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold font-serif text-[#0b1f3f] mb-1">
                  Step 2: Choose Counselor & Date / Time Slot
                </h3>
                <p className="text-xs text-slate-600">
                  Select your preferred counseling officer and scheduled time:
                </p>
              </div>

              {/* Counselor Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Select Counseling Officer / Department Desk:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {counselors.map((c) => (
                    <div
                      key={c.id}
                      onClick={() => setSelectedCounselor(c.id)}
                      className={`p-3.5 rounded border cursor-pointer text-xs transition-colors ${
                        selectedCounselor === c.id
                          ? 'bg-white border-[#0f2b5c] ring-1 ring-[#0f2b5c]'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span className="font-bold text-slate-900 block">{c.name}</span>
                      <span className="text-[11px] text-amber-700 block mt-0.5">{c.role}</span>
                      <span className="text-[11px] text-slate-500 block mt-1">{c.location}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Preferred Visit Date:
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    Admissions office is open Monday through Saturday (8:00 AM – 5:00 PM).
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Available Time Slot:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`p-2 rounded text-xs font-mono transition-colors text-center border ${
                          selectedSlot === slot
                            ? 'bg-[#0f2b5c] text-white border-[#0f2b5c] font-bold'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  ← Back to Services
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-2.5 text-xs uppercase tracking-wider font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Next: Student Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Student Details & Confirm */}
          {!bookingConfirmed && currentStep === 3 && (
            <form onSubmit={handleConfirm} className="space-y-6">
              <div>
                <h3 className="text-xl font-bold font-serif text-[#0b1f3f] mb-1">
                  Step 3: Applicant & Parent Details
                </h3>
                <p className="text-xs text-slate-600">
                  Please provide your contact details to generate your official Campus Appointment Pass:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">Student Full Name *</label>
                  <input
                    type="text"
                    required
                    value={studentDetails.name}
                    onChange={(e) => setStudentDetails({ ...studentDetails, name: e.target.value })}
                    placeholder="As per SSLC / PUC marks card"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">Mobile Phone (with WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    value={studentDetails.phone}
                    onChange={(e) => setStudentDetails({ ...studentDetails, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={studentDetails.email}
                    onChange={(e) => setStudentDetails({ ...studentDetails, email: e.target.value })}
                    placeholder="To receive appointment pass"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">Parent / Guardian Name</label>
                  <input
                    type="text"
                    value={studentDetails.parentName}
                    onChange={(e) => setStudentDetails({ ...studentDetails, parentName: e.target.value })}
                    placeholder="Father / Mother / Guardian"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">Current Qualification</label>
                  <select
                    value={studentDetails.qualification}
                    onChange={(e) => setStudentDetails({ ...studentDetails, qualification: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="PUC II (Commerce)">PUC II (Commerce Stream)</option>
                    <option value="PUC II (Science)">PUC II (Science Stream)</option>
                    <option value="PUC II (Arts)">PUC II (Arts Stream)</option>
                    <option value="12th CBSE/ICSE">12th Standard CBSE / ICSE</option>
                    <option value="10th SSLC Passed">10th Standard (Seeking PUC)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">Approximate Marks / Percentage</label>
                  <input
                    type="text"
                    value={studentDetails.marksPercentage}
                    onChange={(e) => setStudentDetails({ ...studentDetails, marksPercentage: e.target.value })}
                    placeholder="e.g. 78% or Distinction"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">Special Questions or College Bus Inquiry</label>
                <textarea
                  rows={2}
                  value={studentDetails.notes}
                  onChange={(e) => setStudentDetails({ ...studentDetails, notes: e.target.value })}
                  placeholder="Need college bus route details from Koppal/Karatagi, hostel guidance, or scholarship query..."
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  ← Back to Slot Selection
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs uppercase tracking-wider font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded transition-colors inline-flex items-center gap-1.5 shadow"
                >
                  <span>Confirm Campus Appointment</span>
                  <Check className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* Confirmed Appointment Pass State */}
          {bookingConfirmed && (
            <div className="space-y-6 text-center animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-bold font-serif text-[#0b1f3f]">
                  Appointment Confirmed!
                </h3>
                <p className="mt-2 text-xs text-slate-600 max-w-md mx-auto">
                  Your campus counseling visit has been registered with the KLE Gangavathi Admissions Office.
                </p>

                {/* Supabase Realtime Sync Feedback */}
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border bg-emerald-50 text-emerald-800 border-emerald-200">
                  <Database className="w-3.5 h-3.5 text-emerald-600" />
                  <span>
                    {supabaseSaved 
                      ? 'Saved to Supabase database (zrawphtxprowptnamuch)' 
                      : 'Saved to Supabase buffer · Ready for cloud sync'}
                  </span>
                  {onOpenSupabaseModal && (
                    <button
                      onClick={onOpenSupabaseModal}
                      className="ml-1 text-emerald-950 font-bold underline hover:text-emerald-700"
                    >
                      View in Database
                    </button>
                  )}
                </div>
              </div>

              {/* Digital Pass Ticket Card */}
              <div className="max-w-xl mx-auto bg-white rounded-lg border border-slate-300 shadow-md p-6 text-left text-xs space-y-4 relative">
                <div className="flex items-start justify-between border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                      Official Campus Pass
                    </span>
                    <h4 className="text-base font-bold font-serif text-[#0b1f3f]">
                      KLE Society's College, Gangavathi
                    </h4>
                    <span className="text-[11px] text-slate-500">Koppal Road, Vaddarahatti - 583235</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      Ref Number
                    </span>
                    <span className="font-mono font-bold text-slate-900 text-sm">
                      {confirmedRef}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-slate-700">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Student Name</span>
                    <span className="font-semibold text-slate-900 text-sm">{studentDetails.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Contact Phone</span>
                    <span className="font-mono font-semibold">{studentDetails.phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Scheduled Date</span>
                    <span className="font-semibold text-slate-900">{selectedDate}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Time Window</span>
                    <span className="font-mono font-semibold text-blue-900">{selectedSlot}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Purpose / Service</span>
                    <span className="font-semibold text-slate-900">
                      {services.find(s => s.id === selectedService)?.title}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Please present this pass at the campus security gate / admission desk.</span>
                  <span className="text-emerald-700 font-bold">Verified Entry</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleDownloadCalendar}
                  className="px-4 py-2 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded inline-flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-amber-600" />
                  <span>Add to Google / Apple Calendar (.ics)</span>
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded inline-flex items-center gap-1.5 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Campus Pass</span>
                </button>
                <button
                  onClick={() => {
                    setBookingConfirmed(false);
                    setCurrentStep(1);
                  }}
                  className="px-5 py-2 text-xs uppercase tracking-wider font-bold text-white bg-[#0f2b5c] hover:bg-[#1e3a8a] rounded transition-colors"
                >
                  Book Another Session
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
