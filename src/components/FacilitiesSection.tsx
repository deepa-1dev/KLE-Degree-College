import React, { useState } from 'react';
import { 
  Bell, BookOpen, Bus, ChevronLeft, ChevronRight, 
  Clock, Coffee, Compass, GraduationCap, 
  Maximize2, Monitor, ShieldCheck, Users, X, ZoomIn 
} from 'lucide-react';
import { FACILITIES, Facility } from '../data/collegeData';

export const FacilitiesSection: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const facilityImages = [
    {
      title: "Campus Building & Academic Grounds",
      desc: "Tranquil, non-disturbance academic campus along Koppal Road, Vaddarahatti, Gangavathi.",
      image: "/images/kle/campus.jpg",
      category: "Infrastructure",
    },
    {
      title: "Central Academic Library & Study Hall",
      desc: "Comprehensive collection of university curriculum books, research volumes, and quiet study spaces.",
      image: "/images/kle/library.jpg",
      category: "Learning Resources",
    },
    {
      title: "Computer Laboratory & Practical Terminal Hall",
      desc: "Wi-Fi enabled labs with software programming suites for BCA computing courses.",
      image: "/images/kle/students.jpg",
      category: "IT Infrastructure",
    },
    {
      title: "Faculty Mentorship Chambers & Staffroom",
      desc: "Dedicated faculty workrooms for 1-on-1 student academic mentoring and guided study hours.",
      image: "/images/kle/staffroom.jpg",
      category: "Mentorship",
    },
  ];

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % facilityImages.length);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + facilityImages.length) % facilityImages.length
      );
    }
  };

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            <span>Campus Infrastructure</span>
            <span aria-hidden="true">·</span>
            <span>Documented Amenities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0b1f3f] tracking-tight">
            Academic Spaces & Student Amenities
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Our campus is purposefully established in a peaceful non-disturbance environment to foster disciplined study, hands-on computer lab work, and personal mentorship.
          </p>
        </div>

        {/* Authentic Campus Photo Showcase Grid (Click to Lightbox) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facilityImages.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveLightboxIndex(idx)}
              className="group cursor-pointer rounded-lg overflow-hidden border border-slate-200 bg-slate-50 relative flex flex-col transition-all hover:shadow-lg"
            >
              <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors" />
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>
                <div className="absolute bottom-2 left-3 text-[11px] font-semibold text-amber-300">
                  {item.category}
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold font-serif text-[#0b1f3f] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-3 text-[11px] font-semibold text-blue-900 flex items-center gap-1">
                  <span>View in Gallery</span>
                  <Maximize2 className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Documented Facilities Bento List */}
        <div>
          <span className="text-xs uppercase tracking-wider font-bold text-slate-900 block mb-6">
            Documented Amenities at Gangavathi Campus
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((facility) => (
              <div
                key={facility.id}
                className="p-6 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between hover:bg-slate-100/70 transition-colors"
              >
                <div>
                  <div className="w-9 h-9 rounded-md bg-[#0f2b5c] text-amber-400 flex items-center justify-center mb-4">
                    {facility.iconName === 'Monitor' && <Monitor className="w-4 h-4" />}
                    {facility.iconName === 'BookOpen' && <BookOpen className="w-4 h-4" />}
                    {facility.iconName === 'Bus' && <Bus className="w-4 h-4" />}
                    {facility.iconName === 'Users' && <Users className="w-4 h-4" />}
                    {facility.iconName === 'Bell' && <Bell className="w-4 h-4" />}
                    {facility.iconName === 'GraduationCap' && <GraduationCap className="w-4 h-4" />}
                  </div>

                  <h3 className="text-base font-bold font-serif text-[#0b1f3f] mb-2">
                    {facility.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {facility.fullDesc}
                  </p>
                </div>

                <ul className="pt-3 border-t border-slate-200 space-y-1.5 text-xs text-slate-600">
                  {facility.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {activeLightboxIndex !== null && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
            onClick={() => setActiveLightboxIndex(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-black/60 rounded-lg overflow-hidden border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Bar with Title and Close */}
              <div className="p-4 flex items-center justify-between text-white border-b border-slate-800">
                <span className="text-sm font-medium">
                  {facilityImages[activeLightboxIndex].title} ({activeLightboxIndex + 1} of {facilityImages.length})
                </span>
                <button
                  onClick={() => setActiveLightboxIndex(null)}
                  className="p-1.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image View */}
              <div className="relative h-[60vh] max-h-[500px] flex items-center justify-center bg-black">
                <img
                  src={facilityImages[activeLightboxIndex].image}
                  alt={facilityImages[activeLightboxIndex].title}
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />

                {/* Left/Right Buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Caption */}
              <div className="p-4 bg-slate-900 text-slate-300 text-xs">
                <p>{facilityImages[activeLightboxIndex].desc}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
