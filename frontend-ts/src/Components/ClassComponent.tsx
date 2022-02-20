import { Box, Button, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface ClassComponentPropsTypes {
  animalClass: string,
  imgSrc: string
}

const ClassComponent : React.FC<ClassComponentPropsTypes> = ({animalClass, imgSrc}:ClassComponentPropsTypes) => {
  return (
    <Box boxShadow={'0px 0px 10px 0px #c0c0c0'} padding={{base:'0rem',lg:'1rem'}} borderRadius="25px">
        <Image
            width={{base:'100%', lg:'100%'}}
            height={{base:'20rem',lg:'250px'}}
            objectFit={'cover'}
            src={imgSrc}
            fallbackSrc='https://res.cloudinary.com/dgjg2y07o/image/upload/v1644963093/loading/Spinner-1s-200px_ndygxl.svg'
            borderRadius={'25px 25px 0 0'}
            />
      <Text fontSize={'2rem'} padding={'1rem'} fontWeight={'900'} whiteSpace={'nowrap'} overflow={'hidden'} textOverflow={'clip'}>{animalClass}</Text>
    </Box>
  )
}

export default ClassComponent
