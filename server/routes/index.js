/* eslint new-cap: ["error", { "capIsNew": false }]*/
const router = require('express').Router();
const branchController = require('../controllers/branchController');
const commitController = require('../controllers/commitController');
const dirController = require('../controllers/dirController');

router.get('/', branchController.getBranch);
router.get('/:name/commit', commitController.getCommit);
router.get('/:name/dir', dirController.getDir);

module.exports = router;
