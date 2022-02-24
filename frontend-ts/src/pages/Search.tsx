import { Box, Input, Flex, Container } from "@chakra-ui/react"
import { useState } from "react"
import AnimalCard from "../Components/AnimalCard"
import { searchSpecificAnimal } from "../data/animals"
import AnimalData from "../types/AnimalData"

const Search = () => {
  const [animals, setAnimals] = useState<Array<AnimalData>>()
  const handlerSearchBar = (e:any) => {
    const query = `${e.target.value}`
    searchSpecificAnimal(query).then((res:any) => {
      setAnimals(res.data)
    })
  }
  return (
    <Box>
      <Container>
        <Input onChange={handlerSearchBar}  margin={"2rem"} borderColor={'#c0c0c0'} placeholder={'Look for any animal in our database here'}/>
      </Container>
      <Flex wrap={'wrap'} justifyContent={'center'} gap={'2rem'}>
        {
          animals?.map((animal,index) => (
            <AnimalCard animal={animal} key={index}/>
          ))
        }
      </Flex>
    </Box>
  )
}

export default Search
