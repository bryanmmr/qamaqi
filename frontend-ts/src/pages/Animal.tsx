import { Box, Text, Flex, Container, Skeleton, Stack, Image } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getSpecificAnimal } from "../data/animals"
import AnimalData from "../types/AnimalData"
import ConservationStatus from "../Components/ConservationStatus"

interface Params {
  animalname: string
}
const Animal = () => {
  const { animalname } = useParams()
  const className = useParams().class
  const [animal, setAnimal] = useState<AnimalData>()

  useEffect(()=> {
    getSpecificAnimal(animalname||'').then(
      (res:{data:AnimalData}) => {
        setAnimal(res.data)
      }
    )
  },[])

  return (
    <Flex flexDirection={{ base:'column', md: 'row' }}>
      <Box alignSelf={'flex-start'} boxShadow={'0px 0px 10px 0px #c0c0c0'} padding={{base: '1rem', md: '2rem'}} width={{base: '100%', md: '40%', xl: '25%'}} borderRadius={'15px'} textAlign={'center'} marginTop={{base: '2rem', lg: '1rem'}}>
        <Box>
          <Text fontSize={'1.5rem'}  fontWeight={'700'}>Information available</Text>
          <Box marginTop={'1rem'} marginBottom={'1rem'}>
            <Text fontWeight={'700'}>Scientific Name:</Text>
            <Text>{animal?animal.scientificName:<Skeleton height='20px'/>}</Text>
          </Box>
          {animal?.scientificClassification.map((classification)=>(
            <Box>
              <Text fontWeight={'700'}>{Object.keys(classification)}</Text>
              <Text>{Object.values(classification)}</Text>
            </Box>
          ))}
          <Text fontSize={'1.2rem'}  fontWeight={'700'}>Status</Text>
          <ConservationStatus conservation={animal?.conservationStatus!} key={animal?._id}/>
          <Text marginTop={'.5rem'} fontWeight={'700'}>{animal?.conservationStatus}</Text>
        </Box>
        <Box>
          <Text fontSize={'1.5rem'}  fontWeight={'700'} marginTop={'2rem'} marginBottom={'1rem'}>Some Images</Text>
          <Flex flexWrap={'wrap'} gap="2" justifyContent={'center'} >
            {animal?.img.map((image:{src: string, alt: string})=>(
              <Flex alignItems={'center'} flexDir={'column'}>
                <Image
                  src={image.src}
                  fallbackSrc='https://res.cloudinary.com/dgjg2y07o/image/upload/v1644963093/loading/Spinner-1s-200px_ndygxl.svg'
                  objectFit={'cover'}
                  maxHeight={'140px'}
                  placeholder={image.alt} />
                  <Text>{image.alt}</Text>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Box>
      <Container>
        <Text align={'center'} fontSize={'2rem'} fontWeight={'700'} margin={'2rem 0'}>{animal?.name}</Text>
        {animal?animal.animalInfo.map((paragraph) => (
          <Text fontFamily={'fonts.header'}>{paragraph}</Text>
        )):
        <Stack>
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
        </Stack>}
      </Container>
    </Flex>
  )
}

export default Animal
