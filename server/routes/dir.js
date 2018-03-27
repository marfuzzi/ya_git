/* eslint new-cap: ["error", { "capIsNew": false }]*/
const router = require('express').Router();
const dirController = require('../controllers/dirController');

router.get('/:name', dirController.getDir);

module.exports = router;

