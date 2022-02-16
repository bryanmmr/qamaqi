import { ButtonGroup, IconButton } from '@chakra-ui/react'
import { Props } from 'framer-motion/types/types'
import * as React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

interface Styles{

}
export const SocialMediaLinks: React.FC<Props> = (props:Styles): JSX.Element => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" target='_blank' href="https://linkedin.com/in/bryanmmr" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
    <IconButton as="a" target='_blank' href="https://github.com/bryanmmr" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
  </ButtonGroup>
)
