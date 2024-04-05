// CharacterCard.js
import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{character.name}</h3>
        <div className="flex items-center mt-2">
          <p className="text-sm text-gray-600">{character.species}</p>
          <span className="mx-2 text-gray-400">•</span>
          <p className="text-sm text-gray-600">{character.status}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;


