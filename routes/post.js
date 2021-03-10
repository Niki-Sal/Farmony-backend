const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/:id', ctrl.post.show)


module.exports = router;