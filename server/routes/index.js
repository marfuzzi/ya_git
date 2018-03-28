/* eslint new-cap: ["error", { "capIsNew": false }]*/
const router = require('express').Router();
const branchController = require('../controllers/branchController');
const commitController = require('../controllers/commitController');
const dirController = require('../controllers/dirController');

router.get('/', (req, res) => branchController.getCommit(req, res));
router.get('/:name/commit', (req, res) => commitController.getCommit(req, res));
router.get('/:name/dir', (req, res) => dirController.getDir(req, res));

module.exports = router;
