const { Router } = require('express')
const multer = require('multer')

const {
    uploadSingleHandler
} = require('./upload.controller')

const router = Router()
const upload = multer({ dest: './temp'})

router.post('/image', upload.single('image'), uploadSingleHandler)

module.exports = router