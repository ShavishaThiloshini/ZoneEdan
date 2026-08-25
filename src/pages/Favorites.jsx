import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import DestinationGrid from '../components/destinations/DestinationGrid';
import { destinations } from '../data/destinations';
import { useFavorites } from '../contexts/FavoritesContext';

const Favorites = () => {
  const { favorites } = useFavorites();

  const favoriteDestinations = useMemo(() => {
    return destinations.filter((d) => favorites.includes(d.slug));
  }, [favorites]);

  return (
    <>
      <title>Your Favorites — ZoneEdan</title>
      
      {/* Header */}
      <section className="bg-deep-forest text-white pt-32 pb-16">
        <PageContainer>
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">Your Saved Escapes</h1>
            <p className="text-xl text-soft-cream/90 max-w-2xl leading-relaxed">
              All your favorite relaxing destinations in one place.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 min-h-[50vh]">
        <PageContainer>
          {favoriteDestinations.length > 0 ? (
            <DestinationGrid destinations={favoriteDestinations} />
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-20 bg-white rounded-3xl border border-deep-forest/5 p-8 shadow-sm">
              <div className="w-20 h-20 bg-aqua-mist rounded-full flex items-center justify-center mb-6 text-deep-teal">
                <Heart size={32} />
              </div>
              <h2 className="heading-section mb-4">No favorites yet</h2>
              <p className="text-deep-forest/70 mb-8 max-w-md mx-auto">
                Start exploring our curated peaceful destinations and save the ones you love for later.
              </p>
              <Link to="/destinations" className="btn-primary inline-flex items-center">
                Explore Destinations
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          )}
        </PageContainer>
      </section>
    </>
  );
};

export default Favorites;
