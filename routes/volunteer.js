const router = require('express').Router();
const ctrl = require('../controllers')
const passport = require('passport')

router.get('/', ctrl.volunteer.index)
router.post('/', passport.authenticate('jwt', { session: false }), ctrl.volunteer.create)

module.exports = router;