import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart, User } from 'lucide-react';
import PageContainer from './PageContainer';
import { useFavorites } from '../../contexts/FavoritesContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { favorites } = useFavorites();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-soft-cream/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <PageContainer>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-deep-teal flex items-center justify-center text-white font-serif font-bold text-lg group-hover:bg-ocean-teal transition-colors">
              Z
            </div>
            <span className={`font-serif font-bold text-xl tracking-wide ${isScrolled ? 'text-deep-forest' : 'text-white'}`}>
              ZONEEDAN
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`${isScrolled ? 'text-deep-forest' : 'text-white'} hover:text-ocean-teal font-medium transition-colors`}>Home</Link>
            <Link to="/destinations" className={`${isScrolled ? 'text-deep-forest' : 'text-white'} hover:text-ocean-teal font-medium transition-colors`}>Destinations</Link>
            <Link to="/collections" className={`${isScrolled ? 'text-deep-forest' : 'text-white'} hover:text-ocean-teal font-medium transition-colors`}>Collections</Link>
            <Link to="/stories" className={`${isScrolled ? 'text-deep-forest' : 'text-white'} hover:text-ocean-teal font-medium transition-colors`}>Stories</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/favorites" className={`relative ${isScrolled ? 'text-deep-forest' : 'text-white'} hover:text-ocean-teal transition-colors`} aria-label="Favorites">
              <Heart size={20} />
              {favorites.length > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {favorites.length}
                </span>
              )}
            </Link>
            <button className={`${isScrolled ? 'text-deep-forest' : 'text-white'} hover:text-ocean-teal transition-colors`} aria-label="Profile">
              <User size={20} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 -mr-2 ${isScrolled ? 'text-deep-forest' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </PageContainer>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-soft-cream border-t border-aqua-mist shadow-lg">
          <div className="flex flex-col p-4 gap-4">
            <Link to="/" className="text-lg text-deep-forest py-2 border-b border-aqua-mist/50" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/destinations" className="text-lg text-deep-forest py-2 border-b border-aqua-mist/50" onClick={() => setMobileMenuOpen(false)}>Destinations</Link>
            <Link to="/collections" className="text-lg text-deep-forest py-2 border-b border-aqua-mist/50" onClick={() => setMobileMenuOpen(false)}>Collections</Link>
            <Link to="/stories" className="text-lg text-deep-forest py-2 border-b border-aqua-mist/50" onClick={() => setMobileMenuOpen(false)}>Stories</Link>
            <div className="flex gap-4 pt-2">
              <Link to="/favorites" className="flex items-center gap-2 text-deep-forest" onClick={() => setMobileMenuOpen(false)}>
                <Heart size={20} /> Favorites ({favorites.length})
              </Link>
              <button className="flex items-center gap-2 text-deep-forest ml-auto" onClick={() => setMobileMenuOpen(false)}>
                <User size={20} /> Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
