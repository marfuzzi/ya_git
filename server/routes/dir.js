/* eslint new-cap: ["error", { "capIsNew": false }]*/
const router = require('express').Router();
const dirController = require('../controllers/dirController');

router.get('/:name', (req, res) => dirController.getDir(req, res)); /////////lkjskljlkjf

module.exports = router;

