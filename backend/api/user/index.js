const { Router } = require("express")
const { isAuthenticated } = require("../../auth/auth.services")

const {
    getAllUsersHandler,
    getUserHandler,
    createUserHandler,
} = require('./user.controller')

const router = Router()

router.get('/', isAuthenticated(), getAllUsersHandler)
router.get('/:id', getUserHandler)
router.post('/', createUserHandler);

module.exports = router;