const express = require('express');
const router = express.Router();

const config = require('../config/config');
const myRepo = config.pathToFile;

const execProcess = require('../helpers/execProcess');
const controllerCommit = require('../controllers/commit')
const controller = require('../controllers/data')

router.get('/:file', controller.getData);

module.exports = router;
