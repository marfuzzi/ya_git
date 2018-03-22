const express = require('express');
const router = express.Router();

const config = require('../config/config');
const myRepo = config.pathToFile;

const execProcess = require('./execProcess');
const spawnProcess = require('./spawnProcess');

const streamToArray = require('./streamToArray');

router.get('/:hash', (req, res) => {
    spawnProcess('git', ['ls-tree', `${req.params['hash']}`], {cwd: `${myRepo}`})
    .then((stream) => {
        return streamToArray(stream).filter(e => e !== '').map((str)=> {
           const arr = str.split(' ');
           const key = arr[1];
           const value = arr[2].split('\t')[1]
           const obj = {};

            obj[key]= value;
            return obj
        })
    }).then((data)=> {
        res.render('commit', { fileList: data})
    }).catch((err) => {
        // ??? рендер ошибки
    })
});
module.exports = router;
