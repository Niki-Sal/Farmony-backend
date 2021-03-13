const router = require('express').Router();
const ctrl = require('../controllers')
const passport = require('passport')

router.get('/', ctrl.trade.index)
router.get('/:id', ctrl.trade.show)
router.post('/', passport.authenticate('jwt', { session: false }), ctrl.trade.create)
router.put('/:id', ctrl.trade.update);

module.exports = router;