import axios from "axios"

interface imgProps {
  folder: string,
  image: Blob
  alt: string,
}
interface sciClassProp {
  [key:string] : string
} //Replace any for this statement when correct it
export interface animalProps {
  name : string,
  link : string,
  scientificName: string,
  conservationStatus: string,
  scientificClassification: Array<any>,
  img: imgProps,
  animalInfo: string,
}

export const uploadImage = async ({folder, image, alt}:imgProps) => {
  const token = sessionStorage.getItem('token')
  const imgInfo = {
    folder: folder,
    image: image,
    alt: alt
  }
  const response = await axios.post<imgProps>(`${process.env.REACT_APP_BACKEND_URL}/upload/image`, {
    data: JSON.stringify(imgInfo),
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  });
  return response
}

export const uploadAnimalData = async (animalInfo:animalProps) => {
  const token = sessionStorage.getItem('token')
  const response = await axios.post<animalProps>(`${process.env.REACT_APP_BACKEND_URL}/api/animal`, {
    data: JSON.stringify(animalInfo),
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  });
  return response

}
