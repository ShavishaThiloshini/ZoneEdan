import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User as UserIcon, Calendar } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import { stories } from '../data/stories';
import ReactMarkdown from 'react-markdown';

const StoryDetail = () => {
  const { id } = useParams(); // actually a slug
  
  const story = useMemo(() => stories.find(s => s.slug === id), [id]);

  if (!story) {
    return (
      <PageContainer className="py-32 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="heading-hero mb-4">Story Not Found</h1>
        <Link to="/stories" className="text-ocean-teal hover:text-deep-teal inline-flex items-center">
          <ArrowLeft size={16} className="mr-2" /> Back to Stories
        </Link>
      </PageContainer>
    );
  }

  return (
    <>
      <title>{story.title} — ZoneEdan</title>
      
      {/* Hero Image */}
      <section className="relative pt-24 h-[50vh] min-h-[400px]">
        <img 
          src={story.image} 
          alt={story.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/90 via-deep-forest/40 to-transparent" />
        
        <PageContainer className="absolute inset-0 flex flex-col justify-end pb-12 text-white z-10">
          <Link to="/stories" className="inline-flex items-center text-aqua-mist hover:text-white mb-6 transition-colors text-sm font-medium w-fit">
            <ArrowLeft size={16} className="mr-2" /> Back to all stories
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">{story.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-soft-cream/90">
              <span className="flex items-center"><UserIcon size={16} className="mr-1.5" /> {story.author}</span>
              <span className="flex items-center"><Calendar size={16} className="mr-1.5" /> {story.date}</span>
              <span className="flex items-center"><Clock size={16} className="mr-1.5" /> {story.readTime}</span>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-soft-cream">
        <PageContainer>
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-deep-forest/5">
            <div className="prose prose-lg prose-headings:font-serif prose-headings:text-deep-forest prose-a:text-ocean-teal hover:prose-a:text-deep-teal prose-img:rounded-xl mx-auto">
              <ReactMarkdown>{story.content}</ReactMarkdown>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
};

export default StoryDetail;
