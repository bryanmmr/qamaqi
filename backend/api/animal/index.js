/**
 * Animal Endpoint
 */
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

/**
 * @openapi
 * /api/animal:
 *  get:
 *   tags:
 *   - animals
 *   description: Get All the animals with a pagination group by ten
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
 *   description: Get Specific Animal By its name
 *   responses:
 *    200:
 *      description: Get animal by name 
 */
router.get('/specific/:name', getAnimalByNameHandler);

/**
 * @openapi
 * /api/animal:
 *  post:
 *   tags:
 *   - animals
 *   description: Create a new Animal using the specified info
 *   responses:
 *    200:
 *      description: Craete a new animal
 */
router.post('/', createAnimalHandler);

/**
 * @openapi
 * /api/animal/:id:
 *  patch:
 *   tags:
 *   - animals
 *   description: Update Animal using its Id to choose the specific animal
 *   responses:
 *    200:
 *      description: Patch animal by id
 */
router.patch('/:id', updateAnimalHandler);

/**
 * @openapi
 * /api/animal/:id:
 *  delete:
 *   tags:
 *   - animals
 *   description: Delete a documented animal
 *   responses:
 *    200:
 *      description: Deleted animal
 */
router.delete('/:id', deleteAnimalHandler)

module.exports = router;