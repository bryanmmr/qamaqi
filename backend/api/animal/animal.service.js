const Animal = require('./animal.model');

async function getAllAnimals(page){
    try{
        const animals = await Animal.find().limit(10).skip(10*page)
        return animals
    } catch(error){
        throw error;
    }
}

async function getSpecificAnimal(id) {
    try {
        const animal = await Animal.findById(id);
        return animal
    } catch(error) {
        throw error;
    }
}

async function getSpecificAnimalByName(name) {
    try {
        const animal = await Animal.findOne({name : name});
        return animal
    } catch(error) {
        throw error;
    }
}

async function getAllAnimalsByClass(animalClass, page){
    try {
        const animals = await Animal.find({ "scientificClassification.Class" : animalClass}).limit(10).skip(10*page)
        return animals
    } catch (error) {
        throw error;
    }
}

async function createAnimal(animal){
    try {
        const newAnimal = new Animal(animal);
        const savedAnimal = await newAnimal.save();
        return savedAnimal;
    } catch (error) {
        throw error;
    }
}

async function updateAnimal(id, animal){
    try {
        const updatedAnimal = await Animal.findByIdAndUpdate(id, animal);
        return updatedAnimal;
    } catch (error) {
        throw error;
    }
}

async function deleteAnimal(id) {
    try {
      const deletedAnimal = await Animal.findByIdAndDelete(id);
      return deletedAnimal;
    } catch (error) {
      throw error;
    }
}

module.exports = {
    getAllAnimals,
    getSpecificAnimal,
    getSpecificAnimalByName,
    getAllAnimalsByClass,
    createAnimal,
    updateAnimal,
    deleteAnimal,
}