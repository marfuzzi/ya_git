const childProcess = require('../helpers/childProcess');
const branch = require('../helpers/branch');

class BranchController {

    constructor() {
        this.childProcess = childProcess;
    }

    getBranch(req, res) {
        this.childProcess.getBranch()
            .then((data) => {
                res.render('index', {branches: branch.getListBranch(data)});
            }).catch((err) => {
                res.render('error', {
                    message: 'Такого репозитория не существует',
                });
            });
    }
}

const branchController = new BranchController();

module.exports = branchController;
