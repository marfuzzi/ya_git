const express = require('express');
const router = express.Router();

const config = require('../config/config');
const myRepo = config.pathToFile;

const execProcess = require('../helpers/execProcess');
const controllerCommit = require('../controllers/commit')
const controllerCatalog = require('../controllers/catalog')

router.get('/:name', controllerCatalog.getFile);

module.exports = router;

