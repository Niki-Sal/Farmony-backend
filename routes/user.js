const router = require('express').Router();
const ctrl = require('../controllers');
const passport = require('passport');

router.get('/', ctrl.user.index);
router.get('/profile', passport.authenticate('jwt', { session: false }), ctrl.user.profile); // session: false ???
router.get('/test', ctrl.user.test);
router.get('/:id', ctrl.user.show);
router.put('/:id', ctrl.user.update);
router.post('/register', ctrl.user.register);
router.post('/login', ctrl.user.login);

module.exports = router;