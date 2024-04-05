// CharacterList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCharacters } from '../services/api';
import CharacterCard from './CharacterCard';
import SearchBar from './SearchBar';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch characters from API on component mount
  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
      setFilteredCharacters(data);
    };
    getCharacters();
  }, []);

  // Handle search input change
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <SearchBar searchTerm={searchTerm} onChange={handleSearch} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {filteredCharacters.map((character) => (
          <Link to={`/characters/${character.id}`} key={character.id}>
            <div className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105">
              <CharacterCard character={character} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
