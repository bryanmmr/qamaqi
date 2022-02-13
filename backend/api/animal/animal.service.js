const Animal = require('./animal.model');

async function getAllAnimals(){
    try{
        const animals = await Animal.find();
        return animals
    } catch(error){
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

module.exports = {
    getAllAnimals,
    createAnimal,
}