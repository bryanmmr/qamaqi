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

const {
    authorizeAccessToken,
    checkCreatePermissions,
    checkPermissions
} = require('../role/role.service')

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

/**
 * @openapi
 * /api/animal/:
 *  post:
 *   tags:
 *   - animals
 *   description: Create new Animal - Require authorized token to create new entries
 *   responses:
 *    201:
 *      description: Created animal
 */
router.post('/',authorizeAccessToken, checkCreatePermissions, createAnimalHandler);

/**
 * @openapi
 * /api/animal/:id:
 *  patch:
 *   tags:
 *   - animals
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: Patch element by id
 *   description: Update Animal - Require authorized token to update the entry
 *   responses:
 *    200:
 *      description: Updated animal
 */
router.patch('/:id',authorizeAccessToken, updateAnimalHandler);

/**
 * @openapi
 * /api/animal/:id:
 *  delete:
 *   tags:
 *   - animals
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: Delete element by id
 *   description: Delete Animal - Require authorized token to delete the entry
 *   responses:
 *    200:
 *      description: Deleted animal
 */
router.delete('/:id',authorizeAccessToken, checkCreatePermissions, deleteAnimalHandler)

module.exports = router;