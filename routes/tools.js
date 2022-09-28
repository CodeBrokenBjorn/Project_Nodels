const controller = require('../controllers/tools');
var express = require('express');
var router = express.Router();

router.get('/', controller.getAll);
router.get('/desc/:value', controller.getByDesc);
router.get('/:id', controller.getById);

router.post('/', controller.ObjectCreate);
router.delete('/', controller.ObjectDelete);
router.put('/',controller.ObjectUpdate);

module.exports = router;