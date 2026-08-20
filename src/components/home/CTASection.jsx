import React from 'react';
import PageContainer from '../layout/PageContainer';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 bg-deep-teal relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-ocean-teal rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-fresh-teal rounded-full blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

      <PageContainer className="relative z-10 text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight text-white mb-6">
          Ready to find your peace?
        </h2>
        <p className="font-sans text-lg text-white/90 mb-10 max-w-2xl mx-auto">
          Join ZoneEdan to save your favorite escapes, create custom collections, and discover the quietest corners of Sri Lanka.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/signup">
            <Button size="lg" className="w-full sm:w-auto bg-white text-deep-teal hover:bg-aqua-mist hover:text-deep-forest border-none">
              Create an Account
            </Button>
          </Link>
          <Link to="/destinations">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 hover:text-white">
              Explore First
            </Button>
          </Link>
        </div>
      </PageContainer>
    </section>
  );
};

export default CTASection;
