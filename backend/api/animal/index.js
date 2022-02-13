const { Router } = require("express");

const {
    getAllAnimalsHandler,
    createAnimalHandler,
    getAnimalHandler
} = require('./animal.controller');
const { getSpecificAnimal } = require("./animal.service");

const router = Router();

router.get('/', getAllAnimalsHandler);
router.get('/:id', getAnimalHandler);
router.post('/', createAnimalHandler);

module.exports = router;