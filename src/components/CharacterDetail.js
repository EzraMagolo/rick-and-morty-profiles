import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from '../services/api';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getCharacter = async () => {
      const data = await fetchCharacterById(id);
      setCharacter(data);
    };
    getCharacter();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <div className="flex flex-col items-center max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={character.image} alt={character.name} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h2 className="text-2xl font-bold text-center">{character.name}</h2>
          <p className="text-gray-600 text-center">
            {character.species} - {character.status}
          </p>
          <p className="mt-4 text-center">{character.gender}</p>
          <p className="mt-2 text-center">{character.location.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
