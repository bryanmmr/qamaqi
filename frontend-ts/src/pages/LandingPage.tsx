import {
  Box,
  Flex,
  Button,
  Image,
  Text,
  Container,
} from '@chakra-ui/react'
import FeaturedAnimal from '../Components/FeaturedAnimal';
import { useEffect, useState } from 'react';
import { getFirstTenAnimals } from '../data/animals';
import AnimalData from '../types/AnimalData'
import AnimalCard from '../Components/AnimalCard';
import { Link } from 'react-router-dom';

function LandingPage() {
  const [mammals, setMammals] = useState<Array<AnimalData>>()
  useEffect(()=> {
    getFirstTenAnimals()
      .then((res) => setMammals(res.data))
  }, [])
  return (
    <Box marginTop={{base:'1rem', lg:'5rem'}}>
      <Flex flexDirection={{base: 'column', md:'row'}}>
          <Image
            maxWidth={{base: '100%', md: '50%'}}
            src="https://res.cloudinary.com/dgjg2y07o/image/upload/v1644935528/staticImages/pexels-petr-ganaj-4032582_gi6eer.jpg"
            fallbackSrc='https://res.cloudinary.com/dgjg2y07o/image/upload/v1644963093/loading/Spinner-1s-200px_ndygxl.svg'
            borderRadius={'25px'}
            />
        <Container>
          <Text fontSize={{base:'1.5rem',lg:'2rem'}} padding={{base:'.5rem',lg:'1rem'}} fontWeight={'900'}>
            Get information about some native animals of Peru and other SouthAmerican countries
          </Text>
          <Button bgColor={'#2f847c'} color={'#fff'} margin={{base:'0rem',lg:'1rem'}}>Try it!</Button>
        </Container>
      </Flex>
      <FeaturedAnimal />
      <Text textAlign='center' fontSize={{base:'1.5rem',lg:'2rem'}} fontWeight={'900'}>Find Mammals</Text>
      <Flex wrap={'wrap'} gap={10} justifyContent={'center'} marginTop={{base:'1rem',lg:'2rem'}}>
      {
        mammals?.map((mammal) => (
          <AnimalCard animal={mammal} key={mammal._id}/>
        ))
      }
      </Flex>
      <Flex justifyContent={'center'}>
        <Link to={'/Mammalia'}>
          <Button bgColor={'#2f847c'} color={'#fff'} margin={{base:'0rem',lg:'1rem'}}>Find More Mammals Here!</Button>
        </Link>
      </Flex>
    </Box>

  );
}

export default LandingPage;
