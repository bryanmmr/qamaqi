import * as React from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'
import { Copyright } from './Copyright'
import { Logo } from './../../assets/Logo'
import { SocialMediaLinks } from './SocialMediaLinks'
import { Link } from 'react-router-dom'

const Footer = () => (
  <Box as="footer" role="contentinfo" width={'100%'} mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Logo boxSize="12" color="black" />
        <Stack>
          <SocialMediaLinks />
          <Link to='/contribute'><Text>Want to Contribute?</Text></Link>
        </Stack>
      </Stack>
      <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
    </Stack>
  </Box>
)

export default Footer
