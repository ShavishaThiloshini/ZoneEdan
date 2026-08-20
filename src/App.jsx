import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageContainer from './components/layout/PageContainer';
import Button from './components/ui/Button';
import DestinationCard from './components/destination/DestinationCard';

// Sample data to preview the card component
const sampleDestination = {
  id: 'diyaluma-falls',
  title: 'Diyaluma Falls',
  location: 'Badulla, Sri Lanka',
  type: '💦 Waterfall',
  image: 'https://images.unsplash.com/photo-1546708973-2e4bd64a3951?q=80&w=800&auto=format&fit=crop', // Temporary placeholder
  peaceScore: '4.7',
  budgetLabel: 'Budget Friendly',
  priceRange: 'LKR 8,000 – 15,000',
};

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <PageContainer>
          {/* Hero Section Preview */}
          <section className="mb-20 mt-10 max-w-3xl">
            <h1 className="heading-hero mb-6">
              Find Your <br />
              <span className="text-ocean-teal">Little Eden.</span>
            </h1>
            <p className="text-body-large mb-8 text-deep-forest/80 max-w-xl">
              Peaceful water escapes across Sri Lanka. A digital travel journal to help you discover where to slow down.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Explore Escapes</Button>
              <Button variant="outline" size="lg">View Map</Button>
            </div>
          </section>

          {/* Component Preview Section */}
          <section>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="heading-section mb-2">Featured Places</h2>
                <p className="text-body text-deep-forest/70">Quiet corners waiting to be discovered.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <DestinationCard destination={sampleDestination} />
              <DestinationCard destination={{...sampleDestination, id: '2', title: 'Secret Lagoon', type: '🌴 Lagoon'}} />
              <DestinationCard destination={{...sampleDestination, id: '3', title: 'Silent Beach', type: '🏖️ Beach'}} />
            </div>
          </section>
        </PageContainer>
      </main>

      <Footer />
    </div>
  );
}

export default App;
