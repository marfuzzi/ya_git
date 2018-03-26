const catalogHelper = require('../helpers/catalogHelper');

const getCatalog =(req, res) => {
    return catalogHelper.getList(req.params.name)
        .then((data) => {
            res.render('catalog', {fileList: data});
        }).catch((err) => {
            res.render('error', {
                message: 'Такой дирректории не существует',
            });
        });
};
module.exports = {getCatalog};
