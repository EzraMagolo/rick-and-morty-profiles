// src/services/api.js
import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/';

export const fetchCharacters = async () => {
  try {
    const response = await axios.get(`${BASE_URL}character`);
    return response.data.results;
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};

export const fetchCharacterById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}character/${id}`);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    return null;
  }
};
