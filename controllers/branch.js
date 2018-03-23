const router = require('express').Router();
const myRepo = require('../config/config').pathToFile;

const execProcess = require('../helpers/execProcess');
const listBranch = require('../helpers/listBranch');

const getBranch = (req, res) => {
    execProcess(`git branch`, {cwd: `${myRepo}`})
    .then((data) => {
        res.render('index', {branches: listBranch(data)})
    }).catch((err) => {
        // TODO рендер ошибки
    })
};

module.exports = { getBranch };
