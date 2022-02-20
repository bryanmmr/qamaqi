const { Router } = require("express")

const {
    getRoleHandler,
    createAnimalHandler,
} = require('./role.controller')
const {
    authorizeAccessToken,
    checkPermissions,
    checkCreatePermissions,
} = require('./role.service')

const router = Router()

router.get('/', authorizeAccessToken, checkPermissions, getRoleHandler)
router.get('/create', authorizeAccessToken, checkCreatePermissions, createAnimalHandler)

module.exports = router;