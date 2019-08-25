'use strict'

const router = require('./routers')
router.get('/', function(req, res, next) {
    res.render('index');
  });
  
  module.exports = router;