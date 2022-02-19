import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal
} from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from 'react';
import { Logo } from './../assets/Logo'
import { Link } from "react-router-dom";

const Header: React.FC = (): JSX.Element => {
  const { loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    const setToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`,
          scope: 'read:current_user',
        });
        sessionStorage.setItem('token', accessToken);
      } catch (e: any) {
        console.log(e?.message)
      }
    }
    setToken()
  }, [getAccessTokenSilently, user?.sub])
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} bgColor={'#fff'} padding='4' borderBottom={'1px solid #efefef'}>
      <Link to='/'>
        <Logo boxSize="20" color="black" />
      </Link>
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={'center'}>
          {isAuthenticated && user?
            <Menu>
              <MenuButton>
                <Avatar name={user.name} src={user.picture} />
              </MenuButton>
              <Portal>
                <MenuList>
                  <Link to='/user'>
                    <MenuItem>My Information</MenuItem>
                  </Link>
                  <MenuItem
                    onClick={() => logout({ returnTo: window.location.origin })}>
                      Sign Out
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>:
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              spacing={6}>
              <Button
                onClick={() => loginWithRedirect()}
                as={'a'}
                fontSize={'sm'}
                fontWeight={400}
                variant={'link'}
                href={'#'}>
                Sign In
              </Button>
              <Button
                onClick={() => loginWithRedirect()}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'#2F847C'}
                _hover={{
                  bg: 'rgba(#2F847C, .8)',
                }}>
                Sign Up
              </Button>
            </Stack>
          }
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header;
