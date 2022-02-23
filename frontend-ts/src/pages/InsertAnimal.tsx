import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Flex, Text, Button, Container, FormControl, FormLabel, FormHelperText, Input, InputGroup, InputLeftAddon, Select, Textarea } from "@chakra-ui/react"
import { useState } from "react";
import { getCreateAuthorization } from "../auth/auth0Config";
import { conservationStatus}  from '../data/conservationStatus'
import { uploadAnimalData, uploadImage, animalProps } from "../data/uploadInformation";

const InsertAnimal: React.FC = () => {
  const [allowed, setAllowed] = useState<boolean>(false)
  /* Control of the form */
  const [name, setName] = useState<string>('')
  const [sciname, setSciname] = useState<string>('')
  const [phylum, setPhylum] = useState<string>('')
  const [classification, setClassification] = useState<string>('')
  const [order, setOrder] = useState<string>('')
  const [family, setFamily] = useState<string>('')
  const [genus, setGenus] = useState<string>('')
  const [species, setSpecies] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [paragraph, setParagraph] = useState<string>('')

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
  const handleSubmit = (e:any) => {
    e.preventDefault();
    setName(e.target.name.value)
    setSciname(e.target.sciname.value)
    setPhylum(e.target.phylum.value)
    setClassification(e.target.classification.value)
    setOrder(e.target.order.value)
    setFamily(e.target.family.value)
    setGenus(e.target.genus.value)
    setSpecies(e.target.species.value)
    setStatus(e.target.status.value)
    setParagraph(e.target.paragraph.value)

    const file = e.target.image.files[0]

    const imgInfo = {
      folder: classification,
      image: file,
      alt: name,
    }
    const scientificClassification = [
      { Kingdom : "Animalia" },
      { Phylum  : phylum },
      { Class   : classification },
      { Order   : order },
      { Family  : family },
      { Genus   : genus },
      { Species : species },
    ];

    uploadImage(imgInfo, (response:any) => {
      const imgData = {
        src: response.data.secure_url,
        alt: response.data.context.custom.alt,
      }
      const animalInfo:animalProps = {
        name : name,
        link : '',
        scientificName: sciname,
        conservationStatus: status,
        scientificClassification: scientificClassification!,
        img: imgData,
        animalInfo: paragraph,
      }
      uploadAnimalData(animalInfo).then(res => {
        console.log(res.status)
      })
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
           <Text fontSize={'1rem'} fontWeight={'700'} align={'center'}>Fill the next form to add a new specimen to our database</Text>
           <Container>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel htmlFor='name'>Fill the name of the specimen</FormLabel>
                  <Input id='name' type='text' required/>
                  <FormHelperText>Fill the common name of the animal</FormHelperText>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='sciname'>Fill the scientific name of the specimen</FormLabel>
                  <Input id='sciname' type='text' required/>
                  <FormHelperText>Fill the scientific name of the animal</FormHelperText>
                </FormControl>
                <FormLabel htmlFor='email'>Fill the scientific information of the specimen</FormLabel>
                <Flex wrap={'wrap'} gap={'1rem'} justifyContent={'space-between'}>
                  <FormControl width={{base: '100%',md:'45%'}}>
                    <InputGroup>
                      <InputLeftAddon children='Phylum' />
                      <Input id='phylum' type='text' placeholder='phylum' />
                    </InputGroup>
                  </FormControl>
                  <FormControl width={{base: '100%',md:'45%'}}>
                    <InputGroup>
                      <InputLeftAddon children='Class' />
                      <Input id='classification' type='text' placeholder='class' />
                    </InputGroup>
                  </FormControl>
                  <FormControl width={{base: '100%',md:'45%'}}>
                    <InputGroup>
                      <InputLeftAddon children='Order' />
                      <Input id='order' type='text' placeholder='order' />
                    </InputGroup>
                  </FormControl>
                  <FormControl width={{base: '100%',md:'45%'}}>
                    <InputGroup>
                      <InputLeftAddon children='Family' />
                      <Input id='family' type='text' placeholder='family' />
                    </InputGroup>
                  </FormControl>
                  <FormControl width={{base: '100%',md:'45%'}}>
                    <InputGroup>
                      <InputLeftAddon children='Genus' />
                      <Input id='genus' type='text' placeholder='genus' />
                    </InputGroup>
                  </FormControl>
                  <FormControl width={{base: '100%',md:'45%'}}>
                    <InputGroup>
                      <InputLeftAddon children='Species' />
                      <Input id='species' type='text' placeholder='species' />
                    </InputGroup>
                  </FormControl>
                </Flex>
                <FormControl>
                  <FormLabel htmlFor='status'>Status of the specimen</FormLabel>
                  <Select id='status' placeholder='Select Status'>
                    {Object.entries(conservationStatus).map(((element, index) => (
                      <option key={index}>{element[1].title}</option>
                    )))}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='paragraph'>Add an extend information about the specimen</FormLabel>
                  <Textarea id='paragraph' />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='image'>Add images</FormLabel>
                  <input id='image' type='file' accept='image/*' name='image' />
                </FormControl>
                <Button
                  mt={4}
                  colorScheme='teal'
                  type='submit'
                >
                  Submit
                </Button>
              </form>
           </Container>
        </Flex>
      }
    </Container>
  )
}

export default withAuthenticationRequired(InsertAnimal, {
  onRedirecting: () =>
    <Container>
      <Text align={'center'} fontSize={'5xl'}>Forbidden</Text>
      <Text align={'center'}>You must be logged to view this page...</Text>,
    </Container>
});
