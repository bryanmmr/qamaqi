import { Box, Text, Flex, Container, Skeleton, SkeletonCircle, SkeletonText, Stack, Image, Textarea, FormControl, FormLabel, FormHelperText, Button, Tooltip } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getSpecificAnimal, updateAnimalComments } from "../data/animals"
import AnimalData from "../types/AnimalData"
import ConservationStatus from "../Components/ConservationStatus"
import Comments, { AnimalType } from "../Components/Comments"
import { useAuth0 } from "@auth0/auth0-react"

const Animal = () => {
  const { animalname } = useParams()
  const [animal, setAnimal] = useState<AnimalData>()
  const {user, isAuthenticated} = useAuth0()
  const handleNewComment = (e:any) => {
    e.preventDefault()
    if(!e.target.comment.value){
      return;
    }
    const comment:AnimalType = {
      comment: e.target.comment.value,
      username: user?.nickname!,
      user_email: user?.email!,
      profile_pic: user?.picture!,
      allow: false
    }
    updateAnimalComments(animal?._id!, comment);
    e.target.comment.value = ''
  }
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
            <Box>{animal?animal.scientificName:<Skeleton height='20px'/>}</Box>
          </Box>
          {animal?.scientificClassification.map((classification, index)=>(
            <Box key={index}>
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
            {animal?.img.map((image:{src: string, alt: string}, index)=>(
              <Flex alignItems={'center'} flexDir={'column'} key={index}>
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
        {animal?animal.animalInfo.map((paragraph, index) => (
          <Text fontFamily={'fonts.header'} key={index}>{paragraph}</Text>
        )):
        <Stack>
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
        </Stack>}
        <Box marginTop={'2rem'}>
          <Text fontWeight={"700"} fontSize={'1.5rem'}>Comments</Text>
          {animal?.comments?animal.comments.map((comment:AnimalType, index:number) => (
            <Comments animalComment={comment} id={animal._id} index={index} key={index}/>
          )):
          <Box padding='6' boxShadow='lg' bg='white'>
            <SkeletonCircle size='10' />
            <SkeletonText mt='4' noOfLines={4} spacing='4' />
          </Box>}
          <Text fontWeight={"700"} fontSize={'1.5rem'}></Text>
          <form onSubmit={handleNewComment}>
            <FormControl>
              <FormLabel htmlFor='comment'>Leave your comment</FormLabel>
              <Textarea id='comment' name='comment' />
              <Tooltip hasArrow label='Needed to be logged to write a comment' isDisabled={isAuthenticated} mt='3' >
                <Button
                  mt={4}
                  colorScheme='teal'
                  type='submit'
                  isDisabled={!isAuthenticated}
                >
                  Submit
                </Button>
              </Tooltip>
            </FormControl>
          </form>
        </Box>
      </Container>
    </Flex>
  )
}

export default Animal
