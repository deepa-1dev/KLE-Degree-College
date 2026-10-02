import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, BookOpen, Clock, FileText, 
  HelpCircle, MapPin, Search, Tag, X 
} from 'lucide-react';
import { 
  COLLEGE_INFO, EVENTS, FACILITIES, 
  NOTICES, PROGRAMS 
} from '../data/collegeData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (href: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  interface SearchResultItem {
    type: string;
    title: string;
    desc: string;
    href: string;
    icon: React.ElementType;
  }

  // Search Results Compilation
  const results: SearchResultItem[] = [];

  if (q.length > 0) {
    // Search Programs
    PROGRAMS.forEach(p => {
      if (p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.keySubjects.some(s => s.toLowerCase().includes(q))) {
        results.push({
          type: 'Academic Program',
          title: p.name,
          desc: p.description.slice(0, 100) + '...',
          href: '#academics',
          icon: BookOpen,
        });
      }
    });

    // Search Notices
    NOTICES.forEach(n => {
      if (n.title.toLowerCase().includes(q) || n.description.toLowerCase().includes(q)) {
        results.push({
          type: 'Official Circular',
          title: n.title,
          desc: n.description.slice(0, 100) + '...',
          href: '#notices',
          icon: FileText,
        });
      }
    });

    // Search Facilities
    FACILITIES.forEach(f => {
      if (f.title.toLowerCase().includes(q) || f.fullDesc.toLowerCase().includes(q)) {
        results.push({
          type: 'Campus Facility',
          title: f.title,
          desc: f.shortDesc,
          href: '#facilities',
          icon: MapPin,
        });
      }
    });

    // Search Events
    EVENTS.forEach(e => {
      if (e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q)) {
        results.push({
          type: 'Campus Event',
          title: e.title,
          desc: e.description.slice(0, 100) + '...',
          href: '#events',
          icon: Clock,
        });
      }
    });
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-xl w-full border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses (BCA, B.Com), notices, bus facility, fees..."
            className="w-full text-sm outline-none text-slate-900 placeholder:text-slate-400"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Links Suggestions */}
        {q.length === 0 && (
          <div className="p-5 text-xs">
            <span className="font-semibold text-slate-400 uppercase tracking-wider text-[10px] block mb-2">
              Popular Searches
            </span>
            <div className="flex flex-wrap gap-2">
              {['BCA Course', 'B.Com Course', 'AICTE Approval', 'College Bus', 'Admissions', 'Dr. Manasa', 'Koppal Road'].map((item) => (
                <button
                  key={item}
                  onClick={() => setQuery(item)}
                  className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded text-slate-700 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        {q.length > 0 && (
          <div className="max-h-96 overflow-y-auto divide-y divide-slate-100 p-2">
            {results.length > 0 ? (
              results.map((res, i) => {
                const Icon = res.icon;
                return (
                  <button
                    key={i}
                    onClick={() => {
                      onSelectResult(res.href);
                      onClose();
                    }}
                    className="w-full text-left p-3 hover:bg-slate-50 rounded flex items-start gap-3 transition-colors group"
                  >
                    <div className="p-2 bg-[#0f2b5c]/10 text-[#0f2b5c] rounded group-hover:bg-[#0f2b5c] group-hover:text-white transition-colors shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block">
                        {res.type}
                      </span>
                      <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-900 truncate">
                        {res.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {res.desc}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 shrink-0 self-center" />
                  </button>
                );
              })
            ) : (
              <div className="p-8 text-center text-xs text-slate-500">
                No matching results found for "{query}". Try checking courses or notices.
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Search KLE Gangavathi Portal</span>
          <span>Press <strong>Esc</strong> to exit</span>
        </div>
      </div>
    </div>
  );
};
