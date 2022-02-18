import axios from 'axios';
import AnimalData from '../types/AnimalData'

//const fetcher: Fetcher<string, AnimalData> = async (url:string) => await axios.get<AnimalData>(url)

export const getFirstTenAnimals = async () => {
  const response = await axios.get<Array<AnimalData>>(`${process.env.REACT_APP_BACKEND_URL}/api/animal?page=1`);
  return response
}

export const getFeaturedAnimal = async () => {
  const response = await axios.get<AnimalData>(`${process.env.REACT_APP_BACKEND_URL}/api/animal/620b0695f4505dd707339f06`);
  return response
}

export const getSpecificAnimal = async (name:string) => {
  const response = await axios.get<AnimalData>(`${process.env.REACT_APP_BACKEND_URL}/api/animal/specific/${name}`);
  return response
}

