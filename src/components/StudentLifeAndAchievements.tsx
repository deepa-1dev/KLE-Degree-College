import React, { useState } from 'react';
import { 
  Award, Calendar, CheckCircle2, ChevronRight, 
  Clock, Flag, MapPin, Sparkles, Trophy, Users 
} from 'lucide-react';
import { EVENTS, CollegeEvent } from '../data/collegeData';

export const StudentLifeAndAchievements: React.FC = () => {
  const [selectedEventCategory, setSelectedEventCategory] = useState<string>('All');
  const [selectedEventModal, setSelectedEventModal] = useState<CollegeEvent | null>(null);

  const categories = ['All', 'Academic', 'Workshops', 'Cultural', 'Sports'];

  const filteredEvents = selectedEventCategory === 'All'
    ? EVENTS
    : EVENTS.filter(e => e.category === selectedEventCategory);

  const milestones = [
    {
      year: "1916",
      title: "Founding of K.L.E. Society",
      desc: "Established by the 'Saptarishis' (seven selfless teacher-founders) in Belagavi, igniting a century of educational enlightenment.",
    },
    {
      year: "2011",
      title: "Establishment of B.Com College Gangavathi",
      desc: "Initiated collegiate commerce education in Gangavathi, Koppal District, serving rural and urban degree aspirants.",
    },
    {
      year: "2023–24",
      title: "Launch of Department of Computer Applications",
      desc: "Formally established the BCA degree program to prepare graduates for fast-moving IT, software, and computational disciplines.",
    },
    {
      year: "2024–26",
      title: "AICTE Letter of Approval (LoA)",
      desc: "Formal national regulatory approval granted by AICTE, New Delhi for the BCA technical degree program at Gangavathi.",
    },
  ];

  return (
    <section id="events" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Achievements & Institutional Milestones Timeline */}
        <div id="achievements" className="mb-20">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
              <Trophy className="w-4 h-4 text-amber-600" />
              <span>Institutional Milestones</span>
              <span aria-hidden="true">·</span>
              <span>Documented Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0b1f3f] tracking-tight">
              A Legacy of Educational Growth
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              The steady progression of higher education at Gangavathi under the stewardship of K.L.E. Society Belagavi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-lg border border-slate-200 relative flex flex-col justify-between shadow-sm hover:shadow transition-shadow"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-bold font-serif text-[#0f2b5c] block mb-2 tabular-nums">
                    {m.year}
                  </span>
                  <h3 className="text-base font-bold font-serif text-slate-900 mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Institutional Record</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Life & Events Section */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
                <span>Campus Experience</span>
                <span aria-hidden="true">·</span>
                <span>Workshops & Activities</span>
              </div>
              <h2 className="text-3xl font-bold font-serif text-[#0b1f3f] tracking-tight">
                Student Life, Seminars & Workshops
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Co-curricular workshops, symposiums, and cultural events complementing classroom education.
              </p>
            </div>

            {/* Event Category Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-md self-start md:self-auto text-xs font-medium">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedEventCategory(cat)}
                  className={`px-3 py-1.5 rounded transition-colors ${
                    selectedEventCategory === cat
                      ? 'bg-[#0f2b5c] text-white shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-amber-700 uppercase tracking-wider">
                      {evt.category}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {evt.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-serif text-[#0b1f3f] leading-snug mb-2">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate max-w-[170px]">{evt.location}</span>
                  </span>
                  <button
                    onClick={() => setSelectedEventModal(evt)}
                    className="font-semibold text-[#0f2b5c] hover:text-blue-800"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Details Modal */}
        {selectedEventModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 relative">
              <div className="text-xs text-amber-600 font-semibold uppercase tracking-wider mb-1">
                {selectedEventModal.category} · {selectedEventModal.date}
              </div>
              <h3 className="text-xl font-bold font-serif text-[#0b1f3f] mb-3">
                {selectedEventModal.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {selectedEventModal.description}
              </p>
              
              <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-1 text-xs text-slate-700 mb-6">
                <div><strong>Location:</strong> {selectedEventModal.location}</div>
                {selectedEventModal.speakerOrOrganizer && (
                  <div><strong>Organizer / Committee:</strong> {selectedEventModal.speakerOrOrganizer}</div>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedEventModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#0f2b5c] hover:bg-[#1e3a8a] rounded-md transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
