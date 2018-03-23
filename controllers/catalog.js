const router = require('express').Router();
const myRepo = require('../config/config').pathToFile;

const spawnProcess = require('../helpers/spawnProcess');
const strToArray = require('../helpers/strToArray');
const getList = require('../helpers/getList');

const getFile =(req, res) => {
    console.log('!!!!!!!!!!!!!');
        getHashTree(req)
        .then((treeHash) => {
           return getList(treeHash)
        })
        .then((data)=> {
            res.render('catalog', { fileList: data})
        }).catch((err) => {
            // ??? рендер ошибки
        })
};
const getHashTree = (req) => {
    return spawnProcess('git', ['cat-file', '-p', `${req.params['name']}`], {cwd: `${myRepo}`})
    .then((stdout) => {return strToArray(stdout)[0].split(' ')[1]});
}
module.exports = {getFile};
