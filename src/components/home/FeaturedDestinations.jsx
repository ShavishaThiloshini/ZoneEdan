import React from 'react';
import DestinationCard from '../destination/DestinationCard';
import PageContainer from '../layout/PageContainer';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const mockDestinations = [
  {
    id: 'diyaluma-falls',
    title: 'Diyaluma Falls',
    location: 'Badulla, Sri Lanka',
    type: '💦 Waterfall',
    image: 'https://images.unsplash.com/photo-1546708973-2e4bd64a3951?q=80&w=800&auto=format&fit=crop',
    peaceScore: '4.7',
    budgetLabel: 'Budget Friendly',
    priceRange: 'LKR 8,000 – 15,000',
  },
  {
    id: 'hiriketiya-bay',
    title: 'Hiriketiya Bay',
    location: 'Dickwella, Sri Lanka',
    type: '🏄 Surf',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800&auto=format&fit=crop',
    peaceScore: '3.8',
    budgetLabel: 'Moderate',
    priceRange: 'LKR 15,000 – 25,000',
  },
  {
    id: 'koggala-lake',
    title: 'Koggala Lake',
    location: 'Galle, Sri Lanka',
    type: '🏞️ Lake',
    image: 'https://images.unsplash.com/photo-1620023616239-650a2948c26c?q=80&w=800&auto=format&fit=crop',
    peaceScore: '4.9',
    budgetLabel: 'Budget Friendly',
    priceRange: 'LKR 5,000 – 10,000',
  }
];

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
            <Button variant="outline" className="group">
              View All 
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockDestinations.map(dest => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>

        <div className="mt-10 md:hidden flex justify-center">
          <Button variant="outline" className="w-full group">
            View All Escapes
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </PageContainer>
    </section>
  );
};

export default FeaturedDestinations;
