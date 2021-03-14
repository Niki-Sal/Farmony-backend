const router = require('express').Router();
const ctrl = require('../controllers')
const passport = require('passport')

router.get('/', ctrl.volunteer.index)
router.get('/:id', ctrl.volunteer.show)
router.post('/', passport.authenticate('jwt', { session: false }), ctrl.volunteer.create)
router.put('/:id', ctrl.volunteer.update);


module.exports = router;