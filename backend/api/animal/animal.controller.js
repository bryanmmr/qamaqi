const {
  getAllAnimals,
  getSpecificAnimal,
  createAnimal
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

async function getAnimalHandler(req, res) {
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
module.exports = {
  getAllAnimalsHandler,
  getAnimalHandler,
  createAnimalHandler,
}