import {
  Box, Text, Container, Flex, Skeleton, Image, Stack, Button
} from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { getSpecificAnimal } from '../data/animals';
import AnimalData from '../types/AnimalData';

const FeaturedAnimal = () => {
  const [animal, setAnimals] = useState<AnimalData>()
  useEffect(() => {
    getSpecificAnimal().then(
      (response:{data:AnimalData})=>{
        setAnimals(response.data)
      }
    )
    console.log(animal)
  }, []);
  return (
    <Box padding={'2rem'}>
      <Text textAlign={'center'} margin={'2rem'} fontSize={'2rem'} fontWeight={'900'}>Featured Animal</Text>
      <Container boxShadow={'0px 0px 10px 0px #c0c0c0'} padding="1rem" borderRadius="15px">
        <Flex>
          <Container >
            <Box marginBottom={'1rem'}>
              <Text fontSize={'2rem'} paddingLeft={'1rem'} fontWeight={'900'}>
                {animal?
                  animal.name:
                  <Skeleton height='20px' />}
              </Text>
              <Text fontSize={'1rem'} paddingLeft={'1rem'} fontWeight={'500'}>
                {animal?
                  animal.scientificName:
                  <Skeleton height='20px' />}
              </Text>
            </Box>
            <Stack>
              <Button bgColor={'#2f847c'} color={'#fff'}>More Info</Button>
            </Stack>
          </Container>
          <Image
            maxWidth={'50%'}
            src={animal?animal.img[0].src:`https://res.cloudinary.com/dgjg2y07o/image/upload/v1644935528/staticImages/pexels-petr-ganaj-4032582_gi6eer.jpg`}
            fallbackSrc='https://res.cloudinary.com/dgjg2y07o/image/upload/v1644963093/loading/Spinner-1s-200px_ndygxl.svg'
            borderRadius={'25px'}
            />
          </Flex>
      </Container>
    </Box>
  )
}

export default FeaturedAnimal
