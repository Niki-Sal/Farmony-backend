const router = require('express').Router();
const ctrl = require('../controllers')
const passport = require('passport')

router.get('/', ctrl.holistic.index)
router.post('/', passport.authenticate('jwt', { session: false }), ctrl.holistic.create)

module.exports = router;