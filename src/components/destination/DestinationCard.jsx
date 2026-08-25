import React from 'react';
import Badge from '../ui/Badge';
import { MapPin, Heart, ArrowRight, Leaf, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../contexts/FavoritesContext';

const DestinationCard = ({ destination }) => {
  const { 
    slug,
    name, 
    location, 
    type, 
    images, 
    peaceScore, 
    budget,
    estimatedCost
  } = destination;
  
  const { isFavorite, toggleFavorite } = useFavorites();
  const favored = isFavorite(slug);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(slug);
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(23,59,53,0.04)] hover:shadow-[0_8px_24px_rgba(23,59,53,0.08)] transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Link to={`/destinations/${slug}`} className="block w-full h-full" aria-label={`View details for ${name}`}>
          <img 
            src={images?.[0]} 
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        <button 
          onClick={handleFavoriteClick}
          aria-label={favored ? `Remove ${name} from favorites` : `Add ${name} to favorites`}
          className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-deep-teal hover:bg-white hover:text-ocean-teal hover:scale-110 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ocean-teal"
        >
          <Heart 
            size={20} 
            className={`transition-colors ${favored ? 'fill-red-500 text-red-500' : 'hover:fill-current'}`} 
          />
        </button>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-5">
        <div className="flex justify-between items-start mb-3">
          <Badge>{type}</Badge>
        </div>

        <h3 className="heading-card mb-1">{name}</h3>
        
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
            {budget}
          </div>
        </div>

        <div className="text-sm text-deep-forest/70 mb-4">
          From LKR {estimatedCost?.toLocaleString()}
        </div>

        <div className="mt-auto pt-2">
          <Link to={`/destinations/${slug}`} className="inline-flex items-center text-ocean-teal font-medium hover:text-deep-teal transition-colors group/link">
            Explore 
            <ArrowRight size={16} className="ml-1 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;


