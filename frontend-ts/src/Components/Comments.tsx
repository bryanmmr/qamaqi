import { Avatar, Flex, Text, Box } from "@chakra-ui/react"
import { ImBin } from 'react-icons/im'
import { deleteAnimalComments } from "../data/animals"
import { useAuth0 } from "@auth0/auth0-react"

export interface AnimalType {
    user_email: string,
    profile_pic: string,
    comment: string,
    allow: boolean,
    username: string,
}

interface CommentType {
  animalComment: AnimalType,
  index: number,
  id: string,
}

const Comments: React.FC<CommentType> = ( {animalComment, id, index}:CommentType ) => {
  const {user} = useAuth0()
  const handleRemoveComment = () => {
    deleteAnimalComments(id, index);
  }
  return (
    <Flex boxShadow={'0px 0px 3px 0px #c0c0c0'} borderRadius={'5px'} marginBottom={'1rem'} padding={'1rem'} position={'relative'}>
      <Avatar src={animalComment.profile_pic} />
      <Box marginLeft={'1rem'}>
      <Box position={'absolute'} right='0' marginRight={'1rem'} hidden={user?.email!==animalComment.user_email}>
        <ImBin onClick={handleRemoveComment} cursor={'pointer'} />
      </Box>
      <Text fontSize={'xs'} fontWeight={'700'}>{animalComment.username} said:</Text>
        <Text>{animalComment.comment}</Text>
      </Box>
    </Flex>
  )
}

export default Comments
