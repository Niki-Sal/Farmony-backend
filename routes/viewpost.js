const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/:id', ctrl.viewpost.show)


module.exports = router;