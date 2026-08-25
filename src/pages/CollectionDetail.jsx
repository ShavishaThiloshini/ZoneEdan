import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import DestinationGrid from '../components/destinations/DestinationGrid';
import { collections } from '../data/collections';
import { destinations } from '../data/destinations';

const CollectionDetail = () => {
  const { id } = useParams(); // actually a slug
  
  const collection = useMemo(() => collections.find(c => c.slug === id), [id]);
  
  const collectionDestinations = useMemo(() => {
    if (!collection) return [];
    return destinations.filter(d => collection.destinations.includes(d.slug));
  }, [collection]);

  if (!collection) {
    return (
      <PageContainer className="py-32 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="heading-hero mb-4">Collection Not Found</h1>
        <Link to="/collections" className="text-ocean-teal hover:text-deep-teal inline-flex items-center">
          <ArrowLeft size={16} className="mr-2" /> Back to Collections
        </Link>
      </PageContainer>
    );
  }

  return (
    <>
      <title>{collection.title} — ZoneEdan Collections</title>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={collection.image} 
            alt={collection.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-deep-forest/70 backdrop-blur-[2px]" />
        </div>
        
        <PageContainer className="relative z-10 text-white">
          <Link to="/collections" className="inline-flex items-center text-aqua-mist hover:text-white mb-6 transition-colors text-sm font-medium">
            <ArrowLeft size={16} className="mr-2" /> Back to all collections
          </Link>
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">{collection.title}</h1>
            <p className="text-xl text-soft-cream/90 max-w-2xl leading-relaxed">
              {collection.description}
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 md:py-24 bg-soft-cream min-h-[40vh]">
        <PageContainer>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="heading-section">Destinations in this collection</h2>
            <span className="text-deep-forest/70 font-medium bg-white px-3 py-1 rounded-full border border-deep-forest/10 shadow-sm text-sm">
              {collectionDestinations.length} places
            </span>
          </div>
          
          <DestinationGrid destinations={collectionDestinations} />
        </PageContainer>
      </section>
    </>
  );
};

export default CollectionDetail;
