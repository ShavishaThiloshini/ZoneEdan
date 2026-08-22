import React from 'react';
import Badge from '../ui/Badge';
import { MapPin, Heart, ArrowRight, Leaf, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  const { 
    id,
    title, 
    location, 
    type, 
    image, 
    peaceScore, 
    budgetLabel, 
    priceRange 
  } = destination;

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-deep-teal hover:bg-white hover:text-ocean-teal transition-colors">
          <Heart size={20} className="hover:fill-current" />
        </button>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-5">
        <div className="flex justify-between items-start mb-3">
          <Badge>{type}</Badge>
        </div>

        <h3 className="heading-card mb-1">{title}</h3>
        
        <div className="flex items-center text-meta mb-4">
          <MapPin size={14} className="mr-1 inline" />
          {location}
        </div>

        {/* Stats Row */}
        <div className="flex justify-between items-center text-sm font-medium text-deep-forest mb-4 border-t border-aqua-mist pt-4">
          <div className="flex items-center">
            <Leaf size={16} className="mr-1 text-ocean-teal" />
            {peaceScore} Peace
          </div>
          <div className="flex items-center text-deep-teal">
            <Coins size={16} className="mr-1" />
            {budgetLabel}
          </div>
        </div>

        <div className="text-sm text-deep-forest/70 mb-4">
          {priceRange}
        </div>

        <div className="mt-auto pt-2">
          <Link to={`/destinations/${id}`} className="inline-flex items-center text-ocean-teal font-medium hover:text-deep-teal transition-colors group/link">
            Explore 
            <ArrowRight size={16} className="ml-1 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
