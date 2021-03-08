const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.garden.index);
router.get('/:id', ctrl.garden.show);
router.post('/', ctrl.garden.create);
router.put('/:id', ctrl.garden.update);
router.delete('/:id', ctrl.garden.destroy);

// exports
module.exports = router;