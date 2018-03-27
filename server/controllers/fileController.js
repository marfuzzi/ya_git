const childProcess = require('../helpers/childProcess');

class FileController {

    constructor() {
        this.childProcess = childProcess;
    }

    getDataFile(req, res) {
        const file = req.params.file;
        this.childProcess.getDataFile(file)
            .then((body) => {
                res.render('file', {data: body});
            }).catch((error) => {
                res.render('error', {
                    message: 'Файл невозможно отобразить',
                });
            });
    }
}

const fileController = new FileController();

module.exports = fileController;
