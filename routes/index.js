const express = require('express');
const router = express.Router();

const config = require('../config/config');
const myRepo = config.pathToFile;

const execProcess = require('./execProcess');

router.get('/', (req, res) => {
    execProcess(`cd ${myRepo} && git branch`)
    .then((stdout)=>{
        res.render('index', {branches: getBranches(stdout)})
    }).catch((err) => {
        // ??? рендер ошибки
    })
});

const getBranches = (stdout) => {
    return stdout.split('\n').filter(Boolean).map((branch)=>{
        return branch.replace('*', '').trim();
    })
};

module.exports = router;
