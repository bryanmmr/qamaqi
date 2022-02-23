import axios from "axios"

interface imgProps {
  folder: string,
  image: Blob
  alt: string,
}
interface newImgProps {
  src: string,
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
  img: newImgProps,
  animalInfo: string,
}
const toBase64 = (file:Blob, callback:Function) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
    reader.onerror = error => console.error(error);
  };


export const uploadImage = async ({folder, image, alt}:imgProps, callback:Function) => {
  const token = sessionStorage.getItem('token')

  await toBase64(image, async (res:any) => {
    const imgInfo = {
      folder: folder,
      image: res,
      alt: alt
    }
    const response = await axios.post<imgProps>(`${process.env.REACT_APP_BACKEND_URL}/upload/image`,
    imgInfo,
    {
      headers: {
        Authorization : `Bearer ${token}`
    }
  });
  callback(response)
  })
}

export const uploadAnimalData = async (animalInfo:animalProps) => {
  const token = sessionStorage.getItem('token')
  const response = await axios.post<animalProps>(`${process.env.REACT_APP_BACKEND_URL}/api/animal`,
    animalInfo,
    {
      headers: {
      'Authorization' : `Bearer ${token}`
    }
  });
  return response
}
