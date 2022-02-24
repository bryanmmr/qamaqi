const {
  getAllAnimals,
  getSpecificAnimal,
  getSpecificAnimalByName,
  searchSpecificAnimalByName,
  getAllAnimalsByClass,
  createAnimal,
  updateAnimal,
  deleteAnimal
} = require('./animal.service');

async function getAllAnimalsHandler(req, res) {
  const { page } = req.query
  try {
    const animals = await getAllAnimals(page);
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

async function searchAnimalByNameHandler(req, res){
  const { query } = req.params
  try {
    const animal = await searchSpecificAnimalByName(query);
    if(animal){
      return res.status(200).json(animal);
    }
    return res.status(404).json({message: `animal not found with name=${query}`})
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

async function getAnimalByClassHandler(req, res){
  const { animalClass } = req.params
  const { page } = req.query
  try {
    const animals = await getAllAnimalsByClass(animalClass, page);
    if(animals){
      return res.status(200).json(animals)
    }
    return res.status(404).json({message : `No animals Found`})
  } catch (error){
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
  const { _id } = req.body;
  try {
    const animal = await updateAnimal(_id, req.body)
    if(!animal){
      return res.status(404).json({response: `Animal not found`})
    }
    return res.status(200).json(animal);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function deleteAnimalHandler(req, res) {
  const { id } = req.params;
  try {
    const animal = await deleteAnimal(id)
    if(!animal){
      return res.status(404).json({response: `Animal not found`})
    }
    return res.status(200);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllAnimalsHandler,
  getAnimalByIdHandler,
  getAnimalByNameHandler,
  searchAnimalByNameHandler,
  getAnimalByClassHandler,
  createAnimalHandler,
  updateAnimalHandler,
  deleteAnimalHandler,
}