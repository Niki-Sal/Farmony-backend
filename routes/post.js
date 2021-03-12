const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/', ctrl.post.index)
router.get('/:id', ctrl.post.show)
router.post('/', ctrl.post.create)
router.post('/:id', ctrl.post.update)


module.exports = router;