const dir = require('../helpers/dir');

const getDir =(req, res) => {
    return dir.getDirList(req.params.name)
        .then((data) => {
            res.render('dir', {fileList: data});
        }).catch((err) => {
            res.render('error', {
                message: 'Такой дирректории не существует',
            });
        });
};
module.exports = {getDir};
