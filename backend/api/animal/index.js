const { Router } = require("express");

const {
    getAllAnimalsHandler,
    createAnimalHandler,
    getAnimalByIdHandler,
    getAnimalByNameHandler,
    updateAnimalHandler,
} = require('./animal.controller');

const router = Router();

router.get('/', getAllAnimalsHandler);
router.get('/:id', getAnimalByIdHandler);
router.get('/specific/:name', getAnimalByNameHandler);
router.post('/', createAnimalHandler);
router.patch('/:id', updateAnimalHandler);

module.exports = router;