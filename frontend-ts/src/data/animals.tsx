import axios from 'axios';
import { AnimalType } from '../Components/Comments';
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

export const getAnimal = async (id:string) => {
  const response = await axios.get<AnimalData>(`${process.env.REACT_APP_BACKEND_URL}/api/animal/${id}`);
  return response
}

export const getSpecificAnimal = async (name:string) => {
  const response = await axios.get<AnimalData>(`${process.env.REACT_APP_BACKEND_URL}/api/animal/specific/${name}`);
  return response
}

export const updateAnimalComments = async (animalId:string, comment:AnimalType) => {
  const animal = getAnimal(animalId)
  const animalRefresehd = animal.then(data => {
    data.data.comments.push(comment)
    return data.data
  })
  return await animalRefresehd.then(data => {
    const response = axios.patch(`${process.env.REACT_APP_BACKEND_URL}/api/animal/${animalId}`, data)
    return response
  })
}

export const deleteAnimalComments = async (animalId:string, index:number) => {
  const animal = getAnimal(animalId)
  const animalRefresehd = animal.then(data => {
    data.data.comments.splice(index,1)
    return data.data
  })
  return await animalRefresehd.then(data => {
    const response = axios.patch(`${process.env.REACT_APP_BACKEND_URL}/api/animal/${animalId}`, data)
    return response
  })
}
