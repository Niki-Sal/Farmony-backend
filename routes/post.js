const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/', ctrl.post.index)
router.get('/:id', ctrl.post.show)
router.post('/', passport.authenticate('jwt', { session: false }), ctrl.post.create)
router.put('/:id', ctrl.post.update)


module.exports = router;