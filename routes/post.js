const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/', ctrl.post.index)
router.get('/:id', ctrl.post.show)


module.exports = router;