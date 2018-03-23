const router = require('express').Router();
const myRepo = require('../config/config').pathToFile;

const controller = require('../controllers/branch');
const controllerFile = require('../controllers/catalog');
const controllerCommit = require('../controllers/commit');

router.get('/', controller.getBranch);


module.exports = router;
