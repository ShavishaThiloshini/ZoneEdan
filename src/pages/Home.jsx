import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ExperienceCategories from '../components/home/ExperienceCategories';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import PeacefulSection from '../components/home/PeacefulSection';
import BudgetSection from '../components/home/BudgetSection';
import CollectionSection from '../components/home/CollectionSection';
import StoryPreview from '../components/home/StoryPreview';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedDestinations />
      <ExperienceCategories />
      <PeacefulSection />
      <BudgetSection />
      <CollectionSection />
      <StoryPreview />
      <CTASection />
    </div>
  );
};

export default Home;
