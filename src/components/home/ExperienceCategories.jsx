import React from 'react';
import PageContainer from '../layout/PageContainer';
import { Link } from 'react-router-dom';

const categories = [
  { icon: '🏖️', name: 'Beaches', slug: 'beach' },
  { icon: '💦', name: 'Waterfalls', slug: 'waterfall' },
  { icon: '🏞️', name: 'Lakes', slug: 'lake' },
  { icon: '🌴', name: 'Lagoons', slug: 'lagoon' },
  { icon: '🌊', name: 'Rivers', slug: 'river' },
  { icon: '🏝️', name: 'Islands', slug: 'island' },
  { icon: '🏄', name: 'Surf', slug: 'surf' },
];

const ExperienceCategories = () => {
  return (
    <section className="py-16 bg-aqua-mist/30">
      <PageContainer>
        <div className="text-center mb-10">
          <h2 className="heading-section mb-3">Explore by Water</h2>
          <p className="text-body text-deep-forest/70">Find the kind of water that brings you peace.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.slug} 
              to={`/destinations?type=${cat.slug}`}
              className="group flex flex-col items-center justify-center p-4 md:p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-28 h-28 md:w-32 md:h-32 hover:-translate-y-1 hover:bg-aqua-mist/50"
            >
              <span className="text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</span>
              <span className="font-sans font-medium text-deep-forest text-sm md:text-base">{cat.name}</span>
            </Link>
          ))}
        </div>
      </PageContainer>
    </section>
  );
};

export default ExperienceCategories;
