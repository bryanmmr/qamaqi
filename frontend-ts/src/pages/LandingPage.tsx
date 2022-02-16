import {
  Box,
  Flex,
  Button,
  Image,
  Text,
  Container,
} from '@chakra-ui/react'
import FeaturedAnimal from '../Components/FeaturedAnimal';

function LandingPage() {
  return (
    <Box marginTop={'5rem'}>
      <Flex>
          <Image
            maxWidth={'50%'}
            src="https://res.cloudinary.com/dgjg2y07o/image/upload/v1644935528/staticImages/pexels-petr-ganaj-4032582_gi6eer.jpg"
            fallbackSrc='https://res.cloudinary.com/dgjg2y07o/image/upload/v1644963093/loading/Spinner-1s-200px_ndygxl.svg'
            borderRadius={'25px'}
            />
        <Container>
          <Text fontSize={'2rem'} padding={'1rem'} fontWeight={'900'}>
            Get information about some native animals of Peru and other SouthAmerican countries
          </Text>
          <Button bgColor={'#2f847c'} color={'#fff'} margin={'1rem'}>Try it!</Button>
        </Container>
      </Flex>
      <FeaturedAnimal />
    </Box>

  );
}

export default LandingPage;
