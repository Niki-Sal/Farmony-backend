const router = require('express').Router();
const ctrl = require('../controllers')
const passport = require('passport')

router.get('/', ctrl.holistic.index)
router.get('/:id', ctrl.holistic.show)
router.post('/', passport.authenticate('jwt', { session: false }), ctrl.holistic.create)
router.put('/:id', ctrl.holistic.update);

module.exports = router;