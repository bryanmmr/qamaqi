import { Box, Flex, Button, Container, Text } from "@chakra-ui/react"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import useSWR, { Fetcher } from "swr";
import AnimalCard from "../Components/AnimalCard";
import AnimalData from "../types/AnimalData";

const fetcher:{} = async (url:string) => await axios.get<AnimalData>(url)

const ClassSearch = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [animalClass, setAnimalClass] = useState<Array<AnimalData>>()
  const animalClassReceived = useParams().class;
  const { data } = useSWR<{data:Array<AnimalData>}>(`${process.env.REACT_APP_BACKEND_URL}/api/animal/class/${animalClassReceived}?page=${pageIndex}`, fetcher);
  useEffect(() => {
    setAnimalClass(data?.data)
  }, [data])
  return (
    <Box>
      <Text textAlign={'center'} fontSize={'3rem'}>Class: {animalClassReceived}</Text>
      <Flex wrap={'wrap'} gap={10} justifyContent={'center'} marginTop={{base:'1rem',lg:'2rem'}}>
        {
          animalClass?.map((animalClass) => (
            <AnimalCard animal={animalClass} key={animalClass._id}/>
          ))
        }
      </Flex>
      <Flex justifyContent={'center'} gap={"2rem"} marginTop={'2rem'}>
        <Button onClick={() => setPageIndex(pageIndex - 1)} disabled={pageIndex===0}>Previous</Button>
        <Button onClick={() => setPageIndex(pageIndex + 1)}>Next</Button>
      </Flex>
    </Box>
  )
}

export default ClassSearch
