import { Text } from '@chakra-ui/react'
import * as React from 'react'

interface Styles{
  alignSelf:{
    base:string,
    sm:string,
  }
}
export const Copyright = (props:Styles) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} Qamaqi Peruvian WildLife
  </Text>
)
