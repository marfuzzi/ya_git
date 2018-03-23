const getList = require('../helpers/getList');

const getCatalog =(req, res) => {
    return getList(req.params.name)
    .then((data)=> {
        res.render('catalog', { fileList: data})
    }).catch((err) => {
        res.render('error', {
            message: 'Такой дирректории не существует',
        });
    })
};
module.exports = { getCatalog };
