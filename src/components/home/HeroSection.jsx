import React from 'react';
import SearchBar from './SearchBar';
import PageContainer from '../layout/PageContainer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=2070&auto=format&fit=crop"
          alt="Peaceful waterfall surrounded by lush jungle in Sri Lanka"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-forest/40 via-deep-forest/20 to-soft-cream"></div>
      </div>

      <PageContainer className="relative z-10 flex flex-col items-center text-center mt-12 md:mt-24">
        {/* Subtitle / Eyebrow */}
        <span className="font-sans font-medium tracking-[0.2em] uppercase text-white/90 mb-4 text-sm md:text-base drop-shadow-md">
          ZoneEdan
        </span>

        {/* Main Headline */}
        <h1 className="heading-hero text-white mb-6 drop-shadow-lg max-w-4xl">
          Find Your <br className="md:hidden" />
          <span className="text-aqua-mist">Little Eden.</span>
        </h1>

        {/* Description */}
        <p className="text-body-large text-white/95 mb-12 max-w-2xl drop-shadow-md">
          Peaceful water escapes across Sri Lanka. A digital travel journal to discover places where the world feels a little quieter.
        </p>

        {/* Search Component */}
        <div className="w-full max-w-2xl px-4 md:px-0 mb-8">
          <SearchBar />
        </div>

        {/* Quick Link */}
        <Link
          to="/destinations"
          className="inline-flex items-center text-deep-teal hover:text-ocean-teal font-medium transition-colors group"
        >
          Explore Water Escapes
          <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </PageContainer>
    </section>
  );
};

export default HeroSection;
