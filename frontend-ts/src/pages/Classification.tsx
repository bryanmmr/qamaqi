import { Text, Flex, Container } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ClassComponent from '../Components/ClassComponent'

const Classification = () => {

  return (
    <Container>
      <Text align={'center'} fontSize={'2rem'} fontWeight={'700'} marginBottom={'2rem'}>Animal Classes</Text>
      <Flex wrap={'wrap'} gap={{base:'1rem', lg: '2rem'}} justifyContent='center' >
        <Link to='/classification/Mammalia'>
          <ClassComponent animalClass={'Mammalia'} imgSrc={'https://res.cloudinary.com/dgjg2y07o/image/upload/v1644889736/Mammals/c6hgqs8mmkdzzf1kyvbo.jpg'} />
        </Link>
        <Link to='/classification/Aves'>
          <ClassComponent animalClass={'Aves'} imgSrc={'https://res.cloudinary.com/dgjg2y07o/image/upload/v1645312245/Birds/a9oyvdoedd7nk2iy3bsn.jpg'} />
        </Link>
      </Flex>
    </Container>
  )
}

export default Classification
