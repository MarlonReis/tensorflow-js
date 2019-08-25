'use strict'

const router = require('./routers')
const service = require('../services/sessao2.action.services')

router.post('/', service.action);


module.exports = router
