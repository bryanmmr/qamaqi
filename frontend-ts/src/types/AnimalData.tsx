export default interface AnimalData {
  _id : string,
  name: string,
  link: string
  conservationStatus: string,
  scientificName: string,
  img: Array<{src: string, alt: string}>,
  animalInfo:Array<string>
}
