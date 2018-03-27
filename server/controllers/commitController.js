const childProcess = require('../helpers/childProcess');
const commit = require('../helpers/commit');

class CommitController {

    constructor() {
        this.childProcess = childProcess;
    }

    getCommit(req, res) {
        const branch = req.params.name;
        // получаем хеши коммитов
        this.childProcess.getCommit(branch)
            // преобразуем хеши коммитов в строку
            .then((data) => {
                return commit.getCommitHashes(data);
            })
            // получаем информацию по хешам коммитов
            .then((hashes) => {
                return this.childProcess.showDataCommit(hashes);
            })
            // преобразуем информацию по каждому хешу в объект
            .then((infoHashes) => {
                return commit.getCommitDataFromString(infoHashes);
            }).then((data) => {
                res.render('commit', {hashes: data});
            }).catch((err) => {
                res.render('error', {
                    message: 'Такого коммита не существует'
                });
            });
    }
}

const commitController = new CommitController();

module.exports = commitController;
