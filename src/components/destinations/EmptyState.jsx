import React from 'react';
import PageContainer from '../layout/PageContainer';

const MESSAGES = {
  waterfall: { headline: 'No waterfalls found', hint: 'Try relaxing the budget or peace score filter.' },
  beach: { headline: 'No beaches found', hint: 'Try a different region or budget level.' },
  lake: { headline: 'No lakes found', hint: 'Clear a filter to widen your search.' },
  lagoon: { headline: 'No lagoons found', hint: 'Try removing the region filter.' },
  river: { headline: 'No rivers found', hint: 'Adjust your filters to see more options.' },
  island: { headline: 'No islands found', hint: 'Try removing a filter to broaden results.' },
  ocean: { headline: 'No ocean spots found', hint: 'Try adjusting your budget or peace score.' },
  default: { headline: 'No escapes found', hint: 'Try a different combination of filters.' },
};

const EmptyState = ({ activeWaterTypes, searchQuery, onClearAll }) => {
  // Pick a contextual message
  const type = activeWaterTypes?.length === 1 ? activeWaterTypes[0] : 'default';
  const { headline, hint } = MESSAGES[type] || MESSAGES.default;

  return (
    <PageContainer className="py-24 flex flex-col items-center text-center">
      {/* Illustration */}
      <div className="text-7xl mb-6 select-none" role="img" aria-label="Wave icon">
        <span className="material-symbols-outlined" style={{ fontSize: '80px', color: 'var(--color-ocean-teal)' }}>water</span>
      </div>

      <h2 className="font-serif text-3xl md:text-4xl font-bold text-deep-teal mb-3">
        {searchQuery ? `Nothing matches "${searchQuery}"` : headline}
      </h2>

      <p className="font-sans text-deep-forest/60 text-lg max-w-sm mb-2">
        {hint}
      </p>

      <p className="font-sans text-deep-forest/40 text-sm max-w-xs mb-8">
        ZoneEdan currently covers 12 beautiful Sri Lankan destinations and grows over time.
      </p>

      <button
        onClick={onClearAll}
        className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-deep-teal text-white font-sans font-medium text-base hover:bg-ocean-teal transition-all duration-300 shadow-[0_2px_8px_rgba(23,59,53,0.1)] hover:shadow-[0_4px_16px_rgba(23,59,53,0.15)] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ocean-teal outline-none"
      >
        Clear All Filters
      </button>
    </PageContainer>
  );
};

export default EmptyState;
