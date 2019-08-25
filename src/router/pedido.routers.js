'use strict'

const router = require('./routers')
const service = require('../services/pedido.service')

router.post('/pedidos', service.create);


module.exports = router