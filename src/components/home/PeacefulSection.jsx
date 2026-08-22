import React from 'react';
import PageContainer from '../layout/PageContainer';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const PeacefulSection = () => {
  return (
    <section className="py-24 bg-soft-cream overflow-hidden relative">
      <PageContainer>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image/Editorial Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden">
              <img 
                src="https://picsum.photos/seed/peaceful/1000/1250" 
                alt="A quiet corner in nature" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Peace Score Floating Card */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white p-6 rounded-2xl shadow-lg w-64 border border-aqua-mist">
              <div className="text-xs font-sans font-bold text-deep-teal tracking-wider uppercase mb-3">
                ZoneEdan Peace
              </div>
              <div className="flex items-center mb-1">
                <span className="text-3xl font-serif font-bold text-deep-forest mr-2">4.7</span>
                <span className="text-lg text-deep-forest/50 font-serif">/ 5</span>
              </div>
              <div className="text-sm font-medium text-deep-forest mb-4 flex items-center">
                <Leaf size={16} className="mr-2 text-ocean-teal" /> Peaceful
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs text-deep-forest/70">
                  <span>Nature</span>
                  <div className="flex gap-0.5"><div className="w-8 h-1.5 bg-ocean-teal rounded-full"></div></div>
                </div>
                <div className="flex justify-between items-center text-xs text-deep-forest/70">
                  <span>Crowd</span>
                  <div className="flex gap-0.5"><div className="w-6 h-1.5 bg-ocean-teal rounded-full"></div><div className="w-2 h-1.5 bg-aqua-mist rounded-full"></div></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <h2 className="heading-section mb-6">
              Places where the world feels a little quieter.
            </h2>
            <p className="text-body-large mb-8">
              We developed the <span className="font-bold text-deep-teal">Peace Score</span> to help you find truly relaxing environments. We evaluate the presence of nature, crowd density, and noise levels so you know exactly what to expect before you arrive.
            </p>
            <Link to="/destinations?sort=peace">
              <Button size="lg">Find Peaceful Escapes</Button>
            </Link>
          </div>
          
        </div>
      </PageContainer>
    </section>
  );
};

export default PeacefulSection;
