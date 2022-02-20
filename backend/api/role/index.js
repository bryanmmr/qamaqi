const { Router } = require("express")

const {
    getRoleHandler,
} = require('./role.controller')
const {
    authorizeAccessToken,
    checkPermissions,
} = require('./role.service')

const router = Router()

router.get('/', authorizeAccessToken, checkPermissions, getRoleHandler)

module.exports = router;