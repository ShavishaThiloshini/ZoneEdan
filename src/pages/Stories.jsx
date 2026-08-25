import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import { stories } from '../data/stories';
import { ArrowRight, Clock, User as UserIcon } from 'lucide-react';

const Stories = () => {
  return (
    <>
      <title>Travel Stories — ZoneEdan</title>
      
      {/* Header */}
      <section className="bg-deep-forest text-white pt-32 pb-16">
        <PageContainer>
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6">Travel Stories</h1>
            <p className="text-xl text-soft-cream/90 max-w-2xl leading-relaxed">
              Inspiration, guides, and stories to help you plan your perfect escape.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Stories List */}
      <section className="py-16 md:py-24 bg-soft-cream min-h-[50vh]">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <article 
                key={story.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(23,59,53,0.04)] hover:shadow-[0_8px_24px_rgba(23,59,53,0.08)] transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-ocean-teal focus-within:ring-offset-2"
              >
                {/* Image */}
                <Link to={`/stories/${story.slug}`} className="block relative aspect-video overflow-hidden outline-none" aria-label={`Read story: ${story.title}`}>
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </Link>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-medium text-meta mb-4">
                    <span className="flex items-center"><UserIcon size={14} className="mr-1" /> {story.author}</span>
                    <span className="flex items-center"><Clock size={14} className="mr-1" /> {story.readTime}</span>
                  </div>
                  
                  <h3 className="heading-card mb-3">
                    <Link to={`/stories/${story.slug}`} className="hover:text-ocean-teal transition-colors">
                      {story.title}
                    </Link>
                  </h3>
                  
                  <p className="text-deep-forest/70 text-sm mb-6 line-clamp-3">
                    {story.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-aqua-mist">
                    <Link to={`/stories/${story.slug}`} className="inline-flex items-center text-sm font-medium text-ocean-teal hover:text-deep-teal transition-colors group/link">
                      Read Full Story 
                      <ArrowRight size={16} className="ml-1 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>
    </>
  );
};

export default Stories;
