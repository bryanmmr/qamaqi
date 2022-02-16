const { Router } = require("express")

const {
    getAllUsersHandler,
    getUserHandler,
    createUserHandler,
} = require('./user.controller')

const router = Router()

router.get('/', getAllUsersHandler)
router.get('/:id', getUserHandler)
router.post('/', createUserHandler);

module.exports = router;