const router = require('express').Router();
const ctrl = require('../controllers')
const passport = require('passport')

router.get('/', ctrl.trade.index)
router.post('/', passport.authenticate('jwt', { session: false }), ctrl.trade.create)

module.exports = router;