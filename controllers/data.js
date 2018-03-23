const router = require('express').Router();
const myRepo = require('../config/config').pathToFile;

const execProcess = require('../helpers/execProcess');
const listBranch = require('../helpers/listBranch');

const getData = (req, res) => {
    execProcess(`git cat-file -p ${req.params.file}`, {cwd: `${myRepo}`})
   .then((body) => {
        console.log(body);
        res.render('info', { data: body})
     }).catch((error) => {
         console.log(error);
        // renderError({res, router: 'blob', error});
     });
};

module.exports = { getData };
