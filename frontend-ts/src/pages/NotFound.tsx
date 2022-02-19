import { Button, Flex, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <Flex flexDir={'column'} alignItems={'center'}>
      <Text align={'center'} fontSize={'9xl'}>404</Text>
      <Link to={'/'}>
        <Button bgColor={'#2f847c'} color={'#fff'} marginLeft={'1rem'}>Return to start</Button>
      </Link>
    </Flex>
  )
}

export default NotFound
