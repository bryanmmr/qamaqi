const animal = require('./api/animal')
const order = require('./api/order')
const upload = require('./upload')

function routes(app) {
    app.use('/api/animal', animal)
    app.use('/api/order', order)
    app.use('/upload', upload)
}

module.exports = routes