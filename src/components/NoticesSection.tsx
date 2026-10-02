import React, { useState } from 'react';
import { 
  AlertCircle, ArrowDownToLine, Bell, Download, 
  ExternalLink, FileText, Filter, Search, Sparkles 
} from 'lucide-react';
import { NOTICES, Notice } from '../data/collegeData';

export const NoticesSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AICTE / Regulatory', 'Admissions', 'Examinations', 'General'];

  const filteredNotices = NOTICES.filter((notice) => {
    const matchesCategory = selectedCategory === 'All' || notice.category === selectedCategory;
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          notice.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="notices" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
              <Bell className="w-4 h-4 text-amber-600" />
              <span>Official Circulars</span>
              <span aria-hidden="true">·</span>
              <span>Regulatory & Academic Updates</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0b1f3f] tracking-tight">
              Institutional Notice Board
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Access official college announcements, AICTE approvals, university examination schedules, and scholarship alerts.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search circulars..."
                className="pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 w-full sm:w-56"
              />
            </div>

            {/* Category Select */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 text-xs border border-slate-300 rounded-md bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Notices Board Table / Cards */}
        <div className="space-y-4">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className={`p-5 sm:p-6 rounded-lg border transition-all ${
                  notice.isImportant
                    ? 'bg-amber-50/40 border-amber-200/90 shadow-sm'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      {notice.isImportant && (
                        <span className="inline-flex items-center gap-1 font-bold text-amber-700 uppercase tracking-wider">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                          Priority Notice
                        </span>
                      )}
                      {notice.isImportant && <span className="text-slate-300">·</span>}
                      <span className="font-semibold text-blue-900">{notice.category}</span>
                      <span className="text-slate-400">·</span>
                      <span className="text-slate-500">{notice.date}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-serif text-[#0b1f3f] leading-snug">
                      {notice.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {notice.description}
                    </p>
                  </div>

                  {/* Document Download / Action Button */}
                  {notice.fileUrl && (
                    <div className="shrink-0 self-start md:self-center">
                      <a
                        href={notice.fileUrl}
                        download={notice.fileName || "Notice-Document.pdf"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-md shadow-sm transition-colors"
                      >
                        <ArrowDownToLine className="w-4 h-4 text-amber-600" />
                        <span>Download Official PDF</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm text-slate-500">
                No circulars match your search or filter criteria.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-3 text-xs font-semibold text-blue-800 hover:underline"
              >
                Reset notice filters
              </button>
            </div>
          )}
        </div>

        {/* AICTE Highlight Banner */}
        <div className="mt-10 p-4 sm:p-5 rounded-md bg-[#0f2b5c]/5 border border-[#0f2b5c]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0f2b5c] text-white flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-[#0f2b5c] block">AICTE Regulatory Compliance</span>
              <span>Letter of Approval (LoA) for BCA Department is archived and verifiable by students and parents.</span>
            </div>
          </div>
          <a
            href="/documents/AICTE-Approval-Letter-KLE-Gangavathi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-[#0f2b5c] hover:underline shrink-0"
          >
            <span>View AICTE Document</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
