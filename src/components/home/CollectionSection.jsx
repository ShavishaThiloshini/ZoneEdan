import React from 'react';
import PageContainer from '../layout/PageContainer';
import { Link } from 'react-router-dom';

const collections = [
  {
    id: 'hidden-waterfalls',
    title: 'Hidden Waterfalls',
    description: 'Off the beaten path cascades that take a little effort to find.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'tranquil-lagoons',
    title: 'Tranquil Lagoons',
    description: 'Calm, still waters perfect for kayaking and slowing down.',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800&auto=format&fit=crop'
  }
];

const CollectionSection = () => {
  return (
    <section className="py-20 bg-white">
      <PageContainer>
        <div className="mb-12">
          <h2 className="heading-section mb-4 text-center md:text-left">Curated Collections</h2>
          <p className="text-body text-deep-forest/80 text-center md:text-left max-w-2xl">
            Explore thematic collections handpicked for different kinds of escapes. 
            From wild surf spots to the quietest inland lakes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map(collection => (
            <Link 
              key={collection.id} 
              to={`/collections/${collection.id}`}
              className="group relative block aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={collection.image} 
                alt={collection.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/80 via-deep-forest/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-aqua-mist transition-colors">
                  {collection.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base mb-4 max-w-sm">
                  {collection.description}
                </p>
                <span className="inline-flex items-center text-white font-medium text-sm border border-white/30 rounded-full px-4 py-1.5 w-max backdrop-blur-sm group-hover:bg-white group-hover:text-deep-forest transition-colors">
                  Explore Collection →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </PageContainer>
    </section>
  );
};

export default CollectionSection;
