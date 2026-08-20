import React from 'react';
import PageContainer from '../layout/PageContainer';
import { Link } from 'react-router-dom';

const budgetTiers = [
  { label: 'Under LKR 5,000', query: 'low' },
  { label: 'LKR 5K – 10K', query: 'budget' },
  { label: 'LKR 10K – 20K', query: 'moderate' },
  { label: 'LKR 20K+', query: 'premium' },
];

const BudgetSection = () => {
  return (
    <section className="py-20 bg-warm-sand/30">
      <PageContainer>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="w-full md:w-5/12 text-center md:text-left">
            <h2 className="heading-section mb-4">
              Travel Beautifully.<br />
              Spend Thoughtfully.
            </h2>
            <p className="text-body text-deep-forest/80 mb-8 max-w-md mx-auto md:mx-0">
              Affordable travel can still be beautiful. Find your next escape based on your budget without compromising on peace and nature.
            </p>
          </div>

          <div className="w-full md:w-6/12">
            <div className="flex flex-col gap-4">
              {budgetTiers.map((tier, index) => (
                <Link 
                  key={index} 
                  to={`/destinations?budget=${tier.query}`}
                  className="group flex items-center justify-between p-5 bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-warm-sand"
                >
                  <span className="font-serif text-xl font-bold text-deep-forest">{tier.label}</span>
                  <span className="text-warm-sand group-hover:text-ocean-teal transition-colors text-2xl font-serif">→</span>
                </Link>
              ))}
            </div>
          </div>
          
        </div>
      </PageContainer>
    </section>
  );
};

export default BudgetSection;
