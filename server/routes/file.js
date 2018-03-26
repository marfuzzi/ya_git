/* eslint new-cap: ["error", { "capIsNew": false }]*/
const router = require('express').Router();
const controllerFile = require('../controllers/file');

router.get('/:file', controllerFile.getFile);

module.exports = router;
