import { Text, Flex, Box, Tooltip } from '@chakra-ui/react'
import { conservationStatus } from '../data/conservationStatus';

interface ConservationTypes {
  conservation: string
}

const ConservationStatus: React.FC<ConservationTypes> = ({ conservation }) : JSX.Element => {
  return (
    <Flex fontSize={'.7rem'} fontWeight={'700'} justifyContent={'center'}marginTop={'.5rem'}>
      {Object.keys(conservationStatus).map((status:string, index) => (
        <Tooltip hasArrow label={conservationStatus[status].title} bg='gray.500' color='white' fontWeight={'black'} key={index}>
          <Box border={'solid #EB6C31 2px'} borderRadius={'25px'} >
          {conservationStatus[status].title === conservation?
            <Text bgColor={'#2f847c'} color={'#fff'} borderRadius={'25px'} padding={'.2rem'}>{status}</Text>:
            <Text padding={'.2rem'}>{status}</Text>}
          </Box>
        </Tooltip>
        ))}
    </Flex>
  )
}

export default ConservationStatus
