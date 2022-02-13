const { Router } = require("express");

const {
    getAllAnimalsHandler,
    createAnimalHandler
} = require('./animal.controller');

const router = Router();

router.get('/', getAllAnimalsHandler);
router.post('/', createAnimalHandler);

module.exports = router;