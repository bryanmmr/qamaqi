interface SciClass {
  [key: string]: string
}
export default interface AnimalData {
  _id : string,
  name: string,
  link: string
  conservationStatus: string,
  scientificName: string,
  scientificClassification: Array<SciClass>,
  img: Array<{src: string, alt: string, _id: string}>,
  animalInfo:Array<string>,
  active: boolean,
  comments: Array<{
    user_email: string,
    profile_pic: string,
    comment: string,
    allow: boolean,
    username: string
  }>
}
