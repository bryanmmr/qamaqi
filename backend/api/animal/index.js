/**
 * Animal Endpoint
 */
const { Router } = require("express");

const {
    getAllAnimalsHandler,
    createAnimalHandler,
    getAnimalByIdHandler,
    getAnimalByNameHandler,
    getAnimalByClassHandler,
    updateAnimalHandler,
    deleteAnimalHandler,
} = require('./animal.controller');

const router = Router();

/**
 * @openapi
 * /api/animal:
 *  get:
 *   tags:
 *   - animals
 *   description: Get All the animals with a pagination group by ten
 *   parameters:
 *     - in: query
 *       name: page
 *       schema:
 *         type: integer
 *       description: Pagination of all animals by 10 documents each 
 *   responses:
 *    200:
 *      description: Get 10 animals from everyone
 */
router.get('/', getAllAnimalsHandler);

/**
 * @openapi
 * /api/animal/:id:
 *  get:
 *   tags:
 *   - animals
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: Id of the animal
 *   description: Get Specific Animal By its ID
 *   responses:
 *    200:
 *      description: Get animal by Id
 */
router.get('/:id', getAnimalByIdHandler);

/**
 * @openapi
 * /api/animal/specific/:name:
 *  get:
 *   tags:
 *   - animals
 *   parameters:
 *     - in: path
 *       name: name
 *       required: true
 *       schema:
 *         type: string
 *       description: Name of the animal
 *   description: Get Specific Animal By its name
 *   responses:
 *    200:
 *      description: Get animal by name 
 */
router.get('/specific/:name', getAnimalByNameHandler);

/**
 * @openapi
 * /api/animal/class/:name:
 *  get:
 *   tags:
 *   - animals
 *   parameters:
 *     - in: path
 *       name: animalClass
 *       required: true
 *       schema:
 *         type: string
 *       description: By now Mammalia and Aves as the two only classes by now
 *     - in: query
 *       name: page
 *       schema:
 *         type: integer
 *       description: Pagination of animals by class 10 documents each 
 *   description: Get all animals by class
 *   responses:
 *    200:
 *      description: Get animals by class 
 */
router.get('/class/:animalClass', getAnimalByClassHandler);

router.post('/', createAnimalHandler);
router.patch('/:id', updateAnimalHandler);
router.delete('/:id', deleteAnimalHandler)

module.exports = router;