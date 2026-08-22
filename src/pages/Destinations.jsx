import React, { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { destinations } from '../data/destinations';
import DestinationsHero from '../components/destinations/DestinationsHero';
import FilterBar from '../components/destinations/FilterBar';
import DestinationGrid from '../components/destinations/DestinationGrid';
import EmptyState from '../components/destinations/EmptyState';

// ── Helpers ────────────────────────────────────────────────────────────────────

const normalise = (str = '') => str.toLowerCase().trim();

const matchesSearch = (d, query) => {
  if (!query) return true;
  const q = normalise(query);
  return (
    normalise(d.name).includes(q) ||
    normalise(d.location).includes(q) ||
    normalise(d.region).includes(q) ||
    normalise(d.type).includes(q) ||
    normalise(d.waterType).includes(q) ||
    normalise(d.shortDescription).includes(q)
  );
};

const sortDestinations = (list, sortBy) => {
  const copy = [...list];
  switch (sortBy) {
    case 'peaceful':
      return copy.sort((a, b) => b.peaceScore - a.peaceScore);
    case 'budget-low':
      return copy.sort((a, b) => a.minBudget - b.minBudget);
    case 'newest':
      return copy.sort((a, b) => Number(b.id) - Number(a.id));
    case 'recommended':
    default:
      // Featured first, then by peace score
      return copy.sort((a, b) => {
        if (a.featured === b.featured) return b.peaceScore - a.peaceScore;
        return a.featured ? -1 : 1;
      });
  }
};

// ── Page ───────────────────────────────────────────────────────────────────────

const Destinations = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // ── State ──────────────────────────────────────────────────────────────────
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('search') ?? ''
  );
  const [activeWaterTypes, setActiveWaterTypes] = useState(
    searchParams.get('type') ? [searchParams.get('type')] : []
  );
  const [activeBudget, setActiveBudget]       = useState(null);
  const [activeRegion, setActiveRegion]       = useState(null);
  const [minPeaceScore, setMinPeaceScore]     = useState(null);
  const [sortBy, setSortBy]                   = useState('recommended');

  // Keep URL in sync with search query (for sharing / back-nav)
  useEffect(() => {
    const params = {};
    if (searchQuery) params.search = searchQuery;
    if (activeWaterTypes.length === 1) params.type = activeWaterTypes[0];
    setSearchParams(params, { replace: true });
  }, [searchQuery, activeWaterTypes, setSearchParams]);

  // ── Filter logic ───────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    let list = destinations.filter((d) => {
      if (!matchesSearch(d, searchQuery)) return false;
      if (activeWaterTypes.length && !activeWaterTypes.includes(d.waterType)) return false;
      if (activeBudget && d.budgetLevel !== activeBudget) return false;
      if (activeRegion && d.region !== activeRegion) return false;
      if (minPeaceScore !== null && d.peaceScore < minPeaceScore) return false;
      return true;
    });
    return sortDestinations(list, sortBy);
  }, [searchQuery, activeWaterTypes, activeBudget, activeRegion, minPeaceScore, sortBy]);

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handleWaterTypeToggle = (type) => {
    setActiveWaterTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const hasActiveFilters =
    activeWaterTypes.length > 0 ||
    activeBudget !== null ||
    activeRegion !== null ||
    minPeaceScore !== null ||
    searchQuery !== '';

  const clearAll = () => {
    setSearchQuery('');
    setActiveWaterTypes([]);
    setActiveBudget(null);
    setActiveRegion(null);
    setMinPeaceScore(null);
    setSortBy('recommended');
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Page meta */}
      <title>Explore Destinations — ZoneEdan</title>

      <DestinationsHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        resultCount={filtered.length}
        totalCount={destinations.length}
      />

      <FilterBar
        activeWaterTypes={activeWaterTypes}
        activeBudget={activeBudget}
        activeRegion={activeRegion}
        minPeaceScore={minPeaceScore}
        sortBy={sortBy}
        onWaterTypeToggle={handleWaterTypeToggle}
        onBudgetChange={setActiveBudget}
        onRegionChange={setActiveRegion}
        onPeaceScoreChange={setMinPeaceScore}
        onSortChange={setSortBy}
        onClearAll={clearAll}
        hasActiveFilters={hasActiveFilters}
      />

      {filtered.length > 0 ? (
        <DestinationGrid destinations={filtered} />
      ) : (
        <EmptyState
          activeWaterTypes={activeWaterTypes}
          searchQuery={searchQuery}
          onClearAll={clearAll}
        />
      )}
    </>
  );
};

export default Destinations;
