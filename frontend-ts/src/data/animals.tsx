import axios from 'axios';
import AnimalData from '../types/AnimalData'

export const getFirstTenAnimals = async () => {
  const response = await axios.get<AnimalData>(`${process.env.REACT_APP_BACKEND_URL}/api/animal/`, {
    params: {
      _limit: 10
     }
  });
  return response
}

export const getSpecificAnimal = async () => {
  const response = await axios.get<AnimalData>(`${process.env.REACT_APP_BACKEND_URL}/api/animal/620b0695f4505dd707339f06`);
  return response
}
