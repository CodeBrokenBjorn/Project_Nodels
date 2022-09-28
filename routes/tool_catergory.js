const controller = require('../controllers/tool_catergory');
var express = require('express');
var router = express.Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);



module.exports = router;