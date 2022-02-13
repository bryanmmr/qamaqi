const animal = require('./api/animal')
const order = require('./api/order')

function routes(app) {
    app.use('/api/animal', animal)
    app.use('/api/order', order)
}

module.exports = routes