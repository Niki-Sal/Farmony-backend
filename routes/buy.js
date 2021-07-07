const router = require('express').Router();
const ctrl = require('../controllers')
const passport = require('passport')

router.get('/', ctrl.buy.index)
router.get('/:id', ctrl.buy.show)
router.post('/', passport.authenticate('jwt', { session: false }), ctrl.buy.create)
router.put('/:id', ctrl.buy.update);

module.exports = router;