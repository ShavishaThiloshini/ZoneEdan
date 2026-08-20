import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from './PageContainer';

const Footer = () => {
  return (
    <footer className="bg-deep-forest text-soft-cream py-16 mt-20">
      <PageContainer>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-soft-cream flex items-center justify-center text-deep-forest font-serif font-bold text-lg">
                Z
              </div>
              <span className="font-serif font-bold text-xl tracking-wide text-soft-cream">
                ZONEEDAN
              </span>
            </Link>
            <p className="text-soft-cream/80 max-w-sm mb-6 text-body">
              Find your little Eden. A digital travel journal to discover peaceful, affordable water escapes across Sri Lanka.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-aqua-mist">Explore</h4>
            <ul className="space-y-3">
              <li><Link to="/destinations" className="text-soft-cream/80 hover:text-white transition-colors">All Destinations</Link></li>
              <li><Link to="/collections" className="text-soft-cream/80 hover:text-white transition-colors">Curated Collections</Link></li>
              <li><Link to="/stories" className="text-soft-cream/80 hover:text-white transition-colors">Travel Stories</Link></li>
              <li><Link to="/map" className="text-soft-cream/80 hover:text-white transition-colors">Map View</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-aqua-mist">About</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-soft-cream/80 hover:text-white transition-colors">Our Mission</Link></li>
              <li><Link to="/contact" className="text-soft-cream/80 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-soft-cream/80 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-soft-cream/80 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-soft-cream/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-soft-cream/60">
          <p>&copy; {new Date().getFullYear()} ZoneEdan. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Crafted for peaceful travels in Sri Lanka 🇱🇰</p>
        </div>
      </PageContainer>
    </footer>
  );
};

export default Footer;
