import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Container, Text } from "@chakra-ui/react"

const Dashboard = () => {
  return (
  <Text>Dash</Text>
)}

export default withAuthenticationRequired(Dashboard, {
  onRedirecting: () =>
    <Container>
      <Text align={'center'} fontSize={'5xl'}>Forbidden</Text>
      <Text align={'center'}>You must be logged to view this page...</Text>,
    </Container>
});
