const { Router } = require("express");

const {
    getAllAnimalsHandler,
    createAnimalHandler,
    getAnimalByIdHandler,
    getAnimalByNameHandler,
    updateAnimalHandler,
    deleteAnimalHandler,
} = require('./animal.controller');

const router = Router();

router.get('/', getAllAnimalsHandler);
router.get('/:id', getAnimalByIdHandler);
router.get('/specific/:name', getAnimalByNameHandler);
router.post('/', createAnimalHandler);
router.patch('/:id', updateAnimalHandler);
router.delete('/:id', deleteAnimalHandler)

module.exports = router;