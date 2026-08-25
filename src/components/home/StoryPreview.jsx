import React from 'react';
import PageContainer from '../layout/PageContainer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const stories = [
  {
    id: '5-peaceful-waterfalls',
    tag: 'TRAVEL GUIDE',
    title: '5 Peaceful Waterfalls to Explore in Sri Lanka',
    description: 'Discover places where water meets the wild. A guide to the most serene cascades away from the crowds.',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'guide-to-southern-beaches',
    tag: 'EDITORIAL',
    title: 'Finding Quiet on the Southern Coast',
    description: 'How to escape the busy tourist hubs and find your own private stretch of sand in the south.',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800&auto=format&fit=crop'
  }
];

const StoryPreview = () => {
  return (
    <section className="py-20 bg-soft-cream">
      <PageContainer>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="heading-section mb-4">Travel Stories</h2>
            <p className="text-body text-deep-forest/80">
              Journal entries, guides, and inspiration for your next escape.
            </p>
          </div>
          <Link to="/stories" className="hidden md:inline-flex items-center text-deep-teal hover:text-ocean-teal font-medium group">
            Read all stories 
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {stories.map(story => (
            <div key={story.id} className="group flex flex-col">
              <Link to={`/stories/${story.id}`} className="block aspect-[3/2] overflow-hidden rounded-xl mb-6">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              
              <div className="text-xs font-sans font-bold text-deep-teal tracking-wider uppercase mb-3">
                {story.tag}
              </div>
              
              <Link to={`/stories/${story.id}`}>
                <h3 className="font-serif text-2xl font-bold text-deep-forest mb-3 group-hover:text-ocean-teal transition-colors">
                  {story.title}
                </h3>
              </Link>
              
              <p className="text-body text-deep-forest/70 mb-4">
                {story.description}
              </p>
              
              <Link to={`/stories/${story.id}`} className="inline-flex items-center text-sm font-medium text-ocean-teal hover:text-deep-teal transition-colors group/link">
                Read Story →
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <Link to="/stories" className="inline-flex items-center text-deep-teal font-medium w-full justify-center">
            Read all stories <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </PageContainer>
    </section>
  );
};

export default StoryPreview;
