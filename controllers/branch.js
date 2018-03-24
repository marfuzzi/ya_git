const myRepo = require('../config/config').pathToFile;

const execProcess = require('../helpers/execProcess');
const getListBranch= require('../helpers/getListBranch');

const getBranch = (req, res) => {
    execProcess('git branch', {cwd: `${myRepo}`})
        .then((data) => {
            res.render('index', {branches: getListBranch(data)});
        }).catch((err) => {
            res.render('error', {
                message: 'Такой ветки не существует',
            });
        });
};

module.exports = {getBranch};
