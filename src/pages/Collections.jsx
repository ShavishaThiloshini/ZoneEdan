import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import { collections } from '../data/collections';
import { ArrowRight } from 'lucide-react';

const Collections = () => {
  return (
    <>
      <title>Curated Collections — ZoneEdan</title>
      
      {/* Header */}
      <section className="bg-deep-forest text-white pt-32 pb-16">
        <PageContainer>
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">Curated Collections</h1>
            <p className="text-xl text-soft-cream/90 max-w-2xl leading-relaxed">
              Explore our hand-picked groupings of Sri Lanka's finest water and nature escapes.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24 bg-soft-cream min-h-[50vh]">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Link 
                key={collection.id} 
                to={`/collections/${collection.slug}`}
                aria-label={`View ${collection.title} collection`}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(23,59,53,0.04)] hover:shadow-[0_8px_24px_rgba(23,59,53,0.12)] transition-all duration-300 transform hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-ocean-teal focus-visible:ring-offset-2"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={collection.image} 
                    alt={collection.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-forest via-deep-forest/60 to-deep-forest/10" />
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-serif font-bold mb-2 text-white group-hover:text-aqua-mist transition-colors drop-shadow-lg">
                    {collection.title}
                  </h3>
                  <p className="text-sm text-soft-cream/90 line-clamp-2 mb-4">
                    {collection.description}
                  </p>
                  <div className="inline-flex items-center text-sm font-medium text-aqua-mist group-hover:text-white transition-colors">
                    View Collection <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </PageContainer>
      </section>
    </>
  );
};

export default Collections;
