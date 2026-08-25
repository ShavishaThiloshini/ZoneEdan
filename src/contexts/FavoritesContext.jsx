import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem('zoneedan_favorites');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading favorites from localStorage', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('zoneedan_favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites to localStorage', error);
    }
  }, [favorites]);

  const toggleFavorite = (slug) => {
    setFavorites((prev) => {
      if (prev.includes(slug)) {
        return prev.filter((s) => s !== slug);
      } else {
        return [...prev, slug];
      }
    });
  };

  const isFavorite = (slug) => favorites.includes(slug);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
