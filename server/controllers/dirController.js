const childProcess = require('../helpers/childProcess');
const dir = require('../helpers/dir');

class DirController {

    constructor() {
        this.childProcess = childProcess;
    }

    getDir(req, res) {
        const hash = req.params.name;
        this.childProcess.getDirTree(hash)
            .then((data) => {
                return dir.getTypeHashName(data);
            }).then((data) => {
                res.render('dir', {fileList: data});
            }).catch((err) => {
                res.render('error', {
                    message: 'Такой дирректории не существует',
                });
            });
    }
}

const dirController = new DirController();

module.exports = dirController;
