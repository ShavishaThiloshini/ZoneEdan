import React from 'react';
import { Search, MapPin } from 'lucide-react';
import PageContainer from '../layout/PageContainer';

const DestinationsHero = ({ searchQuery, onSearchChange, resultCount, totalCount }) => {
  return (
    <section className="bg-deep-forest relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #22A79D 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #0B817A 0%, transparent 40%)`,
        }}
      />

      <PageContainer className="relative z-10 py-16 md:py-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-aqua-mist/60 text-sm font-sans mb-6">
          <span>Home</span>
          <span>/</span>
          <span className="text-aqua-mist">Destinations</span>
        </div>

        {/* Heading */}
        <div className="max-w-2xl mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
            Explore <span className="text-fresh-teal">Destinations</span>
          </h1>
          <p className="font-sans text-aqua-mist/80 text-lg leading-relaxed">
            Discover peaceful water escapes across Sri Lanka — from hidden waterfalls to
            tranquil lagoons, all within your budget.
          </p>
        </div>

        {/* Search Field */}
        <div className="max-w-2xl mb-6">
          <div className="relative flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-3 focus-within:bg-white/15 focus-within:border-fresh-teal/60 transition-all duration-300">
            <Search size={20} className="text-aqua-mist/70 flex-shrink-0 mr-3" />
            <input
              type="text"
              id="destinations-search"
              placeholder="Search by name, location, or water type..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="flex-grow bg-transparent outline-none text-white placeholder:text-white/40 font-sans text-base"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="ml-3 text-white/50 hover:text-white transition-colors text-lg leading-none"
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Result count */}
        <div className="flex items-center gap-2 text-aqua-mist/70 text-sm font-sans">
          <MapPin size={14} />
          <span>
            Showing{' '}
            <span className="text-fresh-teal font-semibold">{resultCount}</span>
            {' '}of{' '}
            <span className="text-white/90 font-semibold">{totalCount}</span>
            {' '}destinations
          </span>
        </div>
      </PageContainer>
    </section>
  );
};

export default DestinationsHero;
