import React from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from '../destination/DestinationCard';
import PageContainer from '../layout/PageContainer';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { destinations } from '../../data/destinations';

// Pick the first 3 featured destinations from the dataset
const featuredDestinations = destinations
  .filter(d => d.featured)
  .slice(0, 3);

const FeaturedDestinations = () => {
  return (
    <section className="py-20 bg-soft-cream">
      <PageContainer>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="heading-section mb-4">Featured Escapes</h2>
            <p className="text-body text-deep-forest/80">
              Quiet corners waiting to be discovered. Handpicked destinations for a peaceful retreat.
            </p>
          </div>
          <div className="hidden md:block">
            <Link to="/destinations">
              <Button variant="outline" className="group">
                View All 
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map(dest => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>

        <div className="mt-10 md:hidden flex justify-center">
          <Link to="/destinations" className="w-full">
            <Button variant="outline" className="w-full group">
              View All Escapes
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </PageContainer>
    </section>
  );
};

export default FeaturedDestinations;

