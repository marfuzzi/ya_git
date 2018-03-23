const router = require('express').Router();
const myRepo = require('../config/config').pathToFile;

const spawnProcess = require('../helpers/spawnProcess');
const strToArray = require('../helpers/strToArray');
const getList = require('../helpers/getList');

const getFile =(req, res) => {
        return getList(req.params.name)
        .then((data)=> {
            res.render('catalog', { fileList: data})
        }).catch((err) => {
            // ??? рендер ошибки
        })
};
module.exports = {getFile};
