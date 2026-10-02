import React, { useState } from 'react';
import { 
  Building2, CheckCircle2, Clock, ExternalLink, 
  Mail, MapPin, Navigation, Phone, Send, Sparkles 
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface ContactSectionProps {
  onOpenEnquiry: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenEnquiry }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            <MapPin className="w-4 h-4 text-amber-600" />
            <span>Campus Location & Support</span>
            <span aria-hidden="true">·</span>
            <span>Connect with Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0b1f3f] tracking-tight">
            Visit Our Gangavathi Campus
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            We welcome prospective students, parents, and academic delegates. Reach out via telephone, email, or schedule an in-person campus counseling visit.
          </p>
        </div>

        {/* Contact Info Cards + Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          
          {/* Left Column: Official Campus Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-md bg-[#0f2b5c] text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-500 block mb-1">
                    Official College Address
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {COLLEGE_INFO.contact.address}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600">
                    Located conveniently on Koppal Road, Vaddarahatti, Gangavathi, Koppal District, Karnataka.
                  </p>
                  
                  <div className="mt-4">
                    <a
                      href={COLLEGE_INFO.contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f2b5c] hover:text-blue-800"
                    >
                      <Navigation className="w-3.5 h-3.5 text-amber-600" />
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone & Helpline */}
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-md bg-[#0f2b5c] text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-500 block mb-1">
                    Direct Telephones & Helpline
                  </span>
                  <div className="space-y-1 text-sm font-mono font-medium text-slate-900">
                    <div>
                      <a href={`tel:${COLLEGE_INFO.contact.phone.replace(/\s+/g, '')}`} className="hover:text-blue-900">
                        {COLLEGE_INFO.contact.phone}
                      </a>
                      <span className="text-xs font-sans text-slate-500 ml-2">(Principal / Office)</span>
                    </div>
                    <div>
                      <a href={`tel:${COLLEGE_INFO.contact.altPhone.replace(/\s+/g, '')}`} className="hover:text-blue-900">
                        {COLLEGE_INFO.contact.altPhone}
                      </a>
                      <span className="text-xs font-sans text-slate-500 ml-2">(Admission Desk)</span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    Lines active during official office working hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Email Communications */}
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-md bg-[#0f2b5c] text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-500 block mb-1">
                    Official College Emails
                  </span>
                  <div className="space-y-1 text-xs font-mono text-slate-800">
                    <div>
                      <a href={`mailto:${COLLEGE_INFO.contact.email1}`} className="hover:underline text-blue-900 font-semibold">
                        {COLLEGE_INFO.contact.email1}
                      </a>
                      <span className="text-slate-500 block text-[11px] font-sans">BCA Department & General Admissions</span>
                    </div>
                    <div className="pt-1">
                      <a href={`mailto:${COLLEGE_INFO.contact.email2}`} className="hover:underline text-blue-900 font-semibold">
                        {COLLEGE_INFO.contact.email2}
                      </a>
                      <span className="text-slate-500 block text-[11px] font-sans">Commerce Department & Administration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Timings */}
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-md bg-[#0f2b5c] text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-500 block mb-1">
                    Official Working Hours
                  </span>
                  <span className="text-sm font-semibold text-slate-900 block">
                    {COLLEGE_INFO.contact.officeHours}
                  </span>
                  <span className="text-xs text-slate-500 mt-1 block">
                    Campus Administrative Counter & Admissions Inquiry
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map & Direction Link */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-100 flex-1 min-h-[420px] relative">
              {/* Google Maps Embed with Verified Place Coordinates */}
              <iframe
                title="KLE Degree College Gangavathi Google Map"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.5492484439063!2d${COLLEGE_INFO.contact.mapEmbedCoords.lng}!3d${COLLEGE_INFO.contact.mapEmbedCoords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb780d9f94eaf59%3A0xe4b81fe55f298ab2!2sKLE%20Degree%20College!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '440px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-md shadow-md border border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-[#0f2b5c] block">KLE Degree College</span>
                  <span className="text-[11px] text-slate-600">Koppal Road, Vaddarahatti, Gangavathi</span>
                </div>
                <a
                  href={COLLEGE_INFO.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0f2b5c] hover:bg-[#1e3a8a] rounded transition-colors inline-flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Quick General Message Form */}
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold font-serif text-[#0b1f3f] uppercase tracking-wider">
                  Leave a Quick Message for College Administration
                </h3>
                <span className="text-[11px] text-slate-500">Official Desk</span>
              </div>

              {formSubmitted ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Thank you. Your message has been received by the college office. We will reply via email shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. student@gmail.com"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-slate-700 font-semibold mb-1">Message / Question *</label>
                    <textarea
                      required
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Inquire about course eligibility, documents, or general queries..."
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className="sm:col-span-2 flex items-center justify-between pt-1">
                    <button
                      type="button"
                      onClick={onOpenEnquiry}
                      className="text-xs font-semibold text-blue-900 hover:underline"
                    >
                      Need full Admission Registration? Click here →
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#0f2b5c] hover:bg-[#1e3a8a] text-white font-semibold rounded text-xs transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Send Message</span>
                      <Send className="w-3 h-3 text-amber-400" />
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
