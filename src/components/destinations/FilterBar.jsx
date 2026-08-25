import React, { useState } from 'react';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import PageContainer from '../layout/PageContainer';
import {
  WATER_TYPE_OPTIONS,
  BUDGET_OPTIONS,
  REGION_OPTIONS,
  PEACE_SCORE_OPTIONS,
  SORT_OPTIONS,
  ACTIVITIES_OPTIONS,
} from '../../data/destinations';

// ── Pill Button ────────────────────────────────────────────────────────────────
const Pill = ({ label, prefix, active, onClick }) => (
  <button
    onClick={onClick}
    className={`
      inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-sans font-medium
      transition-all duration-200 whitespace-nowrap select-none border
      ${active
        ? 'bg-deep-teal text-white border-deep-teal shadow-sm'
        : 'bg-white text-deep-forest/70 border-deep-forest/15 hover:border-deep-teal/40 hover:text-deep-teal'
      }
    `}
  >
    {prefix && <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{prefix}</span>}
    {label}
  </button>
);

// ── Sort Dropdown ──────────────────────────────────────────────────────────────
const SortDropdown = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const selected = SORT_OPTIONS.find((o) => o.value === value);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((p) => !p)}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-sans font-medium bg-white border border-deep-forest/15 hover:border-deep-teal/40 hover:text-deep-teal text-deep-forest/70 transition-all duration-200 whitespace-nowrap"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        Sort: {selected?.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <>
          {/* backdrop */}
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <ul
            role="listbox"
            className="absolute right-0 top-full mt-2 z-20 bg-white border border-deep-forest/10 rounded-xl shadow-lg py-1 min-w-[180px]"
          >
            {SORT_OPTIONS.map((opt) => (
              <li key={opt.value}>
                <button
                  role="option"
                  aria-selected={value === opt.value}
                  onClick={() => { onChange(opt.value); setOpen(false); }}
                  className={`
                    w-full text-left px-4 py-2.5 text-sm font-sans transition-colors
                    ${value === opt.value
                      ? 'text-deep-teal font-semibold bg-aqua-mist'
                      : 'text-deep-forest/70 hover:bg-soft-cream hover:text-deep-teal'
                    }
                  `}
                >
                  {opt.label}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

// ── Filter Group Label ─────────────────────────────────────────────────────────
const FilterGroup = ({ label, children }) => (
  <div className="flex items-center gap-2 flex-wrap">
    <span className="text-xs font-sans font-semibold text-deep-forest/40 uppercase tracking-wider pr-1">
      {label}
    </span>
    {children}
  </div>
);

// ── Main FilterBar ─────────────────────────────────────────────────────────────
const FilterBar = ({
  activeWaterTypes,
  activeBudget,
  activeRegion,
  minPeaceScore,
  activeActivities,
  sortBy,
  onWaterTypeToggle,
  onBudgetChange,
  onRegionChange,
  onPeaceScoreChange,
  onActivityToggle,
  onSortChange,
  onClearAll,
  hasActiveFilters,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const filterContent = (
    <div className="flex flex-col gap-4">
      {/* Water Type */}
      <FilterGroup label="Water">
        {WATER_TYPE_OPTIONS.map((opt) => (
          <Pill
            key={opt.value}
            label={opt.label}
            prefix={opt.icon}
            active={activeWaterTypes.includes(opt.value)}
            onClick={() => onWaterTypeToggle(opt.value)}
          />
        ))}
      </FilterGroup>

      {/* Divider */}
      <div className="h-px bg-deep-forest/8" />

      {/* Budget + Region + Peace + Sort in one row on md+ */}
      <div className="flex flex-wrap gap-x-6 gap-y-4">
        <FilterGroup label="Budget">
          {BUDGET_OPTIONS.map((opt) => (
            <Pill
              key={opt.value}
              label={opt.label}
              active={activeBudget === opt.value}
              onClick={() => onBudgetChange(activeBudget === opt.value ? null : opt.value)}
            />
          ))}
        </FilterGroup>

        <FilterGroup label="Region">
          {REGION_OPTIONS.map((opt) => (
            <Pill
              key={opt.value}
              label={opt.label}
              active={activeRegion === opt.value}
              onClick={() => onRegionChange(activeRegion === opt.value ? null : opt.value)}
            />
          ))}
        </FilterGroup>

        <FilterGroup label="Peace Score">
          {PEACE_SCORE_OPTIONS.map((opt) => (
            <Pill
              key={opt.value}
              label={opt.label}
              active={minPeaceScore === opt.value}
              onClick={() => onPeaceScoreChange(minPeaceScore === opt.value ? null : opt.value)}
            />
          ))}
        </FilterGroup>

        <FilterGroup label="Activities">
          {ACTIVITIES_OPTIONS.map((opt) => (
            <Pill
              key={opt.value}
              label={opt.label}
              active={activeActivities.includes(opt.value)}
              onClick={() => onActivityToggle(opt.value)}
            />
          ))}
        </FilterGroup>
      </div>
    </div>
  );

  return (
    <div className="sticky top-0 z-30 bg-soft-cream border-b border-deep-forest/8 shadow-sm">
      <PageContainer className="py-4">
        {/* ── Mobile toggle ─────────────────────────────────── */}
        <div className="flex items-center justify-between md:hidden mb-3">
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-deep-forest/15 text-sm font-sans font-medium text-deep-forest/70 hover:border-deep-teal/40 hover:text-deep-teal transition-colors"
          >
            <SlidersHorizontal size={15} />
            Filters
            {hasActiveFilters && (
              <span className="bg-deep-teal text-white text-xs rounded-full px-1.5 py-0.5 leading-none">
                on
              </span>
            )}
          </button>

          <SortDropdown value={sortBy} onChange={onSortChange} />
        </div>

        {/* Mobile expanded */}
        {mobileOpen && (
          <div className="md:hidden bg-white rounded-2xl border border-deep-forest/10 p-4 mb-3 shadow-sm">
            {filterContent}
          </div>
        )}

        {/* ── Desktop always-visible ─────────────────────────── */}
        <div className="hidden md:block">
          {filterContent}
        </div>

        {/* ── Bottom bar: Clear + Sort (desktop) ─────────────── */}
        <div className="hidden md:flex items-center justify-between mt-4 pt-3 border-t border-deep-forest/8">
          <div>
            {hasActiveFilters && (
              <button
                onClick={onClearAll}
                className="inline-flex items-center gap-1.5 text-sm font-sans text-deep-teal hover:text-ocean-teal transition-colors group"
              >
                <X size={14} className="group-hover:rotate-90 transition-transform duration-200" />
                Clear all filters
              </button>
            )}
          </div>
          <SortDropdown value={sortBy} onChange={onSortChange} />
        </div>

        {/* ── Mobile clear ───────────────────────────────────── */}
        {hasActiveFilters && (
          <div className="md:hidden flex justify-end mt-2">
            <button
              onClick={onClearAll}
              className="inline-flex items-center gap-1.5 text-sm font-sans text-deep-teal hover:text-ocean-teal transition-colors"
            >
              <X size={14} />
              Clear filters
            </button>
          </div>
        )}
      </PageContainer>
    </div>
  );
};

export default FilterBar;
