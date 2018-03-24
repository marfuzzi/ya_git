const myRepo = require('../config/config').pathToFile;
const execProcess = require('../helpers/execProcess');

const getFile = (req, res) => {
    execProcess(`git cat-file -p ${req.params.file}`, {cwd: `${myRepo}`})
        .then((body) => {
            res.render('file', {data: body});
        }).catch((error) => {
            res.render('error', {
                message: 'Такого файла не существует',
            });
        });
};

module.exports = {getFile};
