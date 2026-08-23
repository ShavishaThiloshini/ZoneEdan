import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { destinations } from '../data/destinations';
import PageContainer from '../components/layout/PageContainer';
import Badge from '../components/ui/Badge';
import DestinationCard from '../components/destination/DestinationCard';
import { 
  MapPin, 
  Leaf, 
  Coins, 
  Heart, 
  Clock, 
  Calendar, 
  Activity, 
  Info, 
  ArrowLeft 
} from 'lucide-react';

const DestinationDetail = () => {
  const { slug } = useParams();
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const destination = destinations.find(d => d.slug === slug) || destinations[0];
  
  // Find related destinations (same region, excluding current)
  const nearbyDestinations = destinations
    .filter(d => d.region === destination.region && d.id !== destination.id)
    .slice(0, 3);

  return (
    <div className="bg-soft-cream min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-full object-cover"
        />
        
        {/* Top Navigation */}
        <div className="absolute top-0 left-0 w-full z-20 p-6 md:p-10 flex justify-between items-center">
          <Link to="/destinations" className="flex items-center text-white bg-black/30 hover:bg-black/50 backdrop-blur-md px-4 py-2 rounded-full transition-all">
            <ArrowLeft size={20} className="mr-2" />
            Back to Explore
          </Link>
          <button className="p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all transform hover:scale-110">
            <Heart size={24} />
          </button>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 w-full z-20 p-6 md:p-12 lg:px-24 bg-gradient-to-t from-black/80 to-transparent">
          <Badge className="bg-ocean-teal/90 text-white border-none mb-4 backdrop-blur-sm">
            {destination.type}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{destination.name}</h1>
          <div className="flex items-center text-white/90 text-lg">
            <MapPin size={20} className="mr-2 text-sand-gold" />
            {destination.location}
          </div>
        </div>
      </div>

      <PageContainer className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Quick Info Bar */}
            <div className="flex flex-wrap gap-6 p-6 bg-white rounded-2xl shadow-sm border border-aqua-mist/50">
              <div className="flex items-center flex-1 min-w-[120px]">
                <div className="w-12 h-12 rounded-full bg-ocean-teal/10 flex items-center justify-center mr-4">
                  <Leaf className="text-ocean-teal" size={24} />
                </div>
                <div>
                  <div className="text-sm text-meta">Peace Score</div>
                  <div className="font-semibold text-deep-forest text-lg">{destination.peaceScore} / 5.0</div>
                </div>
              </div>
              <div className="w-px bg-aqua-mist hidden md:block"></div>
              <div className="flex items-center flex-1 min-w-[120px]">
                <div className="w-12 h-12 rounded-full bg-sand-gold/20 flex items-center justify-center mr-4">
                  <Coins className="text-deep-teal" size={24} />
                </div>
                <div>
                  <div className="text-sm text-meta">Budget Level</div>
                  <div className="font-semibold text-deep-forest text-lg">{destination.budgetLabel}</div>
                </div>
              </div>
              <div className="w-px bg-aqua-mist hidden md:block"></div>
              <div className="flex items-center flex-1 min-w-[120px]">
                <div className="w-12 h-12 rounded-full bg-warm-coral/10 flex items-center justify-center mr-4">
                  <Clock className="text-warm-coral" size={24} />
                </div>
                <div>
                  <div className="text-sm text-meta">Suggested</div>
                  <div className="font-semibold text-deep-forest text-lg">{destination.suggestedDays} Days</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-deep-forest mb-4">About this place</h2>
              <p className="text-deep-forest/80 text-lg leading-relaxed whitespace-pre-line">
                {destination.fullDescription || destination.shortDescription}
              </p>
            </section>

            {/* Image Gallery */}
            {destination.gallery && (
              <section>
                <h2 className="text-2xl font-bold text-deep-forest mb-4">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {destination.gallery.map((img, idx) => (
                    <div 
                      key={idx} 
                      className={`rounded-2xl overflow-hidden aspect-square ${idx === 0 ? 'md:col-span-2 md:row-span-2 aspect-auto' : ''}`}
                    >
                      <img 
                        src={img} 
                        alt={`Gallery ${idx + 1}`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Activities */}
            {destination.activities && (
              <section>
                <h2 className="text-2xl font-bold text-deep-forest mb-4 flex items-center">
                  <Activity className="mr-2 text-ocean-teal" size={24} />
                  Top Activities
                </h2>
                <div className="flex flex-wrap gap-3">
                  {destination.activities.map((activity, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white border border-aqua-mist rounded-full text-deep-teal font-medium shadow-sm hover:shadow-md transition-shadow">
                      {activity}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar (Right) */}
          <div className="space-y-8 lg:mt-0">
            {/* Best Time & Tips Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-aqua-mist/50 sticky top-24">
              
              {destination.bestTime && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-deep-forest mb-3 flex items-center">
                    <Calendar className="mr-2 text-ocean-teal" size={20} />
                    Best Time to Visit
                  </h3>
                  <p className="text-deep-forest/70">{destination.bestTime}</p>
                </div>
              )}

              {destination.travelTips && (
                <div>
                  <h3 className="text-lg font-bold text-deep-forest mb-4 flex items-center">
                    <Info className="mr-2 text-ocean-teal" size={20} />
                    Travel Tips
                  </h3>
                  <ul className="space-y-3">
                    {destination.travelTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="min-w-6 h-6 rounded-full bg-ocean-teal/10 text-ocean-teal flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                          {idx + 1}
                        </div>
                        <span className="text-deep-forest/80 text-sm leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 pt-8 border-t border-aqua-mist/50">
                <div className="text-sm text-meta mb-2">Estimated Budget</div>
                <div className="text-2xl font-bold text-deep-teal">{destination.priceRange}</div>
                <button className="w-full mt-6 btn-primary flex justify-center items-center py-4">
                  <Heart className="mr-2" size={20} /> Save Destination
                </button>
              </div>

            </div>
          </div>
        </div>
      </PageContainer>

      {/* Nearby Destinations */}
      {nearbyDestinations.length > 0 && (
        <div className="bg-white py-16 mt-12 border-t border-aqua-mist">
          <PageContainer>
            <h2 className="text-3xl font-bold text-deep-forest mb-8">More in {destination.regionLabel}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearbyDestinations.map(dest => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          </PageContainer>
        </div>
      )}
    </div>
  );
};

export default DestinationDetail;
