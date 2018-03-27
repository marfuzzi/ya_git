/* eslint new-cap: ["error", { "capIsNew": false }]*/
const router = require('express').Router();
const fileController = require('../controllers/fileController');

router.get('/:file', (req, res) => fileController.getDataFile(req, res));

module.exports = router;
