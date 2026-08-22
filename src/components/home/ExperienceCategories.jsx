import React from 'react';
import PageContainer from '../layout/PageContainer';
import { Link } from 'react-router-dom';
import { Umbrella, Droplets, Droplet, Trees, Waves, Map, Ship } from 'lucide-react';

const categories = [
  { icon: Umbrella, name: 'Beaches', slug: 'beach' },
  { icon: Droplets, name: 'Waterfalls', slug: 'waterfall' },
  { icon: Droplet, name: 'Lakes', slug: 'lake' },
  { icon: Trees, name: 'Lagoons', slug: 'lagoon' },
  { icon: Waves, name: 'Rivers', slug: 'river' },
  { icon: Map, name: 'Islands', slug: 'island' },
  { icon: Ship, name: 'Surf', slug: 'surf' },
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
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link 
                key={cat.slug} 
                to={`/destinations?type=${cat.slug}`}
                className="group flex flex-col items-center justify-center p-4 md:p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-28 h-28 md:w-32 md:h-32 hover:-translate-y-1 hover:bg-aqua-mist/50 text-deep-teal"
              >
                <Icon size={40} className="mb-3 group-hover:scale-110 transition-transform stroke-[1.5]" />
                <span className="font-sans font-medium text-deep-forest text-sm md:text-base">{cat.name}</span>
              </Link>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
};

export default ExperienceCategories;
