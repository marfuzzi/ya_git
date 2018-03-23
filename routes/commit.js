const express = require('express');
const router = express.Router();

const config = require('../config/config');
const myRepo = config.pathToFile;

const execProcess = require('../helpers/execProcess');
const spawnProcess = require('../helpers/spawnProcess');

const strToArray = require('../helpers/strToArray');
const getList = require('../helpers/getList');
const controllerFile = require('../controllers/catalog')
const controllerCommit = require('../controllers/commit');

//router.get('/commit', controllerCommit.getCommit);


router.get('/:hash', (req, res) => {
    getList(`${req.params['hash']}`)
    .then((data)=> {
        res.render('catalog', { fileList: data})
    }).catch((err) => {
        // ??? рендер ошибки
    })
});
module.exports = router;
