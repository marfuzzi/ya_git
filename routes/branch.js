const express = require('express');
const router = express.Router();

const controllerCommit = require('../controllers/commit')
const controllerFile = require('../controllers/catalog')

router.get('/:name/commit', controllerCommit.getCommit);
router.get('/:name/catalog', controllerFile.getFile) ;

module.exports = router;
