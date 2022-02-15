const {
  getAllAnimals,
  getSpecificAnimal,
  getSpecificAnimalByName,
  createAnimal,
  updateAnimal,
  deleteAnimal
} = require('./animal.service');

async function getAllAnimalsHandler(req, res) {
  try {
    const animals = await getAllAnimals();
    if(animals.length === 0) {
        return res.status(404).json({message : `no animals found`});
    }
    return res.status(200).json(animals);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}

async function getAnimalByIdHandler(req, res) {
  const { id } = req.params;
  try {
    const animal = await getSpecificAnimal(id);
    if(animal){
      return res.status(200).json(animal);
    }
    return res.status(404).json({message: `animal not found with id=${id}`})
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

async function getAnimalByNameHandler(req, res){
  const { name } = req.params
  try {
    const animal = await getSpecificAnimalByName(name);
    if(animal){
      return res.status(200).json(animal);
    }
    return res.status(404).json({message: `animal not found with name=${name}`})
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

async function createAnimalHandler(req, res) {
  const { name } = req.body;
  try{
    if(!name) {
      return res.status(400).json({response : `No animals in value`})
    }
    const animal = await createAnimal(req.body);
    return res.status(201).json(animal);
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

async function updateAnimalHandler(req, res) {
  const { id } = req.body;
  try {
    const animal = await updateAnimal(id, req.body)
    if(!animal){
      return res.status(404).json({response: `Animal not found`})
    }
    return res.status(200).json(animal);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllAnimalsHandler,
  getAnimalByIdHandler,
  getAnimalByNameHandler,
  createAnimalHandler,
  updateAnimalHandler,
}