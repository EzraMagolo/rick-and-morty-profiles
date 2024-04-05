// SearchBar.js
import React from 'react';

const SearchBar = ({ searchTerm, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search characters..."
      value={searchTerm}
      onChange={onChange}
      className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
    />
  );
};

export default SearchBar;
