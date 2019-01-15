const express = require('express')

module.exports = function(server) {
    const router = express.Router()
    server.use('/api', router)
    
    const formService = require('../form/formService')
    module.exports = formService.register(router, '/expenses')
}