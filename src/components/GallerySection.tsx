import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, ChevronRight, Eye, Image as ImageIcon, 
  Maximize2, X, ZoomIn 
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/collegeData';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Campus', 'Facilities', 'Leadership', 'Students'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const handleNext = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  }, [activeLightboxIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [activeLightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setActiveLightboxIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
              <ImageIcon className="w-4 h-4 text-amber-600" />
              <span>Campus Photography</span>
              <span aria-hidden="true">·</span>
              <span>Authentic Visual Archive</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0b1f3f] tracking-tight">
              Institutional Photo Gallery
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Photographs of our campus, facilities, student academic sessions, and institutional leaders.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-md self-start md:self-auto text-xs font-medium">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#0f2b5c] text-white shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group cursor-pointer rounded-lg overflow-hidden border border-slate-200 bg-white relative flex flex-col shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors" />
                
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 left-3 text-[11px] font-semibold text-amber-300">
                  {item.category}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold font-serif text-[#0b1f3f] line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-[#0f2b5c]">
                  <span>Enlarge photograph</span>
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Lightbox */}
        {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-fadeIn"
            onClick={() => setActiveLightboxIndex(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-black/80 rounded-lg overflow-hidden border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-4 flex items-center justify-between text-white border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-amber-400">
                    {filteredItems[activeLightboxIndex].category}
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="text-sm font-medium">
                    {filteredItems[activeLightboxIndex].title} ({activeLightboxIndex + 1} of {filteredItems.length})
                  </span>
                </div>
                <button
                  onClick={() => setActiveLightboxIndex(null)}
                  className="p-1.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  aria-label="Close image lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image with Prev/Next Controls */}
              <div className="relative h-[65vh] max-h-[600px] flex items-center justify-center bg-black">
                <img
                  src={filteredItems[activeLightboxIndex].image}
                  alt={filteredItems[activeLightboxIndex].title}
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />

                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors focus:outline-none"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors focus:outline-none"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Caption */}
              <div className="p-4 bg-slate-900 text-slate-300 text-xs flex items-center justify-between">
                <p className="max-w-2xl">{filteredItems[activeLightboxIndex].caption}</p>
                <span className="text-[11px] text-slate-500 hidden sm:inline">
                  Use ← and → keys to browse
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
