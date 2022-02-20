import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Flex, Text, Button, Container } from "@chakra-ui/react"
import { useState } from "react";
import { getCreateAuthorization } from "../auth/auth0Config";

const InsertAnimal: React.FC = () => {
  const [allowed, setAllowed] = useState<boolean>(false)
  const verifyCreatePermission = () => {
    getCreateAuthorization().then( (res) => {
      if (res.status === 200){
        setAllowed(true)
      }
      else {
        console.log('Your not allowed to add a new entry')
      }
    })
  }
  return (
    <Container>
      {!allowed?
        <Flex justifyContent={'center'} flexDir={'column'}>
          <Text fontSize={'2rem'} fontWeight={'700'} align={'center'}>Want to Contribute?</Text>
          <Button onClick={verifyCreatePermission}>Verify if your account is allowed</Button>
        </Flex>:
        <Flex justifyContent={'center'} flexDir={'column'}>
           <Text fontSize={'2rem'} fontWeight={'700'} align={'center'}>Fill the next form to add a new specimen to our database</Text>
        </Flex>
      }
    </Container>
  )
}

export default withAuthenticationRequired(InsertAnimal, {
  onRedirecting: () => <Text>Redirecting you to the login page...</Text>,
});
