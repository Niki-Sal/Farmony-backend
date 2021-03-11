const router = require('express').Router();
const ctrl = require('../controllers')

router.get('/', ctrl.buy.index)

module.exports = router;