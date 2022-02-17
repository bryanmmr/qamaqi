import * as React from 'react'
import { Box, Text, Button, Image } from '@chakra-ui/react'
import AnimalData from './../types/AnimalData'

interface Animal{
  animal: AnimalData
}

const AnimalCard = (props:Animal) => {
  return (
    <Box boxShadow={'0px 0px 10px 0px #c0c0c0'} padding={{base:'0rem',lg:'1rem'}} borderRadius="25px" width={{base:'100%',md: '45%', lg:'30%'}}>
        <Image
            width={{base:'100%', lg:'100%'}}
            height={{base:'20rem',lg:'250px'}}
            objectFit={'cover'}
            src={props.animal.img[0].src}
            fallbackSrc='https://res.cloudinary.com/dgjg2y07o/image/upload/v1644963093/loading/Spinner-1s-200px_ndygxl.svg'
            borderRadius={'25px 25px 0 0'}
            />
      <Text fontSize={'2rem'} padding={'1rem'} fontWeight={'900'}>{props.animal.name}</Text>
      <Button bgColor={'#2f847c'} color={'#fff'} margin={'1rem'}>More Info Here!</Button>
    </Box>
  )
}

export default AnimalCard
