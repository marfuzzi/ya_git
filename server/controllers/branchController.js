const myRepo = require('../config/config').pathToFile;
const execProcess = require('../utils/execProcess');
const branch = require('../helpers/branch');

const getBranch = (req, res) => {
    execProcess('git branch', {cwd: `${myRepo}`})
        .then((data) => {
            res.render('index', {branches: branch.getListBranch(data)});
        }).catch((err) => {
            res.render('error', {
                message: 'Такого репозитория не существует',
            });
        });
};

module.exports = {getBranch};
