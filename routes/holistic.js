const router = require('express').Router();
const ctrl = require('../controllers')

router.get('/', ctrl.holistic.index)

module.exports = router;