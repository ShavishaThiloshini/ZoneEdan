import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/destinations?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="flex items-center w-full max-w-2xl bg-white rounded-full p-2 pl-6 shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <input 
        type="text" 
        placeholder="Where do you want to escape?" 
        className="flex-grow bg-transparent outline-none text-deep-forest font-sans text-lg placeholder:text-deep-forest/40"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button 
        type="submit"
        className="bg-deep-teal hover:bg-ocean-teal text-white p-3 rounded-full transition-colors flex items-center justify-center ml-2 focus:ring-2 focus:ring-ocean-teal focus:outline-none"
        aria-label="Search"
      >
        <Search size={20} />
      </button>
    </form>
  );
};

export default SearchBar;
