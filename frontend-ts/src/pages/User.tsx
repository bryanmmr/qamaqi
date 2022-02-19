import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Box, Stack, Text, Container, Flex, Image } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

const UserData = () => {
  const { user } = useAuth0()
  return (
    <Container>
      <Flex gap={'2rem'} flexDir={{base: 'column', md: 'row'}} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Image src={user?.picture}></Image>
        </Box>
        <Stack spacing={4}>
          <Flex gap={'2rem'} flexDir={{base: 'column', md: 'row'}} justifyContent={'center'} alignItems={'center'}>
            <Text fontWeight={'700'}>Username:</Text>
            <Text>{user?.nickname}</Text>
          </Flex>
          <Flex gap={'2rem'} flexDir={{base: 'column', md: 'row'}} justifyContent={'center'} alignItems={'center'}>
            <Text fontWeight={'700'}>Email:</Text>
            <Text>{user?.email}</Text>
          </Flex>
        </Stack>
      </Flex>
    </Container>
  )
}

export default withAuthenticationRequired(UserData, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
